import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import React from "react";
import IconSearch from "../../../assets/icons/IconSearch";
import { colors } from "../../constants/colors";

type CustomSearchBarProps = {
  placeholder?: string;
} & TextInputProps;

const CustomSearchBar: React.FC<CustomSearchBarProps> = ({
  placeholder = "Search",
  ...props
}) => {
  return (
    <View style={styles.container}>
      <IconSearch style={styles.icon} />
      <TextInput
        style={styles.searchInput}
        placeholder={placeholder}
        placeholderTextColor={colors.PLACEHOLDER_TEXT}
        {...props}
      />
    </View>
  );
};

export default CustomSearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.BACKGROUND_SEARCHBAR,
    borderRadius: 12,
    paddingHorizontal: 16,
    minHeight: 48,
    marginTop: 12,
    borderWidth: 0.5,
    borderColor: colors.BORDER_SEARCHBAR,
  },
  icon: {
    marginRight: 12,
  },
  searchInput: {
    fontSize: 16,
    color: colors.TEXT_PRIMARY,
    flex: 1,
    fontFamily: "Rubik-Regular",
    letterSpacing: 0.07,
  },
});
