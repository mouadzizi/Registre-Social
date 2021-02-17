import React from 'react'
import {BarChart, LineChart} from 'react-native-chart-kit'
import { Dimensions, View, Text } from "react-native";
export default function graph1() {


    const data = {
        labels: ["2016", "2017", "2018", "2019", "2020", "2021"],
        datasets: [
          {
            data: [200, 300, 400, 500, 600, 700, 800],
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            strokeWidth: 2 // optional
          }
        ],
        legend: ["Votre Points"] // optional
      };

      const data2 = {
        labels: ["2016", "2017", "2018", "2019", "2020", "2021"],
        datasets: [
          {
            data: [1850, 1920, 1550, 1840, 1900, 1780]
          }
        ]
      };

      
    const screenWidth = Dimensions.get("window").width;

      const chartConfig = {
        backgroundGradientFrom: "#c8c8c8",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#c8c8c8",
        backgroundGradientToOpacity: 1,
        color: (opacity = 1) => 'red',
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };

    return (

        <View>
        <BarChart
        data={data2}
        width={screenWidth}
        height={220}
        yAxisLabel="h"
        chartConfig={chartConfig}
        />
        <Text
        style={{fontSize: 17, fontWeight: 'bold', marginVertical: 10}}>
        Votre points </Text>

        <LineChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        />



        </View>
        
)
}
