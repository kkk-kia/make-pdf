import React from "react";
import {
  Document,
  Page,
  View,
  Text,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";

const style = StyleSheet.create({
    page:{
        padding:10 ,
        paddingTop:20,
        display:"flex",
        flexDirection:"column",
        alignContent:"center",

    },
    img:{
        margin:"0 auto",
        width:100,
        height:100,
        marginBottom:20
    },
    text:{
        margin:"0 auto",
        marginBottom:5
    }


});

const MakePdf = ({ name, family, age, imgFile }) => (
  <Document>
    <Page style={style.page} size="a4">
      <Image style={style.img} src={imgFile}></Image>
      {(name != "") && (<Text style={style.text}>your name is {name}</Text>)}
      {(family != "") && (<Text style={style.text}>your family is {family}</Text>)}
      {(age != "") && (<Text style={style.text}>your age is {age}</Text>)}
    </Page>
  </Document>
);

export default MakePdf;
