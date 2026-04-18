import React from 'react';
import {
    FiLinkedin,
    FiMoon,
    FiSun,
    FiGithub,
    FiSearch,
    FiMail,
} from 'react-icons/fi';
import { useColorMode } from '../components/ui/color-mode';
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
} from '@chakra-ui/react';
import { Button } from '../components/ui/button';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageToggle from '../components/LanguageToggle';

const HomePage: React.FC = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark';
    const { t } = useTranslation();

    return (
        <Box minH="100vh" px={8} py={12} bg={isDark ? 'gray.800' : 'gray.100'}>
            <VStack gap={8} align="center">
                <HStack alignSelf="flex-end" gap={2}>
                    <LanguageToggle />
                    <IconButton
                        aria-label="Toggle Theme"
                        rounded="full"
                        size="lg"
                        onClick={toggleColorMode}
                    >
                        {isDark ? <FiSun /> : <FiMoon />}
                    </IconButton>
                </HStack>

                <Image
                    boxSize="200px"
                    borderRadius="full"
                    alt="Éderson Fernandes"
                    fit="cover"
                    src="./avatar-500x500.png"
                />

                <Heading as="h1" size="2xl" textAlign="center">
                    Éderson Fernandes
                </Heading>

                <Text
                    fontSize="lg"
                    textAlign="center"
                    color={isDark ? 'gray.300' : 'gray.600'}
                    fontWeight="bold"
                >
                    {t('home.role')}
                </Text>

                <Box textAlign="" maxW="600px">
                    <Text
                        fontSize="md"
                        color={isDark ? 'gray.400' : 'gray.600'}
                        textIndent={10}
                        textAlign="justify"
                    >
                        {t('home.bio1')}
                    </Text>
                    <Text
                        mt={4}
                        fontSize="md"
                        color={isDark ? 'gray.400' : 'gray.600'}
                        textIndent={10}
                        textAlign="justify"
                    >
                        {t('home.bio2')}
                    </Text>
                    <Text
                        mt={4}
                        fontSize="md"
                        color={isDark ? 'gray.400' : 'gray.600'}
                        textIndent={10}
                        textAlign="justify"
                    >
                        {t('home.bio3')}
                    </Text>
                    <Text
                        mt={4}
                        fontSize="md"
                        color={isDark ? 'gray.400' : 'gray.600'}
                        textIndent={10}
                        textAlign="justify"
                    >
                        {t('home.bio4')}
                    </Text>
                    <Text
                        mt={4}
                        fontSize="md"
                        color={isDark ? 'gray.400' : 'gray.600'}
                        textIndent={10}
                        textAlign="justify"
                    >
                        {t('home.bio5')}
                    </Text>
                </Box>

                <Heading as="h2" size="lg" textAlign="center" mt={12}>
                    {t('home.projectsSection')}
                </Heading>

                <SimpleGrid columns={[1, 2, 3]} gap={6} maxW="800px" w="100%">
                    <ChakraLink
                        href="https://blog.edersonfernandes.com.br"
                        style={{ textDecoration: 'none' }}
                        target="_blank"
                        display="block"
                        h="100%"
                        w="100%"
                    >
                        <Box
                            p={6}
                            h="100%"
                            minH="120px"
                            display="flex"
                            flexDirection="column"
                            borderWidth="1px"
                            borderRadius="lg"
                            boxShadow="md"
                            bg={isDark ? 'gray.700' : 'white'}
                            _hover={{
                                transform: 'scale(1.05)',
                                transition: '0.3s',
                            }}
                        >
                            <Heading as="h3" size="md" mb={2}>
                                Blog
                            </Heading>
                            <Text
                                fontSize="sm"
                                color={isDark ? 'gray.400' : 'gray.600'}
                            >
                                {t('home.blogDesc')}
                            </Text>
                        </Box>
                    </ChakraLink>
                    <ChakraLink
                        href="https://argostraderbot.com"
                        style={{ textDecoration: 'none' }}
                        target="_blank"
                        display="block"
                        h="100%"
                        w="100%"
                    >
                        <Box
                            p={6}
                            h="100%"
                            minH="120px"
                            display="flex"
                            flexDirection="column"
                            borderWidth="1px"
                            borderRadius="lg"
                            boxShadow="md"
                            bg={isDark ? 'gray.700' : 'white'}
                            _hover={{
                                transform: 'scale(1.05)',
                                transition: '0.3s',
                            }}
                        >
                            <Heading as="h3" size="md" mb={2}>
                                Argos TraderBot
                            </Heading>
                            <Text
                                fontSize="sm"
                                color={isDark ? 'gray.400' : 'gray.600'}
                            >
                                {t('home.argosDesc')}
                            </Text>
                        </Box>
                    </ChakraLink>
                    <ChakraLink
                        href="https://contacoin.online"
                        style={{ textDecoration: 'none' }}
                        target="_blank"
                        display="block"
                        h="100%"
                        w="100%"
                    >
                        <Box
                            p={6}
                            h="100%"
                            minH="120px"
                            display="flex"
                            flexDirection="column"
                            borderWidth="1px"
                            borderRadius="lg"
                            boxShadow="md"
                            bg={isDark ? 'gray.700' : 'white'}
                            _hover={{
                                transform: 'scale(1.05)',
                                transition: '0.3s',
                            }}
                        >
                            <Heading as="h3" size="md" mb={2}>
                                Conta Coin
                            </Heading>
                            <Text
                                fontSize="sm"
                                color={isDark ? 'gray.400' : 'gray.600'}
                            >
                                {t('home.contaCoinDesc')}
                            </Text>
                        </Box>
                    </ChakraLink>
                </SimpleGrid>

                <ChakraLink asChild fontSize="sm">
                    <RouterLink to="/projects">
                        <FiSearch />
                        {t('nav.viewMore')}
                    </RouterLink>
                </ChakraLink>

                <HStack gap={4} mt={12}>
                    <ChakraLink
                        href="https://github.com/efernandes-tech"
                        target="_blank"
                        style={{ textDecoration: 'none' }}
                    >
                        <Button colorPalette="teal" variant="outline">
                            <FiGithub />
                            GitHub
                        </Button>
                    </ChakraLink>
                    <ChakraLink
                        href="https://linkedin.com/in/efernandes-tech"
                        target="_blank"
                        style={{ textDecoration: 'none' }}
                    >
                        <Button colorPalette="blue" variant="outline">
                            <FiLinkedin />
                            LinkedIn
                        </Button>
                    </ChakraLink>
                    <ChakraLink
                        href="mailto:efernandes.tech@gmail.com"
                        target="_blank"
                        style={{ textDecoration: 'none' }}
                    >
                        <Button colorPalette="orange" variant="outline">
                            <FiMail />
                            Email
                        </Button>
                    </ChakraLink>
                </HStack>

                <Text
                    fontSize="sm"
                    color={isDark ? 'gray.500' : 'gray.500'}
                    mt={12}
                >
                    {t('home.copyright', { year: new Date().getFullYear() })}
                </Text>
            </VStack>
        </Box>
    );
};

export default HomePage;

