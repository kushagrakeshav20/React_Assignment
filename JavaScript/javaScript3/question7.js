var str = '{"fname" : "Virat", "lname" : "Kohli"}';
var obj=JSON.parse(str);

obj.lname="Dhoni"
document.write(obj.fname + " " + obj.lname);



