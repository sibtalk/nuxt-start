<template>
  <div class="wrap ">
    <ul>
      <li>
        <NuxtLink to="/start">
          <UAlert
            icon="i-heroicons-light-bulb"
            color="green"
            variant="outline"
            title="Стартовый шаблон"
            description="Необходимые модули для начала создания  проекта."
          />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/start/config">
        <UAlert
          icon="i-material-symbols-settings-outline"
          color="amber"
          variant="outline"
          title="Конфигурации шаблона"
          description="Настройка модулей и компонентов."
        />
      </NuxtLink>
      </li>
      <li>
        <UAlert
          icon="i-material-symbols-dataset-linked-outline"
          color="white"
          variant="outline"
          title="Pinia"
          description="Библиотека управления состоянием приложения."
        />
      </li>
      <li>
        <UAlert
          icon="i-material-symbols-hard-drive-outline"
          color="white"
          variant="outline"
          title="Аренда VDS"
          description="Гарантированный кешбек по реферальной ссылке."
        />
      </li>
      <li>
        <UAlert
          icon="i-material-symbols-settings-applications-outline-sharp"
          color="white"
          variant="outline"
          title="Настройка сервера"
          description="Установка панели управления и окружения для Nuxt."
        />
      </li>
      <li>
        <UAlert
          icon="i-material-symbols-lan-outline"
          color="white"
          variant="outline"
          title="Простой API для сайта"
          description="Удаленное подключение к базе данных MYSQL."
        />
      </li>
      <li>
        <UAlert
          icon="i-heroicons-qr-code"
          color="white"
          variant="outline"
          title="Компонент QR Code"
          description="Создание и скачивание QR в различных форматах."
        />
      </li>
      <li>
        <UAlert
          icon="i-material-symbols-notifications-active-outline-rounded"
          color="red"
          variant="outline"
          title="Прямо ОГОНЬ!"
          description="Различные идеи которые могут вклиниться без очереди."
        />
      </li>
      
    </ul>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.wrap{
  overflow: auto;
  height:calc(100vh - 12px);
  padding-right: 12px;
}
li {
  margin-bottom: 12px;
}
li .w-full{
  cursor: default;
}
li a .w-full {
  cursor: pointer;
  transition: all 0.3s;
}

li a:hover > .w-full {
  background-color: rgb(var(--color-primary-100)/.3);;
}
.dark li a:hover > .w-full {
  background-color: rgb(var(--color-primary-100)/.1);;
}
li a.router-link-active.router-link-exact-active .w-full {
  --tw-ring-color: rgb(var(--color-primary-500));
  color: rgb(var(--color-primary-500));
  background-color: transparent;
}
li a.router-link-active.router-link-exact-active:hover > .w-full {
  background-color: transparent;
}
li a.router-link-active.router-link-exact-active:hover, 
li a.router-link-active.router-link-exact-active:hover > .w-full{
  cursor: default;
}
li a:not(.router-link-active.router-link-exact-active):hover {
  cursor: pointer;
}
</style>
