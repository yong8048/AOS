import { getRandomBible } from "@/apis/services/bible";
import { IReqBible, IResBible } from "@/types/bible";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useGetBible = (data: IReqBible) => {
  const {
    data: bible,
    isLoading,
    isError,
  } = useQuery<IResBible[], AxiosError>({
    queryKey: ["bible", data.doctype, data.chapter, data.verse],
    queryFn: () => getRandomBible(data),
  });
  return { bible, isLoading, isError };
};
