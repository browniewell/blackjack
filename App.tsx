import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Card, CardProps, deckOfCards } from "./components/Card";

let cards = deckOfCards;
let i: number = 0;

// TODO: 2 of Clubs gets skipped and I'm not sure why, but it might not matter
const Hand = () => {
  const [hand, setHand] = useState<CardProps[]>([]);
  return (
    <View>
      {hand?.map(Card)}
      <Button
        title="Draw"
        onPress={() => {
          setHand((arr) => [...arr, cards[i]]);
          i++;
        }}
      />
    </View>
  );
};

// let hand = cards.map(Card);

export default function App() {
  return (
    // Hand isn't being rerendered, but cards are getting added correctly
    <View style={styles.container}>
      <Hand />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
