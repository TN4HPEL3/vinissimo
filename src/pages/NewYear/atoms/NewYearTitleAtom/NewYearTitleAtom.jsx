import { useLanguage } from '../../../../helpers/contexts/languageContext.js';

import css from './NewYearTitleAtom.module.css';

function NewYearTitleAtom() {
  const { t } = useLanguage();
  const { newYearTitleMenu } = t;

  return <h2 className={css.newYear__title}>{newYearTitleMenu}</h2>;
}

export { NewYearTitleAtom };
