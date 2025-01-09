import React from "react";
import { FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import { useColorMode } from "../components/ui/color-mode";
import {
  Box,
  Heading,
  HStack,
  IconButton,
  Link as ChakraLink,
  SimpleGrid,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react";
import { Button } from "../components/ui/button";
import { Link as RouterLink } from "react-router-dom";

const HomePage: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Box minH="100vh" px={8} py={12} bg={isDark ? "gray.800" : "gray.100"}>
      <VStack gap={8} align="center">
        <IconButton
          aria-label="Toggle Theme"
          rounded="full"
          size="lg"
          onClick={toggleColorMode}
          alignSelf="flex-end"
        >
          {isDark ? <FaSun /> : <FaMoon />}
        </IconButton>

        <Image
          boxSize="150px"
          borderRadius="full"
          alt="Éderson Fernandes"
          fit="cover"
          src="./avatar-200x200.webp"
        />

        <Heading as="h1" size="2xl" textAlign="center">
          Éderson Fernandes
        </Heading>

        <Text
          fontSize="lg"
          textAlign="center"
          color={isDark ? "gray.300" : "gray.600"}
        >
          Full Stack Developer
        </Text>

        <Box textAlign="center" maxW="600px">
          <Text fontSize="md" color={isDark ? "gray.400" : "gray.600"}>
            Over eight years of experience in software development using
            front-end and back-end technologies such as PHP, .NET Core, SQL
            Server, JavaScript, HTML, CSS, and Git. Always seeking new
            knowledge, focusing on applying the best software engineering
            practices.
          </Text>
          <Text mt={4} fontSize="md" color={isDark ? "gray.400" : "gray.600"}>
            As a team player, I strive to learn and share as much as possible
            with my teammates. I am a reserved and observant person who analyzes
            problems with an open mind to find the best way to solve challenges.
          </Text>
        </Box>

        <Heading as="h2" size="lg" textAlign="center" mt={12}>
          Projects
        </Heading>

        <SimpleGrid columns={[1, 2, 3]} gap={6} maxW="800px">
          <Box
            p={6}
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="md"
            bg={isDark ? "gray.700" : "white"}
            _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
          >
            <Heading as="h3" size="md" mb={2}>
              Project 1
            </Heading>
            <Text fontSize="sm" color={isDark ? "gray.400" : "gray.600"}>
              A brief description of the project goes here. Mention the key
              technologies used and the goal of the project.
            </Text>
          </Box>
          <Box
            p={6}
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="md"
            bg={isDark ? "gray.700" : "white"}
            _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
          >
            <Heading as="h3" size="md" mb={2}>
              Project 2
            </Heading>
            <Text fontSize="sm" color={isDark ? "gray.400" : "gray.600"}>
              Another brief description of a project, its technologies, and its
              impact or goal.
            </Text>
          </Box>
        </SimpleGrid>

        <ChakraLink asChild fontSize="md">
          <RouterLink to="/projects">Ver mais projetos</RouterLink>
        </ChakraLink>

        <HStack gap={4} mt={12}>
          <ChakraLink
            href="https://github.com/yourgithub"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Button colorPalette="teal" variant="outline">
              <FaGithub />
              GitHub
            </Button>
          </ChakraLink>
          <ChakraLink
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Button colorPalette="blue" variant="outline">
              <FaLinkedin />
              LinkedIn
            </Button>
          </ChakraLink>
        </HStack>

        <Text fontSize="sm" color={isDark ? "gray.500" : "gray.500"} mt={12}>
          © {new Date().getFullYear()} Éderson Fernandes. All rights reserved.
        </Text>
      </VStack>
    </Box>
  );
};

export default HomePage;
