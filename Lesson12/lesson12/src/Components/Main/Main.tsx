import HighlightedText from "../HighlightedText/HighlightedText";
import "./Main.css";
const languages = [
  "C++",
  "C#",
  "HTML",
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "MSSQL",
  "MySQL",
  "PHP",
];

const other = [
  "CSS",
  "Winforms",
  "WPF",
  "MVC",
  "Unity",
  "ASP.net",
  "SpringFW",
  "React",
  "ReactNative",
];

export default function Main() {
  return (
    <main>
      <h3>My knowledge of programming languages:</h3>
      <div className="knowledge">
        {languages.map((item, index) => (
          <HighlightedText key={index}>{item}</HighlightedText>
        ))}
      </div>
      <h3>Other knowledge:</h3>
      <div className="knowledge">
        {other.map((item, index) => (
          <HighlightedText key={index}>{item}</HighlightedText>
        ))}
      </div>
    </main>
  );
}
