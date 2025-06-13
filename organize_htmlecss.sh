#!/bin/bash

tmp_file=$(mktemp)
ls | grep -v -e "README.md" -e "LICENSE" -e "organize_htmlecss.sh" -e "index.html" -e "index_things" > $tmp_file
printf "# HTMLeCSS\n" > README.md
printf '<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTMLeCSS - GabrielRyanFT </title>
    <link rel="stylesheet" href="./index_things/style.css">
</head>
<body>
<h1>HTMLeCSS</h1>
<p>A list of my tests with HTML and CSS</p>

<main>
' > index.html
while read name
do
	printf "<a href='https://gabrielryanft.github.io/htmlecss/$name/index.html' target='_blank' rel='next'>$name</a><br/>\n" >> README.md
	printf "
<a href='https://gabrielryanft.github.io/htmlecss/$name/index.html' target='_blank' rel='next' class='card'>
    <div class='image'>
	<img src='./index_things/images/${name}.png' alt='Image of website'>
    </div>
    <p>$name</p>
</a>" >> index.html

done < $tmp_file
printf "
</main>
</body>
</html>
" >> index.html
