import { useLanguage } from '../../../helpers/contexts/languageContext';

import css from './SwitchLanguageButtonAtom.module.css';

function SwitchLanguageButtonAtom() {
  const { language, changeLanguage } = useLanguage();
  const handleClick = () => {
    switch (language) {
      case 'eng':
        changeLanguage('pl');
        break;
      case 'pl':
        changeLanguage('eng');
        break;
      default:
        console.log('Something wrong');
    }
  };
  return (
    <button type="button" onClick={handleClick} className={css.button}>
      {language === 'pl' ? 'EN' : 'PL'}
    </button>
  );
}

export { SwitchLanguageButtonAtom };
