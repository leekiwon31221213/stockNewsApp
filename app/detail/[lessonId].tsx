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
import { Lesson21 } from "@/components/home/Lesson21";
import { Lesson22 } from "@/components/home/Lesson22";
import { Lesson23 } from "@/components/home/Lesson23";
import { Lesson24 } from "@/components/home/Lesson24";
import { Lesson25 } from "@/components/home/Lesson25";
import { Lesson26 } from "@/components/home/Lesson26";
import { Lesson27 } from "@/components/home/Lesson27";
import { Lesson28 } from "@/components/home/Lesson28";
import { Lesson29 } from "@/components/home/Lesson29";
import { Lesson30 } from "@/components/home/Lesson30";
import { Lesson31 } from "@/components/home/Lesson31";
import { Lesson32 } from "@/components/home/Lesson32";
import { Lesson33 } from "@/components/home/Lesson33";
import { Lesson34 } from "@/components/home/Lesson34";
import { Lesson35 } from "@/components/home/Lesson35";
import { Lesson36 } from "@/components/home/Lesson36";
import { Lesson37 } from "@/components/home/Lesson37";
import { Lesson38 } from "@/components/home/Lesson38";
import { Lesson39 } from "@/components/home/Lesson39";
import { Lesson40 } from "@/components/home/Lesson40";
import { Lesson41 } from "@/components/home/Lesson41";
import { router, useLocalSearchParams } from "expo-router";
import { ComponentType } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./[lessonId].styles";

const LESSON_COMPONENTS: Record<string, ComponentType> = {
  "1": Lesson1,
  "2": Lesson2,
  "3": Lesson3,
  "4": Lesson4,
  "5": Lesson5,
  "6": Lesson6,
  "7": Lesson7,
  "8": Lesson8,
  "9": Lesson9,
  "10": Lesson10,
  "11": Lesson11,
  "12": Lesson12,
  "13": Lesson13,
  "14": Lesson14,
  "15": Lesson15,
  "16": Lesson16,
  "17": Lesson17,
  "18": Lesson18,
  "19": Lesson19,
  "20": Lesson20,
  "21": Lesson21,
  "22": Lesson22,
  "23": Lesson23,
  "24": Lesson24,
  "25": Lesson25,
  "26": Lesson26,
  "27": Lesson27,
  "28": Lesson28,
  "29": Lesson29,
  "30": Lesson30,
  "31": Lesson31,
  "32": Lesson32,
  "33": Lesson33,
  "34": Lesson34,
  "35": Lesson35,
  "36": Lesson36,
  "37": Lesson37,
  "38": Lesson38,
  "39": Lesson39,
  "40": Lesson40,
  "41": Lesson41,
};

const LESSON_WITH_OWN_SCROLL = ["6", "19", "33", "37", "41"];

export default function LessonDetailScreen() {
  const { lessonId } = useLocalSearchParams<{ lessonId: string }>();
  const LessonComponent = LESSON_COMPONENTS[lessonId];

  if (!LessonComponent) {
    return (
      <SafeAreaView style={styles.page}>
        <View style={styles.emptyContent}>
          <Text style={styles.emptyText}>해당 차시를 찾을 수 없습니다.</Text>
          <Pressable onPress={() => router.back()} style={({ pressed }) => [styles.backButton, pressed && styles.backButtonPressed]}>
            <Text style={styles.backButtonText}>목록으로 돌아가기</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  if (LESSON_WITH_OWN_SCROLL.includes(lessonId)) {
    return (
      <SafeAreaView style={styles.page} edges={["bottom"]}>
        <View style={styles.content}>
          <LessonComponent></LessonComponent>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.page} edges={["bottom"]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <LessonComponent></LessonComponent>
      </ScrollView>
    </SafeAreaView>
  );
}
