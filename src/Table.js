import React from "react";
import { getData, Footer } from "./Utils";
import './Table.css';

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class Table extends React.Component {
    constructor() {
        super();
        this.state = {
            data: getData()
        };
    }
    render() {
        const { data } = this.state;
        return (
            <div>
                <ReactTable
                    data={data}
                    columns={[
                        {
                            columns: [
                                {
                                    Header: "ID",
                                    accessor: "id"
                                },
                                {
                                    Header: "Entity Name",
                                    accessor: "entityName"
                                },
                                {
                                    Header: "Freezer #",
                                    accessor: "freezerNum"
                                },
                                {
                                    Header: "Celsius",
                                    accessor: "celsius"
                                },
                                {
                                    Header: "Fahrenheit",
                                    accessor: "fahrenheit"
                                },
                                {
                                    Header: "Last Recorded",
                                    accessor: "dateRecorded"
                                }
                            ]
                        }
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                />
                <br />
            </div>
        );
    }
}

export default Table;