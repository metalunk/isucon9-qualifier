.PHONY: all
all: run-dd

DEPLOY_BRANCH = make

.PHONY: deploy
deploy:
	DEPLOY_BRANCH=$(DEPLOY_BRANCH) ./script/deploy.sh

.PHONY: run
run: deploy
	./script/run.sh

.PHONY: run-dd
run-dd: deploy
	./script/run-dd.sh

.PHONY: init-db
init-db: deploy
	./script/init-db.sh