const convertResult = document.querySelector("#convert-result")
const convertBtn = document.querySelector("#convert-btn")
const inputEl = document.querySelector("#input-el")
const unitSelect = document.querySelector("#unit-select")

unitSelect.addEventListener("change", function() {
    convertResult.innerHTML = ""
})

convertBtn.addEventListener("click", function() {
    if(inputEl.value === "") {
        convertResult.innerHTML = ""
    } else {
        const units = unitSelect.value
        let unitResult = inputEl.value
        let resultOfConvert = ""
        if(units === "ft-m") {
            unitResult *= 0.3048
            resultOfConvert = `${inputEl.value} ft = ${unitResult.toFixed(4)} m`
        } else if (units === "yd-m"){
            unitResult *= 0.9144
            resultOfConvert = `${inputEl.value} yd = ${unitResult.toFixed(4)} m`
        } else if (units === "in-m"){
            unitResult *= 0.0254
            resultOfConvert = `${inputEl.value} in = ${unitResult.toFixed(4)} m`
        } else if (units === "oz-g"){
            unitResult *= 28.3495231
            resultOfConvert = `${inputEl.value} oz = ${unitResult.toFixed(4)} g`
        } else if (units === "lb-kg"){
            unitResult *= 0.45359237
            resultOfConvert = `${inputEl.value} lb = ${unitResult.toFixed(4)} kg`
        }  else if (units === "m/s-km/h"){
            unitResult *= 3.6
            resultOfConvert = `${inputEl.value} m/s = ${unitResult.toFixed(1)} km/h`
        } else if (units === "mph-km/h"){
            unitResult *= 1.609344
            resultOfConvert = `${inputEl.value} mph = ${unitResult.toFixed(4)} km/h`
        } else if (units === "kn-km/h"){
            unitResult *= 1.852
            resultOfConvert = `${inputEl.value} kn = ${unitResult.toFixed(3)} km/h`
        }
        inputEl.value = ""
        convertResult.innerHTML = resultOfConvert
    }
})