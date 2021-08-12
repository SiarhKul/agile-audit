//----------------------------- создание функции, которя вставляет фрагмент кода
function include(filename) {
	return HtmlService.createHtmlOutputFromFile(filename)
		.setSandboxMode(HtmlService.SandboxMode.IFRAME)
		.getContent();
}

//----------------------------- создаем объект с названием всех секций
const createTitleSection = sections => {
	const obj = {};
	sections.forEach((section, i) => {
		obj[`titleSection${i + 1}`] = section
			.getTitle()
			.replace(/[0-9.]/g, "")
			.trim();
	});
	return obj;
};

//----------------------------- создаем объект с описанием всех секций
const createDescriptionSection = descriptions => {
	const obj = {};
	descriptions.forEach((description, i) => {
		obj[`descriptionsSection${i + 1}`] = description.getHelpText();
	});
	return obj;
};

//----------------------------- получаем дату для footer
const currentYear = () => {
	return new Date().getFullYear();
};
