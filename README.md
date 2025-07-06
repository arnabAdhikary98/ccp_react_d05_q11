# Simple Props Drilling Example using Vite + React

## 🎯 Problem Statement

Build a React application that demonstrates props drilling by passing a single state (user's name) from a parent component (`App.jsx`) down to a deeply nested child component (`BottomMainRight.jsx`). The parent component should allow the user to input their name, which is then displayed in the nested child component.

---

## ⚡ Setup using Vite

```bash
npm create vite@latest my-props-drilling-app --template react
cd my-props-drilling-app
npm install
```

---

## 📁 Folder Structure

```
src/
├── App.jsx
├── components/
│   ├── Main.jsx
│   ├── MainLeft.jsx
│   ├── MainRight.jsx
│   ├── BottomMainRight.jsx
├── index.css
├── main.jsx
```

---

## 💻 Code Files

### `src/main.jsx`

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

### `src/App.jsx`

```jsx
import React, { useState } from 'react';
import Main from './components/Main';

function App() {
  const [name, setName] = useState('');

  return (
    <div className="app">
      <h1>Props Drilling Example</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Main name={name} />
    </div>
  );
}

export default App;
```

### `src/components/Main.jsx`

```jsx
import React from 'react';
import MainLeft from './MainLeft';
import MainRight from './MainRight';

function Main({ name }) {
  return (
    <div style={{ display: 'flex', marginTop: '20px' }}>
      <MainLeft />
      <MainRight name={name} />
    </div>
  );
}

export default Main;
```

### `src/components/MainLeft.jsx`

```jsx
import React from 'react';

function MainLeft() {
  return (
    <div style={{ flex: 1, border: '1px solid gray', padding: '10px' }}>
      <h2>Main Left</h2>
      <p>Placeholder content here.</p>
    </div>
  );
}

export default MainLeft;
```

### `src/components/MainRight.jsx`

```jsx
import React from 'react';
import BottomMainRight from './BottomMainRight';

function MainRight({ name }) {
  return (
    <div style={{ flex: 1, border: '1px solid gray', padding: '10px' }}>
      <h2>Main Right</h2>
      <BottomMainRight name={name} />
    </div>
  );
}

export default MainRight;
```

### `src/components/BottomMainRight.jsx`

```jsx
import React from 'react';

function BottomMainRight({ name }) {
  return (
    <div style={{ marginTop: '20px', padding: '10px', border: '1px dashed gray' }}>
      <h3>Bottom Main Right</h3>
      <p>User Name: <strong>{name || 'No name entered'}</strong></p>
    </div>
  );
}

export default BottomMainRight;
```

### `src/index.css`

```css
body {
  font-family: Arial, sans-serif;
  margin: 20px;
}

input {
  padding: 8px;
  font-size: 16px;
}
```

---

## 🚀 Run the App

```bash
npm run dev
```

Visit `http://localhost:5173/` to see the app in action.

---

## 💡 How it works

* You type your name in the input field in `App`.
* `App` holds the `name` state and passes it down as props to `Main`.
* `Main` forwards the `name` prop to `MainRight`.
* `MainRight` further passes it down to `BottomMainRight`, where it is finally displayed.

This flow demonstrates **props drilling**, where data is passed through multiple intermediate components even if they don’t directly use it.

---
