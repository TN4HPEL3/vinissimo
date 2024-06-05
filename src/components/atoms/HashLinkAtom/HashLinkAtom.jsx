import { useContext } from 'react';
import { HashLink } from 'react-router-hash-link';

import { mobileMenuContext } from '../../../helpers/mobileMenuProvider.jsx';

function HashLinkAtom({ element, text }) {
  const { close } = useContext(mobileMenuContext);
  return (
    <HashLink onClick={close} smooth to={element}>
      {text}
    </HashLink>
  );
}

export { HashLinkAtom };
