import React from 'react'
import { View, Text, Dimensions, ScrollView } from 'react-native'
import Graph1 from '../Components/graph1'
import {Button} from 'react-native-paper'
export default function Retrait() {
    const {width, height} = Dimensions.get('window');

    return (
        <ScrollView
        style={{backgroundColor: '#fff', padding: 10, height: height}}>
        
        <Text
        style={{fontSize: 17, fontWeight: 'bold', marginBottom: 10}}>
        Vos heures de travail </Text>
            <Graph1 />

            <Button icon="bus-stop-uncovered"  mode="contained" color={"#83A9DA"} style={{width: '92%', marginStart: 15, marginVertical: 15}} onPress={() => Alert.alert('Allocation Chomage', "Formulaire pour Allocatio chomage")}>
            Demande Retrait relative
            </Button>
        </ScrollView>
    )
}
