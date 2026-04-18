import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';

const LanguageToggle: React.FC = () => {
    const { i18n } = useTranslation();
    const isEn = i18n.language === 'en';

    const toggle = () => {
        const next = isEn ? 'pt' : 'en';
        i18n.changeLanguage(next);
        localStorage.setItem('language', next);
    };

    return (
        <Button variant="outline" size="sm" onClick={toggle}>
            {isEn ? 'EN' : 'PT'}
        </Button>
    );
};

export default LanguageToggle;
