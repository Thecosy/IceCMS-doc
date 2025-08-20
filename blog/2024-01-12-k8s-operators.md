---
title: Kubernetes Operators 深度解析
description: 本文深入探讨了 Kubernetes Operators 的本质，解释了它们的目的、功能以及实际实现方式。
slug: kubernetes-operators-zh
authors: muhammad_khabbab
tags: [kubernetes, docker, chinese]
image: https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-12-k8s-operators/social.png
hide_table_of_contents: false
---

## 引言

Kubernetes Operators 正在彻底改变我们在云环境中管理复杂应用的方式。这些 Operators 类似于智能助手，能够自动化 Kubernetes 应用中的关键任务，如升级、监控和配置变更。本文将深入探讨 Kubernetes Operators 的本质，解释它们的目的、功能以及实际实现方式。

我们还将提供详细的分步说明，指导您在 Kubernetes 集群中创建和部署一个基础的 Operator。让我们从更详细地了解 Operators 开始。

## 理解 Kubernetes Operators

### Kubernetes Operators 是什么

Operators 像智能助手一样处理 Kubernetes 应用。想象一个包含许多应用的复杂系统，需要持续的升级、变更和监控。手动处理这些任务非常困难，但 Kubernetes Operators 简化了这一过程。它们就像是了解应用需求的定制化助手。通过 Operators，自动化组件安装、升级和修复变得异常简单。它们是实现应用部署、可伸缩性和管理自动化的关键。

### 为什么应该使用它们？

Kubernetes Operators 提供了以下宝贵的服务：

-   它们能自动管理应用和服务的部署生命周期。
-   它们能监控性能并自动调整实例以满足需求。
-   Operators 执行备份、升级和修复，维护集群中应用的性能。

通过使用声明式的 Kubernetes API，Operators 可以简化这些职责，确保它们始终处于用户指定的状态。

一个简单的 Operator YAML 定义示例：

```bash
apiVersion: operators.coreos.com/v1beta1
kind: Operator
metadata:
  name: my-custom-operator
spec:
  serviceName: "my-app-service"
  size: 3
  version: "1.0.0"
```

上述配置定义了一个名为 `my-custom-operator` 的 Operator。它针对一个名为 `my-app-service` 的服务，要求其拥有三个版本为 `1.0.0` 的副本。该 Operator 将在 Kubernetes 集群中监控和管理此服务的状态。

## Kubernetes Operators 的类型

### 不同类型 Operator 概述

1.  **核心 Operators (Core Operators):**
    -   核心 Operators 是 Kubernetes 默认包含的，是 Kubernetes 系统本身的一部分。
    -   示例：Deployment, ReplicaSet, DaemonSet。
2.  **社区 Operators (Community Operators):**
    -   这些由 Kubernetes 社区创建和维护，不属于核心 Kubernetes，但被广泛使用。
    -   示例：Prometheus Operator, etcd Operator。
3.  **自定义 Operators (Custom Operators):**
    -   由用户根据其特定需求创建，可以执行您配置的任何操作。
    -   示例：一个自定义的数据库 Operator，用于以符合您组织技术需求的特定方式管理数据库。

Kubernetes Operators 通常通过 Operator Framework 开发，但您也可以不使用该框架来开发。Operator Framework 提供了简化 Operator 开发的工具和工作流，其 Operator SDK 是我们本指南将遵循的路径。

### 每种类型的用例

1.  **核心 Operators:**
    -   可用于基本的 Kubernetes 操作。
    -   示例：使用 Deployment Operator 来推出应用的新版本。
2.  **社区 Operators:**
    -   适用于 Kubernetes 默认不提供的常用工具。
    -   示例：使用 Prometheus Operator 来监控 Kubernetes 集群。
3.  **自定义 Operators:**
    -   当您的独特需求在核心或社区 Operator 中无法满足时，这是最佳选择。
    -   示例：管理一个特殊的数据库或一个在更新期间需要执行特定操作的复杂应用。

现在，我们将使用 Operator Framework 及其 Operator SDK 创建一个简单的 Operator。

## 第三节：构建您自己的 Kubernetes Operator

### 环境设置：

-   安装 Go 语言 (版本 1.13+)。您可以使用此链接进行安装：https://go.dev/doc/install
-   设置 Kubernetes 集群 (Minikube 或基于云的解决方案)。
-   安装 `kubectl` 命令行工具。

### **Operator SDK 安装：**

Windows 不支持二进制文件，您需要在 Windows 上使用 `WSL`。我在 Windows 上安装了 WSL 和 Ubuntu 来完成此操作。因此，Linux 和 macOS 是官方支持的。上述先决条件将安装在运行 Operator SDK 的操作系统上，在我的情况下是 Linux。以下是我执行的步骤：

1- 打开您的 WSL/Ubuntu 终端，通过以下命令安装 Operator SDK 所需的依赖项：
`sudo apt-get install make gcc g++ git`

2- 下载适用于您操作系统的 Operator SDK 二进制文件。由于我使用的是 Linux，所以我使用了以下 URL：
`wget https://github.com/operator-framework/operator-sdk/releases/download/v1.17.0/operator-sdk_linux_amd64`

3- 使该二进制文件可执行，修改权限如下：
`chmod +x operator-sdk_linux_amd64`

4- 为了在终端的任何位置使用 Operator SDK，请将其移动到系统 PATH 中的一个目录。一个常见的位置是 `/usr/local/bin/`：
`sudo mv operator-sdk_linux_amd64 /usr/local/bin/operator-sdk`

5- 验证 Operator SDK 的安装：
`operator-sdk version`

以下是我在 Ubuntu 上执行所有这些步骤的屏幕截图：

 <div className="centered-image">
<img src="https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-12-k8s-operators/image2.png" alt="安装 operator sdk" />
</div>

### **创建一个新的 Operator：**

在详细介绍创建新 Operator 之前，请注意，Operator 将在本地开发，然后部署到 Kubernetes 集群（本地集群或云集群）。

以下是步骤：
1- 在您的本地环境中创建一个 Operator 项目：
`operator-sdk init --domain=mydomain.com --repo=github.com/myuser/my-operator`

以下是这些参数的详细信息：

**`--domain`**: 用于为您的自定义资源定义 (CRD) 提供唯一的组名。它不必是您拥有的域名，只是一种确保您的 CRD 唯一且不与他人冲突的方式。您可以将其设置为任何遵循域名约定的字符串。

**`--repo`**: 用于 Go 模块命名。如果您不打算将 Operator 代码推送到远程仓库，可以将其设置为任何有效的 URL 格式，它不需要指向一个现有的仓库。

<div className="centered-image">
<img src="https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-12-k8s-operators/image3.png" alt="创建 operator 项目" />
</div>

2- 在同一目录中创建 API 和 Controller：
`operator-sdk create api --group=webapp --version=v1 --kind=AppService --resource=true --controller=true`

您会注意到 `api` 和 `controllers` 文件夹现在已自动创建。

<div className="centered-image">
<img src="https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-12-k8s-operators/image9.png" alt="controllers 和 api 文件夹" /></div>

### 开发您的 Operator

**1-修改 API 类型**：现在您需要编辑 `api/v1/` 目录中的文件，以定义 `AppService` 自定义资源的 spec 和 status。例如，可以更新 `api/v1/appservice_types.go` 以匹配您的 `AppService` 结构。以下是 `appservice_types.go` 的内容：

```go
package v1

import (
    metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// AppServiceSpec 指定 AppService 的期望状态
type AppServiceSpec struct {
    // 您可以在此处提及与您的应用相关的任何指令
    Size int32 `json:"size"`
}

// AppServiceStatus 指定 AppService 的观察状态
type AppServiceStatus struct {
    // 注意，Nodes 实际上是 AppService Pod 的名称
    Nodes []string `json:"nodes"`
}

// schema
type AppService struct {
    metav1.TypeMeta   `json:",inline"`
    metav1.ObjectMeta `json:"metadata,omitempty"`

    Spec   AppServiceSpec   `json:"spec,omitempty"`
    Status AppServiceStatus `json:"status,omitempty"`
}

// AppServiceList 仅仅是 AppService 的列表
type AppServiceList struct {
    metav1.TypeMeta `json:",inline"`
    metav1.ListMeta `json:"metadata,omitempty"`
    Items           []AppService `json:"items"`
}

func init() {
    SchemeBuilder.Register(&AppService{}, &AppServiceList{})
}
```

在上面的代码片段中，`AppServiceSpec` 包含一个 `Size` 字段，表示目标实例数，而 `AppServiceStatus` 包含一个 `Nodes` 字段，列出当前运行实例的名称。

**2-实现 Controller 逻辑**：在 `controllers/` 文件夹中，您会看到一个针对您的资源的 Controller 文件（例如 `appservice_controller.go`）。在此文件中，您将编写处理 `AppService` 资源 CRUD 操作的逻辑。以下是该 Controller 文件的内容。

```go
package controllers

import (
    "context"
    appsv1 "github.com/myuser/custom-operator/api/v1"//<您的-api-路径>
    ctrl "sigs.k8s.io/controller-runtime"
    "sigs.k8s.io/controller-runtime/pkg/log"
)

// AppServiceReconciler 协调一个 AppService 对象
type AppServiceReconciler struct {
    client.Client
    Scheme *runtime.Scheme
}

func (r *AppServiceReconciler) Reconcile(ctx context.Context, req ctrl.Request) (ctrl.Result, error) {
    _ = context.Background()
    log := log.FromContext(ctx)

    // 获取 AppService 实例
    appService := &appsv1.AppService{}
    err := r.Get(ctx, req.NamespacedName, appService)
    if err != nil {
        log.Error(err, "无法获取 AppService")
        return ctrl.Result{}, err
    }

    log.Info("正在协调 AppService", "namespace", req.Namespace, "name", req.Name)

    // 在这里您可以放入处理 AppService 的业务逻辑

    return ctrl.Result{}, nil
}

func (r *AppServiceReconciler) SetupWithManager(mgr ctrl.Manager) error {
    return ctrl.NewControllerManagedBy(mgr).
        For(&appsv1.AppService{}).
        Complete(r)
}
```

在上面的代码片段中，`Reconcile` 方法在每次被触发时都会记录一条消息。

**3-生成 CRD 和 RBAC 清单**：下一步是创建 CRD 和 RBAC 清单。只需在您的项目目录中执行以下命令，即可根据 Go 源文件中的标记生成和更新 CRD 清单和 RBAC 规则：

```
make generate
make manifests
```

<div className="centered-image">
<img src="https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-12-k8s-operators/image4.png" alt="生成 CRD 和 RBAC 清单" />
</div>

### 测试您的 Operator

在测试 Operator 之前，您需要确保 `kubectl` 已配置并连接到您的 Kubernetes 集群。以下是测试 Operator 的步骤：

1- 将创建的 CRD 部署到您的 Kubernetes 集群。此命令将安装或设置 Operator 在 Kubernetes 集群中所需的依赖项、配置和清单：

`make install`
2- 现在只需使用以下命令运行您的 Operator。它将启动 Operator 并使其进入监听模式，准备响应集群中的变化。
`make run`

请看我在 Ubuntu 上执行此命令时的屏幕截图。

<div className="centered-image">
<img src="https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-12-k8s-operators/image5.png" alt="运行 operator" />
</div>

3- 最后一步是使用 `kubectl apply -f` 将自定义资源 (CR) YAML 文件应用到集群。它会创建由您的 Operator 定义的自定义资源的实例。换句话说，您正在告诉 Kubernetes 创建一个由您的 Operator 设计来管理的特定类型的资源。这是您请求 Operator 执行特定任务或提供特定服务的方式。

这是一个示例自定义资源 YAML 文件：

```yaml
apiVersion: webapp.mydomain.com/v1
kind: AppService
metadata:
  name: example-appservice
spec:
  size: 3  # 示例大小
```

只需通过 `kubectl apply -f` 应用它。现在，在执行 `make run` 的终端窗口中，检查是否有新的日志。如下面的屏幕截图所示，高亮显示的日志显示了 Operator 成功协调。

<div className="centered-image">
<img src="https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-12-k8s-operators/image6.png" alt="Operator 协调" />
</div>

您可以通过命令 `kubectl get appservices` 检查自定义资源的状态。请看以下显示此命令输出的屏幕截图：

<div className="centered-image">
<img src="https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-12-k8s-operators/image7.png" alt="检查 operator 状态" />
</div>

恭喜！！！您已经创建并部署了您的第一个 Kubernetes Operator。并没有那么难！！！！以下是我们今天创建的主要组件角色的简要总结：

-   **自定义资源 (CR)**: 以简单的配置指定资源的期望状态。
-   **Controller**: 实现核心业务逻辑，根据 CR 中定义的期望状态管理资源。
-   **API**: 定义自定义资源的结构和模式，确保其有效性和一致性。

## 结论

Kubernetes Operators 代表了在管理和自动化 Kubernetes 应用方面的一次重大飞跃。它们不仅简化了服务和应用的生命周期管理，还通过自动调整和维护确保了高性能和可靠性。本文详细介绍了通过 Operator Framework 创建、配置和部署一个简单 Operator 到 Kubernetes 集群的步骤。

遵循同样的方法，您可以为您的应用开发生产就绪的 Operators。正如我们所见，无论是核心、社区还是自定义 Operators，每种都在增强 Kubernetes 体验方面发挥着至关重要的作用，使它们成为任何云原生技术爱好者工具库中不可或缺的工具。