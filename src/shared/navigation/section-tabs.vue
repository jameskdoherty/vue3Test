<template>
   
    <ul class="secondary-nav" :class="getSectionClass">
        <li id="tab-one"><router-link :to="{ path: `/${pathName}/international-comparisons` }">International
                Comparisons<br> of
                Student Achievement</router-link></li>
        <li id="tab-two"><router-link :to="{ path: `/${pathName}/trends` }">Trends in Student<br>
                Achievement</router-link></li>
        <li id="tab-three"><router-link :to="{ path: `/${pathName}/achievement` }">Achievement by<br> Student
                Groups</router-link></li>
    </ul>
</template>
<script>


export default {
    name: 'section-tabs',
    data() {
        return {
            pathName: '',
        }
    },
    computed: {
        getSectionClass() {
            return this.pathName.toLocaleLowerCase()
        }
    },
    mounted() {

        if (this.$route.path.includes('/mathematics')) {
            this.pathName = 'mathematics'
        } else if (this.$route.path.includes('/reading')) {
            this.pathName = 'reading'
        } else if (this.$route.path.includes('/science')) {
            this.pathName = 'science'
        }
        console.log(this.pathName)
    }
}
</script>
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>