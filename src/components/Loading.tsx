import { View, ActivityIndicator } from "react-native";

export default function LoadingScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "gray", justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator color="yellow" size="large" />
    </View>
  );
}
