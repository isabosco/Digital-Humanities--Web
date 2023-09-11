document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("back-btn").addEventListener("click", function () {
    window.history.back();
  });

  const container = document.getElementById("works-container");

  worksData.forEach((work) => {
    createWork(work, container);
  });
});

const createWork = (work, container) => {
  const a = document.createElement("a");
  a.href = `work-detail.html?workId=${work.id}`;

  const section = document.createElement("section");
  section.id = work.id;

  const h2 = document.createElement("h2");
  h2.textContent = work.title;

  const p = document.createElement("p");
  p.textContent = work.description;

  const img = document.createElement("img");
  img.src = work.imgSrc;

  section.appendChild(h2);
  section.appendChild(p);
  section.appendChild(img);
  a.appendChild(section);
  container.appendChild(a);
};
