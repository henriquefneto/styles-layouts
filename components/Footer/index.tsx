import { View, Text, StyleSheet } from "react-native";
import React from "react";
import theme from "@/contants/theme";
import IconButton from "./IconButton";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Footer() {
  return (
    <View style={styles.container}>
      <IconButton icon="home" text="Início" active />
      <IconButton icon="rocket1" text="Jogos" />
      <IconButton icon="playcircleo" text="Novidades" />
      <IconButton icon="codesquareo" text="Minha Netflix" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: theme.dimension.xs,
    justifyContent: "space-around",
    paddingHorizontal: theme.dimension.xs,
  },
});
