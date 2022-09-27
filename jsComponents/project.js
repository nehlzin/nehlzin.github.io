const work = document.getElementById("projectCon");

const projects = [
  {
    id: 1,
    category: "React",
    title: "Movie App",
    description: "Movie Review Website",
    inspiration:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sequi necessitatibus quae blanditiis nemo ratione officiis, enim saepe. Eligendi velit odio eum eveniet esse minima consequatur omnis unde vel magni",
    projectImage: "../assets/wwrkst2.jpg",
    link: "#",
    path: "#",
  },
  {
    id: 2,
    category: "UiUx",
    title: "Food App",
    description: "Get Amazing Food Recipes ",
    inspiration:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sequi necessitatibus quae blanditiis nemo ratione officiis, enim saepe. Eligendi velit odio eum eveniet esse minima consequatur omnis unde vel magni",
    projectImage: "../assets/wwrkst2.jpg",
    link: "#",
    path: "#",
  },
  {
    id: 3,
    category: "React Native",
    title: "Soft Gist",
    description: "Blog post, with 100+ real time updates",
    inspiration:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sequi necessitatibus quae blanditiis nemo ratione officiis, enim saepe. Eligendi velit odio eum eveniet esse minima consequatur omnis unde vel magni",
    projectImage: "../assets/workstation.jpg",
    link: "#",
    git: "#",
    path: "#",
  },

  // prtotypes
  {
    id: 1,
    category: "React",
    title: "Movie App",
    description: "Movie Review Website",
    inspiration:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sequi necessitatibus quae blanditiis nemo ratione officiis, enim saepe. Eligendi velit odio eum eveniet esse minima consequatur omnis unde vel magni",
    projectImage: "../assets/wwrkst2.jpg",
    link: "#",
    path: "#",
  },
  {
    id: 2,
    category: "UiUx",
    title: "Food App",
    description: "Get Amazing Food Recipes ",
    inspiration:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sequi necessitatibus quae blanditiis nemo ratione officiis, enim saepe. Eligendi velit odio eum eveniet esse minima consequatur omnis unde vel magni",
    projectImage: "../assets/wwrkst2.jpg",
    link: "#",
    path: "#",
  },
  {
    id: 3,
    category: "React Native",
    title: "Soft Gist",
    description: "Blog post, with 100+ real time updates",
    inspiration:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sequi necessitatibus quae blanditiis nemo ratione officiis, enim saepe. Eligendi velit odio eum eveniet esse minima consequatur omnis unde vel magni",
    projectImage: "../assets/workstation.jpg",
    link: "#",
    git: "#",
    path: "#",
  },
  {
    id: 1,
    category: "React",
    title: "Movie App",
    description: "Movie Review Website",
    inspiration:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sequi necessitatibus quae blanditiis nemo ratione officiis, enim saepe. Eligendi velit odio eum eveniet esse minima consequatur omnis unde vel magni",
    projectImage: "../assets/wwrkst2.jpg",
    link: "#",
    path: "#",
  },
  {
    id: 2,
    category: "UiUx",
    title: "Food App",
    description: "Get Amazing Food Recipes ",
    inspiration:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sequi necessitatibus quae blanditiis nemo ratione officiis, enim saepe. Eligendi velit odio eum eveniet esse minima consequatur omnis unde vel magni",
    projectImage: "../assets/wwrkst2.jpg",
    link: "#",
    path: "#",
  },
  {
    id: 3,
    category: "React Native",
    title: "Soft Gist",
    description: "Blog post, with 100+ real time updates",
    inspiration:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sequi necessitatibus quae blanditiis nemo ratione officiis, enim saepe. Eligendi velit odio eum eveniet esse minima consequatur omnis unde vel magni",
    projectImage: "../assets/workstation.jpg",
    link: "#",
    git: "#",
    path: "#",
  },
];

let property = projects
  .map((item) => {
    const { id, title, description, git, path, projectImage } = item;
    return `
    <div class="project" ${id}>
      <div class="projectContaier">
        <div class="projImgCon">
          <img src="${projectImage}" alt="" />
        </div>
        <div class="projContext">
          <h3 class="projTitle">${title}</h3>
          <h3 class="projTitle">${description}</h3>
          <div class="etraContext">
            <a href="./htmlComponents/ui.html" class="projectLink">Case</a>
            <a href="${git}" class="projectCode">Live</a>
           </div>
        </div>
      </div>
    </div>`;
  })
  .join("");
work.innerHTML = property;
