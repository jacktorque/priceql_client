import React, { Component } from "react";
import { Query } from "react-apollo";
import { HOME_PAGE } from "./query";
import ReactTable from "react-table";
import "react-table/react-table.css";
import DatePicker from "react-date-picker";
import moment from "moment";

class Home extends Component {
  state = {
    date: new Date()
  };

  onChange = date => this.setState({ date });

  render() {
    console.log(moment(this.state.date).format("YYYY-MM-DD"));
    return (
      <Query query={HOME_PAGE}>
        {({ loding, data, error }) => {
          if (loding) return "loding";
          if (error) return "error";
          return (
            <div>
              <DatePicker onChange={this.onChange} value={this.state.date} />
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
    );
  }
}

export default Home;
