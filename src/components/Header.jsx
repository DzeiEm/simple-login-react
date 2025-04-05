import logo from "../assets/logo.png";
// import "./Header.css";
import ccsClasses from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p className={ccsClasses.paragraph}>
        A community of artists and art-lovers.
      </p>
    </header>
  );
}
