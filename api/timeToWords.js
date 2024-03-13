function timeToWords() { 
    let currentTime = new Date();
    let hh = currentTime.getHours();
    let mm = currentTime.getMinutes();
    let ss = currentTime.getSeconds();

    let words = [
        "viena", "dvi", "trys", "keturios", "penkios", "šešios", "septynios", "aštuonios", "devynios", "dešimt", 
        "vienuolika", "dvylika", "trylika", "keturiolika", "penkiolika", "šešiolika", "septyniolika", "aštuoniolika", 
        "devyniolika", "dvidešimt", "trisdešimt", "keturiasdešimt", "penkiasdešimt"
        ];
  
    let minutes = ""; 
    let seconds = "";
  
    if (mm < 20) { 
        minutes = words[mm - 1]; 
    } else {
        minutes = words[(17 + Math.floor(mm / 10))] + " " + words[(mm % 10) - 1]; 
    }

    if (ss < 20) { 
        seconds = words[ss - 1];
    } else {
        seconds = words[(17 + Math.floor(ss / 10))] + " " + words[(ss % 10) - 1];
    }
    let wordHour = "";
    let wordMinute = "";
    let wordSecond = "";
    if (hh == 1) {
        wordHour = " valanda";
    } else if (hh > 1 && hh < 10) {
       wordHour = " valandos";
    } else {
        wordHour = " valandų";
    }
        
    if (mm == 1 || mm == 21 || mm == 31 || mm == 41 || mm == 51) {
         wordMinute = " minutė";
    } else if (mm >= 10 && mm <= 20 || mm == 30 || mm == 40 || mm == 50) {
        wordMinute = " minučių";
    } else {
         wordMinute = " minutės";
    }
  

    if (ss == 1 || ss == 21 || ss == 31 || ss == 41 || ss == 51) {
         wordSecond = " sekundė";
    } else if (ss >= 10 && ss <= 20 || ss == 30 || ss == 40 || ss == 50) {
         wordSecond = " sekundžių";
    } else {
         wordSecond = " sekundės";
    }


    return words[hh - 1] + wordHour + " " + minutes + wordMinute + " ir " + seconds + wordSecond; 
} 

export { timeToWords }

