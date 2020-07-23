#!/bin/bash

if [ -d $1 ]
then 
	cd $1
	BUSCA=`ls -la | wc -l`
	echo "O $1 tem $BUSCA arquivos"
else 
	echo "O argumento $1 não é um diretório!"
fi

