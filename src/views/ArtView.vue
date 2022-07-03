<script>
export default {
  data() {
    return {
      images: [],
    };
  },
  beforeMount() {
    this.importAll(require.context('@/assets/showcase', false, /\.(jpg|png)$/));
  },
  methods: {
    importAll(r) {
      r.keys().forEach((element) => {
        this.images.push(element);
      });
      this.images = this.shuffle(this.images);
    },
    shuffle(array) {
      const newArray = JSON.parse(JSON.stringify(array));
      for (let i = newArray.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = newArray[i];
        newArray[i] = newArray[j];
        newArray[j] = temp;
      }
      return newArray;
    },
  },
};
</script>

<template>
  <main>
    <div
      id="info-wrapper"
      class="outer-wrapper"
    >
      <div id="info">
        <p>I mainly do traditional media art with charcoal pencils.</p>
        <p>In addition, I have experience with pixelart, especially for game development.</p>
        <p>I've participated several gamejams as an artist.</p>
        <p>Besides, I also do some digital art.</p>
        <p>Here are some of my works!</p>
      </div>
    </div>
    <div class="custom-shape-divider-bottom-1656769369">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,
    14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,
    41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,
    118.92,1055.71,111.31,985.66,92.83Z"
          class="shape-fill"
        />
      </svg>
    </div>
    <div
      id="showcase-wrapper"
      class="outer-wrapper"
    >
      <div id="showcase">
        <img
          v-for="image in images"
          :key="image.id"
          :src=" 'src/assets/showcase/' + image"
          :class="{pixelart: image[2] === 'P'}"
        >
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import '@/assets/base.css';

.custom-shape-divider-bottom-1656769369 {
    width: 100%;
    overflow: hidden;
    line-height: 0;
    background-color: var(--color-chai-tea-latte);
}

.custom-shape-divider-bottom-1656769369 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 108px;
    transform: rotateY(180deg);
}

.custom-shape-divider-bottom-1656769369 .shape-fill {
    fill: var(--color-cool-crayon-blue);
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .outer-wrapper {
    display: flex;
    justify-content: center;
  }

  #info-wrapper {
    width: 100%;
    background-color: var(--color-chai-tea-latte);
  }

  #showcase-wrapper {
    width: 100%;
    background-color: var(--color-cool-crayon-blue);
  }

  #info {
    width: clamp(200px, 95%, var(--vt-s-wrapper-base));
    /* width: var(--vt-s-wrapper-base); */
    padding: 24px;
    padding-top: 60px;
    font-size: 1.6rem;
  }

  #showcase {
    width: clamp(200px, 95%, var(--vt-s-wrapper-base));
    display: block;
    align-self: center;
    columns: 18rem;
    gap: 1rem;
    padding: 24px;
    padding-top: 60px;

    img {
      border: 4px solid var(--vt-c-indigo);
      border-radius: 16px;
      width: 100%;
      max-height: 800px;
      background-color: ghostwhite;
      break-inside: avoid;
      margin-bottom: 1rem;
      /* object-fit: cover; */
      filter: drop-shadow(0 0 4px var(--vt-c-indigo));
      object-fit: cover;
      object-position: 10%;
    }

    .pixelart {
      image-rendering: crisp-edges;
    }
  }
}
</style>
