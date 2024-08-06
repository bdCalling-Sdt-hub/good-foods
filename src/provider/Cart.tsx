import React, { createContext, useContext, useReducer, ReactNode } from 'react';

interface CartItem {
    id: string;
    name: string;
    quantity: number;
}

interface CartState {
    items: CartItem[];
}

type CartAction =
    | { type: 'ADD_ITEM'; item: CartItem }
    | { type: 'INCREASE_QUANTITY'; id: string }
    | { type: 'DECREASE_QUANTITY'; id: string }
    | { type: 'REMOVE_ITEM'; id: string };

const CartContext = createContext<{
    state: CartState;
    dispatch: React.Dispatch<CartAction>;
}>({
    state: { items: [] },
    dispatch: () => null,
});

const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case 'ADD_ITEM':
            const existingItem = state.items.find(item => item.id === action.item.id);
            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.item.id
                            ? { ...item, quantity: item.quantity + action.item.quantity }
                            : item
                    ),
                };
            }
            return { ...state, items: [...state.items, action.item] };

        case 'INCREASE_QUANTITY':
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ),
            };

        case 'DECREASE_QUANTITY':
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.id
                        ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
                        : item
                ),
            };

        case 'REMOVE_ITEM':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.id),
            };

        default:
            return state;
    }
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, { items: [] });

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);