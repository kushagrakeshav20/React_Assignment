var str = '({"fname" : "Virat", "lname" : "Kohli"})';

var obj = eval(str);
//testing if its working like object
obj.lname="Dhoni"
document.write(obj.fname + " " + obj.lname);