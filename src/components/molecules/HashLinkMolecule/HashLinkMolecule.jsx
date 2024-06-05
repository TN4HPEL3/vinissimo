import { HashLinkAtom } from '../../atoms/HashLinkAtom/HashLinkAtom.jsx';

function HashLinkMolecule({ item, text }) {
  return (
    <>
      <HashLinkAtom element={item} text={text} />
    </>
  );
}

export { HashLinkMolecule };
