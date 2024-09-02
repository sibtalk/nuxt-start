
import 'highlight.js/lib/common';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import highlightJS from '@highlightjs/vue-plugin';

export default defineNuxtPlugin((nuxtApp) => {
  const { vueApp } = nuxtApp;
  hljs.registerLanguage('javascript', javascript);
  vueApp.use(highlightJS);

  // Function to dynamically load and apply the highlight.js CSS
  const loadHighlightStyles = (theme) => {
    const currentLink = document.getElementById('hljs-theme');

    if (currentLink) {
      currentLink.remove();
    }

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.id = 'hljs-theme';
    link.href = theme === 'dark'
    ? 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/night-owl.min.css'
      : 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/a11y-light.min.css';
    document.head.appendChild(link);
  };

  const colorMode = useColorMode();

  // Watch for changes in color mode and apply the appropriate style
  watch(
    () => colorMode.value,
    (newMode) => {
      loadHighlightStyles(newMode);
    },
    { immediate: true } // Apply style on initial load
  );
});
