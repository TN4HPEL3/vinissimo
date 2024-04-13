import css from './SectionTemplate.module.css';

function SectionTemplate({ title, children }) {
  return (
    <div className={css.section}>
      {title && <h2 className={css.section__title}>{title}</h2>}
      {children}
    </div>
  );
}

export { SectionTemplate };
