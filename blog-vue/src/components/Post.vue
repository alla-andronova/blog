<template>
  <div>
    <article>
      <h3>{{ title }}</h3>
      <p>
        {{ text }}
        <span>{{ author }}</span>
        <span>{{ createdAt }}</span>
      </p>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    title: String,
    text: String,
    author: String,
    createdAt: String,
  },
};
</script>

<style scoped></style>
