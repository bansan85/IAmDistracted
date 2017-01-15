#!/bin/sh
#Internal popup is showing when scrolling down and asking to subscribe to social website.

echo `curl http://www.tecmint.com/best-linux-ide-editors-source-code-editors/`| grep -l "dgd_stb_box clean_white"

if [[ `/bin/echo "$?"` -eq 0 ]]
then echo `basename "$0"` >> SUCCESS.txt
else echo `basename "$0"` >> FAILED.txt
exit 1
fi
