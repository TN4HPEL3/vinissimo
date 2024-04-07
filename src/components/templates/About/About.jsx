import { Section } from '../Section/Section.jsx';
import { CheckMediaQuery } from '../../../helpers/checkMediaQuery.js';

import { publicAccess } from '../../../helpers/publicAccess.js';

import css from './About.module.css';

function About() {
  const screen = CheckMediaQuery();
  return (
    <Section title="o nas">
      {screen === 'desktop' ? (
        <div className={css.about}>
          <div>
            <img
              src={publicAccess('/Table.jpg')}
              alt={'A restaurant table adorned with a plate and flowers.'}
            />
            <p>
              Vinissimo Restaurant &amp; Wine Bar to nowa marka, pod którą od
              lutego 2024, działa, obecna na Bema 6 od 2017 roku - Sztuczka
              Bistro. Restauracja, prowadzona od 2022 roku przez Łukasza
              Chwojnickiego, w delikatnie zmienionym formacie i z tym samym,
              niezastąpionym teamem, niezmiennie serwuje przepyszną i
              minimalistyczną kuchnię, wspartą ogromną selekcją win i
              nienagannym serwisem.
              <br />
              <br />
              Szefem kuchni, od czerwca 2023 roku jest skromny i utalentowany
              Łukasz Theus, który współpracował z wieloma znakomitymi szefami.
              Za serwis, wina i pracę całej restauracji odpowiada manager -
              Diana Kalinichenko, która pracowała w najlepszych Trójmiejskich
              restauracjach i mimo młodego wieku posiada spore doświadczenie,
              które umiejętnie wykorzystuje dbając o naszych Gości.
            </p>
          </div>
          <div>
            <p>
              Vino, Vinissimo, czyli…wino, niezwykłe wino, brzmi tak samo
              pięknie i intrygująco w każdym języku. To nasz znak rozpoznawczy.
              Ponad 400 etykiet, z czego 70 dostępne na kieliszek. Trzech
              sommelierów, kieliszki Riedel – dedykowane do różnych szczepów,
              Coravin. Konwencjonalne, naturalne, biodynamiczne. Legendy, friki,
              klasyka. Wszystko to pozwala nam zadbać o każdego: od
              poczatkującego, dla którego każdy cukier w winie jest dobry, po
              winomana, który wypije do lunchu Colares 1969. U nas panuje
              winiarski egalitaryzm i tak samo istotne jest dla nas, podstawowe
              Primitivo jak i Sassicaia, ważne, że i to i to sprawia wam
              przyjemność.
              <br /> <br /> W naszym menu znajdziecie minimalistyczne dania,
              oparte na klasyce z sezonowych produktów. Pracujemy na najwyższej
              jakości składnikach. W karcie znajdziesz: wołowinę Wagyu, dorsza
              Skrei, czarną zimową truflę, świeże ostrygi, wieprzowinę Ibérico i
              wiele innych delikatesów. Wszystkie nasze dania są idealne do
              dzielenia, do czego niezmiennie zachęcamy naszych Gości. <br />
              <br />
              Zapraszamy!
            </p>
            <img
              src={publicAccess('/Seabass.jpg')}
              alt={'A restaurant table set with a bottle of wine and a dish.'}
            />
          </div>
        </div>
      ) : (
        <div className={css.about}>
          <img
            src={publicAccess('/Seabass.jpg')}
            alt={'A restaurant table set with a bottle of wine and a dish.'}
          />
          <p>
            Vinissimo Restaurant & Wine Bar to nowa marka, pod którą od lutego
            2024, działa, obecna na Bema 6 od 2017 roku - Sztuczka Bistro.
            Restauracja, prowadzona od 2022 roku przez Łukasza Chwojnickiego, w
            delikatnie zmienionym formacie i z tym samym, niezastąpionym teamem,
            niezmiennie serwuje przepyszną i minimalistyczną kuchnię, wspartą
            ogromną selekcją win i nienagannym serwisem.
          </p>
        </div>
      )}
    </Section>
  );
}

export { About };