type PropType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Nav = ({ viewCart, setViewCart }: PropType) => {
  const button = viewCart ? (
    <button onClick={() => setViewCart(false)}>ViewProducts</button>
  ) : (
    <button onClick={() => setViewCart(true)}>View Cart</button>
  );

  const content = <nav className="nav">{button}</nav>;

  return content;
};

export default Nav;
