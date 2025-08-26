const correctEmail = "phintFX70926@funix.edu.vn";
const submitBtn = document.getElementById("submitBtn");
const emailInput = document.getElementById("email");
const error = document.getElementById("error");
const formContainer = document.getElementById("form-container");
const personalInfo = document.getElementById("personal-info");

submitBtn.addEventListener("click", () => {
  const email = emailInput.value.trim();
  if (email === "") {
    error.textContent = "Vui lòng nhập email!";
  } else if (email !== correctEmail) {
    error.textContent = "Email không hợp lệ!";
  } else {
    error.textContent = "";
    formContainer.classList.add("hidden");
    personalInfo.classList.remove("hidden");
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll("#job-info .box");

  boxes.forEach((box) => {
    // Tạo nút toggle
    const btn = document.createElement("button");
    btn.classList.add("view-toggle");
    btn.textContent = "▼ View More";

    // Thêm nút vào box
    box.appendChild(btn);

    // Tìm phần nội dung của box
    const content = box.querySelector(
      ".container-title--body, .level, .hopbital"
    );

    // Xử lý sự kiện click
    btn.addEventListener("click", () => {
      if (content.style.display === "block") {
        content.style.display = "none";
        btn.textContent = "▼ View More";
      } else {
        content.style.display = "block";
        btn.textContent = "▲ View Less";
      }
    });
  });
});
