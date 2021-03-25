import randomFullname from "random-fullname";
import React, { useLayoutEffect, useMemo } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import "./App.scss";
import Table from "./components/Table";
import { putData } from "./redux/data-reducer";
import { Flag } from "country-flags-react";
import Flags from "country-flag-icons/react/3x2";

const App = (props) => {
  const columns = useMemo(
    () => [
      {
        Header: "Place",
        accessor: "place",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Accuracy",
        accessor: "accuracy",
      },
      {
        Header: "Rate of Fire",
        accessor: "fireRate",
      },
    ],
    []
  );
  let rng = (min, max) => {
    return Math.round((Math.random() * (max - min) + min) * 100) / 100;
  };
  let data = [];

  for (let i = 1; i < 31; i++) {
    let getRandomCoutnry = (flaglist) => {
      let keys = Object.keys(flaglist);
      return keys[Math.floor(Math.random() * keys.length)];
    };

    data[i] = {
      name: randomFullname(),
      place: (
        <div className={"flagContainer"}>
          <Flag countryCode={getRandomCoutnry(Flags)} size={15} />
          <div className={"place"}>{i}</div>
        </div>
      ),
      accuracy: rng(80, 100) + "%",
      fireRate: rng(25, 32) + "s",
    };
  }
  useLayoutEffect(() => {
    props.putData(data);
  }, []);
  return (
    <div className="App">
      <Table columns={columns} data={props.data} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: Object.keys(state.data).map((k) => state.data[k]),
});

export default compose(connect(mapStateToProps, { putData }))(App);
