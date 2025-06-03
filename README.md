# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



##  ShopSmart Frontend

A clean and interactive React-based frontend for **ShopSmart** — a smart shopping list manager. Create, search, and manage shopping lists with live updates and a friendly UI.

---

###  Tech Stack

* **React**
* **Axios** (for API calls)
* **CSS** (custom, responsive)
* **React Hooks** (`useState`, `useEffect`)

---

###  Features

*  Create and name new shopping lists
*  Search existing lists by title
*  Add items with cost
* Toggle bought status with a checkbox
*  Delete items (optional feature)
*  Data saved via Spring Boot backend

---

###  Folder Structure

```
src/
├── api/
│   └── shoppingListApi.js      # Axios wrappers
├── components/
│   ├── ShoppingList.js         # Main component
│   ├── AddItemForm.js          # Add item form
│   └── ShoppingList.css        # Styling
├── hooks/                      # Optional custom hooks
├── App.js                      # Main entry
└── index.js
```

---

###  Getting Started

#### 1. Install dependencies

```bash
npm install
```

#### 2. Run the development server

```bash
npm start
```

App runs on:
 [http://localhost:3000](http://localhost:3000)

---

###  Backend API Configuration

Make sure your backend is running on `http://localhost:8080`.
If it differs, edit the base URL in `shoppingListApi.js`:

```js
const API_BASE = "http://localhost:8080";
```

---

###  Example API Calls (via Axios)

```js
// Create a new list
axios.post(`${API_BASE}/shopping-lists`, { title: "Groceries" })

// Search by title
axios.get(`${API_BASE}/shopping-lists/search?title=Groceries`)

// Add item
axios.post(`${API_BASE}/items/add`, { name, cost, shopping: { id } })

// Toggle bought status
axios.put(`${API_BASE}/items/update/${itemId}`)
```

---

### UI Preview

*Include screenshots here if needed (optional)*

---

###  Future Ideas

* Real-time updates with WebSocket
* Item quantity field
* Mobile enhancements
* Authentication


