import React from 'react';
import { FiLinkedin, FiMoon, FiSun, FiGithub, FiSearch } from 'react-icons/fi';
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
    LinkOverlay,
    LinkBox,
} from '@chakra-ui/react';
import { Button } from '../components/ui/button';
import { Link as RouterLink } from 'react-router-dom';

const HomePage: React.FC = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark';

    return (
        <Box minH="100vh" px={8} py={12} bg={isDark ? 'gray.800' : 'gray.100'}>
            <VStack gap={8} align="center">
                <IconButton
                    aria-label="Toggle Theme"
                    rounded="full"
                    size="lg"
                    onClick={toggleColorMode}
                    alignSelf="flex-end"
                >
                    {isDark ? <FiSun /> : <FiMoon />}
                </IconButton>

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
                    Desenvolvedor Full Stack | .NET | React | Azure
                </Text>

                <Box textAlign="center" maxW="600px">
                    <Text
                        fontSize="md"
                        color={isDark ? 'gray.400' : 'gray.600'}
                    >
                        Éderson Fernandes é graduado em Análise e
                        Desenvolvimento de Sistemas pela ULBRA e possui
                        pós-graduação em Engenharia de Software pela Unisinos.
                        Desde 2014, atua no mercado de Tecnologia da Informação,
                        acumulando ampla experiência em desenvolvimento de
                        sistemas.
                    </Text>
                    <Text
                        mt={4}
                        fontSize="md"
                        color={isDark ? 'gray.400' : 'gray.600'}
                    >
                        Com sólida atuação como desenvolvedor full-stack,
                        Éderson tornou-se proficiente em diversas tecnologias
                        web, incluindo .NET Core, React, JavaScript, SQL Server
                        e Azure. Sua experiência abrangente permite que ele
                        contribua de forma significativa em projetos que
                        demandam versatilidade e conhecimento técnico.
                    </Text>
                    <Text
                        mt={4}
                        fontSize="md"
                        color={isDark ? 'gray.400' : 'gray.600'}
                    >
                        No ambiente de equipe, destaca-se pela capacidade de
                        aprender e compartilhar conhecimentos, promovendo o
                        crescimento do time como um todo. É uma pessoa analítica
                        e observadora, que encara os desafios com uma mente
                        aberta, buscando sempre a solução mais eficiente e
                        adequada para cada problema.
                    </Text>
                </Box>

                <Heading as="h2" size="lg" textAlign="center" mt={12}>
                    Projects
                </Heading>

                <SimpleGrid columns={[1, 2, 3]} gap={6} maxW="800px">
                    <ChakraLink
                        href="https://blog.edersonfernandes.com.br"
                        style={{ textDecoration: 'none' }}
                        target="_blank"
                    >
                        <Box
                            p={6}
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
                                Meu blog para compartilhar conhecimentos sobre
                                tecnologias.
                            </Text>
                        </Box>
                    </ChakraLink>
                    <ChakraLink
                        href="http://tools.edersonfernandes.com.br"
                        style={{ textDecoration: 'none' }}
                        target="_blank"
                    >
                        <Box
                            p={6}
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
                                EF Tools
                            </Heading>
                            <Text
                                fontSize="sm"
                                color={isDark ? 'gray.400' : 'gray.600'}
                            >
                                Um conjunto de ferramentas para desenvolvedores
                                para tarefas do dia a dia.
                            </Text>
                        </Box>
                    </ChakraLink>
                    <Box
                        p={6}
                        borderWidth="1px"
                        borderRadius="lg"
                        boxShadow="md"
                        bg={isDark ? 'gray.700' : 'white'}
                        _hover={{
                            transform: 'scale(1.05)',
                            transition: '0.3s',
                        }}
                    />
                </SimpleGrid>

                <ChakraLink asChild fontSize="sm">
                    <RouterLink to="/projects">
                        <FiSearch />
                        Ver mais projetos
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
                </HStack>

                <Text
                    fontSize="sm"
                    color={isDark ? 'gray.500' : 'gray.500'}
                    mt={12}
                >
                    © {new Date().getFullYear()} Éderson Fernandes. All rights
                    reserved.
                </Text>
            </VStack>
        </Box>
    );
};

export default HomePage;
