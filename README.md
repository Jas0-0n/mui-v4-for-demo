# Material UI v4 Component Demo

A comprehensive React application demonstrating Material UI v4 components with functional components and hooks.

## Features

- **20+ Demo Pages** showcasing Material UI v4 components
- **40+ Components** including Buttons, Forms, Navigation, Data Display, Feedback, and more
- **React 18+** with functional components and hooks
- **ESLint** configured with React App standards
- **Responsive Design** with Material UI Grid system
- **Sidebar Navigation** for easy component browsing

## Project Structure

```
mui-v4-demo/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── pages/
│   │       ├── Dashboard.js
│   │       ├── ButtonsDemo.js
│   │       ├── TypographyDemo.js
│   │       ├── TextFieldDemo.js
│   │       ├── GridDemo.js
│   │       ├── TableDemo.js
│   │       ├── CardDemo.js
│   │       ├── DialogDemo.js
│   │       ├── IconsDemo.js
│   │       ├── SnackbarDemo.js
│   │       ├── TabsDemo.js
│   │       ├── SelectMenuDemo.js
│   │       ├── SelectionControlsDemo.js
│   │       ├── SliderDemo.js
│   │       ├── ProgressDemo.js
│   │       ├── ChipBadgeAvatarDemo.js
│   │       ├── PaperContainerDemo.js
│   │       ├── ListDemo.js
│   │       └── TooltipDemo.js
│   ├── App.js
│   └── index.js
├── .eslintrc.js
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 14+ and npm
- VSCode (recommended)

### Installation & Running

1. **Open the project in VSCode:**
   ```bash
   cd /path/to/mui-v4-demo
   code .
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

   This will install:
   - `@material-ui/core@^4.12.4`
   - `@material-ui/icons@^4.11.3`
   - `react@^18.2.0`
   - `react-dom@^18.2.0`
   - `react-scripts@5.0.1`
   - ESLint and related dev dependencies

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   - Navigate to `http://localhost:3000`
   - The app will automatically reload if you make changes

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App
- `npm run lint` - Runs ESLint on the source code

## Component Categories

### 1. **Buttons & Icons**
- Buttons (contained, text, outlined)
- Button groups
- Icon buttons
- Material Icons

### 2. **Data Display**
- Typography
- Cards
- Lists
- Tables
- Chips
- Badges
- Avatars
- Tooltips

### 3. **Inputs**
- Text fields
- Selects & menus
- Checkboxes
- Radio buttons
- Switches
- Sliders

### 4. **Navigation**
- AppBar
- Drawer (sidebar)
- Tabs
- Breadcrumbs

### 5. **Feedback**
- Dialogs
- Snackbars
- Progress indicators
- Alerts

### 6. **Layout**
- Grid system
- Paper
- Container
- Divider

## Code Quality

- **ESLint**: Configured with `eslint-config-react-app`
- **Functional Components**: All components use React hooks
- **Material UI Best Practices**: Follows Material Design guidelines
- **Responsive Design**: Mobile-first approach with breakpoints

## Development Notes

- The app uses Material UI's `makeStyles` for styling
- All state management uses React hooks (`useState`, `useEffect`)
- Components are organized by category in the sidebar
- The theme is configured in `src/index.js`

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

This project is created for demonstration purposes.