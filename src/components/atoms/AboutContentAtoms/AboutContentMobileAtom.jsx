import { useLanguage } from '../../../helpers/contexts/languageContext.js';

function AboutContentMobileAtom() {
  const { t } = useLanguage();
  return t.aboutUsMobile;
}

export { AboutContentMobileAtom };
