import { HashLink } from 'react-router-hash-link';

function HashLinkAtom({ element, text }) {
  return (
    <HashLink smooth to={element}>
      {text}
    </HashLink>
  );
}

export { HashLinkAtom };
