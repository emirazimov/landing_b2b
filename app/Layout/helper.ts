import { FormEvent } from "react";

export const getFeedBackInfo = (e: FormEvent) => {
    let newObj: Record<string, string> = {};
    //@ts-ignore
    Object.values(e.target.elements).forEach((item: any) => {
      if (item.localName === "input") {
        newObj = {
          ...newObj,
          [item.name]: item.value,
        };
      }
    });
  
    return newObj;
};