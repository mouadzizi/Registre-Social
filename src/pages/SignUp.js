import React  from 'react';
import {Text, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {TextInput} from 'react-native-paper';
import {GlobalStyle} from '../style/GlobalStyle';
import * as Animatable from 'react-native-animatable'

export default function SignUp({navigation}) {
 

  return (
    <TouchableWithoutFeedback
    onPress={()=> Keyboard.dismiss()}>
      
    <View style={GlobalStyle.SplashContainer}>
      <View style={GlobalStyle.SignUpHeader}>

        <Text style={GlobalStyle.titleSplash}>S’inscrire</Text>
        <Text style={{
          color:'white',
          fontSize: 15,
          fontWeight: "100",
        }}>
        S’inscrire avec votre Email personelle</Text>
      </View>

      <Animatable.View
      style={GlobalStyle.SignInFooter}
      animation="fadeInUpBig"
      duration={2500}>

        <TextInput
        label='Nom Complete'
        mode='outlined'
        placeholder='ex: Moad'
        theme={{colors: {primary: '#83A9DA', background: '#fff' }}}
        style={{marginTop: 10}}
        />

        <TextInput
        label='E-mail'
        mode='outlined'
        placeholder='ex: "votrmail@mail.com"'
        theme={{colors: {primary: '#83A9DA', background: '#fff' }}}
        style={{marginTop: 10}}
        />

        <TextInput
        label='Mot de pass'
        mode='outlined'
        placeholder='choisi une mot de pass fort'
        theme={{colors: {primary: '#83A9DA', background: '#fff' }}}
        secureTextEntry={true}
        style={{marginTop: 10}}
        />

        <TextInput
        label='Confirmer votre mot de pass'
        mode='outlined'
        placeholder='Confirme votre mot de pass'
        theme={{colors: {primary: '#83A9DA', background: '#fff' }}}
        secureTextEntry={true}
        style={{marginTop: 10}}
        />

        <Text 
        style={{
          marginTop: 15,
          fontWeight: 'bold',
          color: '#DFDFDF',
        }}>Par s'inscrire vous accepter automaticment notre </Text>
        <TouchableOpacity
        onPress={()=> navigation.push('Condition generales')}>
  
          <Text style={{
            fontWeight: 'bold',
            color: '#83A9DA',
          }}>Conditions generale</Text>

        </TouchableOpacity>

        <TouchableOpacity
          onPress={()=> navigation.replace('Acceuil')}>
        <Text style={GlobalStyle.buttonSignIn}>S’inscrire</Text>
        </TouchableOpacity>

        <View style={{flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginTop: 20}}>
        <Text style={{fontSize: 15, color: 'grey'}}> Vous avez dèja un compte ? </Text>
        
        <TouchableOpacity
        onPress={()=> navigation.replace('SignIn')}>
          <Text style={{color:'#83A9DA'}}>Se connecter</Text>
        </TouchableOpacity>
        </View>

        </Animatable.View>

      </View>
      
    </TouchableWithoutFeedback>
  );

}