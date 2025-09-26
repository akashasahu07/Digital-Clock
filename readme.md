# 🕐 Modern Digital Clock

A sleek, responsive digital clock built with HTML, CSS, and JavaScript featuring dark/light mode toggle and modern glassmorphism design.

![Digital Clock Preview](https://via.placeholder.com/800x400/667eea/ffffff?text=Modern+Digital+Clock)

## ✨ Features

- **🌓 Dark/Light Mode Toggle**: Switch between themes with a single click or keyboard shortcut
- **📱 Fully Responsive**: Optimized for all devices (mobile, tablet, desktop, ultra-wide)
- **🎨 Modern Design**: Glassmorphism effects with backdrop blur and smooth animations
- **⌨️ Keyboard Shortcuts**: Quick access to features via keyboard
- **💾 Theme Persistence**: Remembers your theme preference across sessions
- **🖥️ System Theme Detection**: Automatically adapts to your system's dark/light preference
- **🎯 Fullscreen Mode**: Immersive viewing experience
- **📅 Date Display**: Shows current date below the clock
- **⚡ Smooth Animations**: Engaging hover effects and transitions

## 🚀 Demo

You can view a live demo by opening the `index.html` file in your browser.

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/akashasahu07/Digital-Clock.git
   cd Digital-Clock
   ```

2. **Or download the files directly:**
   - `index.html`
   - `style.css`
   - `script.js`

3. **Open `index.html` in your browser** - that's it!

## 📁 Project Structure

```
Digital-Clock/
│
├── index.html          # Main HTML file
├── style.css           # Stylesheet with responsive design
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with CSS variables, flexbox, and animations
- **JavaScript (ES6+)**: Dynamic functionality and theme management
- **Font Awesome 6.4.0**: Icons for theme toggle
- **Google Fonts (Orbitron)**: Modern monospace typography

## 🎯 Usage

### Basic Usage
Simply open `index.html` in your web browser to start using the digital clock.

### Theme Toggle
- **Click** the moon/sun icon in the top-right corner
- **Keyboard shortcut**: Press `T` to toggle themes
- **System preference**: Automatically detects your system's theme preference

### Fullscreen Mode
- **Keyboard shortcut**: Press `F` to toggle fullscreen mode

### Customization
You can easily customize the clock by modifying the CSS variables in `style.css`:

```css
:root {
  --bg-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --text-primary: #ffffff;
  --accent-color: #00d4ff;
  /* Add more customizations */
}
```

## 🎨 Color Themes

### Light Mode
- Primary gradient: Blue to Purple (`#667eea` → `#764ba2`)
- Accent color: Cyan (`#00d4ff`)
- Text: White with transparency

### Dark Mode
- Primary gradient: Dark to darker (`#0c0c0c` → `#1a1a1a`)
- Accent color: Bright green (`#00ff88`)
- Text: White with subtle transparency

## 📱 Responsive Breakpoints

| Device | Screen Size | Layout Adjustments |
|--------|-------------|-------------------|
| Mobile | < 480px | Smaller padding, stacked AM/PM |
| Tablet | < 768px | Medium sizing, reduced effects |
| Desktop | > 768px | Full features and animations |
| Ultra-wide | > 1920px | Larger padding and sizing |

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `T` | Toggle dark/light theme |
| `F` | Toggle fullscreen mode |

## 🔧 Browser Support

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Opera 67+

## 📝 Code Examples

### Adding Custom Time Formats

```javascript
// 24-hour format
function update24HourClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    document.getElementById('ampm').style.display = 'none';
}
```

### Custom Theme Colors

```css
/* Add your custom theme */
[data-theme="custom"] {
  --bg-primary: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%);
  --accent-color: #ffe66d;
  --text-primary: #2c3e50;
}
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines

- Follow existing code style and formatting
- Test across different browsers and devices
- Update documentation for new features
- Ensure responsive design principles

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Akasha Sahu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

## 🙋‍♂️ FAQ

**Q: Can I use this in my commercial project?**
A: Yes! This project is MIT licensed, so you can use it freely in commercial projects.

**Q: How do I change the font?**
A: Replace the Google Fonts import in the HTML and update the `font-family` in CSS.

**Q: Can I add more time zones?**
A: Yes! You can extend the JavaScript to show multiple time zones simultaneously.

**Q: Why doesn't the theme persist?**
A: Make sure your browser allows localStorage. Some privacy modes block it.

## 🔗 Related Projects

- [Analog Clock](https://github.com/akashasahu07/analog-clock) - Companion analog clock
- [World Clock](https://github.com/akashasahu07/world-clock) - Multiple timezone display
- [Pomodoro Timer](https://github.com/akashasahu07/pomodoro-timer) - Productivity timer

## 👨‍💻 Author

**Akasha Sahu**
- GitHub: [@akashasahu07](https://github.com/akashasahu07)
- LinkedIn: [akashasahu07](https://linkedin.com/in/akashasahu07)
- Portfolio: [Digital Clock Project](https://github.com/akashasahu07/Digital-Clock)

## 🌟 Acknowledgments

- [Font Awesome](https://fontawesome.com/) for beautiful icons
- [Google Fonts](https://fonts.google.com/) for the Orbitron typeface
- Inspiration from modern UI/UX design trends
- The web development community for feedback and suggestions

---

⭐ **Star this repo** if you found it helpful!

**Made with ❤️ and modern web technologies**