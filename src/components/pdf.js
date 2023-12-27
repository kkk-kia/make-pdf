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
        padding:"10 30" ,
        width:"100%"
        
        // display:"flex",
        // flexDirection:"row",
        // alignContent:"center",

    },
    banner :{
      width : "100%",
      textAlign: "center",
      marginBottom:20
  },
  imgconteiner:{
    marginBottom:20


  },
    img:{
        width:100,
        height:100,
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
    text:{
      // backgroundColor:"white",
      // height:"100%",
      // backgroundColor:"blue"

    }
});

const MakePdf = (props) => (
  <Document>
    <Page style={style.page} size="a4">
      <Text style={style.banner}>sign up form</Text>
      <View style={style.imgconteiner}> 
         
         {(props.imgFile !="") ? (<Image style={style.img} src={props.imgFile}></Image>) : (<View style={style.emptyImg}> <Text style={{color:"red",fontSize:10}}>image place</Text></View>)}

      </View>
      
      <View style={style.conteiner}>

          <View style={style.InputConteiner}>
            <Text>name : </Text> {(props.name != "") ? (<Text style={style.text}>{props.name}</Text>) : ( <View style={style.emptyView}></View> )}
          </View>

          <View style={style.InputConteiner}>
            <Text>family : </Text> {(props.family != "") ? (<Text style={style.text}>{props.family}</Text>) : ( <View style={style.emptyView}></View> )}
          </View>
     </View>

     <View style={style.conteiner}>

          <View style={style.InputConteiner}>
            <Text>age : </Text> {(props.age != "") ? (<Text style={style.text}>{props.age}</Text>) : ( <View style={style.emptyView}></View> )}
          </View> 

          <View style={style.InputConteiner}>
            <Text>postalCode : </Text> {(props.postalCode != "") ? (<Text style={style.text}>{props.postalCode} </Text>) : ( <View style={style.emptyView}></View> )}
          </View>
     </View>

     <View style={style.conteiner}>

          <View style={style.InputConteiner}>
            <Text>country : </Text> {(props.country != "") ? (<Text style={style.text}>{props.country}</Text>) : ( <View style={style.emptyView}></View> )}
          </View> 

          <View style={style.InputConteiner}>
            <Text>city : </Text> {(props.city != "") ? (<Text style={style.text}>{props.city} </Text>) : ( <View style={style.emptyView}></View> )}
          </View>
     </View>

     <View style={style.conteiner}>

          <View style={style.InputConteiner}>
            <Text>favoriteColor : </Text> {(props.favoriteColor != "") ? (<Text style={style.text}>{props.favoriteColor}</Text>) : ( <View style={style.emptyView}></View> )}
          </View> 

          <View style={style.InputConteiner}>
            <Text>favoriteMovie : </Text> {(props.favoriteMovie != "") ? (<Text style={style.text}>{props.favoriteMovie} </Text>) : ( <View style={style.emptyView}></View> )}
          </View>
     </View>
     <View style={style.conteiner}>

          <View style={style.InputConteiner}>
            <Text>address : </Text> {(props.address != "") ? (<Text style={style.text}>{props.address}</Text>) : ( <View style={style.emptyView}></View> )}
          </View>   
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