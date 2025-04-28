import { ImageSourcePropType, TextInputProps, TextStyle, TouchableOpacityProps, ViewStyle } from "react-native";
import { ReactNode } from "react";
import { fonts } from "../constants/fonts";
import { TextProps } from "react-native-svg";

export type OnboardingStep = {
    id: number;
    title: string;
    image: ImageSourcePropType;
  };

export type AllFeature = {
  id: number;
  title: string;
  description: string;
  icon: ReactNode; 
};

export type PricingOption = {
  id: number;
  key: "monthly" | "yearly";
  title: string;
  description: string;
  hasDiscount: boolean;
};

export type TermCondition = {
  id: number;
  title: string;
};

export type QuestionCardProps = {
  title: string;
  subtitle: string;
  imageUri: string;
  uri: string;
};

export type PremiumFeatureCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

type FontType = keyof typeof fonts;

export type CustomButtonProps = {
  text?: string;
  textStyle?: TextStyle;
  textType?: FontType;
  style?: ViewStyle;
  hasChildren?: boolean;
  children?: React.ReactNode;
} & TouchableOpacityProps;

export type CustomSearchBarProps = {
  placeholder?: string;
} & TextInputProps;

export type CategoryCardProps = {
  title: string;
  imageUri: string;
};

export type SelectedPlanProps = {
  options: PricingOption[];
  selectedPlan: string;
  onSelectPlan: (planKey: string) => void;
};

export type PaginationDotsProps = {
  totalSteps: number;
  currentStep: number;
};

export type PromoBannerProps = {
  title: string;
  subtitle: string;
  onPress?: () => void;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}