import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import className from "twrnc";
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();
  return (
    <Pressable
      onPress={() => router.push("/home")}
      style={className` bg-orange-500 flex-1 justify-center items-center`}
    >
      <Image
        style={className` w-70 h-70`}
        source={require("../assets/foodt1.webp")}
      />
      <Text style={className` text-6xl font-bold text-white `}>Foody </Text>
      <Text style={className` text-lg text-white font-semibold`}>
        Food is always right!
      </Text>
    </Pressable>
  );
};

export default index;
