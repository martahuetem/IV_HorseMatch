files = $(shell ls ./src/*.js)

all: check

check:
	$(foreach file, $(files), node --check $(file);)