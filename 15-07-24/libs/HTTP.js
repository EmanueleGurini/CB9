const baseUrl = "https://api.escuelajs.co/api/v1/products"

export const GET = async () => {
	try {
		const res = await fetch(baseUrl)
		if (!res.ok) {
			throw new Error(`HTTP error! status: ${res.status}`);
		}
		return await res.json()
	} catch (error) {
		console.error("GET error:", error);
		throw error;
	}
}

export const POST = async (objectBody) => {
	try {
		const res = await fetch(baseUrl, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(objectBody)
		})
		if (!res.ok) {
			throw new Error(`HTTP error! status: ${res.status}`);
		}
		return await res.json()
	} catch (error) {
		console.error("POST error:", error);
		throw error;
	}
}

export const PUT = async (id, objectBody) => {
	try {
		const res = await fetch(`${baseUrl}/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(objectBody)
		})
		if (!res.ok) {
			throw new Error(`HTTP error! status: ${res.status}`);
		}
		return await res.json()
	} catch (error) {
		console.error("PUT error:", error);
		throw error;
	}
}

export const DELETE = async (id) => {
	try {
		const res = await fetch(`${baseUrl}/${id}`, {
			method: "DELETE"
		})
		if (!res.ok) {
			throw new Error(`HTTP error! status: ${res.status}`);
		}
		return await res.json()
	} catch (error) {
		console.error("DELETE error:", error);
		throw error;
	}
}



