import React from "react";
import { ScrollView, View } from "react-native";
import CompanyTabsNavigation from "../components/company_tabnavigation";
import {
  Text,
  Input,
  Button,
  VStack,
  Avatar,
  Box,
  HStack,
  TextArea,
} from "native-base";

const CompanyProfile = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }} backgroundColor="white">
      <ScrollView>
        <Box
          px={5}
          py={7}
          borderBottomRadius={20}
          alignItems="left"
          backgroundColor="error.500"
        >
          <Avatar
            size="lg"
            source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          />

          <Box py={3}>
            <Text fontSize="xl" fontWeight="bold" color="white">
              Telkom Sigma
            </Text>
            <Text fontSize="md" color="white">
              Surabaya, Indonesia
            </Text>
          </Box>

          <HStack space={190}>
            <Button
              variant="solid"
              size="xs"
              borderRadius={6}
              colorScheme={"light"}
              bgColor={"#fca5a5"}
              onPress={() => console.log("ChangeImage")}
            >
              Change Image
            </Button>
            <Button
              variant="solid"
              size="xs"
              borderRadius={6}
              colorScheme={"light"}
              bgColor={"#fca5a5"}
              // leftIcon={}
              onPress={() => console.log("Logout")}
            >
              Logout
            </Button>
          </HStack>
        </Box>

        <Box paddingTop="4">
          <VStack space="2" px={6}>
            <Text fontSize="md" bold>
              Company Name
            </Text>
            <Input variant="outline" placeholder="Company Name" />
            <Text fontSize="md" bold>
              Location
            </Text>
            <Input variant="outline" placeholder="Location" />
            <Text fontSize="md" bold>
              Email Address
            </Text>
            <Input variant="outline" placeholder="Email Address" />
            <Text fontSize="md" bold>
              Phone Number
            </Text>
            <Input variant="outline" placeholder="Phone Number" />
            <Text fontSize="md" bold>
              Type
            </Text>
            <Input variant="outline" placeholder="Company Type" />
            <Text fontSize="md" bold>
              About Company
            </Text>
            <TextArea placeholder="About Company"></TextArea>
          </VStack>
        </Box>

        <HStack p={5} space={5}>
          <Button
            w="30%"
            size="xs"
            variant="subtle"
            colorScheme="success"
            onPress={() => navigation.navigate('UserProfile')}
          >
            Save
          </Button>
          <Button
            w="30%"
            onPress={() => console.log("Cancel")}
            size="xs"
            variant="subtle"
            colorScheme="danger"
          >
            Cancel
          </Button>
        </HStack>
      </ScrollView>
      <CompanyTabsNavigation />
    </View>
  );
};

export default CompanyProfile;
