# IceCMS-Pro Docker 部署清单

## 部署前检查

### ✅ 构建产物确认

- [x] 后端 JAR 包: `IceCMS-main/target/main.jar` (151MB)
- [x] Vue 3 管理后台: `IceCMS-front-admin/dist/`
- [x] Nuxt 4 公共前端: `IceCMS-front-nuxt/.output/`

### ✅ Docker 配置文件

- [x] `IceCMS-Docker/docker-compose.yml` - 主编排文件
- [x] `IceCMS-Docker/icecms-fullstack/Dockerfile` - 全栈应用镜像
- [x] `IceCMS-Docker/icecms-fullstack/startup.sh` - 启动脚本
- [x] `IceCMS-Docker/icecms-fullstack/default-admin.conf` - Nginx 配置
- [x] `IceCMS-Docker/icecms-sql/Dockerfile` - MySQL 镜像
- [x] `IceCMS-Docker/icecms-sql/IceCMS.sql` - 数据库初始化脚本 (238KB, 2025-11-10)
- [x] `IceCMS-Docker/icecms-sql/setup.sh` - 数据库启动脚本

### ✅ 配置验证

- [x] Build context: 项目根目录 (`context: ..`)
- [x] Dockerfile 路径: `IceCMS-Docker/icecms-fullstack/Dockerfile`
- [x] COPY 路径: 相对于项目根目录
- [x] SQL 文件包含: `CREATE DATABASE IF NOT EXISTS icecms`
- [x] MySQL 密码: `123123` (与 application.yml 一致)

## 部署步骤

### 1. 环境准备

```bash
# 确认 Docker 已安装
docker --version    # 要求 >= 20.10
docker-compose --version  # 要求 >= 2.0

# 确认系统资源
# - 内存: >= 4GB
# - 磁盘: >= 10GB
```

### 2. 构建应用 (如果还未构建)

```bash
# 在项目根目录执行

# 构建后端
./mvnw clean package -DskipTests

# 构建 Vue 3 管理后台
cd IceCMS-front-admin
pnpm install
pnpm build
cd ..

# 构建 Nuxt 4 公共前端
cd IceCMS-front-nuxt
pnpm install
pnpm build
cd ..
```

### 3. 构建 Docker 镜像

```bash
cd IceCMS-Docker
docker-compose build
```

**预期输出:**
- 构建 `icecms-sql` 镜像 (MySQL 8.4)
- 构建 `icecms-fullstack` 镜像 (Node.js 22 + Java 17 + Nginx)

### 4. 启动服务

```bash
docker-compose up -d
```

**预期输出:**
```
Creating network "icecms-network" with driver "bridge"
Creating volume "mysql-data" with local driver
Creating icecms-sql ... done
Creating icecms-fullstack ... done
```

### 5. 验证服务状态

```bash
# 查看容器状态
docker-compose ps

# 预期看到两个容器都是 Up 状态
# icecms-sql        Up (healthy)
# icecms-fullstack  Up
```

### 6. 查看启动日志

```bash
docker-compose logs -f
```

**预期看到:**
- MySQL 初始化完成
- Spring Boot 应用启动在 8181 端口
- Nuxt 应用启动在 3000 端口
- Nginx 启动在 2580 端口

### 7. 访问测试

打开浏览器访问:

- **Nuxt 公共前端**: http://localhost:3001
- **Vue 管理后台**: http://localhost:2580
- **Spring Boot API**: http://localhost:8181/actuator/health

### 8. 数据库连接测试

```bash
# 连接 MySQL
docker exec -it icecms-sql mysql -uroot -p123123 icecms

# 验证表已创建
mysql> SHOW TABLES;
mysql> SELECT COUNT(*) FROM all_tag;
mysql> exit
```

## 配置说明

### 端口映射

| 服务 | 容器端口 | 主机端口 | 用途 |
|------|---------|---------|------|
| MySQL | 3306 | 3306 | 数据库 |
| Nuxt | 3000 | 3001 | 公共前端 |
| Nginx | 2580 | 2580 | 管理后台 |
| Spring Boot | 8181 | 8181 | 后端 API |

### 数据库配置

- **数据库名**: icecms
- **用户名**: root
- **密码**: 123123
- **字符集**: utf8mb4
- **数据持久化**: Docker volume `mysql-data`

### Java 配置

- **JVM 参数**: G1GC, 最大堆 2GB
- **端口**: 8181
- **数据库连接**: 通过环境变量注入

### Nuxt 配置

- **运行模式**: Production (SSR)
- **端口**: 3000 (内部), 3001 (外部)
- **API 地址**: http://localhost:8181

### Vue Admin 配置

- **Web 服务器**: Nginx
- **端口**: 2580
- **静态文件**: `/app/frontend-admin`
- **API 代理**: `/api/*` -> `http://localhost:8181/`

## 故障排查

### 问题: 容器启动失败

**解决方案:**
```bash
# 查看日志
docker-compose logs [服务名]

# 常见原因:
# 1. 端口被占用 -> 修改 docker-compose.yml 端口映射
# 2. 构建文件缺失 -> 重新构建应用
# 3. 内存不足 -> 调整 JAVA_OPTS
```

### 问题: 数据库连接失败

**解决方案:**
```bash
# 检查数据库状态
docker-compose ps icecms-sql

# 查看数据库日志
docker-compose logs icecms-sql

# 测试网络连通性
docker exec -it icecms-fullstack ping icecms-sql
```

### 问题: 前端无法访问 API

**解决方案:**
```bash
# 进入 fullstack 容器
docker exec -it icecms-fullstack bash

# 测试 API 连接
curl http://localhost:8181/actuator/health

# 检查环境变量
env | grep -E "MYSQL|API"
```

## 维护操作

### 查看日志

```bash
docker-compose logs -f            # 所有服务
docker-compose logs -f icecms-sql # MySQL
docker-compose logs -f icecms-fullstack # 全栈应用
```

### 重启服务

```bash
docker-compose restart            # 重启所有
docker-compose restart icecms-fullstack # 重启应用
```

### 停止服务

```bash
docker-compose stop   # 停止但保留容器
docker-compose down   # 停止并删除容器
docker-compose down -v # 停止、删除容器和数据卷 (⚠️ 会删除数据)
```

### 备份数据库

```bash
# 备份
docker exec icecms-sql mysqldump -uroot -p123123 icecms > backup_$(date +%Y%m%d).sql

# 恢复
docker exec -i icecms-sql mysql -uroot -p123123 icecms < backup.sql
```

### 更新部署

```bash
# 1. 重新构建应用
./mvnw clean package -DskipTests
cd IceCMS-front-admin && pnpm build && cd ..
cd IceCMS-front-nuxt && pnpm build && cd ..

# 2. 重新构建 Docker 镜像
cd IceCMS-Docker
docker-compose down
docker-compose build

# 3. 启动服务
docker-compose up -d

# 4. 验证
docker-compose logs -f
```

## 性能优化

### 生产环境建议

1. **内存优化**
   ```yaml
   JAVA_OPTS: "-Xmx4g"  # 根据服务器内存调整
   ```

2. **资源限制**
   ```yaml
   deploy:
     resources:
       limits:
         cpus: '2'
         memory: 4G
   ```

3. **反向代理**
   - 使用 Nginx/Traefik 作为反向代理
   - 配置 HTTPS 证书
   - 启用 Gzip 压缩

4. **日志管理**
   - 配置日志轮转
   - 使用集中式日志收集

5. **监控告警**
   - Prometheus + Grafana
   - 容器健康检查
   - 资源使用监控

## 版本信息

- **构建日期**: 2025-12-01
- **MySQL**: 8.4
- **Java**: JDK 17
- **Node.js**: 22
- **SQL 版本**: 2025-11-10

## 相关文档

- 详细部署文档: [README.md](README.md)
- 项目文档: [../README.md](../README.md)
- Claude 指令: [../CLAUDE.md](../CLAUDE.md)
