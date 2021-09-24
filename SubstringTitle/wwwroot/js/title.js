$(document).ready(function () {

    //original text
    var text = 'Umay+ ตรวจสอบวงเงินคงเหลือและบริการสั่งเงินโอนเข้าบัญชีผ่าน Umay+ Mobile Application';

    document.getElementById("original").innerHTML = text;

    //text length
    var len = text.length;
    document.getElementById("length").innerHTML = len.toString();

    subStringTitle(text, 72);

});

function subStringTitle(str, val_sub) {

    //first substring
    var first_sub = str.substring(0, val_sub);
    document.getElementById("val_sub").innerHTML = val_sub.toString();
    document.getElementById("first_sub").innerHTML = first_sub;

    //count uppercase
    var cnt = countUpperCase(str);
    document.getElementById("count").innerHTML = cnt.toString();

    //mean
    var mean = Math.ceil(cnt * 1.5);
    document.getElementById("mean").innerHTML = mean.toString();

    //more
    var more = mean - cnt;
    document.getElementById("more").innerHTML = more.toString();

    //second substring
    var val_sub2 = val_sub - more - 2;
    var second_sub = first_sub.substring(0, val_sub2) + "...";
    document.getElementById("val_sub2").innerHTML = val_sub2.toString();
    document.getElementById("second_sub").innerHTML = second_sub;

}

function countUpperCase(str) {

    var cnt = str.length - str.replace(/[A-Z]/g, '').length;

    return cnt;

}
