<script>
export default {
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
    },
  },
};
</script>

<template>
  <link
    rel="preconnect"
    href="https://fonts.googleapis.com"
  >
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin
  >
  <link
    href="https://fonts.googleapis.com/css2?family=Gowun+Dodum&family=Urbanist:wght@400;500;700&family=Zen+Kurenaido&display=swap"
    rel="stylesheet"
  >
  <header>
    <div id="wrapper">
      <div>
        <!-- <font-awesome-icon icon="fa-solid fa-heart" /> -->
        <RouterLink
          id="name-logo"
          to="/"
        >
          tarık tezcan
        </RouterLink>
      </div>
      <nav>
        <RouterLink to="/">
          home
        </RouterLink>
        <RouterLink to="/art">
          art
        </RouterLink>
        <!--
        <RouterLink to="/programming">
          programming
        </RouterLink>
        <RouterLink to="/about">
          about
        </RouterLink>
        -->
      </nav>
    </div>
  </header>
  <RouterView />
  <footer>
    <p>
      Icon by <a href="https://freeicons.io/profile/88863">WANICON</a> on <a href="https://freeicons.io">freeicons.io</a>
    </p>
  </footer>
</template>

<style lang="scss">
@import '@/assets/base.css';

body {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* height: calc(9 * 100vh); */
  height: max-content;
}

header {
  width: 100vw;
  background-color: var(--vt-c-jungle-green);
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;
  height: 64px;

  #name-logo {
    text-decoration: none;
  }

  #wrapper {
    font-size: 1.4rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: clamp(200px, 95%, var(--vt-s-wrapper-base));
    padding: 16px 24px;
    a {
      color: inherit;
    }
  }

  nav {
    * {
      margin-left: 10px;
      text-decoration: none;
    }
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

footer {
  height: 64px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  background-color: var(--vt-c-jungle-green);
}
</style>
