// Function to show the modal with PDF
function showPdfModal() {
    document.getElementById("pdfModal").style.display = "block";
}

// Function to close the modal with PDF
function closePdfModal() {
    document.getElementById("pdfModal").style.display = "none";
}

// Close the modal if the user clicks outside of the modal content
window.onclick = function(event) {
    if (event.target == document.getElementById("pdfModal")) {
        closePdfModal();
    }
}
