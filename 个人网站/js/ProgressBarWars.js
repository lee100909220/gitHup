/**
 * Created by Administrator on 2016/7/15.
 */
$.fn.extend({ProgressBarWars: function(opciones) {
    var ProgressBarWars=this;
    var theidProgressBarWars=$(ProgressBarWars).attr("id");
    var styleUnique = Date.now();
    var StringStyle="";

    defaults = {
        porcentaje:"100",
        tiempo:1000,
        color:"",
        estilo:"yoda",
        tamanio:"30%",
        alto:"10px"
    }

    var opciones = $.extend({}, defaults, opciones);
    if(opciones.color!=''){StringStyle="<style>.color"+styleUnique+"{ border-radius: 2px;display: block; width: 0%; box-shadow:0px 0px 10px 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+"}</style>";opciones.estilo="color"+styleUnique;}
    $(ProgressBarWars).before(StringStyle);
    $(ProgressBarWars).append('<span class="barControl" style="width:'+opciones.tamanio+';"><div class="barContro_space"><span class="'+opciones.estilo+'" style="height: '+opciones.alto+';"  id="bar'+theidProgressBarWars+'"></span></div></span>');

    $(window).scroll(function(e){
        var sct=$("body").scrollTop();
        var f2=$("#floor2")[0].offsetTop;
        //console.log(aa)
        if(sct>(f2-$(window).height()/2)){
            $("#bar"+theidProgressBarWars).animate({width: opciones.porcentaje+"%"},opciones.tiempo);
        }

    })


    this.mover = function(ntamanio) {
        $("#bar"+$(this).attr("id")).animate({width:ntamanio+"%"},opciones.tiempo);
    };
    return this;
}
});