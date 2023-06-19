<script setup lang="ts">
import { LoButton } from "leon-ui";

</script>

<template>
  <div :style="{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }">
    <lo-button type="primary" ghost>Primary</lo-button>
    <lo-button ghost>Default</lo-button>
    <lo-button type="dashed" ghost>Dashed</lo-button>
    <lo-button type="primary" danger ghost>Danger</lo-button>
  </div>
</template>

