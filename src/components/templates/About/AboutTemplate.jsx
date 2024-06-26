import { publicAccess } from '../../../helpers/publicAccess.js';
import { SectionTemplate } from '../Section/SectionTemplate.jsx';
import { CheckMediaQuery } from '../../../helpers/checkMediaQuery.js';
import { ParagraphAtom } from '../../atoms/ParagraphAtom/ParagraphAtom.jsx';
import { AboutContentMobileAtom } from '../../atoms/AboutContentAtoms/AboutContentMobileAtom.jsx';
import { AboutContentDesktopAtom } from '../../atoms/AboutContentAtoms/AboutContentDesktopAtom.jsx';

import css from './AboutTemplate.module.css';

function AboutTemplate() {
  const screen = CheckMediaQuery();
  return (
    <SectionTemplate title="o nas">
      <div className={css.about}>
        {screen === 'desktop' ? (
          <>
            <div className={[css['about__content--top']]}>
              <img
                className={[css['about__content__image']]}
                src={publicAccess('/Table.jpg')}
                alt={'A restaurant table adorned with a plate and flowers.'}
              />
              <ParagraphAtom text={<AboutContentDesktopAtom />} />
            </div>
            <div className={[css['about__content--bottom']]}>
              <ParagraphAtom text={<AboutContentDesktopAtom isTop={false} />} />
              <img
                src={publicAccess('/Seabass.jpg')}
                alt={'A restaurant table set with a bottle of wine and a dish.'}
                className={[css['about__content__image']]}
              />
            </div>
          </>
        ) : (
          <>
            <img
              src={publicAccess('/Seabass.jpg')}
              alt={'A restaurant table set with a bottle of wine and a dish.'}
              className={[css['about__content__image']]}
            />
            <ParagraphAtom
              className={[css['about__content__text']]}
              text={<AboutContentMobileAtom />}
            />
          </>
        )}
      </div>
    </SectionTemplate>
  );
}

export { AboutTemplate };
