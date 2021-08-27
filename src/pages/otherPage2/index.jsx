import React, { useState, useEffect } from "react";
import { storeComponentHeaderData } from "../../components/componentsHeading/componentRedux/actions";
import { connect } from "react-redux";
import ComponentsHeading from "../../components/componentsHeading";
import HeadingsDefaults from "../../components/allDefaults/headingsDefaults";

const OtherPage2 = (props) => {
  const { storeComponentHeaderData, data } = props

  useEffect(() => {
    storeComponentHeaderData({
      HeadingsDefaults: {
        mainHeader: HeadingsDefaults.mainHeader,
      },
    });
    // console.log(`🔥 ❯ ~ DATA`, data);
  }, []);


  return (
    <div>
      <ComponentsHeading
        data={data !== undefined && data.mainHeader}
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    data: state.componentHeader.HeadingsDefaults,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    storeComponentHeaderData: (data) =>
      dispatch(storeComponentHeaderData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OtherPage2);
