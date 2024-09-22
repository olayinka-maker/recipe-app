import { View, Text, Image } from "react-native";
import React from "react";
import className from "twrnc";

interface CatgProp {
  image: string;
  description: string;
}

const Category = ({ image, description }: CatgProp) => {
  return (
    <View style={className`p-4 flex items-center`}>
      {/* Using dynamic image URI */}
      <Image
        source={{ uri: image }}
        style={className`w-15 h-12 bg-gray-300 rounded-full`}
      />
      <Text style={className`mt-1 font-semibold text-gray-500`}>
        {description}
      </Text>
    </View>
  );
};

export default Category;
