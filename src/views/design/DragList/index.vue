<template>
  <a-layout-sider theme="light"
                  :class="$style.dragList">
    <a-row>
      <draggable :sort="false"
                 animation="300"
                 v-model="componentsList"
                 :options="{group:{name: 'design',pull:'clone'}}">
        <transition-group>
          <a-col v-for="element in componentsList"
                 :key="element.tagName"
                 :span="12">
            <a-button>{{element.name}}</a-button>
          </a-col>
        </transition-group>
      </draggable>
    </a-row>
  </a-layout-sider>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import draggable from 'vuedraggable';

@Component({
  name: 'DragList',

  components: { draggable },

  data() {
    return {
      componentsList: [
        { tagName: 'text_input', name: '文本框' },
        { tagName: 'number_input', name: '数字框' }
      ]
    };
  },

  computed: {},

  watch: {},

  methods: {}
})
export default class Home extends Vue {}
</script>

<style lang="less" module>
.dragList {
  padding-top: 10px;
}
</style>