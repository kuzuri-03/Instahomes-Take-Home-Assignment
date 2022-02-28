import React from 'react';
import { useSelector } from 'react-redux';

function View() {

    const searchedData = useSelector(state => state?.searchedData);
    console.log("View_searchedData", searchedData);
    return (
        <>
            <div>
                {searchedData?.name}<br />
                {searchedData?.url}
            </div>
            {/* <div>{searchedData === 0 && "No Records Found"}</div> */}
        </>
    )
}
export default React.memo(View)