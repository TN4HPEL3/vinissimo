import { ArticleAtom } from '../../../../components/atoms/ArticleAtom/ArticleAtom.jsx';
import { MenuTitleAtom } from '../../../../components/atoms/MenuTitleAtom/MenuTitleAtom.jsx';
import { ParagraphAtom } from '../../../../components/atoms/ParagraphAtom/ParagraphAtom.jsx';

function MenuWineBottlesTextOrganism() {
  return (
    <ArticleAtom>
      <MenuTitleAtom title="[wine list]" />
      <br />
      <ParagraphAtom text="drodzy goście," />
      <ParagraphAtom text="dear guests," />
      <br />
      <ParagraphAtom text="Nasze wina naturalnie zawierają siarczyny, część z nich jest niefiltrowana, bez dodatku siarki lub wegańska." />
      <ParagraphAtom text="Wszystkie butelki mają pojemność 0,75 litra, jeśli nie podano inaczej." />
      <ParagraphAtom text="Ceny podane są w PLN zawierające wszystkie podatki." />
      <ParagraphAtom text="Wszystkie butelki dostępne są również w sprzedaży detalicznej na wynos." />
      <br />
      <ParagraphAtom text="Our wines naturally contain sulfites, some of them are not filtered, without added sulfur or vegan." />
      <ParagraphAtom text="All bottles are 0.75 liter, if not listed otherwise." />
      <ParagraphAtom text="Prices in PLN all taxes included." />
      <ParagraphAtom text="All bottles are also available for takeaway retail." />
    </ArticleAtom>
  );
}

export { MenuWineBottlesTextOrganism };
