DROP DATABASE if EXISTS climatedemo;

CREATE DATABASE climatedemo;

use climatedemo;

CREATE TABLE v1(
    id INT PRIMARY KEY auto_increment,
    year VARCHAR(255),
    annualy VARCHAR(255), 
    lowtemp VARCHAR(255), 
    hightemp VARCHAR(255) 
);

INSERT INTO v1 (
    year,
    annualy,
    lowtemp,
    hightemp
)
VALUES
    (
        "1850",
        "-0.41765878",
        "-0.589203",
        "-0.24611452"
    ),
    (
        "1900",
        "-0.23447904",
        "-0.3669676",
        "-0.10199049"
    ),

    (
        "1950",
        "-0.22662179",
        "-0.33265698",
        "-0.12058662"
    ),
    (
        "2000",
        "0.3310848",
        "0.29822788",
        "0.36394167"
    );