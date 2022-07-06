const ListElement = (prop) => {
  return (
    <a
      href={prop.href}
      className="flex items-center mb-4  shadow-md rounded-lg bg-white"
    >
      <img
        className=" w-20 rounded-full p-2"
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
      />
      <div className=" ml-4">
        <h3 className="text-lg font-bold text-sky-900">{prop.name}</h3>
        <p className="text-sm">{prop.description}</p>
      </div>
    </a>
  );
};

export { ListElement };
