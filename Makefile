files = $(shell ls ./src/*.js)
TEST = ./test/

all: 
	check

check:
	$(foreach file, $(files), node --check $(file);)

test: 
	npx jest 