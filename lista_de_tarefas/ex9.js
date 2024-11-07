function adicionartarefa() {
	//
	var intarefa = document.getElementById("intarefa");
	
	var tarefa = intarefa.value;
	
	//
	if(tarefa == "") {
		alert("informe a tarefa");
		intarefa.focus();
		return;
	}
	
	//
	var divQuadro = document.getElementById("divQuadro");
	var h5 = document.createElement("h5");
	var texto = document.createTextNode(tarefa);
	h5.appendChild(texto);
	divQuadro.appendChild(h5);
	
	intarefa.value = "";
	intarefa.focus();
}
//
	var btadicionar = document.getElementById("btadicionar");
	btadicionar.addEventListener("click", adicionartarefa);
	
	function selecionartarefa() {
		var h5 = document.getElementsByTagName("h5");
		var numH5 = h5.length;
		
		if (numH5 == 0) {
			alert("não ha tarefas para selecionar");
			return;
		}
		
		var aux = -1;
		
		//
		for (var i = 0; i < numH5; i++) {
			//
			if (h5[i].className == "tarefaselecionada") {
			   h5[i].className = "tarefanormal";
			   aux = i;
			   break;
			}
		}
		
		//
		if (aux == numH5 - 1) {
			aux = -1;
		}
		
		h5[aux + 1].className = "tarefaselecionada";
	}
	var btselecionar = document.getElementById("btselecionar");
	btselecionar.addEventListener("click", selecionartarefa);
	
	function retirarselecionada() {
		//
		var divQuadro = document.getElementById("divQuadro");
		var h5 = document.getElementsByTagName("h5");
		var numH5 = h5.length;
		
		var aux = -1;
		
		//
		for (var i = 0; i < numH5; i++) {
			//
			if (h5[i].className == "tarefaselecionada") {
				aux = i;
				break;
			}
		}
		
		//
		if (aux == -1) {
			alert("selecione uma tarefa para remove-la...");
			return;
		}
		
		//
		if (confirm("confirma exclusao de '" + h5[aux].textContent +"'?")) {
			divQuadro.removeChild(h5[aux]);
		}
	}
	var btretirar = document.getElementById("btretirar");
	btretirar.addEventListener("click", retirarselecionada);
	
	function gravarTarefas() {
		var h5 = documnet.getElementsByTagName("h5");
		var numH5 = h5.length;
		
		if (numH5 == 0) {
			alert("nao ha tarefas para serem salvas");
			return;
		}
		
		var tarefas = "";
		
		//
		for (var i = 0; i < numH5; i++) {
			tarefas += h5[i].textContent + ";";
		}
		
		//
		localStorage.setItem("tarefasdia", tarefas.substr(0, tarefas.length - 1));
		
		//
		if (localStorage.getItem("tarefasdia")) {
			alert("ok! tarefas salvas");
		}
	}
	var btgravar = document.getElementById("btgravar");
	btgravar.addEventListener("click", gravartarefas);
	
	function recuperartarefassalvas() {
		//
		if (localStorage.getItem("tarefasdia")) {
			//
			var tarefas = localStorage.getItem("tarefasdia").split(";");
			
			//
			var divQuadro = document.getElementById("divQuadro");
			
			//
			for (var i = 0; i < tarefas.length; i++) {
				var h5 = document.createElement("h5");
				var texto = document.createTextNode(tarefas[i]);
				h5.appendChild(texto);
				divQuadro.appendChild(h5);
			}
		}
	}
	recuperartarefassalvas();