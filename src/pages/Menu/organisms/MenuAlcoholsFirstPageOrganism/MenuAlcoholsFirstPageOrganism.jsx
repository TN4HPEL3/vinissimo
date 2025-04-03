import { useLanguage } from '../../../../helpers/contexts/languageContext.js';
import { MenuAlcoholsOrganism } from '../MenuAlcoholsOrganism/MenuAlcoholsOrganism.jsx';

function MenuAlcoholsFirstPageOrganism() {
  const { t } = useLanguage();
  const { alcohols } = t;
  const titles = alcohols.titles;
  return (
    <>
      <MenuAlcoholsOrganism
        category={'liqueurs'}
        data={alcohols}
        title={titles[0]}
      />
      <MenuAlcoholsOrganism
        category={'whisky'}
        data={alcohols}
        title={titles[1]}
      />
      <MenuAlcoholsOrganism
        category={'mead'}
        data={alcohols}
        title={titles[2]}
      />
      <MenuAlcoholsOrganism
        category={'others'}
        data={alcohols}
        title={titles[3]}
      />
    </>
  );
}

export { MenuAlcoholsFirstPageOrganism };
