window.addEventListener('load', () => {
  
  //各出力箇所取得

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
  const cashCalcDom = document.getElementById("cash-calc");                           //現金有高出力欄
  const takeTotalDom = document.getElementById("take-total");                         //釣銭合計出力欄
  const amountInput = document.getElementById("amount");                              //釣銭設定額入力数取得
  const cashSalesDom = document.getElementById("cash-sales")                          //売上現金出力欄
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
      const amountValue = amountInput.value;                                           //入力した釣銭設定額を取得
      const cashSalesValue = Math.floor(totalValue - amountValue)
      cashSalesDom.innerHTML = cashSalesValue                                          //売上現金計算し出力
      gapDom.innerHTML = Math.floor( cashSalesValue - cashValue )                      //レジギャップ欄へ出力

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

      //1000円釣銭額計算
      const oneThousandCalc1Value = Math.floor(oneThousandValue - 20)                  //ドロアに残す額を引く
      const oneThousandCalc2Value = Math.floor(oneThousandCalc1Value * 1000)           //枚数を金額に直す
      const oneThousandCalc3Value = Math.floor(oneThousandCalc2Value + fiveHundredConfirmValue + oneHundredConfirmValue + fiftyConfirmValue + tenConfirmValue + fiveConfirmValue + oneConfirmValue)
                                                                                       //他の釣銭額と足す
      const oneThousandCalc4Value = Math.floor(oneThousandCalc3Value / 10000)          //そして10000で割って端数消す
      const oneThousandCalc5Value = Math.floor(oneThousandCalc4Value * 10000)          //さらに10000を掛けて端数消えた状態で単位を戻す


      //条件分岐①True 1~1000円合計が120000円より少ない or 1~1000円合計が120000円以上の場合
      if (oneThousandCalc5Value < amountValue ) { //1~1000円合計が120000円より少ない
        //1000円釣銭額計算続き
        const oneThousandConfirmValue = Math.floor(oneThousandCalc5Value - fiveHundredConfirmValue - oneHundredConfirmValue - fiftyConfirmValue - tenConfirmValue - fiveConfirmValue - oneConfirmValue)
                                                                                       //1000円札だけの金額に直す
        const oneThousandCalc6Value = Math.floor(oneThousandConfirmValue / 1000)       //1000円札の枚数を算出


        //条件分岐②True 5000円札が2枚以下の場合 or 5000円札が3枚の場合 or 5000円札が4枚以上ある場合
        if (fiveThousandValue <= 2 ) { //5000円札が2枚以下の場合
          //1000円札釣銭額計算続き
          oneThousandTakeDom.innerHTML = oneThousandCalc6Value                       //釣銭用に取る枚数を出力
          oneThousandTakeTotalDom.innerHTML = oneThousandConfirmValue                    //釣銭用に取る金額を出力
          
          //5000円釣銭額計算
          fiveThousandTakeDom.innerHTML = 0                                            //釣銭用に取る枚数を出力
          fiveThousandTakeTotalDom.innerHTML = 0                                       //釣銭用に取る金額を出力

          //10000円釣銭額計算
          const tenThousandConfirmValue = Math.floor(amountValue - oneThousandCalc5Value)
                                                                                       //10000円札入れる額計算
          const tenThousandCalc1Value = Math.floor(tenThousandConfirmValue / 10000)    //10000円札の枚数を算出
          tenThousandTakeDom.innerHTML = tenThousandCalc1Value                         //釣銭用に取る枚数を出力
          tenThousandTakeTotalDom.innerHTML = tenThousandConfirmValue                  //釣銭用に取る金額を出力

          //釣銭合計計算
          const takeTotalValue = Math.floor(tenThousandConfirmValue + oneThousandConfirmValue + fiveHundredConfirmValue + oneHundredConfirmValue + fiftyConfirmValue + tenConfirmValue + fiveConfirmValue + oneConfirmValue)
                                                                                       //釣銭合計を計算
          takeTotalDom.innerHTML = takeTotalValue                                      //釣銭合計を表示

        //条件分岐②elsif 5000円札が2枚以下の場合 or 5000円札が3枚の場合 or 5000円札が4枚以上ある場合
        } else if (fiveThousandValue == 3 ) { //5000円札が3枚の場合
          //1000円札釣銭額計算続き
          const oneThousandCalc7Value = Math.floor(oneThousandCalc6Value + 5)          //1000円札を5枚足す
          const oneThousandConfirm2Value = Math.floor(oneThousandCalc7Value * 1000)    //5枚足した時の金額
          oneThousandTakeDom.innerHTML = oneThousandCalc7Value                         //釣銭用に取る枚数を出力
          oneThousandTakeTotalDom.innerHTML = oneThousandConfirm2Value                 //釣銭用に取る金額を出力

          //5000円釣銭額計算
          fiveThousandTakeDom.innerHTML = 1                                            //釣銭用に取る枚数を出力
          fiveThousandTakeTotalDom.innerHTML = 5000                                    //釣銭用に取る金額を出力

          //10000円釣銭額計算
          const tenThousandCalc2Value = Math.floor(5000 + oneThousandConfirm2Value + fiveHundredConfirmValue + oneHundredConfirmValue + fiftyConfirmValue + tenConfirmValue + fiveConfirmValue + oneConfirmValue)
                                                                                       //1~5000円の金額
          const tenThousandConfirm2Value = Math.floor(amountValue - tenThousandCalc2Value)
                                                                                       //10000円札の金額を算出
          const tenThousandCalc3Value = Math.floor(tenThousandConfirm2Value / 10000)   //10000円札の枚数を算出
          tenThousandTakeDom.innerHTML = tenThousandCalc3Value                         //釣銭用に取る枚数を出力
          tenThousandTakeTotalDom.innerHTML = tenThousandConfirm2Value                 //釣銭用に取る金額を出力

          //釣銭合計計算
          const takeTotal2Value = Math.floor(tenThousandConfirm2Value + 5000 + oneThousandConfirm2Value + fiveHundredConfirmValue + oneHundredConfirmValue + fiftyConfirmValue + tenConfirmValue + fiveConfirmValue + oneConfirmValue)
                                                                                       //釣銭合計を計算
          takeTotalDom.innerHTML = takeTotal2Value                                     //釣銭合計を表示

        //条件分岐②False 5000円札が2枚以下の場合 or 5000円札が3枚の場合 or 5000円札が4枚以上ある場合
        } else { //5000円札が4枚以上ある場合
          //1000円札釣銭額計算続き
          oneThousandTakeDom.innerHTML = oneThousandCalc6Value                         //釣銭用に取る枚数を出力
          oneThousandTakeTotalDom.innerHTML = oneThousandConfirmValue                  //釣銭用に取る金額を出力

          //5000円釣銭額計算
          fiveThousandTakeDom.innerHTML = 2                                            //釣銭用に取る枚数を出力
          fiveThousandTakeTotalDom.innerHTML = 10000                                   //釣銭用に取る金額を出力

          //10000円釣銭額計算

          const tenThousandCalc2Value = Math.floor(10000 + oneThousandConfirmValue + fiveHundredConfirmValue + oneHundredConfirmValue + fiftyConfirmValue + tenConfirmValue + fiveConfirmValue + oneConfirmValue)
                                                                                       //1~5000円の金額
          const tenThousandConfirm2Value = Math.floor(amountValue - tenThousandCalc2Value)
                                                                                       //10000円札の金額を算出
          const tenThousandCalc3Value = Math.floor(tenThousandConfirm2Value / 10000)   //10000円札の枚数を算出
          tenThousandTakeDom.innerHTML = tenThousandCalc3Value                         //釣銭用に取る枚数を出力
          tenThousandTakeTotalDom.innerHTML = tenThousandConfirm2Value                 //釣銭用に取る金額を出力

          //釣銭合計計算
          const takeTotal3Value = Math.floor(tenThousandConfirm2Value + 10000 + oneThousandConfirmValue + fiveHundredConfirmValue + oneHundredConfirmValue + fiftyConfirmValue + tenConfirmValue + fiveConfirmValue + oneConfirmValue)
                                                                                       //釣銭合計を計算
          takeTotalDom.innerHTML = takeTotal3Value                                     //釣銭合計を表示
        }

      //条件分岐①False  1~1000円合計が120000円より少ない or 1~1000円合計が120001円以上の場合
      } else {  //1~1000円合計が120001円以上の場合
        //1000円釣銭額計算続き
        const oneThousandCalc7Value = Math.floor(oneThousandCalc5Value - amountValue)  //釣銭設定額から溢れる金額計算
        const oneThousandCalc8Value = Math.floor(oneThousandCalc5Value - fiveHundredConfirmValue - oneHundredConfirmValue - fiftyConfirmValue - tenConfirmValue - fiveConfirmValue - oneConfirmValue)
                                                                                       //1000円札だけの金額算出(溢れ分込み)
        const oneThousandConfirm3Value = Math.floor(oneThousandCalc8Value - oneThousandCalc7Value )
                                                                                       //1000円札溢れ分を引いた金額
        //条件分岐② True 5000円札が2枚以下の場合 or 5000円札が3枚の場合 or 5000円札が4枚以上ある場合
        if (fiveThousandValue <= 2 ) { //5000円札が2枚以下の場合
          //1000円釣銭額計算続き
          const oneThousandCalc9Value = Math.floor(oneThousandConfirm3Value / 1000)    //1000円札の枚数を算出
          oneThousandTakeDom.innerHTML = oneThousandCalc9Value                         //釣銭用に取る枚数を出力
          oneThousandTakeTotalDom.innerHTML = oneThousandConfirm3Value                 //釣銭用に取る金額を出力

          //5000円釣銭額計算
          fiveThousandTakeDom.innerHTML = 0                                            //釣銭用に取る枚数を出力
          fiveThousandTakeTotalDom.innerHTML = 0                                       //釣銭用に取る金額を出力

          //10000円釣銭額計算
          tenThousandTakeDom.innerHTML = 0                                             //釣銭用に取る枚数を出力
          tenThousandTakeTotalDom.innerHTML = 0                                        //釣銭用に取る金額を出力

          //釣銭合計計算
          const takeTotal4Value = Math.floor(oneThousandConfirm3Value + fiveHundredConfirmValue + oneHundredConfirmValue + fiftyConfirmValue + tenConfirmValue + fiveConfirmValue + oneConfirmValue)
                                                                                       //釣銭合計を計算
          takeTotalDom.innerHTML = takeTotal4Value                                     //釣銭合計を表示

          //条件分岐②elsif 5000円札が2枚以下の場合 or 5000円札が3枚の場合 or 5000円札が4枚以上ある場合
        } else if (fiveThousandValue == 3) { //5000円札が3枚の場合
          //1000円札釣銭額計算続き
          const oneThousandConfirm4Value = Math.floor(oneThousandConfirm3Value - 5000) //5000円札1枚分の余白を作って1000円枚数を確定
          const oneThousandCalc10Value = Math.floor(oneThousandConfirm4Value / 1000)   //1000円札の枚数を出力
          oneThousandTakeDom.innerHTML = oneThousandCalc10Value                        //釣銭用に取る枚数を出力
          oneThousandTakeTotalDom.innerHTML = oneThousandConfirm4Value                 //釣銭用に取る金額を出力

          //5000円釣銭額計算
          fiveThousandTakeDom.innerHTML = 1                                            //釣銭用に取る金額を出力
          fiveThousandTakeTotalDom.innerHTML = 5000                                    //釣銭用に取る枚数を出力

          //10000円釣銭額計算
          tenThousandTakeDom.innerHTML = 0                                             //釣銭用に取る枚数を出力
          tenThousandTakeTotalDom.innerHTML = 0                                        //釣銭用に取る金額を出力

          //釣銭合計計算
          const takeTotal5Value = Math.floor(5000 + oneThousandConfirm4Value + fiveHundredConfirmValue + oneHundredConfirmValue + fiftyConfirmValue + tenConfirmValue + fiveConfirmValue + oneConfirmValue)
                                                                                       //釣銭合計を計算
          takeTotalDom.innerHTML = takeTotal5Value                                     //釣銭合計を表示

        //条件分岐②False 5000円札が2枚以下の場合 or 5000円札が3枚の場合 or 5000円札が4枚以上ある場合
        } else {//5000円札が4枚以上ある場合
                  //5000円札を入れて釣銭作成する処理
          //1000円札釣銭額計算続き
          const oneThousandConfirm5Value = Math.floor(oneThousandConfirm3Value - 10000)//5000円札2枚分の余白を作って1000円枚数を確定
          const oneThousandCalc11Value = Math.floor(oneThousandConfirm5Value / 1000)   //1000円札の枚数を出力
          oneThousandTakeDom.innerHTML = oneThousandCalc11Value                        //釣銭用に取る枚数を出力
          oneThousandTakeTotalDom.innerHTML = oneThousandConfirm5Value                 //釣銭用に取る金額を出力

          //5000円釣銭額計算
          fiveThousandTakeDom.innerHTML = 2                                            //釣銭用に取る枚数を出力
          fiveThousandTakeTotalDom.innerHTML = 10000                                   //釣銭用に取る枚数を出力

          //10000円釣銭額計算
          tenThousandTakeDom.innerHTML = 0                                             //釣銭用に取る金額を出力
          tenThousandTakeTotalDom.innerHTML = 0                                        //釣銭用に取る枚数を出力

          //釣銭合計計算
          const takeTotal6Value = Math.floor(10000 + oneThousandConfirm5Value + fiveHundredConfirmValue + oneHundredConfirmValue + fiftyConfirmValue + tenConfirmValue + fiveConfirmValue + oneConfirmValue)
                                                                                       //釣銭合計を計算
          takeTotalDom.innerHTML = takeTotal6Value                                     //釣銭合計を表示
        }
      }
})})})})})})})})})})});
