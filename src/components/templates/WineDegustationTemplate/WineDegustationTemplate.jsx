import { useLanguage } from '../../../helpers/contexts/languageContext.js';
import { ParagraphAtom } from '../../atoms/ParagraphAtom/ParagraphAtom.jsx';
import { MenuListOrganism } from '../../organisms/MenuListOrganism/MenuListOrganism.jsx';

import css from './WineDegustationTemplate.module.css';

function WineDegustationTemplate() {
  const { t } = useLanguage();
  const {
    menuFirstTitle,
    menuSecondTitle,
    descriptionFirst,
    descriptionSecond,
    descriptionThird,
    snackTitle,
    menuTitle,
    drinksTitle,
    menu,
    costTitle,
  } = t.degustation;

  return (
    <div className={css.menu}>
      <h2 className={css.title__main}>{menuFirstTitle}</h2>
      <h2 className={css.title__second}>{menuSecondTitle}</h2>
      <ParagraphAtom className={css.description} text={descriptionFirst} />
      <ParagraphAtom className={css.description} text={descriptionSecond} />
      <ParagraphAtom className={css.description} text={descriptionThird} />
      <div className={css.menu__content}>
        <div>
          <MenuListOrganism
            category={'snacks'}
            data={menu}
            title={snackTitle}
          />
        </div>
        <div>
          <MenuListOrganism category={'menu'} data={menu} title={menuTitle} />
          <MenuListOrganism
            category={'drinks'}
            data={menu}
            title={drinksTitle}
          />
          <MenuListOrganism category={'cost'} data={menu} title={costTitle} />
        </div>
      </div>
    </div>
  );
}

export { WineDegustationTemplate };
