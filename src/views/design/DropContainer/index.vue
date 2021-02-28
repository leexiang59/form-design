<template>
  <a-layout-content :class="$style.dropContainer">
    <draggable v-model="viewList"
               group="design"
               :class="$style.dropContainerDraggable"
               dragClass="dragClass"
               ghostClass="ghostClass"
               chosenClass="chosenClass">
      <transition-group :class="$style.dropContainerGroup"
                        tag="div">
        <div v-for="item in formatViewList"
             :key="item.id"
             :class="{[$style.item]:true,[$style.activeItem]:item.id === activeItem}"
             @click="handleItemSelect(item)">
          <a-input v-if="item.tagName==='text_input'" />
        </div>
      </transition-group>
    </draggable>
  </a-layout-content>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import draggable from 'vuedraggable';

@Component({
  name: 'DropContainer',

  components: { draggable },

  data() {
    return {
      activeItem: null,
      viewList: [
        {
          id: 1,
          tagName: 'text_input',
          name: '文本框',
          traits: [
            { tagName: 'text_input', name: 'label', label: 'Label', value: '' }
          ]
        },
        { id: 2, tagName: 'text_input', name: '文本框' }
      ]
    };
  },

  computed: {
    formatViewList() {
      return this.$data.viewList.map((item: any, index: number) => ({
        ...item,
        id: `${new Date().getTime()}_${index}`
      }));
    }
  },

  watch: {},

  methods: {
    handleItemSelect(item) {
      this.$data.activeItem = item.id;
    }
  }
})
export default class Home extends Vue {}
</script>

<style lang="less" module>
.dropContainer {
  width: 100%;
  min-height: 500px;
  .dropContainerGroup {
    width: 100%;
    min-height: 40px;
  }
  .item {
    padding: 10px;
  }
  .activeItem {
    background: #79b8ff;
  }
}
</style>