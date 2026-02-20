//removing active class from all Btn
const removeActiveClass = () => {
  const activeBtn = document.getElementsByClassName("active");
  for (let btn of activeBtn) {
    btn.classList.remove("active");
  }
};

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
        <button id="btn-${cate.category_id}" onclick = "loadVideosByCategory(${cate.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cate.category}</button>
    `;
    categoryContainer.append(buttonDiv);
  });
};

// loading videos by category and active class functionality
const loadVideosByCategory = (categoryId) => {
  fetch(
    `https://openapi.programming-hero.com/api/phero-tube/category/${categoryId}`
  )
    .then((res) => res.json())
    .then((data) => {
      removeActiveClass();
      const clickedButton = document.getElementById(`btn-${categoryId}`);
      clickedButton.classList.add("active");
      displayVideoByCategory(data.category);
    });
};

// displayVideoByCategory
const displayVideoByCategory = (videosByCategory) => {
  const displayVideosContainer = document.getElementById("display-videos");
  if (videosByCategory.length === 0) {
    displayVideosContainer.innerHTML = `
    <div class="py-20 col-span-full flex flex-col justify-center items-center text-center">
            <img src="./assets/Icon.png" alt="">
            <h2 class="text-2xl font-bold">Oops!! Sorry, There is no content here</h2>
        </div>
    `;
  } else {
    displayVideos(videosByCategory);
  }
};

// loading videos
// button all functionality
function loadVideos() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => {
      removeActiveClass();
      const btnAll = document.getElementById("btn-all");
      btnAll.classList.add("active");
      displayVideos(data.videos);
    });
}

// displaying videos
const displayVideos = (videos) => {
  console.log(videos);
  const displayVideosContainer = document.getElementById("display-videos");
  displayVideosContainer.innerHTML = "";
  videos.forEach((video) => {
    const displayVideoDiv = document.createElement("div");
    displayVideoDiv.innerHTML = `
    <div class="card">
            <figure class="relative">
                <img class="w-full h-[150px] object-cover" src="${video.thumbnail}" alt="Shoes" />
                <span class="bg-[#171717] text-white text-sm absolute bottom-2 right-2 rounded px-2">3hrs 56 min
                    ago</span>
            </figure>
            <div class="flex py-5">
                <div class="profile">
                    <div class="avatar">
                        <div class="ring-primary ring-offset-base-100 w-5 rounded-full ring-2 ring-offset-2">
                            <img src="${video.authors[0].profile_picture}" />
                        </div>
                    </div>
                </div>
                <div class="intro ml-4 space-y-0.5">
                    <div>
                        <h2 class="font-bold ">${video.title}</h2>
                    </div>
                    <div class="flex gap-1">
                        <p class="text-sm text-gray-400"> ${video.authors[0].profile_name} </p><img class="w-5 h-5"
                            src="https://img.icons8.com/?size=100&id=102561&format=png&color=000000" alt=""></>
                    </div>
                    <div>
                        <p class="text-gray-400 text-sm">${video.others.views} views</p>
                    </div>
                </div>

            </div>
        </div>
    `;
    displayVideosContainer.append(displayVideoDiv);
  });
};

loadCategoryBtn();
