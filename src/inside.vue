<template>
    <h1>{{title}}</h1>
    <div>
        Test text 123
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

export const title = ref('The title 1');
</script>