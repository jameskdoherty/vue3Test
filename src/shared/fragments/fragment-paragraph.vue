<template>
    <p>Click on the column headers below to sort data by education system {{ blurbOne }}. The
        default display shows education systems ordered by the {{ blurbTwo }} When a user selects customized ordering, footnotes and special symbol notes will be retained as
        they were in the default view.</p>
</template>
<script>


export default {
    name: 'fragment-paragraph',
    props: {
        blurbOne: { type: String },
        blurbTwo: { type: String },
    },

    data() {
        return {

        }
    },
}
</script>
     <!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>