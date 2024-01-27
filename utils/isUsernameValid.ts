export const isUsernameValid = (username: string): boolean => {
    const usernameRegex = /^[a-zA-Z0-9_]{5,}$/;
    return usernameRegex.test(username);
};