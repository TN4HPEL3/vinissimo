import { useNavigate } from 'react-router-dom';

import { SectionTemplate } from '../Section/SectionTemplate.jsx';
import { MenuListOrganism } from '../../organisms/MenuListOrganism/MenuListOrganism.jsx';
import { MenuButtonsOrganism } from '../../organisms/MenuButtonsOrganism/MenuButtonsOrganism.jsx';

import menu from '../../../data/menu.json';

import css from './MenuTemplate.module.css';

function MenuTemplate() {
  const navigate = useNavigate();
  const buttonsText = {
    winesBottlesBtnText: 'wina',
    alcoholBtnText: 'alkohole',
    wineGlassBtnText: 'wina na kieliszki',
  };

  const handleChange = event => {
    navigate(event.target.value);
  };

  return (
    <SectionTemplate title="menu">
      <div className={css.menu}>
        <div className={css.menu__content}>
          <div>
            <MenuListOrganism
              category={'starters'}
              data={menu}
              title={'przystawki'}
            />
            <MenuListOrganism category={'cheeses'} data={menu} title={'sery'} />
            <MenuListOrganism category={'soups'} data={menu} title={'zupy'} />
          </div>
          <div>
            <MenuListOrganism
              category={'mains'}
              data={menu}
              title={'dania główne'}
            />
            <MenuListOrganism
              category={'sides'}
              data={menu}
              title={'dodatki'}
            />
            <MenuListOrganism
              category={'desserts'}
              data={menu}
              title={'na słodko'}
            />
          </div>
        </div>
        <div className={css.menu__buttons}>
          <MenuButtonsOrganism handleChange={handleChange} text={buttonsText} />
        </div>
      </div>
    </SectionTemplate>
  );
}

export { MenuTemplate };
