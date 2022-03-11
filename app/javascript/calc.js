window.addEventListener('load', () => {

  const tenThousandInput = document.getElementById("ten-thousand");
  const fiveThousandInput = document.getElementById("five-thousand");
  const oneThousandInput = document.getElementById("one-thousand");
  const fiveHundredInput = document.getElementById("five-hundred");
  const oneHundredInput = document.getElementById("one-hundred");
  const fiftyInput = document.getElementById("fifty");
  const tenInput = document.getElementById("ten");
  const fiveInput = document.getElementById("five");
  const oneInput = document.getElementById("one");
  const cashTotalInput = document.getElementById("cash-total");


  tenThousandInput.addEventListener("input", () => {
    const tenThousandValue = tenThousandInput.value;
    const tenThousandTotalValue = Math.floor(tenThousandValue*10000)
    const tenThousandTotalDom = document.getElementById("ten-thousand-total");
    tenThousandTotalDom.innerHTML = tenThousandTotalValue

  fiveThousandInput.addEventListener("input", () => {
    const fiveThousandValue = fiveThousandInput.value;
    const fiveThousandTotalValue = Math.floor(fiveThousandValue*5000)
    const fiveThousandTotalDom = document.getElementById("five-thousand-total");
    fiveThousandTotalDom.innerHTML = fiveThousandTotalValue

  oneThousandInput.addEventListener("input", () => {
    const oneThousandValue = oneThousandInput.value;
    const oneThousandTotalValue = Math.floor(oneThousandValue*1000)
    const oneThousandTotalDom = document.getElementById("one-thousand-total");
    oneThousandTotalDom.innerHTML = oneThousandTotalValue

  fiveHundredInput.addEventListener("input", () => {
    const fiveHundredValue = fiveHundredInput.value;
    const fiveHundredTotalValue = Math.floor(fiveHundredValue*500)
    const fiveHundredTotalDom = document.getElementById("five-hundred-total");
    fiveHundredTotalDom.innerHTML = fiveHundredTotalValue

  oneHundredInput.addEventListener("input", () => {
    const oneHundredValue = oneHundredInput.value;
    const oneHundredTotalValue = Math.floor(oneHundredValue*100)
    const oneHundredTotalDom = document.getElementById("one-hundred-total");
    oneHundredTotalDom.innerHTML = oneHundredTotalValue

  fiftyInput.addEventListener("input", () => {
    const fiftyValue = fiftyInput.value;
    const fiftyTotalValue = Math.floor(fiftyValue*50)
    const fiftyTotalDom = document.getElementById("fifty-total");
    fiftyTotalDom.innerHTML = fiftyTotalValue

  tenInput.addEventListener("input", () => {
    const tenValue = tenInput.value;
    const tenTotalValue = Math.floor(tenValue*10)
    const tenTotalDom = document.getElementById("ten-total");
    tenTotalDom.innerHTML = tenTotalValue

  fiveInput.addEventListener("input", () => {
    const fiveValue = fiveInput.value;
    const fiveTotalValue = Math.floor(fiveValue*5)
    const fiveTotalDom = document.getElementById("five-total");
    fiveTotalDom.innerHTML = fiveTotalValue


  oneInput.addEventListener("input", () => {
    const oneValue = oneInput.value;                                   //入力した数値を取得
    const oneTotalValue = Math.floor(oneValue*1)                       //入力した数値に金額をかける
    const oneTotalDom = document.getElementById("one-total");          //出力箇所を取得
    oneTotalDom.innerHTML = oneTotalValue                              //現金チェック欄へ出力



    const cashValue = cashTotalInput.value;
    const totalValue = Math.floor(tenThousandTotalValue+fiveThousandTotalValue+oneThousandTotalValue+fiveHundredTotalValue+oneHundredTotalValue+fiftyTotalValue+tenTotalValue+fiveTotalValue+oneTotalValue)
    const gapDom = document.getElementById("gap");                   //レジギャップ出力箇所取得
    gapDom.innerHTML = Math.floor(cashValue-totalValue)              //レジギャップ欄へ出力

    cashTotalInput.addEventListener("input", () => {

      // 1円釣銭額計算
      const oneCalc1Value = Math.floor(oneValue / 10 )                   //端数捨てる為に一度10で割る
      const oneCalc2Value = Math.floor(oneCalc1Value * 10)               //端数消えたので10掛ける
      const oneCalc3Value = Math.floor(oneCalc2Value - 30)               //ドロアへ残す分引く
      const oneTakeDom = document.getElementById("one-take");            //釣銭用に取る枚数の出力箇所を取得
      oneTakeDom.innerHTML = oneCalc3Value                               //釣銭用に取る枚数を出力
      const oneConfirmValue = Math.floor(oneCalc3Value * 1)              //釣銭用に取る枚数*金額
      const oneTakeTotalDom = document.getElementById("one-take-total"); //釣銭用に取る金額の出力箇所を取得
      oneTakeTotalDom.innerHTML = oneConfirmValue                        //釣銭用に取る金額を出力

      // ５円釣銭額計算
      const fiveCalc1Value = Math.floor(fiveValue / 10 )            
      const fiveCalc2Value = Math.floor(fiveCalc1Value * 10)  
      const fiveCalc3Value = Math.floor(fiveCalc2Value - 10)
      const fiveTakeDom = document.getElementById("five-take");
      fiveTakeDom.innerHTML = fiveCalc3Value
      const fiveConfirmValue = Math.floor(fiveCalc3Value * 5)
      const fiveTakeTotalDom = document.getElementById("five-take-total");
      fiveTakeTotalDom.innerHTML = fiveConfirmValue

      //10円釣銭額計算
      const tenCalc1Value = Math.floor(tenValue - 30)                     //ドロアに残す額を引く
      const tenCalc2Value = Math.floor(tenCalc1Value * 10)   //枚数を金額に直す
      const tenCalc3Value = Math.floor(tenCalc2Value + fiveConfirmValue + oneConfirmValue)    //他の釣銭額と足す
      const tenCalc4Value = Math.floor(tenCalc3Value / 100)                //そして100で割って端数消す
      const tenCalc5Value = Math.floor(tenCalc4Value * 100)               //さらに100を掛けて端数消えた状態で単位を戻す
      const tenConfirmValue = Math.floor(tenCalc5Value - fiveConfirmValue - oneConfirmValue)   //10円玉だけの金額に直す
      const tenCalc6Value = Math.floor(tenConfirmValue / 10)               //10円玉の枚数を算出
      const tenTakeDom = document.getElementById("ten-take");
      tenTakeDom.innerHTML = tenCalc6Value
      const tenTakeTotalDom = document.getElementById("ten-take-total");
      tenTakeTotalDom.innerHTML = tenConfirmValue

      //50円釣銭額計算
      const fiftyCalc1Value = Math.floor(fiftyValue - 10)                     //ドロアに残す額を引く
      const fiftyCalc2Value = Math.floor(fiftyCalc1Value * 50)   //枚数を金額に直す
      const fiftyCalc3Value = Math.floor(fiftyCalc2Value + tenConfirmValue + fiveConfirmValue + oneConfirmValue)    //他の釣銭額と足す
      const fiftyCalc4Value = Math.floor(fiftyCalc3Value / 100)                //そして100で割って端数消す
      const fiftyCalc5Value = Math.floor(fiftyCalc4Value * 100)               //さらに100を掛けて端数消えた状態で単位を戻す
      const fiftyConfirmValue = Math.floor(fiftyCalc5Value - tenConfirmValue - fiveConfirmValue - oneConfirmValue)   //50円玉だけの金額に直す
      const fiftyCalc6Value = Math.floor(fiftyConfirmValue / 50)               //50円玉の枚数を算出
      const fiftyTakeDom = document.getElementById("fifty-take");
      fiftyTakeDom.innerHTML = fiftyCalc6Value
      const fiftyTakeTotalDom = document.getElementById("fifty-take-total");
      fiftyTakeTotalDom.innerHTML = fiftyConfirmValue

      //100円釣銭額計算
      const oneHundredCalc1Value = Math.floor(oneHundredValue - 30)                     //ドロアに残す額を引く
      const oneHundredCalc2Value = Math.floor(oneHundredCalc1Value * 100)   //枚数を金額に直す
      const oneHundredCalc3Value = Math.floor(oneHundredCalc2Value + fiftyConfirmValue + tenConfirmValue + fiveConfirmValue + oneConfirmValue)    //他の釣銭額と足す
      const oneHundredCalc4Value = Math.floor(oneHundredCalc3Value / 1000)                //そして100で割って端数消す
      const oneHundredCalc5Value = Math.floor(oneHundredCalc4Value * 1000)               //さらに100を掛けて端数消えた状態で単位を戻す
      const oneHundredConfirmValue = Math.floor(oneHundredCalc5Value - fiftyConfirmValue - tenConfirmValue - fiveConfirmValue - oneConfirmValue)   //100円玉だけの金額に直す
      const oneHundredCalc6Value = Math.floor(oneHundredConfirmValue / 100)               //100円玉の枚数を算出
      const oneHundredTakeDom = document.getElementById("one-hundred-take");
      oneHundredTakeDom.innerHTML = oneHundredCalc6Value
      const oneHundredTakeTotalDom = document.getElementById("one-hundred-take-total");
      oneHundredTakeTotalDom.innerHTML = oneHundredConfirmValue

      //500円釣銭額計算
      const fiveHundredCalc1Value = Math.floor(fiveHundredValue - 10)                     //ドロアに残す額を引く
      const fiveHundredCalc2Value = Math.floor(fiveHundredCalc1Value * 500)   //枚数を金額に直す
      const fiveHundredCalc3Value = Math.floor(fiveHundredCalc2Value + oneHundredConfirmValue + fiftyConfirmValue + tenConfirmValue + fiveConfirmValue + oneConfirmValue)    //他の釣銭額と足す
      const fiveHundredCalc4Value = Math.floor(fiveHundredCalc3Value / 1000)                //そして100で割って端数消す
      const fiveHundredCalc5Value = Math.floor(fiveHundredCalc4Value * 1000)               //さらに100を掛けて端数消えた状態で単位を戻す
      const fiveHundredConfirmValue = Math.floor(fiveHundredCalc5Value - oneHundredConfirmValue - fiftyConfirmValue - tenConfirmValue - fiveConfirmValue - oneConfirmValue)   //500円玉だけの金額に直す
      const fiveHundredCalc6Value = Math.floor(fiveHundredConfirmValue / 500)               //500円玉の枚数を算出
      const fiveHundredTakeDom = document.getElementById("five-hundred-take");
      fiveHundredTakeDom.innerHTML = fiveHundredCalc6Value
      const fiveHundredTakeTotalDom = document.getElementById("five-hundred-take-total");
      fiveHundredTakeTotalDom.innerHTML = fiveHundredConfirmValue

      const amountInput = document.getElementById("amount");
      const amountValue = amountInput.value;

      //1000円釣銭額計算
      const oneThousandCalc1Value = Math.floor(oneThousandValue - 30)                     //ドロアに残す額を引く
      const oneThousandCalc2Value = Math.floor(oneThousandCalc1Value * 1000)   //枚数を金額に直す
      const oneThousandCalc3Value = Math.floor(oneThousandCalc2Value + fiveHundredConfirmValue + oneHundredConfirmValue + fiftyConfirmValue + tenConfirmValue + fiveConfirmValue + oneConfirmValue)    //他の釣銭額と足す
      const oneThousandCalc4Value = Math.floor(oneThousandCalc3Value / 10000)                //そして100で割って端数消す
      const oneThousandCalc5Value = Math.floor(oneThousandCalc4Value * 10000)               //さらに100を掛けて端数消えた状態で単位を戻す
      const oneThousandTakeDom = document.getElementById("one-thousand-take");
      const oneThousandTakeTotalDom = document.getElementById("one-thousand-take-total");
      if (oneThousandCalc5Value <= amountValue - 1) {//１円〜1千円込みで120000円以下の場合
        const oneThousandConfirmValue = Math.floor(oneThousandCalc5Value - fiveHundredConfirmValue - oneHundredConfirmValue - fiftyConfirmValue - tenConfirmValue - fiveConfirmValue - oneConfirmValue)   //1000円札だけの金額に直す
        const oneThousandCalc6Value = Math.floor(oneThousandConfirmValue / 1000)               //1000円札の枚数を算出
        oneThousandTakeDom.innerHTML = oneThousandCalc6Value
        oneThousandTakeTotalDom.innerHTML = oneThousandConfirmValue

        //5000円釣銭額計算
        const fiveThousandCalc1Value = Math.floor(fiveThousandValue - 2)                     //ドロアに残す額を引く
        const fiveThousandCalc2Value = Math.floor(fiveThousandCalc1Value * 5000)   //枚数を金額に直す
        const fiveThousandCalc3Value = Math.floor( fiveThousandCalc2Value + oneThousandConfirmValue + fiveHundredConfirmValue + oneHundredConfirmValue + fiftyConfirmValue + tenConfirmValue + fiveConfirmValue + oneConfirmValue)    //他の釣銭額と足す
        const fiveThousandTakeDom = document.getElementById("five-thousand-take");
        const fiveThousandTakeTotalDom = document.getElementById("five-thousand-take-total");

        if (fiveThousandCalc3Value <= amountValue ) {                     //１円〜５千円込みで120000円以下の場合
          const fiveThousandConfirmValue = Math.floor( fiveThousandCalc3Value - oneThousandConfirmValue - fiveHundredConfirmValue - oneHundredConfirmValue - fiftyConfirmValue - tenConfirmValue - fiveConfirmValue - oneConfirmValue)
          const fiveThousandCalc5Value = Math.floor(fiveThousandConfirmValue / 5000)   //120000円にするために必要な5千円の枚数を計算
          fiveThousandTakeDom.innerHTML = fiveThousandCalc5Value                     //5千円の枚数を出力
          fiveThousandTakeTotalDom.innerHTML = fiveThousandConfirmValue              //5千円の金額を出力
          //10000円釣銭額計算

          const tenThousandTakeDom = document.getElementById("ten-thousand-take");
          const tenThousandTakeTotalDom = document.getElementById("ten-thousand-take-total");
          const takeTotalDom = document.getElementById("take-total");      //釣銭合計出力欄を取得
          const tenThousandCalc1Value = Math.floor(fiveThousandConfirmValue + oneThousandConfirmValue + fiveHundredConfirmValue + oneHundredConfirmValue + fiftyConfirmValue + tenConfirmValue + fiveConfirmValue + oneConfirmValue)    //他の釣銭額と足す
          const tenThousandConfirmValue = Math.floor(amountValue - tenThousandCalc1Value)
          if (tenThousandInput == 0 || tenThousandConfirmValue <= 0) {
            tenThousandTakeDom.innerHTML = 0
            tenThousandTakeTotalDom.innerHTML = 0
            //釣銭合計計算
            const takeTotalValue = Math.floor(fiveThousandConfirmValue + oneThousandConfirmValue + fiveHundredConfirmValue + oneHundredConfirmValue + fiftyConfirmValue + tenConfirmValue + fiveConfirmValue + oneConfirmValue)
                                                                           //釣銭合計を計算
            takeTotalDom.innerHTML = takeTotalValue                          //釣銭合計を表示1

          } else {
            const tenThousandCalc2Value = Math.floor(tenThousandConfirmValue / 10000)
            tenThousandTakeDom.innerHTML = tenThousandCalc2Value
            tenThousandTakeTotalDom.innerHTML = tenThousandConfirmValue
            //釣銭合計計算
            const takeTotal2Value = Math.floor(tenThousandConfirmValue + fiveThousandConfirmValue + oneThousandConfirmValue + fiveHundredConfirmValue + oneHundredConfirmValue + fiftyConfirmValue + tenConfirmValue + fiveConfirmValue + oneConfirmValue)
                                                                       //釣銭合計を計算
            takeTotalDom.innerHTML = takeTotal2Value                          //釣銭合計を表示
          }

        }else {//１円〜５千円込みで120000円以上の場合
          const fiveThousandCalc6Value = Math.floor(fiveThousandCalc3Value - fiveThousandCalc2Value) //1万円と5千円以外の釣銭額
          const fiveThousandConfirm2Value = Math.floor(amountValue - fiveThousandCalc6Value)            //釣銭設定額引く1万円と5千円以外の釣銭額で5千円を入れる金額計算
          const fiveThousandCalc7Value = Math.floor(fiveThousandConfirm2Value / 5000)                //5千円の枚数計算
          fiveThousandTakeDom.innerHTML = fiveThousandCalc7Value                     //5千円の枚数を出力
          fiveThousandTakeTotalDom.innerHTML = fiveThousandConfirm2Value              //5千円の金額を出力
              //10000円釣銭額計算

          const tenThousandTakeDom = document.getElementById("ten-thousand-take");
          const tenThousandTakeTotalDom = document.getElementById("ten-thousand-take-total");
          const takeTotalDom = document.getElementById("take-total");      //釣銭合計出力欄を取得
          const tenThousandCalc1Value = Math.floor(fiveThousandConfirm2Value + oneThousandConfirmValue + fiveHundredConfirmValue + oneHundredConfirmValue + fiftyConfirmValue + tenConfirmValue + fiveConfirmValue + oneConfirmValue)    //他の釣銭額と足す
          const tenThousandConfirmValue = Math.floor(amountValue - tenThousandCalc1Value)
          if (tenThousandInput == 0 || tenThousandConfirmValue <= 0) {
            tenThousandTakeDom.innerHTML = 0
            tenThousandTakeTotalDom.innerHTML = 0
            //釣銭合計計算
            const takeTotalValue = Math.floor(fiveThousandConfirm2Value + oneThousandConfirmValue + fiveHundredConfirmValue + oneHundredConfirmValue + fiftyConfirmValue + tenConfirmValue + fiveConfirmValue + oneConfirmValue)
                                                                         //釣銭合計を計算
            takeTotalDom.innerHTML = takeTotalValue                          //釣銭合計を表示1

          } else {
            const tenThousandCalc2Value = Math.floor(tenThousandConfirmValue / 10000)
            tenThousandTakeDom.innerHTML = tenThousandCalc2Value
            tenThousandTakeTotalDom.innerHTML = tenThousandConfirmValue
            //釣銭合計計算
            const takeTotal2Value = Math.floor(tenThousandConfirmValue + fiveThousandConfirm2Value + oneThousandConfirmValue + fiveHundredConfirmValue + oneHundredConfirmValue + fiftyConfirmValue + tenConfirmValue + fiveConfirmValue + oneConfirmValue)
                                                                       //釣銭合計を計算
            takeTotalDom.innerHTML = takeTotal2Value                          //釣銭合計を取得
          }
        }

      } else {  //１円〜1千円込みで120000円以上の場合
        const oneThousandCalc6Value = Math.floor(oneThousandCalc3Value - oneThousandCalc2Value) //1万円と５千円と千円以外のの金額
        const oneThousandConfirm2Value = Math.floor(amountValue -10000 - oneThousandCalc6Value) //5千円入れる余白残した千円を取る金額
        const oneThousandCalc7Value = Math.floor(oneThousandConfirm2Value / 1000)               //千円の枚数
        oneThousandTakeDom.innerHTML = oneThousandCalc7Value
        oneThousandTakeTotalDom.innerHTML = oneThousandConfirm2Value

                //5000円釣銭額計算
        const fiveThousandCalc1Value = Math.floor(fiveThousandValue - 2)                     //ドロアに残す額を引く
        const fiveThousandCalc2Value = Math.floor(fiveThousandCalc1Value * 5000)   //枚数を金額に直す
        const fiveThousandCalc3Value = Math.floor( fiveThousandCalc2Value + oneThousandConfirm2Value + fiveHundredConfirmValue + oneHundredConfirmValue + fiftyConfirmValue + tenConfirmValue + fiveConfirmValue + oneConfirmValue)    //他の釣銭額と足す
        const fiveThousandTakeDom = document.getElementById("five-thousand-take");
        const fiveThousandTakeTotalDom = document.getElementById("five-thousand-take-total");

        if (fiveThousandCalc3Value <= amountValue) {                     //１円〜５千円込みで120000円以下の場合
          const fiveThousandConfirmValue = Math.floor( fiveThousandCalc3Value - oneThousandConfirm2Value - fiveHundredConfirmValue - oneHundredConfirmValue - fiftyConfirmValue - tenConfirmValue - fiveConfirmValue - oneConfirmValue)
          const fiveThousandCalc5Value = Math.floor(fiveThousandConfirmValue / 5000)   //120000円にするために必要な5千円の枚数を計算
          fiveThousandTakeDom.innerHTML = fiveThousandCalc5Value                     //5千円の枚数を出力
          fiveThousandTakeTotalDom.innerHTML = fiveThousandConfirmValue              //5千円の金額を出力
          //10000円釣銭額計算

          const tenThousandTakeDom = document.getElementById("ten-thousand-take");
          const tenThousandTakeTotalDom = document.getElementById("ten-thousand-take-total");
          const takeTotalDom = document.getElementById("take-total");      //釣銭合計出力欄を取得
          const tenThousandCalc1Value = Math.floor(fiveThousandConfirmValue + oneThousandConfirm2Value + fiveHundredConfirmValue + oneHundredConfirmValue + fiftyConfirmValue + tenConfirmValue + fiveConfirmValue + oneConfirmValue)    //他の釣銭額と足す
          const tenThousandConfirmValue = Math.floor(amountValue - tenThousandCalc1Value)
          if (tenThousandInput == 0 || tenThousandConfirmValue <= 0) {
            tenThousandTakeDom.innerHTML = 0
            tenThousandTakeTotalDom.innerHTML = 0
            //釣銭合計計算
            const takeTotalValue = Math.floor(fiveThousandConfirmValue + oneThousandConfirm2Value + fiveHundredConfirmValue + oneHundredConfirmValue + fiftyConfirmValue + tenConfirmValue + fiveConfirmValue + oneConfirmValue)
                                                                           //釣銭合計を計算
            takeTotalDom.innerHTML = takeTotalValue                          //釣銭合計を表示1

          } else {
            const tenThousandCalc2Value = Math.floor(tenThousandConfirmValue / 10000)
            tenThousandTakeDom.innerHTML = tenThousandCalc2Value
            tenThousandTakeTotalDom.innerHTML = tenThousandConfirmValue
            //釣銭合計計算
            const takeTotal2Value = Math.floor(tenThousandConfirmValue + fiveThousandConfirmValue + oneThousandConfirm2Value + fiveHundredConfirmValue + oneHundredConfirmValue + fiftyConfirmValue + tenConfirmValue + fiveConfirmValue + oneConfirmValue)
                                                                       //釣銭合計を計算
            takeTotalDom.innerHTML = takeTotal2Value                          //釣銭合計を表示 //ここやで
          }
        }else {//１円〜５千円込みで120000円以上の場合
          const fiveThousandCalc6Value = Math.floor(fiveThousandCalc3Value - fiveThousandCalc2Value) //1万円と5千円以外の釣銭額
          const fiveThousandConfirm2Value = Math.floor(amountValue - fiveThousandCalc6Value)            //釣銭設定額引く1万円と5千円以外の釣銭額で5千円を入れる金額計算
          const fiveThousandCalc7Value = Math.floor(fiveThousandConfirm2Value / 5000)                //5千円の枚数計算
          fiveThousandTakeDom.innerHTML = fiveThousandCalc7Value                     //5千円の枚数を出力
          fiveThousandTakeTotalDom.innerHTML = fiveThousandConfirm2Value              //5千円の金額を出力
              //10000円釣銭額計算

          const tenThousandTakeDom = document.getElementById("ten-thousand-take");
          const tenThousandTakeTotalDom = document.getElementById("ten-thousand-take-total");
          const takeTotalDom = document.getElementById("take-total");      //釣銭合計出力欄を取得
          const tenThousandCalc1Value = Math.floor(fiveThousandConfirm2Value + oneThousandConfirm2Value + fiveHundredConfirmValue + oneHundredConfirmValue + fiftyConfirmValue + tenConfirmValue + fiveConfirmValue + oneConfirmValue)    //他の釣銭額と足す
          const tenThousandConfirmValue = Math.floor(amountValue - tenThousandCalc1Value)
          if (tenThousandInput == 0 || tenThousandConfirmValue <= 0) {
            tenThousandTakeDom.innerHTML = 0
            tenThousandTakeTotalDom.innerHTML = 0
            //釣銭合計計算
            const takeTotalValue = Math.floor(fiveThousandConfirm2Value + oneThousandConfirm2Value + fiveHundredConfirmValue + oneHundredConfirmValue + fiftyConfirmValue + tenConfirmValue + fiveConfirmValue + oneConfirmValue)
                                                                         //釣銭合計を計算
            takeTotalDom.innerHTML = takeTotalValue                          //釣銭合計を表示1

          } else {
            const tenThousandCalc2Value = Math.floor(tenThousandConfirmValue / 10000)
            tenThousandTakeDom.innerHTML = tenThousandCalc2Value
            tenThousandTakeTotalDom.innerHTML = tenThousandConfirmValue
            //釣銭合計計算
            const takeTotal2Value = Math.floor(tenThousandConfirmValue + fiveThousandConfirm2Value + oneThousandConfirm2Value + fiveHundredConfirmValue + oneHundredConfirmValue + fiftyConfirmValue + tenConfirmValue + fiveConfirmValue + oneConfirmValue)
                                                                       //釣銭合計を計算
            takeTotalDom.innerHTML = takeTotal2Value                          //釣銭合計を取得
          }
        }
}})})})})})})})})})})});
