@charset "UTF-8";
<template>
  <div class="content-wrapper app__content">
    <main class="main-content">
            <router-view />
        </main>
  </div>
</template>

<script>

export default {
    name: 'app',

};
</script>

<style lang="scss">

.content-wrapper {
	margin: 0 auto;
	padding-top: 80px;
	width: calc(min(95%, 102.4rem));
}

</style>
