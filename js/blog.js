const url = "https://blog-api.enirosehellum.com/wp-json/wp/v2/posts";
const blogPost = document.querySelector(".blog-post");

async function fetchApi() {

    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);

        blogPost.innerHTML = "";

        for (let i = 0; i < result.length; i++) {
            blogPost.innerHTML += `<div class="blog-post">
                <div class="blog">
                    <a href="post.html?id=${result[i].id}"><img src="${result[i]._links["wp:featuredmedia"][0].href}" alt="Blog"</img>
                    <h2>${result[i].title.rendered}</h2>
                        <p>${result[i].excerpt.rendered}</p>
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