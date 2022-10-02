import User from "./dataProperty.js";
const user = new User().projects;
const project = user
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
        <div class="extraContext">
          <a href="./htmlComponents/ui.html" class="projectLink">Case</a>
          <a href="${git}" class= "${git ? "projectCode" : "display"}">Live</a>
         </div>
      </div>
    </div>
  </div>`;
  })
  .join("");
const work = document.getElementById("projectCon");
work.innerHTML = project;
