Vue.createApp({
    data() {
        return {
            perspective: 100,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            red: 120,
            green: 120,
            blue: 120
        }
    },
    computed: {
        box() {
            return {
                transform: `
          perspective(${this.perspective}px)
          rotateX(${this.rotateX}deg)
          rotateY(${this.rotateY}deg)
          rotateZ(${this.rotateZ}deg)
        `
            }
        },
        rgb_colour() {
            return {
                'background-color': `rgb(${this.red}, ${this.green}, ${this.blue})`
            }
        }
    },
    methods: {
        reset() {
            this.perspective = 100
            this.rotateX = 0
            this.rotateY = 0
            this.rotateZ = 0
            this.red = 141
            this.green = 129
            this.blue = 243
        },
        copy() {
            const el = document.createElement('textarea')

            el.setAttribute('readonly', '')
            el.setAttribute("id", "Div1")
            el.style.position = 'absolute'
            el.style.left = '-9999px'
            console.log(this.box)
            el.innerHTML = `transform: ${this.box.transform}\n background-color: ${this.rgb_colour['background-color']}`

            document.body.appendChild(el)
            if (!navigator.clipboard) {
                console.log("Old :)")
                el.select()
                document.execCommand('copy')
            } else {
                var text_to_copy = document.getElementById("Div1").innerHTML;
                console.log(text_to_copy)
                navigator.clipboard.writeText(text_to_copy).then(
                    function () {
                        console.log("yeah!"); // success
                    })
                    .catch(
                        function () {
                            console.log("err"); // error
                        });
            }
            document.body.removeChild(el)
        }
    }
}).mount('#app')
