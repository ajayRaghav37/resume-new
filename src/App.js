import React from "react";
import Basic from './components/Basic';
import BasicWork from './components/BasicWork';
import Certifications from './components/Certifications';
import Detailed from './components/Detailed';
import DetailedWork from './components/DetailedWork';
import Education from './components/Education';
import Error from './components/Error';
import Intro from './components/Intro';
import Learning from './components/Learning';
import LearningDetails from './components/LearningDetails';
import Personal from './components/Personal';
import Research from './components/Research';
import Scores from './components/Scores';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return <Router>
    <div>
      {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

      {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Routes>
        <Route path="/detailed" element={ResumeDetailed()} />
        <Route path="/*" element={ResumeBasic()} />
      </Routes>
    </div>
  </Router>;
}

const ResumeBasic = () => <div>
  {Intro}
  {BasicWork}
  {Education}
  {Certifications}
  {Scores}
  {Learning}
  {Research}
  {Personal}
</div>;

const ResumeDetailed = () => <div>
  {Intro}
  {DetailedWork}
  {Education}
  {Certifications}
  {LearningDetails}
  {Research}
  {Scores}
  {Personal}
</div>;

