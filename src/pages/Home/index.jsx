import { useState } from "react";

import styles from "./home.module.css"

export default function Home() {
    const [items, setItems] = useState([
        { id: 1, name: "Apple", price: 2.5, quantity: 3 },
        { id: 2, name: "Banana", price: 1.2, quantity: 5 },
        { id: 3, name: "Orange", price: 1.8, quantity: 4 },
    ]);

    const getTotal = () => {
        return items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className={styles.shoppingList}>
            <h1 className={styles.title}>Shopping List</h1>
            <ul className={styles.itemList}>
                {items.map((item) => (
                    <li key={item.id} className={styles.item}>
                        <span className={styles.itemName}>{item.name}</span>
                        <span className={styles.itemPrice}>$ {item.price.toFixed(2)}</span>
                        <span className={styles.itemQuantity}>Qty: {item.quantity}</span>
                        <span className={styles.itemTotal}>Total: ${(item.price * item.quantity).toFixed(2)}</span>
                    </li>
                ))}
            </ul>
            <div className={styles.total}>
                <strong>Total Purchase: </strong> $ {getTotal()}
            </div>
        </div>
    );
}