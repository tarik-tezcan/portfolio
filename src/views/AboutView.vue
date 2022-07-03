<script>
</script>

<template>
  <main>
    <div class="info-section">
      <div
        id="about-me"
        class="wrapper"
      >
        <h2>Hi, I'm Tarık Tezcan!</h2>
        <p>I'm a computer engineering student in Istanbul Technical University</p>
        <p>
          Art is a very big part of my life, as I have loved drawing ever
          since I was a kid. Nowadays I'm and hobbyist artist. I mainly do
          traditional pencil art and pixelart.
        </p>
        <p>
          One area that combines my interests is game development. I have
          participated in several gamejams as an artist. I have worked
          with pixelart and character design.
        </p>
      </div>
    </div>
    <div
      class="info-section"
    >
      <div
        id="socials"
        class="wrapper"
      >
        <!-- <font-awesome-icon icon="fa-brands fa-artstation" /> -->
        <RouterLink to="/art">
          <font-awesome-icon icon="fa-solid fa-palette" />
        </RouterLink>
        <a href="https://www.linkedin.com/in/tariktezcan/">
          <font-awesome-icon icon="fa-brands fa-linkedin-in" />
        </a>
        <a href="https://github.com/avant-gardener">
          <font-awesome-icon icon="fa-brands fa-github-alt" />
        </a>
        <a href="mailto:tezcan20@itu.edu.tr">
          <font-awesome-icon icon="fa-solid fa-envelope" />
        </a>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import '@/assets/base.css';

main {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  font-size: 1.4rem;

  .info-section {
    width: 100%;
    background-color: var(--color-chai-tea-latte);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .wrapper {
    width: clamp(200px, 95%, var(--vt-s-wrapper-base));
    padding: 24px;
  }

  #about-me {
    display: flex;
    flex-direction: column;
    padding-top: 60px;
  }

  #socials {
    width: max-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 64px;
    justify-content: space-around;
    font-size: 48px;
  }

  a svg {
    color: var(--vt-c-indigo);
    transition: all 0.2s ease-in-out;
  }

  a svg:hover {
    color: #505993;
  }
}
</style>
