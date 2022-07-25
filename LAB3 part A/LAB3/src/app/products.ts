export interface Product {
    id: number,
    name: string,
    price: number,
    description: string
}

export const products = [
    {
        id: 1,
        name: 'iPhone 13',
        price: 25900,
        description: 'จอภาพ 6.1 นิ้ว'
    },
    {
        id: 2,
        name: 'iPhone 13 Pro',
        price: 38900,
        description: 'จอภาพ 6.1 นิ้ว'
    }
]