var spinnerhtml = '<i class="fas fa-spinner fa-spin"></i>';

$(document).ready(function () {

    // Ajax result test
    $(".btn-test").click(function (e) {

        e.preventDefault();

        $(".theresult").html(spinnerhtml);

        $(".theresult").load("/ajaxtest", function (r, s, x) {
            if (s == "success")
                $(".theresult").html(r);
            if (s == "error")
                alert("Error: " + x.status + ": " + x.statusText);
        });

    });

    // POST test button
    $(".btn-post").click(function (e) {

        e.preventDefault();

        $(".postresult").html(spinnerhtml);

        $.ajax({
            url: '/scripts/1.json',
            datatype: 'json'
        })
        .done(function (data) {
            if (data) {
                if (data.length > 0) {
                    let h = '';
                    h += '<div id="acc1">';
                    data.forEach((i, index) => {
                        h += `
                        <div class="card">
                            <div class="card-header">
                            <a class="collapsed card-link text-dark font-weight-bold" data-toggle="collapse" href="#collapse${i.id}">
                                ${i.name}
                            </a>
                            </div>
                            <div id="collapse${i.id}" class="collapse sxhow" data-parent="#acc1">
                            <div class="card-body p-0">
                                <table class="table mb-0">
                                    <thead class="bg-dark text-white">
                                        <tr>
                                            <td>Colour</td>
                                            <td>Email</td>
                                            <td>&nbsp;</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>${i.colour}</td>
                                            <td>${i.email}</td>
                                            <td><img src="/img/${i.image}" alt="${i.name}" title="${i.name}" class="img-fluid img-test" /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                        `;
                    });
                    h += '</div>';
                    $(".postresult").html(h);
                }
            }


        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.error("Error");
            return;
        });



    });

});