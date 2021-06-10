document.getElementById("btn2").addEventListener("click", (e)=>{
    var modelo = document.getElementById('file2').files[0].name;
    console.log(modelo);
    var input = modelo; 
    var output = input.substr(0, input.lastIndexOf('.')) || input; 
    console.log(output);
    var modeloo ="'url(modelos/"+output+"/scene.gltf)'";
    console.log(modeloo);
    var co1= document.cookie = "s" + "=" + modeloo + "path" + "="+"frame.htm";
    console.log(co1);
    var mo = co1.substr(0, co1.lastIndexOf('path')) || co1; 
    var mod=mo.split('=').pop();
    console.log(mod);
    var a=document.getElementById('myframe').contentWindow.location.reload(true);
});

document.getElementById("btn1").addEventListener("click", (e)=>{
    var nombre = document.getElementById('file').files[0].name;
    console.log(nombre);
    var input = nombre; 
    var output = input.substr(0, input.lastIndexOf('.')) || input; 
    console.log(output);
    var ruta = "path/"+output+".patt";
    console.log(ruta);
    var co2= document.cookie = "z" + "=" + ruta + "path" + "="+"frame.htm";
    var a=document.getElementById('myframe').contentWindow.location.reload(true);
 
});