CAMINHO=./teste.txt
if [ -e $CAMINHO ]
then
	echo "O caminho " $CAMINHO "está habilitado!"
fi
if [ -w $CAMINHO ]
then
	echo  "Você tem permissão para editar o $CAMINHO"
else
	echo "Você não foi autorizado a editar $CAMINHO"
fi
