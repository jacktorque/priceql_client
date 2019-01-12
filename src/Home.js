import React, { Fragment } from "react";
import { Query } from "react-apollo";
import { HOME_PAGE } from "./query";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const Home = () => (
  <Query query={HOME_PAGE}>
    {({ loding, data, error }) => {
      if (loding) return "loding";
      if (error) return "error";
      return (
        <Fragment>
          <Table className="aaa">
            <TableHead>
              <TableRow>
                <TableCell width="30">품종</TableCell>
                <TableCell width="30">등급</TableCell>
                <TableCell width="30">가격</TableCell>
                <TableCell width="30">단위</TableCell>

                <TableCell width="30">거래량</TableCell>
                <TableCell width="30">포장</TableCell>

                <TableCell width="50">산지</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.price &&
                data.price.map(a => (
                  <TableRow>
                    <TableCell>{a.stdSpciesNewNm}</TableCell>
                    <TableCell>{a.stdQlityNewNm}</TableCell>
                    <TableCell>{a.sbidPric}원</TableCell>
                    <TableCell>{a.stdUnitNewNm}</TableCell>
                    <TableCell>{a.delngQy}</TableCell>

                    <TableCell>{a.stdFrmlcNewNm}</TableCell>

                    <TableCell>{a.stdMtcNewNm}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Fragment>
      );
    }}
  </Query>
);

export default Home;
