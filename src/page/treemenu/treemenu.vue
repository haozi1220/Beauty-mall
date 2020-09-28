<template>
  <div>
    <div class="treeList">
      <div class="treeItem" v-for="(treeItem, index) in treeData" :key="index">
        <span>{{treeItem.title}}</span>
        <template v-if="treeItem.treeData && treeItem.treeData.length">
          <tree-menu :treeData="treeItem.treeData"></tree-menu>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tree-menu',
  props: {
    treeData: {
      type: Array,
      default: () => [{
        title: '一级菜单',
        treeData: [{
          title: '二级菜单',
          treeData: [{
            title: '三级菜单',
            treeData: [{
              title: '四级菜单'
            }]
          }]
        }]
      }, {
        title: '一级菜单',
        treeData: [{
          title: '二级菜单',
          treeData: [{
            title: '三级菜单'
          }]
        }]
      }]
    }
  }
}
</script>

<style>

</style>