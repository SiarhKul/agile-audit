const ss = SpreadsheetApp.getActiveSpreadsheet();
console.log(ss);
const lastRow = ss.getLastRow();
const lastColumn = ss.getLastColumn();

// ТАБЛИЦА С ОТВЕТАМИ ЗАКАЗЧИКА
const sheet = ss.getSheetByName("answersCustomer");
const [namesColumns] = sheet.getRange(1, 1, 1, lastColumn).getValues(); // получение имент колонок ответов заказчкика
const [lastAnswers] = sheet.getRange(lastRow, 1, 1, lastColumn).getValues();
const userLastAnswers = Object.assign(
	...namesColumns.map((n, i) => ({ [n]: lastAnswers[i] }))
); //объект с ответами последнего заказчика

//TАБЛИЦА C ОТВЕТАМИ EXADEL
const sheetAnserExadel = ss.getSheetByName("answersCompany");
const lastRowAnswerExade = sheetAnserExadel.getLastRow(); //получаем последний ряд
const sheetNameColumnAnserExadel = sheetAnserExadel.getRange(
	1,
	1,
	1,
	lastColumn
); //получаем диапазон от 1 до последней колонки
const [sheetNameColumnAnserExadelGetedValue] =
	sheetNameColumnAnserExadel.getValues(); //получаем значения от 1 до последней колонки
const sheetNameColumnAnserExadelSetedValue =
	sheetNameColumnAnserExadel.setValues([namesColumns]); //устанавливаем название колонок
const exadelLastAnsersRow = sheetAnserExadel.getRange(
	lastRowAnswerExade + 1,
	1,
	1,
	lastColumn
); //получаем диапазон  последнего ряда.
const assignedValue = exadelLastAnsersRow.setValues([lastAnswers]); //устанавливаем заначения в последний ряд

// ТАБЛИЦА С ВАРИАНТАМИ ОТВЕТОВ НА ОТВЕТЫ ЗАКАЗЧИКА
const sheetAnswers = ss.getSheetByName("answersToAnswers");
const lastNameColumns = sheetAnswers.getLastColumn();
const [namesColumnsAnswers] = sheetAnswers
	.getRange(1, 1, 1, lastNameColumns)
	.getValues(); // получение имен вариатов ответов

const amountToTakeRows = sheetAnswers.getLastRow();
const amountToTakeColumns = sheetAnswers.getLastColumn();
const exadelLastAnsers = sheetAnserExadel
	.getRange(lastRowAnswerExade + 1, 1, 1, 18)
	.getValues();

//АЛГОРИТМ ЗАМЕНЫ ОТВЕТОВ ЗАКАЗЧКИКА НА ОТВЕТЫ КОМПАНИИ
namesColumnsAnswers.forEach((nameColumn, i) => {
	const unswerCustomer = userLastAnswers[nameColumn]; //ответ заказчкика
	const variantsAnswers = sheetAnswers
		.getRange(1, i + 1, amountToTakeRows, 2)
		.getValues(); //варианты ответов
	if (i % 2 === 0) {
		const answersToAnswers = createObj(variantsAnswers); //создание объекта с названием ответа и ответа
		const indexRowAnswerExadel =
			sheetNameColumnAnserExadelGetedValue.indexOf(nameColumn); //получаем индекс колонки вопроса
		const changedCellAnserExadel = sheetAnserExadel.getRange(
			lastRowAnswerExade + 1,
			indexRowAnswerExadel + 1
		); //получаем ячейку где нужно поменять значение.
		const changedCellValue = changedCellAnserExadel.setValue(
			answersToAnswers[unswerCustomer]
		); //меняем значение ответа заказчкика на ответ компании
	}
});

// АЛГОРИТМ ДОБАВЛЕНИЯ ОТВЕТОВ В ТЕЛО ПИСЬМА
const [gettedLastAnswerExadelUpdated] = exadelLastAnsersRow.getValues(); //получаем ответы последнего компании

console.log(gettedLastAnswerExadelUpdated);

const exadelLastAnswers = Object.assign(
	...sheetNameColumnAnserExadelGetedValue.map((n, i) => ({
		[n]: gettedLastAnswerExadelUpdated[i],
	}))
); //объект с ответами компании на ответы заказчкика

const email = exadelLastAnswers["Email"];
const bodyEmail = createBodyEmail(exadelLastAnswers);
