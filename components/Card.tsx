import React, { useState } from "react";
import { Text } from "react-native";

enum Suit {
  clubs = "C",
  diamonds = "D",
  hearts = "H",
  spades = "S",
}

enum Value {
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

type CardProps = {
  value: Value;
  suit: Suit;
  // Key right now should be "value+suit", and has to be manually set as such.
  // See if there's a way to set that dynamically. It is required to be unique
  // from the other keys: https://sentry.io/answers/unique-key-prop/
  key: string;
};

export const Card = (props: CardProps) => {
  return (
    <Text key={props.key}>
      Your card is: {props.value} of {props.suit}
    </Text>
  );
};

export let deckOfCards: CardProps[] = [
  {
    value: Value.ace,
    suit: Suit.clubs,
    key: `${Value.ace + Suit.clubs}`,
  },
  {
    value: Value.two,
    suit: Suit.clubs,
    key: `${Value.two + Suit.clubs}`,
  },
  {
    value: Value.three,
    suit: Suit.clubs,
    key: `${Value.three + Suit.clubs}`,
  },
  {
    value: Value.four,
    suit: Suit.clubs,
    key: `${Value.four + Suit.clubs}`,
  },
  {
    value: Value.five,
    suit: Suit.clubs,
    key: `${Value.five + Suit.clubs}`,
  },
  {
    value: Value.six,
    suit: Suit.clubs,
    key: `${Value.six + Suit.clubs}`,
  },
  {
    value: Value.seven,
    suit: Suit.clubs,
    key: `${Value.seven + Suit.clubs}`,
  },
  {
    value: Value.eight,
    suit: Suit.clubs,
    key: `${Value.eight + Suit.clubs}`,
  },
  {
    value: Value.nine,
    suit: Suit.clubs,
    key: `${Value.nine + Suit.clubs}`,
  },
  {
    value: Value.ten,
    suit: Suit.clubs,
    key: `${Value.ten + Suit.clubs}`,
  },
  {
    value: Value.jack,
    suit: Suit.clubs,
    key: `${Value.jack + Suit.clubs}`,
  },
  {
    value: Value.queen,
    suit: Suit.clubs,
    key: `${Value.queen + Suit.clubs}`,
  },
  {
    value: Value.king,
    suit: Suit.clubs,
    key: `${Value.king + Suit.clubs}`,
  },
  {
    value: Value.ace,
    suit: Suit.diamonds,
    key: `${Value.ace + Suit.diamonds}`,
  },
  {
    value: Value.two,
    suit: Suit.diamonds,
    key: `${Value.two + Suit.diamonds}`,
  },
  {
    value: Value.three,
    suit: Suit.diamonds,
    key: `${Value.three + Suit.diamonds}`,
  },
  {
    value: Value.four,
    suit: Suit.diamonds,
    key: `${Value.four + Suit.diamonds}`,
  },
  {
    value: Value.five,
    suit: Suit.diamonds,
    key: `${Value.five + Suit.diamonds}`,
  },
  {
    value: Value.six,
    suit: Suit.diamonds,
    key: `${Value.six + Suit.diamonds}`,
  },
  {
    value: Value.seven,
    suit: Suit.diamonds,
    key: `${Value.seven + Suit.diamonds}`,
  },
  {
    value: Value.eight,
    suit: Suit.diamonds,
    key: `${Value.eight + Suit.diamonds}`,
  },
  {
    value: Value.nine,
    suit: Suit.diamonds,
    key: `${Value.nine + Suit.diamonds}`,
  },
  {
    value: Value.ten,
    suit: Suit.diamonds,
    key: `${Value.ten + Suit.diamonds}`,
  },
  {
    value: Value.jack,
    suit: Suit.diamonds,
    key: `${Value.jack + Suit.diamonds}`,
  },
  {
    value: Value.queen,
    suit: Suit.diamonds,
    key: `${Value.queen + Suit.diamonds}`,
  },
  {
    value: Value.king,
    suit: Suit.diamonds,
    key: `${Value.king + Suit.diamonds}`,
  },
  {
    value: Value.ace,
    suit: Suit.hearts,
    key: `${Value.ace + Suit.hearts}`,
  },
  {
    value: Value.two,
    suit: Suit.hearts,
    key: `${Value.two + Suit.hearts}`,
  },
  {
    value: Value.three,
    suit: Suit.hearts,
    key: `${Value.three + Suit.hearts}`,
  },
  {
    value: Value.four,
    suit: Suit.hearts,
    key: `${Value.four + Suit.hearts}`,
  },
  {
    value: Value.five,
    suit: Suit.hearts,
    key: `${Value.five + Suit.hearts}`,
  },
  {
    value: Value.six,
    suit: Suit.hearts,
    key: `${Value.six + Suit.hearts}`,
  },
  {
    value: Value.seven,
    suit: Suit.hearts,
    key: `${Value.seven + Suit.hearts}`,
  },
  {
    value: Value.eight,
    suit: Suit.hearts,
    key: `${Value.eight + Suit.hearts}`,
  },
  {
    value: Value.nine,
    suit: Suit.hearts,
    key: `${Value.nine + Suit.hearts}`,
  },
  {
    value: Value.ten,
    suit: Suit.hearts,
    key: `${Value.ten + Suit.hearts}`,
  },
  {
    value: Value.jack,
    suit: Suit.hearts,
    key: `${Value.jack + Suit.hearts}`,
  },
  {
    value: Value.queen,
    suit: Suit.hearts,
    key: `${Value.queen + Suit.hearts}`,
  },
  {
    value: Value.king,
    suit: Suit.hearts,
    key: `${Value.king + Suit.hearts}`,
  },
  {
    value: Value.ace,
    suit: Suit.spades,
    key: `${Value.ace + Suit.spades}`,
  },
  {
    value: Value.two,
    suit: Suit.spades,
    key: `${Value.two + Suit.spades}`,
  },
  {
    value: Value.three,
    suit: Suit.spades,
    key: `${Value.three + Suit.spades}`,
  },
  {
    value: Value.four,
    suit: Suit.spades,
    key: `${Value.four + Suit.spades}`,
  },
  {
    value: Value.five,
    suit: Suit.spades,
    key: `${Value.five + Suit.spades}`,
  },
  {
    value: Value.six,
    suit: Suit.spades,
    key: `${Value.six + Suit.spades}`,
  },
  {
    value: Value.seven,
    suit: Suit.spades,
    key: `${Value.seven + Suit.spades}`,
  },
  {
    value: Value.eight,
    suit: Suit.spades,
    key: `${Value.eight + Suit.spades}`,
  },
  {
    value: Value.nine,
    suit: Suit.spades,
    key: `${Value.nine + Suit.spades}`,
  },
  {
    value: Value.ten,
    suit: Suit.spades,
    key: `${Value.ten + Suit.spades}`,
  },
  {
    value: Value.jack,
    suit: Suit.spades,
    key: `${Value.jack + Suit.spades}`,
  },
  {
    value: Value.queen,
    suit: Suit.spades,
    key: `${Value.queen + Suit.spades}`,
  },
  {
    value: Value.king,
    suit: Suit.spades,
    key: `${Value.king + Suit.spades}`,
  },
];
