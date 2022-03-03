'use strict'

$(document).ready(function(){

    //slider
    if(window.location.href.indexOf('index') > -1){
        $('.slider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1000,
            Responsive: true,
            pager: false 
        });
    };

    //posts
    if(window.location.href.indexOf('index') > -1){
    var posts = [
        {
            title: 'Prueba de titulo 1',
            date: "Publicado el: "+ moment().format("dddd D")+ " de "+ moment().format("MMMM")+" del "+ moment().format("YYYY"),
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        },
        {
            title: 'Prueba de titulo 2',
            date: "Publicado el: "+ moment().format("dddd D")+ " de "+ moment().format("MMMM")+" del "+ moment().format("YYYY"),
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        },
        {
            title: 'Prueba de titulo 3',
            date: "Publicado el: "+ moment().format("dddd D")+ " de "+ moment().format("MMMM")+" del "+ moment().format("YYYY"),
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        },
        {
            title: 'Prueba de titulo 4',
            date: "Publicado el: "+ moment().format("dddd D")+ " de "+ moment().format("MMMM")+" del "+ moment().format("YYYY"),
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        },
        {
            title: 'Prueba de titulo 5',
            date: "Publicado el: "+ moment().format("dddd D")+ " de "+ moment().format("MMMM")+" del "+ moment().format("YYYY"),
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        },
    ];
    posts.forEach((item, index)=>{
        var post = `
        <article class="post">
            <h2>${item.title}</h2>
            <span class="date">${item.date}</span>
            <p>
                ${item.content}
            </p>
            <a href="#" class="button-more">Leer más</a>
        </article>`   
        ;
        $("#post").append(post);
    });
    };
    //selector de tema
    var theme = $("#theme");

    $("#to-verde").click(function(){
        theme.attr("href", "css/verde.css")
    });
    $("#to-azul").click(function(){
        theme.attr("href", "css/azul.css")
    });
    $("#to-rojo").click(function(){
        theme.attr("href", "css/rojo.css")
    });

    // Scroll arriba de la web
	$('.subir').click(function(e){
		e.preventDefault();

		$('html, body').animate({
			scrollTop: 0
		}, 500);

		return false;
	});

    //formulario 

    $("#login form").submit(function(){
        var form_name = $("#formname").val();

        localStorage.setItem("form_name",form_name);
    })

    var form_name = localStorage.getItem("form_name");

    if(form_name != null && form_name != "undefined"){
        var about_parrafo = $("#about p");

        about_parrafo.html("<br> <strong> Bienvenido, "+form_name+"</strong>");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesion</a>");

        $("#login").hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        })
    }

    //Acordeon
    if(window.location.href.indexOf('about') > -1){
        $("#acordeon").accordion();
    }

    //reloj
    if(window.location.href.indexOf('reloj') > -1){
        setInterval(function(){
            var reloj= moment().format("h:mm:ss")
            $("#reloj").html(reloj);
        },1000)
       
    }

    //validation
    if(window.location.href.indexOf('contact') > -1){
        $("form input[name='date']").datepicker({
            dateformat: 'dd/mm/yy'
        });
        $.validate({
            lang : "es",
            errorMenssagePosition: 'top',
            scrollTopOnError: true
        })
    }
});
