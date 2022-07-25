import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

const IconButton = ({ icon, color, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressedIcon}
    >
      <MaterialIcons name={icon} size={24} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
    pressedIcon: {
      opacity: 0.7
  },
});
