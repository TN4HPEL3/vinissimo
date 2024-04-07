import { Menu } from '../../components/templates/Menu/Menu';
import { About } from '../../components/templates/About/About';
import { RateUs } from '../../components/templates/RateUs/RateUs';
import { MainBoard } from '../../components/templates/MainBoard/MainBoard';
import { Reservation } from '../../components/templates/Reservation/Reservation';
import { CheckMediaQuery } from '../../helpers/checkMediaQuery';

function Home() {
  const screen = CheckMediaQuery();
  return (
    <div>
      <MainBoard />
      <About />
      <Menu />
      <Reservation />
      {screen === 'desktop' && <RateUs />}
    </div>
  );
}

export { Home };