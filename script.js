console.log(
	"1. Measure Value-Driven Development".replace(/[0-9.]/g, "").trim()
);

const arrTitle = ["lorem1", "lorem2", "lorem3", "lorem4"];

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

console.log(getEmail(arrStr));
