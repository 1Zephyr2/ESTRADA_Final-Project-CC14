import React, { useState } from 'react';
import './index.css';

import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gradient-to-b from-slate-100 via-slate-50 to-white text-slate-900 transition-colors duration-300 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 dark:text-slate-100">
        <header className="border-b border-slate-200 bg-blue-600/95 py-8 text-white shadow-md backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/90 sm:py-10">
          <div className="mx-auto flex w-[92%] max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="text-center sm:text-left">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Emanuel Aquino Estrada</h1>
              <p className="mt-1 text-sm text-blue-100 dark:text-slate-300 sm:text-base">Portfolio</p>
            </div>
            <button
              type="button"
              onClick={() => setDarkMode((value) => !value)}
              className="rounded-md border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20 dark:border-slate-500 dark:bg-slate-700 dark:hover:bg-slate-600"
            >
              {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
          </div>
        </header>

        <main className="mx-auto grid w-[92%] max-w-6xl grid-cols-1 gap-2 py-6 sm:gap-4 sm:py-8 lg:grid-cols-2 lg:gap-5">
          <AboutMe />
          <Education />
          <Experience />
          <Skills />
          <div className="lg:col-span-2">
            <Contact />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
