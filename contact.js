function copynumber(){
    navigator.clipboard.writeText("+919557682562");
    document.getElementById('numbertooltip').innerHTML="Copied Successfully!";
}
function copymail(){
    navigator.clipboard.writeText("urbandriveevllp@gmail.com");
    document.getElementById('mailtooltip').innerHTML="Copied Successfully!";
}
function copyaddress(){
    navigator.clipboard.writeText("Property No. 1/132 and 1/134, Karkari Rd, Vishwas Nagar, Delhi, 110032");
    document.getElementById('addresstooltip').innerHTML="Copied Successfully!";
}


function numberover(){
    document.getElementById('numbertooltip').innerHTML="Click to copy";
}
function mailover(){
    document.getElementById('mailtooltip').innerHTML="Click to copy";
}
function addressover(){
    document.getElementById('addresstooltip').innerHTML="Click to copy";
}
