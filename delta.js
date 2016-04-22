function delta(){
	choices = [0.05,-0.05,0.1,-0.1]
	return [choices[~~(Math.random(choices)*choices.length)],choices[~~(Math.random(choices)*choices.length)]]
}

