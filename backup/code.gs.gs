function onSubmit() {
	const existingForm = FormApp.openById(
		"1uesbmoaUO6iaklFZU4H5yowQJrphmCYjgQtvR9I1o_o"
	);
	const section = existingForm.getItems(FormApp.ItemType.PAGE_BREAK);
	// получение всех ответов всех респондентов
	const formResponses = existingForm.getResponses();
	// получение последнего массива ответов респондента
	const formResponse = formResponses[formResponses.length - 1];
	// получение почты последнего респондента
	const emailRespondent = formResponse.getRespondentEmail();
	// получение всех ответов последнего респондента
	const itemResponses = formResponse.getItemResponses();
	// получнеие конкретного ответ из массива ответов последнего респондента
	// const itemResponse = itemResponses[0]
	console.log("на эту почту отправлено сообщение -", emailRespondent);

	const htmlTemplate = HtmlService.createTemplateFromFile("index");
	// передаем все названия секций в html шаблон
	htmlTemplate.section = createTitleSection(section);
	// передаем все описания секций в html шаблон
	htmlTemplate.description = createDescriptionSection(section);
	// передаем дату footer в html шаблон
	htmlTemplate.date = currentYear();

	htmlTemplate.hasInCorrectAnswerSection1 = checkCorrectAnswer(
		itemResponses,
		1,
		noCorrectAnswersSection1
	);
	htmlTemplate.hasInCorrectAnswerSection2 = checkCorrectAnswer(
		itemResponses,
		2,
		noCorrectAnswersSection2
	);

	//------------------------------------------------------- ОТПРАВКА ПИСЬМА
	//для проверики или тестов в поле to: нужно написать, почту на которую хотите отпраить сообщение
	//в противном случае сообщения будут приходить на почту последнего респондента.
	const emailContent = htmlTemplate.evaluate().getContent();
	const emailTheme = "Test mini app-Agile Audit";
	MailApp.sendEmail({
		to: emailRespondent,
		subject: emailTheme,
		htmlBody: emailContent,
	});
}
