import "../styles/cv.css";
import languagesData from "../data/languages.json";
import coursesData from "../data/courses.json";
import educationData from "../data/education.json";
import programmingLanguagesData from "../data/programming-languages.json";
import workExperienceData from "../data/work-experience.json";

type EducationEntry = {
  title: string;
  dates: string;
  institution: string;
  department?: string;
  description: string;
};
const education: EducationEntry[] = educationData;

type Course = {
  name: string;
  code: string;
};
const courses: Course[] = coursesData;

type Language = {
  name: string;
  level: string;
};
const languages: Language[] = languagesData;
const programmingLanguages: string[] = programmingLanguagesData;

type WorkEntry = {
  title: string;
  dates: string;
  organization: string;
  description: string;
};
const workExperience: WorkEntry[] = workExperienceData;

export default function CV() {
  return (
    <div id="main">
      <div className="card" style={{ padding: "1%", marginBottom: "1rem" }}>
        <div style={{ display: "flex", borderBottom: "5px solid #800000" }}>
          <div id="page-title">
            <b id="name-title">Dan Thanh's resume</b>
          </div>
          <a id="download" title="Download cv" href="/Thanh_CV_eng.pdf">
            <h2>Download CV</h2>
          </a>
        </div>

        <b>
          Master student at UiO studying programming and system architecture
        </b>
        <p id="profile">
          I am a cheerful and hardworking student with a creative mind at UiO,
          studying programming and system architecture. Through my studies I
          have developed strong skills in teamwork and agile development, and
          gained experience with designing, implementing and testing software
          solutions. I enjoy learning new technologies and solving technical
          challenges in a structured and creative way.
        </p>
      </div>

      <div id="cv-content" className="card">
        <div className="column">
          <div>
            <p className="under-topic">Contact Info</p>
            <ul id="contact-list">
              {/*<!--<li>
                  <i className="fa-solid fa-at"></i>
                  @
                </li>-->*/}
              <li>
                <i className="fa-regular fa-envelope"></i>
                <a href="mailto:danthanhngu@gmail.com">danthanhngu@gmail.com</a>
              </li>
              <li>
                <i className="fa-brands fa-linkedin"></i>
                <a href="https://www.linkedin.com/in/dan-thanh-ngu-a34797299/">
                  LinkedIn
                </a>
              </li>
              <li>
                <i className="fa-brands fa-github"></i>
                <a href="https://github.com/dantn0902">github.com/dantn0902</a>
              </li>
              <li>
                <i className="fa-solid fa-location-dot"></i>
                Oslo, Norway
              </li>
            </ul>
          </div>
          <div>
            <p className="under-topic">Programming Languages</p>
            <p>
              {programmingLanguages.map((lang, index) => (
                <span key={lang}>
                  <span className="skill-tag">{lang}</span>
                  {index < programmingLanguages.length - 1 && " - "}
                </span>
              ))}
            </p>
          </div>

          <div>
            <p className="under-topic">Languages</p>

            {languages.map((lang) => (
              <div className="lang-row" key={lang.name}>
                <span className="lang-name">{lang.name}</span>
                <span className="lang-lvl">{lang.level}</span>
              </div>
            ))}
          </div>

          <div>
            <p className="under-topic">Courses</p>

            {courses.map((course) => (
              <div className="lang-row" key={course.code}>
                <span className="lang-name">{course.name}</span>
                <span className="lang-lvl">{course.code}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="column">
          <p className="under-topic">Work Experience</p>

          {workExperience.map((job) => (
            <div className="entry" key={`${job.title}-${job.dates}`}>
              <div className="main">
                <span className="title">{job.title}</span>
                <span className="dates">{job.dates}</span>
              </div>
              <div className="sub">
                <em>{job.organization}</em>
              </div>
              <p className="desc">{job.description}</p>
            </div>
          ))}

          <p className="under-topic">Education</p>

          {education.map((edu) => (
            <div className="entry" key={`${edu.title}-${edu.dates}`}>
              <div className="main">
                <span className="title">{edu.title}</span>
                <span className="dates">{edu.dates}</span>
              </div>
              <div className="sub">
                {edu.department && <>{edu.department} - </>}
                <em>{edu.institution}</em>
              </div>
              <p className="desc">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
