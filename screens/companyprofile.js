import React from "react";
import { ScrollView, View } from "react-native";
import FormInput from "../components/company_profileforminput";
import CompanyTabsNavigation from "../components/company_tabnavigation";
import {
  Text,
  Button,
  VStack,
  Avatar,
  Box,
  HStack,
} from "native-base";

const CompanyProfile = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }} backgroundColor="white">
      <ScrollView>
        <Box
          shadow={5}
          px={5}
          py={7}
          borderBottomRadius={20}
          alignItems="left"
          backgroundColor="error.500"
        >
          <Avatar size="lg" source={require("../assets/telkomsigma.png")} />

          <Box py={3}>
            <Text fontSize="xl" fontWeight="bold" color="white">
              Telkom Sigma
            </Text>
            <Text fontSize="md" color="white">
              Surabaya, Indonesia
            </Text>
          </Box>

          <HStack space={220}>
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
            <HStack>
              <Button
                variant="solid"
                size="xs"
                borderRadius={6}
                colorScheme={"light"}
                bgColor={"#fca5a5"}
                onPress={() => console.log("Logout")}
              >
                Logout
              </Button>
            </HStack>
          </HStack>
        </Box>

        <Box paddingTop="4">
          <VStack space={3}>
            <FormInput label="Company Name" placeholder="Company Name" />
            <FormInput label="Location" placeholder="Location" />
            <FormInput label="Email Address" placeholder="Email Address" />
            <FormInput label="Phone Number" placeholder="Phone Number" />
            <FormInput label="Type" placeholder="Company Type" />
            <FormInput label="About Company" placeholder="About Company" />
          </VStack>
        </Box>

        <HStack p={5} space={5}>
          <Button
            w="30%"
            size="xs"
            variant="subtle"
            colorScheme="success"
            onPress={() => navigation.navigate("UserProfile")}
          >
            Save
          </Button>
          <Button
            w="30%"
            size="xs"
            variant="subtle"
            colorScheme="danger"
            onPress={() => console.log("Cancel")}
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
