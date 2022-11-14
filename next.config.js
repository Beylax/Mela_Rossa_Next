module.exports = () => {
	const rewrites = () => {
		return [
			{
				source: "/api/users",
				destination: `${process.env.NEXT_PUBLIC_BASE_URL}/users`,
			},
		];
	};
	return {
		rewrites,
	};
};