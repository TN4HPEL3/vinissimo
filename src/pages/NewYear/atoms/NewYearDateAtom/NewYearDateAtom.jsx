import { ParagraphAtom } from '../../../../components/atoms/ParagraphAtom/ParagraphAtom.jsx';

import css from './NewYearDateAtom.module.css';

function NewYearDateAtom() {
  return (
    <>
      <ParagraphAtom className={css.newYear__date} text={'31/12/2025'} />
      <ParagraphAtom className={css.newYear__date} text={'20:00'} />
    </>
  );
}

export { NewYearDateAtom };
