/*
 * 
 * Test for connecting to api with with QueryString key, and getting back some data and sending to the web page
 * 
 * This was done as I wanted to know how to do it in Node
 * 
 */

const myutils = require('../myutils');

const request = require('request');

const moment = require('moment');

const api_test_url = 'https://my.api.mockaroo.com/JOBSDEC2019.json?key=efbb00b0';

module.exports = {

    getAPIQSPage: (req, res) => {

        var options = {
            json: true
        };
        request.get(api_test_url, options, function (q_err, q_res, q_body) {
            if (q_err) {
                console.error(q_err);
                return;
            }

            // Update the image field from the api (temporary as mockaroo api data uses dummyimage.com)
            q_body.forEach((p, index) => {
                p.image = "https://lorempixel.com/200/200/animals/?refresh="+index;
            });

            res.render('pages/apiqs', {
                moment: moment,
                api_url: api_test_url,
                api_data: q_body
            });

        });


    },

};