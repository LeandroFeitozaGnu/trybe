#!/bin/bash


read -p  "Digite um nome  de  arquivo ou pasta :  " CAMINHO
if [ -d "$CAMINHO" ]
then 
	echo "é um diretorio"
	ls -l $CAMINHO
elif
       [ -f "$CAMINHO" ]
then       
	echo "é um arquivo"
else
	echo "$CAMINHO é outro tipo de arquivo"
fi

