<template>
    <header> {{ title }} </header>
    <details> {{ content }} </details>
    <Inside />
</template>

<script setup lang="ts">
import {ref, watch} from 'vue';

export {default as Inside} from './inside.vue';

export const title = '标题';
export const content = '描述2';
export const value1 = ref('1989-02-15');
export const search = ref('1989-02-15');
export const value = ref('2018-02-15');

export const console = window.console;

watch(value1, (v, v0) => console.log(v, v0));
watch(value, (v, v0) => console.log(v, v0));
</script>