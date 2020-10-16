import { index } from ".\\logic.js";
import { selword } from ".\\logic.js";
import { dict } from ".\\content.js";
import { content_set_hintsleft } from ".\\content.js";
import { hintsleft } from ".\\content.js";
/*hintbutton and hinttext should not be made visible simultaneously.
There must be switching between both of them. When one is visible, the other one is made invisible
I'll call this 'countereffect'
*/

//all the global variables
var string1=" Hints Left";
var string2=" Hint Left";
var string3="No Hint Left";

//This function is responsible for showing the number of hints in the HTML
export function shownoofhints() {
		if(hintsleft==1)
		{	document.getElementById("noofhints").innerHTML=hintsleft+string2;//just for gramatical reasons
		}
		else
		{
			document.getElementById("noofhints").innerHTML=hintsleft+string1;//just for gramatical reasons
		}
}

//executed when the hint button is pressed
export function givehint() {
	content_set_hintsleft(hintsleft - 1);
	if(hintsleft>0)
	{
		shownoofhints();
	}
	else
	{document.getElementById("noofhints").innerHTML=string3;}//When all the hints are exhausted}
	//ensuring countereffect
	document.getElementById("hintbutton").style.visibility="hidden";
	document.getElementById("hinttext").style.visibility="visible";	
}

//this function ensures countereffect. When the next word is loaded, the hintbutton is made visible and hinttext invisible
export function showhintbutton() {
	if(hintsleft!=0)
	{
		document.getElementById("hinttext").innerHTML=dict[selword[index]];
		document.getElementById("hintbutton").style.visibility="visible";
		document.getElementById("hinttext").style.visibility="hidden";	
	}
	else
	{	
		hideallhint();
	}
}

export function hideallhint() {
		//when all the hints are utilized, both hintbutton and hinttext are made invisible
		document.getElementById("hinttext").style.visibility="hidden";
		document.getElementById("hinttext").innerHTML=dict[selword[index]];
		document.getElementById("hintbutton").style.visibility="hidden";
}