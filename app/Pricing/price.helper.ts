import { FormEvent } from "react";

export const getPaymentInfo = (e: FormEvent) => {
    let newObj: Record<string, object> = {};
    //@ts-ignore
    Object.values(e.target.elements).forEach((item: any) => {
      if (item.localName === "input" && item.name !== "agree") {
        if (
          item.name !== "number" &&
          item.name !== "yearMonth" &&
          item.name !== "cvc" &&
          item.name !== "card"
        ) {
          newObj = {
            ...newObj,
            [item.name]: item.name === "cvc" ? parseInt(item.value) : item.value,
          };
        } else if (item.name !== "yearMonth" && item.name !== "card" && item.name !== "number") {
          newObj = {
            ...newObj,
            cardInfo: {
              ...newObj.cardInfo,
              [item.name]: item.value.replace(/(\D)/g, ""),
            },
          };
        } else if (item.name !== "card" && item.name !== "number") {
          let month = item.value.split("/")[0]
          let year = item.value.split("/")[1]
          newObj = {
            ...newObj,
            cardInfo: {
              ...newObj.cardInfo,
              expYear: year,
              expMonth: month,
            },
          };
        } else {
          const card = {
            number: item.value.replace(/(\D)/g, "")
          }
          newObj = {
            ...newObj,
            cardInfo: {
              ...newObj.cardInfo,
              ...card
            },
          };
        }
      }
    });
  
    return newObj;
};