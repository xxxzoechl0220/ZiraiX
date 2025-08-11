import { useState } from 'react';
import { Language, languageNames, languageFlags } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

interface LanguageSwitcherProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

export function LanguageSwitcher({ currentLanguage, onLanguageChange }: LanguageSwitcherProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white hover:shadow-sm transition-all duration-200"
        >
          <span className="text-lg">{languageFlags[currentLanguage]}</span>
          <span className="text-sm font-medium hidden sm:inline">{languageNames[currentLanguage]}</span>
          <ChevronDown className="h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 bg-white/95 backdrop-blur-md border-gray-200">
        {Object.entries(languageNames).map(([lang, name]) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => onLanguageChange(lang as Language)}
            className={`flex items-center space-x-3 cursor-pointer hover:bg-gray-50 ${
              currentLanguage === lang ? 'bg-primary/5 text-primary' : ''
            }`}
          >
            <span className="text-lg">{languageFlags[lang as Language]}</span>
            <span className="text-sm">{name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
