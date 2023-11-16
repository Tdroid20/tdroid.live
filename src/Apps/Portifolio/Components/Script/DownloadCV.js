/* const cvDoc = require('../../Assets/Documents/Tdroid_Richard_cv.docx')
const btn = document.getElementById("downloadButton")

export function downloadCV() { // https://fastupload.io/qaAewxx0da9cjd8/file
    fetch('https://fastupload.io/qaAewxx0da9cjd8/file', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/pdf',
      'Access-Control-Allow-Origin': "http://localhost:3000",
      "Access-Control-Allow-Methods": "POST, GET",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  })
  .then((response) => response.blob())
  .then((blob) => {
    // Create blob link to download
    const url = window.URL.createObjectURL(
      new Blob([blob]),
    );
    const link = document.createElement('a');
    link.href = url;
    link.style = "display: none;"
    link.setAttribute(
      'download',
      "TdroidCV.pdf",
    );

    // Append to html link element page
    document.body.appendChild(link);

    // Start download
    link.click();

    // Clean up and remove the link
    link.parentNode.removeChild(link);
  });
} */