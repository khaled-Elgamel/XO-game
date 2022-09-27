
let turn='x';
let title= document.querySelector('.title')
let square= []


function setnum(num1,num2,num3)
{

    document.getElementById('item'+num1).style.backgroundColor='black';
    document.getElementById('item'+num2).style.backgroundColor='black';
    document.getElementById('item'+num3).style.backgroundColor='black';
    title.innerHTML=`${square[num1]} Winner`;
    setInterval(function(){title.innerHTML += '.'},1000);
    setTimeout(function(){location.reload()},4000);
    turn='final'
}

function winner(){

for (let i = 1; i <10; i++) {
    square[i]=document.getElementById('item'+i).innerHTML;
}

if(square[1]==square[2] &&square[2]==square[3] && square[1]!=''){

    setnum(1,2,3);
}
else if(square[4]==square[5] &&square[5]==square[6] && square[4]!=''){

    setnum(4,5,6);
}
else if(square[7]==square[8] &&square[8]==square[9] && square[7]!=''){

    setnum(7,8,9);
}

else if(square[1]==square[4] &&square[4]==square[7] && square[1]!=''){

    setnum(1,4,7);
}
else if(square[2]==square[5] &&square[5]==square[8] && square[2]!=''){

    setnum(2,5,8);
}
else if(square[3]==square[6] &&square[6]==square[9] && square[3]!=''){

    setnum(3,6,9);
}


else if(square[1]==square[5] &&square[5]==square[9] && square[1]!=''){

    setnum(1,5,9);
}


else if(square[3]==square[5] &&square[5]==square[7] && square[3]!=''){

    setnum(3,5,7);
}

else if(square[1]!='' && square[2]!='' && square[3]!='' && square[4]!='' && square[5]!='' && square[6]!='' && square[7]!='' && square[8]!='' &&square[9]!='')
{
    title.innerHTML='draw';
    setInterval(function(){title.innerHTML += '.'},1000);
    setTimeout(function(){location.reload()},4000);

}


}


function game(id)
{
    element=document.getElementById(id);
    if(turn=='x' && element.innerHTML=='')
    {
        element.innerHTML='x';
        turn='o';
        title.innerHTML='o'
    }

    else if(turn=='o' && element.innerHTML=='')
    {
        element.innerHTML='o';
        turn='x';
        title.innerHTML='x'
    }

   
    winner();



}