var Hero1 =
{
	nom_hero: "Green Arrow",
	prenom_reel: "Oliver",
	nom_reel: "Queen",
	pouvoir: "Grande maitrise de l'arc et des arts martiaux.",
	ville: "Star City",
	Allie: "Flash, Black Canary, Arsenal, Overwatch...",
	Ennemi: "DeathStroke, Cupid, Malcom Merlyn, Prometheus...",
	Occupation: "Maire de Star City."
}
var Hero2 =
{
	nom_hero: "Flash",
	prenom_reel: "Barry",
	nom_reel: "Allen",
	pouvoir: "Peut controle la force veloce ce qui le rend super rapide et agile. Possède aussi une inteligence hors du commun.",
	ville: "Central City",
	Allie: "Kid Flash, Green Arrow, Jesse Quick...",
	Ennemi: "Negative Flash, Zoom, Savitar...",
	Occupation: "Police scientifique"
}
var Hero3 =
{
	nom_hero: "Superman",
	prenom_reel: "Clark",
	nom_reel: "Kent",
	pouvoir: "Super force, vision rayon-X et thermique, souffle glacial, peut voler, très grande vitesse et est très resistant.",
	ville: "Metropolis",
	Allie: "SuperGirl, Aquaman, Flash, Wonder Woman...",
	Ennemi: "Darkseid, Doomsday, General Zod...",
	Occupation: "Journaliste"
}
var Hero4 =
{
	nom_hero: "Aquaman",
	prenom_reel: "Arthur",
	nom_reel: "Curry",
	pouvoir: "Super force, grande endurance, controle la vie marine, agilite exeptionel dans l'eau et peut respirer sous l'eau.",
	ville: "Atlantide",
	Allie: "Atlanna, Tula, Flash, Superman...",
	Ennemi: "Black Manta, Thanatos, King Shark Ocean Master...",
	Occupation: "Roi des atlandes."
}
var Hero5 =
{
	nom_hero: "Batman",
	prenom_reel: "Bruce",
	nom_reel: "Wayne",
	pouvoir: "Possède beaucoup d'argent et est un maitre des arts martiaux.",
	ville: "Gotham City",
	Allie: "Wonder Woman, Flash, Green Lanthern, Cyborg...",
	Ennemi: "Le joker, Cat Woman, Harley Queen, Bane...",
	Occupation: "Dirige Wayne Entreprise."
}

document.getElementsByClassName("bouton")[0].addEventListener("click",function(){AfficherInfos(1)})
document.getElementsByClassName("bouton")[1].addEventListener("click",function(){AfficherInfos(2)})	
document.getElementsByClassName("bouton")[2].addEventListener("click",function(){AfficherInfos(3)})	
document.getElementsByClassName("bouton")[3].addEventListener("click",function(){AfficherInfos(4)})	
document.getElementsByClassName("bouton")[4].addEventListener("click",function(){AfficherInfos(5)})

var TableauHeros = [Hero1, Hero2, Hero3, Hero4, Hero5];

function AfficherInfos(NumHeros)
{
	var Heros = TableauHeros[NumHeros - 1];
	
	for (Propriete in Heros)
	{
		var textnode = document.createTextNode(Heros[Propriete]);

		var item = document.getElementById(Propriete);

		item.replaceChild(textnode,item.childNodes[1]);
	}
	
	var BaliseImg = document.createElement("img");
	
	BaliseImg.src = "./img/Hero" + NumHeros + ".png";
	BaliseImg.setAttribute("width", "500px");
	BaliseImg.setAttribute("height", "375px");
	
	var SectionImage = document.getElementById("Image");
	
	var element = SectionImage.childNodes[1];
	if(element == "[object HTMLImageElement]")
	{
		element.parentNode.removeChild(element);
	}
	SectionImage.appendChild(BaliseImg);
}