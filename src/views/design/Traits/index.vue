<!--  -->
<template>
  <a-layout-sider theme="light"
                  width="300"
                  :class="$style.traitsContainer">Traits</a-layout-sider>

</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'DesignTraits',

  components: {},

  data() {
    return {};
  },

  computed: {},

  watch: {},

  methods: {}
})
export default class Home extends Vue {}
</script>

<style lang="less" module>
.traitsContainer {
  width: 300px;
}
</style>