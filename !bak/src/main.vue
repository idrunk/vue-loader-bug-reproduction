<template>
    <header> {{ title }} </header>
    <details> {{ content }} </details>
    <a-date-picker v-model:value="value1" />
    <a-input v-model:value="value" placeholder="Basic usage" />
    <a-input-search :disabled="false" v-model:value="search">
        <template #enterButton>
            <a-button @click.capture="console.log(123)">修改</a-button>
        </template>
    </a-input-search>
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