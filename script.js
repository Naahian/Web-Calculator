var operation1 = document.querySelector('.operation1');
var operation2 = document.querySelector('.operation2');
var syntax = [];
var number = '';

function numKey(num='0'){
    if(operation2.innerText!='') erase();
    if(number.includes('.') && num=='.') return;

    number+=num;
    operation1.innerText += num;
    console.log(syntax);
}


function signKey(sign=''){
    if(operation2.innerText!='') {operation2.innerText='';  operation1.innerText=number}
    syntax.push(Number(number));
    syntax.push(sign);
    operation1.innerText+=sign;
    number='';

}


function erase(){
    operation1.innerText='';
    operation2.innerText='';
    syntax = [];
    number = '';
}


function calculate(){
    syntax.push(Number(number));
    for(i = 0 ;i<syntax.length; i++){
        if(syntax[i]=='/') syntax[i+1]=syntax[i-1]/syntax[i+1], syntax.splice(i-1,2), i=0; 
    }

    for(i = 0 ;i<syntax.length; i++){
        if(syntax[i]=='x') syntax[i+1]=syntax[i-1]*syntax[i+1],syntax.splice(i-1,2), i=0;  
    }

    for(i = 0 ;i<syntax.length; i++){
        if(syntax[i]=='+') syntax[i+1]=syntax[i-1]+syntax[i+1],syntax.splice(i-1,2), i=0;
        else if(syntax[i]=='-') syntax[i+1]=syntax[i-1]-syntax[i+1],syntax.splice(i-1,2), i=0;
    }

    
    operation2.innerText = syntax;
    number = syntax;
    syntax = [];

}
