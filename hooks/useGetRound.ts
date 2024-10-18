import LottoApi from "@/app/api/LottoApi";
import { useQuery } from "@tanstack/react-query";

const useGetRound = (num: number) => {
  const { getRoundInfo } = LottoApi;

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["Round", num],
    queryFn: () => getRoundInfo(num),
    enabled: !!num,
  });

  return {
    data: data?.data,
    error,
    isLoading,
    refetch,
  };
};

export default useGetRound;
