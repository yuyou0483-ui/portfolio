import React, { useEffect, useState } from 'react';
import ClickSpark from './components/ClickSpark.jsx';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import ProjectDetail from './components/ProjectDetail.jsx';
import ExperienceDetail from './components/ExperienceDetail.jsx';
import { PROJECTS } from './data/projects.js';
import { EXPERIENCES } from './data/experience.js';

function parseHash() {
  const h = window.location.hash;
  const m = h.match(/^#\/project\/(\d+)$/);
  if (m) {
    const idx = Number(m[1]);
    if (idx >= 0 && idx < PROJECTS.length) return { page: 'detail', index: idx };
    return { page: 'detail', index: -1 };
  }
  const e = h.match(/^#\/experience\/(\d+)$/);
  if (e) {
    const idx = Number(e[1]);
    if (idx >= 0 && idx < EXPERIENCES.length) return { page: 'experience', index: idx };
    return { page: 'experience', index: -1 };
  }
  return { page: 'home', index: -1 };
}

export default function App() {
  const [route, setRoute] = useState(parseHash);

  useEffect(() => {
    const onHashChange = () => setRoute(parseHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const backToProjects = () => {
    window.location.hash = '';
    setRoute({ page: 'home', index: -1 });
    // 回到首页后定位到目录区
    requestAnimationFrame(() => {
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'auto' });
    });
  };

  const backToExperience = () => {
    window.location.hash = '';
    setRoute({ page: 'home', index: -1 });
    // 回到首页后定位到实习经历区
    requestAnimationFrame(() => {
      const el = document.getElementById('experience');
      if (el) el.scrollIntoView({ behavior: 'auto' });
    });
  };

  return (
    <ClickSpark sparkColor="#5b6042" sparkSize={9} sparkRadius={15} sparkCount={8} duration={420}>
      <Nav />
      {route.page === 'detail' ? (
        <main>
          <ProjectDetail index={route.index} onBack={backToProjects} />
        </main>
      ) : route.page === 'experience' ? (
        <main>
          <ExperienceDetail index={route.index} onBack={backToExperience} />
        </main>
      ) : (
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>
      )}
    </ClickSpark>
  );
}
