import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
// import Card from "./components/Card";

// Move to own file?
type CardProps = {
  value: string;
  suit: string;
  // Key right now should be "value+suit", and has to be manually set as such.
  // See if there's a way to set that dynamically. It is required to be unique
  // from the other keys: https://sentry.io/answers/unique-key-prop/
  key: string;
};

const Card = (props: CardProps) => {
  return (
    <Text key={props.key}>
      Your card is: {props.value} of {props.suit}
    </Text>
  );
};

let kingCard: CardProps = { value: "King", suit: "Clubs", key: "KingClubs" };
let queenCard: CardProps = {
  value: "Queen",
  suit: "Hearts",
  key: "QueenHearts",
};

// Map the cards to components
let cards: CardProps[] = [kingCard, queenCard];
let hand = cards.map(Card);

export default function App() {
  return <View style={styles.container}>{hand}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
