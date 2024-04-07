


function clock() {

    const fecha = document.getElementById("fecha")
    const hora = document.getElementById("hora")
    const minutos = document.getElementById("minutos")
    const segundos = document.getElementById("segundos")
    const frase = document.getElementById("frase")


    var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    var days = ["Domingo", "Lunes", "Martes"
        , "Miércoles", "Jueves", "Viernes", "Sábado"];


    hoy = new Date();

    var h = hoy.getHours()
    var m = hoy.getMinutes()
    var s = hoy.getSeconds()

    h = h < 10 ? `0${h}` : `${h}`;
    m = m < 10 ? `0${m}` : `${m}`;
    s = s < 10 ? `0${s}` : `${s}`;

    SumHrMin = Number(h + m);


    if (SumHrMin >= 701 && SumHrMin <= 1200) {
        frase.innerHTML = "Buenos días, desayuna fuerte y a darle al código";
    } else if (SumHrMin >= 1201 && SumHrMin <= 1400) {
        frase.innerHTML = " Echa un rato más pero no olvides comer";
    } else if (SumHrMin >= 1401 && SumHrMin <= 1600) {
        frase.innerHTML = "Espero que hayas comido";
    } else if (SumHrMin >= 1601 && SumHrMin <= 1800) {
        frase.innerHTML = "Buenas tardes, el último empujón";
    } else if (SumHrMin >= 1801 && SumHrMin <= 2200) {
        frase.innerHTML = "Esto ya son horas extras, ... piensa en parar pronto";
    } else {
        frase.innerHTML = "Buenas noches, es hora de pensar en parar y descansar ";
    }




    fecha.innerHTML = `${days[hoy.getDay()]}  ${hoy.getDate()}  ${months[hoy.getMonth()]} ${hoy.getFullYear()}`

    hora.innerHTML = h;
    minutos.innerHTML = m;
    segundos.innerHTML = s;

}

setInterval(clock, 1000)