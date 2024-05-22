// Lấy productList
const productList = document.querySelector(".product-list");
// Lấy quantity của cart
const quantity = document.querySelector(".wrapper-cart span");

// Render giao diện bằng javascript
let html = "";
for (let i = 0; i < data.length; i++) {
  let image = data[i].image;
  let name = data[i].name;
  let id = data[i].id;
  let price = data[i].price;
  let category = data[i].category;
  html += `
  <div class="product-item">
        <img
            src="${image}"
            alt="${name}"
        />
        <div class="product-info">
            <h2>${name}</h2>
            <p class="category">${category}</p>
            <p class="price">$${price}</p>
            <button onclick="addCart(${id})">
            Add to cart <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    </div>
  `;
}
productList.innerHTML = html;

function addCart(id) {}

function findProductById(id) {}

function updateQuantityCart() {}
updateQuantityCart();
checkLogin();
function checkLogin() {
  if (localStorage.getItem("user")) {
    document.querySelector(".account").innerHTML = `
        <div class="wrapperAccount">
        <i class="fa-solid fa-user"></i>
        ${localStorage.getItem("user")}
        <ul>
          <li>Thông tin cá nhân</li>
          <li onclick="logout()">Đăng xuất</li>
        </ul>
      </div> 
    `;
  } else {
    document.querySelector(".account").innerHTML = `
        <a href="dangky.html" style="color: white; text-decoration: none"
        >Đăng ký</a
      >
      <a href="dangnhap.html" style="color: white; text-decoration: none"
        >Đăng nhập</a
      >
    `;
  }
}

function logout() {
  localStorage.removeItem("user");
  alert("Đăng xuất thành công");
  checkLogin();
}
