// const url = 'https://blog-api.enirosehellum.com/wp-json/wp/v2/posts?_embed';
// // let loadMore = 'https://blog-api.enirosehellum.com/wp-json/wp/v2/posts?per_page=20&_embed';
// const blogPost = document.querySelector(".blog-post");
// const viewBtn = document.querySelector(".cta")
// // const addMorePosts = "&per_page=20"

// async function fetchApi() {

//     try {
//         const response = await fetch(url);
//         const result = await response.json();
//         // console.log(result);

//         blogPost.innerHTML = "";

//         for (let i = 0; i < result.length; i++) {
//             blogPost.innerHTML += `<div class="blog-post">
//                 <div class="blog">
//                     <a href="post.html?id=${result[i].id}">
//                     <img src="${result[i]._embedded["wp:featuredmedia"][0].source_url}" alt="Blog">
//                     <h2>${result[i].title.rendered}</h2>
//                     </a>
//                 </div>
//             </div>`;
//         }
//     }
//     catch (error) {
//         console.log("An error occured");
//         blogPost.innerHTML = errorMessage("An error occured while fetching the results");
//     }
// }


// fetchApi();

// // ////////// adding view more posts///////////

// viewBtn.onclick = function () {
//     blogPost.innerHTML = "";
//     let loadMore = 'https://blog-api.enirosehellum.com/wp-json/wp/v2/posts?per_page=20&_embed';
//     console.log(loadMore);
//     fetchApi(loadMore);
//     viewBtn.style.display = "none";

// };

// const fetchPostsUrl = 'https://blog-api.enirosehellum.com/wp-json/wp/v2/posts?_embed';
// const loadMore = 'https://blog-api.enirosehellum.com/wp-json/wp/v2/posts?per_page=20&_embed';
// const blogPost = document.querySelector(".blog-post");
// const viewBtn = document.querySelector(".cta")
// // const addMorePosts = "&per_page=20"

// async function fetchApi(isLoadMore) {
//     let url = fetchPostsUrl
//     if (isLoadMore === true) {
//         url = loadMore
//     }
//     try {
//         const response = await fetch(url);
//         const result = await response.json();
//         // console.log(result);

//         if (isLoadMore === false) {
//             blogPost.innerHTML = "";
//         }


//         for (let i = 0; i < result.length; i++) {
//             blogPost.innerHTML += `<div class="blog-post">
//                 <div class="blog">
//                     <a href="post.html?id=${result[i].id}">
//                     <img src="${result[i]._embedded["wp:featuredmedia"][0].source_url}" alt="Blog">
//                     <h2>${result[i].title.rendered}</h2>
//                     </a>
//                 </div>
//             </div>`;
//         }
//     }
//     catch (error) {
//         console.log("An error occured");
//         blogPost.innerHTML = errorMessage("An error occured while fetching the results");
//     }
// }


// fetchApi(false);

// // ////////// adding view more posts///////////

// viewBtn.onclick = function () {
//     blogPost.innerHTML = "";
//     console.log(loadMore);
//     fetchApi(true);
//     viewBtn.style.display = "none";

// };

// const url = 'https://blog-api.enirosehellum.com/wp-json/wp/v2/posts?_embed';
// let loadMore = 'https://blog-api.enirosehellum.com/wp-json/wp/v2/posts?per_page=20&_embed';

let numberOfPagesToGet = 10;
let pageNumberToGet = 0;
const fetchPostsUrl = `https://blog-api.enirosehellum.com/wp-json/wp/v2/posts?per_page=${numberOfPagesToGet}&offset=${pageNumberToGet}&_embed`;
const blogPost = document.querySelector('.blog-post');
const viewBtn = document.querySelector('.cta');

async function fetchApi(isLoadMore) {
    //   numberOfPagesToGet = numberOfPagesToGet + 1;

    try {
        const response = await fetch(fetchPostsUrl);
        const result = await response.json();
        console.log(result);

        if (isLoadMore === false) {
            blogPost.innerHTML = '';
        }

        for (let i = 0; i < result.length; i++) {
            console.log(result[i]);
            blogPost.innerHTML += `
      <div class="blog-post" >
        <div class="blog">
            <a href="post.html?id=${result[i].id}">
                <img src="${result[i]._embedded['wp:featuredmedia'][0].source_url}" alt="Blog">
                <h2>${result[i].title.rendered}</h2>
            </a>
        </div>
    </div > `;
        }
    } catch (error) {
        console.log(error);
        console.log('An error occured');
        blogPost.innerHTML = errorMessage('An error occured while fetching the results');
    }
}

fetchApi(false);

// ////////// adding view more posts///////////

viewBtn.onclick = function () {
    pageNumberToGet++;
    fetchApi(true);
    viewBtn.style.display = 'none';
};
