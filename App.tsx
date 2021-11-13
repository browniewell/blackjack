import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Card, CardProps, deckOfCards, Rank, Suit } from "./components/Card";

let cards = deckOfCards;
let i = 0;

const Hand = () => {
  const [hand, setHand] = useState<CardProps[]>([]);
  return (
    <View>
      {hand?.map(Card)}
      <Button
        title="Draw"
        onPress={() => {
          i = getRandom(0, cards.length - 1);
          let newItem = cards[i];
          setHand((arr) => [...arr, newItem]);
          cards.splice(i, 1);
        }}
      />
      <Button
        title="Return All"
        onPress={() => {
          cards.push(...hand);
          setHand([]);
        }}
      />
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Hand />
    </View>
  );
}

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Card
//         rank={Rank.ace}
//         suit={Suit.clubs}
//         key={"test"}
//         imageSource={require(`./assets/card-images/AC.jpg`)}
//       />
//     </View>
//   );
// }

function getRandom(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
