export const validateId = (id: string) => {
    const numberId: number = parseInt(id)
    if(isNaN(numberId) || numberId < 1) return 0
    return numberId
}