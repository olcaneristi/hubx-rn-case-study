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
import CustomText from "../components/ui/CustomText";

const HomeScreen = () => {
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

        <View style={styles.questionViewContainer}>
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
        </View>

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
  questionViewContainer: {
    marginTop: 8,
    paddingLeft: 24,
  },
  sectionTitle: {
    fontSize: 17,
  },
  horizontalList: {
    marginTop: 10,
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
