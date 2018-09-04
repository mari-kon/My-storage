var name = prompt('Введите ваше имя', '');

function changeCase() {
  var arr = name.split('');

  for (var i = 0; i < arr.length; i++) {

    if (i % 2 == 0) {
      arr[i]= arr[i].toUpperCase();
    } else {
  	arr[i]= arr[i].toLowerCase();
    }
  }

  alert (arr.join(''));
} 

if (/\d/.test(name)) {
  changeCase ();
} else {
  alert (name.split('').reverse().join(''));
}
