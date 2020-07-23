#!/bin/bash


#read -p  "Digite um nome  de  arquivo ou pasta :  " CAMINHO
if [ -d "$1" ]
then 
	echo "é um diretorio"
	ls -l "$1"
elif
       [ -f "$1" ]
then       
	echo "é um arquivo"
else
	echo "$1 é outro tipo de arquivo"
fi

