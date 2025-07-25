import { fillStringWithZero, parseCharacterToNumber } from "../utils/string.utils"

function calculateCNPJDigit(cnpjBase: string){
if(cnpjBase.length !== 12 || !/^\d{12}$/.test(cnpjBase)) return null

const pesosDV1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
const pesosDV2 = [6, ...pesosDV1]

const numbersArray = cnpjBase.split('').map(parseCharacterToNumber)

const firstSum = numbersArray.reduce((acc, num, i) => acc + num * pesosDV1[i], 0)
const firstCheckedDigit = firstSum % 11 < 2 ? 0 : 11 - (firstSum % 11)

const numbersWithFirstCheckedDigit = [...numbersArray, firstCheckedDigit]

const secondSum = numbersWithFirstCheckedDigit.reduce((acc, num, i) => acc + num * pesosDV2[i], 0)
const secondCheckedDigit = secondSum % 11 < 2 ? 0 : 11 - (secondSum % 11)

return `${firstCheckedDigit}${secondCheckedDigit}`
}

/**
 * Valida se um CNPJ (com dígitos ou sem) é válido.
 * @param cnpj - string contendo cnpj numérico ou alfanumérico
 * @returns boolean indicando validade do CNPJ
 */
export function isCNPJValid(cnpj: string) {
    let parsedCNPJ = ''
    
    if(!cnpj) throw new Error('Forneça um CNPJ')

    parsedCNPJ = cnpj.replace(/[.\-\/]/g, '')

    if(parsedCNPJ.length !== 14){
        parsedCNPJ = fillStringWithZero(parsedCNPJ, 14)
    }

    const cnpjBase = parsedCNPJ.slice(0, 12)
    const checkedDigitExpected = parsedCNPJ.slice(12)

    const calculatedDigit = calculateCNPJDigit(cnpjBase)

    if(calculatedDigit === null) throw new Error('Não foi possivel calcular o digito verificador!')

    return checkedDigitExpected === calculatedDigit
}