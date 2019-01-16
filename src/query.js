import gql from "graphql-tag";

export const HOME_PAGE = gql`
  query getPrice($delngDe: String!, $cprCd: String!) {
    price(
      delngDe: $delngDe
      cprCd: $cprCd
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
