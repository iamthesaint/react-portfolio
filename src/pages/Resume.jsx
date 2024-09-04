import "../pages/Resume.css";

export default function Resume() {
  return (
    <section className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="container">
            <h2 className="card-title">Development Proficiencies</h2>
            <div className="card-text">
              <i class="devicon-javascript-plain icon"></i>
              <i class="devicon-react-original-wordmark icon"></i>
              <i class="devicon-css3-plain-wordmark icon"></i>
              <i class="devicon-nodejs-plain-wordmark icon"></i>
              <i class="devicon-npm-original-wordmark icon"></i>
              <i class="devicon-postgresql-plain-wordmark icon"></i>
              <i class="devicon-html5-plain-wordmark icon"></i>
              <i class="devicon-reactbootstrap-original icon"></i>
              <i class="devicon-typescript-plain icon"></i>
              <i class="devicon-vitejs-plain icon"></i>
            </div>
          </div>
        </div>
        <a className="res" href="src/assets/stephenie-st-hilaire-resume.pdf">
          download my resume
        </a>
      </div>
    </section>
  );
}
