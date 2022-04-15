import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import styles from "./styles";
const friends = [
  { name: "Friend #1", age: 20 },
  { name: "Friend #2", age: 21 },
  { name: "Friend #3", age: 22 },
  { name: "Friend #4", age: 23 },
  { name: "Friend #5", age: 24 },
  { name: "Friend #6", age: 25 },
  { name: "Friend #7", age: 26 },
  { name: "Friend #8", age: 27 },
  { name: "Friend #9", age: 28 },
];

const Info: React.FC = () => {
  // const a: string = "a";
  // const num: number = "num";
  // function minimal1(a: number, b: number): number {
  //   return a < b ? a : b;
  // }
  // const minimal2 = (a: string, b: string): string => {
  //   return a < b ? a : b;
  // };

  // console.log("minimal1", minimal1(1, 2));
  // console.log("minimal12", minimal1("1", "2"));

  // console.log(minimal2("2", "3"));

  // const minimal = <T,>(a: T, b: T): T => {
  //   return a < b ? a : b;
  // };
  // console.log("minimal", minimal(1234, 5678));
  // console.log("minimal", minimal("d", "b"));

  // const printRest = (first: number, ...rest: number[]) => {
  //   console.log("first:", first);
  //   console.log("rest:", rest);
  // };
  // printRest(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

  // const myFn = (someArg: number) => {
  //   return someArg > 5;
  // };
  // myFn.description = "checks if arg is greater than 5";
  // myFn.abcd = "abcd checks if arg is greater than 5";
  // myFn.anotherFn = (someArg: number) => {
  //   return someArg < 5;
  // };
  // console.log(myFn(6));
  // console.log(myFn.abcd);
  // console.log(myFn.anotherFn(6));

  // type GreetFunction = (a: string) => void;
  // const greeter: GreetFunction = (a: string) => {
  //   console.log("hello:", a);
  // };
  // greeter("John");

  // type DescribableFunction = {
  //   description: string;
  //   (someArg: number): boolean;
  // };

  // function doSomething(fn: DescribableFunction) {
  //   console.log(fn.description + " returned " + fn(6));
  // }

  // const myDescFn: DescribableFunction = (someArg: number) => someArg > 10;
  // myDescFn.description =
  //   "The DescribableFunction to check if number is large than 10";
  // doSomething(myDescFn);

  // interface Person {
  //   name: string;
  //   age: number;
  // }

  // const greet = (person: Person): string => {
  //   return "Hello " + person.name;
  // };

  // const jenny: Person = { name: "jenny1", age: 30 };
  // console.log(greet(jenny));

  // interface BasicAddress {
  //   name?: string;
  //   street: string;
  //   city: string;
  //   country: string;
  //   postalCode: string;
  // }

  // interface AddressWithUnit extends BasicAddress {
  //   unit: string;
  // }

  // const address: AddressWithUnit = {
  //   unit: "05-08",
  //   name: "Georage",
  //   street: "30 1A Shelfrod",
  //   city: "Singapore",
  //   country: "SG",
  //   postalCode: "288534",
  // };
  // console.log(address);

  // interface Colorful {
  //   color: string;
  // }
  // interface Circle {
  //   radius: number;
  // }

  // type ColorfulCircle = Colorful & Circle;

  // const colorCircle: ColorfulCircle = { color: "red", radius: 5 };
  // console.log("colorCircle", colorCircle);

  // class Point {
  //   x: number;
  //   y: number;

  //   constructor(x = 0, y = 0) {
  //     this.x = x;
  //     this.y = y;
  //   }
  // }

  // const pt = new Point();
  // console.log(pt.x, pt.y);

  // class Box<Type> {
  //   contents: Type;
  //   constructor(value: Type) {
  //     this.contents = value;
  //   }
  // }

  // const b = new Box("hello!");
  // console.log(b.contents);
  // const c = new Box(123);
  // console.log(c.contents);
  // const d = new Box({ a: "abc", b: "def" });
  // console.log(d.contents);

  let sumFunctionWithIf = (
    a: number,
    b: number,
    inconsistentParameter: any,
  ): number => {
    console.log(inconsistentParameter);
    if (inconsistentParameter === undefined) {
      return a + b;
    } else {
      return a + b + inconsistentParameter;
    }
    // if (typeof inconsistentParameter === "number") {
    //   return a + b + inconsistentParameter;
    // } else {
    //   return a + b;
    // }
  };

  console.log(sumFunctionWithIf(1, 2, undefined));
  const name = "Anya";
  return (
    <View style={styles.container}>
      <Text style={styles2.textStyle}>Getting started with React Native!</Text>
      <Text style={styles2.subHeaderStyle}>My name is {name}</Text>
      <FlatList
        keyExtractor={friend => friend.name}
        data={friends}
        renderItem={({ item }) => {
          return (
            <Text style={styles2.textStyle2}>
              {item.name} - Age {item.age}
            </Text>
          );
        }}
      />
    </View>
  );
};

export default Info;

const styles2 = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  textStyle2: {
    fontSize: 30,
  },
  subHeaderStyle: {
    fontSize: 20,
  },
});
