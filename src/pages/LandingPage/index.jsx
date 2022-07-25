import LandingPageImg from "../../components/LandingPageImg";
import "./index.css";

export default function LandingPage({ setPage }) {
  function handleButton() {
    setPage(true);
  }
  return (
    <div className="container">
      <div className="LandingPage">
        <div className="LandingPage--info">
          <h1 className="LandingPage--title">
            <span className="LandingPage--title__red">Nu</span> Kenzie
          </h1>
          <p>Centralize o controle das suas finanças</p>
          <span className="LandingPage--secondary">
            de forma rapida e segura
          </span>
          <button onClick={handleButton}>Iniciar</button>
        </div>
        <div className="LandingPage--img">
          <LandingPageImg />
        </div>
      </div>
    </div>
  );
}
