const myutils = require('../myutils');

const formidable = require('formidable');
const uuidv1 = require('uuid/v1');
const mc = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const mcurl = 'mongodb://localhost:27017/';

module.exports = {

    // List
    getMongoDBListPage: (req, res) => {

        mc.connect(mcurl, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
            if (err) {
                console.error(err);
                return;
            }
            let dbo = db.db("mongodb1");
            dbo.collection("people").find({}).sort({Name: 1}).toArray(function (err, sqlresult) {
                if (err) {
                    console.error(err);
                    return;
                }
                db.close();
                res.render('pages/mongodb', {
                    myutils: myutils,
                    sqlresult: sqlresult
                });
            });
        });


    },

    // Details
    getMongoDBDetailsPage: (req, res) => {

        mc.connect(mcurl, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
            if (err) {
                console.error(err);
                return;
            }
            let dbo = db.db("mongodb1");
            dbo.collection("people").findOne({ _id: new ObjectId(myutils.validateObjectId(req.params.id)) }  , function (err, sqlresult) {
                if (err) {
                    console.error(err);
                    return;
                }

                db.close();
                res.render('pages/mongodb-details', {
                    myutils: myutils,
                    sqlresult: sqlresult
                });

            });
        });

    },

    // Add new load form
    getMongoDBAddNewPage: (req, res) => {
        res.render('pages/mongodb-new', {
            myutils: myutils
        });
    },

    // Add new post/save
    postMongoDBAddNewPage: (req, res) => {

        let form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            if (err) {
                console.error(err);
                return;
            }

            mc.connect(mcurl, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
                if (err) {
                    console.error(err);
                    return;
                }
                let dbo = db.db("mongodb1");
                dbo.collection("people").insertOne({
                    Guid: uuidv1(),
                    Name: fields.name,
                    Email: fields.email,
                    JobTitle: fields.jobtitle,
                    Image: fields.image,
                    Summary: fields.summary,
                    Colour: fields.colour,
                    Shape: fields.shape,
                    Enabled: '0'
                }, function (err, sqlresult) {
                        if (err) {
                            console.error(err);
                        return;
                        }                        
                        db.close();
                        res.redirect("/mongodb/" + sqlresult.insertedId);
                });
            });

        });

    },

    // Load form data for document modify
    getMongoDBModifyPage: (req, res) => {
        let pId = req.params.id;
        mc.connect(mcurl, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
            if (err) {
                console.error(err);
                return;
            }
            let dbo = db.db("mongodb1");
            dbo.collection("people").findOne({ _id: new ObjectId(myutils.validateObjectId(pId)) }, function (err, sqlresult) {
                if (err) {
                    console.error(err);
                    return;
                }

                db.close();
                res.render('pages/mongodb-modify', {
                    myutils: myutils,
                    sqlresult: sqlresult
                });

            });
        });

    },

    // Modify document post/save (udpate)
    postMongoDBModifyPage: (req, res) => {

        let form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            if (err) {
                console.error(err);
                return;
            }

            mc.connect(mcurl, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
                if (err) {
                    console.error(err);
                    return;
                }
                let dbo = db.db("mongodb1");
                dbo.collection("people").updateOne({ _id: new ObjectId(myutils.validateObjectId(req.params.id)) }, {
                    $set: {
                        Guid: fields.guid,
                        Name: fields.name,
                        Email: fields.email,
                        JobTitle: fields.jobtitle,
                        Image: fields.image,
                        Summary: fields.summary,
                        Colour: fields.colour,
                        Shape: fields.shape,
                        Enabled: '0'
                    }
                }, function (err, sqlresult) {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    db.close();
                    res.redirect("/mongodb/" + req.params.id);
                });
            });

        });

    },

    // Delete
    getMongoDBDeletePage: (req, res) => {

        mc.connect(mcurl, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
            if (err) {
                console.error(err);
                return;
            }
            let dbo = db.db("mongodb1");
            dbo.collection("people").deleteOne({ _id: new ObjectId(myutils.validateObjectId(req.params.id)) }, function (err, sqlresult) {
                if (err) {
                    console.error(err);
                    return;
                }
                db.close();
                res.redirect("/mongodb/");
            });
        });

    }


};







