import "./index.css";

export default function Header({ finalizar }) {
  return (
    <header className="App--header">
      <div className="header--div">
        <h1>
          <span>Nu</span> Kenzie
        </h1>
        <button onClick={finalizar}>Inicio</button>
      </div>
    </header>
  );
}
