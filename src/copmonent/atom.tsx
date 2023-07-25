import { atom } from "recoil";

export const TodoData = atom({
  key: "Todo",
  default: [
    {
      _id: "",
      todo: "",
      user: "",
      done: false,
    },
  ],
});
