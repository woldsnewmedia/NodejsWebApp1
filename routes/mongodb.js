const myutils = require('../myutils');

const mc = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const mcurl = 'mongodb://localhost:27017/';

module.exports = {

    // List
    getMongoDBListPage: (req, res) => {

        mc.connect(mcurl, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
            let dbo = db.db("mongodb1");
            dbo.collection("people").find({}).toArray(function (err, sqlresult) {
            //dbo.collection("people").find({}, { projection: { Guid: 1, Name: 1, JobTitle: 1 } }).toArray(function (err, result) {
            //dbo.collection("people").find({ JobTitle: /stat/i }, { projection: { Guid: 1, Name: 1, JobTitle: 1, Colour: 1 } }).sort({ Name: -1 }).limit(10).toArray(function (err, result) {
                if (err) {
                    console.error(err);
                    return;
                }

                // Update the image field from the api (temporary as mockaroo api data uses dummyimage.com)
                sqlresult.forEach((p, index) => {
                    p.Image = "https://lorempixel.com/200/200/animals/?refresh=" + index;
                });

                db.close();
                res.render('pages/mongodb', {
                    myutils: myutils,
                    sqlresult: sqlresult
                });
            });
        });


    },

    // Details
    getMongoDBDetails: (req, res) => {

        let pId = req.params.id;

        mc.connect(mcurl, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
            let dbo = db.db("mongodb1");
            dbo.collection("people").findOne({ _id: new ObjectId(myutils.validateObjectId(pId)) }  , function (err, sqlresult) {
                if (err) {
                    console.error(err);
                    return;
                }

                // Update the image field from the api (temporary as mockaroo api data uses dummyimage.com)
                if (sqlresult) {
                    sqlresult.Image = "https://lorempixel.com/200/200/animals/";
                }

                console.log(sqlresult);

                db.close();
                res.render('pages/mongodb-details', {
                    myutils: myutils,
                    sqlresult: sqlresult
                });

            });
        });

    }


};