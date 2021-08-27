import { call, put, takeEvery } from "redux-saga/effects";
import { setComponentHeaderData } from "./actions";
import { STORE_COMPONENT_HEADER_DATA } from "./types";
import HelpIcon from '@material-ui/icons/Help';
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function getApiData(apiUrl) {
  // yield delay(3000)
  let resData = {
    heading: "DELAYED DATA",
    subheading: "Lorem ipsum dolor sit amet consectetur.",
    imageUrl: <HelpIcon style={{color: "#fff"}} fontSize="large" />,
    style: {
      headerPic: {
        // backgroundColor: "#2A5583",
        backgroundColor: "#000",
      },
      bolderText:{
        color: "#2A5583"
      }
    },
  };
  return resData;
}

function* checkApiContidion(action) {
  let parentKey = Object.keys(action.payload.data);
  let childKey = Object.keys(action.payload.data[parentKey]);
  let apiUrl;
  let defaultCond;
  if (action.payload.data[parentKey][childKey]) {
    apiUrl = action.payload.data[parentKey][childKey].url;
  }
  if (action.payload.data[parentKey][childKey]) {
    defaultCond = action.payload.data[parentKey][childKey].default;
  }

  if (defaultCond === undefined || defaultCond) {
    yield put(setComponentHeaderData(action.payload.data));
  }

  // console.log(action.payload.data[parentKey][childKey].default);

  if (apiUrl !== undefined && apiUrl.length > 0) {
    yield delay(2000);
    let resData = yield call(getApiData, apiUrl);
    let finalData = {
      [parentKey]: { [childKey]: resData },
    };
    yield put(setComponentHeaderData(finalData));
  }
}

export function* componentHeaderSaga() {
  yield takeEvery(STORE_COMPONENT_HEADER_DATA, checkApiContidion);
}
