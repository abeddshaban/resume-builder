import React from "react";
import { jsPDF } from "jspdf";

const PDF = ({ data }) => {
  const pdfDownload = (e) => {
    e.preventDefault();
    let doc = new jsPDF("p", "cm", "A4");
    doc.html(document.getElementById("pdf-view"), {
      callback: () => {
        doc.save("test.pdf");
      },
    });
  };

  const pdfPreview = (e) => {
    e.preventDefault();
    let doc = new jsPDF("p", "px", "A4");
    doc.html(document.getElementById("pdf-view"), {
      callback: () => {
        doc.output("dataurlnewwindow");
      },
    });
    // doc.text("Hello world!", 10, 10);
    // doc.output("dataurlnewwindow");
  };

  return (
    <div>
      <div id="pdf-view">
        <h1> {data.profile.lastname}</h1>
      </div>
      <button onClick={pdfDownload}> Download Resume </button>
      <button onClick={pdfPreview}> preview Resume </button>
    </div>
  );
};

export default PDF;
