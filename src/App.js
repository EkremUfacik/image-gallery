import Pictures from "./components/Pictures";
import data from "./helper/data";

function App() {
  return (
    <div>
      <h1 className="header" style={{ textAlign: "center" }}>
        Image Gallery
      </h1>
      <div className="container">
        {data.map((p) => (
          <Pictures name={p.photographer} img={p.src.large} />
        ))}
      </div>
    </div>
  );
}

export default App;
