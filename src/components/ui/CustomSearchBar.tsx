import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import React from "react";
import IconSearch from "../../../assets/icons/IconSearch";

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
        placeholderTextColor="#AFAFAF"
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
    backgroundColor: "rgba(255, 255, 255, 0.88)",
    borderRadius: 12,
    paddingHorizontal: 16,
    minHeight: 48,
    marginTop: 12,
    borderWidth: 0.5,
    borderColor: "#3C3C4340",
  },
  icon: {
    marginRight: 12,
  },
  searchInput: {
    fontSize: 16,
    color: "#13231B",
    flex: 1,
    fontFamily: "Rubik-Regular",
    letterSpacing: 0.07,
  },
});
