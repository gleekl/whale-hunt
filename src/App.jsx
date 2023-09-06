import "./App.css";
import Timer from "./Timer";

function App() {
  return (
    <>
      <div className="app">
        <div className="container">
          <h1 className="header">
            Time since a whale was spotted and the gong was not sounded:
          </h1>
          <Timer />
          <p className="ps">Thanks for the video and for not informing.</p>
        </div>
      </div>
    </>
  );
}

export default App;
