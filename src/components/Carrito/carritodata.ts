

import type {ColumnDef} from "@tanstack/react-table";

export interface Product {
    id: number;
    name: string;
    price: number;
    cantidad: number
}


export const ARTICLES:Product[] = [
    { "id": 1, "name": "Sandía", "price": 10.99, "cantidad": 2 },
    { "id": 2, "name": "Caja de camisetas", "price": 5.99, "cantidad": 1 },
    { "id": 3, "name": "Libro", "price": 6.00, "cantidad": 6 },
    { "id": 4, "name": "Pera", "price": 6.00, "cantidad": 3 }
]
   


const COLUMNS: ColumnDef<Product>[] = Object.keys(ARTICLES[0]).map((key: string) =>{
    return {
        header: key.toUpperCase(),
        accessorKey: key,
        cell: (info) => info.getValue()
    }
})




export const TABLE_DATA = {
    columns: COLUMNS,
    data: ARTICLES
}
