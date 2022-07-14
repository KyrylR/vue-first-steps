import {computed, isReactive, isRef, reactive, ref} from 'vue'

export const useNumber = () => {
    let num = ref(0);
    const accounts = reactive({
        check: 321,
        foo: 11,
    });

    console.log(isRef(num))
    console.log(isReactive(accounts))

    function increment() {
        num.value++;
    }

    const double = computed(() => {
        return num.value * 2;
    });

    return {
        num,
        increment,
        double
    }
}
