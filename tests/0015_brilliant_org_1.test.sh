#!/bin/sh
#Internal popup asking to login.

echo `curl https://brilliant.org/wiki/scapegoat-tree/`| grep -l "loggedout-wiki-footer"

if [[ `/bin/echo "$?"` -eq 0 ]]
then echo `basename "$0"` >> SUCCESS.txt
else echo `basename "$0"` >> FAILED.txt
exit 1
fi
