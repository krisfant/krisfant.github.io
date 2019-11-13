/**
 * Created by baizhantang on 2019/11/13.
 */
function showWX() {

    var e = document.getElementById("wx");
    if(e.style.display == 'block'){
        document.getElementById("wx").style.display = 'none';
    }
    else {
        document.getElementById("wx").style.display = 'block';
    };
}