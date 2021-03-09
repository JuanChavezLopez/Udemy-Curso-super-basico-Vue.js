new Vue({
    el:'#app',
    data : {
        idea_txt: '',
        prioridad: '',
        lista_ideas: []
    
    },
    methods: {
        agregarIdea: function () {
            var idea = {
                'id' : this.lista_ideas.length,
                'idea' : this.idea_txt,
                'prioridad': this.prioridad
            };

            this.lista_ideas.push(idea);
        }
    }

});
