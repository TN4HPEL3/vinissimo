import css from './TestPageOrganism.module.css';

function TestPageOrganism({ mainImage, children }) {
  return (
    <>
      {mainImage}
      <div className={css.TestPageOrganism}>{children}</div>
    </>
  );
}

export { TestPageOrganism };