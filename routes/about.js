
module.exports = {

    getAboutPage: (req, res) => {

        res.render('pages/about');

    },

    getAboutPrivacyPage: (req, res) => {

        res.end('PRIVACY!');

    }

};