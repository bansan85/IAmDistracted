TESTS = \
  0001_dzone_com_1.test \
  0005_www_tecmint_com_1.test

check: $(TESTS)
	@echo Le résultat est dans les fichiers SUCCESS.txt et FAILED.txt

%.test :
	sh $@.sh

clean :
	rm -f SUCCESS.txt FAILED.txt
