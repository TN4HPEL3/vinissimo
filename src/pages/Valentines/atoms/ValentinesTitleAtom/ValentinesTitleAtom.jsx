import { useLanguage } from '../../../../helpers/contexts/languageContext.js';

import css from './ValentinesTitleAtom.module.css';

function ValentinesTitleAtom() {
  const { t } = useLanguage();
  const { valentinesTitleMenu } = t;

  return <h2 className={css.valentines__title}>{valentinesTitleMenu}</h2>;
}

export { ValentinesTitleAtom };
