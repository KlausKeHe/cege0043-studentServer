function startDataUpload(){
	alert ("start data upload");
	var name = document.getElementById("name").value;
	var surname = document.getElementById("surname").value;
	var module = document.getElementById("module").value;
	var postString = "name="+name +"&surname="+surname+"&module="+module;
	alert (postString);
	processData(postString);
	// now get th e checkedbox values - separate them with a I sothat they can be splt later on if necessary
	var checkString = ""
	for (var i = 1;i<5;i++){
		if (document.getElementById("check"+i).checked === true){
	checkString = checkString + document.getElementById("check"+i).value + "||"}}
	postString = postString +"&modulelist="+checkString;
	// now get the radio button values
	if (document.getElementById("morning").checked){
	postString = postString + "&lecturetime=morning";}
	if (document.getElementById("afternoon").checked){
	postString = postString + "&lecturetime=afternoon";}
	
	// now get the select box values
	var language = document.getElementById("languageselectbox").value;
	postString = postString + "&language="+language;
	
	// now get the geometry values
	var latitude = document.getElementById("latitude").value;
	var longitude = document.getElementById("longitude").value;
	postString = postString + "&latitude" + latitude + "&longitude" + longitude;

}

var client; // the global variable that holds the request
function processData(postString){
	client=new XMLHttpRequest();
	client.open('POST','http://developer.cege.ucl.ac.uk:30278/reflecData'.true);
	client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	client.send(postString);
p}
// create the code to wait for the response from the data server, and process the response once it is received.
function dataUpload(){
	// this function listen out for the server to say that the data is ready - i.e. has state 4
	if (client.readyState == 4){
		// change the DIV to show the response
 document.getElementById("dataUploadResult").innerHTML = client.responseText;
 }
}

functionprocessData(postString){
	client - new XMLHttpRequest();
	postString = postString +"&port_id=" + httpPortNumber;
	var url = 'http://developer.cege.ucl.ac.uk:'+httpPoerNumber+"/uoloadData";
	client.open('POST',url,true);
	client.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	client.onreadystatechange=dataUploaded;
	client.send(postString);
}

app.post('/uploadData',function(req,res){
	// note that we are using post here as we are uploading data, so the parameters form part of the body of teh rquest rather than the restful API
	console.dir(req,body);
	pool.connect(function(err,client,done){
		if(err){
			console.log("not able to get connection "+ err);
			res.status(400).send(err);
		}

