//Contents
import Affiliates from "@/app/Intro/components/MobileContent/contents/Affiliates";
import Calendar from "@/app/Intro/components/MobileContent/contents/Calendar";
import Clients from "@/app/Intro/components/MobileContent/contents/Clients";
import CollectPayment from "@/app/Intro/components/MobileContent/contents/CollectPayment";
import Reservations from "@/app/Intro/components/MobileContent/contents/Reservations";

export const mobileArr = [
    {
        title: 'Calendar',
        img: '/images/formobile/ic_calendar.svg',
        notification: 3,
        component: Calendar
    },
    {
        title: 'Reservations',
        img: '/images/formobile/ic_reservations.svg',
        notification: 5,
        component: Reservations
    },
    {
        title: 'Clients',
        img: '/images/formobile/ic_clients.svg',
        notification: 0,
        component: Clients
    },
    {
        title: 'Affiliates',
        img: '/images/formobile/ic_partners.svg',
        notification: 0,
        component: Affiliates
    },
    {
        title: 'Collect payment',
        img: '/images/formobile/calculator.svg',
        notification: 0,
        component: CollectPayment
    },
    {
        title: 'Invoices',
        img: '/images/formobile/receipt-2.svg',
        notification: 0
    },
    {
        title: 'Fleet',
        img: '/images/formobile/car.svg',
        notification: 0
    },
    {
        title: 'Flight tracking',
        img: '/images/formobile/airplane.svg',
        notification: 0
    },
    {
        title: 'Drivers',
        img: '/images/formobile/ic_wheel.svg',
        notification: 0
    },
    {
        title: 'Summary',
        img: '/images/formobile/diagram.svg',
        notification: 0
    },
]
 

export const leftDates = [
    1, 8, 15, 22, 29
]

export const rightDates = [
    7, 14, 21, 28
]

export const appLInks = {
    driver: {
        play: "https://play.google.com/store/apps/details?id=com.bookinglane.driver",
        app: "https://apps.apple.com/us/app/bookinglane-driver/id1671096092"
    },
    manager: {
        play: "https://play.google.com/store/apps/details?id=com.bookinglane.manager",
        app: "https://apps.apple.com/app/id1560973031"
    }
}

export const calendlyURL = "https://calendly.com/bookinglane/demo-call?month=2021-11";

export const calendlySetting = {
    height: "100%",
}

export const days = [
    "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
]

export const barArray = [
    {
        height: "90px",
        num: "$1050.00",
    },
    {
        height: "90px",
        num: "$850.00"
    },
    {
        height: "60px",
        num: "$480.00",
        active: true,
    },
    {
        height: "90px",
        num: "$500.00"
    },
    {
        height: "60px",
        num: "$460.00",
        active: true,
    },
    {
        height: "60px",
        num: "$650.00"
    },
    {
        height: "90px",
        num: "$1070.00"
    },
]