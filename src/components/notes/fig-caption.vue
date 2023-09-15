<template>
    <figcaption>
        <strong>{{figuretitle}}.</strong> Average scores of 15-year-old students on the PISA
        {{figurebody}} literacy scale, by national quarters of the PISA index of economic,
        social, and cultural status (ESCS): 2022. 
    </figcaption>
</template>
<script>


export default {
    name: 'fig-caption',
    props: { figuretitle: String, figurebody: String }
}
</script>
      <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>