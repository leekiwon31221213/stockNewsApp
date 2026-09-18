import * as Sentry from "@sentry/react-native";
export function initSentry() {
  const dsn = process.env.EXPO_PUBLIC_SENTRY_DSN;

  if (!dsn) {
    console.log("Sentry DSN이 없습니다.");
    return;
  }

  Sentry.init({
    dsn,
    tracesSampleRate: 1.0,
  });
}
export function reportError(error: unknown) {
  console.log("에러 추적", error);
  // 나중에 Sentry를 실제 연결하면
  // 여기에서 Sentry.captureException(error)를 사용한다.
  Sentry.captureException(error);
}
export { Sentry };
