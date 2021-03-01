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
  components: { draggable }
})
export default class DropContainer extends Vue {
  private activeItem: string | null = '2';
  private viewList: Array<any> = [
    {
      id: '1',
      tagName: 'text_input',
      name: '文本框',
      traits: [
        { tagName: 'text_input', name: 'label', label: 'Label', value: '' }
      ]
    },
    { id: '2', tagName: 'text_input', name: '文本框' }
  ];

  //   计算属性
  get schema(): object {
    return this.$store.state.design.schema;
  }

  get formatViewList(): any {
    return this.viewList.map((item: any, index: number) => ({
      ...item,
      id: `${new Date().getTime()}_${index}`
    }));
  }

  handleItemSelect(item: any) {
    this.activeItem = item.id;
  }
}
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