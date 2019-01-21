#!/bin/sh
echo "Welcome to the Compress Setup Dialog! You can always just skip this Dialog and setup the Project by yourself. Do you already have a Database ready for development purpose? y n"
read HAS_DATABASE
if [ "$HAS_DATABASE" = "y" ]
then
    echo "Great! "
fi
echo "$HAS_DATABASE"