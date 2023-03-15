const imageContainer = document.getElementById("imageContainer");
const uploadBtn = document.getElementById("uploadBtn");
const fileInput = document.getElementById("fileInput");

uploadBtn.addEventListener("click", () => {
  fileInput.click();
});

fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  const url = URL.createObjectURL(file);

  imageContainer.style.backgroundImage = `url(${url})`;
});
