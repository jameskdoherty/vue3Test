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
<style scoped>
.main-content .secondary-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;
    margin: 2em 0;
    padding: 0;
}

@media (max-width: 42em) {
    .main-content .secondary-nav {
        display: block;
    }
}

.main-content .secondary-nav li {
    background-color: var(--clr-highlight);
    flex-grow: 1;
    line-height: 1em;
    list-style-type: none;
    padding: 0;
    text-align: center;
    white-space: normal;
    width: calc(33.3333333333% - 1em);
}

@media (max-width: 42em) {
    .main-content .secondary-nav li {
        width: 100%;
    }
}

.main-content .secondary-nav li:last-of-type {
    margin-right: 0;
}

.main-content .secondary-nav li a.router-link-active {
    color: var(--clr-neutral);
    font-weight: 600;
}

.main-content .secondary-nav.mathematics li a.router-link-active {
    background-color: var(--clr-pisa-01);
}
.main-content .secondary-nav.reading li a.router-link-active {
    background-color: var(--clr-pisa-05);
}
.main-content .secondary-nav.science li a.router-link-active {
    background-color: var(--clr-pisa-06);
}

.main-content .secondary-nav li a.router-link-active {
    color: var(--clr-neutral);
}

.main-content .secondary-nav li a.router-link-active:hover {
    cursor: default;
    opacity: 1;
    transition: none;
}

.main-content .secondary-nav li a {
    color: var(--clr-dark);
    display: block;
    font-size: 1.4rem;
    padding: 2em;
    text-decoration: none;
    vertical-align: middle;
}

.main-content .secondary-nav li a:hover {
    cursor: pointer;
    transition: opacity 1s ease-in-out;
}</style>