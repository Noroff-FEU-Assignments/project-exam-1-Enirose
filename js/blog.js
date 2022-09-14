const url = `https://blog-api.enirosehellum.com/wp-json/wp/v2/posts?_embed`;
const blogPost = document.querySelector(".blog-post");

// fetching Blog Api

async function fetchApi(url) {
    try {
        const response = await fetch(url);
        const details = await response.json();
        console.log(details);
        createBlog(details);
    }
    catch (error) {
        console.log(error);
    };
}

fetchApi();
function createBlog(details) {
    blogPost.innerHTML = `<div class="blog">
                    <a href="post.html"><img src="${json[i].images[0].thumbnail}" alt="Blog Picture">
                        <h2>${json.title.rendered}</h2>
                        <p>${json.excerpt.rendered}</p>
                    </a>
                </div>`;
}


// async function fetchApi(url) {
//     const res = await fetch(url);
//     const blogs = await res.json();

//     createBlog

//     blogPost.innerHTML = "";

//     for (let i = 0; i < json.lenght; i++) {
//         blogPost.innerHTML += `<div class="blog">
//                     <a href="post.html"><img src="${json[i].images[0].thumbnail}" alt="Blog Picture">
//                         <h2>${json.title.rendered}</h2>
//                         <p>${json.excerpt.rendered}</p>
//                     </a>
//                 </div>`;
//     };

// }

// fetchApi();
