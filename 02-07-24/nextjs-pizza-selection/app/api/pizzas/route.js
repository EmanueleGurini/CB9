import { NextResponse } from "next/server"
import Pizza from '../../(models)/Pizzas'

// GET         x richiedere dati
// POST        x inviare dati
// PUT         x modificare dei dati
// DELETE      x cancellare dei dati


export async function GET() {

	try {

		const pizzas = await Pizza.find();

		return NextResponse.json({ pizzas }, { status: 200 });

	} catch (error) {
		return NextResponse.json({ message: 'Error', error }, { status: 500 })
	}
}