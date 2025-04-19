import { MenuAlcoholsOrganism } from '../../organisms/MenuAlcoholsOrganism/MenuAlcoholsOrganism.jsx';

const categories = [
  'cocktails',
  'aperitif',
  'vodka',
  'highland_park',
  'whisky',
  'rum',
  'tequila',
  'mead',
  'gin',
  'others',
  'vermouth',
  'digestif',
  'liqueurs',
];

function MenuAlcoholByCategoriesMolecule({ alcohols, titles }) {
  return (
    <>
      {categories.map((category, index) => (
        <MenuAlcoholsOrganism
          key={category}
          category={category}
          data={alcohols}
          title={titles[index]}
        />
      ))}
    </>
  );
}

export { MenuAlcoholByCategoriesMolecule };
