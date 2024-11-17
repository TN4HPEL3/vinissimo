import { useLanguage } from '../../../helpers/contexts/languageContext.js';

function NewYearTitleAtom() {
  const { t } = useLanguage();
  const { newYearTitleMenu } = t;

  return <h2>{newYearTitleMenu}</h2>;
}

export { NewYearTitleAtom };
