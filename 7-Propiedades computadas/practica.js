new Vue({
    el:'#app2',
    data : {
        num1: 0,
        num2: 10,
        resultado: 0
    
    },
    computed: {
        sumarNumeros: function () {
            return parseInt(this.num1) + parseInt(this.num2);
        }
    },
    watch: {
        num1: function (val){
            console.log(val);
        }
    },
    methods: {
        sumarNumero: function () {
            // this.resultado = parseInt(this.num1)+ parseInt(this.num2);
            return parseInt(this.num1)+ parseInt(this.num2);
        }
    },
});
