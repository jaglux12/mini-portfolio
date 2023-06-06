#!/bin/bash
echo "Web builder"

cp -r assets/ public/

cp src/dark-mode.js public/
cp src/index.html public/
cp src/menu.js public/
cp dist/output.css public/styles.css

cp -r src/js public/
cp src/menu.js public/


echo "Archivos copiados correctamente"

exit
