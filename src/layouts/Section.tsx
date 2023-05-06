const Section = ({ children, ...props }) => {
  return (
    <section {...props}>
      {children}
      <h1>{props.name}</h1>
    </section>
  );
};

export default Section;
