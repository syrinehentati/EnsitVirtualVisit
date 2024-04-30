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
// Fonction pour charger une image par défaut
/

// Appel de la fonction pour charger l'image par défaut lors du chargement de la page
window.onload = loadDefaultImage;
