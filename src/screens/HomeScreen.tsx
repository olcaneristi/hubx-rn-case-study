import React, { useEffect } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import PromoBanner from "../components/PromoBanner";
import QuestionCard from "../components/cards/QuestionCard";
import CategoryCard from "../components/cards/CategoryCard";
import CustomHeader from "../components/ui/CustomHeader";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { fetchCategories } from "../store/slices/categoriesSlice";
import { fetchQuestions } from "../store/slices/questionsSlice";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CustomText from "../components/ui/CustomText";

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector(
    (state: RootState) => state.categories.categories
  );
  const questions = useSelector(
    (state: RootState) => state.questions.questions
  );

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchQuestions());
  }, []);

  return (
    <>
      <CustomHeader />
      <ScrollView>
        <PromoBanner />

        <CustomText style={styles.sectionTitle}>Get Started</CustomText>
        <FlatList
          data={questions}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <QuestionCard
              title={item.title}
              subtitle={item.subtitle}
              imageUri={item.image_uri}
              uri={item.uri}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
        />

        <FlatList
          data={categories}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <CategoryCard title={item.title} imageUri={item.image.url} />
          )}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.verticalList}
          scrollEnabled={false}
        />
      </ScrollView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
    paddingHorizontal: 24,
  },
  horizontalList: {
    marginHorizontal: 24,
    gap: 12,
  },
  verticalList: {
    paddingHorizontal: 24,
    marginVertical: 24,
    gap: 12,
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
});
