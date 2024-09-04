import "./Home.css";
import Image from "react-bootstrap/Image";
import self from "../assets/self.png";


export default function Home() {
  return (
    <section className="container">
      <div className="container col-md-12">
        <h1>Hi, I'm Steph</h1>
        <p className="about left-text">
          My decision to pursue web development stems from a natural passion for
          creativity and problem-solving. I love bringing ideas to life, finding
          that perfect blend of logic and artistry. My insatiable curiosity is
          always pushing me to learn more, and I am contsantly seeking new
          challenges to expand my skillset. The opportunity to craft digital
          experiences that impact people's lives excites me, and I'm eager to
          continue growing as a developer.
        </p>
      </div>
      <div className="container col-md-6">
        <Image
          src={self}
          alt="photo of steph st.hilaire"
          className="self-img"
        />
      </div>
    </section>
  );
}
