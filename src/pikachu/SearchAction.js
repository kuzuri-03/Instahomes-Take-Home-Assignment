import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { getSearchDataRequest } from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchNameActionData } from '../store/actions';
import * as yup from 'yup';

function SearchAction() {
    const dispatch = useDispatch();
    const searchedData = useSelector(state => state?.totalData);
    const actionData = useSelector(state => state?.actionData);
    const [count, setCount] = useState(0);
    const updateCount = () => setCount(count + 1);
    console.log("Search", { actionData, searchedData, count });

    const changeHandler = (e) => {
        dispatch(setSearchNameActionData(e))
    };

    return (
        <>
            <Formik
                enableReinitialize
                initialValues={{
                    searchName: actionData || 'Search Pokemon...'
                }}
                onSubmit={(values) => {
                    console.log("Submit=>", values);
                    dispatch(getSearchDataRequest(values));
                }}
            >{({ values }) => (
                <>
                    <Form>
                        <div style={{ padding: 20, margin: 20, alignment: "center" }}>
                            {searchedData && searchedData?.map((x) => (
                                <button
                                    type='button'
                                    style={{
                                        color: "black", margin: 1, backgroundColor: 'white', borderColor: "#4CAF50", textAlign: "center", cursor: "pointer", fontWeight: "bold"
                                    }}
                                    key={x.name} onClick={() => changeHandler(x?.name)}>
                                    {x?.name}
                                </button>
                            ))}<br /><br /><br />
                        </div>
                        <Field type="search" name="searchName" />
                        <button type='submit' onClick={updateCount}>Search</button>
                        <p>Search Count:<span>{count}</span></p>
                    </Form>
                </>
            )}
            </Formik>
        </>
    )
}
export default React.memo(SearchAction)