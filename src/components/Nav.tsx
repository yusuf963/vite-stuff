type NewProps = { name: string; age?: number; children: React.ReactNode };
//ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal'.
const Nav = ({ children, name }: NewProps) => {
  return (
    <nav>
      {children}
      <a href="/">{name}</a>
      <a href="/about">{name}</a>
    </nav>
  );
};

export default Nav;
