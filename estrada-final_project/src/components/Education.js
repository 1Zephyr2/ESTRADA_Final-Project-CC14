import React from 'react';

const Education = () => {
  return (
    <section className="section-card">
      <h2 className="section-title">Education</h2>
      <div className="mt-4 space-y-4 text-slate-700 dark:text-slate-300">
        <article>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-xl">Senior High School</h3>
          <p className="text-base">Pangasinan School of Art and Trades | 2020 - 2022</p>
        </article>
        <article>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-xl">Bachelor of Science in Information Technology</h3>
          <p className="text-base">University of the Cordilleras | Current</p>
          <p className="mt-1 text-base">Relevant Coursework: Web Development, Database Systems, UI/UX Design</p>
        </article>
      </div>
    </section>
  );
};

export default Education;