export function parseCharacterToNumber(character: string): number {
    const ascii = character.charCodeAt(0)
    return ascii - 48
}

export function fillStringWithZero(doc: string, numChar: number) {
    return String(doc).padStart(numChar, '0')
}