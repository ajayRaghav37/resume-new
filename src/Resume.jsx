import React from 'react';
import resume from './data/resume';
import rich, { range } from './rich';

const bulletText = (b, detailed) => {
  if (typeof b === 'string') return detailed ? b : null;
  if (detailed) return b.text;
  if (b.brief === true) return b.text;
  return b.brief || null;
};

const Bullets = ({ items, detailed }) => {
  const shown = items.map((b) => bulletText(b, detailed)).filter(Boolean);
  if (!shown.length) return null;
  return (
    <ul>
      {shown.map((t, i) => (
        <li key={i}>{rich(t)}</li>
      ))}
    </ul>
  );
};

const Header = () => {
  const { name, headline, lastUpdated, site, contact } = resume;
  return (
    <header className="header">
      <div className="row">
        <div>
          <h1>{name}</h1>
          <p className="headline">{headline}</p>
        </div>
        <p className="version">
          Last updated on {lastUpdated}
          <br />
          Latest version: <a href={`${site}/`}>Brief</a> or <a href={`${site}/detailed`}>Detailed</a>
        </p>
      </div>
      <p className="contact">
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
        {contact.phones.map((p) => (
          <span key={p} className="contact-item">
            {' | '}
            {p}
          </span>
        ))}
        {resume.location && <span className="contact-item"> | {resume.location}</span>}
      </p>
      <p className="contact">
        {contact.links.map((l, i) => (
          <span key={l.label} className="contact-item">
            {i > 0 && ' | '}
            <a href={l.url} target="_blank" rel="noreferrer">
              <img className="icon" src={l.icon} alt="" />
              {l.text}
            </a>
          </span>
        ))}
        <span className="contact-item">
          {' | '}
          {contact.social.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer" title={s.label} aria-label={s.label}>
              <img className="icon" src={s.icon} alt={s.label} />
            </a>
          ))}
          {contact.socialHandle}
        </span>
        <span className="contact-item">
          {' | '}
          <a href={contact.youtube.url} target="_blank" rel="noreferrer" title={contact.youtube.label}>
            <img className="icon" src={contact.youtube.icon} alt={contact.youtube.label} />
            {contact.youtube.text}
          </a>
        </span>
      </p>
    </header>
  );
};

const OrgHeader = ({ logo, name, right, title, sub, subRight }) => (
  <div className="org-header">
    {logo && <img className="logo" src={logo} alt="" />}
    <div className="grow">
      <div className="row">
        <h3>{name}</h3>
        {right && <span className="dates">{right}</span>}
      </div>
      {title && <p className="job-title">{title}</p>}
      {(sub || subRight) && (
        <div className="row sub">
          <span>{sub}</span>
          {subRight && <span className="awards">{subRight}</span>}
        </div>
      )}
    </div>
  </div>
);

const Promotions = ({ titles }) => (
  <p className="titles">
    <b>Promotions:</b>{' '}
    {[...titles].reverse().map((t, i) => (
      <span key={t.title}>
        {i > 0 && ' \u2192 '}
        {t.title} ({t.start})
      </span>
    ))}
  </p>
);

const SubEntry = ({ name, start, end, role, summary, bullets, detailed }) => (
  <div className="entry">
    <p className="subhead">
      <b>{name}</b>
      {(role || start) && (
        <span className="role">
          {' \u2014 '}
          {[role, start && range(start, end)].filter(Boolean).join(', ')}
        </span>
      )}
    </p>
    {summary && <p>{rich(summary)}</p>}
    {bullets && <Bullets items={bullets} detailed={detailed} />}
  </div>
);

const MONTHS = { Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6, Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12 };
const stamp = (d) => {
  if (!d || d === 'Present') return 999999;
  const [month, year] = d.split(' ');
  return Number(year) * 12 + (MONTHS[month] || 0);
};
const byRecent = (items) =>
  [...items].sort((a, b) => stamp(b.end) - stamp(a.end) || stamp(b.start) - stamp(a.start));

const jobSkills = (job) => {
  const seen = new Set();
  const out = [];
  const add = (csv) =>
    (csv || '').split(',').forEach((s) => {
      const t = s.trim();
      if (t && !seen.has(t.toLowerCase())) {
        seen.add(t.toLowerCase());
        out.push(t);
      }
    });
  (job.segments || []).forEach((s) => add(s.tools));
  (job.groups || []).forEach((g) => g.items.forEach((i) => add(i.tools)));
  (job.projects || []).forEach((p) => add(p.tools));
  return out;
};

const Awards = ({ text }) => (
  <span className="awards">
    <img className="icon" src="award.png" alt="" />
    {text}
  </span>
);

const Summary = () =>
  resume.summary ? (
    <section>
      <h2>Summary</h2>
      <p>{rich(resume.summary)}</p>
    </section>
  ) : null;

const Experience = ({ detailed }) => (
  <section>
    <h2>Work Experience</h2>
    {resume.experience.map((job) => (
      <div className="job" key={job.company}>
        <OrgHeader
          logo={job.logo}
          name={job.company}
          right={range(job.start, job.end)}
          title={job.title}
          sub={job.awards && <Awards text={job.awards} />}
        />
        <Promotions titles={job.titles} />
        <p className="tools">
          <b>Skills:</b> {jobSkills(job).join(', ')}
        </p>

        {job.segments && !detailed && <p>{job.summary}</p>}
        {job.segments && detailed && (
          <>
            <p>{job.responsibilitiesIntro}</p>
            <ul>
              {job.responsibilities.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </>
        )}
        {job.segments && <p>{rich(job.responsibilitiesOutro)}</p>}
        {job.projects && detailed && job.notes.map((n) => <p key={n}>{rich(n)}</p>)}

        <div className="children">
          {job.segments &&
            job.segments.map((s) => (
              <SubEntry
                key={s.name}
                name={`Segment: ${s.name}`}
                start={s.start}
                end={s.end}
                bullets={s.bullets}
                detailed={detailed}
              />
            ))}

          {job.projects &&
            detailed &&
            byRecent(job.projects).map((p) => <SubEntry key={p.name} {...p} name={`Project: ${p.name}`} detailed />)}

          {job.groups &&
            !detailed &&
            job.groups.map((g) => (
              <div key={g.name} className="group">
                <p className="group-name">Client: {g.name}</p>
                {g.items.map((it) => (
                  <SubEntry key={it.name} {...it} name={`Project: ${it.name}`} detailed={false} />
                ))}
              </div>
            ))}
        </div>
      </div>
    ))}
  </section>
);

const Education = () => (
  <section>
    <h2>Education</h2>
    {resume.education.map((e) => (
      <div className="entry" key={e.institution}>
        <OrgHeader logo={e.logo} name={e.institution} right={range(e.start, e.end)} sub={e.detail} />
        <p>{e.summary}</p>
      </div>
    ))}
  </section>
);

const Certifications = () => (
  <section>
    <h2>Certifications</h2>
    {resume.certifications.map((c) => (
      <div className="entry" key={c.name}>
        <OrgHeader logo={c.logo} name={c.name} right={range(c.start, c.end)} sub={c.detail} />
      </div>
    ))}
  </section>
);

const Research = () => (
  <section>
    <h2>{resume.research.title}</h2>
    <ul>
      {resume.research.items.map((r) => (
        <li key={r}>{rich(r)}</li>
      ))}
    </ul>
  </section>
);

const Learning = ({ detailed }) => {
  const items = resume.learning.items.filter((i) => detailed || i.brief);
  return (
    <section>
      <h2>
        {resume.learning.title} <span className="subtitle">{resume.learning.subtitle}</span>
      </h2>
      {items.map((l) => (
        <div className="entry" key={l.name}>
          <OrgHeader logo={l.logo} name={l.name} right={range(l.start, l.end)} sub={l.role} />
          <p>{rich(l.summary)}</p>
        </div>
      ))}
    </section>
  );
};

const Scores = () => (
  <section>
    <h2>Exam Scores</h2>
    <ul className="plain">
      {resume.scores.map((s) => (
        <li key={s.exam}>
          <b>{s.exam}:</b> {s.score}
          {s.note && ` (${s.note})`}
          {' \u2014 '}
          {s.details.map(([k, v], i) => (
            <span key={k}>
              {i > 0 && ' \u00b7 '}
              {k} {v}
            </span>
          ))}
        </li>
      ))}
    </ul>
  </section>
);

const Personal = () => (
  <section>
    <h2>Personal Details</h2>
    <dl className="kv">
      {resume.personal.map((p) => (
        <React.Fragment key={p.label}>
          <dt>{p.label}:</dt>
          <dd>
            {p.icon && <img className="icon" src={p.icon} alt="" />}
            {p.value}
          </dd>
        </React.Fragment>
      ))}
    </dl>
  </section>
);

export default function Resume({ detailed = false }) {
  return (
    <main className="resume">
      <Header />
      <Summary />
      <Experience detailed={detailed} />
      <Education />
      <Certifications />
      <Research />
      <Learning detailed={detailed} />
      <Scores />
      <Personal />
    </main>
  );
}
