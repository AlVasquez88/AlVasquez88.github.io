// src/App.jsx
import React from "react";
import { PrimaryButton } from "./components/Buttons.jsx"; 
import "./index.css"; // global styles
import "./styles/layout.css";
import "./styles/header.css";
import "./styles/footer.css";

function App() {
  return (
    <div className="page">

      {/* Header */}
      <header id="top" className="header">
        <div className="container header-content">
          
          {/* --- LEFT SIDE: Name + Summary --- */}
          <div className="header-main">
            <img src="src/assets/alvin_vasquez_portfolio_picture.jpg" alt="Alvin Vasquez Portfolio" className="header-img"/>
            <h1 className="header-name">Alvin Vasquez</h1>
            <p className="header-role">Software Developer · Backend Focus</p>
            <p className="header-tagline">
              I help build reliable backend systems, working with databases,
              and test clean, maintainable code. I'm currently studying
              at Mohawk College and growing my skills through coursework and
              personal projects.
            </p>

            {/* --- BUTTON (using separate component now!) --- */}
            <div className="header-buttons">
              <PrimaryButton href="#contact">Contact Me</PrimaryButton>
            </div>
          </div>

          {/* --- RIGHT SIDE: Badge panel --- */}
          <aside className="header-side">
            <p className="header-side-label">Actively learning</p>
            <p className="header-side-highlight">
              C#, Java, PHP, SQL &amp; backend development
            </p>
            <div className="tag-list">
              {["C#", "Java", "PHP", "SQL", "Git"].map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </header>

      {/* Navigation */}
      <nav className="nav">
        <div className="container nav-inner">
          <a href="#summary">Summary</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Main content */}
      <main className="main">
        <div className="container main-inner">

          {/* Summary Section */}
          <section id="summary" className="card">
            <h2>About Me</h2>
            <p>
              I am a backend-focused software developer currently studying at
              Mohawk College. I enjoy understanding how data flows through an
              application, designing clear interfaces, and building systems that
              are easy to debug and extend.
            </p>
            <p>
              My experience includes object-oriented programming in C# and Java,
              working with relational databases in SQL Server and MySQL, and
              building basic web applications in PHP. I am continuously improving
              my skills through labs, assignments, and a business project that
              connect user interfaces to real data. My long term goal is to use my 
              backend skills to contribute into the world of cybersecurity where I can
              help protect databases and applications from threats using ethical hacking
              and secure coding practices.
            </p>
            <p>
              Outside of coding, I enjoy hiking, playing music, and sketching.
            </p>
          </section>

          {/* Education Section */}
          <section id="education" className="card">
            <h2>Education</h2>
            <div className="edu-item">
              <h3>
                Mohawk College – Computer Systems Technician / Software Support
                (Program 548)
              </h3>
              <p className="edu-meta">Hamilton, Ontario · In Progress</p>
              <p>Relevant coursework includes:</p>
              <ul>
                <li>Object-Oriented Programming in C# and Java</li>
                <li>Web Development (HTML, CSS, JavaScript, PHP)</li>
                <li>Database Systems (SQL Server &amp; normalization)</li>
                <li>Data Structures &amp; Algorithms</li>
                <li>Systems Analysis &amp; Design and Project Management</li>
              </ul>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="card">
            <h2>Skills</h2>
            <div className="skills-grid">

              <SkillGroup
                title="Languages"
                items={["C#", "Java", "PHP", "SQL"]}
              />

              <SkillGroup
                title="Backend & Frameworks"
                items={[
                  ".NET Framework",
                  "Windows Forms",
                  "PHP + phpmyadmin (procedural + basic MVC)",
                  "ADO.NET",
                  "Microsoft SQL Server Management Studio (MSSMS)"
                ]}
              />

              <SkillGroup
                title="Databases"
                items={[
                  "SQL Server (SSMS)",
                  "MSSMS / phpMyAdmin",
                  "Database design & normalization (up to 3NF)",
                  "Views, stored procedures, triggers"
                ]}
              />

              <SkillGroup
                title="Tools & Practices"
                items={[
                  "Git & GitHub",
                  "Bash / command line",
                  "Visual Studio, IntelliJ, VS Code",
                  "Unit testing basics (JUnit, xUnit)"
                ]}
              />

              <SkillGroup
                title="Soft Skills"
                items={[
                  "Team collaboration",
                  "Clear written communication",
                  "Problem solving & debugging",
                  "Working with requirements & rubrics"
                ]}
              />

            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="card">
            <h2>Projects</h2>
            <p className="section-intro">
              Below are a few projects that represent my interests and
              experience. Some are based on coursework, while one is 
              focused on backend development for a small business.
            </p>

            <div className="projects-grid">

              <ProjectCard
                title="Dr. Who Database Library"
                tagline="C# desktop application that uses ADO.net and Microsoft SQL Server Management Studio to configure and connect the entire Dr. Who series archives as a library."
                bullets={[
                  "Displays the names of actors for each season of Doctor Who.",
                  "Displays the number of episodes and titles names for each season if the user selected a doctor.",
                  "Desktop Application UI for readability, images of each actor, and archival listings."
                ]}
                tech="C#, .NET, Windows Forms, MSSMS"
                github="https://github.com/AlVasquez88/ADO.net-Assignment---Dr.-Who-Database-Library-"
              />

              <ProjectCard
                title="Unlimited Scroll Webpage"
                tagline="A PHP script that generates cards of authors and their quotes to scroll endlessly."
                bullets={[
                  "Uses PDO connection to phpmyadmin to obtain authors names and their quotes.",
                  "performs AJAX requests to load more quotes as the user scrolls down the page.",
                  "Fetches 20 cards at a time to optimize performance and user experience."
                ]}
                tech="PHP, phpmyadmin, JSON, XAMPP"
                github="https://github.com/AlVasquez88/PHP-Scripting---Assignment-4-Unlimited-Scroll/blob/main/quotes.php"
              />

              <ProjectCard
                title="Benchmarking Sort & Search Algorithms"
                tagline="My attempt to understand and benchmark various algorithms in Java programming."
                bullets={[
                  "Contains six sorting algorithms and two search algorithms.",
                  "Includes custom benchmarking code to measure execution time and memory usage.",
                  "Shows the table of Big O notation for each algorithm."
                ]}
                tech="Java"
                github="https://github.com/AlVasquez88/Benchmarking-Assignment-For-Data-Structures/tree/main"
              />

              <ProjectCard
                title="AMV-Tax-Receipt-Archiver"
                tagline="A desktop application that secure book-keeps every receipt annually for AMV Cleaning Services. It is under development."
                bullets={[
                  "Uses ADO.net to connect C# application to SQL Server database.",
                  "Stores, deletes, and saves receipt expenses in the database.",
                  "Uses Windows UI for readability and button controls to access the database."
                ]}
                tech="C#, ADO.NET, MSSMS, Windows Forms"
                github="https://github.com/AlVasquez88/AMV-Tax-Receipt-Archive"
              />

            </div>
          </section>

          {/* Resume Section */}
          <section id="resume" className="card">
            <h2>Resume</h2>
            <p>
              You can download a copy of my resume using the link below. It
              summarizes my education, technical skills, and experience.
              <p><b>Disclaimer:</b> The resume will be available after graduation.</p>
            </p>

            <PrimaryButton href="/resume.pdf">
              Download Resume (PDF)
            </PrimaryButton>
          </section>

          {/* Contact Section */}
          <section id="contact" className="card">
            <h2>Contact Information</h2>
            <p className="section-intro">
              I am open to opportunities for internships, junior developer roles,
              or collaborations. Email is the best way to reach me.
            </p>

            <div className="contact-grid">
              <div>
                <h3>Email</h3>
                <p><a href="mailto:alvin_vasquez48@outlook.com">alvin_vasquez48@outlook.com</a></p>
              </div>

              <div>
                <h3>GitHub</h3>
                <p>
                  <a href="https://github.com/AlVasquez88" target="_blank">
                    github.com/AlVasquez88
                  </a>
                </p>
              </div>

            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <p>&copy; 2025 Alvin Vasquez.</p>
          <a href="#top">Back to top</a>
        </div>
      </footer>
    </div>
  );
}


/* ================================
   Smaller Reusable Components
================================ */

function SkillGroup({ title, items }) {
  return (
    <div className="skill-group">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}

function ProjectCard({ title, tagline, bullets, tech, github }) {
  return (
    <article className="project-card">
      <h3>{title}</h3>
      <p className="project-tagline">{tagline}</p>

      <ul>
        {bullets.map((b) => <li key={b}>{b}</li>)}
      </ul>

      <p className="project-tech"><strong>Tech:</strong> {tech}</p>

      <p className="project-links">
        <a href={github} target="_blank" rel="noreferrer">
          View on GitHub
        </a>
      </p>
    </article>
  );
}

export default App;
