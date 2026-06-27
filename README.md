# ✅ To-Do List App

A clean, minimal **To-Do List** web application built with **React 19** and **Vite**, styled using **Tailwind CSS**. Tasks are persisted in the browser's **localStorage**, so they survive page refreshes.

---

## 🚀 Features

- ➕ **Add Tasks** — Type a task and click **Add +** (or press Enter)
- ✔️ **Complete Tasks** — Click a task to toggle its completion state
- 🗑️ **Delete Tasks** — Remove individual tasks with the delete icon
- 💾 **Persistent Storage** — All tasks are saved to `localStorage` automatically
- ⚡ **Blazing Fast** — Powered by Vite's instant HMR dev server

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React](https://react.dev/) | UI library |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [ESLint](https://eslint.org/) | Code linting |

---

## 📁 Project Structure

```
todo/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── todo_icon.png
│   │   ├── tick.png
│   │   ├── not_tick.png
│   │   └── delete.png
│   ├── components/
│   │   ├── Todo.jsx        # Main container — input, state, localStorage logic
│   │   └── TodoItem.jsx    # Individual todo row with toggle & delete
│   ├── App.jsx             # Root component
│   ├── main.jsx            # React DOM entry point
│   └── index.css           # Global styles
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
└── package.json
```

---

## ⚙️ Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/NihalSinghrana809/Todos.git
cd todo

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be available at **http://localhost:5173** by default.

---

## 📜 Available Scripts

| Script | Command | Description |
|---|---|---|
| Dev Server | `npm run dev` | Start Vite development server with HMR |
| Build | `npm run build` | Build optimized production bundle to `dist/` |
| Preview | `npm run preview` | Preview the production build locally |
| Lint | `npm run lint` | Run ESLint across the source files |

---

## 🧩 Component Overview

### `Todo.jsx`
The core component that manages all application state:
- Holds `todoList` state, initialized from `localStorage`
- Exposes `add`, `deleteTodo`, and `toggle` handlers passed down as props
- Uses `useEffect` to sync state changes back to `localStorage`

### `TodoItem.jsx`
A stateless presentational component representing a single task row:
- Displays the task text with a strikethrough style when completed
- Shows a **tick** or **not-tick** icon based on completion status
- Includes a delete icon to remove the task

---

## 🙌 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'Add my feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a Pull Request

