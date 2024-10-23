Here is the translated text:

---
id: base  
title: Quick Release  
sidebar_label: Quick Release  

Quick Release  

1. Setting up the nginx + node + npm + pm2 environment  
Our nginx version is 1.12  
The node version is v8.11.1  
The npm version is 5.6.0  
The pm2 version is 2.10.2  
For specific environment installation, there are tutorials available online, so we won't go into details here, but will get straight to the main content.  

2. Configure nginx to proxy listen on port 3001  
In nginx's vhost, create a new host binding:  
```  
upstream nodenuxt {  
    server 127.0.0.1:3001; # nuxt project listen port  
    keepalive 64;  
}  

server {  
    listen 80;  
    server_name mysite.com;  
    location / {  
        proxy_http_version 1.1;  
        proxy_set_header Upgrade $http_upgrade;  
        proxy_set_header Connection "upgrade";  
        proxy_set_header Host $host;  
        proxy_set_header X-Nginx-Proxy true;  
        proxy_cache_bypass $http_upgrade;  
        proxy_pass http://nodenuxt; # reverse proxy  
    }  
}  
```

3. After completing the project locally, run `npm run build` to package the application.  
Once the packaging is complete, we will upload the following files to the server:  
- .nuxt  
- static  
- nuxt.config.js  
- package.json  

Upload files needed:  

4. Deploy and run on the server  
1. Run `npm install` to install the dependencies from the package.  
2. Run `npm start` to start the nuxt server rendering.  
At this point, we can access the site by entering mysite.com in the browser. Server-side rendering appears instantly, but this is not ideal; can the process stabilize and remain running in the background?  

5. pm2  
---
