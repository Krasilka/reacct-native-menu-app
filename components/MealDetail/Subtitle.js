import { View, StyleSheet, Text, Image } from "react-native";

function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}
export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: "#471655",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  subtitleContainer: {
    marginHorizontal: 12,
    marginVertical: 4,
    padding: 6,
    borderBottomColor: "#471655",
    borderBottomWidth: 1,
  },
});
