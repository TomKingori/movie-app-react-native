import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  Dimensions,
} from "react-native";
import React from "react";
import { ChevronLeftIcon, HeartIcon } from "react-native-heroicons/outline";
import { styles } from "../theme";
import { useNavigation } from "@react-navigation/native";

var { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";

export default function MoviesTitles() {
  const navigation = useNavigation();

  return (
    <ScrollView
      className="flex-1 bg-neutral-900"
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      {/* back button */}
      <SafeAreaView className="flex-row justify-between items-center px-4 mt-14">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.background}
          className="rounded-xl p-1"
        >
          <ChevronLeftIcon size="25" strokeWidth={2.5} color="white" />
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
}
