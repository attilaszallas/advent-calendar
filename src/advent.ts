const button3 = document.getElementById('btn-3');
const button4 = document.getElementById('btn-4');
const button5 = document.getElementById('btn-5');
const button6 = document.getElementById('btn-6');
const button7 = document.getElementById('btn-7');
const button8 = document.getElementById('btn-8');
const button9 = document.getElementById('btn-9');
const button10 = document.getElementById('btn-10');
const button11 = document.getElementById('btn-11');
const button12 = document.getElementById('btn-12');
const button13 = document.getElementById('btn-13');
const button14 = document.getElementById('btn-14');
const button15 = document.getElementById('btn-15');
const button16 = document.getElementById('btn-16');
const button17 = document.getElementById('btn-17');
const button18 = document.getElementById('btn-18');
const button19 = document.getElementById('btn-19');
const button20 = document.getElementById('btn-20');
const button21 = document.getElementById('btn-21');
const button22 = document.getElementById('btn-22');
const button23 = document.getElementById('btn-23');
const button24 = document.getElementById('btn-24');

button3?.addEventListener('click', function handleClick(event) {
    console.log('button3 clicked');
    button3.style.backgroundColor = "#000080"
    button3.textContent="Erfurt"  
    setCookie("btn3Opened", "true")
});

button4?.addEventListener('click', function handleClick(event) {
    console.log('button4 clicked');
    button4.style.backgroundColor = "#000080"
    button4.textContent="Bielefeld"
    setCookie("btn4Opened", "true")
});

button5?.addEventListener('click', function handleClick(event) {
    console.log('button5 clicked');
    button5.style.backgroundColor = "#000080"
    button5.textContent="Freiburg"
    setCookie("btn5Opened", "true")
});

button6?.addEventListener('click', function handleClick(event) {
    console.log('button6 clicked');
    button6.style.backgroundColor = "#000080"
    button6.textContent="Augsburg"
    setCookie("btn6Opened", "true")
});

button7?.addEventListener('click', function handleClick(event) {
    console.log('button7 clicked');
    button7.style.backgroundColor = "#000080"
    button7.textContent="Bamberg"
    setCookie("btn7Opened", "true")
});

button8?.addEventListener('click', function handleClick(event) {
    console.log('button8 clicked');
    button8.style.backgroundColor = "#000080"
    button8.textContent="Regensburg"
    setCookie("btn8Opened", "true")
});

button9?.addEventListener('click', function handleClick(event) {
    console.log('button9 clicked');
    button9.style.backgroundColor = "#000080"
    button9.textContent="Essen"
    setCookie("btn9Opened", "true")
});

button10?.addEventListener('click', function handleClick(event) {
    console.log('button10 clicked');
    button10.style.backgroundColor = "#000080"
    button10.textContent="Aachen"
    setCookie("btn10Opened", "true")
});

button11?.addEventListener('click', function handleClick(event) {
    console.log('button11 clicked');
    button11.style.backgroundColor = "#000080"
    button11.textContent="Dortmund"
    setCookie("btn11Opened", "true")
});

button12?.addEventListener('click', function handleClick(event) {
    console.log('button12 clicked');
    button12.style.backgroundColor = "#000080"
    button12.textContent="Hannover"
    setCookie("btn12Opened", "true")
});

button13?.addEventListener('click', function handleClick(event) {
    console.log('button13 clicked');
    button13.style.backgroundColor = "#000080"
    button13.textContent="Bonn"
    setCookie("btn13Opened", "true")
});

button14?.addEventListener('click', function handleClick(event) {
    console.log('button14 clicked');
    button14.style.backgroundColor = "#000080"
    button14.textContent="Heidelberg"
    setCookie("btn14Opened", "true")
});

button15?.addEventListener('click', function handleClick(event) {
    console.log('button15 clicked');
    button15.style.backgroundColor = "#000080"
    button15.textContent="Bremen"
    setCookie("btn15Opened", "true")
});

button16?.addEventListener('click', function handleClick(event) {
    console.log('button16 clicked');
    button16.style.backgroundColor = "#000080"
    button16.textContent="Dresden" 
    setCookie("btn16Opened", "true")
});

button17?.addEventListener('click', function handleClick(event) {
    console.log('button17 clicked');
    button17.style.backgroundColor = "#000080"
    button17.textContent="Nuremberg"
    setCookie("btn17Opened", "true")
});

button18?.addEventListener('click', function handleClick(event) {
    console.log('button18 clicked');
    button18.style.backgroundColor = "#000080"
    button18.textContent="Leipzig"
    setCookie("btn18Opened", "true")
});

button19?.addEventListener('click', function handleClick(event) {
    console.log('button19 clicked');
    button19.style.backgroundColor = "#000080"
    button19.textContent="Düsseldorf"
    setCookie("btn19Opened", "true")
});

button20?.addEventListener('click', function handleClick(event) {
    console.log('button20 clicked');
    button20.style.backgroundColor = "#000080"
    button20.textContent="Cologne"
    setCookie("btn20Opened", "true")
});

button21?.addEventListener('click', function handleClick(event) {
    console.log('button21 clicked');
    button21.style.backgroundColor = "#000080"
    button21.textContent="Stuttgart"
    setCookie("btn21Opened", "true")
});

button22?.addEventListener('click', function handleClick(event) {
    console.log('button22 clicked');
    button22.style.backgroundColor = "#000080"
    button22.textContent="Hamburg"
    setCookie("btn22Opened", "true")
});

button23?.addEventListener('click', function handleClick(event) {
    console.log('button23 clicked');
    button23.style.backgroundColor = "#000080"
    button23.textContent="Munich"
    setCookie("btn23Opened", "true")
});

button24?.addEventListener('click', function handleClick(event) {
    console.log('button24 clicked');
    button24.style.backgroundColor = "#000080"
    button24.textContent="Berlin"
    setCookie("btn24Opened", "true")
});

if (document.cookie.indexOf('btn3Opened=') + 1)
{
    button3.style.backgroundColor = "#000080"
    button3.textContent="Erfurt"     
}

if (document.cookie.indexOf('btn4Opened=') + 1)
{
    button4.style.backgroundColor = "#000080"
    button4.textContent="Bielefeld"    
}

if (document.cookie.indexOf('btn5Opened=') + 1)
{
    button5.style.backgroundColor = "#000080"
    button5.textContent="Freiburg"    
}

if (document.cookie.indexOf('btn6Opened=') + 1)
{
    button6.style.backgroundColor = "#000080"
    button6.textContent="Augsburg"   
}

if (document.cookie.indexOf('btn7Opened=') + 1)
{
    button7.style.backgroundColor = "#000080"
    button7.textContent="Bamberg"
}

if (document.cookie.indexOf('btn8Opened=') + 1)
{
    button8.style.backgroundColor = "#000080"
    button8.textContent="Regensburg"
}

if (document.cookie.indexOf('btn9Opened=') + 1)
{
    button9.style.backgroundColor = "#000080"
    button9.textContent="Essen"
}

if (document.cookie.indexOf('btn10Opened=') + 1)
{
    button10.style.backgroundColor = "#000080"
    button10.textContent="Aachen"
}

if (document.cookie.indexOf('btn11Opened=') + 1)
{
    button11.style.backgroundColor = "#000080"
    button11.textContent="Dortmund"
}

if (document.cookie.indexOf('btn12Opened=') + 1)
{
    button12.style.backgroundColor = "#000080"
    button12.textContent="Hannover"
}

if (document.cookie.indexOf('btn13Opened=') + 1)
{
    button13.style.backgroundColor = "#000080"
    button13.textContent="Bonn"
}

if (document.cookie.indexOf('btn14Opened=') + 1)
{
    button14.style.backgroundColor = "#000080"
    button14.textContent="Heidelberg"
}

if (document.cookie.indexOf('btn15Opened=') + 1)
{
    button15.style.backgroundColor = "#000080"
    button15.textContent="Bremen"
}

if (document.cookie.indexOf('btn16Opened=') + 1)
{
    button16.style.backgroundColor = "#000080"
    button16.textContent="Dresden"
}

if (document.cookie.indexOf('btn17Opened=') + 1)
{
    button17.style.backgroundColor = "#000080"
    button17.textContent="Nuremberg"
}

if (document.cookie.indexOf('btn18Opened=') + 1)
{
    button18.style.backgroundColor = "#000080"
    button18.textContent="Leipzig"
}

if (document.cookie.indexOf('btn19Opened=') + 1)
{
    button19.style.backgroundColor = "#000080"
    button19.textContent="Düsseldorf"
}

if (document.cookie.indexOf('btn20Opened=') + 1)
{
    button20.style.backgroundColor = "#000080"
    button20.textContent="Cologne"
}

if (document.cookie.indexOf('btn21Opened=') + 1)
{
    button21.style.backgroundColor = "#000080"
    button21.textContent="Stuttgart"
}

if (document.cookie.indexOf('btn22Opened=') + 1)
{
    button22.style.backgroundColor = "#000080"
    button22.textContent="Hamburg"
}

if (document.cookie.indexOf('btn23Opened=') + 1)
{
    button23.style.backgroundColor = "#000080"
    button23.textContent="Munich"
}

if (document.cookie.indexOf('btn24Opened=') + 1)
{
    button24.style.backgroundColor = "#000080"
    button24.textContent="Berlin"
}

/*
 * General utils for managing cookies in Typescript.
 */
function setCookie(name: string, val: string) {
    const date = new Date();
    const value = val;

    // Set it expire in 7 days
    date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));

    // Set it
    document.cookie = name+"="+value+"; expires="+date.toUTCString()+"; path=/";
}

function getCookie(name: string) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    
    if (parts.length == 2) {
        return parts.pop().split(";").shift();
    }
}

function deleteCookie(name: string) {
    const date = new Date();

    // Set it expire in -1 days
    date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));

    // Set it
    document.cookie = name+"=; expires="+date.toUTCString()+"; path=/";
}