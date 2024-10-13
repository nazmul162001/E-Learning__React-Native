import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 justify-center items-center h-screen bg-white">
      <Text className="text-black text-3xl font-pblack">Starter Template!</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{ color: "blue" }}>
        Testing Navigation - Profile
      </Link>
    </View>
  );
}
