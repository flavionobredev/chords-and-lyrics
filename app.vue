<script setup>
const textAreaRef = ref(null);
const url = ref("");
const text = ref("");

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
  const { data } = await useFetch("/api/lyrics", {
    params: {
      url: url.value,
    },
  });
  console.log(data.value);
  text.value = data.value.text;
};
</script>

<template>
  <div class="home">
    <div class="h-full flex justify-center items-center">
      <div class="text-center w-full">
        <h1 class="font-bold text-white mb-2">Insira uma URL</h1>
        <textarea
          ref="textAreaRef"
          class="p-2 focus:outline-none rounded-md w-1/2 max-w-md"
          rows="2"
          type="text"
          v-model="url"
        />
        <button @click.prevent="handleSubmit" class="btn__submit">
          Processar
        </button>

        <p
          class="text-center mx-auto text-white max-w-[400px]"
          v-html="text.replace('\n', '<br>')"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  height: 100svh;
  width: 100vw;
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
