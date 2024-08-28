document.addEventListener("DOMContentLoaded", function() {
  let imageIds = [
    "1500462918059-b1a0cb512f1d",
    "1531581147762-5961e6e2e6b1",
    "1626204327506-0d3ee11d7752",
    "1549068106-b024baf5062d",
  ];
  let [ul] = document.getElementsByTagName("ul");

  [...Array(4)].forEach(function (_, index) {
    let li = document.createElement("li");
    li.className =
      "relative h-[500px] w-full overflow-hidden rounded-2xl bg-rose-300 group flex-1 hover:grow-[1.25] transition-all";

    let img = document.createElement("img");
    img.className = "absolute inset-0 w-full h-full object-cover";
    img.src = `https://images.unsplash.com/photo-${imageIds[index]}?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlicmFudHxlbnwwfHwwfHx8MA%3D%3D`;
    img.alt = `image-${index}`;

    let content = document.createElement("div");
    content.className =
      "absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black from-30%";

    let contentWrapper = document.createElement("div");
    contentWrapper.className = "w-48";

    let h2 = document.createElement("h2");
    h2.className = "text-2xl text-white font-medium leading-tight";
    h2.textContent = `The card title is here`;

    let pWrapper = document.createElement("div");
    pWrapper.className =
      "grid grid-rows-[0fr] transition-all group-hover:grid-rows-[1fr]";

    let p = document.createElement("p");
    p.className =
      "mt-2 overflow-hidden text-white/70 opacity-0 group-hover:opacity-100 transition duration-300";
    p.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, iure.`;

    // Add pWrapper to p
    pWrapper.appendChild(p);
    // Add h2 to contentWrapper
    contentWrapper.appendChild(h2);
    // Add p to contentWrapper
    contentWrapper.appendChild(pWrapper);
    // Add contentWrapper to content
    content.appendChild(contentWrapper);
    // Add image to li
    li.appendChild(img);
    // Add content to li
    li.appendChild(content);
    // Add li to ul
    ul.appendChild(li);
  });

})
