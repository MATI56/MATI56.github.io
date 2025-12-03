const projects = [
  {
    title: "Fortune Guesser",
    image: "images/tarotgame.png",
	  alt: "Screenshot from the game Fortune Guesser",
    description: "Narrative-driven prototype featuring quirky hand-drawn characters, branching paths, and multiple endings.",
	  tools: ["Unity","C#", "Photoshop", "Trello"],
//  link: "project-tarot.html"
	  link: "https://zachpetty.itch.io/fortune-guesser"
  },

  {
    title: "Lyin' Jack",
    image: "images/blackjack.png",
	  alt: "Screenshot from the game Lyin' Jack",
    description: "A 2D Blackjack \"Balatro but it's blackjack and gambling\" styled card game prototype featuring hand crafted pixel art.",
	  tools: ["Unity","C#","WebGL", "Aseprite"],
//  link: "project-blackjack.html"
	  link: "https://mcalmic.itch.io/lyin-jack"
  },

  {
    title: "\"Bike Game\"",
    image: "images/bikegame.png",
	  alt: "Screenshot from the game \"Bike Game\"",
    description: "A fast-paced, horror-themed mountain biking game prototype created for Serenity Forge through the RealXP Lab program.",
	  tools: ["Unity","C#","Notion"],
//  link: "project-bike.html"
	  link: "https://www.linkedin.com/posts/realxplab_in-our-second-spotlight-were-excited-to-activity-7369728777855090690-r1hP?utm_source=share&utm_medium=member_desktop&rcm=ACoAADxaG8oBNqijK_Ixe-Nq9WkyNmArNgGX_h0"
  },

  {
    title: "Goblins Are Real",
    image: "images/goblinsbig.png",
	  alt: "Screenshot from horror game Goblins are Real",
    description: "Atmospheric horror jam entry built in Unreal Engine 5. Focused on AI driven wave-based survival gameplay.",
	  tools: ["Unreal","C++","Blueprints"],
//  link: "project-goblins.html"
	  link: "https://zachpetty.itch.io/goblins-are-real"
  },

  {
    title: "Tornado Trouble",
    image: "images/tornado.png",
	  alt: "Screenshot from game jam submission Tornado Trouble",
    description: "Control a volatile storm with chaotic physics and navigate fragile levels. Built as a team in under 1 week.",
	  tools: ["Unreal","C++","Blueprints"],
//  link: "project-tornadotrouble.html"
	  link: "https://zachpetty.itch.io/tornado-trouble"
  },
  
  {
    title: "Supermarket Time Heist",
    image: "images/supermarket.png",
	  alt: "Screenshot from Supermarket Time Heist",
    description: "First person prototype with time bending mechanics. Built as my first game jam submission.",
	  tools: ["Unreal","Blueprints"],
//  link: "project-supermarketheist.html"
	  link: "https://zachpetty.itch.io/supermarket-time-heist"
  }
  
//   {
// 	  title: "Legally Distinct 3D Pac-Man",
//    image: "images/pacguy.png",
// 	  alt: "Screenshot from a game that looks like pac man",
//    description: "A quick prototype created to reacquaint myself with Unity after several years in Unreal Engine.",
// 	  tools: ["Unity","C#"],
//    link: "project-supermarketheist.html"
// 	  link: "https://github link"
//   }
];

const projectList = document.getElementById("project-list");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";
  const toolsHTML = project.tools.map(tool => `<span class="tool">${tool}</span>`).join(", ");
  card.innerHTML = `
    <img src="${project.image}" alt="${project.alt}">
    <h3>${project.title}</h3>
	<p class="tools"><strong>Tools:</strong> ${toolsHTML}</p>
    <p>${project.description}</p>
    <a class="btn" href="${project.link}" target="_blank" rel="noopener noreferrer">View Project</a>
  `;
  projectList.appendChild(card);
});
