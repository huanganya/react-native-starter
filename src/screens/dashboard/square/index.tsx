import React, { useState } from "react";
import { Text, View } from "react-native";
import ColorCounter from "../../../components/ColorCounter";

const COLOR_INCREMENT = 15;
enum Color {
  RED = "Red",
  GREEN = "Green",
  BLUE = "Glue",
}
const Square: React.FC = () => {
  const [colors, setColors] = useState<{
    red: number;
    green: number;
    blue: number;
  } | null>(null);
  const { red, green, blue } = colors ? colors : { red: 0, green: 0, blue: 0 };

  const setColor = (color: string, change: number): void => {
    switch (color) {
      case Color.RED:
        !(red + change > 255 || red + change < 0) &&
          setColors({ blue, green, red: red + change });
        return;
      case Color.GREEN:
        !(green + change > 255 || green + change < 0) &&
          setColors({ red, blue, green: green + change });
        return;
      case Color.BLUE:
        !(blue + change > 255 || blue + change < 0) &&
          setColors({ red, green, blue: blue + change });
        return;
      default:
        return;
    }
  };

  return (
    <View style={{ padding: 10 }}>
      {[Color.RED, Color.BLUE, Color.GREEN].map(item => (
        <ColorCounter
          key={item}
          onIncrease={() => setColor(item, COLOR_INCREMENT)}
          onDecrease={() => setColor(item, -1 * COLOR_INCREMENT)}
          color={item}
        />
      ))}
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
      <Text>
        {Color.RED}: {red}; {Color.GREEN}: {green}; {Color.BLUE}: {blue}
      </Text>
    </View>
  );
};

export default Square;
