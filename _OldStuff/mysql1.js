'use strict';

var strsql = '';

const port = process.env.PORT || 1336;

const myutils = require('./myutils');

const http = require('http');
const express = require('express');
const app = express();
const mysql = require("mysql");

app.get('/', function (req, res) {

    const sql = mysql.createConnection(myutils.dbconn_mysql());

    sql.connect(myutils.dbconn_mssql(), function (err) {

        if (err) {
            res.end(JSON.stringify(err));
        }

        //strsql = 'select * from `people` where `enabled`= ? or `colour`= ? order by `name` ; '
        //var en = 0;
        //var col = 'blue';
        //sql.query(strsql, [en, col], (err, sqlresp) => {

        //strsql = 'select * from `people` where `colour` like ? order by `name` ; '
        //var colour = '%green%';
        //sql.query(strsql, [colour], (err, sqlresp) => {

        strsql = 'select * from `people` order by `name` ; '
        sql.query(strsql, (err, sqlresp) => {

            if (err) {
                res.end(JSON.stringify(err));
            } 

            let htmlres = '';
            htmlres += myutils.htmlopen();
            htmlres += `
            <div class="container">
                <h3>MySQL Test</h3>
                <hr style="width:50%; float:left; border:none; border-top:1px solid rgba(0,0,0,0.5); margin:0;">
                <div class="clearfix"></div>
                <div class="row mt-3">
            `;
            if (sqlresp.length > 0) {

                sqlresp.forEach((p, index) => {
                    htmlres += myutils.createcard(p);  // pass as object
                });

            }
            htmlres += `    
                </div>
            </div>
            `;
            htmlres += myutils.htmlclose();
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(htmlres);
            res.end("");
            

        });






    });
});

var server = app.listen(port, function () {
    console.log('Server is running..');
});



