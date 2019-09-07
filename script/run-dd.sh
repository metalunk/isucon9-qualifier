# note: Port 5000 and 5001 are used by datadog.
ssh isucon001 "systemctl stop gunicorn.socket && systemctl restart dd-gunicorn.socket && systemctl restart nginx.service"
#ssh isucon002 "systemctl stop gunicorn.socket && systemctl restart dd-gunicorn.socket && systemctl restart nginx.service"
#ssh isucon003 "systemctl stop gunicorn.socket && systemctl restart dd-gunicorn.socket && systemctl restart nginx.service"
