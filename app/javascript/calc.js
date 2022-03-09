window.addEventListener('load', () => {
  const tenthousandInput = document.getElementById("ten-thousand");
  tenthousandInput.addEventListener("input", () => {
    const tenthousandValue = tenthousandInput.value;
    const tenthousandtotalValue = Math.floor(tenthousandValue*10000)
    const addTaxDom = document.getElementById("ten-thousand-total");
    addTaxDom.innerHTML = tenthousandtotalValue

  const fivethousandInput = document.getElementById("five-thousand");
  fivethousandInput.addEventListener("input", () => {
    const fivethousandValue = fivethousandInput.value;
    const fivethousandtotalValue = Math.floor(fivethousandValue*5000)
    const addTaxDom = document.getElementById("five-thousand-total");
    addTaxDom.innerHTML = fivethousandtotalValue

  const onethousandInput = document.getElementById("one-thousand");
  onethousandInput.addEventListener("input", () => {
    const onethousandValue = onethousandInput.value;
    const onethousandtotalValue = Math.floor(onethousandValue*1000)
    const addTaxDom = document.getElementById("one-thousand-total");
    addTaxDom.innerHTML = onethousandtotalValue

  const fivehundredInput = document.getElementById("five-hundred");
  fivehundredInput.addEventListener("input", () => {
    const fivehundredValue = fivehundredInput.value;
    const fivehundredtotalValue = Math.floor(fivehundredValue*500)
    const addTaxDom = document.getElementById("five-hundred-total");
    addTaxDom.innerHTML = fivehundredtotalValue

  const onehundredInput = document.getElementById("one-hundred");
  onehundredInput.addEventListener("input", () => {
    const onehundredValue = onehundredInput.value;
    const onehundredtotalValue = Math.floor(onehundredValue*100)
    const addTaxDom = document.getElementById("one-hundred-total");
    addTaxDom.innerHTML = onehundredtotalValue

  const fiftyInput = document.getElementById("fifty");
  fiftyInput.addEventListener("input", () => {
    const fiftyValue = fiftyInput.value;
    const fiftytotalValue = Math.floor(fiftyValue*50)
    const addTaxDom = document.getElementById("fifty-total");
    addTaxDom.innerHTML = fiftytotalValue

  const tenInput = document.getElementById("ten");
  tenInput.addEventListener("input", () => {
    const tenValue = tenInput.value;
    const tentotalValue = Math.floor(tenValue*10)
    const addTaxDom = document.getElementById("ten-total");
    addTaxDom.innerHTML = tentotalValue

  const fiveInput = document.getElementById("five");
  fiveInput.addEventListener("input", () => {
    const fiveValue = fiveInput.value;
    const fivetotalValue = Math.floor(fiveValue*5)
    const addTaxDom = document.getElementById("five-total");
    addTaxDom.innerHTML = fivetotalValue

  const oneInput = document.getElementById("one");
  oneInput.addEventListener("input", () => {
    const oneValue = oneInput.value;
    const onetotalValue = Math.floor(oneValue*1)
    const addTaxDom = document.getElementById("one-total");
    addTaxDom.innerHTML = onetotalValue

  const cashInput = document.getElementById("cash-total");
  cashInput.addEventListener("input", () => {
    const cashValue = cashInput.value;
    const totalValue = Math.floor(tenthousandtotalValue+fivethousandtotalValue+onethousandtotalValue+fivehundredtotalValue+onehundredtotalValue+fiftytotalValue+tentotalValue+fivetotalValue+onetotalValue)
    const addTaxDom = document.getElementById("gap");
    addTaxDom.innerHTML = Math.floor(cashValue-totalValue)
  })
})
})
})
})
})
})
})
})
})
});
