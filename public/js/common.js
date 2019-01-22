function getRssData(type) {
    $.ajax({
        url: '/getRssData',
        method: 'GET',
        dataType: 'JSON',
        data: {
            type: type
        },
        success: function (data) {
            //console.log(data);
            $("#news ul").empty();
            data.forEach(function (element) {
                $("#news ul").append('<li class="list-group-item"><a href=' + element.link + '><span>' + element.title + '</span></a></li>');
            })
        },
        error: function (err) {
            console.log(err);
        }
    })
}