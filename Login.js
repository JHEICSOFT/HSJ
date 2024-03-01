$('#formLogin').submit(function(e){
   e.preventDefault();
   var usuario = $.trim($("#usuario").val());    
   var password =$.trim($("#password").val());    

   if(usuario.length == "" || password == ""){
      Swal.fire({
          type:'error',
          title:'Debe ingresar un usuario y/o contraseña',
          timer:1500
      });
      return false; 
    }else{
        $.ajax({
           url:"dashboard/bd/login.php",
           type:"POST",
           datatype: "json",
           data:{usuario:usuario,password:password}, 
           success:function(response){    
           var usuario = JSON.parse(response);  
               if(usuario == null){
                   Swal.fire({
                       type:'warning',
                       title:'Usuario y/o contraseña incorrecta',
                       
                   });
               }else{
                   Swal.fire({
                       type:'success',
                       title:'¡Conexión exitosa!',
                       confirmButtonColor:'#3085d6',
                       confirmButtonText:'Ingresar',
                       //timer:1500
                      // window.location.href = "dashboard/registros.php";
                   }).then((result) => {
                       if(result.value){
                           //window.location.href = "vistas/pag_inicio.php";
                           window.location.href = "dashboard/registros.php";
                       }
                   })
                   
               }
           }    
        });
    }     
});