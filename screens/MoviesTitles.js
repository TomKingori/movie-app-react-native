import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  Dimensions,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, HeartIcon } from "react-native-heroicons/outline";
import { styles } from "../theme";
import { useNavigation } from "@react-navigation/native";
import Loading from "../components/loading";
import { fallbackMoviePoster, image185 } from "../api/moviedb";

var { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";

export default function MoviesTitles() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([1,2,3,4]);
  let moviename = "Inception"

  return (
    <SafeAreaView
      className="flex-1 bg-neutral-900"
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      {/* back button */}
      <View className="flex-row justify-between items-center px-4 mt-14 mb-3">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.background}
          className="rounded-xl p-1"
        >
          <ChevronLeftIcon size="25" strokeWidth={2.5} color="white" />
        </TouchableOpacity>
      </View>

      {/* Results */}
      {loading ? (
        <Loading />
      ) : results.length > 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          className="space-y-3"
        >
          <Text className="text-white font-semibold ml-1">
            Results ({results.length})
          </Text>
          <View className="flex-row justify-between flex-wrap">
            {results.map((item, index) => {
              return (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() => navigation.push("Movie", item)}
                >
                  <View className="space-y-2 mb-4">
                    <Image
                      className="rounded-3xl"
                      source={require("../assets/images/moviePoster.png")}
                      // source={{uri: image185(item?.poster_path) || fallbackMoviePoster}}
                      style={{ width: width * 0.44, height: height * 0.3 }}
                    />
                    <Text className="text-neutral-300 ml-1">
                    {
                      moviename
                    }
                    {/* {item.title && item.title.length > 22 ? `${item.title.slice(0, 22)}...` : item.title} */}

                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <View className="flex-row justify-center">
          <Image
            className="h-96 w-96"
            source={require("../assets/images/movieTime.png")}
          />
        </View>
      )}
      
        
    </SafeAreaView>
  );
}
