const myutils = require('../myutils');

module.exports = {

    getHomePage: (req, res) => {

        let q = 'select * from `people` order by `name` ; '
        db.query(q, (err, sqlresult) => {
            if (err) {
                console.error(err);
                return;
            }
            res.render('pages/index', {
                title: 'I am the app!',
                sqlresult: sqlresult,
                vwFuncTest: function (s) {
                    return s.toUpperCase();
                },
                vwFuncTest2: function (i) {
                    //return myutils.testme()+i;
                    let h = ``;

                    for (var r = 0; r < (Math.floor(Math.random() * 6)); r++) {
                        h += `<i class="text-warning fa fa-star"></i>`;
                    }

                    if (h == '') h += `<i class="text-info fa fa-sad-cry"></i>`;

                    return h;

                }
            });
        });

    },

};
