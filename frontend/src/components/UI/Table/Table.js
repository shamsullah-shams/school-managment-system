import React from "react";



const Table = props => {
    return (
        <table>
            <tr>
                {
                    props.header.map(h => (
                        <th>{h}</th>
                    ))
                }
            </tr>
        </table>
    );
};


export default Table;