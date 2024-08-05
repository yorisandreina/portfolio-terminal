import React, { useState, useEffect } from "react";
import "./Terminal.css";
import { projects } from "./objects/projects"; 

const Terminal = () => {
  const [output, setOutput] = useState([]);
  const [input, setInput] = useState("");

  const commands = {
    1: showAboutMe,
    2: showProjects,
    3: showExperience,
    clear: clearOutput,
    help: showHelp,
  };

  function processInput() {
    const command = input.trim();
    setOutput((prevOutput) => [...prevOutput, `> ${command}`]);
    setInput("");

    if (commands[command]) {
      commands[command]();
    } else if (command.startsWith("project")) {
      const projectIndex = parseInt(command.split(" ")[1]) - 1;
      if (projects[projectIndex]) {
        displayProject(projectIndex);
      } else {
        setOutput((prevOutput) => [...prevOutput, "Project not found."]);
      }
    } else {
      setOutput((prevOutput) => [
        ...prevOutput,
        'Command not found. Type "help" for a list of commands.',
      ]);
    }
  }

  function showAboutMe() {
    setOutput((prevOutput) => [
      ...prevOutput,
      `<div>
        <p>I remember the first time I wrote a simple 'Hello World' program—it was a small achievement, but it sparked a passion for coding that has only grown stronger over time. Now, as a Software Development student in my fifth semester, that curiosity has evolved into a commitment to mastering the art and science of building software.</p>
        <p>Currently,  I've been deeply involved in the UI/UX design of a "Buy Now, Pay Later" mobile application, which has enriched my understanding of user flow, app design, and creating seamless user experiences. This has been developed and published so that more than 15,000 users can manage their credit and finance purchases. I've built a variety of projects, including mobile apps for runners and quiz enthusiasts, as well as command line tools and REST servers. With every project, I aim to deliver clean, efficient, and scalable code, and I've successfully created and tested applications that handle real-world data. For instance, one of my recent tasks involved creating a service that efficiently managed records in a MongoDB cluster, validating functionality using Postman and displaying data on the webpage using Angular. </p>
        <p>What sets me apart is my relentless drive to learn and stay updated with the latest trends and advancements in technology. I’m always exploring new tools, attending webinars, and reading up on industry news to ensure I’m ahead of the curve. This proactive approach not only enriches my skill set but also enables me to bring innovative ideas and solutions to the table.</p>
        <p>Beyond coding, I'm a passionate runner. Whether I'm training for a marathon or simply enjoying a weekend run, I find that the discipline and perseverance required in running translate well into my approach to software development. I’m also an extrovert who thrives in collaborative environments, enjoying the creativity and energy that comes from working in a team. Yet, I also value moments of solitude where I can dive deep into problem-solving or simply recharge.</p>
        <p>I'm excited about the future and always looking for opportunities to grow, both personally and professionally. If you’re interested in connecting or collaborating on a project, I’d love to hear from you. Let’s build something amazing together!</p>
      </div>`,
    ]);
  }

  function showProjects() {
    setOutput((prevOutput) => [
      ...prevOutput,
      "<h2>Projects</h2>" +
        projects
          .map(
            (project, index) =>
              `<li>Type 'project ${index + 1}' to view ${project.name}</li> `
          )
          .join("") + "</br>"
    ]);
  }

  function displayProject(projectIndex) {
    const project = projects[projectIndex];
    if (project) {
      setOutput((prevOutput) => [
        ...prevOutput,
        `<div>
          <h2>${project.name}</h2>
          <p>Creation date: ${project.creationDate}</p>
          <p>${project.description}</p>
            ${project.keyHighlights
              .map(
                (highlight, index) =>
                  `<li key=${index}>${highlight}</li>`
              )
              .join("")}
          <p>${project.knowledge}</p>
          <p>Technologies: ${project.technologies}</p>
          <div class='image-container'>
            ${project.images
              .map(
                (img, index) =>
                  `<img class='img' src=${img} alt="Project Image ${
                    index + 1
                  }" key=${index}/>`
              )
              .join("")}
          </div>
          <div class='link-container'>
            <a href=${project.githubLink}>GitHub</a>
            ${
              project.designLink
                ? `<a href=${project.designLink}>Design</a>`
                : ""
            }
          </div>
        </div>`,
      ]);
    }
  }

  function showExperience() {
    setOutput((prevOutput) => [
      ...prevOutput,
      "<h2>Experience</h2><p>This is the experience section.</p>",
    ]);
  }

  function clearOutput() {
    setOutput([]);
  }

  function showHelp() {
    setOutput((prevOutput) => [
      ...prevOutput,
      `<div><h2>Available Commands</h2><li>1 - About Me</li>
        <li>2 - Projects</li>
        <li>3 - Experience</li>
        <li>4 - Skills</li>
        <li>5 - Education</li>
        <li>clear - Clear the terminal</li>
        <li>help - Show this help message</li>
        <li>project [number] - View a specific project</li>
      </div>`,
    ]);
  }

  useEffect(() => {
    setOutput(() => [
      'Welcome to my portfolio. Type "help" for a list of commands.',
    ]);
  }, []);

  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="circle red"></div>
        <div className="circle yellow"></div>
        <div className="circle green"></div>
      </div>
      <div className="terminal-body">
        <div id="output">
          {output.map((line, index) => (
            <div key={index} dangerouslySetInnerHTML={{ __html: line }} />
          ))}
        </div>
        <div id="input-wrapper">
          <span className="prompt"> {">"} </span>
          <input
            id="input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && processInput()}
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
