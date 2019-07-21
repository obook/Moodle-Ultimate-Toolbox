// ==UserScript==
// @name Moodle-Ultimate-Toolbox
// @author obooklage - Education Nationale / Académie de Créteil - FRANCE
// @licence MIT License (MIT)
// @version	1
// @namespace Violentmonkey Scripts
// @match *://moodle.*/*
// ==/UserScript==

/* Lesson mod : set next page by default */
/* Remplir le selecteur 'Aller' et remplir le champ de description  */

function FunctionChanged()
{
  console.log("Changed");
  var selector = document.getElementById("id_jumpto_0");
  var text = selector.options[selector.selectedIndex].text;
  document.getElementById('id_answer_editor_0').value = text;
}

var selector = document.getElementById("id_jumpto_0");
if(selector)
{
  selector.addEventListener("change", FunctionChanged);
  textfield = document.getElementById('id_answer_editor_0');
  if(textfield)
  {
    text = document.getElementById("id_answer_editor_0").value;
    console.log("Texte existant = "+text);
    if(text=="")
    {
      selector.value = -1; /* Page suivante */
      FunctionChanged();
    }
  }
}
