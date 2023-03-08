let table= document.createElement("table")
table.className="calculator";

let tr1=document.createElement('tr')

let td1= document.createElement("td")
td1.setAttribute("colspan","3")
let input1= document.createElement("input")
input1.className="input-display";
input1.setAttribute("type","text" )
input1.setAttribute("id","result")
input1.setAttribute("disabled","true")
input1.setAttribute("placeholder","enter the value")
 
td1.appendChild(input1)

let td2=document.createElement("td")
let input2=document.createElement("input")
input2.className='button';
input2.setAttribute("type","button")
input2.setAttribute("value","c")
input2.setAttribute("onclick","earse()")
input2.setAttribute("style", "background-color: #FF0000"); 
td2.appendChild(input2)

tr1.append(td1,td2)

let tr2=document.createElement("tr")

let td3=document.createElement("td")
let input3= document.createElement("input")
input3.className="button";
input3.setAttribute("type","button")
input3.setAttribute("value","1")
input3.setAttribute("onclick","show('1')")
input3.setAttribute("id","1")

td3.appendChild(input3)


let td4=document.createElement("td")
let input4= document.createElement("input")
input4.className="button";
input4.setAttribute("type","button")
input4.setAttribute("value","2")
input4.setAttribute("onclick","show('2')")
input4.setAttribute("id","2")

td4.appendChild(input4)

let td5=document.createElement("td")
let input5= document.createElement("input")
input5.className="button";
input5.setAttribute("type","button")
input5.setAttribute("value","3")
input5.setAttribute("onclick","show('3')")
input5.setAttribute("id","3")

td5.appendChild(input5)


let td6=document.createElement("td")
let input6= document.createElement("input")
input6.className="button";
input6.setAttribute("type","button")
input6.setAttribute("value","/")
input6.setAttribute("onclick","show('/')")
input6.setAttribute("id","divide")

td6.appendChild(input6)

tr2.append(td3,td4,td5,td6)


let tr3= document.createElement('tr')

let td7=document.createElement("td")
let input7= document.createElement("input")
input7.className="button";
input7.setAttribute("type","button")
input7.setAttribute("value","4")
input7.setAttribute("onclick","show('4')")
input7.setAttribute("id","4")

td7.appendChild(input7)

let td8=document.createElement("td")
let input8= document.createElement("input")
input8.className="button";
input8.setAttribute("type","button")
input8.setAttribute("value","5")
input8.setAttribute("onclick","show('5')")
input8.setAttribute("id","5")

td8.appendChild(input8)

let td9=document.createElement("td")
let input9= document.createElement("input")
input9.className="button";
input9.setAttribute("type","button")
input9.setAttribute("value","6")
input9.setAttribute("onclick","show('6')")
input9.setAttribute("id","6")

td9.appendChild(input9)

let td10=document.createElement("td")
let input10= document.createElement("input")
input10.className="button";
input10.setAttribute("type","button")
input10.setAttribute("value","+")
input10.setAttribute("onclick","show('+')")
input10.setAttribute("id","add")

td10.appendChild(input10)

tr3.append(td7,td8,td9,td10)

let tr4= document.createElement('tr')

let td11=document.createElement("td")
let input11= document.createElement("input")
input11.className="button";
input11.setAttribute("type","button")
input11.setAttribute("value","7")
input11.setAttribute("onclick","show('7')")
input11.setAttribute("id","7")

td11.appendChild(input11)

let td12=document.createElement("td")
let input12= document.createElement("input")
input12.className="button";
input12.setAttribute("type","button")
input12.setAttribute("value","8")
input12.setAttribute("onclick","show('8')")
input12.setAttribute("id","8")

td12.appendChild(input12)

let td13=document.createElement("td")
let input13= document.createElement("input")
input13.className="button";
input13.setAttribute("type","button")
input13.setAttribute("value","9")
input13.setAttribute("onclick","show('9')")
input13.setAttribute("id","9")

td13.appendChild(input13)

let td14=document.createElement("td")
let input14= document.createElement("input")
input14.className="button";
input14.setAttribute("type","button")
input14.setAttribute("value","-")
input14.setAttribute("onclick","show('-')")
input14.setAttribute("id","subract")

td14.appendChild(input14)


tr4.append(td11,td12,td13,td14)

let tr5= document.createElement('tr')

let td15=document.createElement("td")
let input15= document.createElement("input")
input15.className="button";
input15.setAttribute("type","button")
input15.setAttribute("value","0")
input15.setAttribute("onclick","show('0')")
input15.setAttribute("id","0")

td15.appendChild(input15)

let td16=document.createElement("td")
let input16= document.createElement("input")
input16.className="button";
input16.setAttribute("type","button")
input16.setAttribute("value",".")
input16.setAttribute("onclick","show('.')")
input16.setAttribute("id",".")

td16.appendChild(input16)

let td17=document.createElement("td")
let input17= document.createElement("input")
input17.className="button";
input17.setAttribute("type","button")
input17.setAttribute("value","=")
input17.setAttribute("onclick","result()")
input17.setAttribute("id","equal")

td17.appendChild(input17)

let td18=document.createElement("td")
let input18= document.createElement("input")
input18.className="button";
input18.setAttribute("type","button")
input18.setAttribute("value","*")
input18.setAttribute("onclick","show('*')")
input18.setAttribute("id","multiply")

td18.appendChild(input18)

tr5.append(td15,td16,td17,td18)

table.append(tr1,tr2,tr3,tr4,tr5)

document.body.append(table)

function earse(){
    document.getElementById("result").value="";

}

function show(number){
    document.getElementById("result").value +=number;
}
function result(){
    let dragon=document.getElementById("result").value;
    let avengers= eval(dragon);
   document.getElementById("result").value=avengers;
}