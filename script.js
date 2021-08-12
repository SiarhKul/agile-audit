const arrTitlesResponse = [
	"Name",
	"Phone Number",
	"1.1 User feedback on released features is collected not later than [Please, select]",
	"1.2 Leading indicators provide fast feedback on features. [Please, select]",
	"1.3 Actionable quantitative and qualitative product metrics inform decision-making [Please, select]",
	"2.2 What is the Customer Satisfaction Score (CSAT)? [Please, select]",
	"2.3 What is the Customer Effort Score (CES)? [Please, select]",
	"2.5 Adoption Rates are regularly measured and evaluated [Please, select]",
];

const arrTitle = ["lorem1", "lorem2", "lorem3", "lorem4"];

console.log("1.2 Measure Value-Driven Development".replace(/[0-9.]/g, ""));
console.log(/^2.\d/i.test("2.2 Measure Value-Driven Development"));

const createResponsesSection = responses => {
	const obj = {};
	responses.forEach((response, i) => {});
};

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

console.log(["NA", "1 week"].includes("N"));
