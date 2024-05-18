import { ParagraphAtom } from '../../atoms/ParagraphAtom';
import { hrefEmail, hrefPhoneNumber } from '../../../helpers/findLink';
import { ContactLinkAtom } from '../../atoms/ContactLinkAtom/ContactLinkAtom';

import JSON from '../../../data/contactLinks.json';

function FooterLinksMolecule({ text }) {
  const { links } = JSON;
  const linkPhone = links.find(link => link.id === 'phone');
  const linkEmail = links.find(link => link.id === 'mail');
  const phoneNumber = linkPhone.text;
  const email = linkEmail.text;
  return (
    <div>
      <ContactLinkAtom children={phoneNumber} href={hrefPhoneNumber} />
      <br />
      <ContactLinkAtom children={email} href={hrefEmail} />
      <ParagraphAtom text={text} />
    </div>
  );
}

export { FooterLinksMolecule };
