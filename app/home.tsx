import { View, Text, TextInput, FlatList, ScrollView } from "react-native";
import React from "react";
import className from "twrnc";
import { Ionicons, Octicons, AntDesign } from "@expo/vector-icons";
import categoriesData from "../assets/data/category.json";
import Category from "@/components/category";
import Recipe from "@/components/Recipe";

const Home = () => {
  return (
    <ScrollView>
      <View style={className`flex-1`}>
        <View style={className` p-5 flex-row justify-between`}>
          {/* header */}
          <Ionicons name="person-circle" size={50} color="orange" />
          <Octicons name="bell" size={40} color="black" />
          {/* header */}
        </View>

        {/* Text */}
        <View style={className`p-5 pt-0`}>
          <Text style={className` font-semibold text-lg`}>Hello, Lummy!</Text>

          <Text style={className` font-bold text-3xl `}>
            Make your own food,stay at{" "}
            <Text style={className` text-orange-500 `}>home.</Text>
          </Text>
        </View>
        {/* Text */}

        {/* Search input */}

        <View
          style={className` bg-gray-200 p-2 rounded-full mx-5 flex-row justify-start items-center gap-2`}
        >
          <TextInput
            style={className`flex-1  text-lg font-semibold p-3 rounded-l-full`}
            placeholder="Search any recipe"
          />
          <AntDesign
            name="search1"
            style={className` bg-white p-2 rounded-full`}
            size={24}
            color="black"
          />
        </View>
        {/* Search input */}

        {/*CategoryList */}
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categoriesData.categories}
            keyExtractor={(item) => item.idCategory}
            renderItem={({ item }) => (
              <Category
                image={item.strCategoryThumb}
                description={item.strCategory}
              />
            )}
          />
        </View>
        {/* CategoryList */}

        {/* Recipe */}
        <View style={className`p-5`}>
          <Text style={className`font-bold text-2xl mb-4`}>Recipes</Text>

          <FlatList
            numColumns={2}
            showsVerticalScrollIndicator={false}
            data={categoriesData.categories}
            keyExtractor={(item) => item.idCategory}
            renderItem={({ item }) => (
              <Recipe
                image={item.strCategoryThumb}
                description={item.strCategory}
              />
            )}
            columnWrapperStyle={{
              justifyContent: "space-between",
              marginBottom: 15,
            }}
          />
        </View>
        {/* Recipe */}
      </View>
    </ScrollView>
  );
};

export default Home;
