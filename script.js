/* Hit Dice */

// Get the modal (hd) and button (hdb) that opens the modal
var hd = document.getElementById("hitDice");
var hdb = document.getElementById("hitDiceButton");
var current

// When the user clicks the button, open the modal 
hdb.onclick = function() {
	hd.style.display = "block";
	current = hd;
}

/* Hit Points */
var hp = document.getElementById("hitPoints");
var hpb = document.getElementById("hitPointsButton");
hpb.onclick = function() {
	hp.style.display = "block";
	current = hp;
}

/* Higher Hit Points */
var hhp = document.getElementById("higherHitPoints");
var hhpb = document.getElementById("higherHitPointsButton");
hhpb.onclick = function() {
	hhp.style.display = "block";
	current = hhp;
}

/* Armor */
var a = document.getElementById("armor");
var ab = document.getElementById("armorButton");
ab.onclick = function() {
	a.style.display = "block";
	current = a;
}

/* Weapons */
var w = document.getElementById("weapons");
var wb = document.getElementById("weaponsButton");
wb.onclick = function() {
	w.style.display = "block";
	current = w;
}

/* Tools */
var t = document.getElementById("tools");
var tb = document.getElementById("toolsButton");
tb.onclick = function() {
	t.style.display = "block";
	current = t;
}

/* Saving Throws */
var st = document.getElementById("savingThrows");
var stb = document.getElementById("savingThrowsButton");
stb.onclick = function() {
	st.style.display = "block";
	current = st;
}

/* Skills */
var s = document.getElementById("skills");
var sb = document.getElementById("skillsButton");
sb.onclick = function() {
	s.style.display = "block";
	current = s;
}

/* Studded Leather */
var sl = document.getElementById("sl");
var slb = document.getElementById("slButton");
slb.onclick = function() {
	sl.style.display = "block";
	current = sl;
}

/* Scale Mail */
var sm = document.getElementById("sm");
var smb = document.getElementById("smButton");
smb.onclick = function() {
	sm.style.display = "block";
	current = sm;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == current) {
	current.style.display = "none";
  }
}