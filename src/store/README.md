# In memory database for tblog

Since using a big object often lead to chaos, this db provides a clean 
interface to organize your data in memory.

## Store

only memory is supported, it will support plain json file as storage. 

it keeps an array for all the tables.

## Table

Table has index and data, for in-memory one, data is just a array, and each row is 
just a object. index is a object for faster query using certain key. (not implemented yet)

## Query

A query builder to avoid visit data attribute of table directly and provides

- deep copy for value inside table (not implemented, it's just ref now)
- query with criteria, support `= < > <= >=` and custom function as callback

## Why not other in-memory db

There are already many good in-memory db for javascript, but most of them are written in javascript.
so I want to write one using typescript, besides, this db is just for tblog usage, it may not require
most features other general ones have provided.

