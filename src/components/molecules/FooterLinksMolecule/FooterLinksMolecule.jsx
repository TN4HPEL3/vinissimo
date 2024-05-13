import { ParagraphAtom } from '../../atoms/ParagraphAtom';
import { hrefEmail, hrefPhoneNumber } from '../../../helpers/findLink';
import { ContactLinkAtom } from '../../atoms/ContactLinkAtom/ContactLinkAtom';

function FooterLinksMolecule() {
  return (
    <div>
      <ContactLinkAtom children="tel. +48 881 334 449" href={hrefPhoneNumber} />
      <br />
      <ContactLinkAtom
        children="booking@vinissimorestaurant.pl"
        href={hrefEmail}
      />
      <ParagraphAtom text="Polityka prywatności" />
    </div>
  );
}

export { FooterLinksMolecule };
