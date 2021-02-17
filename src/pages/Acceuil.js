import React from 'react'
import { View, Text, Dimensions, Image, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';

export default function Acceuil() {

    
  const {width, height} = Dimensions.get('window');
  const height_image = height * 0.3 ;
  const width_image =  width*0.9;

    return (
        <View style={{height: height, width: width, backgroundColor: 'white'}}>
            <View style={{height: height*0.3, alignItems: 'center'}}>

            <Swiper
                loop={false}
                style={{alignSelf: 'center', marginTop: 10}}>

                <Image
                    source={require("../../assets/slider1.jpg")}
                    style={{height:height_image, width: width_image, alignSelf:'center'}}
                    resizeMode={"stretch"}/>


                <Image
                    source={require("../../assets/slider2.jpg")}
                    style={{height:height_image, width: width_image, alignSelf:'center'}}
                    resizeMode={"stretch"}/>
                
                <Image
                    source={require("../../assets/slider3.jpg")}
                    style={{height:height_image, width: width_image, alignSelf:'center'}}
                    resizeMode={"stretch"}/>

             </Swiper>

        </View>

        <View
        style={{backgroundColor: '#83A9DA',opacity: 0.8 , padding: 10, margin: 10, borderRadius: 15}}>

            <Text>Bienvenue sur notre platform Registre Social Maroc Madame <Text style={{color: '#FC761A', fontWeight: 'bold'}}> AMJAD Souad</Text></Text>
        </View>

        <View
        style={{backgroundColor: '#83A9DA',opacity: 0.8 , padding: 10, margin: 10, borderRadius: 15}}>

            <Text>N° de Immatriculation <Text style={{color: '#FC761A', fontWeight: 'bold'}}> 1254126651</Text></Text>
            <Text>Nom et Prenom <Text style={{color: '#FC761A', fontWeight: 'bold'}}>JELLOULI Ismail</Text></Text>
            <Text>Date de Naissance <Text style={{color: '#FC761A', fontWeight: 'bold'}}> 02/02/2021</Text></Text>
            <Text>CNI <Text style={{color: '#FC761A', fontWeight: 'bold'}}> K52525252</Text></Text>
        
        </View>
        
        <View 
        style={{backgroundColor: '#c2c2c2', padding: 10, margin: 10, borderRadius: 15}}>

            <Text
            style={{fontFamily: 'monospace', fontSize: 17}}>Avez vou une question ou une réclamation pour un problème?</Text>
            
            <TouchableOpacity
            onPress={()=> Alert.alert("Contact", "c'est un prototype sans contact form")}>
            <Text
            style={{fontFamily: 'monospace', fontSize: 14, color: '#83A9DA', fontWeight: 'bold', textAlign: 'right'}}>Contacter-Nous</Text>
            </TouchableOpacity>
            
        </View>
 
        </View>
    )
}
