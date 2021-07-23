function useInt(num) {
    let internalNumber = new Number(num);
    return new Proxy(internalNumber, {
        get(target, propKey, receiver) {
            console.log({ target, propKey });
            const origMethod = target[propKey];
            console.log(origMethod);
            return function(...args) {
                let result = origMethod.apply(internalNumber, args);
                return result;
            };
        },
    });
}
let num = useInt(1);
const div = document.getElementById('awesome');
div.textContent = num.toString();
num.toString() ++;
console.log(num);