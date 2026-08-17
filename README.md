# 🎯 CyberDevil To-Do List

A sleek, modern to-do list application with local storage functionality. Stay organized, manage your tasks efficiently, and persist your data across browser sessions.

## ✨ Features

### Core Features:
- ✅ **Add Tasks** - Easily add new tasks to your list
- ✅ **Complete Tasks** - Check off tasks as you complete them
- ✅ **Delete Tasks** - Remove tasks you no longer need
- 💾 **Local Storage** - Your tasks are automatically saved to your browser
- 🎨 **Beautiful UI** - Modern gradient design with smooth animations
- 📱 **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- 🔍 **Filter Tasks** - View All, Active, or Completed tasks
- 📊 **Real-time Statistics** - Track total, completed, and remaining tasks
- 🗑️ **Bulk Actions** - Clear completed or all tasks at once

## 🚀 How to Use

### Getting Started
1. **Open the Application**
   - Simply open `index.html` in your web browser
   - No installation or dependencies required!

### Adding Tasks
1. Type your task in the input field at the top
2. Press **Enter** or click the **"Add Task"** button
3. Your task appears in the list instantly

### Managing Tasks
- **Complete a Task**: Check the checkbox next to the task
- **Delete a Task**: Click the "Delete" button on the task
- **View Completed Tasks**: They appear with strikethrough text and reduced opacity

### Filtering Tasks
Use the filter buttons to view different task sets:
- **All** - Show all tasks
- **Active** - Show only incomplete tasks
- **Completed** - Show only finished tasks

### Clearing Tasks
- **Clear Completed**: Click "Clear Completed Tasks" to remove finished tasks
- **Clear All**: Click "Clear All Tasks" to remove everything (confirmation required)

## 💾 Local Storage

Your tasks are automatically saved to your browser's local storage:
- ✅ Tasks persist even after closing the browser
- ✅ Data is stored locally on your device (no server required)
- ✅ Your data is private and never sent anywhere
- ✅ Storage Key: `cyberdevil_todos`

## 📁 File Structure

```
cyberdevil/
├── index.html      # HTML structure and markup
├── styles.css      # Styling and responsive design
├── app.js          # JavaScript functionality and logic
└── README.md       # This documentation file
```

## 🛠️ Technical Details

- **No Dependencies**: Pure HTML, CSS, and vanilla JavaScript
- **Browser Compatibility**: Works in all modern browsers (Chrome 60+, Firefox 55+, Safari 12+, Edge 79+)
- **Security**: HTML escaping to prevent XSS attacks
- **Responsive**: Mobile-first design approach
- **Performance**: Lightweight and fast

## 🎨 Customization

### Change the Gradient Colors
Edit the gradient in `styles.css`:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Modify the Storage Key
Edit the `storageKey` in `app.js`:
```javascript
this.storageKey = 'cyberdevil_todos';
```

### Add New Features

**Add Due Dates:**
- Include a date field in the todo object
- Add a date picker to the HTML input
- Modify the render function to display dates

**Add Categories/Tags:**
- Add a tags array to todo objects
- Add tag filter buttons
- Filter todos by selected tags

**Export/Import:**
- Add functionality to export todos as JSON or CSV
- Add file input to import previously exported todos

## 🌐 Browser Support

| Browser | Version |
|---------|----------|
| Chrome  | 60+      |
| Firefox | 55+      |
| Safari  | 12+      |
| Edge    | 79+      |

## 📋 Todo Object Structure

```javascript
{
  id: 1692345600000,           // Unique identifier (timestamp)
  text: "Buy groceries",        // Task description
  completed: false,              // Completion status
  createdAt: "8/17/2026..."    // Creation timestamp
}
```

## 🔒 Security

- All user input is HTML-escaped to prevent XSS attacks
- No external APIs or third-party services used
- Data stored only in browser's local storage

## 📝 Version History

- **v1.0.0** - Initial release with core features and local storage

## 💡 Tips & Tricks

1. **Keyboard Shortcuts**: Press Enter to add a task instead of clicking the button
2. **Quick Filtering**: Use filter buttons to focus on active tasks
3. **Stats Dashboard**: Monitor your productivity with the real-time statistics
4. **Data Persistence**: Don't worry about losing data - everything is automatically saved!

## 🤝 Contributing

This is an open-source project. Feel free to:
- Fork the repository
- Make improvements
- Submit pull requests

## 📄 License

Open source - feel free to use and modify!

## 👨‍💻 Author

**CyberDevil** - Keeping you organized and productive in 2026 and beyond! 🚀

---

**Made with ❤️ for productivity**
