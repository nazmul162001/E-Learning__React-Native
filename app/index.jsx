import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";

export default function App() {
  return (
    <SafeAreaView className="bg-primary flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View>
          <View className="flex justify-center items-center px-4">
            {/* Logo 1 */}
            <Image
              source={images.logo3}
              className="w-[130px] h-[84px]"
              resizeMode="contain"
            />
            {/* Logo 2 */}
            <Image
              source={images.logo2}
              className="w-full max-w-[380px] h-[298px]"
              resizeMode="contain"
            />
          </View>
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary-200">Meal Mingle</Text>
            </Text>

            <Image
              source={images.path}
              className="w-[146px] h-[20px] absolute -bottom-6 right-28"
              resizeMode="contain"
            />
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Indulge in the finest meals, delivered right to your door.{" "}
            <Text className="text-secondary-200"> Eat Like a Millionaire</Text>,
            anytime, anywhere.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
