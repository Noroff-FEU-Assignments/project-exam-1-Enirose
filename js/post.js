const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const blogPost = document.querySelector(".blog-post");
const id = params.get("id");
// console.log(id);

const loader = document.querySelector(".loader");
const url = `https://blog-api.enirosehellum.com/wp-json/wp/v2/posts/${id}?_embed`;
// console.log(url)

async function fetchApi() {

    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        document.title = `${result.title.rendered}`;

        loader.classList.remove("loader");

        // blogPost.innerHTML = "";

        blogPost.innerHTML +=
            `<div class = "blog-post">
                <div class = "blog">
                    <img src="${result._embedded["wp:featuredmedia"][0].source_url}" alt = "Blog's photo"></img>
                    <h2> ${result.title.rendered}</h2 >
                    <p>${result.excerpt.rendered}</p>
                </div>
                <a href="blog.html" class="cta"> Back </a>
            </div>`

    }
    catch (error) {
        console.log("error");
        blogPost.innerHTML = errorMessage("An error occured while fetching the results");
    }


    const apiImgs = document.querySelector(".blog img");
    const myModal = document.querySelector(".modal"); //wrapper
    const modalImg = document.querySelector(".modal-img");
    const span = document.querySelector(".close");

    // click to make large image
    apiImgs.onclick = function (event) {
        myModal.style.display = "block";
        modalImg.src = event.target.src;
    }
    // close large image
    span.onclick = function () {
        myModal.style.display = "none";
    }

}

fetchApi();

