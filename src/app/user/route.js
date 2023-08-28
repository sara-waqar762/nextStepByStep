import { NextResponse } from "next/server";
import { userList } from "../userList/page"

export function GET(request) {
    let data = userList
    return NextResponse.json(data, { status: 200 })
}


export async function POST(request) {
    let payload = await request.json();
    if (!payload.id || !payload.name || !payload.age || !payload.email) {
        return NextResponse.json({ result: "All fields are mandatory" }, { status: 400 })
    }
    return NextResponse.json({ result: "Successfully new user created" }, { status: 201 })
}