import { Page404Template } from './template/Page404Template';

import css from './Page404.module.css';

function Page404() {
  return (
    // <Container>
    <div className={css.page404}>
      <Page404Template />
    </div>
    // </Container>
  );
}

export { Page404 };
