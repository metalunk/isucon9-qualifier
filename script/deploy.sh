PULL_COMMAND="git fetch && git checkout $DEPLOY_BRANCH && git reset --hard origin/$DEPLOY_BRANCH"
ssh isucon001 "cd /tmp/isucon9/ && $PULL_COMMAND && cd isucari/webapp/python && pip3.7 install -r requirements.txt && cp -R /tmp/isucon9/isucari /home/isucon"
ssh isucon002 "cd /tmp/isucon9/ && $PULL_COMMAND && cd isucari/webapp/python && pip3.7 install -r requirements.txt && cp -R /tmp/isucon9/isucari /home/isucon"
ssh isucon003 "cd /tmp/isucon9/ && $PULL_COMMAND && cd isucari/webapp/python && pip3.7 install -r requirements.txt && cp -R /tmp/isucon9/isucari /home/isucon"
