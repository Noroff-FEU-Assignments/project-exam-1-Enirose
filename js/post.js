const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const blogPost = document.querySelector(".blog-post");
const id = params.get("id");

const url = "https://blog-api.enirosehellum.com/wp-json/wp/v2/posts/?_embed" + "id";
// console.log(url);

async function fetchApi() {

    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);

        // blogPost.innerHTML = "";

        blogPost.innerHTML +=
            `<div class="blog-post">
                    <img src="${result[i]._embedded[" wp:featuredmedia"][0].source_url}" alt="Blog"</img>
                    <h2>${result[i].title.rendered}</h2>
                    <p>${result[i].excerpt.rendered}</p>
                </div >`

    }
    catch (error) {
        console.log("An error occured");
        blogPost.innerHTML = errorMessage("An error occured while fetching the results");
    }
}

fetchApi();