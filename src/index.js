import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="ana.jpg" alt="Orășanu Ana" />;
}

function Intro() {
  return (
    <div>
      <h1>Orășanu Ana-Maria</h1>
      <h3>Junior Full Stack Developer</h3>
      <p>
        I am a Junior Full Stack Developer and a first-year master's student. I
        enjoy designing web applications and solving problems through
        technology. In my free time, I love reading fantasy and psychology
        books, watching YouTube, and taking walks outside.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML" emoji="♟️" color="orange" />
      <Skill skill="JavaScript" emoji="🪄" color="yellow" />
      <Skill skill="React" emoji="⚛️" color="lightblue" />
      <Skill skill="jQuery" emoji="✨" color="lightblue" />
      <Skill skill="Node.js" emoji="💎" color="lightgreen" />
      <Skill skill="Express" emoji="🚅" color="lightgrey" />
      <Skill skill="CSS" emoji="💄" color="lightblue" />
      <Skill skill="Bootstrap" emoji="👒" color="purple" />
      <Skill skill="MongoDB" emoji="🖼️" color="lightgreen" />
      <Skill skill="SQL" emoji="🎁" color="orange" />
      <Skill skill="C++" emoji="👑" color="lightblue" />
      <Skill skill="PHP" emoji="🧸" color="purple" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
