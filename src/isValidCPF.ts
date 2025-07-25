import { fillStringWithZero } from "../utils/string.utils";

function calculateCPFDigit(cpfBase: string): string | null {
    if (cpfBase.length !== 9) return null;

    const digits = cpfBase.split('').map(d => parseInt(d, 10));

    // Primeiro dígito
    const sum1 = digits.reduce((acc, num, idx) => acc + num * (10 - idx), 0);
    const rest1 = sum1 % 11;
    const digit1 = rest1 < 2 ? 0 : 11 - rest1;

    // Segundo dígito
    const digitsWithFirst = [...digits, digit1];
    const sum2 = digitsWithFirst.reduce((acc, num, idx) => acc + num * (11 - idx), 0);
    const rest2 = sum2 % 11;
    const digit2 = rest2 < 2 ? 0 : 11 - rest2;

    return `${digit1}${digit2}`;
}

/**
 * Valida se um CPF (com dígitos ou sem) é válido.
 * @param cnpj - string contendo CPF
 * @returns boolean indicando validade do CPF
 */
export function isValidCPF(cpf: string): boolean {
    if (!cpf) throw new Error('Forneça um CPF');

    let parsedCPF = cpf.replace(/[.\-]/g, '');

    if (parsedCPF.length !== 11) {
        parsedCPF = fillStringWithZero(parsedCPF, 11);
    }

    if (/^(\d)\1{10}$/.test(parsedCPF)) return false;

    const cpfBase = parsedCPF.slice(0, 9);
    const checkedDigitExpected = parsedCPF.slice(9);

    const calculatedDigit = calculateCPFDigit(cpfBase)

    if (calculateCPFDigit === null) throw new Error('Não foi possível calcular o dígito verificador!');

    return checkedDigitExpected === calculatedDigit
}