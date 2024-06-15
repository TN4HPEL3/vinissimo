import { IconAtom } from '../../atoms/IconAtom/IconAtom.jsx';
import { hrefFacebook, hrefInstagram } from '../../../helpers/findLink.js';
import { ContactLinkAtom } from '../../atoms/ContactLinkAtom/ContactLinkAtom.jsx';

import css from './FooterIconsMolecule.module.css';

function FooterIconsMolecule() {
  return (
    <div className={css.footer__icons}>
      <ContactLinkAtom
        children={
          <IconAtom className={css['footer__icons__icon']} id="instagram" />
        }
        href={hrefInstagram}
      />
      <ContactLinkAtom
        children={
          <IconAtom className={css['footer__icons__icon']} id="facebook" />
        }
        href={hrefFacebook}
      />
    </div>
  );
}

export { FooterIconsMolecule };
