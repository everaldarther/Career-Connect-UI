import React from "react";
import { Text, Input, VStack } from "native-base";

const FormInput = ({ label, placeholder }) => {
  return (
    <VStack space="2" px={6}>
      <Text fontSize="md" bold>
        {label}
      </Text>
      <Input variant="outline" placeholder={placeholder} />
    </VStack>
  );
};

export default FormInput;