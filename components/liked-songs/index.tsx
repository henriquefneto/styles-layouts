import React from "react";
import { StyleSheet, View } from "react-native";
import MusicCard from "../music-card";

const MEUS_DADOS = [
  { id: "1", titulo: "AC/DC" },
  { id: "2", titulo: "Metallica" },
  { id: "3", titulo: "Bon Jovi" },
  { id: "4", titulo: "Gorillaz" },
  { id: "5", titulo: "Linkin Park" },
  { id: "6", titulo: "Red Hot Chili Peppers" },
];

export default function LikedSongs() {
  return (
    <View>
      <View style={styles.grid}>
        {MEUS_DADOS.map((item) => (
          <View style={styles.container}>
            <MusicCard title={item.titulo} />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
