
import "./Home.css";
import bg from "../../assets/image.png";
import { FaRupeeSign } from "react-icons/fa";
import {downloadResume} from '../../helpers/Helerps';

interface NavbarProps {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}

const Home = ({ theme, setTheme }: NavbarProps) => {
  const toggle_mode = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello</span>
        <span className="introText">
          I'm <span className="introName">Aman</span> <br />
          Software Developer
        </span>
        <p className="introPara">
          Experienced Software Developer with 3 years of expertise in crafting
          scalable web applications and delivering efficient, user-focused
          solutions
        </p>
        <div className="hireMe" onClick={downloadResume}>
            <FaRupeeSign className="icon"/>
            <span>Hire Me</span> </div>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Home;
