import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import About from "../Pages/About";
import Projects from "../Pages/Projects";
import App from "../Projects/React-corculation/Calculator";
import Films from "../Projects/countries route/src/App/App";
import Todo from "../Projects/todo-app/src/components/App";
import GithubSearch from '../Projects/github search/src/App'
import Yemak from "../Projects/yemak/src/App";
import Skills from "../Pages/Skills";
import Contact from "../Pages/Contact";
import NotFound from "../Pages/PageNotFound";







export default function Router({introTexts, language, mode, texts, photo}) {
    return (
      <Routes>
        <Route
          path="My-portfolio/"
          element={
            <Home
              introTexts={introTexts}
              language={language}
              mode={mode}
              texts={texts}
              photo={photo}
            />
          }
        />
        <Route
          path="My-portfolio/home"
          element={
            <Home
              introTexts={introTexts}
              language={language}
              mode={mode}
              texts={texts}
              photo={photo}
            />
          }
        />
        <Route
          path="My-portfolio/skills"
          element={
            <Skills
              introTexts={introTexts}
              language={language}
              mode={mode}
              texts={texts}
              photo={photo}
            />
          }
        />
        <Route
          path="My-portfolio/contact"
          element={
            <Contact
              introTexts={introTexts}
              language={language}
              mode={mode}
              texts={texts}
              photo={photo}
            />
          }
        />
        <Route
          path="My-portfolio/about"
          element={
            <About
              aboutTexts={introTexts}
              language={language}
              mode={mode}
              texts={texts}
              photo={photo}
            />
          }
        />
        <Route
          path="My-portfolio/projects"
          element={
            <Projects
              aboutTexts={introTexts}
              language={language}
              mode={mode}
              texts={texts}
              photo={photo}
            />
          }
        />
        <Route
          path="My-portfolio/projects/carculation"
          element={
            <App
              aboutTexts={introTexts}
              language={language}
              mode={mode}
              texts={texts}
              photo={photo}
            />
          }
        />
        <Route
          path="My-portfolio/projects/to-do"
          element={
            <Todo
              aboutTexts={introTexts}
              language={language}
              mode={mode}
              texts={texts}
              photo={photo}
            />
          }
        />
        <Route
          path="My-portfolio/projects/yemak/*"
          element={
            <Yemak
              aboutTexts={introTexts}
              language={language}
              mode={mode}
              texts={texts}
              photo={photo}
            />
          }
        />
        <Route
          path="My-portfolio/projects/github"
          element={
            <GithubSearch
              aboutTexts={introTexts}
              language={language}
              mode={mode}
              texts={texts}
              photo={photo}
            />
          }
        />
        <Route
          path="/My-portfolio/projects/films/*"
          element={
            <Films
              aboutTexts={introTexts}
              language={language}
              mode={mode}
              texts={texts}
              photo={photo}
            />
          }
        />
        <Route path="/My-portfolio/*" element={<NotFound/>} />
      </Routes>
    );
}