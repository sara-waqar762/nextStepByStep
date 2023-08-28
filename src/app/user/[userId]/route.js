import { NextResponse } from "next/server";
import { userList } from "@/app/userList/page";
export function GET(request, content) {
    let data = userList.filter((item) => item.id == content.params.userId)
    return NextResponse.json(data.length == 0 ? { result: "No Data Found", success: false } : { result: data[0], success: true }, { status: 200 })
}   