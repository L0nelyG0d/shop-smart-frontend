import React, { useEffect, useState } from 'react';
import ShoppingList from './components/ShoppingList';
import { createShoppingList } from './api/shoppingListApi';
import './App.css';

function App() {
    const [listId, setListId] = useState(null);

    useEffect(() => {
        const saved = localStorage.getItem('shoppingListId');
        if (saved) {
            setListId(saved);
        } else {
            createShoppingList().then((id) => {
                localStorage.setItem('shoppingListId', id);
                setListId(id);
            });
        }
    }, []);

    if (!listId) return <div>Loading the List</div>;

    return (
        <div className="App">
            <h1>🛒 ShopSmart</h1>
            <ShoppingList listId={listId} />
        </div>
    );
}

export default App;