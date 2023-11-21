exports.convertArrToObj = ({ arr, callBack, key, reArr = false }) => {
	if (reArr) {
		if (key) {
			return Object.values(
				arr?.reduce(
					(a, v) => ({ ...a, [v[key]]: callBack ? callBack(v) : v }),
					{}
				)
			);
		}
		return arr?.reduce(
			(a, v) => ({ ...a, [v[key]]: callBack ? callBack(v) : v }),
			{}
		);
	}
	if (key) {
		return arr?.reduce(
			(a, v) => ({ ...a, [v[key]]: callBack ? callBack(v) : v }),
			{}
		);
	}
	return arr?.reduce((a, v) => ({ ...a, [v]: callBack ? callBack(v) : v }), {});
};
