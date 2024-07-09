import {
  Box,
  ScrollView,
  Text,
} from "@gluestack-ui/themed";

export default function Home() {
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <ScrollView
        style={{ height: "100%" }}
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      >
        <Text>Olá mundo!</Text>
      </ScrollView>
    </Box>
  );
}
