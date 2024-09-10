import React from "react";
import { LineChart } from "react-native-chart-kit";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { Card } from "react-native-paper";

const StockGraph = ({ data, onHover }) => {
  const dimensions = {
    screenWidth: Dimensions.get("window").width,
    screenHeight: Dimensions.get("window").height,
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Card style={styles.card}>
          <LineChart
            data={data}
            width={dimensions.screenWidth * 1.5} // Adjust width for horizontal scrolling
            height={300}
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: "#807e7c",
              backgroundGradientTo: "#696f94",
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
                paddingRight: 20,
              },
              propsForLabels: {
                fontSize: 12,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726",
              },
            }}
            bezier
            onDataPointClick={(data) => onHover(data.value)}
          />
        </Card>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    padding: 10,
    marginVertical: 10,
    width: "100%", // Use full width for the card
  },
});

export default StockGraph;
