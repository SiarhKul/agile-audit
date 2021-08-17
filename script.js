const strQuestion = "1.2 Measure Value-Driven Development";
const str = "1. Measure Value-Driven Development";

console.log(str.replace(/[0-9.]/g, ""));
console.log(/^1.\d Measure/i.test(strQuestion));

const createTitle = str => {
	return str.replace(/^\d. Measure /, "");
};

console.log(createTitle(str));

const createTitleSection = titleSection => {
	const obj = {};
	titleSection.forEach((element, i) => {
		obj[`titleSection${i + 1}`] = element;
	});
	return obj;
};

const createDescriptionSection = descriptions => {
	const obj = {};
	descriptions.forEach((element, i) => {
		obj[`descriptionsSection${i + 1}`] = element;
	});
	return obj;
};

const currentYear = () => {
	return new Date().getFullYear();
};

const arrStr = ["dffs", "nte@fsd", "dfd"];
const getEmail = arrStr => {
	return arrStr.find(elem => {
		return elem.includes("@");
	});
};

const statutsSections = {
	determinedStatusSection1: "yellow",
	determinedStatusSection2: "green",
	determinedStatusSection3: "green",
	determinedStatusSection4: "red",
	determinedStatusSection5: "yellow",
};

const getStatus = statutsSections => {
	const arrStatus = [...new Set(Object.values(statutsSections))];

	return ["red", "yellow", "green"].find(status => {
		return arrStatus.includes(status);
	});
};

const showPriceTable = statutsSections => {
	const arrStatus = Object.values(statutsSections); //?

	const statusTable = arrStatus.map(status => {
		if (status === "yellow" || status === "red") {
			return true;
		} else {
			return false;
		}
	});

	return statusTable;
};

const improveAnswers = [
	"1 week",
	"1-4 weeks",
	"Neither agree or not disagree",
	"0-30%",
	"2-3.99",
	"15-40%",
	"60-85%",
	"1-2.5h",
	"I prefer not answer I don't know",
	"1-24h",
	"1-7 days",
	"80-95%",
];

const emergingAnswers = [
	"4 weeks or more",
	"I don't know I prefer not answer",
	"Disagree",
	"0% or lower",
	"0-60%",
	"40-100%",
	"0-1.99",
	"No",
	"24 hours or more",
	"7 days or more",
	"0-80%",
];

const answersSection = [
	"I don't know I prefer not answer",
	"Neither agree or not disagree",
	"NA",
	"NA",
	"NA",
];

const determinateStatus = (answersSection, emergingAnswers, improveAnswers) => {
	let status = null;

	const statusRed = answersSection.some(response => {
		return emergingAnswers.includes(response);
	});

	const statusYellow = answersSection.some(response => {
		return improveAnswers.includes(response);
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
console.log(determinateStatus(answersSection, emergingAnswers, improveAnswers));
