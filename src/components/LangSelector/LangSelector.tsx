import i18next from 'i18next';

import { Select, SelectItem } from '@nextui-org/react';
import { EnIcon, PtIcon, UaIcon } from '../../components/iconComponents';
import { LOCALS } from '../../i18n/constants';

const LangSelector = () => {
  return (
    <>
      <Select
        className="max-w-xs"
        aria-label="lang"
        placeholder={i18next.language}>
        <SelectItem
          textValue="en"
          key="en"
          onClick={() => i18next.changeLanguage(LOCALS.EN)}>
          <EnIcon />
        </SelectItem>
        <SelectItem
          textValue="pt"
          key="pt"
          onClick={() => i18next.changeLanguage(LOCALS.PT)}>
          <PtIcon />
        </SelectItem>
        <SelectItem
          textValue="ua"
          key="ua"
          onClick={() => i18next.changeLanguage(LOCALS.UA)}>
          <UaIcon />
        </SelectItem>
      </Select>
    </>
  );
};
export default LangSelector;
