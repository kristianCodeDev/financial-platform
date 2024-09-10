import React from "react";
import { FlatList } from "react-native";
import { List } from "react-native-paper";

const companies = ["Company A", "Company B", "Company C"];

const CompanyList = ({ onSelect }) => {
  return (
    <FlatList
      data={companies}
      renderItem={({ item }) => (
        <List.Item
          title={item}
          onPress={() => onSelect(item)}
          style={{ backgroundColor: "#34495e", marginVertical: 5 }}
          titleStyle={{ color: "#ecf0f1" }}
        />
      )}
      keyExtractor={(item) => item}
    />
  );
};

export default CompanyList;
