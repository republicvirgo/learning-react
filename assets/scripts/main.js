//Numbers
var myAge = 17;

//Strings
var dolphinGoodbye = 'So long and thanks for all the fish';
//---------------------------------------------

//Booleans
var iAmAlive = true;
//---------------------------------------------

//Arrays
var myNameArray = ['Chris', 'Bob', 'Jim'];
var myNumberArray = [10,15,40];
var random = ['tree', 795, [0, 1, 2]];

console.log(myNameArray[0]); //Chris
console.log(myNumberArray[2]); //40
console.log(random[2][1]); //1

myArraystring = myNameArray.toString();
myArraySplit = myArraystring.split(',');
myArrayJoin = myArraySplit.join(' - ');

console.log(myArraystring); //"Chris", "Bob", "Jim"
console.log(myArraySplit); //0:"Chris" 1:"Bob" 2:"Jim"
console.log(myArrayJoin); //Chris - Bob - Jim

var list = document.querySelector('.output ul');
list.innerHTML = '';
var days = ['Senin',
	'selasa',
	'Rabu',
	'kamis',
	'juma\'at',
	'Sabtu',
	'minggu'];

for(var i = 0; i < days.length; i++) {
	var day = days[i];
	var lower = day.toLowerCase();
	var firstLetter = lower.slice(0,1);
	var capitalized = lower.replace(firstLetter,firstLetter.toUpperCase());
	
	var listItem = document.createElement('li');
	listItem.textContent = capitalized;
	list.appendChild(listItem);
}

var myArray = ['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle'];

// tambah array item di belakang dari array list
myArray.push('Cardiff');
console.log(myArray); //["Manchester", "London", "Liverpool", "Birmingham", "Leeds", "Carlisle", "Cardiff"]

myArray.push('Bradford', 'Brighton');
console.log(myArray); //["Manchester", "London", "Liverpool", "Birmingham", "Leeds", "Carlisle", "Cardiff", "Bradford", "Brighton"]

// hapus array item terakhir dari array list
myArray.pop();
console.log(myArray); //["Manchester", "London", "Liverpool", "Birmingham", "Leeds", "Carlisle", "Cardiff", "Bradford"]

// tambah array item di depan dari array list
myArray.unshift('Edinburgh');
console.log(myArray); //["Edinburgh", "Manchester", "London", "Liverpool", "Birmingham", "Leeds", "Carlisle", "Cardiff", "Bradford"]

// hapus array item diawal dari array list 
myArray.shift();
console.log(myArray); //["Manchester", "London", "Liverpool", "Birmingham", "Leeds", "Carlisle", "Cardiff", "Bradford"]
//---------------------------------------------

//Objects
var dog = { name : 'Spot', breed : 'Dalmatian' };
console.log(dog.name); //Spot
//---------------------------------------------

//json
var list = document.querySelector('.output3 ul');
var totalBox = document.querySelector('.output3 p');
var total = 0;
list.innerHTML = '';
totalBox.textContent = '';
myObj = '';

myObj = {
	"wear" : [
		{ "product":"Underpants", "price":6.99 },
		{ "product":"Socks", "price":5.99 },
		{ "product":"T-shirt", "price":14.99 },
		{ "product":"Trousers", "price":31.99 },
		{ "product":"Shoes", "price":23.99 }
	]
}

for (i in myObj.wear) {
	var product = myObj.wear[i].product;
	var price = myObj.wear[i].price;

	total += price;
	productItem = product + ' - $' + price;

	var listItem = document.createElement('li');
    listItem.textContent = productItem;
	list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);


var obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');
document.getElementById("output4").innerHTML = obj.name + ", " + obj.age + ", " + obj.city;
//---------------------------------------------

//Numbers to strings
var myNum = 123;
var myString = myNum.toString();
typeof myString;

console.log(typeof myString); //string
//---------------------------------------------

var browserType = 'mozilla';
result = browserType.length;

console.log(result); //7
console.log('huruf depan = ' + browserType[0]); //m
console.log(typeof result); //number
console.log('huruf terakhir = ' + browserType[browserType.length-1]); //a
//---------------------------------------------

//cetak index number dari strings
indexof = browserType.indexOf('zilla');
console.log(indexof); //2

slice1 = browserType.slice(0,3);
slice2 = browserType.slice(2)
console.log(slice1 + slice2); //mozzilla

var mainlist = document.querySelector('.output2');

mainlist.innerHTML = '';
var stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
	'GNF576746573fhdg4737dh4;Greenfield',
	'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
	'SYB4f65hf75f736463;Stalybridge',
	'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

mainlist.appendChild(document.createElement('ul'));

var list = document.querySelector('.output2 ul');
list.innerHTML = '';

for(var i = 0; i < stations.length; i++) {
	var input = stations[i];
	var code = input.slice(0,3);
	var semicolon = input.indexOf(';');
	var name = input.slice(semicolon + 1);
	var result = code + ': ' + name;
	var listItem = document.createElement('li');
	
	listItem.textContent = result;
	list.appendChild(listItem);
}
//---------------------------------------------

// variabel + alert
var myVariable = document.querySelector('h1');
alert(myVariable.textContent);
//---------------------------------------------

// ganti text yg ada di dalam H1
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
//---------------------------------------------

// kondisi dengan if else
var iceCream = 'dddd';
if (iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');    
} else {
  alert('Awwww, but chocolate is my favorite...');    
}
//---------------------------------------------

// function
function multiply(num1,num2) {
  var result = num1 * num2;
  return result;
}

// jalankan function dengan nilai parameter
document.querySelector('h2').innerHTML = multiply(0.5,7);
