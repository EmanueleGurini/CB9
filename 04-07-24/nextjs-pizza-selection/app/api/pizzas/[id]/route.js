import { NextResponse } from 'next/server'
import Pizza from '../../../(models)/Pizzas'


export async function DELETE(req, { params }) {
	try {
		const { id } = params;
		await Pizza.findByIdAndDelete(id);
		return NextResponse.json({ message: "La pizza è stata creata" }, { status: 200 })
	} catch (error) {
		return NextResponse.json({ message: "Error" }, { status: 500 })
	}
}