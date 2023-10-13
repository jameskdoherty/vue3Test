<template>
 <component :is="elfragment"></component>
</template>
<script>


export default {
    name: 'fragment-container',
    props: {
        elfragment: {
            type: [String, Object],
            default: 'div'
        },
    },

    data() {
        return {
           
        }
    },
}
</script>
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>