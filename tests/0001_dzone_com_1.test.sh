#!/bin/sh
#Internal popup is showing when scrolling down and asking to subscribe to the newsletter.

echo `curl https://dzone.com/articles/sneak-peak-java-ee-7`| grep -l "emailSubPanel"

if [[ `/bin/echo "$?"` -eq 0 ]]
then echo `basename "$0"` >> SUCCESS.txt
else echo `basename "$0"` >> FAILED.txt
exit 1
fi
