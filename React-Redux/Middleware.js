const { createStore, combineReducers, applyMiddleware } = require("redux");
const { createLogger } = require("redux-logger");
// Middleware
const logger = createLogger();

// Action types
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// Action creators
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First Redux Action",
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "First Redux Action",
  };
}

// Initial state
const initialCakeState = {
  numberOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCreams: 20,
};

// Reducers
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    default:
      return state;
  }
};

const iceReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

// Combine reducers
const rootReducer = combineReducers({
  cake: cakeReducer,
  ice: iceReducer,
});

// Create the Redux store with rootReducer and logger middleware
const store = createStore(rootReducer, applyMiddleware(logger));

console.log("Initial State", store.getState());

store.subscribe(() => {
  console.log("Updated State", store.getState());
});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
