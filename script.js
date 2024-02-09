const convertResult = document.querySelector("#convert-result")
const convertBtn = document.querySelector("#convert-btn")
let inputEl = document.querySelector("#input-el")
let unitSelect = document.querySelector("#unit-select")

convertBtn.addEventListener("click", function() {
    let units = unitSelect.value
    if(inputEl.value === "") {
        convertResult.innerHTML = ""
    } else {
        if(units === "ft-m") {
            const unitResult = inputEl.value * 0.3048
            convertResult.innerHTML = `${inputEl.value} ft = ${unitResult.toFixed(4)} m`
            inputEl.value = ""
        } else if (units === "yd-m"){
            const unitResult = inputEl.value * 0.9144
            convertResult.innerHTML = `${inputEl.value} yd = ${unitResult.toFixed(4)} m`
            inputEl.value = ""
        } else if (units === "in-m"){
            const unitResult = inputEl.value * 0.0254
            convertResult.innerHTML = `${inputEl.value} lb = ${unitResult.toFixed(4)} kg`
            inputEl.value = ""
        } else if (units === "oz-g"){
            const unitResult = inputEl.value * 28.3495231
            convertResult.innerHTML = `${inputEl.value} oz = ${unitResult.toFixed(4)} g`
            inputEl.value = ""
        } else if (units === "lb-kg"){
            const unitResult = inputEl.value * 0.45359237
            convertResult.innerHTML = `${inputEl.value} lb = ${unitResult.toFixed(4)} kg`
            inputEl.value = ""
        }  else if (units === "m/s-km/h"){
            const unitResult = inputEl.value * 3.6
            convertResult.innerHTML = `${inputEl.value} m/s = ${unitResult.toFixed(1)} km/h`
            inputEl.value = ""
        } else if (units === "mph-km/h"){
            const unitResult = inputEl.value * 1.609344
            convertResult.innerHTML = `${inputEl.value} mph = ${unitResult.toFixed(4)} km/h`
            inputEl.value = ""
        } else if (units === "kn-km/h"){
            const unitResult = inputEl.value * 1.852
            convertResult.innerHTML = `${inputEl.value} kn = ${unitResult.toFixed(3)} km/h`
            inputEl.value = ""
        }
    }
})