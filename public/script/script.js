$(()=>{
    $("#btn").click((e)=>{
        let idForm = $("#ajax_form");
        let result_form = $("#result_form");
        if(!idForm[0].checkValidity()){
            $('<input type="submit">').hide().appendTo(idForm).click().remove();
            return;
        }
        e.preventDefault();
        const data = new FormData(document.getElementById("ajax_form"));
        console.log(data);
        $.ajax({
            url: 'http://localhost:3333/artists',
            data: data,
            processData: false,
            contentType: false,
            type: 'POST'
        }).then((response) => {
            result_form.empty();
            result_form.text(response);
            console.log(response);
        });
    });
});