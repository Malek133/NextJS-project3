import { NextResponse } from "next/server"


export async function GET(){
    const res = await ((await fetch('https://dummyjson.com/products'))).json();
    // const data = await res.json();
 return NextResponse.json(res)
}