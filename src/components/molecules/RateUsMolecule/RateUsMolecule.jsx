import {
  hrefFacebook,
  hrefGoogle,
  hrefTripAdvisor,
  hrefTrojmiasto,
} from '../../../helpers/findLink.js';
import { IconAtom } from '../../atoms/IconAtom/IconAtom.jsx';
import { ContactLinkAtom } from '../../atoms/ContactLinkAtom/ContactLinkAtom.jsx';

import css from './RateUsMolecule.module.css';

function RateUsMolecule() {
  return (
    <>
      <ContactLinkAtom
        className={css['rate__us__icons--icon']}
        children={<IconAtom id="TripAdvisor" />}
        href={hrefTripAdvisor}
      />
      <ContactLinkAtom
        className={css['rate__us__icons--icon']}
        children={<IconAtom id="google" />}
        href={hrefGoogle}
      />
      <ContactLinkAtom
        className={css['rate__us__icons--icon']}
        children={<IconAtom id="facebook" />}
        href={hrefFacebook}
      />
      <ContactLinkAtom
        className={css['rate__us__icons--icon']}
        children={<IconAtom id="trojmiasto" />}
        href={hrefTrojmiasto}
      />
    </>
  );
}

export { RateUsMolecule };
