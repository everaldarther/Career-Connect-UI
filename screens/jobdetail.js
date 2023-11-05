import React from "react";
import { ScrollView, View } from "react-native";
import UserTabsNavigation from "../components/user_tabnavigation";
import {
  Text,
  Button,
  VStack,
  HStack,
  Avatar,
  Box,
  Heading,
  Center,
} from "native-base";

const JobDetail = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }} backgroundColor="white">
      <ScrollView>
        <Center paddingTop={20}>
          <Avatar size="xl" source={require("../assets/avataruser.png")} />
        </Center>
        <Box
          shadow={5}
          py={4}
          alignItems="center"
          backgroundColor="error.500"
        >
          <Box py={2}>
            <Text  fontSize="md" fontWeight="bold" color="white">
              UI/UX Design
            </Text>
            <HStack space={3}>
              <Text fontSize="md" color="white" alignItems="Left">
                Google
              </Text>
              <Text fontSize="md" color="white" alignItems="center">
              • Surabaya
              </Text>
              <Text fontSize="md" color="white" alignItems="Right">
               • 1 day ago
              </Text>
            </HStack>
          </Box>
        </Box>

        <Box px={6} py={5}>
          <Heading paddingBottom={2}>Job Description</Heading>
          <Text textAlign="left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do dsa
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in asacafaw
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </Box>

        <Box paddingTop="4">
          <VStack space="2" px={6}>
            <Heading>Requirements</Heading>
            <Text>• Sed ut perspiciatis unde omnis iste natus error sit.</Text>
            <Text>
              • Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur & adipisci velit.
            </Text>
            <Text>
              • Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit.
            </Text>
            <Text>
              • Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur
            </Text>
          </VStack>
        </Box>

        <Center py={8}>
          <Button
            w="50%"
            size="lg"
            variant="solid"
            colorScheme={"light"}
            bgColor={"error.500"}
            onPress={() => navigation.navigate("CompanyProfile")}
          >
            Save
          </Button>
        </Center>
      </ScrollView>
      <UserTabsNavigation />
    </View>
  );
};

export default JobDetail;
