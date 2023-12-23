import "./App.css";
import React, { useState } from "react";
import { Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import MakePdf from "./components/pdf.js";

function App() {
  const [name, setName] = useState("");
  const [family, setFamily] = useState("");
  const [age, setAge] = useState("");
  const [imgFile, setImgFile] = useState("");
  const [show, setShow] = useState(false);

  function showpdf() {
    setShow(true);
  }

  return (
    <div className="App">

      <div className="inputs">
        <input
          type="text"
          placeholder="name..."
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="family..."
          onChange={(e) => {
            setFamily(e.target.value);
          }}
        ></input>
        <input
          type="number"
          min={0}
          placeholder="age"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        ></input>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            setImgFile(URL.createObjectURL(e.target.files[0]));
          }}
        ></input>
        <button onClick={showpdf}>
          show pdf
        </button>
      </div>

      
        {show === true && (
        <div className="pdf-container">
          <PDFViewer className="pdfViewer">
            <MakePdf name={name} family={family} age={age} imgFile={imgFile} />
          </PDFViewer>
        </div>
      )}

    </div>
  );
}

export default App;

{
  /* <PDFViewer><Quixote /></PDFViewer>
     <button onClick={x}></button>
     <PDFDownloadLink document={<Quixote />} fileName="quixote.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'در حال بارگیری...' : 'دانلود فایل PDF'
        }
      </PDFDownloadLink> */
}
