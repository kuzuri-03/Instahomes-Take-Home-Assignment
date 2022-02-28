import React from 'react';
import { useSelector } from 'react-redux';

function History() {
    const PreviosSearchData = useSelector(state => state?.PreviosSearchData || []);
    console.log("History", PreviosSearchData)
    return (
        <>
            <center style={{ padding: 20 }}>
                <h4>Previous Searched Data</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Source</th>

                        </tr>
                    </thead>
                    <tbody>

                        {PreviosSearchData?.map((x) => (
                            <tr>
                                <>
                                    <td>{x?.name}</td>
                                    <td>{x?.url}</td>
                                </>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </center>
        </>
    )
}
export default React.memo(History)