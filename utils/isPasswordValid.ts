export const isPasswordValid = (password: string): boolean => {
    const passwordRegex = /^[a-zA-Z0-9_]{5,}$/;
    return passwordRegex.test(password);
};