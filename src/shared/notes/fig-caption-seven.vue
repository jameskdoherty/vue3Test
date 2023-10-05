<template>
    <figcaption>
        <strong>{{figuretitle}}.</strong> Average scores of U.S. 15-year-old students on the PISA {{figurebody}} literacy scale, by race/ethnicity: 2022
    </figcaption>
</template>
<script>


export default {
    name: 'fig-caption-seven',
    props: { figuretitle: String, figurebody: String }
}
</script>
      <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>