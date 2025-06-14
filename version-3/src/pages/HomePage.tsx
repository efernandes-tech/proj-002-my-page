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
                    Engenheiro de Software Sênior | Especialista em React & .NET
                    | Explorando Web3 & Blockchain
                </Text>

                <Box textAlign="" maxW="600px">
                    <Text
                        fontSize="md"
                        color={isDark ? 'gray.400' : 'gray.600'}
                        textIndent={10}
                        textAlign="justify"
                    >
                        Sou Engenheiro de Software com sólida experiência no
                        desenvolvimento de aplicações escaláveis, seguras e de
                        alta performance, utilizando tecnologias como React,
                        .NET, TypeScript, Azure e SQL Server. Atuo como
                        desenvolvedor full stack, transformando ideias em
                        soluções confiáveis, com foco em qualidade,
                        manutenibilidade e entrega contínua.
                    </Text>
                    <Text
                        mt={4}
                        fontSize="md"
                        color={isDark ? 'gray.400' : 'gray.600'}
                        textIndent={10}
                        textAlign="justify"
                    >
                        Já implementei arquiteturas baseadas em microsserviços,
                        colaborei na melhoria de pipelines de build e publicação
                        com Docker e Azure DevOps, e atuei na evolução da
                        performance e estabilidade de aplicações em ambientes
                        críticos.
                    </Text>
                    <Text
                        mt={4}
                        fontSize="md"
                        color={isDark ? 'gray.400' : 'gray.600'}
                        textIndent={10}
                        textAlign="justify"
                    >
                        Tenho me aprofundado em Web3 e Blockchain, buscando
                        compreender os fundamentos das tecnologias
                        descentralizadas e suas aplicações práticas.
                    </Text>
                    <Text
                        mt={4}
                        fontSize="md"
                        color={isDark ? 'gray.400' : 'gray.600'}
                        textIndent={10}
                        textAlign="justify"
                    >
                        Minha atuação vai além do código: valorizo o trabalho em
                        equipe, a liderança técnica, a comunicação clara e o
                        compartilhamento de boas práticas com o time.
                    </Text>
                    <Text
                        mt={4}
                        fontSize="md"
                        color={isDark ? 'gray.400' : 'gray.600'}
                        textIndent={10}
                        textAlign="justify"
                    >
                        Aberto a novas conexões, parcerias e oportunidades em
                        ambientes inovadores e desafiadores.
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
                        href="https://argostraderbot.com"
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
                                Argos TraderBot
                            </Heading>
                            <Text
                                fontSize="sm"
                                color={isDark ? 'gray.400' : 'gray.600'}
                            >
                                Bots de Trading de Criptomoedas
                            </Text>
                            <br />
                        </Box>
                    </ChakraLink>
                    <ChakraLink
                        href="https://ef-mocks.edersonfernandes.tec.br "
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
                                EF Mocks
                            </Heading>
                            <Text
                                fontSize="sm"
                                color={isDark ? 'gray.400' : 'gray.600'}
                            >
                                Crie e teste APIs simuladas com facilidade.
                            </Text>
                            <br />
                        </Box>
                    </ChakraLink>
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
