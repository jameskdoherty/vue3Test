<template>
    <button @click="sendMessage()" class="btn btn-primary">Send Message</button>
    <div @click="showHide('tab1')" :class="{ isActive: isActive }">
        <p>This is a taba 1</p>
    </div>
    <div @click="showHide('tab2')" :class="{ isActive: !isActive }">
        <p>This is tab 2</p>
    </div>
</template>
<script>
import { MessageService } from '../../services/message-service';


export default {
    name: 'chart-table-tab',
    data() {
        return {
            isActive: true,
            // isTab1Active: true,
            // isTab2Active: false
        }
    },
    methods: {
        sendMessage() {
            // send message to subscribers via observable subject
            MessageService.sendMessage('Message from Home Page Component to App Component!');
        },
        showHide(tab) {
            console.log('show', tab)
            if (tab == 'tab1'){
                this.isActive = true
                } else {
                    this.isActive = false
                }
            MessageService.showHide(tab)
        },

    }
}
</script>
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.isActive {
  background-color: grey;
}</style>