// src/utils/applyTheme.ts
export type Theme = {
  primaryColor: string;
  backgroundColor?: string;
  textColor?: string;
};

export const applyTheme = (theme: Theme = { primaryColor: '#007bff' }) => {
  const root = document.documentElement;

  root.style.setProperty('--primary-color', theme.primaryColor);
  if (theme.backgroundColor) root.style.setProperty('--background-color', theme.backgroundColor);
  if (theme.textColor) root.style.setProperty('--text-color', theme.textColor);
};
