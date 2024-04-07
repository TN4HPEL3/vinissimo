import {
    hrefFacebook,
    hrefGoogle,
    hrefTripAdvisor,
    hrefTrojmiasto,
  } from '../../../helpers/findLink.js';
  import { Section } from '../Section/Section.jsx';
  import { Icon } from '../../atoms/Icon/Icon.jsx';
  import { ContactLinkAtom } from '../../atoms/ContactLinkAtom/ContactLinkAtom.jsx';
  
  import css from './RateUs.module.css';
  
  function RateUs() {
    return (
      <Section title="oceń nas">
        <div className={css.rateUs__icons}>
          <ContactLinkAtom
            children={<Icon id="TripAdvisor" />}
            href={hrefTripAdvisor}
          />
          <ContactLinkAtom children={<Icon id="google" />} href={hrefGoogle} />
          <ContactLinkAtom
            children={<Icon id="facebook" />}
            href={hrefFacebook}
          />
          <ContactLinkAtom
            children={<Icon id="trojmiasto" />}
            href={hrefTrojmiasto}
          />
        </div>
      </Section>
    );
  }
  
  export { RateUs };