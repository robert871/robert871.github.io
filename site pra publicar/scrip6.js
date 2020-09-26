
alert("in code we trust")
 let name= window.prompt("seu nome?")
let dv= window.document.getElementById(`sd`)
function calcular() {
let div =window.document.getElementById(`div`)
let v13 = window.document.getElementById(`n13`)
let v14 = window.document.getElementById(`n14`)
let v1=window.document.getElementById(`n1`)
let v2=window.document.getElementById(`n2`)
let v3=window.document.getElementById(`n3`)
let v4=window.document.getElementById(`n4`)
let v5=window.document.getElementById(`n5`)
let v6=window.document.getElementById(`n6`)
let v7=window.document.getElementById(`n7`)
let v8=window.document.getElementById(`n8`)
let v9=window.document.getElementById(`n9`)
let v10=window.document.getElementById(`n10`)
let v11=window.document.getElementById(`n11`)
let v12= window.document.getElementById(`n12`)
var b14 = Number(v14.value)
let v15= window.document.getElementById(`n15`)
var b15 = Number(v15.value)
var b13 =Number(v13.value)
var b12 = Number(v12.value)
var b1 = Number(v9.value)
var b2 = Number(v10.value)
var b3 =Number (v11.value)
var b6 = Number(v8.value)
var b5 = Number(v7.value)
var b4 =Number (v6.value)
var b7 = Number(v5.value)
var b8 = Number(v4.value)
var b9 =Number (v3.value)

var b10 = Number(v2.value)
var b11 = Number(v1.value)
let r = [b1,b2,b3,b6,b5,b4,b7,b8,b9,b10,b11,b12,b13,b14,b15]
let n =[0,2**0,2**1,2**2,2**3,2**4,2**5,2**6,2**7,2**8,2**9,2**10,2**11,2**12,2**13, 2**14]
switch(b3){
case 1: r[2]=n[1]
break 
case 0: r[2]=0 
break }
switch(b2){
    case 1: r[1]=n[2]
    break 
    case 0: r[1]=0
    break}
    switch(b1){
        case 1: r[0]= n[3]
        break 
        case 0: r[0]=0
        break}
        switch(b6){
            case 1: r[3]=n[4]
            break 
            case 0: r[3]=0
            break}
            switch(b5){
                case 1: r[4]= n[5]
                break 
                case 0: r[4]=0
                break}
         //      parte 2
          switch(b4){
                    case 1: r[5]=n[6]
                    break 
                    case 0: r[5]=0
                    break}
                    switch(b7){
                        case 1: r[6]=n[7]
  break
case 0 : r[6]=0
break}
                        switch(b8) {                   
 case 1: r[7]= n[8]
break
case 0: r[7]=0
break }
switch(b9){
    case 1: r[8]=n[9]
    break 
    case 0: r[8]=0
    break}
    switch(b10){
        case 1: r[9]=n[10]
        break 
        case 0: r[9]=0
        break}
        switch(b11){
            case 1: r[10]=n[11]
            break 
            case 0: r[10]=0
            break}
            switch(b12){
                case 1: r[11]=n[12]
                break 
                case 0: r[11]=0
                break}
                switch(b13){
                    case 1: r[12]=n[13]
                    break 
                    case 0: r[12]=0
                    break}
                    switch(b14){
                        case 1: r[13]=n[14]
                        break 
                        case 0: r[13]=0
                        break}
                        switch(b15){
                            case 1: r[14]=n[15]
                            break 
                            case 0: r[14]=0
                            break}
               

                    let res = r[1]+r[2]+r[0]+r[3]+r[4]+r[5]+r[6]+r[7]+r[8]+r[9]+r[10]+r[11]+r[12]+r[13]+r[14]
div.innerHTML=res }
dv.innerHTML=(`Bem vindo, ${name}!! Essa página é meramente didática.`)
            
