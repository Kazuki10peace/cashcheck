window.addEventListener('load', () => {
  
  //各出力箇所取得
  const amountInput = document.getElementById("amount");                              //釣銭設定額入力数取得

  const tenThousandInput = document.getElementById("ten-thousand");                   //10000円入力数取得
  const tenThousandTotalDom = document.getElementById("ten-thousand-total");          //10000円入力額出力欄
  const tenThousandTakeDom = document.getElementById("ten-thousand-take");            //10000円取る数出力欄
  const tenThousandTakeTotalDom = document.getElementById("ten-thousand-take-total"); //10000円取る額出力欄

  const fiveThousandInput = document.getElementById("five-thousand");
  const fiveThousandTotalDom = document.getElementById("five-thousand-total");
  const fiveThousandTakeDom = document.getElementById("five-thousand-take");
  const fiveThousandTakeTotalDom = document.getElementById("five-thousand-take-total");

  const oneThousandInput = document.getElementById("one-thousand");
  const oneThousandTotalDom = document.getElementById("one-thousand-total");
  const oneThousandTakeDom = document.getElementById("one-thousand-take");
  const oneThousandTakeTotalDom = document.getElementById("one-thousand-take-total");

  const fiveHundredInput = document.getElementById("five-hundred");
  const fiveHundredTotalDom = document.getElementById("five-hundred-total");
  const fiveHundredTakeDom = document.getElementById("five-hundred-take");
  const fiveHundredTakeTotalDom = document.getElementById("five-hundred-take-total");

  const oneHundredInput = document.getElementById("one-hundred");
  const oneHundredTotalDom = document.getElementById("one-hundred-total");
  const oneHundredTakeDom = document.getElementById("one-hundred-take");
  const oneHundredTakeTotalDom = document.getElementById("one-hundred-take-total");

  const fiftyInput = document.getElementById("fifty");
  const fiftyTotalDom = document.getElementById("fifty-total");
  const fiftyTakeDom = document.getElementById("fifty-take");
  const fiftyTakeTotalDom = document.getElementById("fifty-take-total");

  const tenInput = document.getElementById("ten");
  const tenTotalDom = document.getElementById("ten-total");
  const tenTakeDom = document.getElementById("ten-take");
  const tenTakeTotalDom = document.getElementById("ten-take-total");

  const fiveInput = document.getElementById("five");
  const fiveTotalDom = document.getElementById("five-total");
  const fiveTakeDom = document.getElementById("five-take");
  const fiveTakeTotalDom = document.getElementById("five-take-total");

  const oneInput = document.getElementById("one");
  const oneTotalDom = document.getElementById("one-total");
  const oneTakeDom = document.getElementById("one-take");
  const oneTakeTotalDom = document.getElementById("one-take-total");

  const cashTotalInput = document.getElementById("cash-total");                       //現金売上取得
  const cashCalcDom = document.getElementById("cash-calc");                        //現金有高出力欄
  const takeTotalDom = document.getElementById("take-total");                         //釣銭合計出力欄
  const gapDom = document.getElementById("gap");                                      //レジギャップ出力欄

  //10000円入力し、金額表示
  tenThousandInput.addEventListener("input", () => {
    const tenThousandValue = tenThousandInput.value;                                  //入力した数値を取得
    const tenThousandTotalValue = Math.floor(tenThousandValue*10000)                  //入力した数値に金額をかける
    tenThousandTotalDom.innerHTML = tenThousandTotalValue                             //現金合計出力欄へ出力
  //5000円入力し、金額表示
  fiveThousandInput.addEventListener("input", () => {
    const fiveThousandValue = fiveThousandInput.value;
    const fiveThousandTotalValue = Math.floor(fiveThousandValue*5000)
    fiveThousandTotalDom.innerHTML = fiveThousandTotalValue
  //1000円入力し、金額表示
  oneThousandInput.addEventListener("input", () => {
    const oneThousandValue = oneThousandInput.value;
    const oneThousandTotalValue = Math.floor(oneThousandValue*1000)
    oneThousandTotalDom.innerHTML = oneThousandTotalValue
  //500円入力し、金額表示
  fiveHundredInput.addEventListener("input", () => {
    const fiveHundredValue = fiveHundredInput.value;
    const fiveHundredTotalValue = Math.floor(fiveHundredValue*500)
    fiveHundredTotalDom.innerHTML = fiveHundredTotalValue
  //100円入力し、金額表示
  oneHundredInput.addEventListener("input", () => {
    const oneHundredValue = oneHundredInput.value;
    const oneHundredTotalValue = Math.floor(oneHundredValue*100)
    oneHundredTotalDom.innerHTML = oneHundredTotalValue
  //50円入力し、金額表示
  fiftyInput.addEventListener("input", () => {
    const fiftyValue = fiftyInput.value;
    const fiftyTotalValue = Math.floor(fiftyValue*50)
    fiftyTotalDom.innerHTML = fiftyTotalValue
  //10円入力し、金額表示
  tenInput.addEventListener("input", () => {
    const tenValue = tenInput.value;
    const tenTotalValue = Math.floor(tenValue*10)
    tenTotalDom.innerHTML = tenTotalValue
  //5円入力し、金額表示
  fiveInput.addEventListener("input", () => {
    const fiveValue = fiveInput.value;
    const fiveTotalValue = Math.floor(fiveValue*5)
    fiveTotalDom.innerHTML = fiveTotalValue
  //1円入力し、金額表示
  oneInput.addEventListener("input", () => {
    const oneValue = oneInput.value;
    const oneTotalValue = Math.floor(oneValue*1)
    oneTotalDom.innerHTML = oneTotalValue

    //現金売上入力したらレジギャップと釣銭金額するイベントを発火
    cashTotalInput.addEventListener("input", () => {
      //現金有高とレジギャップ計算し表示
      const cashValue = cashTotalInput.value;                                          //入力した数値を取得
      const totalValue = Math.floor(tenThousandTotalValue+fiveThousandTotalValue+oneThousandTotalValue+fiveHundredTotalValue+oneHundredTotalValue+fiftyTotalValue+tenTotalValue+fiveTotalValue+oneTotalValue)
      cashCalcDom.innerHTML = totalValue                                               //現金有高計算し出力
      gapDom.innerHTML = Math.floor(cashValue-totalValue)                              //レジギャップ欄へ出力

      // 1円釣銭額計算
      const oneCalc1Value = Math.floor(oneValue / 10 )                                 //端数捨てる為に一度10で割る
      const oneCalc2Value = Math.floor(oneCalc1Value * 10)                             //端数消えたので10掛ける
      const oneCalc3Value = Math.floor(oneCalc2Value - 30)                             //ドロアへ残す分引く
      oneTakeDom.innerHTML = oneCalc3Value                                             //釣銭用に取る枚数を出力
      const oneConfirmValue = Math.floor(oneCalc3Value * 1)                            //釣銭用に取る枚数*金額
      oneTakeTotalDom.innerHTML = oneConfirmValue                                      //釣銭用に取る金額を出力

      // ５円釣銭額計算
      const fiveCalc1Value = Math.floor(fiveValue / 10 )                               //端数捨てる為に一度10で割る
      const fiveCalc2Value = Math.floor(fiveCalc1Value * 10)                           //端数消えたので10掛ける
      const fiveCalc3Value = Math.floor(fiveCalc2Value - 10)                           //ドロアへ残す分引く
      fiveTakeDom.innerHTML = fiveCalc3Value                                           //釣銭用に取る枚数を出力
      const fiveConfirmValue = Math.floor(fiveCalc3Value * 5)                          //釣銭用に取る枚数*金額
      fiveTakeTotalDom.innerHTML = fiveConfirmValue                                    //釣銭用に取る金額を出力

      //10円釣銭額計算
      const tenCalc1Value = Math.floor(tenValue - 30)                                  //ドロアに残す額を引く
      const tenCalc2Value = Math.floor(tenCalc1Value * 10)                             //枚数を金額に直す
      const tenCalc3Value = Math.floor(tenCalc2Value + fiveConfirmValue + oneConfirmValue)
                                                                                       //他の釣銭額と足す
      const tenCalc4Value = Math.floor(tenCalc3Value / 100)                            //そして100で割って端数消す
      const tenCalc5Value = Math.floor(tenCalc4Value * 100)                            //さらに100を掛けて端数消えた状態で単位を戻す
      const tenConfirmValue = Math.floor(tenCalc5Value - fiveConfirmValue - oneConfirmValue)
                                                                                       //10円玉だけの金額に直す
      const tenCalc6Value = Math.floor(tenConfirmValue / 10)                           //10円玉の枚数を算出
      tenTakeDom.innerHTML = tenCalc6Value                                             //釣銭用に取る金額を出力
      tenTakeTotalDom.innerHTML = tenConfirmValue                                      //釣銭用に取る枚数を出力

      //50円釣銭額計算
      const fiftyCalc1Value = Math.floor(fiftyValue - 10)                              //ドロアに残す額を引く
      const fiftyCalc2Value = Math.floor(fiftyCalc1Value * 50)                         //枚数を金額に直す
      const fiftyCalc3Value = Math.floor(fiftyCalc2Value + tenConfirmValue + fiveConfirmValue + oneConfirmValue)
                                                                                       //他の釣銭額と足す
      const fiftyCalc4Value = Math.floor(fiftyCalc3Value / 100)                        //そして100で割って端数消す
      const fiftyCalc5Value = Math.floor(fiftyCalc4Value * 100)                        //さらに100を掛けて端数消えた状態で単位を戻す
      const fiftyConfirmValue = Math.floor(fiftyCalc5Value - tenConfirmValue - fiveConfirmValue - oneConfirmValue)
                                                                                       //50円玉だけの金額に直す
      const fiftyCalc6Value = Math.floor(fiftyConfirmValue / 50)                       //50円玉の枚数を算出
      fiftyTakeDom.innerHTML = fiftyCalc6Value                                         //釣銭用に取る金額を出力
      fiftyTakeTotalDom.innerHTML = fiftyConfirmValue                                  //釣銭用に取る枚数を出力

      //100円釣銭額計算
      const oneHundredCalc1Value = Math.floor(oneHundredValue - 30)                    //ドロアに残す額を引く
      const oneHundredCalc2Value = Math.floor(oneHundredCalc1Value * 100)              //枚数を金額に直す
      const oneHundredCalc3Value = Math.floor(oneHundredCalc2Value + fiftyConfirmValue + tenConfirmValue + fiveConfirmValue + oneConfirmValue)
                                                                                       //他の釣銭額と足す
      const oneHundredCalc4Value = Math.floor(oneHundredCalc3Value / 1000)             //そして1000で割って端数消す
      const oneHundredCalc5Value = Math.floor(oneHundredCalc4Value * 1000)             //さらに1000を掛けて端数消えた状態で単位を戻す
      const oneHundredConfirmValue = Math.floor(oneHundredCalc5Value - fiftyConfirmValue - tenConfirmValue - fiveConfirmValue - oneConfirmValue)
                                                                                       //100円玉だけの金額に直す
      const oneHundredCalc6Value = Math.floor(oneHundredConfirmValue / 100)            //100円玉の枚数を算出
      oneHundredTakeDom.innerHTML = oneHundredCalc6Value                               //釣銭用に取る金額を出力
      oneHundredTakeTotalDom.innerHTML = oneHundredConfirmValue                        //釣銭用に取る枚数を出力

      //500円釣銭額計算
      const fiveHundredCalc1Value = Math.floor(fiveHundredValue - 10)                  //ドロアに残す額を引く
      const fiveHundredCalc2Value = Math.floor(fiveHundredCalc1Value * 500)            //枚数を金額に直す
      const fiveHundredCalc3Value = Math.floor(fiveHundredCalc2Value + oneHundredConfirmValue + fiftyConfirmValue + tenConfirmValue + fiveConfirmValue + oneConfirmValue)
                                                                                       //他の釣銭額と足す
      const fiveHundredCalc4Value = Math.floor(fiveHundredCalc3Value / 1000)           //そして1000で割って端数消す
      const fiveHundredCalc5Value = Math.floor(fiveHundredCalc4Value * 1000)           //さらに1000を掛けて端数消えた状態で単位を戻す
      const fiveHundredConfirmValue = Math.floor(fiveHundredCalc5Value - oneHundredConfirmValue - fiftyConfirmValue - tenConfirmValue - fiveConfirmValue - oneConfirmValue)
                                                                                       //500円玉だけの金額に直す
      const fiveHundredCalc6Value = Math.floor(fiveHundredConfirmValue / 500)          //500円玉の枚数を算出
      fiveHundredTakeDom.innerHTML = fiveHundredCalc6Value                             //釣銭用に取る金額を出力
      fiveHundredTakeTotalDom.innerHTML = fiveHundredConfirmValue                      //釣銭用に取る枚数を出力

      const amountValue = amountInput.value;                                           //入力した釣銭設定額を取得

      //1000円釣銭額計算
      const oneThousandCalc1Value = Math.floor(oneThousandValue - 30)                  //ドロアに残す額を引く
      const oneThousandCalc2Value = Math.floor(oneThousandCalc1Value * 1000)           //枚数を金額に直す
      const oneThousandCalc3Value = Math.floor(oneThousandCalc2Value + fiveHundredConfirmValue + oneHundredConfirmValue + fiftyConfirmValue + tenConfirmValue + fiveConfirmValue + oneConfirmValue)
                                                                                       //他の釣銭額と足す
      const oneThousandCalc4Value = Math.floor(oneThousandCalc3Value / 10000)          //そして10000で割って端数消す
      const oneThousandCalc5Value = Math.floor(oneThousandCalc4Value * 10000)          //さらに10000を掛けて端数消えた状態で単位を戻す


      //条件分岐①True 1~1000円合計が120000円以下 or 1~1000円合計が120001円以上の場合
      if () { //1~1000円合計が120000円以下の場合

        //条件分岐②True 5000円札が３枚以下の場合 or 5000円札が4枚以上ある場合
        if () { //5000円札が3枚以下の場合
                  //10000円札を入れて釣銭作成する処理
        //条件分岐②False 5000円札が３枚以下の場合 or 5000円札が4枚以上ある場合
        }else { //5000円札が4枚以上ある場合
                  //5000円札を入れて釣銭作成する処理
        }

      //条件分岐①False  1~1000円合計が120000円以下 or 1~1000円合計が120001円以上の場合
      } else {  //1~1000円合計が120001円以上の場合

        //条件分岐② True 5000円札が３枚以下の場合 or 5000円札が4枚以上ある場合
        if () { //5000円札が3枚以下の場合
                  //10000円札を入れて釣銭作成する処理
        //条件分岐②False 5000円札が３枚以下の場合 or 5000円札が4枚以上ある場合
        } else {//5000円札が4枚以上ある場合
                  //5000円札を入れて釣銭作成する処理
        }
      }

})})})})})})})})})})});
