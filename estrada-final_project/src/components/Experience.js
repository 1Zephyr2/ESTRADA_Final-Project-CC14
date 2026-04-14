import React, { useEffect, useMemo, useState } from 'react';

const certificationData = [
  {
    id: 1,
    title: 'Responsive Web Design',
    provider: 'freeCodeCamp',
    year: '2025',
    category: 'Web',
    points: [
      'Learned HTML and CSS fundamentals for building responsive websites.',
      'Completed hands-on projects such as forms, landing pages, and layouts.',
      'Applied accessibility and clean UI design practices.',
    ],
  },
  {
    id: 2,
    title: 'JavaScript Algorithms and Data Structures',
    provider: 'freeCodeCamp',
    year: '2026',
    category: 'Programming',
    points: [
      'Practiced core JavaScript concepts including arrays, objects, and functions.',
      'Solved beginner algorithm challenges and logic problems.',
      'Improved problem-solving and debugging skills through coding exercises.',
    ],
  },
];

const Experience = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const timer = setTimeout(() => {
      setItems(certificationData);
      setLoading(false);
    }, 650);

    return () => clearTimeout(timer);
  }, []);

  const visibleItems = useMemo(() => {
    if (filter === 'All') {
      return items;
    }

    return items.filter((item) => item.category === filter);
  }, [filter, items]);

  return (
    <section className="section-card">
      <h2 className="section-title">Certifications</h2>

      <div className="mt-4 flex flex-wrap gap-2">
        {['All', 'Web', 'Programming'].map((group) => (
          <button
            key={group}
            type="button"
            onClick={() => setFilter(group)}
            className={`rounded-full px-3 py-1 text-sm font-semibold transition ${
              filter === group
                ? 'bg-blue-600 text-white dark:bg-cyan-500 dark:text-slate-950'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600'
            }`}
          >
            {group}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="mt-5 rounded-lg border border-dashed border-slate-300 p-4 text-sm text-slate-600 dark:border-slate-600 dark:text-slate-300">
          Loading certification timeline...
        </div>
      ) : (
        <div className="relative mt-5 pl-6">
          <span className="timeline-line" aria-hidden="true" />

          <div className="space-y-6">
            {visibleItems.map((item) => (
              <article key={item.id} className="relative">
                <div className="absolute -left-[1.35rem] top-1">
                  <span className="timeline-dot" aria-hidden="true" />
                </div>

                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-600 dark:bg-slate-700/40">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{item.title}</h3>
                    <span className="text-sm font-medium text-blue-700 dark:text-cyan-300">{item.year}</span>
                  </div>
                  <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
                    {item.provider} | {item.category}
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700 dark:text-slate-200 sm:text-base">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      {!loading && visibleItems.length === 0 && (
        <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">No certifications found in this category.</p>
      )}
      <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
        Tip: Use the filter buttons to interact with the timeline content.
      </p>
    </section>
  );
};

export default Experience;
