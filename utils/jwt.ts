"use server";

import { SignJWT, jwtVerify } from "jose";

const secretKey = process.env.JWT_SECRET;
const key = new TextEncoder().encode(secretKey);

export const encrypt = async (payload: string) => {
    return await new SignJWT({data: payload})
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .sign(key);
}

export const decrypt = async (input: string) => {
    if (!input)
        return
    const { payload } = await jwtVerify(input, key, {
        algorithms: ["HS256"],
    });
    return payload.data as string;
}