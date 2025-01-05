import { useLanguage } from '../../../../helpers/contexts/languageContext.js';
import { ButtonAtom } from '../../../../components/atoms/buttonAtom/ButtonAtom.jsx';

function Page404ButtonAtom() {
  const { t } = useLanguage();

  return <ButtonAtom text={t.error404ButtonText} />;
}

export { Page404ButtonAtom };
