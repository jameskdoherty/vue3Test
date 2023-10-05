<template>
    <figcaption>
        <strong>{{figuretitle}}.</strong> Difference in average scores of 15-year-old male and female students on the PISA {{figurebody}} literacy scale, by education system: 2022
    </figcaption>
</template>
<script>


export default {
    name: 'fig-caption-six',
    props: { figuretitle: String, figurebody: String }
}
</script>
      <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>