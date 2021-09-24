$(document).ready(function () {

    //original text
    var text = '"สมใจปรารถนา" ผลงานชนะเลิศจากกิจกรรม Umay+ MONEY FITNESS';

    document.getElementById("original").innerHTML = text;

    //count uppercase
    var cnt = countUpperCase(text);
    document.getElementById("count").innerHTML = cnt.toString();

})

function countUpperCase(str) {

    var cnt = str.length - str.replace(/[A-Z]/g, '').length;

    return cnt;

}
