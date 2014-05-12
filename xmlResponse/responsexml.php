<?php
$q=$_GET["q"];

$con = mysql_connect('localhost', 'root', '');
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

mysql_select_db("temp1", $con);

$sql="SELECT * FROM employee WHERE id = ".$q;

$result = mysql_query($sql);

echo "<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?>
<person>";
while($row = mysql_fetch_array($result))
  {
  echo "<firstname>" . $row['FirstName'] . "</firstname>";
  echo "<lastname>" . $row['LastName'] . "</lastname>";
  echo "<age>" . $row['Age'] . "</age>";
  echo "<hometown>" . $row['Hometown'] . "</hometown>";
  echo "<job>" . $row['Job'] . "</job>";
  }
echo "</person>";

mysql_close($con);
?> 