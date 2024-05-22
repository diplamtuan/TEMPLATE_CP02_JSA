const button = document.querySelector("button");
const inputEmail = document.querySelector(".inputEmail");
const inputPassword = document.querySelector(".inputPassword");
const errorMessage = document.querySelectorAll(".errorMessage");
const errorEmail = errorMessage[0];
const errorPassword = errorMessage[1];

const account = {
  email: "triet123",
  password: "123",
};
button.addEventListener("click", function () {
  let emailValue = inputEmail.value;
  let passValue = inputPassword.value;
  // TH1: email và pass rỗng
  // TH2: email rỗng và pass không rỗng
  // TH3: email không rỗng và pass rỗng
  // TH4: cả 2 đều không rỗng
  //   TH4.1 : đúng email , sai mật khẩu
  //   TH4.2 : sai email,  đúng mật khẩu
  //   TH4.3 : sai email, sai mật khẩu
  //   TH4.4 : đúng email, đúng mật khẩu

  if (emailValue == "" && passValue == "") {
    errorEmail.innerText = "Mời bạn điền thông tin email";
    errorPassword.innerText = "Mời bạn điền đầy đủ password";
    inputEmail.classList.add("errorInput");
    inputPassword.classList.add("errorInput");
  } else if (emailValue == "" && passValue != "") {
    // Xoá lỗi của TH1
    errorEmail.innerText = "Mời bạn điền thông tin email";
    errorPassword.innerText = "";
    inputEmail.classList.add("errorInput");
    inputPassword.classList.remove("errorInput");
  } else if (emailValue != "" && passValue == "") {
    errorEmail.innerText = "";
    errorPassword.innerText = "Mời bạn điền đầy đủ password";
    inputEmail.classList.remove("errorInput");
    inputPassword.classList.add("errorInput");
  } else {
    errorEmail.innerText = "";
    errorPassword.innerText = "";
    inputEmail.classList.remove("errorInput");
    inputPassword.classList.remove("errorInput");
    if (emailValue == account.email && passValue != account.password) {
      errorEmail.innerText = "";
      errorPassword.innerText = "Mật khẩu chưa chính xác";
      inputEmail.classList.remove("errorInput");
      inputPassword.classList.add("errorInput");
    } else if (emailValue != account.email && passValue == account.password) {
      errorEmail.innerText = "Email chưa chính xác";
      errorPassword.innerText = "";
      inputEmail.classList.add("errorInput");
      inputPassword.classList.remove("errorInput");
    } else if (emailValue != account.email && passValue != account.password) {
      errorEmail.innerText = "Email chưa chính xác";
      errorPassword.innerText = "Mật khẩu chưa chính xác";
      inputEmail.classList.add("errorInput");
      inputPassword.classList.add("errorInput");
    } else {
      alert("ĐĂNG NHẬP THÀNH CÔNG");
      //   Đăng nhập thành công thì mình phải qua trang chủ
      location.href = "index.html";
      //   location.href là lệnh để chuyển sang trang mình muốn
      localStorage.setItem("user", emailValue);
      //  Câu lệnh này để lưu lên local
    }
  }
});
