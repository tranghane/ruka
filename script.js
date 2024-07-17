const gallery = document.getElementById("gallery");

// window.onmousemove = (e) => {
//   const mouseX = e.clientX,
//     mouseY = e.clientY;

//   const xDecimal = mouseX / window.innerWidth,
//     yDecimal = mouseY / window.innerHeight;

//   const maxX = gallery.offsetWidth - window.innerWidth,
//     maxY = gallery.offsetHeight - window.innerHeight;

//   const panX = maxX * xDecimal * -1,
//     panY = maxY * yDecimal * -1;

//   gallery.animate(
//     {
//       transform: `translate(${panX}px, ${panY}px)`,
//     },
//     {
//       duration: 4000,
//       fill: "forwards",
//       easing: "ease",
//     }
//   );
// };

// cursor
const trailer = document.getElementById("trailer");

const animateTrailer = (e, interacting) => {
  const x = e.clientX - trailer.offsetWidth / 2,
    y = e.clientY - trailer.offsetHeight / 2;

  const keyframes = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 3 : 1})`,
  };

  trailer.animate(keyframes, {
    duration: 300,
    fill: "forwards",
  });
};

const getTrailerClass = (type) => {
  switch (type) {
    case "text":
      return "fa fa-heart";
    default:
      return "fa fa-arrow-up-right-from-square";
  }
};

window.onmousemove = (e) => {
  const interactable = e.target.closest(".interactable"),
    interacting = interactable !== null;
  const icon = document.getElementById("trailer-icon");

  animateTrailer(e, interacting);

  trailer.dataset.type = interacting ? interactable.dataset.type : "";

  if (interacting) {
    icon.className = getTrailerClass(interactable.dataset.type);
  }
  const mouseX = e.clientX,
    mouseY = e.clientY;

  const xDecimal = mouseX / window.innerWidth,
    yDecimal = mouseY / window.innerHeight;

  const maxX = gallery.offsetWidth - window.innerWidth,
    maxY = gallery.offsetHeight - window.innerHeight;

  const panX = maxX * xDecimal * -1,
    panY = maxY * yDecimal * -1;

  gallery.animate(
    {
      transform: `translate(${panX}px, ${panY}px)`,
    },
    {
      duration: 10000,
      fill: "forwards",
      easing: "ease",
    }
  );
};
