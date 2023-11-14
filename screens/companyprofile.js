import React from "react";
import { ScrollView, View } from "react-native";
import ProfileBox from "../components/profilebox";
import FormInput from "../components/company_profileforminput";
import CompanyTabsNavigation from "../components/company_tabnavigation";
import {
  Button,
  VStack,
  Box,
  HStack,
} from "native-base";

const CompanyProfile = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }} backgroundColor="white">
      <ScrollView>
      <ProfileBox
          title="Telkom Sigma"
          subtitle="Surabaya, Indonesia"
          avatarSource={require("../assets/telkomsigma.png")}
          onPressChangeImage={() => console.log("ChangeImage")}
          onPressLogout={() => console.log("Logout")}
        />

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
