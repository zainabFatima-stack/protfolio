"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

// next-themes injects an inline <script> to set the theme class before
// paint (avoids a flash of the wrong theme). React 19's dev-mode warns
// about any <script> tag rendered by a component, but this one is a
// known false positive: https://github.com/pacocoursey/next-themes/issues/387
// The script still runs correctly, so we just quiet the noisy log in dev.
if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  const originalError = console.error;
  console.error = (...args) => {
    if (
      typeof args[0] === "string" &&
      args[0].includes("Encountered a script tag")
    ) {
      return;
    }
    originalError(...args);
  };
}

export function ThemeProvider({ children }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}