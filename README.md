# Clash Verge rev - 学术网站直连规则脚本

## 介绍

该脚本旨在帮助用户在使用Clash Verge时，通过规则配置确保访问学术网站时绕过代理，直接通过学校或本地网络连接。此脚本通过添加自定义规则，使常见的学术期刊网站流量直接访问，避免代理服务器干扰，确保文献下载不受限制。

## 功能

- 向Clash Verge的规则配置中添加一组新的规则。
- 针对常见学术期刊网站（如IEEE、ACM、Springer等）配置 `DIRECT` 规则，确保这些网站通过本地网络连接。
- 简化Clash配置文件的管理，使学术网站的访问更加顺畅。

## 适用场景

- **学术研究**：如果你是学生或研究人员，通常需要访问学校的IP许可的学术资源。使用此脚本，你可以确保这些学术网站无需代理。
- **网络优化**：通过避免代理，提升学术资源访问速度和稳定性。

## 如何使用

### 1. 下载或克隆仓库

```bash
git clone https://github.com/yourusername/clash-verge-academic-direct.git
```

### 2. 将脚本加入到Clash Verge rev 全局扩展脚本中
![alt text](image.png)
你可以将`script.js`文件中的代码添加到Clash Verge rev的 Rule 模式配置中。通过脚本入口函数，你可以自动更新现有的规则配置。

### 3. 修改并自定义规则（可选）
如果你需要添加其他学术网站，只需在 newRules 数组中添加新的域名规则。例如：

```javascript
let newRules = [
  "DOMAIN-SUFFIX,example.com,DIRECT",
  "DOMAIN-SUFFIX,anotherjournal.com,DIRECT"
];
```
配置解释
DOMAIN-SUFFIX：此规则适用于域名后缀匹配的所有网站。

DIRECT：确保这些网站直接连接，避免通过代理服务器。

no-resolve：防止域名解析影响代理设置。
### 4. 保存并启用配置文件
将修改后的脚本保存一下，然后点击右上角的小火苗图标-->重新订阅，即可启用脚本。


## 致谢

[1] https://github.com/clash-verge-rev/clash-verge-rev/issues/1437#issuecomment-2395050752

[2] https://hexiao2001.github.io/2024/12/24/clash%E5%85%A8%E5%B1%80%E6%89%A9%E5%B1%95%E8%84%9A%E6%9C%AC%E9%98%B2%E6%AD%A2%E9%83%A8%E5%88%86%E7%BD%91%E7%AB%99%E4%BD%BF%E7%94%A8%E4%BB%A3%E7%90%86%E8%AE%BF%E9%97%AE/
