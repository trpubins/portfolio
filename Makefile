.PHONY: setup clean lint \
		test dev build

####### CONSTANTS #######
PROJ_ROOT_DIR := $(abspath $(dir $(lastword $(MAKEFILE_LIST))))
BUILD_DIR := $(PROJ_ROOT_DIR)/out
NVM_SH_FP := $(HOME)/.nvm/nvm.sh

####### HELPERS #######
# The expanded variable NVM_SETUP checks to see if the
# nvm shell script exists and sources if it is.
# If the main command fails (before ||), the
# expanded variable still succeeds and does nothing
NVM_SETUP := cd $(PROJ_ROOT_DIR) && \
				[ -f $(NVM_SH_FP) ] && \
				source $(NVM_SH_FP) && \
				(nvm use || nvm install) || true

####### BUILD TARGETS #######
setup:
	$(NVM_SETUP) && \
		npm install

clean-node-modules:
	rm -rf $(PROJ_ROOT_DIR)/node_modules

clean:
	rm -rf $(BUILD_DIR)

lint:
	@$(MAKE) setup && npm run lint

test:
	$(NVM_SETUP) && \
		npm run test:silent

dev:
	@$(MAKE) setup && npm run dev

build: clean
	@$(MAKE) setup && npm run build
