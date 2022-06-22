function get_calc(btn){
    // [=] をクリックされたら 演算を行う
    if(btn.value == "=") {
        document.dentaku.displayAns.value = eval(document.dentaku.display.value);
    } else if(btn.value == "AC") {     // [AC] をクリックされたらdisplayの中身を消去
        document.dentaku.display.value = "";
        document.dentaku.displayAns.value = "";
    } else if(btn.value == "delete") {      // [✖︎] をクリックしたら１文字ずつ削除
        var str = document.dentaku.display.value;
        document.dentaku.display.value = str.slice(0, -1);
    } else {              // 上記以外が入力された場合はdisplayに表示していく
        // [×] を [*] に変換
        if(btn.value == "×") {
            btn.value = "*";
        } else if(btn.value == "÷") {       // [÷] を [/] に変換
            btn.value = "/";
        } else if(btn.value == "mod") {     // [mod] を [%] に変換
            btn.value = "%";
        } 

        document.dentaku.display.value += btn.value;

        // ×, ÷, mod を置き換えたので元に戻す
        if(btn.value == "*") {
            btn.value = "×";
        } else if(btn.value == "/") {
            btn.value = "÷";
        } else if(btn.value == "%") {
            btn.value = "mod";
        }
        
        
        

    }
}