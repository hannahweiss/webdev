server {
	listen 80;
	listen [::]:80;

	root /home/hannah/www/hw02;

	index index.html;

	server_name hw02.hweisswebdev.com;

	location / {
		try_files $uri $uri/ =404;
	}
}
