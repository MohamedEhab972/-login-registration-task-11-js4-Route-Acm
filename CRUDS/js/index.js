var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var category = document.getElementById("category");
var productDescription = document.getElementById("productDescription");
var productImage = document.getElementById("image");
var productSearch = document.getElementById("search");
var updateProduct = document.getElementById("updateProduct");
var addProductbotton = document.getElementById("addProductbotton");
var updatebotton = document.getElementById("updatebotton");

var ptr;
var Array;
if (localStorage.getItem("Product") == null) {
  Array = [];
} else {
  Array = JSON.parse(localStorage.getItem("Product"));
  display(Array);
}

function addProduct() {
  if (
    productName.classList.contains("is-valid") &&
    productPrice.classList.contains("is-valid") &&
    category.classList.contains("is-valid") &&
    productDescription.classList.contains("is-valid")
  ) {
    var product = {
      code: productName.value,
      price: productPrice.value,
      category: category.value,
      description: productDescription.value,
      proImage: `spimage/${productImage.files[0]?.name}`,
    };
    Array.push(product);
    clear();
    display(Array);
    localStorage.setItem("Product", JSON.stringify(Array));
    productName.classList.remove("is-valid");
    productPrice.classList.remove("is-valid");
    category.classList.remove("is-valid");
    productDescription.classList.remove("is-valid");
  } else {
    alert("the input is not valid");
  }
}

function clear() {
  productName.value = null;
  productPrice.value = null;
  category.value = null;
  productDescription.value = null;
  productImage.value = null;
}

function display(array) {
  var cartona = "";
  for (let i = 0; i < array.length; i++) {
    cartona += ` <div class="col-md-3">
  <div class="box">
    <img
      src="${array[i].proImage}"
      class="w-100 mb-3"
      alt=""
    />
    <p>product name : ${array[i].code} </p>
    <p>product price : ${array[i].price}</p>
    <p>product category : ${array[i].category}</p>
    <p>product description : ${array[i].description}</p>
    <button class="btn btn-danger w-100 mb-1" onclick="deleteProduct(${i})">
                remove <i class="fa-solid fa-trash-can"></i>
              </button>
              <button class="btn btn-warning w-100 mb-1" onclick="update(${i})">
              edit <i class="fas fa-pen"></i></i>
            </button>
  </div>
</div>`;
  }
  document.getElementById("display").innerHTML = cartona;
}

function deleteProduct(i) {
  Array.splice(i, 1);
  display(Array);
  localStorage.setItem("Product", JSON.stringify(Array));
}

function search() {
  var x = productSearch.value.toLocaleLowerCase();
  var searchProduct = [];
  for (let i = 0; i < Array.length; i++) {
    if (Array[i].code.toLocaleLowerCase().includes(x)) {
      searchProduct.push(Array[i]);
    }
  }
  display(searchProduct);
}

function update(i) {
  ptr = i;
  addProductbotton.classList.add("d-none");
  updatebotton.classList.replace("d-none", "d-block");
  productName.value = Array[i].code;
  productPrice.value = Array[i].price;
  category.value = Array[i].category;
  productDescription.value = Array[i].description;
  productName.classList.add("is-valid");
  productPrice.classList.add("is-valid");
  category.classList.add("is-valid");
  productDescription.classList.add("is-valid");
}
function edit(ptr) {
  if (
    productName.classList.contains("is-valid") &&
    productPrice.classList.contains("is-valid") &&
    category.classList.contains("is-valid") &&
    productDescription.classList.contains("is-valid")
  ) {
    Array[ptr].code = productName.value;
    Array[ptr].price = productPrice.value;
    Array[ptr].category = category.value;
    Array[ptr].description = productDescription.value;
    localStorage.setItem("Product", JSON.stringify(Array));
    display(Array);
    addProductbotton.classList.replace("d-none", "d-block");
    updatebotton.classList.replace("d-block", "d-none");
    productName.classList.remove("is-valid");
    productPrice.classList.remove("is-valid");
    category.classList.remove("is-valid");
    productDescription.classList.remove("is-valid");
  } else {
    alert("the input is not valid");
  }
}

function valedate(element) {
  var regex = {
    productName: /^[A-Z][a-z]{2,8}$/,
    productPrice: /^[1-9][0-9]{1,4}$/,
    category: /^(tv|labtop|screen|mobile)$/i,
    productDescription: /^.{0,10}$/,
  };

  if (regex[element.id].test(element.value)) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    element.nextElementSibling.classList.replace("d-block", "d-none");
  } else {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
    element.nextElementSibling.classList.replace("d-none", "d-block");
  }
}








// var ele = document.getElementById;
// var ele = document.getElementsByClassName("mo");
//  var ele = document.getElementsByName
// var ele = document.getElementsByTagName("div");

// document.addEventListener("click", function (e) {
//   console.log(e.target);
// });

// num = 1;

// var x = setInterval(function () {
//   if (num == 10) {
//     clearInterval(x);
//   }
//   count();
// }, 1000);

// function count() {
//   console.log(num);
//   num++;
// }

// var x = setInterval(function () {
//   console.log("hello");
// }, 1000);

// document.addEventListener("click", function () {
//   clearInterval(x);
// });

// var ele = document.querySelector("div");

// document.addEventListener("mousemove", function (e) {
//   ele.style.cssText = `left: ${e.clientX}px;
//   top: ${e.clientY}px;`;
// });
// document.addEventListener("click", function (e) {
//   var x = document.createElement("img");
//   x.setAttribute("src", "spimage/work-3.jpg");
//   x.style.cssText = `width: 100px;
//   height: 100px;
//   position: absolute;
//   left: ${e.clientX}px;
//   top: ${e.clientY}px;`;
//   document.body.appendChild(x);
// });

// var elements = document.querySelectorAll("img");
// var firstImg = document.querySelector("#firstImg");

// for (let i = 0; i < elements.length; i++) {
//   elements[i].addEventListener("click", function (e) {
//     var x = e.target.getAttribute("src");
//     firstImg.setAttribute("src", x);
//   });
// }

// var images = Array.from(document.querySelectorAll("img"));
// var layer = document.getElementById("layer");
// var close = document.getElementById("close");
// var bgImge = document.getElementById("bgImge");
// var after = document.getElementById("after");
// var before = document.getElementById("before");
// var index;

// for (let i = 0; i < images.length; i++) {
//   images[i].addEventListener("click", function (e) {
//     layer.classList.replace("d-none", "d-flex");
//     var x = e.target.getAttribute("src");
//     bgImge.style.cssText = `background-image: url(${x});`;

//     index = images.indexOf(e.target);
//   });
// }
// close.addEventListener("click", function () {
//   layer.classList.replace("d-flex", "d-none");
// });

// after.addEventListener("click", function () {
//   index++;
//   if (index == images.length) {
//     index = 0;
//   }
//   var mySrc = images[index].getAttribute("src");
//   console.log(mySrc);
//   bgImge.style.cssText = `background-image: url(${mySrc});`;
// });

// before.addEventListener("click", function () {
//   index--;
//   if (index == -1) {
//     index = images.length - 1;
//   }
//   var mySrc = images[index].getAttribute("src");
//   console.log(mySrc);
//   bgImge.style.cssText = `background-image: url(${mySrc});`;
// });

// function slid(stip) {
//   index += stip;
//   if (index == -1) {
//     index = images.length - 1;
//   }
//   if (index == images.length) {
//     index = 0;
//   }
//   var mySrc = images[index].getAttribute("src");
//   bgImge.style.cssText = `background-image: url(${mySrc});`;
// }

// before.addEventListener("click", function () {
//   slid(-1);
// });
// after.addEventListener("click", function () {
//   slid(1);
// });
