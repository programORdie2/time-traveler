import bcrypt from "bcrypt";

const saltRounds = 10;

export function saltAndHashPassword(password: string) {
    return bcrypt.hash(password, saltRounds);
}

export function verifyPassword(password: string, hash: string) {
    return bcrypt.compare(password, hash);
}