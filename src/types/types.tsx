
export interface IBrand {
    id: number;
    title: string;
    sort: string;
    code: string;
}

interface IPrice {
    currency: string;
    value: number;
}

export interface IProduct {
    type: string;
    id: number;
    sku: string;
    title: string;
    regular_price: IPrice;
    image: string;
    brand: number;
}
