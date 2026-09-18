import { styles } from "@/app/(tabs)/index.styles";
import { Text, View } from "react-native";

export function Lesson40() {
  return (
    <View style={styles.lesson}>
      <Text style={styles.lessonTitle}>40차시 - Android·iOS 실제 배포 빌드와 업데이트 이해하기</Text>

      <Text>참고할만한 파일: app.json</Text>

      <Text>app.json: 앱 이름·권한·아이콘·Splash·플러그인·딥링크 설정</Text>

      <Text>android.package: Android 앱 고유 ID</Text>

      <Text>ios.bundleIdentifier: iOS 앱 고유 ID</Text>

      <Text>scheme: 앱 링크 실행 주소 이름</Text>

      <Text>eas.json: development·preview·production 빌드 설정</Text>

      <Text>Development Build: 개발용 빌드</Text>

      <Text>Preview Build: 내부 테스트용 빌드</Text>

      <Text>Production Build: 실제 스토어 배포용 빌드</Text>

      <Text>EAS Build: 앱 설치 파일 생성</Text>

      <Text>EAS Submit: 만든 앱 파일을 스토어에 제출</Text>

      <Text>EAS Update: 재빌드 없이 JS 코드·화면 일부 빠른 반영</Text>

      <Text>APK: Android 직접 설치·내부 테스트용</Text>

      <Text>AAB: Google Play Store 제출용</Text>
    </View>
  );
}
