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
	let dat = new Date ('2025-12-31');
	let datFormate = dat.getDate() + '/' + Number(dat.getMonth()+1) + '/' + dat.getFullYear()
	document.write('<b>Было:</b><br>2025-12-31<br><b>Стало:</b><br>' + datFormate);
};
//Task 3
function task3() {
	document.write(`Метод substr - отрезает начиная с указанного символа на указанную длину.<br>
		Метод substring - отрезает начиная с указанного символа по указанный символ.<br>
		Метод slice - отрезает от начала строки и (или) с её конца.
		<br><br>`)
	let str = 'Я учу javascript!';
	document.write ('<b>Метод substr:</b> ' + str.substr(2, 3) + ' ' + str.substr(6, 10) + '<br>');
	document.write ('<b>Метод substring:</b> ' + str.substring(2, 5) + ' ' + str.substring(6, 16) + '<br>');
	document.write ('<b>Метод slice:</b>' + str.slice(2,-12) + ' ' + str.slice(6,-1) + '<br>');
};
//Task 4
function task4() {
	document.write(`Есть переменная массив arr.<br>
		Создаем переменную для записи результата.<br>
		С помощью цикла for от 0 до конца массива arr считаем сумму кубов чисел Math.pow(arr[i], 3).<br>
		Из результата вычисляем квадратный корень Math.sqrt(result).<br>
		При отображении ответа дополнительно округляем значение до 2 чисел после запятой методом toFixed(2).
		<br><br>`)
	let arr = [4, 2, 5, 19, 13, 0, 10];
	let result = 0;
	for (let i = 0; i < arr.length; i++) {
		result += Math.pow(arr[i], 3);
	}
	result = Math.sqrt(result);
	document.write ('<b>Ответ:</b>' + result.toFixed(2) + '<br>');
};
//Task 5
//функция-решение задачи
function task5_1(a,b) {
	let c = Math.abs(a - b);
	return c;
};
//функция для отображения в документе и установкой аргументов
function task5_2() {
	document.write(`Т.к. нас просят сделать 1 действие 2 раза, 
		в качестве решения создадим функцию.<br>
		Создаем функцию с 2 аргументами A и B.<br>
		Создаем переменную С и присваимаем ей модуль разности (A - B) с 
		помощью объекта Math с методом abs Math.abs(a - b)<br>
		Вызываем функцию с требуемыми значениями по условию задания.
		<br><br>`)
	document.write('<b>Ответ:</b> ' + task5_1(3,5) + '<br>');
	document.write('<b>Ответ:</b> ' + task5_1(6,1) + '<br>');
};
//Task 6
function task6() {
	document.write(`В переменную dateNow вывели значение текущего времени из системных настроек ПК.<br>
		Создан массив time в который записываем требуемые значения 
		(часы, мин, сек, дни, мес, год) с помощью различных методов (getHours, getMinutes, getSeconds и т.д.).<br>
		В качестве особенности месяцы считаются от 0, для этого переводим строку в число и 
		добавляем +1 (Number(dateNow.getMonth() + 1)).<br>
		Внутри цикла for от 0 до конца массива проверяем являются ли числа массива < 10,
		если условие выполнено добавляем к значению строку '0'.<br>
		В новой переменной nowFormate отображаем время в требуемом формате по условию задания.
		<br><br>`)
	let dateNow = new Date();
	//массив с датой для удобной проверки на значение < 10
	let time = [];
	time[0] = dateNow.getHours();
	time[1] = dateNow.getMinutes();
	time[2] = dateNow.getSeconds();
	time[3] = dateNow.getDate();
	time[4] = Number(dateNow.getMonth() + 1); //специально для правильного счета месяца
	time[5] = dateNow.getFullYear(); //технически лишено смысла, но просто для красоты кода
	for (let i = 0; i < time.length; i++) {
		if (time[i] < 10) time[i] = '0' + time[i];
	}
	let nowFormate = 
	time[0] + ':' + 
	time[1] + ':' + 
	time[2] + ' ' + 
	time[3] + '.' + 
	time[4] + '.' + 
	time[5];
	document.write(`<b>${nowFormate}</b>`);
};
//Task 7
//Task 8
//Task 9
//Task 10