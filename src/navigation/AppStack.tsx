import React, { ReactElement } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabStack from "./BottomTabStack";
import DemoScreen from "../screens/dashboard/demo";
import ColorScreen from "../screens/dashboard/color";
import CounterScreen from "../screens/dashboard/counter";
import InfoScreen from "../screens/dashboard/info";
import LoginScreen from "../screens/login";
import WelcomeScreen from "../screens/welcome";
import { NavigationNames } from "../constants/navigation-names";

type RootStackParamList = {
  [key in keyof typeof NavigationNames]?: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const AppStack = (): ReactElement => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Welcome"}
        screenOptions={{ gestureEnabled: false }}>
        <Stack.Screen
          name={NavigationNames.Login}
          component={LoginScreen}
          options={{
            title: "Login",
            headerLeft: () => null,
          }}
        />
        <Stack.Screen
          name={NavigationNames.Welcome}
          component={WelcomeScreen}
          options={{
            title: "Welcome",
          }}
        />
        <Stack.Screen
          name={NavigationNames.Dashboard}
          component={BottomTabStack}
          options={{
            headerLeft: () => null,
          }}
        />
        <Stack.Screen
          name={NavigationNames.Info}
          component={InfoScreen}
          options={{
            title: "Info",
          }}
        />
        <Stack.Screen
          name={NavigationNames.Demo}
          component={DemoScreen}
          options={{
            title: "Demo",
          }}
        />
        <Stack.Screen
          name={NavigationNames.Color}
          component={ColorScreen}
          options={{
            title: "Color",
          }}
        />
        <Stack.Screen
          name={NavigationNames.Counter}
          component={CounterScreen}
          options={{
            title: "Counter",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
