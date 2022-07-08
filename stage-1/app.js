const vm = Vue.createApp({
    data() {
        return {
            firstName: 'Alex',
            secondName: 'Alex2',
            thirdName: '',
            url: 'https://google.com',
            raw_url: '<p><a href="https://google.com" target="_blank">Google</a></p>',
            age: 20
        }
    },
    methods: {
        increment() {
            this.age++
        },
        updateSecondName(msg, event) {
            console.log(msg)
            this.secondName = event.target.value
        },
        updateThirdName(event) {
            this.thirdName = event.target.value
        }
    },
    computed: {
        fullName() {
            console.log('fullName called (computed)!')
            return `${this.firstName} ${this.secondName}  ---> ${2 + 5}`
        },
    },
    watch: {
        age(newVal, oldVal) {
            console.log("Age changed!")
            setTimeout(() => {
                vm.age = 20
            }, 2000)
        }
    }
}).mount('#app')

setTimeout(() => {
    vm.firstName = 'Nike'
}, 5000)

// Vue.createApp({
//     data() {
//         return {
//             firstName: 'Alex'
//         }
//     }
// }).mount('.app2')
