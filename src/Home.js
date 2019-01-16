import React, { Component } from "react";
import { Query } from "react-apollo";
import { HOME_PAGE } from "./query";
import ReactTable from "react-table";
import "react-table/react-table.css";
import DatePicker from "react-date-picker";
import moment from "moment";
import Button from "@material-ui/core/Button";

class Home extends Component {
  state = {
    date: new Date(),
    cprCd: "36030101"
  };

  onChange = date => this.setState({ date });
  onClick1 = () => this.setState({ cprCd: "36030101" });
  onClick2 = () => this.setState({ cprCd: "36030102" });
  onClick3 = () => this.setState({ cprCd: "36030103" });

  render() {
    return (
      <dvi>
        <DatePicker onChange={this.onChange} value={this.state.date} />
        <Button onClick={this.onClick1} variant="outlined" color="primary">
          남도
        </Button>
        <Button onClick={this.onClick2} variant="outlined" color="secondary">
          원협
        </Button>
        <Button onClick={this.onClick3} variant="contained">
          남일
        </Button>

        <Query
          query={HOME_PAGE}
          variables={{
            delngDe: moment(this.state.date).format("YYYYMMDD"),
            cprCd: this.state.cprCd
          }}
        >
          {({ loding, data, error }) => {
            if (loding) return "loding";
            if (error) return "오류";
            return (
              <div>
                <ReactTable
                  data={data.price}
                  previousText="이전"
                  nextText="다음"
                  columns={[
                    {
                      Header: "품종",
                      accessor: "stdSpciesNewNm",
                      maxWidth: 50
                    },
                    {
                      Header: "kg",
                      accessor: "delngPrut",
                      maxWidth: 50
                    },
                    {
                      Header: "등급",
                      accessor: "stdQlityNewNm",
                      maxWidth: 50
                    },
                    {
                      Header: "가격",
                      accessor: "sbidPric",
                      maxWidth: 80
                    },

                    {
                      Header: "산지",
                      accessor: "stdMtcNewNm",
                      maxWidth: 130
                    }
                  ]}
                  defaultPageSize={10}
                  className="-striped -highlight"
                />
                <br />
              </div>
            );
          }}
        </Query>
      </dvi>
    );
  }
}

export default Home;
