<template>
  <a-layout-header :class="$style.designHeader">
    <a-button @click="handleSave">保存</a-button>
  </a-layout-header>
</template>

<script>
export default {
  name: 'DesignHeader',

  components: {},

  data() {
    return {};
  },

  computed: {},

  watch: {},

  methods: {
    handleSave() {
      console.log(this);
    }
  }
};
</script>

<style lang="less" module>
.designHeader {
  background: #fff;
  border-bottom: 1px solid #ccc;
}
</style>