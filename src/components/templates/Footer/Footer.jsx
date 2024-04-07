import {
    hrefEmail,
    hrefFacebook,
    hrefInstagram,
    hrefPhoneNumber,
  } from '../../../helpers/findLink.js';
  import { Icon } from '../../atoms/Icon/Icon.jsx';
  import { ContactLinkAtom } from '../../atoms/ContactLinkAtom/ContactLinkAtom.jsx';
  
  import css from './Footer.module.css';
  
  function Footer() {
    return (
      <footer className={css.footer}>
        <div className={css.footer__links}>
          <div>
            <p>Vinissimo Restaurant & Wine Bar</p>
            <p>ul. Bema 6 Sopot</p>
          </div>
          <div>
            <p>pon-sb: 14-22</p>
            <p>niedziela: 13-19</p>
          </div>
          <div>
            <ContactLinkAtom
              children="tel. +48 881 334 449"
              href={hrefPhoneNumber}
            />
            <br />
            <ContactLinkAtom
              children="booking@vinissimorestaurant.pl"
              href={hrefEmail}
            />
          </div>
        </div>
        <div className={css.footer__icons}>
          <ContactLinkAtom
            children={<Icon id="instagram" />}
            href={hrefInstagram}
          />
          <ContactLinkAtom
            children={<Icon id="facebook" />}
            href={hrefFacebook}
          />
        </div>
      </footer>
    );
  }
  
  export { Footer };