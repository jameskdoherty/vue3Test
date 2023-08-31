import { Component, Vue, toNative } from 'vue-facing-decorator'
@Component
class MyComponent extends Vue {

    test(){
        console.log('text');
    }

}

export default toNative(MyComponent)