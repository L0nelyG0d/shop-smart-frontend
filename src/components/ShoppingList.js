import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ShoppingList.css';

function ShoppingList() {
    const [itemName, setItemName] = useState('');
    const [cost, setCost] = useState('');
    const [items, setItems] = useState([]);
    const [shoppingListId, setShoppingListId] = useState(null);



    useEffect(() => {
        axios.post('http://localhost:8080/shopping-lists', { title: 'My Shopping List' })
            .then(res => {
                const id = res.data.id;
                setShoppingListId(id);
                fetchItems(id);
            })
            .catch(err => console.error('Error creating list:', err));
    }, []);

    const fetchItems = (id) => {
        axios.get(`http://localhost:8080/items/get/${id}`)
            .then(res => setItems(res.data))
            .catch(err => console.error('Error fetching items:', err));
    };

    const handleToggleStatus = (id) => {
        axios.put(`http://localhost:8080/items/update/${id}`)
            .then(() => {
                fetchItems(shoppingListId);
            });
    };

    const handleAdd = () => {
        if (!itemName || !cost || !shoppingListId) return;

        axios.post('http://localhost:8080/items/add', {
            name: itemName,
            cost: parseInt(cost),
            shopping: { id: shoppingListId }
        })
            .then(() => {
                setItemName('');
                setCost('');
                fetchItems(shoppingListId);
            })
            .catch(err => console.error('Error adding item:', err));
    };

    return (
        <div className="container">

            <h1 className="logo">🛒 ShopSmart</h1>
            <h2 className="title"> Shopping List</h2>

            <div className="input-section">
                <input
                    type="text"
                    placeholder="Item name"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Cost"
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                />
                <button onClick={handleAdd}>+ Add</button>
            </div>

            <ul className="item-list">
                {items.map((item) => (
                    <li key={item.id} className={item.bought ? 'bought' : ''}>
                        <span>{item.name}</span>
                        <span className="quantity">{item.cost}₸</span>
                        <input
                            type="checkbox"
                            checked={item.bought}
                            onChange={() => handleToggleStatus(item.id)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ShoppingList;