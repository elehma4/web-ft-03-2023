
// 18.9 
// $18.90

export const formatCurrency = (num) => {
    
    return `$${Number(num).toFixed(2).toString()}`
}