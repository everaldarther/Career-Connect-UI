import React, { useState } from "react";
import { View } from "react-native";
import {
  Text,
  ScrollView,
  Input,
  Button,
  VStack,
  Center,
  Avatar,
  Box,
  Container,
  HStack,
  TextArea,
} from "native-base";

const CompanyProfile = () => {
  return (
    <ScrollView>
      <Box
        px={5}
        py={8}
        borderBottomRadius={20}
        alignItems="left"
        backgroundColor="error.500"
      >
        <Avatar size="lg" source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }} />

        <Box ml={0}>
          <Text fontSize="xl" fontWeight="bold" color="white">
            Telkom Sigma
          </Text>
          <Text fontSize="md" color="white">
            Surabaya, Indonesia
          </Text>
        </Box>

        <HStack marginTop={5} space={140}>
        <Button
          variant="outline"
          size="md"
          borderRadius={10}
          bgColor={"#fafaf9"}
          onPress={() => {
          }}
        >
          Change Image
        </Button>
        <Button
          variant="outline"
          size="md"
          borderRadius={10}
          bgColor={"#fafaf9"}
          onPress={() => {
          }}
        >
          Logout
        </Button>
        </HStack>
      </Box>

      <Box
      paddingTop="4"
      >
        <VStack
        space="2"
        px={4}
        >
        <Text fontSize="md" bold>Company Name</Text>
        <Input variant="rounded" placeholder="Company Name" />
        <Text fontSize="md" bold>Location</Text>
        <Input variant="rounded" placeholder="Location" />
        <Text fontSize="md" bold> Email Address</Text>
        <Input variant="rounded" placeholder="Round" />
        <Text fontSize="md" bold>Phone Number</Text>
        <Input variant="rounded" placeholder="Phone Number" />
        <Text fontSize="md" bold>Company Profile</Text>
        <Input variant="rounded" placeholder="Company Profile" />
        <Text fontSize="md" bold>Type</Text>
        <Input variant="rounded" placeholder="Company Type" />
        <Text fontSize="md" bold>About Company</Text>
        <TextArea placeholder="About Company"></TextArea>
        </VStack>
      </Box>

      <HStack
      p={5}
      space={5}
      >
          <Button
          size="md"
          variant="subtle"
          backgroundColor={"#86efac"}
          colorScheme="muted"
          onPress={() => console.log("Save")}
          >
            Save
          </Button>
          <Button
            onPress={() => console.log("Cancel")}
            size="md"
            variant="subtle"
            colorScheme="danger"
          >
            Cancel
          </Button>
        </HStack>

    </ScrollView>
  );
};

export default CompanyProfile;
