# Contributing | 贡献指南

感谢你对本项目的关注！欢迎提交 Issue 和 Pull Request。

## 如何贡献

### 1. Fork 本仓库

点击右上角 **Fork** 按钮，将仓库复制到你的账号下。

### 2. Clone 到本地

```bash
git clone https://github.com/<your-username>/Website-Tools.git
cd Website-Tools
```

### 3. 创建分支

```bash
git checkout -b feature/add-new-tool
```

### 4. 修改代码

- 添加新工具：在 `tools.js` 中添加工具定义和实现函数
- 添加新网站：在 `index.html` 的 AI Navigation 页面对应分类中添加卡片
- 修复 Bug：直接修改对应文件

### 5. 提交并推送

```bash
git add .
git commit -m "Add: new tool description"
git push origin feature/add-new-tool
```

### 6. 创建 Pull Request

回到 GitHub，点击 **Compare & pull request**，填写说明后提交。

## 规范

- 工具必须在浏览器本地运行，不依赖外部 API
- 网站链接必须是正规、可公开访问的
- 提交信息使用中文或英文均可
- 一个 PR 只做一件事
