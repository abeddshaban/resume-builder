import React from "react";
import { jsPDF } from "jspdf";
import "./Styles/PDF.css";

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
  };

  return (
    <div>
      <div id="pdf-view">
        <br />
        {/* <br /> */}
        <section className="border_section" />

        <section className="resume">
          <div className="resume_header">
            <div className="header_div">
              {data.profile.firstname} {data.profile.lastname}
            </div>
            <span className="header_span">{data.profile.phonenumber}</span>
          </div>
        </section>

        <section className="border_section" />
      </div>
      <button onClick={pdfDownload}> Download Resume </button>
      <button onClick={pdfPreview}> preview Resume </button>
    </div>
  );
};

export default PDF;
