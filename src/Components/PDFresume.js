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
      {this.props.children}

      <div id="pdf-view">
        <br />
        <section className="border_section" />
        <h2>hello</h2>
        <section className="resume">
          <div className="resume_header">
            <div className="header_div">
              {data.profile.firstname} {data.profile.lastname}
            </div>
            <div className="header_text">
              {data.profile.phonenumber === "" ? (
                <span className="header_span">phone number</span>
              ) : (
                <span className="header_span">{data.profile.phonenumber}</span>
              )}

              <span className="header_span"> | </span>
              {data.profile.phonenumber === "" ? (
                <span className="header_span">email</span>
              ) : (
                <span className="header_span">{data.profile.email}</span>
              )}

              <span className="header_span"> | </span>
              {data.profile.phonenumber === "" ? (
                <span className="header_span">Street Address</span>
              ) : (
                <span className="header_span">
                  {data.contactInformation.StreetAddress},
                </span>
              )}

              {data.profile.phonenumber === "" ? (
                <span className="header_span">City</span>
              ) : (
                <span className="header_span">
                  {data.contactInformation.City},
                </span>
              )}
              {data.profile.phonenumber === "" ? (
                <span className="header_span">State</span>
              ) : (
                <span className="header_span">
                  {data.contactInformation.State}
                </span>
              )}
            </div>
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
