import { hrefEmail, hrefPhoneNumber } from '../../../helpers/findLink.js';
import { ParagraphAtom } from '../../atoms/ParagraphAtom/ParagraphAtom.jsx';
import { ContactLinkAtom } from '../../atoms/ContactLinkAtom/ContactLinkAtom.jsx';

import JSON from '../../../data/contactLinks.json';

import css from './FooterLinksMolecule.module.css';

function FooterLinksMolecule({ text }) {
  const { links } = JSON;
  const linkPhone = links.find(link => link.id === 'phone');
  const linkEmail = links.find(link => link.id === 'mail');
  const phoneNumber = linkPhone.text;
  const email = linkEmail.text;
  return (
    <div className={css['footer__links__phone']}>
      <ContactLinkAtom children={phoneNumber} href={hrefPhoneNumber} />
      <ContactLinkAtom children={email} href={hrefEmail} />
      <ParagraphAtom text={text} />
    </div>
  );
}

export { FooterLinksMolecule };
