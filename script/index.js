function loadCategoryBtn() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategoryBtn(data.categories));
}

const displayCategoryBtn = (categories) => {
  const categoryContainerDiv = document.getElementById("category-container");
  console.log(categories);
  categories.forEach((cate) => {
    console.log(cate.category);
    categoryContainerDiv.innerHTML = `
    <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">All</button>
    `;
  });
};

loadCategoryBtn();
