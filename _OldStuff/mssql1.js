'use strict';

var strsql = '';

var port = process.env.PORT || 1336;

var myutils = require('./myutils');

var http = require('http');
var express = require('express');
var app = express();

app.get('/', function (req, res) {

    var sql = require("mssql");

    if (sql) {
        sql.close();
    }

    sql.connect(myutils.dbconn_mssql(), function (err) {

        if (err) {
            res.write(JSON.stringify(err));
        }


        var sqlreq = new sql.Request();
        // sqlreq.input('enabled', 0);
        // sqlreq.input('colour', 'blue');
        // sqlreq.input('shape', '%tri%');
        // strsql = 'select * from [people] where [enabled]= @enabled or [colour]=@colour order by [name] ; '
        // strsql = 'select * from [people] where [shape] like @shape order by [name] ; '
        strsql = 'select * from [people] order by [name] ; '
        sqlreq.query(strsql, function (err, sqlresp) {

            if (err) {
                res.end(JSON.stringify(err));
            } else {

                // db info - I think this is just for mssql probably wrong :-
                // sqlres.recordsets > 0 if anything returned
                // sqlres.recordsets[0].length>0 if any rows returned
                // sqlres.recordsets[0][index].field = db value
                // console.dir(sqlresp);
                // console.log("rs1=" + sqlresp.recordsets.length);     // 1
                // console.log("rs2=" + sqlresp.recordsets[0].length);  // 5

                let htmlres = '';

                htmlres += myutils.htmlopen();

                htmlres += `
                <div class="container">
                    <h3>MSSQL Test</h3>
                    <hr style="width:50%; float:left; border:none; border-top:1px solid rgba(0,0,0,0.5); margin:0;">
                    <div class="clearfix"></div>
                    <div class="row mt-3">
                `;

                if (sqlresp.recordsets.length > 0) {
                    if (sqlresp.recordsets[0].length > 0) {
                        sqlresp.recordsets[0].forEach((p, index) => {
                            htmlres += myutils.createcard(p);  // pass as object
                        });
                    }
                }

                htmlres += `    
                    </div>
                </div>
                `;

                htmlres += myutils.htmlclose();

                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(htmlres);
                res.end("");

            }

        });
    });
});

var server = app.listen(port, function () {
    console.log('Server is running..');
});



