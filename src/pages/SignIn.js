import React, {useState} from 'react';
import {Text, View, TouchableOpacity, ActivityIndicator} from 'react-native';
import {TextInput} from 'react-native-paper';
import {GlobalStyle} from '../style/GlobalStyle';

import * as Animatable from 'react-native-animatable'


export default function SignIn({navigation}) {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading,setLoading]=useState(false)

  const toggleLoading =()=>{
    setLoading(!loading)
  }
  return (
    <View style={GlobalStyle.SplashContainer}>
     <View style={GlobalStyle.SignInHeader}>

        <Text style={GlobalStyle.titleSplash}>Se connecter</Text>
        <Text style={{
          color:'white',
          fontSize: 15,
          fontWeight: "100",
        }}>
        Se Connecter avec Email et mot de pass</Text>
      </View>

      <Animatable.View 
      style={GlobalStyle.SignInFooter}
      animation="fadeInUpBig"
      duration={2000}>

        
        <TextInput
        label='Email'
        mode='outlined'
        placeholder='ex: mymail@mail.com'
        theme={{colors: {primary: '#83A9DA', background: '#fff' }}}
        style={{marginTop: 50}}
        onChangeText={text => setEmail(text)}
        />
        <TextInput
        label='Mot de pass'
        mode='outlined'
        placeholder='Enter votre mot de pass'
        theme={{colors: {primary: '#83A9DA', background: '#fff' }}}
        secureTextEntry={true}
        style={{marginTop: 25}}
        onChangeText={text => setPassword(text)}
        />

        <TouchableOpacity
        onPress={()=> alert('oups, noublier pas la prochaine fois ;)')}>
        <Text style={{
          marginTop: 15,
          fontWeight: 'bold',
          color: '#83A9DA',
        }}>Vous oublie votre mot de passe ?</Text>
        </TouchableOpacity>

        <TouchableOpacity
        disabled={loading}
        onPress={()=> navigation.replace('Acceuil')}>
        <Text
        style={GlobalStyle.buttonSignIn}>Se connecter</Text>
         <ActivityIndicator style={{position:'absolute',left:10,top:25}} size="large" animating={loading} color='white' />
        </TouchableOpacity>
        
        <View style={{flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginTop: 20}}>
        <Text style={{fontSize: 15, color: 'grey'}}> Vous avez pas encore un compte ? </Text>
        
        <TouchableOpacity
        onPress={ ()=>  navigation.replace('SignUp')}>
          <Text style={{color:'#83A9DA'}}>S’inscrire</Text>
        </TouchableOpacity>
        </View>

      </Animatable.View>
      </View>
  );
}