/*
 * 
 * Test for connecting to api with auth, getting token, and getting back some data and sending to the web page
 * 
 * This was done as I wanted to know how to do it in Node
 * 
 */

const request = require('request');

// Use my webapi portfolios data which has JWT auth on
const api_login_url = 'https://wnmprojects.co.uk/api/auth/login';
const api_login_user = 'api@api.com';
const api_login_pass = 'R0ckface5$';
const api_test_url = 'https://wnmprojects.co.uk/api/portfolios';

module.exports = {

    getAPIPullPage: (req, res) => {

        let api_token = '';

        request.post(api_login_url, {
            json: {
                Username: api_login_user,
                Password: api_login_pass
            }
        }, (err_t, res_t, t_body) => {
            if (err_t) {
                console.error(err_t);
                return;
            }
            if (t_body) {
                api_token = t_body.token;
            }

            if (api_token!= ''){

                var options = {
                    json: true,
                    headers: {
                        'Authorization': 'Bearer ' + api_token
                    }
                };
                request.get(api_test_url, options, function (d_err, d_res, d_body) {
                    if (d_err) {
                        console.error(d_err);
                        return;
                    }

                    res.render('pages/apipull', {
                        api_token: api_token,
                        api_url: api_test_url,
                        api_data: d_body
                    });

                });

            }


        });


    },

};