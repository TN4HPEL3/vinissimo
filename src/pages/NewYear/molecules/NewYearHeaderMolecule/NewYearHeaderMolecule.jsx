import { useLanguage } from '../../../../helpers/contexts/languageContext.js';
import { NewYearDateAtom } from '../../atoms/NewYearDateAtom/NewYearDateAtom.jsx';
import { NewYearTitleAtom } from '../../atoms/NewYearTitleAtom/NewYearTitleAtom.jsx';
import { ParagraphAtom } from '../../../../components/atoms/ParagraphAtom/ParagraphAtom.jsx';
import { MenuPageButtonMolecule } from '../../../Menu/molecules/MenuPageButtonsMolecule/MenuPageButtonMolecule.jsx';

import css from './NewYearHeaderMolecule.module.css';

function NewYearHeaderMolecule() {
  const { t } = useLanguage();
  const { newYearDescription } = t;
  const description = newYearDescription.map((row, index) => {
    return (
      <ParagraphAtom
        key={index}
        text={row}
        className={css.NewYear__description}
      />
    );
  });

  return (
    <>
      <NewYearTitleAtom />
      <div>
        <NewYearDateAtom />
        {description}
      </div>
      <div className={css.newYear__buttons}>
        <MenuPageButtonMolecule link="/new-year/basic" buttonText="basic" />
        <MenuPageButtonMolecule link="/new-year/de-lux" buttonText="de lux" />
      </div>
    </>
  );
}

export { NewYearHeaderMolecule };
