import { ListElement } from "./list-element";

const data = [
  {
    name: "name one",
    description: "describe one describe one",
    link: `https://www.youtube.com/`,
  },
  {
    name: "name two",
    description: "describe two describe two",
    link: `https://www.youtube.com/`,
  },
  {
    name: "name three",
    description: "describe three describe three",
    link: `https://www.youtube.com/`,
  },
  {
    name: "name four",
    description: "describe four describe four",
    link: `https://www.youtube.com/`,
  },
];

const ListBody = () => {
  return (
    <div className="max-w-sm mx-auto py-4 bg-sky-100 p-3">
      <ul>
        {data.map((value) => {
          return (
            <ListElement
              name={value.name}
              description={value.description}
              href={value.link}
            />
          );
        })}
      </ul>
    </div>
  );
};

export { ListBody };
