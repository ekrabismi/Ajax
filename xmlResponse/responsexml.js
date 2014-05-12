var xmlhttp;

function showUser(str)
{
xmlhttp=GetXmlHttpObject();
if (xmlhttp==null)
  {
  alert ("Browser does not support HTTP Request");
  return;
  }
var url="responsexml.php";
url=url+"?q="+str;
url=url+"&sid="+Math.random();
xmlhttp.onreadystatechange=stateChanged;
xmlhttp.open("GET",url,true);
xmlhttp.send(null);
}

function stateChanged()
{
if (xmlhttp.readyState==4)
  {
  xmlDoc=xmlhttp.responseXML;
  document.getElementById("firstname").innerHTML=
  xmlDoc.getElementsByTagName("firstname")[0].childNodes[0].nodeValue;
  document.getElementById("lastname").innerHTML=
  xmlDoc.getElementsByTagName("lastname")[0].childNodes[0].nodeValue;
  document.getElementById("job").innerHTML=
  xmlDoc.getElementsByTagName("job")[0].childNodes[0].nodeValue;
  document.getElementById("age_text").innerHTML="Age: ";
  document.getElementById("age").innerHTML=
  xmlDoc.getElementsByTagName("age")[0].childNodes[0].nodeValue;
  document.getElementById("hometown_text").innerHTML="<br/>From: ";
  document.getElementById("hometown").innerHTML=
  xmlDoc.getElementsByTagName("hometown")[0].childNodes[0].nodeValue;
  }
}

function GetXmlHttpObject()
{
if (window.XMLHttpRequest)
  {
  // code for IE7+, Firefox, Chrome, Opera, Safari
  return new XMLHttpRequest();
  }
if (window.ActiveXObject)
  {
  // code for IE6, IE5
  return new ActiveXObject("Microsoft.XMLHTTP");
  }
return null;
}