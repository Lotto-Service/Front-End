import RoundApi from "@/app/api/Lotto/RoundApi";
import { RoundsType } from "@/utils/type";
import { useQuery } from "@tanstack/react-query";

const useGetAllRound = (
  params: RoundsType = { size: 1, page: 1, token: "" }
) => {
  const { getAllRoundInfo } = RoundApi;
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["AllRound", params],
    queryFn: () => getAllRoundInfo(params),
    enabled: !!params.token,
  });

  return {
    data: data?.data?.data,
    error,
    isLoading,
    refetch,
  };
};

export default useGetAllRound;
