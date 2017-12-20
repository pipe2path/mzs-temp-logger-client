import React from "react";
import {TemperatureList, Footer} from "./Utils";
import './Table.css';
import axios from "axios";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    componentDidMount() {
        this.TemperatureList();
    }

    TemperatureList() {
        var data = {};
        var dataArray = [];
        axios.get('https://mzs-tmp-logger-service.herokuapp.com/temperature')
            .then((response) => {
                for (var i = 0; i < response.data.length; i++) {
                    data = {};
                    data.id = response.data[i].entityId;
                    data.entityName = 'Menezes garage';
                    data.freezerNum = '1';
                    data.celsius = response.data[i].readingCelsius;
                    data.fahrenheit = ((data.celsius * 9 / 5) + 32).toFixed(2);
                    data.dateRecorded = response.data[i].dateTimeStamp;
                    dataArray.push(data);
                }
                this.setState({data: dataArray});
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        var data  = this.state.data;
        return (
            <div>
                <ReactTable
                    data={data}
                    columns={[
                        {
                            columns: [
                                {
                                    Header: "ID",
                                    accessor: "id",
                                    width: 100
                                },
                                {
                                    Header: "Entity Name",
                                    accessor: "entityName"
                                },
                                {
                                    Header: "Freezer #",
                                    accessor: "freezerNum",
                                    width: 100
                                },
                                {
                                    Header: "Celsius",
                                    accessor: "celsius",
                                    width: 200
                                },
                                {
                                    Header: "Fahrenheit",
                                    accessor: "fahrenheit",
                                    width: 200
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
                    sortable="true"
                />
                <br />
            </div>
        );
    }
}

export default Table;