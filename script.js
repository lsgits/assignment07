var index = 0;
    function changeColors(){
    var colors = ["gray","red","Blue","Yellow","Green","Orange", "Cyan","DodgerBlue", "Violet", "Navy","teal", "Purple", "YellowGreen", "OrangeRed", "SlateBlue", "fuchsia", "Crimson", "lime", "Magenta"];
document.getElementsByTagName("body")[0]
.style.background=colors[index++];
if(index>colors.length-1)
inderx=0;
    }