import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ResultsList = ({
  title,
  results,
}: {
  title: string;
  results: { id: string; name: string }[];
}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ResultsList;
