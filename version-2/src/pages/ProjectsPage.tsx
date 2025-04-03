import React from 'react';
import {
    Box,
    Heading,
    SimpleGrid,
    Text,
    VStack,
    Link as ChakraLink,
    IconButton,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { useColorMode } from '../components/ui/color-mode';
import { FiArrowLeft } from 'react-icons/fi';

const projects = [
    {
        title: 'Blog',
        description:
            'Meu blog para compartilhar conhecimentos sobre tecnologias.',
        link: 'https://blog.edersonfernandes.tec.br',
    },
    {
        title: 'Currículo',
        description: 'Meu currículo com design limpo e responsivo.',
        link: 'http://curriculum.edersonfernandes.tec.br',
    },
    {
        title: 'Meus Projetos no GitHub',
        description: 'Meus repositórios de projetos publicados no GitHub.',
        link: 'https://github.com/efernandes-tech?tab=repositories',
    },
];

const ProjectsPage: React.FC = () => {
    const { colorMode } = useColorMode();
    const isDark = colorMode === 'dark';

    return (
        <Box minH="100vh" px={8} py={12} bg={isDark ? 'gray.800' : 'gray.100'}>
            <VStack gap={8} align="center">
                <RouterLink to="/">
                    <IconButton
                        aria-label="Go Back"
                        rounded="full"
                        size="lg"
                        alignSelf="flex-start"
                    >
                        <FiArrowLeft />
                    </IconButton>
                </RouterLink>

                <Heading as="h1" size="2xl" textAlign="center">
                    Projetos
                </Heading>

                <SimpleGrid columns={[1, 2, 3]} gap={6} maxW="1200px">
                    {projects.map((project, index) => (
                        <Box
                            key={index}
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
                                {project.title}
                            </Heading>
                            <Text
                                fontSize="sm"
                                mb={4}
                                color={isDark ? 'gray.400' : 'gray.600'}
                            >
                                {project.description}
                            </Text>
                            <ChakraLink
                                href={project.link}
                                target="_blank"
                                color="teal.500"
                            >
                                Acessar
                            </ChakraLink>
                        </Box>
                    ))}
                </SimpleGrid>

                <ChakraLink asChild fontSize="md" mt={8}>
                    <RouterLink to="/">
                        <FiArrowLeft />
                        Voltar para Home
                    </RouterLink>
                </ChakraLink>
            </VStack>
        </Box>
    );
};

export default ProjectsPage;
