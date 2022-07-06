const Header = (prop) => {
  return (
    <div className="flex justify-center p-4 font-sans text-lg font-extrabold text-white bg-sky-900">
      <h1>{prop.text}</h1>
    </div>
  );
};

export default Header;
