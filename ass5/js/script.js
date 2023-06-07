// js/script.js
document.addEventListener("DOMContentLoaded", function () {
  // TODO: STEP 0: Fetch the category list from the server and process the response
  // Code to fetch and process the category list

  // TODO: STEP 1: Create the HTML for a single category item
  function createCategoryHtml(category) {
    var html =
      '<div class="col span-1-of-4">' +
      '<div class="box">' +
      '<img src="' +
      category.img_src +
      '" alt="' +
      category.name +
      '">' +
      '<h3>' +
      category.name +
      '</h3>' +
      '</div>' +
      '</div>';
    return html;
  }

  // TODO: STEP 2: Insert the category items into the DOM
  function insertCategories(categories) {
    var categoriesSection = document.getElementById("categories");
    var row = document.createElement("div");
    row.className = "row";

    categories.forEach(function (category) {
      var categoryHtml = createCategoryHtml(category);
      row.innerHTML += categoryHtml;
    });

    categoriesSection.appendChild(row);
  }

  // TODO: STEP 3: Attach click event handlers to the category items
  function attachClickHandlers() {
    var categoryBoxes = document.getElementsByClassName("box");
    for (var i = 0; i < categoryBoxes.length; i++) {
      categoryBoxes[i].addEventListener("click", function () {
        // TODO: Load the menu items for the selected category
        // Code to load and display menu items
      });
    }
  }

  // TODO: STEP 4: Fetch and display the category list on page load
  // Code to fetch and display the category list

  // Sample data for testing
  var categories = [
    {
      name: "Pizza",
      img_src: "images/pizza.jpg",
    },
    {
      name: "Burger",
      img_src: "images/burger.jpg",
    },
    {
      name: "Sushi",
      img_src: "images/sushi.jpg",
    },
    {
      name: "Steak",
      img_src: "images/steak.jpg",
    },
  ];

  insertCategories(categories);
  attachClickHandlers();
});
