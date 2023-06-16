import { render } from "solid-js/web";
import { ThemeProvider, useTheme } from "./theme";
function App() {
  const [theme, { changeColor , changeTitle }] = useTheme();
  return (
    <>
      <h1
        style={{
          color: theme.color,
        }}
      >
        {theme.title}
      </h1>
      <input
        type="color"
        name="color"
        value={theme.color}
        onInput={(e) => changeColor(e.currentTarget.value)}
      />
      <input
        type="title"
        name="title"
        value={theme.title}
        onInput={(e) => changeTitle(e.currentTarget.value)}
      />
    </>
  );
}
render(
  () => (
    <ThemeProvider color="#ff00ff" title="Check">
      <App />
    </ThemeProvider>
  ),
  document.getElementById("app")!
);
