<template>
   <div v-if="isShown" >I am an element</div>
    <div v-else>I'm not rendered!</div>
</template>

<script>
import { MessageService } from '../services/message-service';
export default {
    name: 'Chart-Table-View',
    data () {
        return {
            messages: [],
            isShown: true
        };
    },
    created () {
      

        this.subscription = MessageService.getHidden().subscribe(isHidden => {
            if (isHidden) {
                console.log('from view',isHidden)
                if (isHidden == 'tab1'){
                    this.isShown = true;
                } else {
                    this.isShown = false
                }
            } 
        });
    },
    beforeUnmount () {
        this.subscription.unsubscribe();
    },
    components: {}
}
</script>


<style scoped></style>