
<script setup lang="ts">
import { Button } from "ant-design-vue";
import { usePrefixCls } from "../composables/useUtils"
</script>

<template>
  <Button :prefix-cls="usePrefixCls('btn')">
    <slot v-for="name in Object.keys($slots)" :name="name"></slot>
  </Button>
</template>

<style lang="less"></style>

