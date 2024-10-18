import RoundApi from "@/app/api/Lotto/RoundApi";
import { useQuery } from "@tanstack/react-query";

const useGetRound = (num: number) => {
  const { getRoundInfo } = RoundApi;

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
