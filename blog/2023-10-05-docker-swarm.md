---
title: Docker Swarm Mode Guide
description: We'll cover the basics of Docker Swarm mode, including how to set up your first Swarm, join nodes to the Swarm, deploy services, scale services, and monitor services.
slug: docker-swarm
authors: muhammad_khabbab
tags: [docker, dev-tools]
image: https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/social.png
hide_table_of_contents: false
---

## Introduction

### Brief overview of Docker

In the modern world of DevOps, you can package up your application(s) in portable containers using the Docker platform. Containers bundle software with all dependencies, ensuring consistent execution across environments. This enables a team of developers to concurrently work on multiple components of software. This isolation, portability, and scalability make Docker preferred for microservices, development consistency, and efficient resource utilization.

Steps we'll cover:

- [Brief overview of Docker](#brief-overview-of-docker)
- [Explanation of what Docker Swarm mode is and its significance](#explanation-of-what-docker-swarm-mode-is-and-its-significance)
  - [Docker Swarm Mode is Significant due to the following reasons:](#docker-swarm-mode-is-significant-due-to-the-following-reasons)
- [Pre-requisites](#pre-requisites)
- [Setting up Your First Swarm](#setting-up-your-first-swarm)
- [Joining Nodes to the Swarm](#joining-nodes-to-the-swarm)
- [Deploying Services in Swarm](#deploying-services-in-swarm)
- [Scaling Services](#scaling-services)
- [Rolling Updates and Rollbacks](#rolling-updates-and-rollbacks)
- [Monitoring Swarm Services](#monitoring-swarm-services)
- [Cleaning Up and Removing Nodes](#cleaning-up-and-removing-nodes)

## Explanation of what Docker Swarm mode is and its significance

Docker Swarm mode is a feature of Docker Engine that allows you to create and manage a cluster of Docker nodes called a swarm. Basically, a swarm consists of multiple Docker hosts that function as managers and workers, where managers control delegation and membership while workers handle the swarm services. But a particular Docker host can act as a manager, a worker, or both.

### Docker Swarm Mode is Significant due to the following reasons:

**Scalability (Automated load-balancing):** You can declare the number of tasks you want to run for each service. The swarm manager automatically adapts by adding or removing tasks to maintain the desired state whenever you scale up or down. When demand for the service grows, it will add more replicas to the service.
**Simple to Use:** You can use the same Docker CLI commands to create, manage, and operate a swarm as you would use to work with individual containers, which means there's no need to install additional software to use it.
**Integrated Solution:** Docker Swarm mode offers built-in features such as service discovery, load balancing, networking, security, and rolling updates. It uses its dedicated API and was specifically designed to make it easy to create and manage clusters of Docker nodes.

## Pre-requisites

**Docker Installation:** Installing Docker Swarm is simple, even for those just getting started with container orchestration. All nodes that will be included in the Swarm must have Docker installed on them. You can install Docker according to your OS (Linux, Windows or macOS) from the following links:

**Linux/distro/macOS:** [Install Docker Engine | Docker Docs](https://docs.docker.com/engine/install/)

**Windows:** [Install Docker Desktop on Windows | Docker Docs](https://docs.docker.com/desktop/install/windows-install/)

**Basic familiarity with Docker commands:** There is no need to run or install a separate or new CLI because Docker Swarm natively integrates with the Docker CLI. Therefore, it's crucial to understand fundamental Docker commands and concepts like images, containers, and networks.

## Setting up Your First Swarm

A node is a Docker engine instance that participates in the Swarm. This is also known as a Docker node. Although one or more nodes can run on a single physical computer or cloud server, production swarm deployments often have Docker nodes spread over multiple physical and cloud machines. Swarm mode consists of two types of nodes:
**Manager:**
The manager node, as the name suggests, is responsible for cluster administration activities such as maintaining the cluster state, scheduling services, and serving Swarm mode HTTP API endpoints. It is recommended to implement more than one manager node for the production environment.

**Workers:**
The manager node transfers tasks to the worker nodes, who receive and execute them. Worker nodes are not involved in task management. You can configure commands and services to be global or replicated: a global service will operate on every Swarm node, whereas a replicated service will allocate tasks to worker nodes through the manager node.

In order to set up your first Swarm and initialize the swarm mode, you can run the following command:

`docker swarm init`

**This command will return the following output:**

 <div className="centered-image">
   <img  src="https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/swarm-init.png"  alt="docker swarm" />
</div>

<br/>

## Joining Nodes to the Swarm

As previously explained, there are two types of nodes in a cluster: manager nodes and worker nodes. Suppose you already have Swarm up and running and want to add more nodes to it. To join nodes to the Swarm, you must have the join token generated by the manager node when the Swarm was initiated by running the '**docker swarm init**' command. The join token is a secret that allows a node to become a manager or worker in the Swarm.
You can join a node as a worker or a manager. Let's assume that you are the administrator of the manager node and you want to add a new worker node in Swarm. For that purpose, first of all, you need to retrieve the join token by running the following command:

`docker swarm join-token worker`

This command will return you the full command of '**docker swarm join**' along with a token that you just need to run for the worker node to join the Swarm.

 <div className="centered-image">
   <img  src="https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/worker-1.png"  alt="docker swarm" />
</div>

<br/>

Now, you need to copy and run the full command you get in the output of '**docker swarm join-token worker**' in your **worker node** to join the Swarm.

 <div className="centered-image">
   <img  src="https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/worker-2.png"  alt="docker swarm" />
</div>

<br/>

## Deploying Services in Swarm

Swarm containers are started via services, and service is the definition of tasks to be executed by nodes. When creating a service, you must specify the container image you intend to utilize. A global service will operate on all Swarm nodes, but a replicated service would have the manager node for distributing tasks to worker nodes.
In order to deploy a new Docker Swarm service, you can run the command below by replacing your service-specific parameters.

`docker service create [parameters]`

**Service Replicas**
Docker services enable you to declare the desired state, such as the number of replicas, and Swarm can maintain the state across the cluster. For instance, if you set three replicas of a service and one node fails, Swarm will make sure that another node immediately launches an instance to keep the service running. This ensures high availability and fault tolerance.
We can deploy the '**nginx**' service in the docker swarm with 3 service replicas by running the following command on the manager node:

`docker service create --name nginx-service --replicas 3 --publish published=80,target=80 nginx:latest`

**This command will return the following output:**

<div className="centered-image">
   <img  src="https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/ngix-1.png"  alt="docker swarm" />
</div>

<br/>

To ensure that the service is correctly deployed, you can list the services with the state and the established replicas by running the command below:

`docker service ls`

**This command will return the following output:**

<div className="centered-image">
   <img  src="https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/service-ls.png"  alt="docker swarm" />
</div>

<br/>

## Scaling Services

Docker Swarm mode makes scaling effortless. Scaling is important in modern application deployment, ensuring services can accommodate varying loads by adjusting the number of active instances. In Docker Swarm, this adjustment involves altering the number of replicas.
In order to scale an existing service on a Docker Swarm cluster, you can make use of the docker service scale command. This command allows you to either increase or decrease the number of service replicas. We can use the following command for scaling the services:

`docker service scale SERVICE_NAME=REPLICA_COUNT`

Where **SERVICE_NAME** is the name of the service to be scaled, and **REPLICA_COUNT** is the new number of replicas desired. For Example, if you wish to increase the number of copies of the existing '**nginx**' service from three to 4, execute the following command:

`docker service scale nginx-service=4`

**This command will return the following output:**

<div className="centered-image">
   <img  src="https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/scaling-service-1.png"  alt="docker swarm" />
</div>

<br/>

## Rolling Updates and Rollbacks

Application deployment and administration require updates that are seamless. We need to ensure that the release of new features, bug fixes and enhancements to the application does not cause any disruption to users. Not all upgrades work as planned, and sometimes, we just need to revert the update immediately to prevent failures and minimize downtime.
Rolling updates make it possible to deploy new versions of containers without interfering with the availability of your application. For that purpose, you can make use of the docker service update command below by replacing your service-specific parameters:

`docker service update [parameters] `

For Example, if we want to update the version of '**nginx-service**', we can utilize '**--image**' parameter:

`docker service update --image nginx:1.21.4 nginx-service`

**This command will return the following output:**

<div className="centered-image">
   <img  src="https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/rolling-1.png"  alt="docker swarm" />
</div>

<br/>

**Rollback Update:**
The ability to rollback or return to a previous state is extremely valuable not only to minimize downtime but also to ensure efficient handling of failures. The following command in Docker CLI enables quick rollbacks to earlier versions, where SERVICE_NAME is the name of the service required to revert.

`docker service rollback SERVICE_NAME`

For Example, if there is any issue in an updated version, you can rollback to the previous version of '**nginx-service**':

`docker service rollback nginx-service`

**This command will return the following output:**

<div className="centered-image">
   <img  src="https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/rolling-2.png"  alt="docker swarm" />
</div>

<br/>

## Monitoring Swarm Services

Any production environment must have monitoring as a critical component. Applications work easily and consistently when services are monitored for health, performance, and status. Given the distributed structure of services across multiple nodes in Docker Swarm, understanding the state of services and their tasks becomes extremely important.
For monitoring purposes, you can run the command that will provide insights related to tasks of any service. For Example, if we want to list the tasks with insights for '**nginx-service**', we can run the following command:

`docker service ps nginx-service`

**This command will return the following output:**

<div className="centered-image">
   <img  src="https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/monitoring-1.png"  alt="docker swarm" />
</div>

<br/>

**Service Logs:**
Sometimes, while troubleshooting an issue, you might need to view detailed logs related to a specific service. In order to access logs of any particular service, you can make use of the docker service logs command. As an example, the below command displays the logs related to '**nginx-service**':

`docker service logs nginx-service`

**This command will return the following output:**

<div className="centered-image">
   <img  src="https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/monitoring-2.png"  alt="docker swarm" />
</div>

<br/>

## Cleaning Up and Removing Nodes

While administrating the docker swarm cluster, you may be required to restructure or scale down the Swarm gracefully. In order to remove the node, it first needs to be removed from the Swarm. You need to run the command below on the node to leave the Swarm. You can add an additional parameter '**—force**' to the same command if you are on Manager Node.

`docker swarm leave`

**This command will return the following output:**

<div className="centered-image">
   <img  src="https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/cleaning-1.png"  alt="docker swarm" />
</div>

<br/>

Managers can remove a node from the node list if it has left the Swarm or if it is unavailable by replacing the **NODE_NAME** with the name or ID of any particular node they want to remove:

`docker node rm NODE_NAME`

**This command will return the following output:**

<div className="centered-image">
   <img  src="https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/cleaning-2.png"  alt="docker swarm" />
</div>

<br/>

## Conclusion

Application Development and its operations have been transformed by Docker Swarm, which focuses on consistency, scalability, and integrated solutions. Application management is effective due to its smooth integration with the Docker CLI. Docker Swarm is ready to take your operations to new heights, whether you're trying to optimize current workflows or starting new projects. Embrace it, experiment with it, dive deeper and let Docker Swarm take your applications to the next level.
