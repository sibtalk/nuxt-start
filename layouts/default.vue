<template>
  <header ref="navbar" class="h-12 z-50 w-full p-2">
    <bodyTopMenu />
  </header>
  <div class="wrapper">
    <main class="mx-auto px-0 pt-12">
      <slot class="z-49" />
    </main>
    <bodyFooter />
  </div>
</template>

<script setup>
useHead({
  title: "Базовое тело шаблона IP-55:dev",
  meta: [
    { name: "google", content: "notranslate" }
  ],
});

let lastScrollTop = 70;

const navbar = ref(null)

const setNavbarWidth = (width) => {
  if (navbar.value) {
    navbar.value.style.width = width
  }
}

if (process.client) {
  window.addEventListener("scroll", handleScroll);
}

function handleScroll() {
  let scrollTop = window.scrollY;
  if (navbar.value) {
    if (scrollTop > lastScrollTop) {
      navbar.value.classList.add(
        "active",
        "shadow-md",
        "backdrop-blur-[5px]",
        "dark:bg-[#131313b3]",
        "bg-[#ffffffb3]"
      );
    } else {
      navbar.value.classList.remove("active");
    }
    lastScrollTop = scrollTop;
    if (scrollTop == 0) {
      navbar.value.classList.remove(
        "shadow-md",
        "backdrop-blur-[5px]",
        "dark:bg-[#131313b3]",
        "bg-[#ffffffb3]"
      );
    }
  }
}
onMounted(() => {
  navbar.value = document.querySelector('header')
})

provide('setNavbarWidth', setNavbarWidth)
</script>
<style>
html,
body,
#__nuxt {
  height: 100%;
}
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}
main {
  flex: 1 0 auto;
  width: 100%;
}

.footer {
  flex: 0 0 auto;
}
::-webkit-scrollbar {
  width: 9px;
  height: 9px;
}

::-webkit-scrollbar-track {
  background: #fff;
}

::-webkit-scrollbar-thumb {
  background-color: #dcdcdc;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgb(var(--color-primary-DEFAULT) / 1);
  cursor: pointer;
}

.dark ::-webkit-scrollbar-thumb {
  background-color: #2c2c2c;
}
.dark ::-webkit-scrollbar-track {
  background: #121212;
}

.dark ::-webkit-scrollbar-thumb:hover {
  background: rgb(var(--color-primary-DEFAULT) / 1);
}
body {
  background-image: url(/files/img/bg.jpg);
}
.dark body {
  background-image: url(/files/img/bg_dark.jpg);
}
@font-face {
  font-family: "Neon";
  src: url("/fonts/nasalization-rg.otf") format("opentype");
}
h1 {
  font-family: "Neon", sans-serif;
}
h1 {
  font-size: clamp(1.5rem, 1.1rem + 2vw, 3rem) !important;
}
h2 {
  font-size: clamp(1.2rem, 1rem + 1vw, 2.5rem) !important;
}
.dynamic-font-size {
  font-size: calc(12px + 0.33vw) !important;
}
.color-primary {
  color: rgb(var(--color-primary-500));
}
.text-underline {
  position: relative;
  color: rgb(var(--color-primary-500));
}

.text-underline::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: rgb(var(--color-primary-500));
  visibility: hidden;
  transform: scaleX(0);
  transition: transform 0.2s ease-in-out;
}

.text-underline:hover::before {
  visibility: visible;
  transform: scaleX(1);
}
input,
textarea {
  background-color:rgb(var(--color-primary-100) / 0.1);
  padding: 0 8px;
  border-radius: 6px;
  outline-color: rgb(var(--color-primary-500));
  resize: none;
  border: 2px solid rgb(var(--color-primary-200));
}
header {
  position: fixed;
  top: 0;
  transition: all 0.3s;
  left: 0;
  width: calc(100% + var(--navbar-padding-right));
  padding-right: var(--navbar-padding-right);
  box-sizing: border-box;
}
header.active {
  top: -60px;
  transition: all 0.3s;
}
.wglass {
  background-color: #00a7ec00;
  border-radius: 12px;
  backdrop-filter: blur(7px);
  border: 2px solid #fff;
  box-shadow: 0 0 20px 0px #00a7ec36;
  overflow: hidden;
}
.dark .wglass {
  border-color: #0e1011;
  background-color: #0e1011c2 !important;
}
.footer {
  background-color: #f8f8f8;
}
.dark .footer {
  background-color: #0e1011;
}
pre code.hljs {
  background-color: #f8f8f8;
}
.dark pre code.hljs {
  background-color: #171717;
}

</style>
