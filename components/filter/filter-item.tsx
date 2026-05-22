import { colors } from "@/constants/colors";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type FilterProps = {
  title: string;
};

export default function FilterItem({ title }: FilterProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 10,
    borderRadius: 20,
    backgroundColor: colors.cardBackground,
  },
  title: {
    color: colors.foreground,
    fontWeight: "bold",
  },
});
