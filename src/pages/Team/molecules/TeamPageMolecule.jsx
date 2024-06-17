import { TeamPageNameAtom } from '../atoms/TeamPageNameAtom/TeamPageNameAtom.jsx';
import { TeamPageTitleAtom } from '../atoms/TeamPageTitleAtom/TeamPageTitleAtom.jsx';
import { ParagraphAtom } from '../../../components/atoms/ParagraphAtom/ParagraphAtom.jsx';

import css from './TeamPageMolecule.module.css';

function TeamPageMolecule() {
  return (
    <>
      <TeamPageTitleAtom>Team</TeamPageTitleAtom>
      <ParagraphAtom
        className={css.team__content__description}
        text={
          <>
            Zgrany zespół, to serce każdej restauracji. A jeżeli jest on jeszcze
            młody i dynamiczny, to spełnienie marzeń każdego restauratora.
            Natomiast jeśli ten zespół jest do tego: doświadczony, pełen
            profesjonalistów i pasjonatów sztuki restauracyjnej, to jest jak
            wygrana w Eurojackpota. I ja tak mam… Pozwólcie, że przedstawię Wam:
          </>
        }
      />
      <TeamPageTitleAtom>Kuchnia</TeamPageTitleAtom>
      <ParagraphAtom
        text={
          <>
            <TeamPageNameAtom>Head Chef – Łukasz Theus</TeamPageNameAtom>
            Młody i solidnie doświadczony. Pracował z wieloma uznanymi szefami
            kuchni. Udźwignął minimalistyczny styl Ivana, w który potrafi ubrać
            swoje talerze. W Vinissimo od 2021. Od lipca 2023 samodzielnie
            zarządza naszą kuchnią.
          </>
        }
      />
      <ParagraphAtom
        text={
          <>
            <TeamPageNameAtom>Junior Sous Chef – Michał</TeamPageNameAtom>
            Na Bema jest z nami od kwietnia 2023. Terminował w większości
            topowych, Trójmiejskich restauracji. Prywatnie konkubent/narzeczony
            naszej przyjaciółki Werki z Fino. Od kilku miesięcy Junior Sous
            Chef.
          </>
        }
      />
      <ParagraphAtom
        text={
          <>
            <TeamPageNameAtom>
              Senior Grill Chef – Piotr ps. Ksiądz
            </TeamPageNameAtom>
            Oaza spokoju i opanowania. Opoka naszego zespołu. Wielbiciel
            rowerowych przejażdżek i Warki. Jak twierdzi, zawsze stara się
            pracować w aktualnie najlepszej restauracji. Prywatnie mój
            przyjaciel z który znamy się prawie 20 lat.
          </>
        }
      />
      <ParagraphAtom
        text={
          <>
            <TeamPageNameAtom>
              Chef de Partie – Waleria ps. Walerina
            </TeamPageNameAtom>
            Jedyna „rodzynka” w naszej kuchni. Jest z nami od jesieni 2022 roku.
            Zajmuje się kuchnią zimną i deserami, ale bez problemu odnajduje się
            na wydawce. Życiowa hedonistka, spod której ręki, wychodzą wszelkie
            materiały na naszych socjałach.
          </>
        }
      />

      <ParagraphAtom
        text={
          <>
            <TeamPageNameAtom>Chef de Partie – Robert</TeamPageNameAtom>
          </>
        }
      />
      <TeamPageTitleAtom>Sala</TeamPageTitleAtom>
      <ParagraphAtom
        text={
          <>
            <TeamPageNameAtom>
              Front Manager – Diana Kalinichenko
            </TeamPageNameAtom>
            Zapewnia najlepsze hospitality w całym Trójmieście i nie tylko.
            Fashionistka pełną gębą, która uwielbia jedzenie i wina najwyższy
            lotów. Absolwentka szkoły muzycznej i moja przybrana córka. Od 2018
            roku moja prawa ręka we wszystkich kolejnych konceptach.
          </>
        }
      />
      <ParagraphAtom
        text={
          <>
            <TeamPageNameAtom>
              Sommelier/Wine Coach – Mateusz Hermanowski ps. Herman
            </TeamPageNameAtom>
            Były wykładowca i spedytor, obecnie jeden z najbardziej
            wyedukowanych winiarsko ludzi w Polsce. Fan Karla Lagerfelda,
            sybaryta, filozof i marzenie niejednej niewiasty. Wielbiciel
            jamników i antrykotu. Od 2019 roku trwa przy mym boku.
          </>
        }
      />
      <ParagraphAtom
        text={
          <>
            <TeamPageNameAtom>
              Manager Sali/Sommelier – Rafał Malinowski
            </TeamPageNameAtom>
            Po dwóch latach, wrócił do nas na białym koniu. Perfekcjonista,
            który zadba o każdy detal. Zajmował się Gośćmi w najlepszych
            restauracjach. Uwaga – gaduła!
          </>
        }
      />
      <TeamPageTitleAtom>Boss</TeamPageTitleAtom>
      <ParagraphAtom
        text={
          <>
            <TeamPageNameAtom>
              Łukasz Chwojnicki ps. Gruby, Prezes, Smalec, Wieprzu
            </TeamPageNameAtom>
            Człowiek orkiestra, który spina wszystko w jedną całość. W swoim
            prime, najdroższy zmywakowy w środkowej Europie. GM i Head sommelier
            w jednym. Współtworzył kultowe Trójmiejskie lokale: Da Vinci,
            Sztuczka, Sztuczka Bistro, Probiernia Wine Bar. Największy, pod
            każdym względem, Trójmiejski birbant. Zna wszystkich i wszyscy znają
            jego. Żartowniś na granicy dobrego smaku. Uwielbia bąbelki i
            ploteczki. Świetny tancerz i marny wokalista. Fan Beaty Kozidrak.
          </>
        }
      />
    </>
  );
}

export { TeamPageMolecule };
