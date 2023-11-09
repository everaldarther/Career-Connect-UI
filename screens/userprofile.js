import React from "react";
import { Pressable, ScrollView, View } from "react-native";
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

          <HStack space={210}>
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
            <HStack>
              <Image
                source={require("../assets/Icons/aboutme.png")}
                alt="Alternate Text"
                size={6}
              />
              <Text fontSize="md" bold px={2}>
                About Me
              </Text>
            </HStack>
            <TextArea placeholder="About Me"></TextArea>
            <HStack>
              <Image
                source={require("../assets/Icons/education.png")}
                alt="Alternate Text"
                size={6}
              />
              <Text fontSize="md" bold px={2}>
                Education
              </Text>
            </HStack>
            <TextArea placeholder="Level of Education"></TextArea>
            {/* Skill */}
            <HStack>
              <Image
                source={require("../assets/Icons/skill.png")}
                alt="Alternate Text"
                size={6}
              />
              <Text fontSize="md" bold px={2}>
                Skill
              </Text>
            </HStack>
            <Box py={3} borderTopColor="#d4d4d4" borderTopWidth={1}>
              <Center>
                <HStack space={3} py={3}>
                  <Badge
                    bg={"#EAEAEA"}
                    rounded={10}
                    variant={"solid"}
                    size="10"
                  >
                    <Text fontSize="md" onPress={() => console.log("Teamwork")}>
                      Teamwork
                    </Text>
                  </Badge>
                  <Badge bg={"#EAEAEA"} rounded={10} variant={"solid"} size="">
                    <Text
                      fontSize="md"
                      onPress={() => console.log("Leadership")}
                    >
                      Leadership
                    </Text>
                  </Badge>
                  <Badge bg={"#EAEAEA"} rounded={10} variant={"solid"} size="">
                    <Text
                      fontSize="md"
                      onPress={() => console.log("Target oriented")}
                    >
                      Target oriented
                    </Text>
                  </Badge>
                </HStack>
                <HStack space={2} py={3}>
                  <Badge bg={"#EAEAEA"} rounded={10} variant={"solid"}>
                    <Text
                      fontSize="md"
                      onPress={() => console.log("Consistent")}
                    >
                      Consistent
                    </Text>
                  </Badge>
                  <Badge bg={"#EAEAEA"} rounded={10} variant={"solid"} size="">
                    <Text fontSize="md" onPress={() => console.log("Visioner")}>
                      Visioner
                    </Text>
                  </Badge>
                  <Badge
                    bg={"#EAEAEA"}
                    rounded={10}
                    variant={"solid"}
                    size="md"
                  >
                    <Text
                      fontSize="md"
                      onPress={() => console.log("Good Communication")}
                    >
                      Good Communication
                    </Text>
                  </Badge>
                </HStack>
                <Text color="lightBlue.700" paddingTop={5}>
                  See More
                </Text>
              </Center>
            </Box>

            <HStack>
              <Image
                source={require("../assets/Icons/resume.png")}
                alt="Alternate Text"
                size={6}
              />
              <Text fontSize="md" bold px={2}>
                Resume
              </Text>
            </HStack>
            <Box borderRadius={3} borderColor="#d4d4d4" borderWidth={1} py={2}>
              <Center py={6}>
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
