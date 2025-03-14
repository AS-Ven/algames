import bcrypt from "bcryptjs";
 
export const hashPassword = async (plainPassword: string) => {
    return await bcrypt.hash(plainPassword, 10)
}

export const comparePassword = async (userPassword: string, dbPassword: string) => {
    return await bcrypt.compare(userPassword, dbPassword)
}