import { LottoType, RoundsType } from "@/utils/type";
import { get, post, put } from ".";

async function getAllRoundInfo(params: RoundsType) {
  const { size = 1, page = 1 } = params;
  const url = `/rounds?size=${size}&page=${page}`;

  return get({ url });
}

async function getRoundInfo(num: number) {
  const url = `/dhlottery/${num}`;

  return put({ url });
}

async function createLotto(body: LottoType[]) {
  const url = "/lotto-tickets";

  return post({ url, body });
}

const LottoApi = {
  getAllRoundInfo,
  getRoundInfo,
  createLotto,
};

export default LottoApi;
