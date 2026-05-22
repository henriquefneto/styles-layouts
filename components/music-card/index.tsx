import { colors } from "@/constants/colors";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

type MusicCardProps = {
  title: string;
};

export default function MusicCard({ title }: MusicCardProps) {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/acdc.jpeg")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: colors.cardBackground,
    alignItems: "center",
    borderRadius: 6,
    overflow: "hidden",
    width: 170,
  },
  image: {
    width: 70,
    height: 70,
  },
  title: {
    color: colors.foreground,
    fontSize: 12,
    fontWeight: "bold",
    width: 90,
  },
});
