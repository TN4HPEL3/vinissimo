function NewYearCategoryDetailsAtom({ details }) {
  return (
    <div>
      {Array.isArray(details) ? (
        <ul>
          {details.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>{details}</p>
      )}
    </div>
  );
}

export { NewYearCategoryDetailsAtom };
