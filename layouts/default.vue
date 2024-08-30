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
  title: "Базовое тело шаблона WEB:гурман"
});

let lastScrollTop = 70;
let navbar = ref(null);

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
</script>
<style></style>
