<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Builder } from "../stores/builder";
import { api } from "@/api";

import Lyrics from "../components/lyrics.vue";
import Chords from "../components/chords.vue";

// const letrasMusStrategy = new Lyrics(
// new GeneralScrapper(fetch),
// new LetrasMusStrategy()
// );

const textAreaRef = ref<any>(null);
const url = ref(
  "https://www.letras.mus.br/comunidade-catolica-shalom/1419784/"
);
const text = ref("");
const showResults = ref(false);

onMounted(() => {
  textAreaRef.value.focus();
});

const handleSubmit = async () => {
  const isUrlRegex = new RegExp(
    /^[a-zA-Z0-9-_]+[:./\\]+([a-zA-Z0-9 -_./:=&"'?%+@#$!])+$/
  );
  if (!isUrlRegex.test(url.value)) {
    alert("URL inválida");
    return;
  }
  const { data } = await api.get("/music", {
    params: {
      url: url.value,
    },
  });
  console.log(data);
  // Builder.load({
  //   ...data.value,
  //   lyrics: data.value.lyricsText,
  //   chordPlainText: data.value.chordsText,
  //   chords: data.value.chords,
  //   previewUrl: `http://www.youtube.com/embed/${data.value.videoId}`,
  // });
  showResults.value = true;
};
</script>

<template>
  <main class="home">
    <div class="h-full px-4">
      <div
        class="transition-all duration-300 flex flex-col justify-center items-center text-center"
        :class="{ 'h-[300px]': showResults, 'h-screen': !showResults }"
      >
        <h1 class="font-bold text-white mb-2">Insira uma URL</h1>
        <textarea
          ref="textAreaRef"
          class="p-2 text-black focus:outline-none rounded-md w-full max-w-lg"
          rows="2"
          type="text"
          v-model="url"
        />
        <button @click.prevent="handleSubmit" class="btn__submit">
          Processar
        </button>
      </div>
      <div v-if="showResults" class="mx-auto max-w-4xl mt-4 pb-12">
        <div class="w-full flex flex-wrap justify-center">
          <Lyrics class="px-2 w-full md:w-1/2" />
          <Chords class="px-2 w-full md:w-1/2 mt-6 md:mt-0" />
        </div>
        <div class="mt-6 mx-2">
          <h2 class="font-bold text-xl text-white mb-2">Vídeo/Audio</h2>
          <iframe
            class="mx-auto md:mx-0 max-w-md md:max-w-3xl"
            id="player"
            type="text/html"
            width="640"
            height="360"
            :src="Builder.data.previewUrl"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.home {
  min-height: 100vh;
  transition: 0.3s all;
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(100, 43, 115, 1) 0%,
    rgba(4, 0, 4, 1) 90%
  );
}

.btn__submit {
  @apply mt-4 block mx-auto p-2 px-4 text-white bg-[#b55acc] rounded-md;
  box-shadow: 0px 0px 6px #e478ff;
}

.btn__submit:active {
  transform: scale(0.98);
  transition: transform 0.1s ease 0s;
}
</style>
