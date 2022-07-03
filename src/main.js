import { createApp } from 'vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faLinkedinIn, faGithubAlt, faArtstation } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope, faPalette, faDove, faHeart, faLightbulb,
} from '@fortawesome/free-solid-svg-icons';
import router from './router';
import App from './App.vue';

// const app = createApp(App);

// app.mount('#app');

/* add icons to the library */
library.add(
  faArtstation,
  faLinkedinIn,
  faGithubAlt,
  faEnvelope,
  faPalette,
  faDove,
  faHeart,
  faLightbulb,
);

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .mount('#app');
