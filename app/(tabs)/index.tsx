import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Lesson1 } from "@/components/home/Lesson01";
import { Lesson2 } from "@/components/home/Lesson02";
import { Lesson3 } from "@/components/home/Lesson03";
import { Lesson4 } from "@/components/home/Lesson04";
import { Lesson5 } from "@/components/home/Lesson05";
import { Lesson6 } from "@/components/home/Lesson06";
import { Lesson7 } from "@/components/home/Lesson07";
import { Lesson8 } from "@/components/home/Lesson08";
import { Lesson9 } from "@/components/home/Lesson09";
import { Lesson10 } from "@/components/home/Lesson10";
import { Lesson11 } from "@/components/home/Lesson11";
import { Lesson12 } from "@/components/home/Lesson12";
import { Lesson13 } from "@/components/home/Lesson13";
import { Lesson14 } from "@/components/home/Lesson14";
import { Lesson15 } from "@/components/home/Lesson15";
import { Lesson16 } from "@/components/home/Lesson16";

import { Lesson17 } from "@/components/home/Lesson17";
import { Lesson18 } from "@/components/home/Lesson18";
import { Lesson19 } from "@/components/home/Lesson19";
import { Lesson20 } from "@/components/home/Lesson20";
import { styles } from "./index.styles";

export default function HomeScreen() {
  useEffect(() => {
    console.log("화면이 실행됨");
  }, []);

  return (
    <SafeAreaView style={styles.page}>
      <StatusBar style="auto"></StatusBar>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.container}>
          <Lesson1></Lesson1>
          <Lesson2></Lesson2>
          <Lesson3></Lesson3>
          <Lesson4></Lesson4>
          <Lesson5></Lesson5>
          <Lesson6></Lesson6>
          <Lesson7></Lesson7>
          <Lesson8></Lesson8>
          <Lesson9></Lesson9>
          <Lesson10></Lesson10>
          <Lesson11></Lesson11>
          <Lesson12></Lesson12>
          <Lesson13></Lesson13>
          <Lesson14></Lesson14>
          <Lesson15></Lesson15>
          <Lesson16></Lesson16>
          <Lesson17></Lesson17>
          <Lesson18></Lesson18>
          <Lesson19></Lesson19>
          <Lesson20></Lesson20>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
