Docker Installation:

	$ sudo apt install docker.io
	
	$ docker --version
	
	
Check Docker is Running:

	$ sudo systemctl status docker
	
	$ sudo systemctl enable docker

	
Run Docker file

	$ sudo docker run hello-world
	
	
To check Docker Images

	$ sudo docker images
	
	
To build image

	$ sudo docker build -t node-webapp-docker .
	
	
To See running docker image:
	
	$ sudo docker ps
	
	
To run image:

	$ sudo docker run -d -p 4000:4000 node-webapp-docker
	
To See Logs:

	$ sudo docker logs 3d0dd841
	
	
To get shell:

	$ sudo docker exec -it 3d0dd841 /bin/bash
	
	
	
	
IMAGES:	

To list all images:

	$ docker image ls
	
To remove image:

	$ docker rmi -f node-web-app4
	
	
	
	
	
CONTAINER:

To list all running containers:
	
	$ docker ps
	
To stop runnig container:

	$ docker stop d63j3j3k2
	
To remove container:
	
	$ docker rm -f d63j3k2
	
To see all logs of Container:

	$ docker logs d63j3k2	


	
	
	
	
VOLUMES:

To Create Docker:

	$ sudo docker create my-volume

List all Volume Docker:
	
	$ sudo docker volume ls
	
Bind volume with Container (or) Mount :

	$ docker run -d -p 4004:4000 -v my-doc-volume:/var/opt/demo node-web-app7	
	
	
	syntax:
	
	$ docker run  -d  -p local:container  -v VOL_NAME:/LOCATION_TO_SAVE  CONTAINER_NAME
	
	
	
	
	
	
TERMS:
* docker file
* docker image
* container
* port forwarding
* volumes
* docker-compose
	
	
	
	
	
	
	
	
	
	
	
	
