import React from "react";
import { ScrollView, View } from "react-native";
import UserTabsNavigation from "../components/user_tabnavigation";
import {
  Text,
  Input,
  Button,
  VStack,
  Avatar,
  Box,
  HStack,
  TextArea,
  Center,
  Image,
  Badge,
} from "native-base";

const UserProfile = ({ navigation }) => {
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
          <Avatar size="lg" source={require("../assets/avataruser.png")} />

          <Box py={3}>
            <Text fontSize="xl" fontWeight="bold" color="white">
              Everald Arther
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
              Full Name
            </Text>
            <Input variant="outline" placeholder="Full Name" />
            <Text fontSize="md" bold>
              Date of birth
            </Text>
            <Input variant="outline" placeholder="Date of birth" />
            <Text fontSize="md" bold>
              Email Address
            </Text>
            <Input variant="outline" placeholder="Email Address" />
            <Text fontSize="md" bold>
              Phone Number
            </Text>
            <Input variant="outline" placeholder="Phone Number" />
            <Text fontSize="md" bold>
              Location
            </Text>
            <Input variant="outline" placeholder="Location" />
            <Text fontSize="md" bold>
              About Me
            </Text>
            <TextArea placeholder="About Me"></TextArea>
            <Text fontSize="md" bold>
              Level of Education
            </Text>
            <TextArea placeholder="Level of Education"></TextArea>
            {/* Skill */}
            <Text fontSize="md" bold>
              Skill
            </Text>
            <Box py={3} borderTopColor="#d4d4d4" borderTopWidth={1}>
              <Center>
                <HStack space={3} py={3}>
                  <Badge bg={"#EAEAEA"} rounded={10} variant={"solid"} size="">
                    <Text fontSize="xs">
                      Teamwork
                    </Text>
                  </Badge>
                  <Badge bg={"#EAEAEA"} rounded={10} variant={"solid"} size="">
                    <Text fontSize="xs">
                      Leadership
                    </Text>
                  </Badge>
                  <Badge bg={"#EAEAEA"} rounded={10} variant={"solid"} size="">
                    <Text fontSize="xs">
                      Visioner
                    </Text>
                  </Badge>
                </HStack>
                <HStack space={3} py={3}>
                  <Badge bg={"#EAEAEA"} rounded={10} variant={"solid"} size="">
                    <Text fontSize="xs">
                      Consistent
                    </Text>
                  </Badge>
                  <Badge bg={"#EAEAEA"} rounded={10} variant={"solid"} size="">
                    <Text fontSize="xs">
                      Target oriented
                    </Text>
                  </Badge>
                  <Badge bg={"#EAEAEA"} rounded={10} variant={"solid"} size="">
                    <Text fontSize="xs">
                      Good Communication
                    </Text>
                  </Badge>
                </HStack>
              </Center>
            </Box>

            <Text fontSize="md" bold>
              Resume
            </Text>
            <Box borderRadius={3} borderColor="#d4d4d4" borderWidth={1} py={2}>
              <Center py={8}>
                <Image
                  source={require("../assets/Icons/upload.png")}
                  alt="Alternate Text"
                  size={4}
                />
                Upload CV/Resume
              </Center>
            </Box>
          </VStack>
        </Box>

        {/* Button */}
        <HStack p={5} space={5}>
          <Button
            w="30%"
            size="xs"
            variant="subtle"
            colorScheme="success"
            onPress={() => navigation.navigate("JobDetail")}
          >
            Save
          </Button>
          <Button
            w="30%"
            size="xs"
            variant="subtle"
            colorScheme="danger"
            onPress={() => navigation.navigate("CompanyProfile")}
          >
            Cancel
          </Button>
        </HStack>
      </ScrollView>
      <UserTabsNavigation />
    </View>
  );
};

export default UserProfile;
