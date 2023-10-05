<template>
    <div class="top-banner domain" :class="getSectionClass">
    <p>PISA 2022 {{ this.currentSection }} Literacy Results</p><i class="fa-solid fa-calculator"></i>
</div>
<section class="story__block">
    <img src="http://poseidon.research.ets.org/jhsu/pisa2022/inc/css/images/subject-home.png" />
   

    <div class="story__block__content">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum neque consequuntur est, tempora
            voluptatem et qui fuga beatae sunt temporibus rerum sint similique aspernatur at ratione.
            Eligendi voluptatem voluptates praesentium?</p>
        <blockquote>Eum neque consequuntur est, tempora voluptatem et qui fuga beatae sunt temporibus rerum
            sint similique aspernatur. Sint debitis, corrupti voluptate molestiae a numquam.</blockquote>
        <p>Beatae voluptate neque sunt ratione, velit illum? Excepturi fuga doloremque vitae nihil, cum
            totam officia natus repellat, ex odit dolorum modi magni. Eum neque consequuntur est, tempora
            voluptatem et qui fuga beatae sunt temporibus rerum sint similique aspernatur Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Sint debitis, corrupti voluptate molestiae a numquam est
            mollitia inventore ab dolorum consequatur officia cum quod deleniti, vitae nostrum nemo eius
            aliquam.</p>
    </div>
</section>
</template>

<script>
export default {
    name: 'Story-Block-Mathematics',
    data() {
        return {
            currentSection: ''
        }
    },
    computed:{
        getSectionClass() {
            return this.currentSection.toLocaleLowerCase()
        }
    },
    created() {
        

        if (this.$route.path.includes('/mathematics')) {
            this.currentSection = 'Mathematics'
        } else if (this.$route.path.includes('/reading')) {
            this.currentSection = 'Reading'
        } else if (this.$route.path.includes('/science')) {
            this.currentSection = 'Science'
        }
    }
}
</script>


<style scoped></style>