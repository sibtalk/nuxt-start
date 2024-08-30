<template>
  <div class="flex justify-between items-center h-full">
    <div class="flex items-center mr-7">
      <NuxtLink to="/" class="items-center flex">
        <img
          src="/files/img/logo-cpt_sm.png"
          class="max-h-8 mr-2 wg_logo inline-block"
        />
        <h4 class="mr-2">IP-55</h4>
        <UBadge label="dev" variant="subtle" size="xs" />
        <div class="absolute top-2 left-2.5">
          <ClientOnly>
            <UAvatar
              v-show="imageSrc"
              chip-color="primary"
              chip-text=""
              chip-position="bottom-left"
              size="sm"
              :src="imageSrc"
              alt="WG"
            />
          </ClientOnly>
        </div>
      </NuxtLink>
    </div>
    <div class="flex">
      <ClientOnly>
        <bodyColorPicker />
        <UButton
          :icon="
            isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'
          "
          color="gray"
          variant="ghost"
          aria-label="Theme"
          @click="isDark = !isDark"
        />
        <template #fallback>
          <div class="w-8 h-8" />
        </template>
      </ClientOnly>
      <UButton
        color="gray"
        variant="ghost"
        icon="i-heroicons-magnifying-glass-16-solid"
        @click="isOpenSearch = true"
      />
      <UButton
        color="gray"
        variant="ghost"
        icon="i-heroicons-list-bullet-16-solid"
        @click="isOpen = true"
      />

      <USlideover v-model="isOpen" >
        <div class="p-4 flex-1">
          <div class="flex items-center justify-between">
            <h2 class="text-2xl text-gray-900 dark:text-white">Меню</h2>
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1"
              @click="isOpen = false"
            />
          </div>
          <bodyRightMenuPage class="mt-4 pb-12" />
        </div>
      </USlideover>
    </div>
  </div>
  <UModal v-model="isOpenSearch" fullscreen>
    <UCard
      :ui="{
        base: 'h-full flex flex-col',
        rounded: '',
        divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        body: {
          base: 'grow',
        },
      }"
    >
      <template #header>
        <div class="flex items-center justify-between">
          <h3
            class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
          >
            Панель поиска
          </h3>
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-x-mark-20-solid"
            class="-my-1"
            @click="isOpenSearch = false"
          />
        </div>
      </template>
      <p>*В разработке</p>
    </UCard>
  </UModal>
</template>

<script setup lang="ts">
const router = useRouter();
const imageSrc = ref("");

onMounted(() => {});

onBeforeUnmount(() => {});

const isOpen = ref(false);
const isOpenSearch = ref(false);
const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});

const beforeRouteLeave = () => {
  closeSlider();
};

const closeSlider = () => {
  isOpen.value = false;
};

router.beforeEach((to, from, next) => {
  beforeRouteLeave();
  next();
});
</script>

<style scoped>
h4{
  font-family: "Neon", sans-serif;
}
.wg_logo {
  transition: all 0.2s;
}
.wg_logo:hover {
  margin-left: 0px;
  transform: scale(1.2);
}
</style>
