import React, { useState } from "react";
import "./App.css";

const courses = [
  {
    id: "python",
    name: "Python",
    lessons: [
      {
        id: "intro",
        title: "Introduction à Python",
        content: (
          <>
            <h3>Introduction à Python</h3>
            <p>
              Python est un langage très populaire, simple à apprendre. Exemple :
            </p>
            <pre>
              {`print("Bonjour, monde !")`}
            </pre>
          </>
        ),
      },
      {
        id: "variables",
        title: "Variables en Python",
        content: (
          <>
            <h3>Variables</h3>
            <p>
              Les variables servent à stocker des valeurs.
            </p>
            <pre>
              {`x = 10
nom = "Alice"
print(x, nom)`}
            </pre>
          </>
        ),
      },
    ],
  },
  {
    id: "js",
    name: "JavaScript",
    lessons: [
      {
        id: "intro",
        title: "Introduction à JavaScript",
        content: (
          <>
            <h3>Introduction à JavaScript</h3>
            <p>
              JavaScript sert à rendre les sites interactifs. Exemple :
            </p>
            <pre>
              {`console.log("Salut !");`}
            </pre>
          </>
        ),
      },
    ],
  },
];

function App() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);

  return (
    <div className="container">
      <header>
        <h1>Cours de Programmation</h1>
      </header>
      <main>
        {!selectedCourse && (
          <div>
            <h2>Choisis un langage :</h2>
            <div className="course-list">
              {courses.map((course) => (
                <button
                  key={course.id}
                  className="btn"
                  onClick={() => setSelectedCourse(course)}
                >
                  {course.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {selectedCourse && !selectedLesson && (
          <div>
            <button className="btn-back" onClick={() => setSelectedCourse(null)}>
              ⬅ Retour
            </button>
            <h2>{selectedCourse.name}</h2>
            <ul className="lesson-list">
              {selectedCourse.lessons.map((lesson) => (
                <li key={lesson.id}>
                  <button
                    className="btn"
                    onClick={() => setSelectedLesson(lesson)}
                  >
                    {lesson.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {selectedLesson && (
          <div>
            <button
              className="btn-back"
              onClick={() => setSelectedLesson(null)}
            >
              ⬅ Retour
            </button>
            {selectedLesson.content}
          </div>
        )}
      </main>
      <footer>
        <hr />
        <p>
          Application déployée sur GitHub Pages.<br />
          Accès direct par QR code dans le README du projet !<br />
          Ajoute d’autres cours facilement dans le code 😉
        </p>
      </footer>
    </div>
  );
}

export default App;