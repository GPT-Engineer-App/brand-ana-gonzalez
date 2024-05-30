import { useState } from "react";
import { Box, Button, Container, Flex, Heading, HStack, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const slides = [
  {
    id: 1,
    content: (
      <VStack spacing={4}>
        <Image src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBbmElMjBHb256YWxleiUyMEJyb2tlcmFnZSUyMGxvZ298ZW58MHx8fHwxNzE3MTEwNDI2fDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="150px" />
        <Button colorScheme="teal" size="lg">
          Contact Us
        </Button>
      </VStack>
    ),
  },
  {
    id: 2,
    content: (
      <VStack spacing={4}>
        <Image src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBob3VzZXxlbnwwfHx8fDE3MTcxMTA0MjZ8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="300px" />
        <Button colorScheme="teal" size="lg">
          View Listing
        </Button>
      </VStack>
    ),
  },
  {
    id: 3,
    content: (
      <VStack spacing={4}>
        <Image src="https://images.unsplash.com/photo-1515263487990-61b07816b324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnR8ZW58MHx8fHwxNzE3MTEwNDI3fDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="300px" />
        <Button colorScheme="teal" size="lg">
          View Listing
        </Button>
      </VStack>
    ),
  },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <Container maxW="container.xl">
      <Flex as="header" justifyContent="space-between" alignItems="center" py={4}>
        <Image src="https://images.unsplash.com/photo-1615915468538-0fbd857888ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxBbmElMjBHb256YWxleiUyMEJyb2tlcmFnZSUyMGxvZ298ZW58MHx8fHwxNzE3MTEwNDI2fDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="1.5in" />
        <HStack spacing={8}>
          <Link href="#">Home</Link>
          <Link href="#">About Us</Link>
          <Box>
            <Link href="#">Services</Link>
            <Box pl={4}>
              <Link href="#">Property Management</Link>
              <Link href="#">Real Estate Sales and Purchases</Link>
              <Link href="#">Real Estate in Baja</Link>
            </Box>
          </Box>
          <Link href="#">Listings</Link>
          <Link href="#">Contact Us</Link>
        </HStack>
      </Flex>

      <Box as="main" mt={8}>
        <Flex justifyContent="center" alignItems="center">
          <Button onClick={prevSlide} leftIcon={<FaArrowLeft />} />
          <Box mx={4}>{slides[currentSlide].content}</Box>
          <Button onClick={nextSlide} rightIcon={<FaArrowRight />} />
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;
