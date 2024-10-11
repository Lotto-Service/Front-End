import RoundApi from "@/app/api/Round/RoundApi";
import { RoundsType } from "@/utils/type";
import { QueryClient, useQuery } from "@tanstack/react-query";

const useGetAllRound = (param: RoundsType) => {
  const { getAllRoundInfo } = RoundApi;
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["Round", param],
    queryFn: () => getAllRoundInfo(param),
  });

  return {
    data,
    error,
    isLoading,
    refetch,
  };
};

export default useGetAllRound;
