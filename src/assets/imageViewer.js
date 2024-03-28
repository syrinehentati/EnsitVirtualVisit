function previewImage(event) {
  var reader = new FileReader();
  reader.onload = function () {
    var output = document.getElementById("imagePreview");
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
  var preview = document.querySelector(".image-preview");
  preview.style.display = "block";
}
