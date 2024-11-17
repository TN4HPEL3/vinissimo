import { ParagraphAtom } from '../../../components/atoms/ParagraphAtom/ParagraphAtom.jsx';

function NewYearDateAtom() {
  return (
    <>
      <ParagraphAtom text={'31/12/2024'} />
      <br />
      <ParagraphAtom text={'20:00'} />
    </>
  );
}

export { NewYearDateAtom };
