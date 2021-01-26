
var num = "";
var ans=0;

function sendnum(digit){

	num+=digit;
document.getElementById('screen').innerHTML = num;		
}
function equalTo(){
	document.getElementById('screen').innerHTML = '';
	ans = eval(num);	
    document.getElementById('screen').innerHTML = ans;		
    num="";
	num+=ans.toString();	
}

function clearScreen(){
	document.getElementById('screen').innerHTML = '';
	num="";
}