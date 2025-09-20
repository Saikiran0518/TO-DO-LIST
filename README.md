# 📝 React Todo App  

A simple and elegant Todo List application built with **React**.  
This app allows users to add, edit, delete, and mark tasks as complete.  

---

## 🚀 Features  
- ➕ Add new tasks  
- ✅ Mark tasks as complete/incomplete with a checkbox  
- ✏️ Edit existing tasks  
- ❌ Delete tasks  
- 🎨 Clean and professional UI  
- ⚡ Built using React functional components & hooks (`useState`)  

---

## 📂 Project Structure  

```
todo-app/
│
├── src/
│   ├── App.jsx            # Main app component (manages todos state)
│   ├── index.js           # Entry point (renders <App />)
│   ├── components/
│   │   ├── Header.jsx     # Input form to add new todos
│   │   ├── ToDoList.jsx   # Renders list of todos
│   │   └── ToDoItem.jsx   # Represents a single todo (checkbox, edit, delete)
│   ├── App.css            # Styles for the app
│
├── package.json           # Project dependencies & scripts
└── README.md              # Documentation
```

---

## ⚙️ How to Run the Project  

1. **Clone the repository**  
   ```bash
   git clone https://github.com/Saikiran0518/to-do-list. 
   cd todo-app
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Start development server**  
   ```bash
   npm start
   ```
   The app will be available at: **http://localhost:3000**

4. **Build for production**  
   ```bash
   npm run build
   ```

---

## 🛠️ Code Explanation  

### `App.jsx`  
- Maintains the **todos state**.  
- Provides core operations:  
  - `addTodo` → Add a new todo.  
  - `toggleTodo` → Mark a todo complete/incomplete.  
  - `deleteTodo` → Remove a todo.  
  - `editTodo` → Update todo text.  
- Passes state & functions to child components (`Header`, `ToDoList`).  

---

### `Header.jsx`  
- Contains a form with an input and button.  
- Uses **controlled input** with `useState`.  
- Calls `addTodo` (from App) when user submits the form.  
- Prevents empty submissions.  

---

### `ToDoList.jsx`  
- Loops over todos array and renders each task using `ToDoItem`.  
- Shows a message if there are no tasks.  

---

### `ToDoItem.jsx`  
- Represents a single task.  
- Contains:  
  - ✅ **Checkbox** → toggles completed state.  
  - 📝 **Edit** → lets user update todo text.  
  - ❌ **Delete** → removes the todo.  
- Uses local state `isEditing` and `newText` for inline editing.  

---

## 🎨 Styling  
- Professional styling with shadows, hover effects, and transitions.  
- Uses modern CSS (`box-shadow`, `linear-gradient`, transitions).  

---

## 📌 Submission  

👉 **GitHub  repository  link containing the project:**
(https://github.com/Saikiran0518/to-do-list. )

 

---


