module.exports = {

    makeShortDate: function (datein) {
        let d = Date(datein);
        return String(d.getDate()) + '/' + String(d.getMonth()) + '/' + String(d.getFullYear());
    },

    strLeft: function (s,l) {
        return s.length <= l ? s : s.substring(0, l) + '...';
    },

    validateObjectId: function (o) {
        return (o.match(/^[0-9a-fA-F]{24}$/) ? o : "000000000000000000000000");
    },

    createSortedSelectListFromArray(a, sv='') {

        let h = '';

        if (Array.isArray(a)) {
            a.sort().forEach((i, index) => {
                h += `<option value="${i}" ${(i == sv ? 'selected' : '')}>${i}</option>`;
            });

        }

        return h;

    }


};





