import React, { useState } from "react";
import { Text, View } from "react-native";
import ColorCounter from "../../../components/ColorCounter";

const COLOR_INCREMENT = 15;

const Square: React.FC = () => {
  const [red, setRed] = useState(120);
  const [green, setGreen] = useState(120);
  const [blue, setBlue] = useState(120);
  console.log("red ", red, " green", green, " blue", blue);

  const setColor = (color: string, change: number): void => {
    switch (color) {
      case "red":
        !(red + change > 255 || red + change < 0) && setRed(red + change);
        return;
      case "green":
        !(green + change > 255 || green + change < 0) &&
          setGreen(green + change);
        return;
      case "blue":
        !(blue + change > 255 || blue + change < 0) && setBlue(blue + change);
        return;
      default:
        return;
    }
  };

  return (
    <View style={{ padding: 10 }}>
      <ColorCounter
        onIncrease={() => setColor("red", COLOR_INCREMENT)}
        onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setColor("blue", COLOR_INCREMENT)}
        onDecrease={() => setColor("blue", -1 * COLOR_INCREMENT)}
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => setColor("green", COLOR_INCREMENT)}
        onDecrease={() => setColor("green", -1 * COLOR_INCREMENT)}
        color="Green"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
      <Text>
        Red: {red}; Green: {green}; Blue: {blue}
      </Text>
    </View>
  );
};

export default Square;
