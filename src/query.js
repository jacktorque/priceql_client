import gql from "graphql-tag";

export const HOME_PAGE = gql`
  {
    price(
      delngDe: "20190112"
      cprCd: "36030103"
      prdlstCd: "0804"
      numOfRows: "100"
    ) {
      whsalMrktNewNm
      insttNewNm
      stdPrdlstNewNm
      stdSpciesNewNm
      delngPrut
      stdUnitNewNm
      stdFrmlcNewNm
      stdMgNewNm
      stdQlityNewNm
      sbidPric
      stdMtcNewNm
      delngQy
    }
  }
`;
