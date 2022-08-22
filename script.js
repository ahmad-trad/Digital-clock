Number.prototype.zero = function(digitals){
    for(var np = this.toString(); np.length < digitals; np = 0 + np);
        return np;
    }


function updataTime(){
    let now = new Date();

    let day = now.getDay(),
        mo = now.getMonth(),
        da = now.getDate(),
        year = now.getFullYear(),
        hou = now.getHours(),
        mi = now.getMinutes(),
        sec = now.getSeconds(),
        pe = "AM";

        if(hou == 0){
            hou = 12;
        }else if(hou > 12){
            hou = hou - 12;
            pe = "PM"
        }



    let mounths = ["january", "februay", "march", "april", "may", "june", "july", "augest", "september", "october", "novamber", "december"];
    let days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday"];
    let ids = ["dayname", "mounth", "daynum", "year", "hours", "minutes", "seconds", "period"];
    let value = [days[day] , mounths[mo], da, year, hou.zero(2), mi.zero(2), sec.zero(2), pe];

    for(let i = 0; i < ids.length; i++){
        document.getElementById(ids[i]).firstChild.nodeValue = value[i];
    }

}

// function initDate(){
//     updataTime();
//     window.setInterval(updataTime(), 1000);
// }

// document.body.onload = initDate();

setInterval(() =>{
    updataTime();
},1000)
