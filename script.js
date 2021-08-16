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
