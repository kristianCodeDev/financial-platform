import { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Button,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import CompanyList from "./components/CompanyList";
import StockGraph from "./components/StockGraph";
import CompanyInfo from "./components/CompanyInfo";

const companyData = {
  "Company A": {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  },
  "Company B": {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [30, 50, 40, 70, 85, 60],
      },
    ],
  },
  "Company C": {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [25, 35, 45, 55, 65, 75],
      },
    ],
  },
};

const App = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [hoveredValue, setHoveredValue] = useState(null);
  const [showHomeScreen, setShowHomeScreen] = useState(true);
  const isLandscape =
    Dimensions.get("window").width > Dimensions.get("window").height;

  const handleCompanySelect = (company) => {
    setSelectedCompany(company);
    setHoveredValue(null); // Reset hovered value when a new company is selected
  };

  const handleEnterApp = () => {
    setShowHomeScreen(false);
  };

  const handleLogoClick = () => {
    setShowHomeScreen(true);
    setSelectedCompany(null); // Reset selected company when going back to home
  };

  if (showHomeScreen) {
    return (
      <View style={styles.homeScreen}>
        <Text style={styles.homeText}>Welcome to My Stock App</Text>
        <Button title="Enter App" onPress={handleEnterApp} />
        <Text style={styles.extraInfo}>
          * You can click on the peaks in the graph on mobile
        </Text>
      </View>
    );
  }

  return (
    <PaperProvider>
      <TouchableOpacity onPress={handleLogoClick}>
        <Text style={isLandscape ? styles.logoLandscape : styles.logoPortrait}>
          My Stock App
        </Text>
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.sidebar}>
          <CompanyList onSelect={handleCompanySelect} />
        </View>
        <View style={isLandscape ? styles.mainLandscape : ""}>
          {selectedCompany && (
            <ScrollView horizontal>
              <StockGraph
                data={companyData[selectedCompany]}
                onHover={setHoveredValue}
              />
            </ScrollView>
          )}
        </View>
        <View style={styles.info}>
          <CompanyInfo company={selectedCompany} value={hoveredValue} />
        </View>
      </ScrollView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  extraInfo: {
    marginTop: 40,
    fontWeight: "bold",
  },
  logoPortrait: {
    marginTop: 80,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  logoLandscape: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  sidebar: {
    flex: 1,
    backgroundColor: "#2c3e50",
    padding: 20,
    minWidth: 200,
  },
  mainLandscape: {
    flex: 2,
    padding: 20, // Increased padding for landscape mode
    backgroundColor: "#ecf0f1",
    minWidth: 300,
  },
  info: {
    flex: 1,
    backgroundColor: "#2c3e50",
    padding: 20,
    minWidth: 200,
  },
  homeScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  homeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default App;
