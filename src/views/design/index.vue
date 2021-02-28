<template>
  <div :class="$style.designContainer">
    <a-layout>
      <!-- 顶部操作栏 -->
      <design-header />

      <a-layout>
        <!-- 组件 -->
        <drag-list />

        <!-- 画板 -->
        <drop-container />

        <!-- 属性 -->
        <design-traits />
      </a-layout>
    </a-layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DesignHeader from '@/views/design/Header/index.vue';
import DragList from '@/views/design/DragList/index.vue';
import DropContainer from '@/views/design/DropContainer/index.vue';
import DesignTraits from '@/views/design/Traits/index.vue';

@Component({
  name: 'Design',
  components: {
    DesignHeader,
    DragList,
    DropContainer,
    DesignTraits
  },
  data() {
    return {
      drag: false
    };
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: 'description',
        ghostClass: 'ghost'
      };
    }
  },
  methods: {
    onMove({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element;
      return !relatedElement;
    }
  }
})
export default class Home extends Vue {}
</script>

<style lang="less" module>
.designContainer {
}
</style>
