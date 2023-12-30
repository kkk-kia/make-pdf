import React, { cloneElement } from "react";
import ReactPDF, {
  Document,
  Page,
  View,
  Text,
  Image,
  StyleSheet,Font
} from "@react-pdf/renderer";


const style = StyleSheet.create({
    page:{
        padding:"10" ,
        width:"100%"
        
        // display:"flex",
        // flexDirection:"row",
        // alignContent:"center",

    },
    banner :{
      width : "100%",
      display:"flex",
      flexDirection:"row",
      textAlign: "center",
      marginBottom:5,
      paddingBottom:5,
      borderBottom:1
  },
  bannerText:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    marginLeft:5
  },
    img:{
        width:"30%",
        height:100,
        width:100,
        left : 0,
      },
    emptyImg:{
      width:100,
      height:100,
      backgroundColor:"black",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
      // color:"red"
    },
    emptyView:{
      width:100,
      height:30,
      // backgroundColor:"black"
    },
    conteiner:{
      display:"flex",
      flexDirection:"row",
      marginBottom:10,
      // backgroundColor:"red"
      // width:"100%",
      // backgroundColor:"red",
      // height:10

    },
    InputConteiner:{
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      width:"50%",
      
      
    },
    lableInput:{
      width:130,
      backgroundColor:"#b3a490",
      padding:5,
      marginRight:3,
      borderRadius:3

    },
    text:{
      // backgroundColor:"white",
      // height:"100%",
      // backgroundColor:"blue"

    }
});

const MakePdf = (props) => (
  <Document>
    <Page style={style.page} size="a4">
      
      <View style={style.banner}> 
         {(props.imgFile !="") ? (<Image style={style.img} src={props.imgFile}></Image>) : (<View style={style.emptyImg}> <Text style={{color:"red",fontSize:10}}>image place</Text></View>)}
         <View style={style.bannerText}><Text style={{fontSize:15}}>Registration and field selection based on national academic records in 2024</Text></View>
      </View>
      
      <View style={{marginBottom:15,paddingBottom:5,borderBottom:1}}>
        <Text>Date:</Text>
        <Text style={{textAlign:"center"}}>{new Date().getFullYear() + "/" + (new Date().getMonth()+1) + "/" + new Date().getDate()} </Text>

      </View>


      <View style={style.conteiner}>

          <View style={style.InputConteiner}>
            <View style={style.lableInput}><Text>name</Text></View>
            {(props.name != "") && (<Text style={style.text}>{props.name}</Text>)}
          </View>

          <View style={style.InputConteiner}>
            <View style={style.lableInput}><Text>family</Text></View>
            {(props.family != "") && (<Text style={style.text}>{props.family}</Text>)}
          </View>
     </View>

     <View style={style.conteiner}>

          <View style={style.InputConteiner}>
            <View style={style.lableInput}><Text>age</Text></View>
            {(props.age != "") && (<Text style={style.text}>{props.age}</Text>)}
          </View> 

          <View style={style.InputConteiner}>
            <View style={style.lableInput}><Text>gender</Text></View>
            {(props.gender != "") && (<Text style={style.text}>{props.gender}</Text>)}
          </View>
     </View>

     <View style={style.conteiner}>

          <View style={style.InputConteiner}>
            <View style={style.lableInput}><Text>country</Text></View>
            {(props.country != "") && (<Text style={style.text}>{props.country}</Text>)}
          </View> 

          <View style={style.InputConteiner}>
            <View style={style.lableInput}><Text>city</Text></View>
            {(props.city != "") && (<Text style={style.text}>{props.city}</Text>)}
          </View>
     </View>

     <View style={style.conteiner}>

          <View style={style.InputConteiner}>
            <View style={style.lableInput}><Text>favoriteColor</Text></View>
            {(props.favoriteColor != "") && (<Text style={style.text}>{props.favoriteColor}</Text>)}
          </View> 

          <View style={style.InputConteiner}>
            <View style={style.lableInput}><Text>favoriteMovie</Text></View>
            {(props.favoriteMovie != "") && (<Text style={style.text}>{props.favoriteMovie}</Text>)}
          </View>
     </View>
     <View style={style.conteiner}>

          <View style={style.InputConteiner}>
            <View style={style.lableInput}><Text>postalCode</Text></View>
            {(props.postalCode != "") && (<Text style={style.text}>{props.postalCode}</Text>)}
          </View>   
     </View>
     
     <View style={{height:90,borderBottom:1}}>
        <View style={style.lableInput}><Text>address</Text></View>
        {(props.address != "") && (<Text style={{padding:5}}>{props.address}</Text>)}    
     </View>

  
    </Page>
  </Document>
);

export default MakePdf;







//       {(props.imgFile !="") && (<Image style={style.img} src={props.imgFile}></Image>)}
//       {(props.name != "") && (<Text style={style.text}>your name is {props.name}</Text>)}
//       {(props.family != "") && (<Text style={style.text}>your family is {props.family}</Text>)}
//       {(props.age != "") && (<Text style={style.text}>your age is {props.age}</Text>)}
//       {(props.postalCode != "") && (<Text style={style.text}>{props.postalCode} </Text>)}
//       {(props.country != "") && (<Text style={style.text}> {props.country} </Text>)}
//       {(props.city != "") && (<Text style={style.text}> {props.city} </Text>)}
//       {(props.address != "") && (<Text style={style.text}> {props.address} </Text>)}
//       {(props.favoriteMovie != "") && (<Text style={style.text}> {props.favoriteMovie} </Text>)}
//       {(props.favoriteColor != "") && (<Text style={style.text}> {props.favoriteColor} </Text>)}