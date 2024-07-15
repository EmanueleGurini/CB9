const baseUrl = "https://api.escuelajs.co/api/v1/products"

export const GET = async () => {
	const res = await fetch(baseUrl)
	return await res.json()
}

export const POST = async (objectBody) => {
	const res = await fetch(baseUrl, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(objectBody)
	})
	return await res.json()
}

export const DELETE = async (id) => {
	const res = await fetch(baseUrl + "/" + id, {
		method: "DELETE"
	})
	return await res.json()
}

export const PUT = async (id, objectBody) => {
	const res = await fetch(baseUrl + "/" + id, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(objectBody)
	})
	return await res.json()
}



