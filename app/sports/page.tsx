import React from "react";
import Soccer from "./_components/soccer";
import IceHockey from "./_components/ice-hockey";
import Basketball from "./_components/basketball";
import Tennis from "./_components/tennis";
import Volleyball from "./_components/volleyball";
import CS2 from "./_components/cs-2";
import Dota2 from "./_components/dots-2";

export default function Sports() {
  return (
    <>
      <Soccer />
      <IceHockey />
      <Basketball />
      <Tennis />
      <Volleyball />
      <CS2 />
      <Dota2 />
    </>
  );
}
