let vm = Vue.createApp({
    data() {
        return {
            message: "Hello world"
        }
    },
    // Prefer to use in simple html...
    // template: `{{ message }}`,
    beforeCreate() {
        console.log('beforeCreate() function called!', this.message)
    },
    created() {
        console.log('created() function called!', this.message)
    },
    beforeMount() {
        console.log('beforeMount() function called!', this.$el)
    },
    mounted() {
        console.log('mounted() function called!', this.$el)
    },
    beforeUpdate() {
        console.log('beforeUpdate() function called!')
    },
    updated() {
        console.log('updated() function called!')
    },
    beforeUnmount() {
        console.log('beforeUnmount() function called!')
    },
    unmounted() {
        console.log('unmounted() function called!')
    }

})

vm.component('begin-hello', {
    template: `<h4>{{ message }}</h4>`,
    data() {
        return {
            message: 'Hello World from component!'
        }
    }
})

vm.mount('#app')

let vm2 = Vue.createApp({
    data() {
        return {
            message: "Hello world from vm2"
        }
    },
    render() {
        return Vue.h(
            'h1',
            this.message
        )
    }
})

vm2.mount('#app2')


// setTimeout(() => {
//     vm.mount('#app')
// }, 3000)
