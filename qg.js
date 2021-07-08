// Intialisation des variables des nom des zones de popUp
// Les noms doivent être les mêmes que les noms des rectangles définis dans Tiled dans le layer object floorLayer
// Ces rectangles définissent la zone ou apparaîtra le popup
// Dans Tiled un layer doit être créé avec le nom de chaque zone de PopUp en retirant le mot Name
// Le nom des layers reprends le nom des variables zone
// Il suffit alors de positionner des tuiles pour definir ou le popUp sera declenche
// Ajouter alors la propriete zone avec le nom du popUp a chacun de ces layers

// Message dans le log de la console web
console.log("SCRIPT IS COMING!");

// Variables de zones
var zone0AccueilName = "popUp0Accueil";
var zone1poteapotesName = "popUp1poteapotes";
var zone2recrutementbenevolesName = "popUp2recrutementbenevoles";
var zone3devenirbenevoleName = "popUp3devenirbenevole";
var zone4telegramName = "popUp4telegram";
var zone5discordName = "popUp5discord";

// variables des url utilisées
var urlpopUp1poteapotes = "https://primairepopulaire.nationbuilder.com/potes_potes";
var urlpopUp2recrutementbenevoles = "https://primairepopulaire.nationbuilder.com/recrutement_de_benevoles";
var urlpopUp3devenirbenevole = "https://primairepopulaire.nationbuilder.com/";
var urlpopUp4telegram = "https://t.me/infoprimairepopulaire";
var urlpopUp5discord = "https://discord.gg/hu8NdDgGeG";


// Autres variables
var currentPopup = undefined;
var isCoWebSiteOpened =  false;
var ispopUp0AccueilSeen = "no";

// popUp 0 quand on entre sous le porche
// Test si la personne a déjà eu le popup
WA.onEnterZone(zone0AccueilName, () => {
    if(ispopUp0AccueilSeen == "no"){
   WA.disablePlayerControls();
        console.log(ispopUp0AccueilSeen);
        ispopUp0AccueilSeen = "yes";
        currentPopup =  WA.openPopup("popUp0Accueil","Bienvenue au QG virtuel de la primaire populaire ! Approchez-vous du robot pour avoir de l'aide.",[
            {
                label: "OK",
                className: "popUpElement",
                callback: (popup => {
                // WA.openCoWebSite(urlTeleport);
                // isCoWebSiteOpened = true;
                WA.restorePlayerControls();
                closePopUp();
                })
            }]);
    }
 
})
WA.onLeaveZone(zone0AccueilName, closePopUp)

// popUp 1 Accès lien web séances pote à potes
WA.onEnterZone(zone1poteapotesName, () => {
   currentPopup =  WA.openPopup("popUp1poteapotes","Voir les séances de pote à potes ?",[
        {
            label: "OUI",
            className: "popUpElement",
            callback: (popup => {
				// Ouvre la page web dans l'ifram
                //WA.openCoWebSite(urlpopUp1poteapotes);
				// Ouvre la page web dans un nouvel onglet
				WA.openTab(urlpopUp1poteapotes);
                isCoWebSiteOpened = true;
                closePopUp();
            })
        }]);
})
WA.onLeaveZone(zone1poteapotesName, closePopUp)

// popUp 2 Accès lien web recrutement bénévoles
WA.onEnterZone(zone2recrutementbenevolesName, () => {
   currentPopup =  WA.openPopup("popUp2recrutementbenevoles","Ouvrir le lien pour les recrutements de bénévoles ?",[
        {
            label: "OUI",
            className: "popUpElement",
            callback: (popup => {
                //WA.openCoWebSite(urlpopUp2recrutementbenevoles);
				WA.openTab(urlpopUp2recrutementbenevoles);
                isCoWebSiteOpened = true;
                closePopUp();
            })
        }]);
})
WA.onLeaveZone(zone2recrutementbenevolesName, closePopUp)

// popUp 3 devenir bénévole
WA.onEnterZone(zone3devenirbenevoleName, () => {
	console.log("ZONE 3");
   currentPopup =  WA.openPopup("popUp3devenirbenevole","Vous voulez devenir bénévole ?",[
        {
            label: "OUI",
            className: "popUpElement",
            callback: (popup => {
                //WA.openCoWebSite(urlpopUp3devenirbenevole);
				WA.openTab(urlpopUp3devenirbenevole);
                isCoWebSiteOpened = true;
                closePopUp();
            })
        }]);
})
WA.onLeaveZone(zone3devenirbenevoleName, closePopUp)

// popUp 4 inscription boucle Telegram
WA.onEnterZone(zone4telegramName, () => {
   currentPopup =  WA.openPopup("popUp4telegram","Vous souhaitez vous inscrire au groupe Telegram pour recevoir les informations ?",[
        {
            label: "OUI",
            className: "popUpElement",
            callback: (popup => {
                //WA.openCoWebSite(urlpopUp3devenirbenevole);
				WA.openTab(urlpopUp4telegram);
                isCoWebSiteOpened = true;
                closePopUp();
            })
        }]);
})
WA.onLeaveZone(zone4telegramName, closePopUp)

// popUp 5 inscription Discord
WA.onEnterZone(zone5discordName, () => {
   currentPopup =  WA.openPopup("popUp5discord","Vous souhaitez nous rejoindre à l'organisation via Discord ?",[
        {
            label: "OUI",
            className: "popUpElement",
            callback: (popup => {
                //WA.openCoWebSite(urlpopUp3devenirbenevole);
				WA.openTab(urlpopUp5discord);
                isCoWebSiteOpened = true;
                closePopUp();
            })
        }]);
})
WA.onLeaveZone(zone5discordName, closePopUp)

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}