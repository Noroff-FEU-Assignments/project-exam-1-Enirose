
const url = "https://blog-api.enirosehellum.com/wp-json/wp/v2/posts?_embed";
const nextPage = "https://blog-api.enirosehellum.com/wp-json/wp/v2/posts?_embed&page=2";
const blogPost = document.querySelector(".blog-post");
const viewBtn = document.querySelector(".cta")


async function fetchApi() {

    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);

        // viewBtn.onclick = function () {
        //     fetchApi(nextPage);
        //     viewBtn.style.display = "none";
        // }

        blogPost.innerHTML = "";

        for (let i = 0; i < result.length; i++) {
            blogPost.innerHTML += `<div class="blog-post">
                <div class="blog">
                    <a href="post.html?id=${result[i].id}">
                    <img src="${result[i]._embedded["wp:featuredmedia"][0].source_url}" alt="Blog">
                    <h2>${result[i].title.rendered}</h2>
                    </a>
                </div>
            </div>`;
        }
    }
    catch (error) {
        console.log("An error occured");
        blogPost.innerHTML = errorMessage("An error occured while fetching the results");
    }
}

fetchApi();

