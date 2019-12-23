module.exports = {

    // HAD TO ENABLE SQL SERVER BROWSER AND RESTART MSSQL FOR THIS TO WORK
    testme: function () {

        let testval = 'I am a test string';

        return `${testval}`;

    },

    makeShortDate: function (datein) {
        let d = Date(datein); // new Date();
        //d = datein;
        return String(d.getDate()) + '/' + String(d.getMonth()) + '/' + String(d.getFullYear());
    }



};





