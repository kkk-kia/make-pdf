import "./App.css";
import React, { useState } from "react";
import { PDFViewer, PDFDownloadLink, usePDF, Font } from "@react-pdf/renderer";
import MakePdf from "./components/pdf.js";

function App() {
  const [name, setName] = useState("");
  const [family, setFamily] = useState("");
  const [age, setAge] = useState("");
  const [imgFile, setImgFile] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [favoriteMovie, setFavoriteMovie] = useState("");
  const [favoriteColor, setFavoriteColor] = useState("");
  const [show, setShow] = useState(false);

  const pdfProps = {
    name: name,
    family: family,
    age: age,
    imgFile: imgFile,
    postalCode: postalCode,
    country: country,
    city: city,
    address: address,
    favoriteMovie: favoriteMovie,
    favoriteColor: favoriteColor,
  };
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
        <div className="imgUploader">
          <label>choose your image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              setImgFile(URL.createObjectURL(e.target.files[0]));
            }}
          ></input>
        </div>

        <input
          type="number"
          placeholder="Postal code"
          min={0}
          max={12}
          onChange={(e) => {
            setPostalCode(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="country"
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="city"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="address"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="Favorite Movie"
          onChange={(e) => {
            setFavoriteMovie(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="Favorite Color"
          onChange={(e) => {
            setFavoriteColor(e.target.value);
          }}
        ></input>
        <button onClick={showpdf}>show pdf</button>

        {show === true && (
          // <a href={x.url} download="mypdf">download pdf</a>
          <PDFDownloadLink
            document={<MakePdf {...pdfProps} />}
            fileName="kia.pdf"
            className="pdfDownloadLink"
          >
            {({ blob, url, loading, error }) =>
              loading ? "loading..." : "downlaod pdf"
            }
          </PDFDownloadLink>
        )}
      </div>

      {show === true && (
        <div className="pdf-container">
          <PDFViewer className="pdfViewer">
            <MakePdf {...pdfProps} />
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
