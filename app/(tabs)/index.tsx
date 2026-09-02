import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Dimensions, Image, Keyboard, Modal, Pressable, ScrollView, Text, TextInput, useWindowDimensions, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./index.styles";
import type * as Types from "./index.type";

import { popularList as getPopularList, type PopularList, singUp } from "@/api/news";

// 8차시
function PropsStudy_8({ name }: Types.PropsStudy8Props) {
  return (
    <>
      <Text>{name}</Text>
    </>
  );
}
// 9차시
function TypeStudy9({ name, age }: Types.TypeStudy9) {
  const [inputName, setInputName] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <Text>{name}</Text>
      <Text>{age}</Text>
    </>
  );
}

// 10차시

function Button_10({ title, onPress }: Types.ButtonProps) {
  return (
    <>
      <Pressable onPress={onPress}>
        <Text>{title}</Text>
      </Pressable>
    </>
  );
}

function Input_10({ value, placeholder, onChangeText, style }: Types.InputProps) {
  return (
    <>
      <TextInput value={value} placeholder={placeholder} onChangeText={onChangeText} style={style}></TextInput>
    </>
  );
}

function Modal_10({ visible, onClose }: Types.ModalProps) {
  return (
    <>
      <Modal visible={visible} transparent={true} animationType="fade" onRequestClose={onClose}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>모달</Text>

            <Pressable onPress={onClose} style={styles.modalCloseButton}>
              <Text style={styles.modalCloseButtonText}>닫기</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
}

// 13차시

const news = [
  { id: "1", title: "삼성전자 주가 상승" },
  { id: "2", title: "애플 신제품 발표" },
  { id: "3", title: "엔비디아 실적 발표" },
];

// 14차시

export default function HomeScreen() {
  const { width: width1, height: height1 } = Dimensions.get("window");
  const { width: width2, height: height2 } = useWindowDimensions();
  const [count, setCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [recoveryEmail, setRecoveryEmail] = useState("");

  const [popularList, setPopularList] = useState<PopularList[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  async function SendSignUpBtn() {
    await singUp({
      email: email,
      password: password,
      recoveryEmail: recoveryEmail,
    });
  }

  const handlePress = () => {
    alert("버튼클릭");
    Keyboard.dismiss(); /* 키보드 닫기  */
  };

  const [name, setName] = useState("");

  const handleChangeName = (text: string) => {
    setName(text);
  };

  async function handleGetPopularList() {
    try {
      setIsLoading(true);
      setError("");
      const data = await getPopularList();
      console.log("인기 목록 데이터", data);
      setPopularList(data);
    } catch (e) {
      setError("데이터를 불러오지 못했습니다.");
    } finally {
      setIsLoading(false);
    }
  }

  const users = [
    { id: "1", name: "기원" },
    { id: "2", name: "철수" },
    { id: "3", name: "영희" },
  ];

  useEffect(() => {
    console.log("화면이 실행됨");
  }, []);

  // 10차시
  function handleModalOn() {
    setIsModalOpen(true);
    console.log("모달열림");
  }

  function handleModalOff() {
    setIsModalOpen(false);
    console.log("모달닫힘");
  }

  return (
    <SafeAreaView style={styles.page}>
      <StatusBar style="auto"></StatusBar>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.container}>
          <View style={styles.lesson}>
            <Text style={styles.lessonTitle}>1차시 - Text와 View</Text>

            <View style={styles.container__inner}>
              <Text>안녕하세요</Text>
              <Text>방갑습니다</Text>
              <Text>
                프론트엔드 개발자
                <Text>React Native 공부 중</Text>
              </Text>
            </View>
          </View>

          <View style={styles.lesson}>
            <Text style={styles.lessonTitle}>2차시 - Image</Text>

            <Image source={{ uri: "https://iili.io/CO0IkAl.png" }} style={styles.image}></Image>
            <Image source={require("@/assets/images/img1.png")} style={styles.image}></Image>
          </View>

          <View style={styles.lesson}>
            <Text style={styles.lessonTitle}>3차시 - Pressable과 Keyboard</Text>

            <Pressable onPress={handlePress}>
              <Text style={styles.title}>버튼</Text>
            </Pressable>
          </View>

          <SafeAreaView style={styles.lesson}>
            <Text style={styles.lessonTitle}>4차시 - 화면 크기와 SafeAreaView</Text>
            <Text>휴대폰의 안전한 영역 (상태바와 안겹치게)</Text>

            <Text>Dimensions 가로{width1}</Text>
            <Text>Dimensions 세로{height1}</Text>

            <Text>useWindowDimensions 가로{width2}</Text>
            <Text>useWindowDimensions 세로{height2}</Text>
          </SafeAreaView>

          <View style={styles.lesson}>
            <Text style={styles.lessonTitle}>5차시 - TextInput</Text>

            <TextInput value={name} onChangeText={setName} placeholder="onChangeText" style={styles.input}></TextInput>

            <TextInput value={name} onChangeText={handleChangeName} placeholder="직접 함수를 만들어서 받기" style={styles.input}></TextInput>

            <TextInput style={styles.input} placeholder="secureTextEntry  비밀번호 입력창" secureTextEntry></TextInput>

            <TextInput style={styles.input} placeholder="키보드 종류 바꾸기 이메일" keyboardType="email-address"></TextInput>
            <TextInput style={styles.input} placeholder="키보드 종류 바꾸기 숫자만" keyboardType="numeric"></TextInput>

            <TextInput style={styles.input} placeholder="대소문자 autoCapitalize" autoCapitalize="none"></TextInput>

            <TextInput style={styles.input} placeholder="여러줄입력 multiline" multiline></TextInput>

            <TextInput style={styles.input} placeholder="최대 입력 maxLength" maxLength={10}></TextInput>

            <TextInput style={styles.input} placeholder="키보드 오른쪽 아래 버튼에 어떤 의미를 보여줄지 설정 returnKeyType done,next,search,send" returnKeyType="done"></TextInput>
          </View>

          <View style={styles.lesson}>
            <Text style={styles.lessonTitle}>6차시 - ScrollView</Text>

            <ScrollView contentContainerStyle={styles.scroll}>
              <Text>ScrollView horizontal 가로스크롤</Text>
              <Text>{'ScrollView showsVerticalScrollIndicator="Boolean" 스크롤 표시'}</Text>

              <Text>스크롤 안쪽의 내용에 스타일을 적용하고 싶을 때 contentContainerStyle을 사용</Text>
              <Text>style과 contentContainerStyle 차이</Text>
              <Text>style: ScrollView 자체</Text>
              <Text>contentContainerStyle: ScrollView 안에 들어있는 내용</Text>
            </ScrollView>
          </View>

          <View style={styles.lesson}>
            <Text style={styles.lessonTitle}>7차시 - 배열과 map</Text>

            {users.map((item) => (
              <Text key={item.id}>{item.name}</Text>
            ))}
          </View>

          <View style={styles.lesson}>
            <Text style={styles.lessonTitle}>8차시 - 데이터 전달하고 화면 상태 바꾸기(상태 변경)</Text>
            <Text>
              Props: <PropsStudy_8 name="기원"></PropsStudy_8>
            </Text>
            <Pressable
              onPress={() => {
                setCount(count + 1);
              }}
            >
              <Text>UseState: {count}</Text>
            </Pressable>
          </View>

          <View style={styles.lesson}>
            <Text style={styles.lessonTitle}>9차시 - TypeScript로 데이터 타입 정하기</Text>
            <TypeStudy9 name="기원" age={30} isLogin={true}></TypeStudy9>
          </View>

          <View style={styles.lesson}>
            <Text style={styles.lessonTitle}>10차시 - 자주 쓰는 버튼·입력창·팝업 재사용하기</Text>
            <Button_10 title="버튼 클릭" onPress={handlePress}></Button_10>
            <Input_10 value={name} placeholder="이름을 입력하세요" onChangeText={setName} style={styles.input}></Input_10>

            <Pressable onPress={handleModalOn}>
              <Text>모달열기</Text>
            </Pressable>

            <Modal_10 visible={isModalOpen} onClose={handleModalOff}></Modal_10>
          </View>

          <View style={styles.lesson}>
            <Text style={styles.lessonTitle}>11차시 - 화면 이동 기능 만들기(Stack Navigation)</Text>

            <Pressable
              onPress={() => {
                router.push("/detail/detail1");
              }}
            >
              <Text>디테일 페이지1</Text>
            </Pressable>
          </View>

          <View style={styles.lesson}>
            <Text style={styles.lessonTitle}>12차시 - 하단 탭 메뉴 만들기</Text>

            <Text>/tab/_layout.tsx참고</Text>
          </View>

          <View style={styles.lesson}>
            <Text style={styles.lessonTitle}>13차시 - 목록을 눌러 상세화면으로 데이터 전달하기</Text>

            {news.map((item) => {
              return (
                <Pressable
                  key={item.id}
                  onPress={() => {
                    router.push({
                      pathname: "/detail/detail1",
                      params: {
                        id: item.id,
                        title: item.title,
                      },
                    });
                  }}
                >
                  <Text>{item.title}</Text>
                </Pressable>
              );
            })}
          </View>

          <View style={styles.lesson}>
            <Text style={styles.lessonTitle}>14차시 - Axios로 API 호출하기</Text>

            <TextInput value={email} onChangeText={setEmail} keyboardType="email-address" style={styles.input} placeholder="이메일을 입력해주세요"></TextInput>

            <TextInput value={password} onChangeText={setPassword} style={styles.input} placeholder="비밀번호를 입력해주세요" secureTextEntry></TextInput>

            <TextInput value={recoveryEmail} onChangeText={setRecoveryEmail} keyboardType="email-address" style={styles.input} placeholder="복구 이메일을 입력해주세요"></TextInput>

            <Pressable accessibilityRole="button" style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]} onPress={SendSignUpBtn}>
              <Text style={styles.btnText}>회원가입</Text>
            </Pressable>
          </View>

          <View style={styles.lesson}>
            <Text style={styles.lessonTitle}>15차시 - API 데이터 조회하고 상태 처리하기</Text>

            <Pressable onPress={handleGetPopularList} style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}>
              <Text style={styles.btnText}>뉴스 불러오기</Text>
            </Pressable>

            {isLoading && <Text>불러오는 중...</Text>}

            {error !== "" && <Text>{error}</Text>}

            {!isLoading && error === "" && popularList.length === 0 && <Text>데이터가 없습니다.</Text>}

            {popularList.map((item) => (
              <View key={item.id}>
                <Text>{item.name}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
