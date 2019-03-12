function validation() {
	var result=true;
	var x=document.getElementById('pass');
	var y=document.getElementById('cnf');
	var x1=String(x.value);
	var y1=String(y.value);
	if(x1!=y1)
	{
		alert("password is not match");
		result=false;
	}
	return result;
}