import React, { useEffect, useState } from 'react';
import {
    Box,
    Heading,
    SimpleGrid,
    Text,
    VStack,
    Link as ChakraLink,
    HStack,
    IconButton,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { useColorMode } from '../components/ui/color-mode';
import { FiArrowLeft } from 'react-icons/fi';
import * as LuIcons from 'react-icons/lu';
import { useTranslation } from 'react-i18next';
import LanguageToggle from '../components/LanguageToggle';

interface Project {
    title: string;
    titleEn?: string;
    description: string;
    descriptionEn?: string;
    link: string;
    icon?: string;
    category?: string;
}

const ProjectCard: React.FC<{
    project: Project;
    isEn: boolean;
    isDark: boolean;
    accessLabel: string;
}> = ({ project, isEn, isDark, accessLabel }) => {
    const IconComponent = project.icon
        ? (LuIcons[project.icon as keyof typeof LuIcons] as React.FC<{
              size?: number;
              color?: string;
          }>)
        : null;
    const title = isEn && project.titleEn ? project.titleEn : project.title;
    const description =
        isEn && project.descriptionEn
            ? project.descriptionEn
            : project.description;

    return (
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
            {IconComponent && (
                <IconComponent
                    size={28}
                    color={isDark ? '#81E6D9' : '#2C7A7B'}
                />
            )}
            <Heading as="h3" size="md" mt={IconComponent ? 2 : 0} mb={2}>
                {title}
            </Heading>
            <Text fontSize="sm" mb={4} color={isDark ? 'gray.400' : 'gray.600'}>
                {description}
            </Text>
            <ChakraLink href={project.link} target="_blank" color="teal.500">
                {accessLabel}
            </ChakraLink>
        </Box>
    );
};

const ProjectsPage: React.FC = () => {
    const { colorMode } = useColorMode();
    const isDark = colorMode === 'dark';
    const [projects, setProjects] = useState<Project[]>([]);
    const { t, i18n } = useTranslation();
    const isEn = i18n.language === 'en';

    useEffect(() => {
        const loadProjects = async () => {
            try {
                const response = await fetch('/projects.json');
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                console.error('Error loading projects:', error);
            }
        };

        loadProjects();
    }, []);

    const ownProjects = projects.filter(p => p.category === 'own');
    const lovableProjects = projects.filter(p => p.category === 'lovable');
    const accessLabel = t('projects.access');

    return (
        <Box minH="100vh" px={8} py={12} bg={isDark ? 'gray.800' : 'gray.100'}>
            <VStack gap={8} align="center">
                <HStack w="100%" justify="space-between">
                    <RouterLink to="/">
                        <IconButton
                            aria-label="Go Back"
                            rounded="full"
                            size="lg"
                        >
                            <FiArrowLeft />
                        </IconButton>
                    </RouterLink>
                    <LanguageToggle />
                </HStack>

                <Heading as="h1" size="2xl" textAlign="center">
                    {t('projects.title')}
                </Heading>

                <VStack gap={6} align="center" w="100%" maxW="1200px">
                    <SimpleGrid columns={[1, 2, 3]} gap={6} w="100%">
                        {ownProjects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                project={project}
                                isEn={isEn}
                                isDark={isDark}
                                accessLabel={accessLabel}
                            />
                        ))}
                    </SimpleGrid>

                    <Box
                        w="100%"
                        borderTopWidth="1px"
                        borderColor={isDark ? 'gray.600' : 'gray.300'}
                        pt={6}
                    >
                        <Heading as="h2" size="lg" mb={6}>
                            {t('projects.sectionLovable')}
                        </Heading>
                        <SimpleGrid columns={[1, 2, 3]} gap={6}>
                            {lovableProjects.map((project, index) => (
                                <ProjectCard
                                    key={index}
                                    project={project}
                                    isEn={isEn}
                                    isDark={isDark}
                                    accessLabel={accessLabel}
                                />
                            ))}
                        </SimpleGrid>
                    </Box>
                </VStack>

                <ChakraLink asChild fontSize="md" mt={8}>
                    <RouterLink to="/">
                        <FiArrowLeft />
                        {t('projects.backHome')}
                    </RouterLink>
                </ChakraLink>
            </VStack>
        </Box>
    );
};

export default ProjectsPage;
