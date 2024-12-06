import reactLogo from "./assets/react.svg";
import Header from "../components/Header";
import Destinations from "../components/Destinations";
import data from "./data";

export default function App() {
  const entryElements = data.map((entry) => {
    return (
      <>
        <Destinations key={entry.id} entry={entry} />
      </>
    );
  });

  return (
    <>
      <Header />
      <main className="container">{entryElements}</main>
    </>
  );
}
