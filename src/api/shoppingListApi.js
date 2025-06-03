import axios from 'axios';

export async function createShoppingList() {
    const response = await axios.post('/shopping-lists', { title: 'My Smart List' });
    return response.data.id;
}