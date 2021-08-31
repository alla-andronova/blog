<template>
    <div>
        <article>
        <h3>{{ title }}</h3>
        <p>
            {{ artist }}
            <span>{{ album }}</span>
            <span>{{ albumImageUrl }}</span>
        </p>
        </article>
    </div>
</template>

<script>
export default {
name: 'Song',
    props: {
        title: String,
        artist: String,
        genre: String,
        album: String,
        albumImageUrl: String,
    },
};
</script>

<style scoped></style>