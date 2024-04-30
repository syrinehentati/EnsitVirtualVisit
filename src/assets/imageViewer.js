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

function previewImagedetailed(event) {
  var reader = new FileReader();
  reader.onload = function () {
    var output = document.getElementById("imageDetailedImage");
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
  var preview = document.querySelector(".image-DetailedImage");
  preview.style.display = "block";
}
window.onload = function () {
  var imageUrl = "../../../../backend/affiches/" + "{{ posterData.image }}";
  "../../../../backend/affiches/" + "{{ posterData.couverture }}";

  var output = document.getElementById("imagePreview");
  output.src = imageUrl;
  var preview = document.querySelector(".image-preview");
  preview.style.display = "block";

  var detailedOutput = document.getElementById("imageDetailedImage");
  detailedOutput.src = detailedImageUrl;
  var detailedPreview = document.querySelector(".image-DetailedImage");
  detailedPreview.style.display = "block";
};
