import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux/iceCream/iceCreamActions";

function iceCreamContainer(props) {
  return (
    <div>
      <h2>Number Of IceCreams - {props.numOfIceCreams} </h2>
      <button onClick={props.buyIceCream}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.ice.numOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(iceCreamContainer);
