const baseUrl = "https://api.escuelajs.co/api/v1/products"

const GET = async () => {
	const res = await fetch(baseUrl)
	return await res.json()
}

const POST = async (objectBody) => {
	const res = await fetch(baseUrl, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(objectBody)
	})
	return await res.json()
}

export {
	GET, POST
}