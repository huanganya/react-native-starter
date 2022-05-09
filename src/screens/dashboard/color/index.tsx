import React, { useState } from "react";
import { Button, FlatList, Text, View } from "react-native";

const Color: React.FC = () => {
  const [colors, setColors] = useState<
    { name: string; color: string; size: number }[]
  >([{ name: "red", color: "red", size: 100 }]);

  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />

      <FlatList
        keyExtractor={item => item.name}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View style={{ padding: 10 }}>
              <View
                style={{
                  height: item.size,
                  width: item.size,
                  backgroundColor: item.color,
                }}
              />
              <Text>{item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};
const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return {
    name: `red${red}, green:${green}, blue:${blue}`,
    color: `rgb(${red}, ${green}, ${blue})`,
    size: Math.floor(Math.random() * 100),
  };
};

export default Color;
