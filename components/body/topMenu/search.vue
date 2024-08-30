<template>
  <UCard>
    <template #header>
      <div class="search">
        <input type="text" v-model="search" placeholder="Поиск..." />
      </div>
    </template>

    <Placeholder class="h-32" />

    <template #footer>
      <Placeholder class="h-8" />
    </template>
  </UCard>
</template>
<script setup>
const search = ref("");
</script>

<style scoped>
.search {
  width: 100%;
  height: 44px;
  margin: 0 12px 0 16px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.search input {
  background: #ffffff;
  width: 150px;
  padding: 2px 8px 2px 16px;
  border-radius: 16px;
  margin: 0 2px;
  outline-color: #0ea5e9;
  border: 1px solid #ccc;
}
.dark .search input {
  background: #0e1011;
  border: 1px solid #2f4057;
}
</style>
