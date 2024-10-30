import LottoApi from "@/app/api/lottoApi";
import { RoundsType } from "@/utils/type";
import { QueryClient, useQuery } from "@tanstack/react-query";

const { getAllRoundInfo } = LottoApi;

export function useGetAllRound(params: RoundsType = { size: 1, page: 1 }) {
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
}

export async function usePreGetAllRound(
  queryClient: QueryClient,
  params: RoundsType = {
    size: 1,
    page: 1,
  }
) {
  await queryClient.prefetchQuery({
    queryKey: ["AllRound", params],
    queryFn: () => getAllRoundInfo(params),
  });
}
