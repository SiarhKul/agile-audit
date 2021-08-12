// function onSubmit() {
// 	const existingForm = FormApp.openById(
// 		"1uesbmoaUO6iaklFZU4H5yowQJrphmCYjgQtvR9I1o_o"
// 	);
// 	const formResponses = existingForm.getResponses();
// 	const formResponse = formResponses[formResponses.length - 1];
// 	const itemResponses = formResponse.getItemResponses();
// 	const itemResponse = itemResponses[3];
// 	const emailRespondent = itemResponse.getResponse();
// 	const section = existingForm.getItems(FormApp.ItemType.PAGE_BREAK);

// 	const htmlTemplate = HtmlService.createTemplateFromFile("index");
// 	// передаем все названия секций в html шаблон
// 	htmlTemplate.section = createTitleSection(section);
// 	// передаем все описания секций в html шаблон
// 	htmlTemplate.description = createDescriptionSection(section);
// 	// передаем дату footer в html шаблон
// 	htmlTemplate.date = currentYear();

// 	const htmlForEmail = htmlTemplate.evaluate().getContent();
// 	const theme = "Test mini app-Agile Audit";
// 	// ОТПРАВКА ПИСЬМА
// 	MailApp.sendEmail({
// 		to: emailRespondent,
// 		subject: theme,
// 		htmlBody: htmlForEmail,
// 	});

// 	const responses=existingForm.getResponses()
// 	const email = responses[responses.length-1]

// 	Logger.log(existingForm.getItems(FormApp.ItemType.PAGE_BREAK)[0]);

// 	// получение описания секции
// 	 console.log(existingForm.getItems(FormApp.ItemType.PAGE_BREAK)[0].getHelpText())

// 	// получение вопроса и ответа последнего пользователя
// 	var form = FormApp.openById('1uesbmoaUO6iaklFZU4H5yowQJrphmCYjgQtvR9I1o_o');
// 	var formResponses = form.getResponses();
// 	var formResponse = formResponses[formResponses.length - 1];
// 	var itemResponses = formResponse.getItemResponses();
// 	for (var j = 0; j < itemResponses.length; j++) {
// 	  var itemResponse = itemResponses[j];
// 	  Logger.log('Response #%s to the question "%s" was "%s"',
// 	    (j + 1).toString(),
// 	    itemResponse.getItem().getTitle(),
// 	    itemResponse.getResponse());
// 	  if (itemResponse.getResponse().includes("80445407847")) {
// 	    console.log("yes-------------------", "80445407847")
// 	  }

// 	}
// 	var itemResponse = itemResponses[10];
// 	console.log(itemResponse.getItem().getTitle())
// 	console.log(itemResponse.getResponse())

// 	console.log(existingForm.getItems(FormApp.ItemType.PAGE_BREAK))

// 	// название вопроса
// 	Logger.log( existingForm.getItems(FormApp.ItemType.GRID)[20].getTitle());
// 	// название секции
// 	console.log(existingForm.getItems(FormApp.ItemType.PAGE_BREAK)[0].getTitle())
// 	// название вопроса
// 	console.log(existingForm.getResponses()[0].getItemResponses()[16].getItem().getTitle())
// 	// название вопросов
// 	const items =existingForm.getItems()
// 	console.log(items[0].getTitle())
// 	  for(var i in items){
// 	    console.log(items[i].getTitle())
// 	  }

// 	const ss = SpreadsheetApp.getActiveSpreadsheet();
// 	console.log(ss)
// 	const lastRow = ss.getLastRow()
// 	const lastColumn = ss.getLastColumn()

// 	// ТАБЛИЦА С ОТВЕТАМИ ЗАКАЗЧИКА
// 	const sheet = ss.getSheetByName("answersCustomer")
// 	const [namesColumns] = sheet.getRange(1, 1, 1, lastColumn).getValues()// получение имент колонок ответов заказчкика
// 	const [lastAnswers] = sheet.getRange(lastRow, 1, 1, lastColumn).getValues()
// 	const userLastAnswers = Object.assign(...namesColumns.map((n, i) => (
// 	  { [n]: lastAnswers[i] }
// 	)))//объект с ответами последнего заказчика

// 	//TАБЛИЦА C ОТВЕТАМИ EXADEL
// 	const sheetAnserExadel = ss.getSheetByName('answersCompany')
// 	const lastRowAnswerExade = sheetAnserExadel.getLastRow()//получаем последний ряд
// 	const sheetNameColumnAnserExadel = sheetAnserExadel.getRange(1, 1, 1, lastColumn)//получаем диапазон от 1 до последней колонки
// 	const [sheetNameColumnAnserExadelGetedValue] = sheetNameColumnAnserExadel.getValues()//получаем значения от 1 до последней колонки
// 	const sheetNameColumnAnserExadelSetedValue = sheetNameColumnAnserExadel.setValues([namesColumns])//устанавливаем название колонок
// 	const exadelLastAnsersRow = sheetAnserExadel.getRange(lastRowAnswerExade + 1, 1, 1, lastColumn)//получаем диапазон  последнего ряда.
// 	const assignedValue = exadelLastAnsersRow.setValues([lastAnswers])//устанавливаем заначения в последний ряд

// 	// ТАБЛИЦА С ВАРИАНТАМИ ОТВЕТОВ НА ОТВЕТЫ ЗАКАЗЧИКА
// 	const sheetAnswers = ss.getSheetByName("answersToAnswers")
// 	const lastNameColumns = sheetAnswers.getLastColumn()
// 	const [namesColumnsAnswers] = sheetAnswers.getRange(1, 1, 1, lastNameColumns).getValues()// получение имен вариатов ответов

// 	const amountToTakeRows = sheetAnswers.getLastRow()
// 	const amountToTakeColumns = sheetAnswers.getLastColumn()
// 	const exadelLastAnsers = sheetAnserExadel.getRange(lastRowAnswerExade + 1, 1, 1, 18).getValues()

// 	//АЛГОРИТМ ЗАМЕНЫ ОТВЕТОВ ЗАКАЗЧКИКА НА ОТВЕТЫ КОМПАНИИ
// 	namesColumnsAnswers.forEach((nameColumn, i) => {
// 	  const unswerCustomer = userLastAnswers[nameColumn]//ответ заказчкика
// 	  const variantsAnswers = sheetAnswers.getRange(1, i + 1, amountToTakeRows, 2).getValues()//варианты ответов
// 	  if (i % 2 === 0) {
// 	    const answersToAnswers = createObj(variantsAnswers)//создание объекта с названием ответа и ответа
// 	    const indexRowAnswerExadel = sheetNameColumnAnserExadelGetedValue.indexOf(nameColumn)//получаем индекс колонки вопроса
// 	    const changedCellAnserExadel = sheetAnserExadel.getRange(lastRowAnswerExade + 1, indexRowAnswerExadel + 1)//получаем ячейку где нужно поменять значение.
// 	    const changedCellValue = changedCellAnserExadel.setValue(answersToAnswers[unswerCustomer])//меняем значение ответа заказчкика на ответ компании
// 	  }
// 	})

// 	АЛГОРИТМ ДОБАВЛЕНИЯ ОТВЕТОВ В ТЕЛО ПИСЬМА
// 	const [gettedLastAnswerExadelUpdated] = exadelLastAnsersRow.getValues()//получаем ответы последнего компании

// 	console.log(gettedLastAnswerExadelUpdated)

// 	const exadelLastAnswers = Object.assign(...sheetNameColumnAnserExadelGetedValue.map((n, i) => (
// 	  { [n]: gettedLastAnswerExadelUpdated[i] }
// 	)))//объект с ответами компании на ответы заказчкика

// 	const email = exadelLastAnswers['Email']
// 	const bodyEmail = createBodyEmail(exadelLastAnswers)
// }

// / Converting data to vatiables
// const convertToVariables = arr => {
//   return arr?.map(nameCol => {
//     const nameColumnCapitalaze = nameCol
//       .split(/\s+/)
//       .map(word => word[0].toUpperCase() + word.substring(1))
//       .join(" ");
//     const nameColumnFistLaterLowerCase =
//       nameColumnCapitalaze.charAt(0).toLowerCase() +
//       nameColumnCapitalaze.slice(1);

//     const nameColumnHasUselessness = nameColumnFistLaterLowerCase
//       .split(" ")
//       .join("");
//     const namesColumns = nameColumnHasUselessness.replace(
//       "[Please,Select]",
//       ""
//     );
//     return namesColumns;
//   });
// };

// Creating data
// const createObj = (arr) => Object.assign(...arr.map(n => ({ [n[0]]: n[1] })))

// Creating body email
// const createBodyEmail = (obj) => {
//   let str = ``
//   for (key in obj) {
//       str = str + `<li><b>Qestion:</b>${key} - <b>Answer:</b>${obj[key]},</li>`
//   }
//   return `<ol>${str}</ol>`
// }

// console.log(answerToQuestion)
// return answerToQuestion === "Neither agree or not disagree" || answerToQuestion === "Agree"
// })
// responses.forEach(response => {
//   const nameQuestion = response.getItem().getTitle()
//   const answerToQuestion = response.getResponse()
//   if (regexp.test(nameQuestion)) {
//     // console.log(answerToQuestion[0]==="N\\A",answerToQuestion[0])
//     isAnserCorrect = ['N\A', '1 week'].includes(answerToQuestion[0])

//   }
// })
