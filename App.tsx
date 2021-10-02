import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
// import Card from "./components/Card";

enum Suit {
  clubs = "C",
  diamonds = "D",
  hearts = "H",
  spades = "S",
}

enum CardValue {
  ace = "A",
  two = "2",
  three = "3",
  four = "4",
  five = "5",
  six = "6",
  seven = "7",
  eight = "8",
  nine = "9",
  ten = "10",
  jack = "J",
  queen = "Q",
  king = "K",
}

// Move to own file?
type CardProps = {
  value: CardValue;
  suit: Suit;
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

let kingCard: CardProps = {
  value: CardValue.king,
  suit: Suit.clubs,
  key: `${CardValue.king + Suit.clubs}`,
};
let queenCard: CardProps = {
  value: CardValue.queen,
  suit: Suit.hearts,
  key: `${CardValue.queen + Suit.hearts}`,
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
