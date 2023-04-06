export interface PriceCardI {
    cardIndex?: number;
    title?: string;
    label?: string;
    href?: string;
    btnText?: string;
    links?: string[];
    price?: string;
    priceText?: string;
    priceLabel?: string;
    onClick?: () => void;
}