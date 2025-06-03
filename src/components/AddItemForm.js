import React, { useState } from 'react';
import axios from 'axios';

export default function AddItemForm({ listId }) {
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('/items/add', {
                name,
                cost: parseInt(cost),
                shopping: { id: listId }
            });

            setName('');
            setCost('');
        } catch (error) {
            console.error('Could not add the item:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Price"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
                required
            />
            <button type="submit">➕ ADD</button>
        </form>
    );
}