$(()=>{
    $("#artist").click((e)=>{
        e.preventDefault();
        let application = $("#application");
        application.empty();
        let result_form = $(`<div id="result_form">`);
        let form = $(`<form method="post" id="ajax_form" action="">`);
        let div_name = $(`<div class="form-group">`);
        let label_name = $(`<label for="name">Имя исполнителя</label>`);
        let input_name = $(`<input type="text" class="form-control" id="name" name="name" required>`);
        let name = div_name.append(label_name, input_name);
        let div_image = $(`<div class="form-group">`);
        let label_image = $(`<label for="image">Фото</label>`);
        let input_image = $(`<input type="file" class="form-control" name="image" id="image" required>`);
        let image = div_image.append(label_image, input_image);
        let div_information = $(`<div class="form-group">`);
        let label_information = $(`<label for="information">Информация</label>`);
        let input_information = $(`<input type="text" class="form-control" id="information" name="information" required>`);
        let information = div_information.append(label_information, input_information);
        let div_style = $(`<div style="overflow: hidden; padding-right: .5em;">`);
        let input_button = $(`<input type="submit" id="btn_artist" class="btn btn-primary" value="Отправить">`).click((e)=> artistHandler(e));
        let button = div_style.append(input_button);
        form.append(name,image,information,button);
        let mydiv = $(`<div id="mydiv">`);
        application.append(result_form,form,mydiv);
        getAllpostsArtists();
    });


    $("#album").click((e)=>{
        e.preventDefault();
        let application = $("#application");
        application.empty();
        let buttonparam = $(`<div class="container">`);
        let inputbuttonById = $(`<button type="button" class="btn btn-default" id="inputbuttonById">Album by ID</button>`).click((e)=> buttonById(e));
        let inputbuttonByQuery = $(`<button type="button" class="btn btn-default" id="inputbuttonByQuery">Album by query</button>`).click((e)=> buttonByQuery(e));
        let buttonID = buttonparam.append(inputbuttonById, inputbuttonByQuery);
        let result_form = $(`<div id="result_form">`);
        let form = $(`<form method="post" id="ajax_form" action="">`);
        let div_name = $(`<div class="form-group">`);
        let label_name = $(`<label for="name">Название Альбома</label>`);
        let input_name = $(`<input type="text" class="form-control" id="name" name="name" required>`);
        let name = div_name.append(label_name, input_name);
        let div_artist = $(`<div class="form-group">`);
        let label_artist = $(`<label for="artist">Испольнитель</label>`);
        let input_artist = $(`<input type="text" class="form-control" id="artist" name="artist" required>`);
        let artist = div_artist.append(label_artist, input_artist);
        let div_datatime = $(`<div class="form-group">`);
        let label_datatime = $(`<label for="datatime">Год выпуска</label>`);
        let input_datatime = $(`<input type="text" class="form-control" id="datatime" name="datatime" required>`);
        let datatime = div_datatime.append(label_datatime, input_datatime);
        let div_image = $(`<div class="form-group">`);
        let label_image = $(`<label for="image">Изображение обложки</label>`);
        let input_image = $(`<input type="file" class="form-control" name="image" id="image" required>`);
        let image = div_image.append(label_image, input_image);
        let div_style = $(`<div style="overflow: hidden; padding-right: .5em;">`);
        let input_button = $(`<input type="submit" id="btn_album" class="btn btn-primary" value="Отправить">`).click((e)=> albumHandler(e));
        let button = div_style.append(input_button);
        form.append(name,artist,datatime,image,button);
        let mydiv = $(`<div id="mydiv">`);
        application.append(buttonID,result_form,form,mydiv);
        getAllpostsAlbums();
    });

    const buttonById = (e) =>{
        e.preventDefault();
        let application = $("#application");
        application.empty();
        let result_form = $(`<div id="result_form">`);
        let form = $(`<form method="GET" id="ajax_form" action="">`);
        let div_id = $(`<div class="form-group">`);
        let label_id = $(`<label for="id">ID Альбома</label>`);
        let input_id = $(`<input type="text" class="form-control" id="id" name="id" required>`);
        let id = div_id.append(label_id, input_id);
        let div_style = $(`<div style="overflow: hidden; padding-right: .5em;">`);
        let input_button = $(`<input type="submit" id="inputbuttonById" class="btn btn-primary" value="Отправить">`).click((e)=> inputbuttonByIdHandler(e));
        let button = div_style.append(input_button);
        form.append(id,button);
        let mydiv = $(`<div id="mydiv">`);
        application.append(result_form,form,mydiv);
    };
    const buttonByQuery = (e) =>{
        e.preventDefault();
        let application = $("#application");
        application.empty();
        let result_form = $(`<div id="result_form">`);
        let form = $(`<form method="GET" id="ajax_form" action="">`);
        let div_id = $(`<div class="form-group">`);
        let label_id = $(`<label for="id">ID Исполнителя</label>`);
        let input_id = $(`<input type="text" class="form-control" id="id" name="id" required>`);
        let id = div_id.append(label_id, input_id);
        let div_style = $(`<div style="overflow: hidden; padding-right: .5em;">`);
        let input_button = $(`<input type="submit" id="inputbuttonById" class="btn btn-primary" value="Отправить">`).click((e)=> inputbuttonByQueryHandler(e));
        let button = div_style.append(input_button);
        form.append(id,button);
        let mydiv = $(`<div id="mydiv">`);
        application.append(result_form,form,mydiv);
    };

    $("#track").click((e)=>{
        e.preventDefault();
        let application = $("#application");
        application.empty();
        let trackbuttonparam = $(`<div class="container">`);
        let trackinputbuttonById = $(`<button type="button" class="btn btn-default" id="trackinputbuttonById">Track by ID</button>`).click((e)=> trackbuttonById(e));
        let trackinputbuttonByQuery = $(`<button type="button" class="btn btn-default" id="trackinputbuttonByQuery">Track by query</button>`).click((e)=> trackbuttonByQuery(e));
        let trackbuttonID = trackbuttonparam.append(trackinputbuttonById, trackinputbuttonByQuery);
        let result_form = $(`<div id="result_form">`);
        let form = $(`<form method="post" id="ajax_form" action="">`);
        let div_name = $(`<div class="form-group">`);
        let label_name = $(`<label for="name">Название Композиции</label>`);
        let input_name = $(`<input type="text" class="form-control" id="name" name="name" required>`);
        let name = div_name.append(label_name, input_name);
        let div_album = $(`<div class="form-group">`);
        let label_album = $(`<label for="album">Название Альбома</label>`);
        let input_album = $(`<input type="text" class="form-control" id="album" name="album" required>`);
        let album = div_album.append(label_album, input_album);
        let div_time = $(`<div class="form-group">`);
        let label_time = $(`<label for="time">Продолжительность</label>`);
        let input_time = $(`<input type="text" class="form-control" id="time" name="time" required>`);
        let time = div_time.append(label_time, input_time);
        let div_style = $(`<div style="overflow: hidden; padding-right: .5em;">`);
        let input_button = $(`<input type="submit" id="btn_album" class="btn btn-primary" value="Отправить">`).click((e)=> trackHandler(e));
        let button = div_style.append(input_button);
        form.append(trackbuttonID,name,album,time,button);
        let mydiv = $(`<div id="mydiv">`);
        application.append(result_form,form,mydiv);
        getAllpostsTracks();
    });

    const trackbuttonById = (e) =>{
        e.preventDefault();
        let application = $("#application");
        application.empty();
        let result_form = $(`<div id="result_form">`);
        let form = $(`<form method="GET" id="ajax_form" action="">`);
        let div_id = $(`<div class="form-group">`);
        let label_id = $(`<label for="id">ID Исполнителя</label>`);
        let input_id = $(`<input type="text" class="form-control" id="id" name="id" required>`);
        let id = div_id.append(label_id, input_id);
        let div_style = $(`<div style="overflow: hidden; padding-right: .5em;">`);
        let input_button = $(`<input type="submit" id="inputbuttonById" class="btn btn-primary" value="Отправить">`).click((e)=> trackByIdHandler(e));
        let button = div_style.append(input_button);
        form.append(id,button);
        let mydiv = $(`<div id="mydiv">`);
        application.append(result_form,form,mydiv);
    };
    const trackbuttonByQuery = (e) =>{
        e.preventDefault();
        let application = $("#application");
        application.empty();
        let result_form = $(`<div id="result_form">`);
        let form = $(`<form method="GET" id="ajax_form" action="">`);
        let div_id = $(`<div class="form-group">`);
        let label_id = $(`<label for="id">ID Альбома</label>`);
        let input_id = $(`<input type="text" class="form-control" id="id" name="id" required>`);
        let id = div_id.append(label_id, input_id);
        let div_style = $(`<div style="overflow: hidden; padding-right: .5em;">`);
        let input_button = $(`<input type="submit" id="inputbuttonById" class="btn btn-primary" value="Отправить">`).click((e)=> trackByQueryHandler(e));
        let button = div_style.append(input_button);
        form.append(id,button);
        let mydiv = $(`<div id="mydiv">`);
        application.append(result_form,form,mydiv);
    };
/////////////// Артист
    const Artists =(response)=>{
        let  div = $(`<div id=${response._id} class="mydiv">`);
        let image = $(`<img  width="200" height="80" alt=""/>`).attr('src', `http://localhost:3333/uploads/${response.image}`);
        let name = $(`<p>`).text(`Имя исполнителя: ${response.name}`);
        let information = $(`<p>`).text(`Информация: ${response.information}`);
        div.append(image, name, information);
        return div;
    };

    const getAllpostsArtists = () => {
        let mydiv = $("#mydiv");
        $.ajax({
            url: 'http://localhost:3333/artists',
            processData: false,
            contentType: false,
            type: 'GET'
        }).then(response => {
            const artists = response.map((artist) => {
                return Artists(artist);
            });
            mydiv.html(artists);
        });
    };


    const artistHandler =(e) =>{
        let idForm = $("#ajax_form");
        if(!idForm[0].checkValidity()){
            $('<input type="submit">').hide().appendTo(idForm).click().remove();
            return;
        }
        e.preventDefault();
        let result_form = $("#result_form");
        let mydiv = $("#mydiv");
        const data = new FormData(document.getElementById("ajax_form"));
        $.ajax({
            url: 'http://localhost:3333/artists',
            data: data,
            processData: false,
            contentType: false,
            type: 'POST'
        }).then((response) => {
            result_form.empty();
            result_form.text(JSON.stringify(response));
            mydiv.empty();
            getAllpostsArtists();
        });
     };
/////////////// Альбом
    const Albums =(response)=>{
        if(typeof(response.artist) == "object"){
            let  div = $(`<div id=${response._id} class="mydiv">`);
            let image = $(`<img  width="200" height="80" alt=""/>`).attr('src', `http://localhost:3333/uploads/${response.image}`);
            let name = $(`<p>`).text(`Название Альбома: ${response.name}`);
            let artist = Artists(response.artist);//$(`<p>`).text(`ID испольнителя: ${JSON.stringify(response.artist)}`);
            let datatime = $(`<p>`).text(`Год выпуска: ${response.datatime}`);
            div.append(image, name, artist,datatime);
            return div;
        }else{
            let  div = $(`<div id=${response._id} class="mydiv">`);
            let image = $(`<img  width="200" height="80" alt=""/>`).attr('src', `http://localhost:3333/uploads/${response.image}`);
            let name = $(`<p>`).text(`Название Альбома: ${response.name}`);
            let artist = $(`<p>`).text(`ID испольнителя: ${response.artist}`);
            let datatime = $(`<p>`).text(`Год выпуска: ${response.datatime}`);
            div.append(image, name, artist,datatime);
            return div;
        }
    };

    const getAllpostsAlbums = () => {
        let mydiv = $("#mydiv");
        $.ajax({
            url: 'http://localhost:3333/albums',
            processData: false,
            contentType: false,
            type: 'GET'
        }).then(response => {
            const albums = response.map((album) => {
                return Albums(album);
            });
            mydiv.html(albums);
        });
    };


    const albumHandler =(e) =>{
        let idForm = $("#ajax_form");

        if(!idForm[0].checkValidity()){
            $('<input type="submit">').hide().appendTo(idForm).click().remove();
            return;
        }
        e.preventDefault();
        let result_form = $("#result_form");
        let mydiv = $("#mydiv");
        const data = new FormData(document.getElementById("ajax_form"));
        $.ajax({
            url: 'http://localhost:3333/albums',
            data: data,
            processData: false,
            contentType: false,
            type: 'POST'
        }).then((response) => {
            result_form.empty();
            result_form.text(JSON.stringify(response));
            mydiv.empty();
            getAllpostsAlbums();
        });
    };

    const inputbuttonByIdHandler = (e) => {
        e.preventDefault();
        let id = $("#id").val();

        $.ajax({
            url: `http://localhost:3333/albums/${id}`,
            type: 'GET'
        }).then((response) => {
            let mydiv = $("#mydiv");
            let result_form = $("#result_form");
            result_form.empty();
            result_form.text(JSON.stringify(response));
            const albums = Albums(response);
            mydiv.html(albums);
        });
    };
    const inputbuttonByQueryHandler = (e) =>{
        e.preventDefault();
        let id = $("#id").val();
        $.ajax({
            url: `http://localhost:3333/albums?artist=${id}`,
            type: 'GET'
        }).then((response) => {
            let result_form = $("#result_form");
            result_form.empty();
            result_form.text(JSON.stringify(response));
            let mydiv = $("#mydiv");
            const albums = response.map((album) => {
                return Albums(album);
            });
            mydiv.html(albums);
        });
    };
 /////////////// Трэк
    const Tracks =(response)=>{
        let  div = $(`<div id=${response._id} class="mydiv">`);
        let name = $(`<p>`).text(`Название Композиции: ${response.name}`);
        let album = $(`<p>`).text(`ID Альбома: ${response.album}`);
        let time = $(`<p>`).text(`Продолжительность: ${response.time}`);
        div.append(name, album,time);
        return div;
    };

    const getAllpostsTracks = () => {
        let mydiv = $("#mydiv");
        $.ajax({
            url: 'http://localhost:3333/tracks',
            processData: false,
            contentType: false,
            type: 'GET'
        }).then(response => {
            const tracks = response.map((track) => {
                return Tracks(track);
            });
            mydiv.html(tracks);
        });
    };


    const trackHandler =(e) =>{
        let idForm = $("#ajax_form");

        if(!idForm[0].checkValidity()){
            $('<input type="submit">').hide().appendTo(idForm).click().remove();
            return;
        }
        e.preventDefault();
        let result_form = $("#result_form");
        let mydiv = $("#mydiv");
        const data = new FormData(document.getElementById("ajax_form"));
        $.ajax({
            url: 'http://localhost:3333/tracks',
            data: data,
            processData: false,
            contentType: false,
            type: 'POST'
        }).then((response) => {
            result_form.empty();
            result_form.text(JSON.stringify(response));
            mydiv.empty();
            getAllpostsTracks();
        });
    };

    const trackByIdHandler = (e) => {
        e.preventDefault();
        let id = $("#id").val();

        $.ajax({
            url: `http://localhost:3333/tracks/${id}`,
            type: 'GET'
        }).then((response) => {
            let mydiv = $("#mydiv");
            let result_form = $("#result_form");
            result_form.empty();
            result_form.text(JSON.stringify(response));
            const tracks = response.map((track) => {
                return Tracks(track);
            });
            mydiv.html(tracks);
        });
    };
    const trackByQueryHandler = (e) =>{
        e.preventDefault();
        let id = $("#id").val();
        $.ajax({
            url: `http://localhost:3333/tracks?album=${id}`,
            type: 'GET'
        }).then((response) => {
            let result_form = $("#result_form");
            result_form.empty();
            result_form.text(JSON.stringify(response));
            let mydiv = $("#mydiv");
            const tracks = response.map((track) => {
                return Tracks(track);
            });
            mydiv.html(tracks);
        });
    };
});