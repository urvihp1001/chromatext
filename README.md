# chromatext

# Solid.js Theme Management
This repository contains a Solid.js module for managing and switching themes in a Solid.js application. It provides a context-based approach to handle theme-related data such as color and title.

## Getting Started

These instructions will help you understand and use the Solid.js theme management module in your projects.

### Prerequisites

Before you begin, make sure you have Solid.js installed in your project, or you can use https://playground.solidjs.com/

### Installation

1. Clone or download this repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/solidjs-theme-management.git
Include the theme.ts file in your Solid.js project to access the theme management functionality:
import { createContext, useContext } from "solid-js";
import { createStore } from 'solid-js/store';
## Usage
### Creating and Providing a Theme
Import the ThemeProvider component from the theme.ts module to wrap your application with a theme context:
import { ThemeProvider } from "./theme";
Wrap your application with the ThemeProvider component and provide initial theme values:
<ThemeProvider color="#00ff00" title="Fallback Title">
  {/* Your application components */}
</ThemeProvider>
## Using the Theme
Import the useTheme hook from the theme.ts module in any component where you want to access the theme:
import { useTheme } from "./theme";
Use the useTheme hook to access the theme state and actions:
const [theme, { changeColor, changeTitle }] = useTheme();
You can now use the theme object to style your components based on the theme color and title. You can also use the changeColor and changeTitle functions to update the theme dynamically.
## Contributing
Contributions to this theme management module are welcome. If you'd like to contribute, please follow our contribution guidelines.

## License
This theme management module is open-source software licensed under the MIT License.
