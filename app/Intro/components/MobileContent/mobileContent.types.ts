export interface MobileContentProps {
    tab: number | null;
    setTab: (tab: number) => void;
}

export type MobileContentComponent = null | {
    title: string;
    img: string;
    notification: number;
    component: () => JSX.Element;
}