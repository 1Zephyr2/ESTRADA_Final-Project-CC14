import React, { useState } from 'react';

const Skills = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="section-card">
      <h2 className="section-title">Skills</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'].map((skill) => (
          <span key={skill} className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-cyan-900/50 dark:text-cyan-200">
            {skill}
          </span>
        ))}
        {showMore &&
          ['Node.js', 'Git', 'REST APIs'].map((skill) => (
            <span key={skill} className="rounded-full bg-slate-200 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-slate-700 dark:text-slate-200">
              {skill}
            </span>
          ))}
      </div>

      <button
        type="button"
        onClick={() => setShowMore((value) => !value)}
        className="mt-5 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400"
      >
        {showMore ? 'Show Less' : 'Show More Skills'}
      </button>
    </section>
  );
};

export default Skills;