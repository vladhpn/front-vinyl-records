import { EnIcon, PtIcon, UaIcon } from '../components';

export type LanguagesType = {
  id: string;
  value: string;
  icon: JSX.Element;
};

export const languages: LanguagesType[] = [
  {
    id: 'ua',
    value: 'ua',
    icon: <UaIcon />,
  },
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
];
