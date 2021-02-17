import React from 'react';
import {Text, View, Image, Dimensions, TouchableOpacity  } from 'react-native';
import {GlobalStyle} from '../style/GlobalStyle';
import Swiper from 'react-native-swiper';


export default function WelcomePage( {navigation} ) {

  const {width, height} = Dimensions.get('window');
  const height_image = height * 0.4 ;
  const width_image =  width * 0.8;

  return (

    <Swiper
      loop={false}
      style={{backgroundColor: 'white'}}
      dot={<View style={GlobalStyle.dot} />}
      activeDot={<View style={GlobalStyle.dotActive} />}>

    <View style={GlobalStyle.slideSplashScreen}>
      <View style={GlobalStyle.headerSplashScreen}>
        <Image
            source={require("../../assets/slide1.jpg")}
            style={{height:height_image, width: width_image}}
            resizeMode={"stretch"}/>
      </View>
      
      <View style={GlobalStyle.footerSplashScreen}>
          <Text style={GlobalStyle.splashTitle}> Registre Social Maroc </Text>
          <Text style={GlobalStyle.splashText}> Registre Social Maroc Mobile Application. </Text>
      </View>
    </View>


    <View style={GlobalStyle.slideSplashScreen}>
      <View style={GlobalStyle.headerSplashScreen}>
        <Image
            source={require("../../assets/slide2.jpg")}
            style={{height:height_image, width: width_image, marginTop: 20}}
            resizeMode={"stretch"}/>
      </View>
      
      <View style={GlobalStyle.footerSplashScreen}>
          <Text style={GlobalStyle.splashTitle}> Covurture Medical </Text>
          <Text style={GlobalStyle.splashText}> Votre covurture medical dans votre smartphone.</Text>
      </View>
    </View>

    <View style={GlobalStyle.slideSplashScreen}>
      <View style={GlobalStyle.headerSplashScreen}>
        <Image
            source={require("../../assets/slide3.jpg")}
            style={{height:height_image, width: width_image, marginTop: 30}}
            resizeMode={"stretch"}/>
      </View>
      
      <View style={GlobalStyle.footerSplashScreen}>
        <Text style={GlobalStyle.splashTitle}> Allocation chomage </Text>
          <Text style={GlobalStyle.splashText}> Votre Allocation chomage est entre votre telephone. </Text>
      </View>
    </View>

    <View style={GlobalStyle.slideSplashScreen}>
      <View style={GlobalStyle.headerSplashScreen}>
        <Image
            source={require("../../assets/slide4.jpg")}
            style={{height:height_image, width: width_image, marginTop: 20}}
            resizeMode={"stretch"}/>
      </View>
      
      <View style={GlobalStyle.footerSplashScreen}>
          <Text style={GlobalStyle.splashTitle}> Retrait</Text>
          <Text style={GlobalStyle.splashText}> 
          Registre Social Maroc l'application pour vous. </Text>
      
      <View 
      style={{flexDirection:'row'}}>
        <TouchableOpacity
          onPress={()=> navigation.replace('SignUp')}
          style={[GlobalStyle.btnSplash,{
          borderColor: '#83A9DA',
          borderRadius: 50,
          marginTop: 15,
          borderWidth: 1,}]}>
        <Text style={{color: '#83A9DA'}}>S’inscrire</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={()=> navigation.replace('SignIn')}
          style={[GlobalStyle.btnSplash,{
          backgroundColor: '#83A9DA',
          borderColor: '#83A9DA',
          borderRadius: 50,
          marginTop: 15,
          marginLeft: 25,
          borderWidth: 1,}]}>
        <Text style={{color: 'white'}}>Se connecter</Text>
        </TouchableOpacity>
        
        </View>
      </View>
    </View>

    </Swiper>




  );
}

