function previewImage(event) {
  var reader = new FileReader();
  reader.onload = function () {
    var output = document.getElementById("imagePreview");
    output.src = reader.result;
  };

  if (event.target.files.length > 0) {
    reader.readAsDataURL(event.target.files[0]);
    var preview = document.querySelector(".image-preview");
    preview.style.display = "block";
  } else {
    var output = document.getElementById("imagePreview");
    output.src = ""; // Clear the image source if no file is selected
    var preview = document.querySelector(".image-preview");
    preview.style.display = "block";
  }
}

function previewImagedetailed(event) {
  var reader = new FileReader();
  reader.onload = function () {
    var output = document.getElementById("imageDetailedImage");
    output.src = reader.result;
  };

  if (event.target.files.length > 0) {
    reader.readAsDataURL(event.target.files[0]);
    var preview = document.querySelector(".image-DetailedImage");
    preview.style.display = "block";
  } else {
    var output = document.getElementById("imageDetailedImage");
    output.src = ""; // Clear the image source if no file is selected
    var preview = document.querySelector(".image-DetailedImage");
    preview.style.display = "block";
  }
}
