CURRDIR := $(shell pwd)
WORKDIR := static-generator

all:
	@echo "curr dir: $(CURRDIR)"
	@echo "changing to $(WORKDIR)"
	@cd $(WORKDIR) && $(MAKE) build
