import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Card, deckOfCards } from "./components/Card";

let cards = deckOfCards;

// let hand = cards.map(Card);
let hand: JSX.Element[] = [];
let i: number = 0;

export default function App() {
  return (
    // Hand isn't being rerendered, but cards are getting added correctly
    <View style={styles.container}>
      {hand}
      <Button
        title="Draw"
        onPress={() => {
          hand.push(Card(cards[i]));
          i++;
        }}
      />
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
