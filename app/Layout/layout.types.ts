export interface LayoutProps { 
    title?: string;
    children: JSX.Element;
    description?: string;
};

export type LayoutTheme = "light" | "dark";