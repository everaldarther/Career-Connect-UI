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
} from "native-base";

const UserProfile = ({ navigation }) => {
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
            source={require('../assets/avataruser.png')}
          />

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
              Gender
            </Text>
            <Input variant="outline" placeholder="Gender" />
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
              Education
            </Text>
            <TextArea placeholder="Education"></TextArea>
            <Text fontSize="md" bold>
              Skill
            </Text>
            <TextArea placeholder="Skill"></TextArea>
            <Text fontSize="md" bold>
              Resume
            </Text>
            <TextArea placeholder="Resume"></TextArea>
          </VStack>
        </Box>

        <HStack p={5} space={5}>
          <Button
            w="30%"
            size="xs"
            variant="subtle"
            colorScheme="success"
            onPress={() => console.log("Save")}
          >
            Save
          </Button>
          <Button
            w="30%"
            size="xs"
            variant="subtle"
            colorScheme="danger"
            onPress={() => navigation.navigate('CompanyProfile')}
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
