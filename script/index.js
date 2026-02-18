// loading category button
function loadCategoryBtn() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategoryBtn(data.categories));
}

// displaying category button
const displayCategoryBtn = (categories) => {
  const categoryContainer = document.getElementById("category-container");
  categories.forEach((cate) => {
    const buttonDiv = document.createElement("div");
    buttonDiv.innerHTML = `
        <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cate.category}</button>
    `;
    categoryContainer.append(buttonDiv);
  });
};

// loading videos
function loadVideos() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos));
}

// displaying videos
const displayVideos = (videos) => {
  console.log(videos);
  const displayVideosContainer = document.getElementById("display-videos");
  videos.forEach((video) => {
    const displayVideoDiv = document.createElement("div");
    displayVideoDiv.innerHTML = `
    <div className="card bg-base-100 shadow-sm">
            <figure>
                <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    `;
    displayVideosContainer.append(displayVideoDiv);
  });
};

loadCategoryBtn();
loadVideos();
