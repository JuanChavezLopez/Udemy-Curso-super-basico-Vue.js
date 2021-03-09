new Vue({
    el:'#app',
    data : {
        saludar: 'Hola desde la instancia app',
        numero: 11,
        lista: ['1', '2', '3', '4', '100', '300'],
        activo: false,
        blog: '<h4>El mundo es nuestro...! </h4>',
        texto:'',
        full_name:'',
        validation_error: '',
        nombre:'',
        text_error: false,
        text_success: false,
        sizetext: '',
        font_texto: '10'
    },
    methods: {
        saludando: function(saludo) {
            console.log(saludo);
        },
        verificarFullName: function () {
            if(this.full_name.length < 4){
                this.validation_error= 'El nombre no es valido';
            }else {
                this.validation_error= 'El nombre es valido';
            }
        },
        verificarNombre: function () {
            if( this.nombre === 'holaapp') {
                this.text_success = true;
                this.text_error = false;
            }else{
                this.text_error= true;
                this.text_success= false;
            }
        },
        cambiarTexto: function () {
            this.font_texto= parseInt(this.sizetext);
        }
    },
});
