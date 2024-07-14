import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../constants/colors";
import { BlurView } from "expo-blur";
import ReactNativeModal from "react-native-modal";
import styles from "../styles/CardStyles";

const Card = ({ name, image }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.name}>{name}</Text>
        <TouchableOpacity style={styles.menuButton} onPress={openModal}>
          <MaterialIcons name="more-vert" size={24} color={colors.white} />
        </TouchableOpacity>
      </View>
      <Image source={image} style={styles.image} />
      <ReactNativeModal
        isVisible={modalVisible}
        onBackdropPress={closeModal}
        onBackButtonPress={closeModal}
        backdropTransitionOutTiming={0}
        style={styles.modal}
      >
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalBackground}>
            <BlurView intensity={50} tint="dark" style={styles.blurView}>
              <View style={styles.modalContainer}>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => {
                    /* Add your report functionality here */
                  }}
                >
                  <Text style={styles.modalButtonText}>Report</Text>
                </TouchableOpacity>
                <View style={styles.separator} />
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => {
                    /* Add your remove functionality here */
                  }}
                >
                  <Text style={styles.modalButtonText}>Remove</Text>
                </TouchableOpacity>
              </View>
            </BlurView>
          </View>
        </TouchableWithoutFeedback>
      </ReactNativeModal>
    </View>
  );
};

export default Card;
