import { Modal, Pressable, Text, View } from "react-native";

import { styles } from "@/app/(tabs)/index.styles";
import type * as Types from "@/app/(tabs)/index.type";

export function Modal_10({ visible, onClose }: Types.ModalProps) {
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
