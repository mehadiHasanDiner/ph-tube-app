// loading category button
function loadCategoryBtn() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategoryBtn(data.categories));
}

// displaying category button
const displayCategoryBtn = (categories) => {
  const categoryContainerDiv = document.getElementById("category-container");
  categories.forEach((cate) => {
    const buttonDiv = document.createElement("div");
    buttonDiv.innerHTML = `
        <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cate.category}</button>
    `;
    categoryContainerDiv.append(buttonDiv);
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
  const displayVideosDiv = document.getElementById("display-videos");
};

loadCategoryBtn();
