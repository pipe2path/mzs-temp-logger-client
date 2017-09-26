import React from "react";
import namor from "namor";
import "./index.css";

const range = len => {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i);
    }
    return arr;
};

export function getData(){
    return [{
        id: 1,
        entityName: 'ABC Restaurant',
        freezerNum: '10',
        celsius: '-5',
        fahrenheit: '13',
        dateRecorded: '2017-09-22'
        },
        {
            id: 2,
            entityName: 'The Noodle',
            freezerNum: '2',
            celsius: '-10',
            fahrenheit: '5',
            dateRecorded: '2017-09-21'
        },
        {
            id: 3,
            entityName: 'Pizza Brothers',
            freezerNum: '3',
            celsius: '-7',
            fahrenheit: '11.2',
            dateRecorded: '2017-09-25'
        }]
}

const newPerson = () => {
    const statusChance = Math.random();
    return {
        firstName: namor.generate({ words: 1, numbers: 0 }),
        lastName: namor.generate({ words: 1, numbers: 0 }),
        age: Math.floor(Math.random() * 30),
        visits: Math.floor(Math.random() * 100),
        progress: Math.floor(Math.random() * 100),
        status:
            statusChance > 0.66
                ? "relationship"
                : statusChance > 0.33 ? "complicated" : "single"
    };
};

export function makeData(len = 5553) {
    return range(len).map(d => {
        return {
            ...newPerson(),
            children: range(10).map(newPerson)
        };
    });
}

export const Logo = () =>
    <div style={{ margin: '1rem auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
        For more examples, visit {''}
        <br />
        <a href="https://github.com/react-tools/react-table" target="_blank">
            <img
                src="https://github.com/react-tools/media/raw/master/logo-react-table.png"
                style={{ width: `150px`, margin: ".5em auto .3em" }}
                alt="logo"
            />
        </a>
    </div>;

export const Footer = () =>
    <footer style={{fontSize: "12px"}}>
        <p>Sunobi, Inc. @2017</p>
    </footer>;

export const Tips = () =>
    <div style={{ textAlign: "center" }}>
        <em>Tip: Hold shift when sorting to multi-sort!</em>
    </div>;