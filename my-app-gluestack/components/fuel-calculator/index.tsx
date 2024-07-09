import React, { useState } from "react";
import {
  VStack,
  Button,
  ButtonText,
  Input,
  InputField,
  Text,
} from "@gluestack-ui/themed";

export function FuelCalculator() {
  const [gasolinePrice, setGasolinePrice] = useState("");
  const [etanolPrice, setEtanolPrice] = useState("");
  const [result, setResult] = useState("");

  function calculate() {
    const gasPrice = parseFloat(gasolinePrice);
    const alcPrice = parseFloat(etanolPrice);

    if (gasPrice && alcPrice) {
      const result = alcPrice / gasPrice;

      if (result < 0.7) {
        setResult("Abasteça com etanol!");
      } else {
        setResult("Abasteça com gasolina!");
      }
    }
  }

  return (
    <VStack space="md" reversed={false}>
      <Text textAlign="center">Preço da gasolina</Text>
      <Input>
        <InputField
          value={gasolinePrice}
          onChangeText={setGasolinePrice}
          placeholder="R$ preço da gasolina"
          keyboardType="numeric"
        />
      </Input>

      <Text textAlign="center">Preço do etanol</Text>
      <Input variant="outline" size="md">
        <InputField
          value={etanolPrice}
          onChangeText={setEtanolPrice}
          placeholder="R$ preço do etanol"
          keyboardType="numeric"
        />
      </Input>

      <Button marginTop={5}>
        <ButtonText onPress={calculate}>Verificar</ButtonText>
      </Button>

      <Text textAlign="center" size="lg" fontWeight='bold'>{result}</Text>
    </VStack>
  );
}
