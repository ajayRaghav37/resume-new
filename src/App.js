import React from "react";
import BasicWork from './components/BasicWork';
import Certifications from './components/Certifications';
import DetailedWork_1 from './components/DetailedWork_1';
import DetailedWork_2 from './components/DetailedWork_2';
import DetailedWork_3 from './components/DetailedWork_3';
import DetailedWork_4 from './components/DetailedWork_4';
import DetailedWork_5 from './components/DetailedWork_5';
import DetailedWork_6 from './components/DetailedWork_6';
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
  <page>
    {Intro}
    {BasicWork}
  </page>
  <page>
    <div className="section first-page-section">
      {Education}
    </div>
    <div className="section">
      {Certifications}
    </div>
    {Scores}
    {Learning}
    {Research}
    {Personal}
  </page>
</div>;

const ResumeDetailed = () => <div>
  <page>
    {Intro}
    {DetailedWork_1}
  </page>
  <page>
    {DetailedWork_2}
  </page>
  <page>
    {DetailedWork_3}
  </page>
  <page>
    {DetailedWork_4}
  </page>
  <page>
    {DetailedWork_5}
  </page>
  <page>
    {DetailedWork_6}
    <div className="section">
      {Education}
    </div>
    <div className="section">
      {Certifications}
    </div>
  </page>
  <page>
    <div className="section first-page-section">
    </div>
    {LearningDetails}
    {Research}
    {Scores}
    {Personal}
  </page>
</div>;

