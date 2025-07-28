// For toggling mega menus
const linkButtons = document.querySelectorAll(".linkButton");
linkButtons.forEach((button) => {
  const targetMenuId = button.getAttribute("data-target");
  const targetMenu = document.getElementById(targetMenuId);

  button.addEventListener("mouseover", function () {
    targetMenu.classList.remove("hidden");
  });

  button.addEventListener("mouseleave", function () {
    targetMenu.classList.add("hidden");
  });

  targetMenu.addEventListener("mouseover", function () {
    targetMenu.classList.remove("hidden");
  });

  targetMenu.addEventListener("mouseleave", function () {
    targetMenu.classList.add("hidden");
  });

  button.addEventListener("click", () => {
    targetMenu.classList.toggle("hidden");
  });
});

// For mobile menu buttons
const menuButtons = document.querySelectorAll(".menuButton");

menuButtons.forEach((buttonWrapper) => {
  const targetMenuId = buttonWrapper.getAttribute("data-target");
  const targetMenu = document.getElementById(targetMenuId);
  const openIcon = buttonWrapper.querySelector(".menu-icon:not(.close-icon)");
  const closeIcon = buttonWrapper.querySelector(".menu-icon.close-icon");

  buttonWrapper.addEventListener("click", () => {
    const isHidden = targetMenu.classList.toggle("hidden");

    openIcon.classList.toggle("hidden", !isHidden);
    closeIcon.classList.toggle("hidden", isHidden);
  });
});

// For collapsing sections in menu
const collapseButtons = document.querySelectorAll(".collapseButton");
const collapseContents = document.querySelectorAll(".collapseContent");

collapseButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const content = collapseContents[index];
    if (index == 1) {
      content.classList.toggle("open1");
    } else {
      content.classList.toggle("open");
    }
  });
});

const toggleBtns = document.querySelectorAll(".productsToggleBtn");

const contentItems = document.querySelectorAll(".productsContent");

// Duyệt qua mỗi nút toggle
toggleBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    contentItems[index].classList.toggle("hidden");
  });
});

const textElements = document.querySelectorAll(".text-element");
const bgElements = document.querySelectorAll(".bg-element");
const menuIcons = document.querySelectorAll(".menu-icon");

window.addEventListener("scroll", () => {
  const shouldBeBlack = window.scrollY > window.innerHeight + 80;

  textElements.forEach((element) => {
    if (shouldBeBlack) {
      element.classList.remove("text-white");
      element.classList.add("text-black");
    } else {
      element.classList.remove("text-black");
      element.classList.add("text-white");
    }
  });

  // Handle hamburger menu icon color
  menuIcons.forEach((icon) => {
    if (shouldBeBlack) {
      icon.classList.remove("brightness-0", "invert");
    } else {
      icon.classList.add("brightness-0", "invert");
    }
  });

  bgElements.forEach((element) => {
    if (window.scrollY > 80) {
      element.classList.remove("bg-[#343434]");
    } else {
      element.classList.add("bg-[#343434]");
    }
  });
});
