import "./styles.css";

export default function App() {
  return (
    <div className="app">
      <div className="Nav">
        {" "}
        <span className="inner-text">Nav bar</span>{" "}
      </div>

      <div className="body">
        <div className="sidebar">
          <span className="inner-text"> Side bar </span>
        </div>

        <div className="content">
          <span className="inner-text"> Content Area</span>
        </div>
      </div>
    </div>
  );
}
