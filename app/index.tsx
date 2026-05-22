import Caroussel from "@/components/caroussel";
import LikedSongs from "@/components/liked-songs";
import ScreenWrapper from "@/components/screen-wrapper";
import { metallicaAlbums } from "@/mocks/albums";
import React from "react";

export default function index() {
  return (
    <ScreenWrapper>
      <LikedSongs />
      <Caroussel title="Metallica" albums={metallicaAlbums} />
    </ScreenWrapper>
  );
}
