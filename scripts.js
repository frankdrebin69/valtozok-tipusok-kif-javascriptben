let age = 2021 - 1999 
let ww2 = 1945 - 1939
let tesla = 76 * 647.1
let secondsOfDay = 60 * 60 * 24
let hungarians = 9700000 / 7852267600
let bigger = 9640821 / 78866
let participants = 654 % 7

document.getElementById("age").innerHTML = age + " éves vagyok"
document.getElementById("ww2").innerHTML = ww2 + " évig tartott a 2. világháború "
document.getElementById("tesla").innerHTML = tesla + " $-ba kerül 76 Tesla részvény 2021. 07. 21-én "
document.getElementById("secondsOfDay").innerHTML = secondsOfDay + " másodperc van egy napon "
document.getElementById("hungarians").innerHTML = hungarians + " % a magyar lakosság aránya a Föld népességéhez képest 2021. 07. 21-én "
document.getElementById("bigger").innerHTML = bigger + " -szer nagyobb Kína területe Csehország területéhez képest "
document.getElementById("participants").innerHTML = participants + " fős lesz a legkisebb Discord csatorna "

let names = ['Ferenc', 'Viktor', 'Gergely']
let names3hossz = names[2].length
names.push('Klára')
names[0] = 'Peti'
let namesTobb = names.length

document.getElementById("names").innerHTML = " A names tömb elemei: " + names
document.getElementById("names3hossz").innerHTML = "A tömb 3. eleme: " + names[2] + " ami " + names3hossz + " karakter hosszú "
document.getElementById("namesTobb").innerHTML = "A names tömbben " + namesTobb + " elem van "

let firstobject = {
    colors: ["red", "blue", "orange", "yellow"]
}

if (firstobject.colors.length > 3) {
    firstobject.hasManyColors = true
} else {
    firstobject.hasManyColors = false
}


document.getElementById("firstobject").innerHTML = "A firstobject objektum első adatmezője: " + firstobject.colors
document.getElementById("booleanertek").innerHTML = "A hasManyColors mező értéke: " + firstobject.hasManyColors


 



 