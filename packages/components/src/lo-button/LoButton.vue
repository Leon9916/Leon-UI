
<script setup lang="ts">
import { Button } from "ant-design-vue";
</script>

<template>
  <Button>
    <slot v-for="name in Object.keys($slots)" :name="name"></slot>
  </Button>
</template>

<style lang="less"></style>

