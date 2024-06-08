import { hrefEmail, hrefPhoneNumber } from '../../../helpers/findLink.js';
import { privacyPolicyTextPL } from '../../../helpers/findTextByLanguage.js';
import { ContactLinkAtom } from '../../atoms/ContactLinkAtom/ContactLinkAtom.jsx';
import { FooterDownloadLinkAtom } from '../../atoms/FooterDownloadLinkAtom/FooterDownloadLinkAtom.jsx';

import JSON from '../../../data/contactLinks.json';

import css from './FooterLinksMolecule.module.css';

function FooterLinksMolecule() {
  const { links } = JSON;
  const linkPhone = links.find(link => link.id === 'phone');
  const linkEmail = links.find(link => link.id === 'mail');
  const phoneNumber = linkPhone.text;
  const email = linkEmail.text;
  return (
    <div className={css['footer__links__phone']}>
      <ContactLinkAtom children={phoneNumber} href={hrefPhoneNumber} />
      <ContactLinkAtom children={email} href={hrefEmail} />
      <FooterDownloadLinkAtom
        href="/privacyPolicy.pdf"
        textOnDownload="Polityka prywatności"
      >
        {privacyPolicyTextPL}
      </FooterDownloadLinkAtom>
    </div>
  );
}

export { FooterLinksMolecule };
