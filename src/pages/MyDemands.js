import React, {useState} from 'react'
import { View, Text, Alert } from 'react-native'
import { Button } from 'react-native-paper'
import Table from '../Components/Table'


export default function MyDemands() {

    return (
        <View>
            <Text
            style={{fontSize: 17, fontWeight: 'bold', paddingLeft: 20, paddingTop: 10}}>Mes Services demander </Text>

            <View
            
            style={{flexDirection: 'row', marginBottom: 20, marginTop: 20}}>
            
            <Button icon="account-plus-outline" mode="contained" color={"#83A9DA"} style={{width: '45%', marginStart: 10}} onPress={() => Alert.alert('Ajouté nouveau né', "Formulaire pour ajouter un nouveau né")}>
            Nouveau né
            </Button>

            <Button icon="account-heart" mode="contained" color={"#83A9DA"} style={{width: '45%', marginStart: 15}} onPress={() => Alert.alert('Consulté Retrait', "Formulaire pour Retrait")}>
            Retrait
            </Button>

            </View>

            <Button icon="account-heart" mode="contained" color={"#83A9DA"} style={{width: '92%', marginStart: 15, marginBottom: 20}} onPress={() => Alert.alert('Covurture Medical', "Formulaire pour Coverture Medical")}>
            Covurture Medical
            </Button>

            <Button icon="bus-stop-uncovered"  mode="contained" color={"#83A9DA"} style={{width: '92%', marginStart: 15, marginBottom: 10}} onPress={() => Alert.alert('Allocation Chomage', "Formulaire pour Allocatio chomage")}>
            Allocation chomages
            </Button>

            <Table/>
            
        
        </View>
    )
}
