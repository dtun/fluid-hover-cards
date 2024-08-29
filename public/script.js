document.addEventListener("DOMContentLoaded", function () {
  let ul = document.querySelector("ul");

  function createCard({ imageId, title, description }) {
    let li = document.createElement("li");
    li.className =
      "relative h-[500px] w-full overflow-hidden rounded-2xl bg-rose-300 group flex-1 hover:grow-[1.25] transition-all";

    let img = document.createElement("img");
    img.className = "absolute inset-0 w-full h-full object-cover";
    img.src = `https://images.unsplash.com/photo-${imageId}?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlicmFudHxlbnwwfHwwfHx8MA%3D%3D`;
    img.alt = title;
    img.loading = "lazy";

    let content = document.createElement("div");
    content.className =
      "absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black from-30%";

    let contentWrapper = document.createElement("div");
    contentWrapper.className = "w-48";

    let h2 = document.createElement("h2");
    h2.className = "text-2xl text-white font-medium leading-tight";
    h2.textContent = title;

    let pWrapper = document.createElement("div");
    pWrapper.className =
      "grid grid-rows-[0fr] transition-all group-hover:grid-rows-[1fr]";

    let p = document.createElement("p");
    p.className =
      "mt-2 overflow-hidden text-white/70 opacity-0 group-hover:opacity-100 transition duration-300";
    p.textContent = description;

    pWrapper.appendChild(p);
    contentWrapper.append(h2, pWrapper);
    content.appendChild(contentWrapper);
    li.append(img, content);

    return li;
  }

  [
    {
      imageId: "1500462918059-b1a0cb512f1d",
      title: "Natural Beauty",
      description: "Discover breathtaking landscapes and scenic views",
    },
    {
      imageId: "1531581147762-5961e6e2e6b1",
      title: "City Skyline",
      description: "Experience the energy and adventure of urban life",
    },
    {
      imageId: "1626204327506-0d3ee11d7752",
      title: "Peaceful Retreat",
      description: "Find tranquility in secluded and serene locations",
    },
    {
      imageId: "1549068106-b024baf5062d",
      title: "Local Cuisine",
      description: "Savor the flavors of traditional and modern dishes",
    },
  ].forEach(function ({ imageId, title, description }) {
    let li = createCard({ imageId, title, description });

    ul.appendChild(li);
  });
});
