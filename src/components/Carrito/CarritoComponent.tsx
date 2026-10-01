import { useReducer } from "react";
import {
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";
import type { ColumnDef } from "@tanstack/react-table";

import { TABLE_DATA } from "./carritodata";
import type { Product } from "./carritodata";

interface CarritoState {
    cesta: Product[];
    total: number;
}

interface CarritoAction {
    type: "AGREGAR PRODUCTO" | "ELIMINAR PRODUCTO";
    payload: Product;
}

const initialState: CarritoState = {
    cesta: [],
    total: 0,
};

const calcularTotal = (cesta: Product[]): number => {
    return cesta.reduce(
        (total, producto) =>
            total + producto.price * producto.cantidad,
        0
    );
};

const carritoReducer = (
    state: CarritoState,
    action: CarritoAction
): CarritoState => {
    switch (action.type) {
        case "AGREGAR PRODUCTO": {
            const productoExistente = state.cesta.find(
                producto => producto.id === action.payload.id
            );

            let nuevaCesta: Product[];

            if (productoExistente) {
                nuevaCesta = state.cesta.map(producto =>
                    producto.id === action.payload.id
                        ? {
                            ...producto,
                            cantidad: producto.cantidad + 1,
                        }
                        : producto
                );
            } else {
                nuevaCesta = [
                    ...state.cesta,
                    {
                        ...action.payload,
                        cantidad: 1,
                    },
                ];
            }

            return {
                cesta: nuevaCesta,
                total: calcularTotal(nuevaCesta),
            };
        }

        case "ELIMINAR PRODUCTO": {
            const productoExistente = state.cesta.find(
                producto => producto.id === action.payload.id
            );

            if (!productoExistente) {
                return state;
            }

            let nuevaCesta: Product[];

            if (productoExistente.cantidad > 1) {
                nuevaCesta = state.cesta.map(producto =>
                    producto.id === action.payload.id
                        ? {
                            ...producto,
                            cantidad: producto.cantidad - 1,
                        }
                        : producto
                );
            } else {
                nuevaCesta = state.cesta.filter(
                    producto => producto.id !== action.payload.id
                );
            }

            return {
                cesta: nuevaCesta,
                total: calcularTotal(nuevaCesta),
            };
        }

        default:
            return state;
    }
};

export const CarritoComponent = () => {
    const [cestaState, setCestaState] = useReducer(
        carritoReducer,
        initialState
    );

    const agregarProducto = (producto: Product) => {
        setCestaState({
            type: "AGREGAR PRODUCTO",
            payload: producto,
        });
    };

    const eliminarProducto = (producto: Product) => {
        setCestaState({
            type: "ELIMINAR PRODUCTO",
            payload: producto,
        });
    };

    const columns: ColumnDef<Product>[] = [
        ...TABLE_DATA.columns,
        {
            id: "acciones",
            header: "ACCIONES",
            cell: ({ row }) => (
                <button
                    type="button"
                    onClick={() => agregarProducto(row.original)}
                >
                    +1
                </button>
            ),
        },
    ];

    const TABLE = useReactTable({
        columns,
        data: TABLE_DATA.data,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div>
            <h2>CESTA ACTUAL</h2>

            {cestaState.cesta.length === 0 ? (
                <p>La cesta está vacía</p>
            ) : (
                <>
                    <ul>
                        {cestaState.cesta.map(producto => (
                            <li key={producto.id}>
                                <span>
                                    {producto.name} x{producto.cantidad}
                                </span>

                                <span>
                                    {" "}$
                                    {(producto.price * producto.cantidad).toFixed(2)}
                                </span>

                                <button
                                    type="button"
                                    onClick={() => eliminarProducto(producto)}
                                >
                                    -1
                                </button>

                                <button
                                    type="button"
                                    onClick={() => agregarProducto(producto)}
                                >
                                    +1
                                </button>
                            </li>
                        ))}
                    </ul>

                    <h3>
                        Total: ${cestaState.total.toFixed(2)}
                    </h3>
                </>
            )}

            <table>
                <thead>
                    {TABLE.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id}>
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>

                <tbody>
                    {TABLE.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id}>
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
