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

const statutsSections = {
	determinatedStatusSection1: "green",
	determinatedStatusSection2: "yellow",
	determinatedStatusSection3: "red",
	determinatedStatusSection4: "green",
	determinatedStatusSection5: "yellow",
};

const getStatus = statutsSections => {
	const arrStatus = [...new Set(Object.values(statutsSections))];

	return ["red", "yellow", "green"].find(status => {
		return arrStatus.includes(status);
	});
	// return arrStatus.find(status => {
	// 	return ["red", "yellow", "green"].includes(status);
	// });
};
console.log(getStatus(statutsSections));
