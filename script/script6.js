//Скрипт позволяющий переключать стиль элемента при нажатии на чек-бокс "Задание проверено"
function approved(i) {
let chbox = document.getElementById(`div${i}`);
let chAppr = document.getElementById(`checkAproved${i}`);
chbox.classList.toggle('approved');
chAppr.classList.toggle('checkAproved');
};

//Task 1
function task1() {
	document.write(`Есть переменная с текстом str = 'aaa@bbb@ccc'.<br>
		Добавляем переменную newStr, в которую записываем обновленную строку с помощью метода replaceAll.<br>
		Отображаем.
		<br><br>`)
	let str = 'aaa@bbb@ccc';
	let newStr = str.replaceAll('@','!');
	document.write('<b>Было:</b><br>' + str + '<br><b>Стало:</b><br>' + newStr);
};
//Task 2
function task2() {
	document.write(`Есть дата = '2025-12-31'.<br>
		Переводим строку в дату, присваиваем переменной (date) объект new Date('2025-12-31').<br>
		Производим записи в новую переменную (dateFormate) используя методы getDate, getMonth, getMonth.<br>
		При этом месяцы появляются в диапазоне от 0 до 11, поэтому использеум конструкцию Number(date.getMonth()+1),<br>
		т.е. переводим строку в число и прибавляем +1. В строке между значениями вставляем слэш.
		<br><br>`)
	let date = new Date ('2025-12-31');
	let dateFormate = date.getDate() + '/' + Number(date.getMonth()+1) + '/' + date.getFullYear()
	document.write('<b>Было:</b><br>2025-12-31<br><b>Стало:</b><br>' + dateFormate);
};
//Task 3
function task3() {

};
//Task 4
//Task 5
//Task 6
//Task 7
//Task 8
//Task 9
//Task 10