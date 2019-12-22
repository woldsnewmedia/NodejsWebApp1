module.exports = {

    // HAD TO ENABLE SQL SERVER BROWSER AND RESTART MSSQL FOR THIS TO WORK
    dbconn_mssql: function () {

        return {
            user: 'db1',
            password: 'turcWhputRx3vDK3',
            server: 'DESKTOP-648IQPK\\SQLEXPRESS',
            database: 'nodedb1',
            port: 1433
        };

    },

    dbconn_mysql: function () {

        return {
            user: 'root',
            password: 'turcWhputRx3vDK3',
            server: 'localhost',
            database: 'nodedb1',
            port: 3306
        };

    },

    htmlopen: function () {

        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title></title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">'
        </head>
        <body>
        `;

    },

    htmlclose: function() {

        return `
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        </body>
        </html>
        `;

    },

    createcard: function (o) {

        return `
        <div class="col-md-4 col-sm-6 col-12">
            <div class="card rounded-0 bg-dark text-white shadow mb-4">
                <div class="card-header font-weight-bold">${o.Name}</div>
                <div class="card-body">
                    <img src="${o.Image}?${o.Guid}" class="img-fluid float-right ml-1 mb-1 shadow">
                    <p>
                        <i class="fa fa-envelope"></i> <a href="${o.Email}" class="text-info">${o.Email}</a>
                    </p>
                    <p>
                        Enabled: <i class="fa fa-${(o.Enabled ? 'check text-success' : 'times text-danger')}"></i>
                    </p>
                    <table class="table bg-light w-100 mb-0">
                        <thead class="bg-info text-white">
                            <tr>
                                <th>Colour</th>
                                <th>Shape</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>${o.Colour}</td>
                                <td>${o.Shape}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        `;

    }

};





