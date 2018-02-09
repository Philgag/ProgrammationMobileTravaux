function Exercice1() 
{
	viderContenu();
	var num = 0;
	var resultat = 0;
	num = prompt("Entrez le nombre dont vous voulez la table de multiplication: ");
	for(var cptFor = 1; cptFor <= 12; cptFor ++)
	{
		resultat = num * cptFor;
		ajouterContenu(resultat);
	}
}

function Exercice2()
{
	viderContenu();
	var num1 = 0;
	var num2 =0;
	var operateur = " ";
	var resultat = 0;
	do
	{
		alert("Ceci est une calculatrice vous devrez entrer 2 nombre puis un opérateur et elle affichera le résultat");
		num1 = prompt("Entrez un premier nombre");
		num2 = prompt("Entrez un deuxième nombre");
		operateur = prompt("Entrez un opérateur '+,-,*,/'");

		switch(operateur)
		{
			case "+":
				resultat = parseInt(num1) + parseInt(num2);
				ajouterContenu(resultat);
			break;
			case "-":
				resultat = parseInt(num1) - parseInt(num2);
				ajouterContenu(resultat);
			break;
			case "*":
				resultat = parseInt(num1) * parseInt(num2);
				ajouterContenu(resultat);
			break;
			case "/":
				resultat = parseInt(num1) / parseInt(num2);
				ajouterContenu(resultat);
			break;
		}
		continuer = confirm("Voulez-vous continuer ? si oui appuyez sur 'OK' si non appuyez sur 'Annuler'");
	}while(continuer === true)
}

function Exercice3()
{
	var age = [18,15,22,35,67,4];
	document.getElementById("resultat").innerHTML = age.map(fete);
	document.getElementById("resultat").innerHTML += age.filter(checkAdulte);
}

function Exercice4()
{
	viderContenu();
	var ligne = 0;
	var resultat = "";
	ligne = prompt("Entrez le nombre de lignes que vous voulez");
	if(ligne <= 20)
	{
		for(i = 0; i < ligne; i ++)
		{
		resultat += "*";
		pyramide(resultat);
		}
	}
	else
	{
		alert("Calmez-vous !");
	}
}
function Exercice5()
{
	viderContenu();
	var ligne = 0;
	var resultat = "";
	ligne = prompt("Entrez le nombre de ligne que vous voulez");
	ligne ++;
	if(ligne <= 21)
	{
		for(i = 1; i < ligne; i ++)
		{
			for(y = 0; y < i; y ++)
			{
			resultat += " ";
			}
			resultat += "*";
			ajouterContenu(resultat);
		}
	}
	else
	{
		alert("Calmez-vous !");
	}
}
function fete(age)
{
	return ++ age;
}
function checkAdulte(age) 
{
	return age >= 18;
}
function ajouterContenu(message)
{
	document.getElementById("resultat").innerHTML += message + "<br/>";
}

function viderContenu()
{
	document.getElementById("resultat").innerHTML = "";
	document.getElementById("resultat2").innerHTML = "";
}
function pyramide(message)
{
	document.getElementById("resultat2").innerHTML += message + "<br/>";
}
