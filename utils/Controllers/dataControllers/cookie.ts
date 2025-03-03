"use server";

import { cookies } from "next/headers";
import { decrypt, encrypt } from "./jwt";

export const setCookie = async (name: string, data: string) => {
    const cookie = await cookies();

    data = await encrypt(data)

    cookie.set(name, data, {
        httpOnly: true,
        secure: false,
        path: "/",
    });
}

export const clearCookie = async (name: string) => {
    const cookie = await cookies();
    cookie.set(name, "", { expires: new Date(0) });
}

export const getCookie = async (name: string) => {
    const cookie = await cookies();
    const data = cookie.get(name)?.value
    if (!data)
        return
    return await decrypt(data)
}