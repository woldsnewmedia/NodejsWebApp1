'use strict';

const myutils = require('./myutils');

const request = require('request');

//const url = require('url');
//const querystring = require('querystring');

const mysql = require("mysql");
const db_conn = {
    user: 'root',
    password: 'turcWhputRx3vDK3',
    server: 'localhost',
    database: 'nodedb1',
    port: 3306
};
let db = mysql.createConnection(db_conn);
db.connect(function (err) {
    if (err) {
        console.error(err);
        return;
    }
});
global.db = db;

const port = process.env.PORT || 1336;

const http = require('http');
const express = require('express');

const app = express();
app.set('view engine', 'ejs');

const uuidv1 = require('uuid/v1');

// Forms
const formidable = require('formidable');

// IO and paths
const fs = require('fs');
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// Mail setup
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    host: 'mail.xxyyzz.co.uk',
    port: 25,
    auth: {
        user: 'noreply@xxyyzz.co.uk',
        pass: 'xxyyzz'
    }

});

// Route constants / .js files
const { getHomePage } = require('./routes/index');
const { getAboutPage } = require('./routes/about');
const { getAboutPrivacyPage } = require('./routes/about');
const { getUploadPage } = require('./routes/upload');
const { getAPIPullPage } = require('./routes/apipull');

// Route get
app.get('/', getHomePage);
app.get('/about', getAboutPage);
app.get('/about/privacy', getAboutPrivacyPage);
app.get('/upload', getUploadPage);
app.get('/apipull', getAPIPullPage);
app.get('/ajaxtest', function (req, res) {
    // Quick shortcut test function without a route js etc
    let d = new Date();
    res.write(String(d.getDate()) + '/' + String(d.getMonth()) + '/' + String(d.getFullYear()));
    res.end();
});

// Route post
app.post('/fileupload', function (req, res) {
    if (req.url == '/fileupload') {
        let form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            if (err) {
                console.error(err);
                return;
            }
            let savepath = 'c:/temp/';
            if (fs.exists(savepath, function (e) {
                if (files.filetoupload.name != "") {
                    let oldpath = files.filetoupload.path;
                    let newfilename = uuidv1() + path.extname(files.filetoupload.name);
                    let newpath = savepath + newfilename;
                    fs.rename(oldpath, newpath, function (err) {
                        if (err) {
                            console.error(err);
                            return;
                        }
                    });

                    let q = "insert into uploadedfiles (filename,textbox) values ( ? , ? ) ; ";
                    db.query(q, [newfilename, (fields.txtbox1 != undefined ? (fields.txtbox1 != '' ? fields.txtbox1 : 'empty') : 'n/a')], (err, sqlresult) => {
                        if (err) {
                            if (err) {
                                console.error(err);
                                return;
                            }
                        }
                    });

                }
            }));
            //transporter.sendMail({
            //    from: 'noreply@wnmprojects.co.uk',
            //    to: 'woldsnewmedia@hotmail.co.uk',
            //    subject: 'This is the subject!',
            //    html: '..... and I am the message'
            //}, function (err, info) {
            //    if (err) {
            //        console.log("Mail error: " + err)
            //    } else {
            //        console.log("Email sent: " + info.response);
            //    }
            //});
            res.redirect("/");
        });
    }
});

// Dir read test
//let testpath = __dirname;
//fs.readdir(testpath, function (err, items) {
//    if (err) throw err;
//    console.log(items);
//});

var server = app.listen(port, function () {
    let i = '';
    i += '\x1b[34mStarted at ' + new Date() + '.\n\x1b[32mRunning on port ' + port + '\n';
    //i += '\x1b[33m\x1b[41m' + app_name + '\x1b[40m\n';
    //i += '\x1b[36m' + __dirname + '\n' + __filename + '\n';
    console.log(i);
    console.log("TESTME = " + myutils.testme());
});





