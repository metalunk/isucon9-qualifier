# app-server
ssh isucon001 "systemctl stop dd-gunicorn.socket && systemctl restart gunicorn.socket && systemctl restart nginx.service"
#ssh isucon002 "systemctl stop dd-gunicorn.socket && systemctl restart gunicorn.socket && systemctl restart nginx.service"
#ssh isucon003 "systemctl stop dd-gunicorn.socket && systemctl restart gunicorn.socket && systemctl restart nginx.service"
