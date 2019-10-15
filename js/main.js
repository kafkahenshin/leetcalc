function insert(n){
    var exp=document.form.textview.value;
    if(exp.length>=10){
        document.form.previousexp.value="invalid input";
        return;
    }
    if(n=="."&&document.form.textview.value==""){
        document.form.textview.value="0.";
    }else if(document.form.textview.value=="0"&&n!='.'){
        document.form.textview.value=n;
    }else if(document.form.textview.value==""&&!(n=='/'||n=='*'||n=='+')){
        document.form.textview.value=n;
    }
        else{
        document.form.textview.value=document.form.textview.value + n;
        }
}

function clean(){
    document.form.textview.value="";
    document.form.previousexp.value="";
}
function bsp(){
    var exp=document.form.textview.value;
    document.form.textview.value= exp.substring(0,exp.length-1);
}
function equals(){
    var exp=document.form.textview.value;
    if(eval(exp)==Infinity){
        document.form.textview.value="";
        document.form.previousexp.value=":division by zero";
    }
    else if(exp){
        document.form.textview.value=eval(exp);
        document.form.previousexp.value=exp;
    }
}