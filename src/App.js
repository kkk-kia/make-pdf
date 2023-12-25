import "./App.css";
import React, { useState } from "react";
import { PDFViewer, PDFDownloadLink, usePDF } from "@react-pdf/renderer";
import MakePdf from "./components/pdf.js";

function App() {
  const [name, setName] = useState("");
  const [family, setFamily] = useState("");
  const [age, setAge] = useState("");
  const [imgFile, setImgFile] = useState("");
  const [show, setShow] = useState(false);
  // const [x,updatex] = usePDF({document:<MakePdf name={name} family={family} age={age} imgFile={imgFile}/>})

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
        <button onClick={showpdf}>show pdf</button>

        {show === true && (
          // <a href={x.url} download="mypdf">download pdf</a>
          <PDFDownloadLink document={<MakePdf name={name} family={family} age={age} imgFile={imgFile} />} fileName="kia.pdf" className="pdfDownloadLink">
           {({ blob, url, loading, error }) =>
              loading ? "loading..." : "downlaod pdf"
            }
          </PDFDownloadLink>
        )}
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
{
  // blob رو کامل متوجه نشدم
}