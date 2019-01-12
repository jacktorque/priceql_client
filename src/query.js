import gql from "graphql-tag"

export const HOME_PAGE = gql`{

price(delngDe:"20190111", whsalCd:"360301", prdlstCd:"0804",numOfRows:"2")
{
  cprUsePrdlstNm
  insttNewNm
  stdSpciesNewNm
  whsalMrktNewNm
  delngDe
  stdQlityNewNm
  sbidPric
  stdUnitNewNm
  stdMtcNewNm
}}
`