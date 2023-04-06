export const payment = async (body: Record<string, object>) => {
    const response = await fetch(
        `https://api.bookinglane.com/api/forms/special-offer`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "App-Version": "1.2.36",
            },
            body: JSON.stringify({
                ...body,
            }),
        }
    );

    if (!response.ok) {
        throw new Error(await response.json());
    };

    throw new Response(await response.json());
};

export const getCountries = async () => {
    const response = await fetch(
        `https://api.bookinglane.com/api/place/country`,
        {
            next: { 
                revalidate: (60 * 24) * 7
            },
            method: "GET",
        }
    );
    const data = await response.json();
    return data;
};

export const getStates = async () => {
    const response = await fetch(
        `https://api.bookinglane.com/api/place/states`,
        {
            next: { 
                revalidate: (60 * 24) * 7
            },
            method: "GET",
        }
    );
    const data = await response.json();
    return data;
};
  
export const getCities = async (id: number | string) => {
    const response = await fetch(
        `https://api.bookinglane.com/api/place/cities/${id}`,
        {
            next: { 
                revalidate: (60 * 24) * 7
            },
            method: "GET",
        }
    );
    const data = await response.json();
    return data;
};

export const sendFeedback = async (mainState: Record<string, string>) => {
    const response = await fetch("https://api.bookinglane.com/api/contacts", {
        next: { 
            revalidate: (60 * 24) * 7
        },
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company: {
            ...mainState,
          },
          isContactUs: true,
        }),
    });

    return response;
}