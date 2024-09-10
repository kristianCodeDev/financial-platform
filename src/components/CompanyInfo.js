import React from "react";
import { StyleSheet } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

const companyDetails = {
  "Company A": {
    name: "Company A",
    description: "A leading company in technology and innovation.",
    marketCap: "500B",
    headquarters: "New York, USA",
  },
  "Company B": {
    name: "Company B",
    description: "A global leader in consumer goods.",
    marketCap: "300B",
    headquarters: "London, UK",
  },
  "Company C": {
    name: "Company C",
    description: "A major player in the automotive industry.",
    marketCap: "200B",
    headquarters: "Tokyo, Japan",
  },
};

const CompanyInfo = ({ company, value }) => {
  if (!company) return null;

  const details = companyDetails[company];

  return (
    <Card style={styles.card}>
      <Card.Content>
        <Title style={styles.title}>{details.name}</Title>
        <Paragraph style={styles.text}>{details.description}</Paragraph>
        <Paragraph style={styles.text}>
          Market Cap: {details.marketCap}
        </Paragraph>
        <Paragraph style={styles.text}>
          Headquarters: {details.headquarters}
        </Paragraph>
        {value !== null && (
          <Paragraph style={styles.text}>Current Value: {value}</Paragraph>
        )}
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#34495e",
    marginVertical: 10,
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ecf0f1",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "#ecf0f1",
    marginBottom: 5,
  },
});

export default CompanyInfo;
