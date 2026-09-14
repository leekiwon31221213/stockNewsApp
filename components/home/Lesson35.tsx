import { styles } from "@/app/(tabs)/index.styles";
import NetInfo, { type NetInfoState } from "@react-native-community/netinfo";
import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";

export function Lesson35() {
  // 현재 인터넷 연결 여부
  const [isConnected, setIsConnected] = useState<boolean | null>(null);

  // 현재 연결 종류
  const [networkType, setNetWorkType] = useState<string>("unknown");

  useEffect(() => {
    // 네트워크 상태가 바뀔 때마다 실행
    const unsubscribe = NetInfo.addEventListener((state: NetInfoState) => {
      console.log("네트워크 상태", state);

      setIsConnected(state.isConnected);
      setNetWorkType(state.type);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  function getNetworkStatusText() {
    if (isConnected === null) {
      return "확인 중";
    }

    if (isConnected) {
      return "연결됨";
    }

    return "연결 안됨";
  }

  async function handleCheckNetwork() {
    // 현재 네트워크 상태를 한 번만 확인
    const state = await NetInfo.fetch();

    console.log("현재 인터넷 연결 여부", state.isConnected);
    console.log("현재 인터넷 연결 가능 여부", state.isInternetReachable);
    console.log("현재 네트워크 종류", state.type);
  }

  return (
    <View style={styles.lesson}>
      <Text style={styles.lessonTitle}>35차시 - 인터넷 연결 상태 확인하고 끊겼을 때 대응하기</Text>

      <Text>
        인터넷 연결 상태:{""}
        {getNetworkStatusText()}
      </Text>
      <Text>네트워크 종류: {networkType}</Text>

      {isConnected === false && <Text>인터넷 연결을 확인해 주세요</Text>}

      <Pressable onPress={handleCheckNetwork} style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}>
        <Text style={styles.btnText}>현재 네트워크 확인</Text>
      </Pressable>
    </View>
  );
}
