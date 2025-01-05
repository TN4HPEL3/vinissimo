import { useLanguage } from '../../../../helpers/contexts/languageContext.js';

function Page404ContentAtom() {
  const { t } = useLanguage();
  return <p>{t.error404Description}</p>;
}

export { Page404ContentAtom };
