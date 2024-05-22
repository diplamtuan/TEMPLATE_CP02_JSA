// cartWrapper
const cartWrapper = document.querySelector("#cartWrapper");

function renderCart() {
  // Reset cart
  let html = "";
  if (localStorage.getItem("cart")) {
    if (JSON.parse(localStorage.getItem("cart")).length > 0) {
      let cartLocal = JSON.parse(localStorage.getItem("cart"));
      let quantity = cartLocal.length;
      html += `
              <p>
                <span class="h2">Shopping Cart </span
                ><span class="h4">(${quantity} item in your cart)</span>
            </p>`;
      for (let i = 0; i < cartLocal.length; i++) {
        let image = cartLocal[i].image;
        let name = cartLocal[i].name;
        let category = cartLocal[i].category;
        let price = cartLocal[i].price;
        let id = cartLocal[i].id;
        html += `<div class="card mb-4">
            <div class="card-body p-4">
            <div class="row align-items-center">
                <div class="col-md-2">
                <img
                    src="${image}"
                    class="img-fluid"
                    alt="Generic placeholder image"
                />
                </div>
                <div class="col-md-2 d-flex justify-content-center">
                <div>
                    <p class="small text-muted mb-4 pb-2">Name</p>
                    <p class="lead fw-normal mb-0">${name}</p>
                </div>
                </div>
                <div class="col-md-2 d-flex justify-content-center">
                <div>
                    <p class="small text-muted mb-4 pb-2">Category</p>
                    <p class="lead fw-normal mb-0">${category}</p>
                </div>
                </div>
                <div class="col-md-2 d-flex justify-content-center">
                <div>
                    <p class="small text-muted mb-4 pb-2">Quantity</p>
                    <p class="lead fw-normal mb-0">1</p>
                </div>
                </div>
                <div class="col-md-2 d-flex justify-content-center">
                <div>
                    <p class="small text-muted mb-4 pb-2">Price</p>
                    <p class="lead fw-normal mb-0">$${price}</p>
                </div>
                </div>
                <div class="col-md-2 d-flex justify-content-center">
                <div>
                    <p class="small text-muted mb-4 pb-2">Delete</p>
                    <p class="lead fw-normal mb-0 deleteBtn" onclick="deleteCart(${id})"><i class="fa-solid fa-trash"></i></p>
                </div>
                </div>
                
            </div>
            </div>
        </div>`;
      }

      html += `<div class="card mb-5">
                <div class="card-body p-4">
                <div class="float-end">
                    <p class="mb-0 me-5 d-flex align-items-center">
                    <span class="small text-muted me-2">Order total:</span>
                    <span class="lead fw-normal">$${updateTotalPrice()}</span>
                    </p>
                </div>
                </div>
            </div>
    
            <div class="d-flex justify-content-end">
                <button
                type="button"
                data-mdb-button-init
                data-mdb-ripple-init
                class="btn btn-light btn-lg me-2"
                >
                Continue shopping
                </button>
                <button
                type="button"
                data-mdb-button-init
                data-mdb-ripple-init
                class="btn btn-primary btn-lg"
                onclick="checkout()"
                >
                Process
                </button>
            </div>
        `;
      cartWrapper.innerHTML = html;
    } else {
      cartWrapper.innerHTML = `
        <div style="display:flex;justify-content:center;align-items:center">
        <img src="./nocart.jpg"/ style="width:500px;height:500px">
        </div>`;
    }
  } else {
    cartWrapper.innerHTML = `
      <div style="display:flex;justify-content:center;align-items:center">
      <img src="./nocart.jpg"/ style="width:500px;height:500px">
      </div>`;
  }
}
renderCart();

function deleteCart(id) {}

function updateTotalPrice() {
  if (localStorage.getItem("cart")) {
    let cartLocal = JSON.parse(localStorage.getItem("cart"));
    let sum = 0;
    for (let i = 0; i < cartLocal.length; i++) {
      let price = cartLocal[i].price;
      sum += price;
    }
    return sum;
  }
}

function checkout() {
  if (localStorage.getItem("user")) {
    alert("Thanh toán thành công");
    localStorage.removeItem("cart");
    location.href = "index.html";
  } else {
    alert("Mời bạn đăng nhập trước khi thanh toán");
    location.href = "dangnhap.html";
  }
}
