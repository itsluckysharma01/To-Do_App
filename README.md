# 📝 Modern To-Do App

Check Hare:-🫡👉https://itsluckysharma01.github.io/To-Do_App/👈👋

A beautiful, feature-rich to-do application built with vanilla HTML, CSS, and JavaScript. This app combines modern design principles with powerful functionality to help you manage your tasks effectively.

## 🌟 Features

### ✨ Core Functionality

- **Add Tasks**: Create new tasks with a clean, intuitive interface
- **Delete Tasks**: Remove completed or unwanted tasks
- **Duplicate Prevention**: Intelligent detection of duplicate tasks with user feedback
- **Persistent Storage**: All tasks are saved locally and persist between sessions

### 🔔 Smart Reminders

- **Daily Reminders**: Get notified every 24 hours for important daily tasks
- **Weekly Reminders**: Set weekly reminders for recurring tasks
- **Browser Notifications**: Desktop notifications (with user permission)
- **Visual Indicators**: Clear badges showing reminder types for each task

### 🎨 Modern Design

- **Glassmorphism UI**: Semi-transparent container with backdrop blur effects
- **Gradient Backgrounds**: Beautiful purple-to-blue gradient theme
- **Smooth Animations**: Slide-in effects, hover animations, and shimmer effects
- **Responsive Design**: Works seamlessly across different screen sizes
- **Interactive Feedback**: Visual feedback for all user interactions

### 💬 Smart Notifications

- **Success Messages**: Confirmation when tasks are added successfully
- **Error Messages**: Clear warnings for duplicate tasks or errors
- **Reminder Alerts**: Automatic notifications for scheduled reminders
- **Auto-dismissal**: Messages automatically disappear after 3 seconds

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional installations required!

### Installation

1. Clone or download the project files
2. Open `index.html` in your web browser
3. Start adding and managing your tasks!

### File Structure

```
� To-Do App/
├── 📄 index.html          # Main HTML structure
├── 🎨 style.css           # Modern CSS styling
├── ⚡ script.js           # JavaScript functionality
└── 📖 README.md           # Project documentation
```

## 🛠️ How to Use

### Adding Tasks

1. Type your task in the input field
2. Select a reminder option (None, Daily, or Weekly)
3. Click "Add Task" or press Enter
4. Your task appears with the appropriate reminder indicator

### Managing Reminders

- **📅 Daily**: Tasks with daily reminders show a green badge
- **📆 Weekly**: Tasks with weekly reminders show an orange badge
- **🔔 Notifications**: Browser notifications appear when reminders are due

### Deleting Tasks

- Click the red "Delete" button next to any task to remove it
- Tasks are permanently removed from storage

## 🎯 Technical Features

### Data Persistence

- Uses localStorage to save tasks between browser sessions
- Automatic backup and restore of all task data
- Tracks reminder schedules and last notification times

### Reminder System

- Intelligent reminder checking every hour
- Prevents spam notifications with smart timing
- Tracks creation time and last reminder time for each task

### User Experience

- **Duplicate Detection**: Case-insensitive checking prevents duplicate tasks
- **Visual Feedback**: Immediate confirmation for all actions
- **Smooth Animations**: Professional animations enhance user experience
- **Accessibility**: Clear visual indicators and intuitive interface

## 🎨 Design Highlights

### Color Scheme

- **Primary Gradient**: Purple to blue (#667eea to #764ba2)
- **Success Green**: #28a745 for positive actions
- **Error Red**: #dc3545 for warnings and delete actions
- **Info Blue**: #007bff for reminder notifications

### Animation Effects

- **Slide-in**: New tasks animate into view
- **Hover Effects**: Interactive elevation and shadow effects
- **Shimmer**: Button hover effects with light sweep animation
- **Smooth Transitions**: All interactions use eased transitions

## 🔧 Customization

### Changing Reminder Times

Edit the reminder checking intervals in `script.js`:

```javascript
// Check reminders every hour (3600000 ms)
setInterval(checkReminders, 3600000);
```

### Modifying Colors

Update the CSS gradient colors in `style.css`:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Adjusting Animations

Modify animation durations and effects in the CSS:

```css
transition: all 0.3s ease;
animation: slideIn 0.3s ease-out;
```

## 🌐 Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## 📱 Mobile Support

- Fully responsive design
- Touch-friendly interface
- Optimized for mobile browsers

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements!

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ using JavaScript, CSS3, and HTML5**
🤝@itsluckysharma01
