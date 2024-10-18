import { RoundsType } from "@/utils/type";
import { get, put } from "..";

async function getAllRoundInfo(params: RoundsType) {
  const { size = 1, page = 1 } = params;
  const url = `/rounds?size=${size}&page=${page}`;

  return get({ url });
}

async function getRoundInfo(num: number) {
  const url = `/dhlottery/${num}`;

  return put({ url });
}

const RoundApi = {
  getAllRoundInfo,
  getRoundInfo,
};

export default RoundApi;
