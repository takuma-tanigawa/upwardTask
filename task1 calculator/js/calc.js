
var result = document.getElementById("result");
var smile = document.getElementById("smile");
var resultSet;

    function edit(elem) {
        result.value = result.value + elem.value;
    }

    function calcClear() {
        result.value = "0";
        result.value = new Function("return " + result.value)();
    }

    function calc() {
        var resultVal = result.value;
        var resultStr = resultVal.toString();

        var a = resultStr.charAt(0);

        switch (a) {
            case "+":
                result.value = resultSet + result.value;
                break;
            case "-":
                result.value = resultSet - result.value;
                break;
            case "*":
                result.value = resultSet * result.value;                
                break;
            case "/":
                result.value = resultSet / result.value;
                break;
        }

        result.value = new Function("return " + result.value)();
        resultSet = result.value;
        smile();

        function smile() {
    
            var reVal = result.value;
            var reStr2 = reVal.toString();
    
            var smileNum = reStr2.substring(reStr2.length - 1, reStr2.length);
            smileNum = Number(smileNum);
    
            switch (smileNum){
                case 1:
                    document.getElementById("smile").innerHTML = "（｀・ω・´）ｷﾘｯ!";
                    break;
                case 2:
                    document.getElementById("smile").innerHTML = "（´・ω・｀）ｼｮﾎﾞﾝ";
                    break;
                case 3:
                    document.getElementById("smile").innerHTML = " (`･ω･´) ｼｬｷｰﾝ ";
                    break;
                case 4:
                    document.getElementById("smile").innerHTML = " (`（#＾ω＾）ﾋﾞｷﾋﾞｷ ";
                    break;
                case 5:
                    document.getElementById("smile").innerHTML = " ﾊｧ? (ﾟДﾟ) ";
                    break;
                case 6:
                    document.getElementById("smile").innerHTML = " ( ﾟДﾟ)∂゛ｺｲﾔ ";
                    break;
                case 7:
                    document.getElementById("smile").innerHTML = " (　ﾟ∀ﾟ)o彡° ｴｰﾘﾝ! ";
                    break;
                case 8:
                    document.getElementById("smile").innerHTML = "（・∀・）ｲｲ!! ";
                    break;
                case 9:
                    document.getElementById("smile").innerHTML = "（・Ａ・）ｲｸﾅｲ!! ";
                    break;
                case 0:
                    document.getElementById("smile").innerHTML = " ( ﾟДﾟ) ｳﾏｰ ";
                    break;      
            }
        }
    }

