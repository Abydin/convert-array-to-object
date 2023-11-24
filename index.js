exports.convertArrToObj = ({ arr, callBack, key, reArr = false }) => {
	const reducer = (accumulator, currentValue) => {
		const keyValue = key ? currentValue[key] : currentValue;
		accumulator[keyValue] = callBack ? callBack(currentValue) : currentValue;
		return accumulator;
	};

	if (reArr) {
		return Object.values(arr?.reduce(reducer, {}));
	}

	return arr?.reduce(reducer, {});
};
