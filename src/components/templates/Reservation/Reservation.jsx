import { Section } from '../Section/Section.jsx';
import { Button } from '../../atoms/Button/Button.jsx';

import css from './Reservation.module.css';

function Reservation() {
  return (
    <Section title="rezerwacja">
      <div className={css.reservation}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
          molestias? Amet officia, blanditiis voluptatibus corrupti tempora
          voluptatem minus dignissimos vero nesciunt consequatur debitis nihil.
          Sapiente optio quo odit quos vero deserunt in? Minima omnis
          praesentium ad officia minus corrupti. In aliquid maiores
          exercitationem voluptas architecto repudiandae quod est neque, dolorum
          reprehenderit modi voluptate? Explicabo dignissimos voluptas officiis
          consectetur, minima, molestiae pariatur accusantium beatae esse ipsum,
          magni laudantium modi quas dolore eveniet deleniti? Obcaecati
          asperiores excepturi blanditiis magnam atque, corrupti sequi iure
          consectetur velit aspernatur aliquam magni mollitia tenetur?
          Architecto dolorum natus mollitia accusantium obcaecati vero
          perferendis earum iusto consectetur praesentium.
        </p>
        <Button text="Zarezerwuj stolik" />
      </div>
    </Section>
  );
}

export { Reservation };