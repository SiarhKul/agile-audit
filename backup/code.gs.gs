function onSubmit() {
	const existingForm = FormApp.openById(
		"1uesbmoaUO6iaklFZU4H5yowQJrphmCYjgQtvR9I1o_o"
	);
	const formResponses = existingForm.getResponses();
	const formResponse = formResponses[formResponses.length - 1];
	const itemResponses = formResponse.getItemResponses();
	const itemResponse = itemResponses[3];

	const emailRespondent = itemResponse.getResponse();
	console.log(emailRespondent);

	const section = existingForm.getItems(FormApp.ItemType.PAGE_BREAK);

	//   const getEmail = itemResponses => {
	//     // itemResponses.forEach(elem => console.log(elem.getResponse()))
	//  itemResponses.find(elem => {return elem.includes("@")})
	//   }

	// const getEmail = itemResponses => {
	// 	return itemResponses.find(elem => {
	// 		return elem.includes("@");
	// 	});
	// };
	// console.log(getEmail(itemResponses))

	const htmlTemplate = HtmlService.createTemplateFromFile("index");
	// передаем все названия секций в html шаблон
	htmlTemplate.section = createTitleSection(section);
	// передаем все описания секций в html шаблон
	htmlTemplate.description = createDescriptionSection(section);
	// передаем дату footer в html шаблон
	htmlTemplate.date = currentYear();

	const htmlForEmail = htmlTemplate.evaluate().getContent();
	const theme = "Test mini app-Agile Audit";
	// ОТПРАВКА ПИСЬМА
	// MailApp.sendEmail({
	//   to: emailRespondent,
	//   subject: theme,
	//   htmlBody: htmlForEmail
	// })
}
