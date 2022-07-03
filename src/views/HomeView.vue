<script>
export default {
  data() {
    return {
      images: [],
    };
  },
  beforeMount() {
    this.importAll(require.context('@/assets/preview', false, /\.(jpg|png)$/));
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
  <main id="main">
    <div
      id="introduction"
      class="info-section"
    >
      <div
        id="introduction-content"
        class="content-wrapper"
      >
        <div id="information">
          <div class="text">
            <p class="title">
              Hi, I'm <br> Tarık Tezcan
            </p>
            <p class="subtext">
              I'm a computer engineering student in Istanbul Technical University.
            </p>
            <p class="subtext">
              I'm an artist and a developer.
            </p>
          </div>
          <img
            id="profile-image"
            src="@/assets/idea.svg"
            alt="profile-image"
          >
        </div>
        <div id="socials">
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
      <div class="custom-shape-divider-bottom-1656769369">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,
            14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,
            31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,
            118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          />
        </svg>
      </div>
    </div>
    <div
      id="art"
      class="info-section"
    >
      <div
        id="art-content"
        class="content-wrapper"
      >
        <p>Here are some of my art</p>
        <div id="art-samples">
          <img
            v-for="image in images"
            :key="image.id"
            :src=" 'src/assets/showcase/' + image"
            :class="{pixelart: image[2] === 'P'}"
          >
        </div>
        <p>
          <RouterLink to="/art">
            Click to see more!
          </RouterLink>
        </p>
      </div>
      <div class="custom-shape-divider-bottom-1656770423">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,
            168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,
            146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          />
        </svg>
      </div>
    </div>
    <div
      id="programming"
      class="info-section"
    >
      <div
        id="programming-content"
        class="content-wrapper"
      >
        <div>
          <p>I'm experienced with game development using Unity and Godot</p>
          <img
            src="@/assets/test_images/unity-tab.png"
            alt="unity"
          >
        </div>
        <div>
          <img
            src="@/assets/test_images/pixeltrue-web-development-1.png"
            alt="python"
          >
          <p>
            I have experience in web development with HTML,
            CSS and JS; and with JS frameworks like VueJS
          </p>
        </div>
        <div>
          <p>I used Python to work with AI and neural nets</p>
          <img
            src="@/assets/test_images/gummy-programming.png"
            alt="python"
          >
        </div>
        <div>
          <img
            src="@/assets/test_images/icons8-github-480.png"
            alt="github"
          >
          <p>You can learn more about my projects in my <a href="https://github.com/avant-gardener">GitHub profile</a></p>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import '@/assets/base.css';

main {
  a svg {
    color: var(--vt-c-indigo);
    transition: all 0.2s ease-in-out;
  }

  a svg:hover {
    color: #505993;
  }

  .custom-shape-divider-bottom-1656769369 {
      width: 100%;
      overflow: hidden;
      line-height: 0;
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

  .custom-shape-divider-bottom-1656770423 {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      overflow: hidden;
      line-height: 0;
      transform: rotate(180deg);
  }

  .custom-shape-divider-bottom-1656770423 svg {
      position: relative;
      display: block;
      width: calc(100% + 1.3px);
      height: 83px;
  }

  .custom-shape-divider-bottom-1656770423 .shape-fill {
      fill: var(--color-allspice);
  }

  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;
  min-height: max-content;
  margin-top: -1 * 64px;
  /* position: absolute; */
  /* top: 0; */

  .info-section {
    height: max-content;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .content-wrapper {
      padding-left: 24px;
      padding-right: 24px;
      width: clamp(200px, 95%, var(--vt-s-wrapper-base));
    }
  }
}

#introduction {
  background-color: var(--color-chai-tea-latte);
}

#introduction-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 96px;
  min-height: 100vh;

  #information {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  #socials {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 64px;
    justify-content: space-around;
    font-size: 4.2rem;
  }

  .title {
    font-size: 4rem;
  }

  .subtext {
    font-size: 1.4rem;
  }
}

#programming {
  background-color: var(--color-allspice);
  height: max-content;
}

#art {
  background-color: var(--color-cool-crayon-blue);
  height: max-content;
}

#profile-image {
  width: 400px;
  height: 400px;
  /* border-radius: 50%; */
  /* border: 4px solid var(--vt-c-indigo); */
  /* object-fit: cover; */
}

#heart {
  font-size: 20rem;
  color: #FAA0A0;
}

#programming-content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-top: 48px;
  padding-bottom: 48px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1.7rem;
    justify-content: space-between;
    gap: 100px;
  }

  img {
    width: 240px;
    height: 240px;
    min-width: 240px;
    min-height: 240px;
    border-radius: 50%;
    border: 4px solid var(--vt-c-indigo);
    /* background-color: ghostwhite; */
    background-color: var(--vt-c-jungle-green);
    object-fit: cover;
  }
}

#art-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: max-content;
  padding-top: 96px;
  padding-bottom: 128px;
  font-size: 2.4rem;

  a {
    text-decoration: none;
  }

  p {
    margin-bottom: 24px;
  }

  #art-samples {
    width: 100%;
    display: block;
    align-self: center;
    columns: 24rem;
    gap: 1rem;

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

@media screen and (max-width: 1200px) {
  main {
    #introduction {
      img {
        width: 280px;
        height: 280px;
      }
    }

    #programming {
      img {
        width: 140px;
        height: 140px;
        min-width: 140px;
        min-height: 140px;
      }
    }
  }
}

@media screen and (max-width: 992px) {
  main {
    #introduction {
      img {
        width: 240px;
        height: 240px;
      }
    }

    #programming {
      img {
        width: 110px;
        height: 110px;
        min-width: 110px;
        min-height: 110px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  main {
    .info-section {
      min-height: max-content;
    }

    #introduction-content #socials {
      gap: 32px;
    }

    #socials a {
      font-size: 3.6rem;
    }

    #introduction {
      img {
        width: 200px;
        height: 200px;
      }
    }

    #programming {
      img {
        width: 110px;
        height: 110px;
      }
      div {
        gap: 40px;
      }
    }
  }
}

@media screen and (max-width: 576px) {
  main {
    #introduction {
      img {
        width: 140px;
        height: 140px;
      }
      .title {
        font-size: 2.6rem;
      }
      .subtext {
        font-size: 1.4rem;
      }
    }

    #programming {
      img {
        width: 80px;
        height: 80px;
        min-width: 80px;
        min-height: 80px;
      }
    }
  }
}
</style>
