import React from "react";
import { ImageSourcePropType } from "react-native";
import { Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 68,
    height: 100,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export const enum Suit {
  clubs = "C",
  diamonds = "D",
  hearts = "H",
  spades = "S",
}

export const enum Rank {
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

export type CardProps = {
  rank: Rank;
  suit: Suit;
  // Key right now should be "rank+suit", and has to be manually set as such.
  // See if there's a way to set that dynamically. It is required to be unique
  // from the other keys: https://sentry.io/answers/unique-key-prop/
  key: string;
  imageSource: ImageSourcePropType;
};

// Can we make this an image instead?
// Is scaling going to be an issue? Need to look that up
// <Text key={props.key}>
//   Your card is: {props.rank} of {props.suit}
// </Text>

export const Card = (props: CardProps) => {
  return (
    <Image source={props.imageSource} key={props.key} style={styles.tinyLogo} />
  );
};

export let deckOfCards: CardProps[] = [
  {
    rank: Rank.ace,
    suit: Suit.clubs,
    key: `${Rank.ace + Suit.clubs}`,
    imageSource: require(`../assets/card-images/AC.jpg`),
  },
  {
    rank: Rank.two,
    suit: Suit.clubs,
    key: `${Rank.two + Suit.clubs}`,
    imageSource: require(`../assets/card-images/2C.jpg`),
  },
  {
    rank: Rank.three,
    suit: Suit.clubs,
    key: `${Rank.three + Suit.clubs}`,
    imageSource: require(`../assets/card-images/3C.jpg`),
  },
  {
    rank: Rank.four,
    suit: Suit.clubs,
    key: `${Rank.four + Suit.clubs}`,
    imageSource: require(`../assets/card-images/4C.jpg`),
  },
  {
    rank: Rank.five,
    suit: Suit.clubs,
    key: `${Rank.five + Suit.clubs}`,
    imageSource: require(`../assets/card-images/5C.jpg`),
  },
  {
    rank: Rank.six,
    suit: Suit.clubs,
    key: `${Rank.six + Suit.clubs}`,
    imageSource: require(`../assets/card-images/6C.jpg`),
  },
  {
    rank: Rank.seven,
    suit: Suit.clubs,
    key: `${Rank.seven + Suit.clubs}`,
    imageSource: require(`../assets/card-images/7C.jpg`),
  },
  {
    rank: Rank.eight,
    suit: Suit.clubs,
    key: `${Rank.eight + Suit.clubs}`,
    imageSource: require(`../assets/card-images/8C.jpg`),
  },
  {
    rank: Rank.nine,
    suit: Suit.clubs,
    key: `${Rank.nine + Suit.clubs}`,
    imageSource: require(`../assets/card-images/9C.jpg`),
  },
  {
    rank: Rank.ten,
    suit: Suit.clubs,
    key: `${Rank.ten + Suit.clubs}`,
    imageSource: require(`../assets/card-images/10C.jpg`),
  },
  {
    rank: Rank.jack,
    suit: Suit.clubs,
    key: `${Rank.jack + Suit.clubs}`,
    imageSource: require(`../assets/card-images/JC.jpg`),
  },
  {
    rank: Rank.queen,
    suit: Suit.clubs,
    key: `${Rank.queen + Suit.clubs}`,
    imageSource: require(`../assets/card-images/QC.jpg`),
  },
  {
    rank: Rank.king,
    suit: Suit.clubs,
    key: `${Rank.king + Suit.clubs}`,
    imageSource: require(`../assets/card-images/KC.jpg`),
  },
  {
    rank: Rank.ace,
    suit: Suit.diamonds,
    key: `${Rank.ace + Suit.diamonds}`,
    imageSource: require(`../assets/card-images/AD.jpg`),
  },
  {
    rank: Rank.two,
    suit: Suit.diamonds,
    key: `${Rank.two + Suit.diamonds}`,
    imageSource: require(`../assets/card-images/2D.jpg`),
  },
  {
    rank: Rank.three,
    suit: Suit.diamonds,
    key: `${Rank.three + Suit.diamonds}`,
    imageSource: require(`../assets/card-images/3D.jpg`),
  },
  {
    rank: Rank.four,
    suit: Suit.diamonds,
    key: `${Rank.four + Suit.diamonds}`,
    imageSource: require(`../assets/card-images/4D.jpg`),
  },
  {
    rank: Rank.five,
    suit: Suit.diamonds,
    key: `${Rank.five + Suit.diamonds}`,
    imageSource: require(`../assets/card-images/5D.jpg`),
  },
  {
    rank: Rank.six,
    suit: Suit.diamonds,
    key: `${Rank.six + Suit.diamonds}`,
    imageSource: require(`../assets/card-images/6D.jpg`),
  },
  {
    rank: Rank.seven,
    suit: Suit.diamonds,
    key: `${Rank.seven + Suit.diamonds}`,
    imageSource: require(`../assets/card-images/7D.jpg`),
  },
  {
    rank: Rank.eight,
    suit: Suit.diamonds,
    key: `${Rank.eight + Suit.diamonds}`,
    imageSource: require(`../assets/card-images/8D.jpg`),
  },
  {
    rank: Rank.nine,
    suit: Suit.diamonds,
    key: `${Rank.nine + Suit.diamonds}`,
    imageSource: require(`../assets/card-images/9D.jpg`),
  },
  {
    rank: Rank.ten,
    suit: Suit.diamonds,
    key: `${Rank.ten + Suit.diamonds}`,
    imageSource: require(`../assets/card-images/10D.jpg`),
  },
  {
    rank: Rank.jack,
    suit: Suit.diamonds,
    key: `${Rank.jack + Suit.diamonds}`,
    imageSource: require(`../assets/card-images/JD.jpg`),
  },
  {
    rank: Rank.queen,
    suit: Suit.diamonds,
    key: `${Rank.queen + Suit.diamonds}`,
    imageSource: require(`../assets/card-images/QD.jpg`),
  },
  {
    rank: Rank.king,
    suit: Suit.diamonds,
    key: `${Rank.king + Suit.diamonds}`,
    imageSource: require(`../assets/card-images/KD.jpg`),
  },
  {
    rank: Rank.ace,
    suit: Suit.hearts,
    key: `${Rank.ace + Suit.hearts}`,
    imageSource: require(`../assets/card-images/AH.jpg`),
  },
  {
    rank: Rank.two,
    suit: Suit.hearts,
    key: `${Rank.two + Suit.hearts}`,
    imageSource: require(`../assets/card-images/2H.jpg`),
  },
  {
    rank: Rank.three,
    suit: Suit.hearts,
    key: `${Rank.three + Suit.hearts}`,
    imageSource: require(`../assets/card-images/3H.jpg`),
  },
  {
    rank: Rank.four,
    suit: Suit.hearts,
    key: `${Rank.four + Suit.hearts}`,
    imageSource: require(`../assets/card-images/4H.jpg`),
  },
  {
    rank: Rank.five,
    suit: Suit.hearts,
    key: `${Rank.five + Suit.hearts}`,
    imageSource: require(`../assets/card-images/5H.jpg`),
  },
  {
    rank: Rank.six,
    suit: Suit.hearts,
    key: `${Rank.six + Suit.hearts}`,
    imageSource: require(`../assets/card-images/6H.jpg`),
  },
  {
    rank: Rank.seven,
    suit: Suit.hearts,
    key: `${Rank.seven + Suit.hearts}`,
    imageSource: require(`../assets/card-images/7H.jpg`),
  },
  {
    rank: Rank.eight,
    suit: Suit.hearts,
    key: `${Rank.eight + Suit.hearts}`,
    imageSource: require(`../assets/card-images/8H.jpg`),
  },
  {
    rank: Rank.nine,
    suit: Suit.hearts,
    key: `${Rank.nine + Suit.hearts}`,
    imageSource: require(`../assets/card-images/9H.jpg`),
  },
  {
    rank: Rank.ten,
    suit: Suit.hearts,
    key: `${Rank.ten + Suit.hearts}`,
    imageSource: require(`../assets/card-images/10H.jpg`),
  },
  {
    rank: Rank.jack,
    suit: Suit.hearts,
    key: `${Rank.jack + Suit.hearts}`,
    imageSource: require(`../assets/card-images/JH.jpg`),
  },
  {
    rank: Rank.queen,
    suit: Suit.hearts,
    key: `${Rank.queen + Suit.hearts}`,
    imageSource: require(`../assets/card-images/QH.jpg`),
  },
  {
    rank: Rank.king,
    suit: Suit.hearts,
    key: `${Rank.king + Suit.hearts}`,
    imageSource: require(`../assets/card-images/KH.jpg`),
  },
  {
    rank: Rank.ace,
    suit: Suit.spades,
    key: `${Rank.ace + Suit.spades}`,
    imageSource: require(`../assets/card-images/AS.jpg`),
  },
  {
    rank: Rank.two,
    suit: Suit.spades,
    key: `${Rank.two + Suit.spades}`,
    imageSource: require(`../assets/card-images/2S.jpg`),
  },
  {
    rank: Rank.three,
    suit: Suit.spades,
    key: `${Rank.three + Suit.spades}`,
    imageSource: require(`../assets/card-images/3S.jpg`),
  },
  {
    rank: Rank.four,
    suit: Suit.spades,
    key: `${Rank.four + Suit.spades}`,
    imageSource: require(`../assets/card-images/4S.jpg`),
  },
  {
    rank: Rank.five,
    suit: Suit.spades,
    key: `${Rank.five + Suit.spades}`,
    imageSource: require(`../assets/card-images/5S.jpg`),
  },
  {
    rank: Rank.six,
    suit: Suit.spades,
    key: `${Rank.six + Suit.spades}`,
    imageSource: require(`../assets/card-images/6S.jpg`),
  },
  {
    rank: Rank.seven,
    suit: Suit.spades,
    key: `${Rank.seven + Suit.spades}`,
    imageSource: require(`../assets/card-images/7S.jpg`),
  },
  {
    rank: Rank.eight,
    suit: Suit.spades,
    key: `${Rank.eight + Suit.spades}`,
    imageSource: require(`../assets/card-images/8S.jpg`),
  },
  {
    rank: Rank.nine,
    suit: Suit.spades,
    key: `${Rank.nine + Suit.spades}`,
    imageSource: require(`../assets/card-images/9S.jpg`),
  },
  {
    rank: Rank.ten,
    suit: Suit.spades,
    key: `${Rank.ten + Suit.spades}`,
    imageSource: require(`../assets/card-images/10S.jpg`),
  },
  {
    rank: Rank.jack,
    suit: Suit.spades,
    key: `${Rank.jack + Suit.spades}`,
    imageSource: require(`../assets/card-images/JS.jpg`),
  },
  {
    rank: Rank.queen,
    suit: Suit.spades,
    key: `${Rank.queen + Suit.spades}`,
    imageSource: require(`../assets/card-images/QS.jpg`),
  },
  {
    rank: Rank.king,
    suit: Suit.spades,
    key: `${Rank.king + Suit.spades}`,
    imageSource: require(`../assets/card-images/KS.jpg`),
  },
];
