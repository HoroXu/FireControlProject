import Axios from "../utils/axios";

// 1 logo 2 背景图 3 轮播
export const queryLogo = async (params?: number) => {
  try {
    return await Axios.get("/f/qb", { bannerType: params });
  } catch (err) {
    console.log(err);
  }
};
// 0 二维码 1 友情链接 2 其它公司宣传
export const queryCompanyInfo = async (params?: number) => {
  try {
    return await Axios.get("/f/ql", { linkType: params });
  } catch (err) {
    console.log(err);
  }
};

export const queryContactInfo = async () => {
  try {
    return await Axios.get("/f/qc");
  } catch (err) {
    console.log(err);
  }
};

// 导航
export const queryMenu = async (params?: boolean) => {
  try {
    return await Axios.get("/f/qme", { allowParrater: params });
  } catch (err) {
    console.log(err);
  }
};

export const queryEngineeringCase = async (
  itemCode: number,
  pageNum: number,
  pageSize: number
) => {
  try {
    return await Axios.get("f/qp", { itemCode, pageNum, pageSize });
  } catch (err) {
    console.log(err);
  }
};

export const queryNewsArea = async (
  mc?: number,
  pageNum?: number,
  pageSize?: number,
  keyWord?: string
) => {
  try {
    return await Axios.get("f/qa", { mc, pageNum, pageSize, keyWord });
  } catch (err) {
    console.log(err);
  }
};
export const searchService = async (keyWord: string) => {
  try {
    return await Axios.get("f/qa", { keyWord });
  } catch (err) {
    console.log(err);
  }
};

export const queryDetail = async (docId: any) => {
  console.log(docId, "docId====");
  try {
    return await Axios.get("f/qo", {
      docId,
    });
  } catch (err) {
    console.log(err);
  }
};

// 用于底备的备案号和站点统计的
export const queryRecord = async (linkType: any) => {
  try {
    return await Axios.get("f/ql", {
      linkType,
    });
  } catch (err) {
    console.log(err);
  }
};
