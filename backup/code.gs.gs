function onSubmit() {
	const existingForm = FormApp.openById(
		"1uesbmoaUO6iaklFZU4H5yowQJrphmCYjgQtvR9I1o_o"
	);
	const section = existingForm.getItems(FormApp.ItemType.PAGE_BREAK);
	// получение всех ответов всех респондентов
	const formResponses = existingForm.getResponses();
	// получение последнего массива ответов респондента
	const formResponse = formResponses[formResponses.length - 1];
	// получение всех ответов последнего респондента
	const itemResponses = formResponse.getItemResponses();
	// объект с ответами по каждой секции
	const answersSection = createObjAnswersSections(itemResponses, section);

	// объект с статусами по каждой секции, для отоброжения результата ("managed", "improve", "emerging",)
	const statusSections = createObjDeteminatedStatusSecton(
		answersSection,
		section,
		emergingAnswers,
		improveAnswers
	);
	// статус для отображениия индикатора в положение "managed", "improve" ,"emerging"
	const statusIndicator = getStatus(statusSections);
	// объект с boolen значениями для отображения таблицы с ценами
	const statusPriceTable = showPriceTable(statusSections);
	// описания секций  html шаблонa
	const description = createDescriptionSection(section);
	// датa в footer в html шаблон
	const date = currentYear();
	// объек с назнанием описаний каждой секции
	const titleSection = createTitleSection(section);

	//------------------------------------------------------- ПЕРЕДАЧА ПЕРЕМЕННЫХ В НТМL ШАБЛОН
	const htmlTemplate = HtmlService.createTemplateFromFile("index");
	htmlTemplate.section = titleSection;
	htmlTemplate.description = description;
	htmlTemplate.date = date;
	htmlTemplate.statusIndicator = statusIndicator;
	htmlTemplate.statusSections = statusSections;
	htmlTemplate.statusPriceTable = statusPriceTable;

	//------------------------------------------------------- ОТПРАВКА ПИСЬМА
	//для проверики или тестов в поле to: нужно написать, почту на которую хотите отпраить сообщение
	//в противном случае сообщения будут приходить на почту последнего респондента.

	// получение почты последнего респондента
	const emailRespondent = formResponse.getRespondentEmail();
	const emailContent = htmlTemplate.evaluate().getContent();
	const emailTheme = "Agile Audit Assesment Results";
	MailApp.sendEmail({
		to: emailRespondent,
		subject: emailTheme,
		htmlBody: emailContent,
	});

	console.log("На эту почту отправлено сообщение -", emailRespondent);
	console.info("Статус каждой секции - ", statusSections);
	console.info("Статус индикатора опроса - ", statusIndicator);
}
