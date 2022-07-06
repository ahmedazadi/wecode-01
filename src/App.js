import "./App.css";
import Header from "./components/header";
import { ListBody } from "./components/list/list-body";

export default function App() {
  return (
    <>
      <Header text="Contacts" />
      <ListBody />
    </>
  );
}
