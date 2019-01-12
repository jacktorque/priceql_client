import gql from "graphql-tag";

export const HOME_PAGE = gql`
  {
    price(
      delngDe: "20190111"
      whsalCd: "360301"
      prdlstCd: "0804"
      numOfRows: "200"
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
