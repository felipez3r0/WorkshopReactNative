import { Box, Text, VStack } from "@gluestack-ui/themed";
import { FuelCalculator } from "../components/fuel-calculator";

export default function Home() {
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <VStack space="md" reversed={false}>
        <Text size="lg" fontWeight='bold'>Calculadora de combustível</Text>
        <FuelCalculator />
      </VStack>
    </Box>
  );
}
