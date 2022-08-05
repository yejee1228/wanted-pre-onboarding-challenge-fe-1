// eslint-disable-next-line no-useless-escape
export const emailRegExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

export const checkRegExp = (text: string, regExp: RegExp) => {
    return regExp.test(text);
}