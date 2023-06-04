<script setup lang="ts">
import { LoButton } from "Leon-ui";

</script>

<template>
  <div :style="{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }">
    <a-button type="primary" ghost>Primary</a-button>
    <a-button ghost>Default</a-button>
    <a-button type="dashed" ghost>Dashed</a-button>
    <a-button type="primary" danger ghost>Danger</a-button>
  </div>
</template>

