<template>
  <UPopover mode="hover" :popper="{ strategy: 'absolute' }" :ui="{ width: 'w-[156px]' }">
    <template #default="{ open }">
      <UButton color="gray" variant="ghost" square :class="[open && 'bg-gray-50 dark:bg-gray-800']" aria-label="Color picker">
        <UIcon name="i-heroicons-swatch-20-solid" class="w-5 h-5 text-primary-500 dark:text-primary-400" />
      </UButton>
    </template>

    <template #panel>
      <div class="p-2">
        <div class="grid grid-cols-5 gap-2">
          <!-- Компоненты для выбора основного цвета -->
          <ColorPickerPill class="justify-center" v-for="color in primaryColors" :key="color.value" :color="color" :selected="primary" @select="selectPrimary(color)" />
        </div>

        <hr class="border-gray-200 dark:border-gray-800 my-2">

        <div class="grid grid-cols-5 gap-2">
          <!-- Компоненты для выбора серого цвета -->
          <ColorPickerPill class="justify-center" v-for="color in grayColors" :key="color.value" :color="color" :selected="gray" @select="selectGray(color)" />
        </div>
      </div>
    </template>
  </UPopover>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue';
import colors from '#tailwind-config/theme/colors';
import ColorPickerPill from './ColorPickerPill.vue';

// Получение конфигурации приложения
const appConfig = useAppConfig();
// Получение текущего режима цвета (светлый или тёмный)
const colorMode = useColorMode();

// Список доступных основных цветов
const primaryColors = computed(() => 
  appConfig.ui.colors
    .filter(color => color !== 'primary') // Исключаем основной цвет, чтобы не дублировать
    .map(color => ({
      value: color, 
      text: color, 
      hex: colors[color][colorMode.value === 'dark' ? 400 : 500] // Определяем цвет в зависимости от режима (светлый/тёмный)
    }))
);

// Текущий выбранный основной цвет
const primary = computed({
  get() {
    // Получаем текущий выбранный цвет из конфигурации приложения
    return primaryColors.value.find(option => option.value === appConfig.ui.primary);
  },
  set(option) {
    // Устанавливаем новый основной цвет в конфигурацию приложения
    appConfig.ui.primary = option.value;
  }
});

// Список доступных серых цветов
const grayColors = computed(() => 
  ['slate', 'cool', 'zinc', 'neutral', 'stone'].map(color => ({
    value: color, 
    text: color, 
    hex: colors[color][colorMode.value === 'dark' ? 400 : 500] // Определяем оттенок в зависимости от режима
  }))
);

// Текущий выбранный серый цвет
const gray = computed({
  get() {
    // Получаем текущий выбранный серый цвет из конфигурации приложения
    return grayColors.value.find(option => option.value === appConfig.ui.gray);
  },
  set(option) {
    // Устанавливаем новый серый цвет в конфигурацию приложения
    appConfig.ui.gray = option.value;
  }
});

// Действия при загрузке компонента
onMounted(() => {
  // Проверяем, есть ли сохранённый основной цвет в localStorage
  const savedPrimary = window.localStorage.getItem('nuxt-ui-primary');
  if (savedPrimary && primaryColors.value.find(option => option.value === savedPrimary)) {
    // Если есть, восстанавливаем его
    appConfig.ui.primary = savedPrimary;
  }

  // Проверяем, есть ли сохранённый серый цвет в localStorage
  const savedGray = window.localStorage.getItem('nuxt-ui-gray');
  if (savedGray && grayColors.value.find(option => option.value === savedGray)) {
    // Если есть, восстанавливаем его
    appConfig.ui.gray = savedGray;
  }
});

// Функция для выбора основного цвета и сохранения его в localStorage
function selectPrimary(color) {
  primary.value = color;
  // Сохраняем выбранный цвет в localStorage
  window.localStorage.setItem('nuxt-ui-primary', color.value);
}

// Функция для выбора серого цвета и сохранения его в localStorage
function selectGray(color) {
  gray.value = color;
  // Сохраняем выбранный цвет в localStorage
  window.localStorage.setItem('nuxt-ui-gray', color.value);
}
</script>
