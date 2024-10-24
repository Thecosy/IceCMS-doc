---
id: front-end
title: Front-end deployment
sidebar_label: Front-end deployment
---

# front end

The front-end development mode of IceCMS management background is developed using the front-end and back-end separation technology. During secondary development, you need to start the front-end development mode, and then modify the front-end code to preview it in real time.

Tip: The preview speed of the page will be slower in developer mode, but it will be very smooth after packaging.

Step 1: Set the server domain name interface. Use the ide editor to open the IceCMS project, open the .env.development file, modify the value of the VUE_APP_BASE_API variable to the server address where the project is installed and deployed, and remember to save it.

![](/img/icecms/878c15b03c8c962179d858cbb0b3f03a.png)

Step 2: Install the node environment. Open https://nodejs.org/en/download/releases/open in new window, download the corresponding version installation package, and download the msi suffix file for easy installation. The node version is greater than v14.18.0 to avoid unknown errors in compilation.

![](/img/icecms/6574c6100064cfa4e626daf43bbb5cec.png)

Step 3: Open the system's built-in terminal, Windows Powershell, and run it as an administrator.

![](/img/icecms/ce43b03e5b7a59d8a3066f4c1fa6c356.png)

Step 4: Run the command in the terminal to set up the Taobao mirror.

```
npm config set registry https://registry.npm.taobao.org
```

![](/img/icecms/be87000da748c9f14ee37ea223814afb.png)

Step 4: Use the cd command to enter the likeadmin/admin backend front-end source code directory. Please enter the cd command according to the actual directory of the project. Do not copy the command directly to run.

![](/img/icecms/5f9a09eed31448f89ed4824e01e2b258.png)

Step 5: Run the command in the terminal to install dependencies. npm install

![](/img/icecms/e927b94ca9acffb489e0c040200dd819.png)

Step 6: Run the command in the terminal to run the project. npm run dev

![](/img/icecms/fd9b6a9423df25c936fa7a6865d6cf8a.png)

Step 7: Open the browser and enter http://localhost:9528/admin in new window in the address bar to access the management backend, where you can modify and preview the front-end and back-end source code in real time. The development mode will be slower when loading for the first time.

The backend cannot be accessed, please configure pseudo-static

```
location / {
  try_files $uri $uri/ /index.html;
}
```

![](/img/icecms/280e2ff1dfb1047092d791475ef33fc6.png)
