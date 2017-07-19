#!/bin/sh
#Internal popup asking to login.

echo `curl http://madame.lefigaro.fr/bien-etre/cloudbread-tendance-pain-sans-gluten-ni-farine-110316-113389`| grep -l "mad__market__droit"

if [[ `/bin/echo "$?"` -eq 0 ]]
then echo `basename "$0"` >> SUCCESS.txt
else echo `basename "$0"` >> FAILED.txt
exit 1
fi
