const listItems = Array.from(
  document.querySelectorAll(".HorizontalList__Item")
);
const megaMenu = document.querySelectorAll(".MegaMenu_wrapper");
const dropDown = document.querySelectorAll(".DropdownMenu_wrapper");
const cartClose = document.querySelector(".cart_close");
const cartOpen = document.querySelector(".cart_open");
const login = document.querySelector(".login");
const loginOpen = () =>
  (document.querySelector("#login").dataset.hidden = "false");
const mouseEnter = (e) => e.target.classList.add("is-expanded");
const mouseLeave = (e) => e.target.classList.remove("is-expanded");
const events = [
  { type: "mouseenter", event: mouseEnter },
  { type: "mouseleave", event: mouseLeave },
];
megaMenu.forEach((el) => {
  el.addEventListener("mouseenter", (e) => toggleHidden("MegaMenu", "hidden"));
  el.addEventListener("mouseleave", (e) => toggleHidden("MegaMenu", "hidden"));
});
const cartButtons = [cartOpen, cartClose];
cartButtons.forEach((el) =>
  el.addEventListener("click", () => toggleHidden("sidebar-cart", "hidden"))
);
console.log(cartOpen, cartClose);
dropDown.forEach((el) => {
  el.addEventListener("mouseenter", (e) =>
    toggleHidden("DropdownMenu", "hidden")
  );
  el.addEventListener("mouseleave", (e) =>
    toggleHidden("DropdownMenu", "hidden")
  );
});
const toggleHidden = (id, type) => {
  const attr = document.getElementById(id).attributes;
  if (attr[`aria-${type}`].value === "true") {
    document.getElementById(id).setAttribute(`aria-${type}`, "false");
  } else {
    document.getElementById(id).setAttribute(`aria-${type}`, "true");
  }
};
listItems.forEach((el) =>
  events.forEach((e) => el.addEventListener(e.type, e.event))
);

var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
