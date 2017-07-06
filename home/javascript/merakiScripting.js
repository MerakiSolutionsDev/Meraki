function test(){
    alert('JS works !');
}

function openItem(Id){
    document.getElementById(Id).style.display='block';
}

function openFromClass(idName, className) {
    //Uso: openFromClass(['id01','id02'],someClass);

    var i;
    var x = document.getElementsByClassName(className);
    for (var i = 0; i < idName.length; i++) {
        if (document.getElementById(idName[i]).style.display == "block") {
            document.getElementById(idName[i]).style.display = "none";
        }else {
            document.getElementById(idName[i]).style.display = "block";
        }
    }
}

function showDivInfo(divId,month){
    divId = divId + "Info";

    document.getElementById(divId).innerHTML = "esperando contenido ...";

    if (window.XMLHttpRequest) {
        //IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        //IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(divId).innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET","../php/getDivInfo.php?month="+month,true);
    xmlhttp.send();
}
