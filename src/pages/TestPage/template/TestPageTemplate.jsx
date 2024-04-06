import { TitleAtom } from '../atoms/TitleAtom/TitleAtom.jsx';
import { ListMolecule } from '../molecules/ListMolecule.jsx';
import { TestPageOrganism } from '../organisms/TestPageOrganism.jsx';
import { ParagraphAtom } from '../atoms/ParagraphAtom/ParagraphAtom.jsx';

import links from '../../../data/contactLinks.json';

import css from './TestPageTemplate.module.css';

const contactItems = links.links;
const publicAccess = name => process.env.PUBLIC_URL + '/images' + name;

function TestPageTemplate() {
  return (
    <>
      <TestPageOrganism
        mainImage={
          <img
            className={css.Hero}
            src={publicAccess('/v1.jpg')}
            alt={'Restaurant name with wine on the background'}
          />
        }
      >
        <img src={publicAccess('/BabyD.jpeg')} alt={'Bottle of the wine with glass'} />
        <div>
          <TitleAtom
            text=" Savor the Anticipation: Our Website is Fermenting Something
        Extraordinary! Stay Tuned for a Tantalizing Blend of Wine and Culinary
        Delights."
          />
          <ParagraphAtom text="Vinissimo Restaurant & Wine Bar (dawniej Sztuczka Bistro)" />
          <ParagraphAtom text="Sopot, ul. Bema 6" />
          <ParagraphAtom text="Skontaktuj się z nami:" />
          <ListMolecule items={contactItems} />
        </div>
      </TestPageOrganism>
    </>
  );
}

export { TestPageTemplate };