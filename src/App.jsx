import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data.js";

function App() {
  return (
    <>
      <Header />
      <main className="container">
        {data.map((entry) => {
          return (
            <Entry
              key={entry.id}
              img={entry.img}
              title={entry.title}
              country={entry.country}
              googleMapsLink={entry.googleMapsLink}
              dates={entry.dates}
              text={entry.text}
            />
          );
        })}
      </main>
    </>
  );
}

export default App;
