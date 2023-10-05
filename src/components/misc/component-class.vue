<template>
  <div></div>
</template>
<script lang="ts">
// DO NOT USE <script setup>

//vue options API.
/*
import { defineComponent } from "vue";
export default defineComponent({});
*/

//class component
import { Component, Vue, toNative } from "vue-facing-decorator";
@Component
class ComponentClass extends Vue {

  keyToSortBy = 'gap';
    sortDirection = -1;
    isOECDOnly = true;
    isOECDFirst = true;

  setKeyToSortBy(key) {
    console.log("TCL: FigureSortFilterStatus -> setKeyToSortBy -> key", key)
    if (key == this.keyToSortBy) {
      this.sortDirection = -this.sortDirection;
      return;
    } else {
      this.keyToSortBy = key;
      this.sortDirection = (this.keyToSortBy == 'country') ? 1 : -1
    }
  }

}
export default toNative(ComponentClass)
</script>
<style>
</style>

