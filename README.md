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

Input password with close button:

![alt text](readme_images/image-1.png)

Input text without close button:

![alt text](readme_images/image-2.png)

---

### Toast Component

Component for displaying notifications with automatic closing and animations.

**Features:**
- Types: `success`, `error`, `info`, `custom`
- Automatic closing with configurable time
- Show/hide animations
- Mobile device adaptivity

**Screenshots:**

Toast success message with close button:

![alt text](readme_images/image-3.png)

Toast error message with close button:

![alt text](readme_images/image-4.png)

Toast info message without close button:

![alt text](readme_images/image-5.png)

---

### SidebarMenu Component

Side menu with support for nested elements and animated expansion.

**Features:**
- Multi-level menu
- Opening animations
- Backdrop overlay
- Adaptive design

**Screenshots:**

SidebarMenu closed:

![alt text](readme_images/image-6.png)

SidebarMenu open with expanded submenus:

![alt text](readme_images/image-7.png)

## 📚 Storybook

Run Storybook for interactive viewing of all components:

```bash
npm run storybook
```

**Storybook UI:**

![alt text](readme_images/image-8.png)

Storybook with components in different states:

![alt text](readme_images/image-9.png)
![alt text](readme_images/image-10.png)
![alt text](readme_images/image-11.png)

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
