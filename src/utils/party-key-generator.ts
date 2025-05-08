export function generatePartyKey(): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let partyKey = ''
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length)
        partyKey += characters[randomIndex]
    }
    return partyKey
}
