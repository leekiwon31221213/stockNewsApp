import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#f1f1f1",
  },
  content: {
    padding: 20,
  },
  container: {
    alignItems: "center",
    gap: 20,
  },
  container__inner: {
    flexDirection: "column",
  },
  lesson: {
    width: "100%",
    padding: 20,
    gap: 12,
    backgroundColor: "#ffffff",
    borderRadius: 12,
  },
  lessonTitle: {
    marginBottom: 4,
    fontSize: 20,
    fontWeight: "700",
    color: "#111111",
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 20,
    color: "black",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: "#333",
    borderRadius: 10,
    marginTop: 20,
  },
  scroll: {
    padding: 20,
    gap: 20,
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "100%",
    maxWidth: 360,
    padding: 24,
    gap: 20,
    backgroundColor: "#ffffff",
    borderRadius: 16,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111111",
    textAlign: "center",
  },
  modalCloseButton: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: "#111111",
    borderRadius: 10,
  },
  modalCloseButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
    textAlign: "center",
  },
});
