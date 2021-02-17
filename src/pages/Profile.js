import React from 'react'
import { View, Text, Dimensions, Alert} from 'react-native'
import { Avatar, FAB, Button } from 'react-native-paper';

export default function Profile({navigation}) {
    const {width, height} = Dimensions.get('window');

    return (
        <View style={{height: height}}>

        <View style={{alignSelf: 'center', marginTop: 20}}>
            <Avatar.Image size={150} source={require('../../assets/icon.png')} />
        </View>

        
        <Text style={{textAlign: 'center', marginTop: 5, fontWeight: 'bold', fontSize: 17}}>Nom Prenom: AMJAD Souad</Text>
            <Text style={{textAlign: 'center', marginTop: 5, fontWeight: 'bold', fontSize: 17}}>N° Immatriculation: 1254126651</Text>
            <Text style={{textAlign: 'center', marginTop: 5, fontWeight: 'bold', fontSize: 17}}>Date de Naissance: DD/MM/YYYY</Text>
            
            <Text style={{textAlign: 'center', marginTop: 5, fontWeight: 'bold', fontSize: 17}}>CIN: K546415</Text>

            <FAB
            style={{
                position: 'absolute',
                margin: 16,
                right: 0,
                bottom: 150,
                backgroundColor:'#83A9DA'
            }}
            size={50}
            icon="plus"
            color='white'
            onPress={() => Alert.alert('Modifier', 'Demande de modification de Profil')}
            />

            <Button icon="exit-to-app"  mode="contained" color={"red"} style={{width: '92%', marginStart: 15, marginVertical: 15}} onPress={() => navigation.replace('Splash')}>
            Deconnection
            </Button>
        </View>

    )
}
