// Todo Application with Local Storage

class TodoApp {
    constructor() {
        this.todos = [];
        this.currentFilter = 'all';
        this.storageKey = 'cyberdevil_todos';
        
        // DOM Elements
        this.todoInput = document.getElementById('todoInput');
        this.addBtn = document.getElementById('addBtn');
        this.todoList = document.getElementById('todoList');
        this.filterBtns = document.querySelectorAll('.filter-btn');
        this.clearBtn = document.getElementById('clearBtn');
        this.clearAllBtn = document.getElementById('clearAllBtn');
        this.totalCount = document.getElementById('totalCount');
        this.completedCount = document.getElementById('completedCount');
        this.remainingCount = document.getElementById('remainingCount');
        
        this.init();
    }

    init() {
        // Load todos from local storage
        this.loadTodos();
        
        // Event listeners
        this.addBtn.addEventListener('click', () => this.addTodo());
        this.todoInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTodo();
        });
        
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => this.setFilter(e.target.dataset.filter));
        });
        
        this.clearBtn.addEventListener('click', () => this.clearCompleted());
        this.clearAllBtn.addEventListener('click', () => this.clearAll());
        
        // Initial render
        this.render();
    }

    // Load todos from local storage
    loadTodos() {
        const stored = localStorage.getItem(this.storageKey);
        this.todos = stored ? JSON.parse(stored) : [];
    }

    // Save todos to local storage
    saveTodos() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.todos));
    }

    // Add new todo
    addTodo() {
        const text = this.todoInput.value.trim();
        
        if (text === '') {
            alert('Please enter a task!');
            return;
        }
        
        const todo = {
            id: Date.now(),
            text: text,
            completed: false,
            createdAt: new Date().toLocaleString()
        };
        
        this.todos.unshift(todo);
        this.saveTodos();
        this.todoInput.value = '';
        this.render();
    }

    // Delete todo
    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.saveTodos();
        this.render();
    }

    // Toggle todo completion
    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.saveTodos();
            this.render();
        }
    }

    // Set filter
    setFilter(filter) {
        this.currentFilter = filter;
        
        // Update active button
        this.filterBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.filter === filter) {
                btn.classList.add('active');
            }
        });
        
        this.render();
    }

    // Clear completed todos
    clearCompleted() {
        const initialLength = this.todos.length;
        this.todos = this.todos.filter(todo => !todo.completed);
        
        if (this.todos.length < initialLength) {
            this.saveTodos();
            this.render();
        } else {
            alert('No completed tasks to clear!');
        }
    }

    // Clear all todos
    clearAll() {
        if (this.todos.length === 0) {
            alert('No tasks to clear!');
            return;
        }
        
        if (confirm('Are you sure you want to delete all tasks? This cannot be undone.')) {
            this.todos = [];
            this.saveTodos();
            this.render();
        }
    }

    // Get filtered todos
    getFilteredTodos() {
        switch (this.currentFilter) {
            case 'completed':
                return this.todos.filter(todo => todo.completed);
            case 'active':
                return this.todos.filter(todo => !todo.completed);
            case 'all':
            default:
                return this.todos;
        }
    }

    // Update stats
    updateStats() {
        const total = this.todos.length;
        const completed = this.todos.filter(todo => todo.completed).length;
        const remaining = total - completed;
        
        this.totalCount.textContent = total;
        this.completedCount.textContent = completed;
        this.remainingCount.textContent = remaining;
    }

    // Render todos
    render() {
        const filteredTodos = this.getFilteredTodos();
        
        // Clear list
        this.todoList.innerHTML = '';
        
        if (filteredTodos.length === 0) {
            this.todoList.innerHTML = '<div class="empty-message">No tasks to display<\/div>';
        } else {
            filteredTodos.forEach(todo => {
                const li = document.createElement('li');
                li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
                li.innerHTML = `
                    <input 
                        type="checkbox" 
                        class="todo-checkbox" 
                        ${todo.completed ? 'checked' : ''}
                        onchange="app.toggleTodo(${todo.id})"
                    >
                    <span class="todo-text">${this.escapeHtml(todo.text)}<\/span>
                    <button class="delete-btn" onclick="app.deleteTodo(${todo.id})">Delete<\/button>
                `;
                this.todoList.appendChild(li);
            });
        }
        
        // Update stats
        this.updateStats();
    }

    // Escape HTML to prevent XSS
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialize app when DOM is loaded
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new TodoApp();
});