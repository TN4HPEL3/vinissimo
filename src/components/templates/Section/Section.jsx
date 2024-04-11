import css from './Section.module.css';

function Section({ title, children }) {
  return (
    <div className={css.section}>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}

export { Section };
