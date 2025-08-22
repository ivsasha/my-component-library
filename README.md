# React UI Components Library

Collection of modern and adaptive React components with elegant design and smooth animations.

## 📦 Installation

```bash
# Clone repository
git clone <repository-url>
cd react-ui-components

# Install dependencies
npm install
npx storybook init

# Run Storybook
npm run storybook
```

## 🛠️ Technologies

- **React 18** with TypeScript
- **CSS3** with modern animations and gradients
- **Responsive Design** for all devices
- **Storybook** for component demonstration

## 🎨 Components

### Input Component

Universal component for data input with support for different types, labels and icons.

**Features:**

- Types: `text`, `password`, `number`
- Clear button (clearable)
- Show/hide password

**Screenshots:**

_Input password with close button:_
![alt text](image-1.png)

_Input text without close button:_
![alt text](image-2.png)

---

### Toast Component

Component for displaying notifications with automatic closing and animations.

**Features:**

- Types: `success`, `error`, `info`, `custom`
- Automatic closing with configurable time
- Show/hide animations
- Mobile device adaptivity

**Screenshots:**

_Toast success message with close button:_
![alt text](image-3.png)

_Toast error message with close button:_
![alt text](image-4.png)

_Toast info message without close button:_
![alt text](image-5.png)

---

### SidebarMenu Component

Side menu with support for nested elements and animated expansion.

**Features:**

- Multi-level menu
- Opening animations
- Backdrop overlay
- Adaptive design

**Screenshots:**

_SidebarMenu closed:_
![alt text](image-6.png)

_SidebarMenu open with expanded submenus:_
![alt text](image-7.png)

## 📚 Storybook

Run Storybook for interactive viewing of all components:

```bash
npm run storybook
```

**Storybook UI:**
![alt text](image-8.png)

_Storybook with components in different states:_
![alt text](image-9.png)
![alt text](image-10.png)
![alt text](image-11.png)

## 🎯 Design Features

### Color Palette

- **Primary:** `#3b82f6` (blue)
- **Success:** `#10b981` (green)
- **Error:** `#ef4444` (red)
- **Info:** `#3b82f6` (blue)

### Animations

- **Duration:** 200-400ms
- **Easing:** `cubic-bezier(0.17, 0.88, 0.32, 1.27)`
- **Effects:** fade, slide, scale, bounce

### Responsiveness

- **Desktop:** > 768px
- **Mobile:** ≤ 768px
- **Responsive breakpoints** for all components

### TypeScript Types

All components have full TypeScript typing for better development experience.
