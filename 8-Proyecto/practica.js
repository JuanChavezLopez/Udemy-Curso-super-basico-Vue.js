new Vue({
    el:'#app',
    data : {
        idea_txt: '',
        prioridad: '',
        lista_ideas: [
            {'id':0, 'idea':'Mi primera idea', 'prioridad':'N'},
            {'id':1, 'idea':'Mi segunda idea', 'prioridad':'I'},
            {'id':2, 'idea':'Mi tercera idea', 'prioridad':'IM'},
        ],
        search_txt: ''
    
    },
    watch: {
        search_txt: function (val) {
            this.buscarIdeas(val);
        }
    },
    methods: {
        agregarIdea: function () {
            // creamos un objeto
            var idea = {
                'id' : this.lista_ideas.length,
                'idea' : this.idea_txt,
                'prioridad': this.prioridad
            };

            this.lista_ideas.push(idea);
        },
        buscarIdeas: function(valor) {
            this.lista_ideas = this.lista_ideas.filter (
                (value) => {
                    return value.idea.toLowerCase().indexOf(
                        valor.toLowerCase()
                    )>=0
                }
            )
        },
        eliminarIdea:  function(idea_id) {
            let index = this.lista_ideas.findIndex( e => e.id === idea_id);
            this.lista_ideas.splice(index,1);
        }
    }

});
