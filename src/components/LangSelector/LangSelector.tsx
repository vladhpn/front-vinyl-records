import { Select, SelectItem } from '@nextui-org/react';
import i18next from 'i18next';
import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { EnIcon, PtIcon, UaIcon } from '../../components/iconComponents';
import { LOCALS } from '../../i18n/constants';

type LanguagesType = {
  id: string;
  value: string;
  icon: JSX.Element;
};

const languages: LanguagesType[] = [
  {
    id: 'en',
    value: 'en',
    icon: <EnIcon />,
  },
  {
    id: 'pt',
    value: 'pt',
    icon: <PtIcon />,
  },
  {
    id: 'ua',
    value: 'ua',
    icon: <UaIcon />,
  },
];

export const LangSelector = () => {
  const [language, setLanguage] = useState(i18next.language);

  const renderLangIcon = useMemo(() => {
    switch (language) {
      case 'pt':
        return <PtIcon />;
      case 'ua':
        return <UaIcon />;
      default:
        return <EnIcon />;
    }
  }, [language]);

  const handleChangeLanguage = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const { value } = e.target;
      switch (value) {
        case 'pt':
          i18next.changeLanguage(LOCALS.PT);
          setLanguage('pt');
          break;
        case 'ua':
          i18next.changeLanguage(LOCALS.UA);
          setLanguage('ua');
          break;

        default:
          i18next.changeLanguage(LOCALS.EN);
          setLanguage('en');
          break;
      }
    },
    [setLanguage],
  );

  return (
    <Select
      value={language}
      className="max-w-xs"
      aria-label="lang"
      placeholder={i18next.language}
      startContent={renderLangIcon}
      onChange={(e) => handleChangeLanguage(e)}>
      {languages.map((item) => {
        return (
          <SelectItem textValue={item.value} key={item.id}>
            {item.icon}
          </SelectItem>
        );
      })}
    </Select>
  );
};
