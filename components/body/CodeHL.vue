<template>
  <div class="relative">
    <ClientOnly >
      <highlightjs autodetect :code="code" />
    </ClientOnly>
    <UButton
      class="absolute top-2 right-2"
      :icon="btnCopy"
      size="sm"
      color="primary"
      square
      variant="ghost"
      @click="copyToClipboard"
    />
  </div>
</template>

<script setup lang="ts">
// Определяем пропсы, которые принимает компонент
const props = defineProps({
  code: {
    type: String,
    required: true,
  },
});
const btnCopy = ref("i-material-symbols-copy-all-outline");
// Привязываем пропс к реактивной переменной
const code = ref(props.code);

// Функция для копирования текста в буфер обмена
function copyToClipboard() {
  navigator.clipboard
    .writeText(code.value)
    .then(() => {
      btnCopy.value = "i-material-symbols-check-rounded";
      setTimeout(() => {
        btnCopy.value = "i-material-symbols-copy-all-outline";
      }, 3000);
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
}


</script>

<style scoped></style>
