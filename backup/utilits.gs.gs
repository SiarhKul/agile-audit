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
			.replace(/^\d. Measure /, "")
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

//----------------------------- проверяем есть ли неподходящие ответы на вопросы и возвращаем true или false
const showPriceTable = statutsSections => {
	const arrStatus = Object.values(statutsSections);

	const statusTable = arrStatus.map(status => {
		if (status === "yellow" || status === "red") {
			return true;
		} else {
			return false;
		}
	});

	return statusTable;
};

//----------------------------- получаем ответы на определенную секцию
const getAnswersSection = (responses, numerSection) => {
	const regexp = new RegExp(`^${numerSection}.\\d`, "i");

	const answersQuestions = responses.filter(response => {
		const nameQuestion = response.getItem().getTitle();
		const includesQuestionNumberSection = regexp.test(nameQuestion);
		if (includesQuestionNumberSection) {
			return response;
		}
	});
	return answersQuestions;
};

//------------------------------- определение статуса секции
const determinateStatus = (answersSection, emergingAnswers, improveAnswers) => {
	let status = null;

	const statusRed = answersSection.some(response => {
		const answerToQuestion = response.getResponse()[0];
		return emergingAnswers.includes(answerToQuestion);
	});

	const statusYellow = answersSection.some(response => {
		const answerToQuestion = response.getResponse()[0];
		return improveAnswers.includes(answerToQuestion);
	});

	if (statusRed) {
		status = "red";
	} else if (statusYellow) {
		status = "yellow";
	} else {
		status = "green";
	}
	return status;
};

//------------------------------- создание объекта с ответами по каждой секции

const createObjAnswersSections = (responses, section) => {
	const obj = {};
	section.forEach((_, i) => {
		obj[`answersSection${i + 1}`] = getAnswersSection(responses, i + 1);
	});
	return obj;
};

//------------------------------- создание объекта c соответствующим статусом
const createObjDeteminatedStatusSecton = (
	answersSection,
	section,
	emergingAnswers,
	improveAnswers
) => {
	const obj = {};
	section.forEach((_, i) => {
		const status = determinateStatus(
			answersSection[`answersSection${i + 1}`],
			emergingAnswers,
			improveAnswers
		);

		obj[`determinedStatusSection${i + 1}`] = status;
	});
	return obj;
};

//------------------------------- получение статуса секции
const getStatus = statutsSections => {
	const arrStatus = [...new Set(Object.values(statutsSections))];
	return ["red", "yellow", "green"].find(status => {
		return arrStatus.includes(status);
	});
};
