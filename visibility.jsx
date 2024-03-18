var doc = app.activeDocument;

// Annahme: Der Layer heißt "Layer1"
var layer = doc.layers.itemByName("Die [DO NOT PRINT]");

// Überprüfen, ob der Layer gültig ist
if (layer.isValid) {
    // Den Layer unsichtbar schalten
    layer.visible = false;
	alert ("Layer: Die [DO NOT PRINT] wurde unsichtabr gesetzt"); 
} else {
    alert("Der angegebene Layer wurde nicht gefunden.");
}