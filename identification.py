# from ast import main
# from .main_prog import my_dict
from .main_prog import my_dict

components = []
f_prg = open("program.html", "w")
f_prg.write("<HTML>\n")
f_prg.write("<BODY>\n")
for i in reversed(my_dict) :
    print(i)
    if i == (254,0,0) :
        f_prg.write("\t<h1>This is Heading</h1>\n")
        components.append('h1')
    elif i == (255,139,0) :
        f_prg.write("\t<h2>This is Heading</h2>\n")
        components.append('h2')
    elif i == (154,205,50) :
        f_prg.write("\t<h3>This is Heading</h3>\n")
        components.append('h3')
    elif i == (32,178,170) :
        f_prg.write("\t<h4>This is Heading</h4>\n")
        components.append('h4')
    elif i == (100,149,237) :
        f_prg.write("\t<h5>This is Heading</h5>\n")
        components.append('h5')
    elif i == (219,112,147) :
        f_prg.write("\t<h6>This is Heading</h6>\n")
        components.append('h6')
    elif i == (255,0,254) :
        f_prg.write("\t<p>lorem*15</p>\n")
        components.append('paragraph')
    elif i == (0,255,0) :
        f_prg.write("\t<hr>")
        components.append('hr')
    elif i == (0,0,128) :
        f_prg.write("\t<a>Thisishyperlink.com</a>\n")
        components.append('anchor')
    elif i == (255,215,0) :
        f_prg.write("   <img src=\"image.jpg\" alt=\"Your face\" width=\"42\" height=\"42\">\n")
        components.append('anchor')
    elif i == (250,128,114) :
        f_prg.write("\t<ul>\n"
                            "\t\t<li style = \"float:left\"><a href=\"#home\">Home</a></li>\n"
                            "\t\t<li style = \"float:left\"><a href=\"#news\">News</a></li>\n"
                            "\t\t<li style = \"float:left\"><a href=\"#contact\">Contact</a></li>\n"
                            "\t\t<li style = \"float:left\"><a href=\"#about\">About</a></li>\n"
                        "\t</ul>")
        components.append('navbar')
    elif i == (127,255,212) :
        f_prg.write("\t<table style=\"width:100%\">\n"
                        "\t\t<tr>\n"
                        "\t\t<th style=\"border:1px solid black\">Person 1</th>\n"
                        "\t\t<th style=\"border:1px solid black\">Person 2</th>\n"
                        "\t\t<th style=\"border:1px solid black\">Person 2</th>\n"
                        "\t\t</tr>\n"
                        "\t\t<tr>\n"
                        "\t\t<td style=\"border:1px solid black\">Billy</td>\n"
                        "\t\t<td style=\"border:1px solid black\">Gilly</td>\n"
                        "\t\t<td style=\"border:1px solid black\">Silly</td>\n"
                        "\t\t</tr>\n"
                        "\t\t<tr>\n"
                        "\t\t<td style=\"border:1px solid black\">16</td>\n"
                        "\t\t<td style=\"border:1px solid black\">14</td>\n"
                        "\t\t<td style=\"border:1px solid black\">12</td>\n"
                        "\t\t</tr>\n"
                        "\t\t</table>)\n")
        components.append('table')
    elif i == (127,255,0) :
        f_prg.write("\t<button type=\"button\">Click Me!</button>\n")
        components.append('button')
    elif i == (88,88,88) :
        f_prg.write("\t<label for=\"cars\">Choose a car:</label>\n"
                    "\t\t<select>\n"
                    "\t\t<option value=\"option1\">Option A</option>\n"
                    "\t\t<option value=\"option2\">Option B</option>\n"
                    "\t\t<option value=\"option3\">Option C</option>\n"
                    "\t\t<option value=\"option4\">Option D</option>\n"
                    "\t\t</select>\n")
        components.append('select')
print(components) 
f_prg.write("</BODY>\n")
f_prg.write("</HTML>\n")
f_prg.close()
