import { useContext } from 'react';
import { HashLink } from 'react-router-hash-link';

import { mobileMenuContext } from '../../../helpers/mobileMenuProvider.jsx';

import css from '../NavigationListItemAtom/NavigationListItemAtom.module.css';

function HashLinkAtom({ element, text }) {
  const { close } = useContext(mobileMenuContext);
  return (
    <HashLink className={css.link} onClick={close} smooth to={element}>
      {text}
    </HashLink>
  );
}

export { HashLinkAtom };
