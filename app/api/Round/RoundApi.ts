import { RoundsType } from "@/utils/type";
import { get } from "..";

async function getAllRoundInfo(params: RoundsType) {
  const { size = 1, page = 1, token = "" } = params;
  const url = `/rounds?size=${size}&page=${page}`;

  return get({ url, token });
}

const RoundApi = {
  getAllRoundInfo,
};

export default RoundApi;
