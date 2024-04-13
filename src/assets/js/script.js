// Function to check image dimensions and apply styling
function checkImageDimensions(event, dimensionSpanId) {
  const fileInput = event.target;
  const files = fileInput.files;
  if (files.length > 0) {
    const img = new Image();
    img.src = URL.createObjectURL(files[0]);
    img.onload = function () {
      const width = img.width;
      const height = img.height;
      const preferredWidth = 40;
      const preferredHeight = 60;
      const widthDifference = Math.abs(width - preferredWidth);
      const heightDifference = Math.abs(height - preferredHeight);
      const threshold = 20; // Difference less than or equal to this will not trigger red color
      const dimensionSpan = document.getElementById(dimensionSpanId);
      if (widthDifference > threshold || heightDifference > threshold) {
        fileInput.style.border = "1px solid red"; // Apply red border to input field
        dimensionSpan.style.color = "red"; // Apply red color to dimension text
      } else {
        fileInput.style.border = ""; // Remove red border
        dimensionSpan.style.color = ""; // Remove red color
      }
    };
  }
}
