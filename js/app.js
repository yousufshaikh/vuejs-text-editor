var vm1 = new Vue ({
	el: '#app',
	data:{
		input: "Mark down text editor ....",
		inputDataBinding: "Two way data binding ..."
	},
	methods:{
		update: _.debounce(function(e) {
			this.input = e.target.value
		},300)
	},
	computed: {
		compiledMarkdown: function() {
			return marked(this.input,{sanitize: false})
		}
	},
	watch:{
		compiledMarkdown: function(data){
			console.log("watch works");
		}
	}
})

var vm2 = new Vue({
	el:'#navigation',
	data:{
		
	},
	mathods:{

	}
})


