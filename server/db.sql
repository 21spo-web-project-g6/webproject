DROP DATABASE if EXISTS climatedemo;

CREATE DATABASE climatedemo;

use climatedemo;

CREATE TABLE v1(
    id INT PRIMARY KEY auto_increment,
    Year VARCHAR(255),
    Annualy VARCHAR(255), 
    Lowtemp VARCHAR(255), 
    Hightemp VARCHAR(255) 
);

INSERT INTO v1 (
    Year,
    Annualy,
    Lowtemp,
    Hightemp
)
VALUES
    (
        "1851",
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