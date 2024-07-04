import { IReqBible } from "@/types/bible";
import { bibleInstance } from "../axios";

export const getRandomBible = async (data: IReqBible) => {
  const res = await bibleInstance.get(
    `&doc=${data.doctype}&start=${data.chapter}:${data.verse}&end=${data.chapter}:${data.verse}`,
  );
  return res.data;
};
