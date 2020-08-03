## nvm安装与使用

### 安装nvm
下载地址: https://github.com/coreybutler/nvm-windows/releases
nvm-setup.zip

### 安装/管理nodejs
1. 查看本地安装的所有版本；有可选参数available，显示所有可下载的版本。
```
nvm list
```
2. 安装，命令中的版本号可自定义，具体参考命令1查询出来的列表(历史版本查询：https://nodejs.org/en/download/releases/)

```
nvm install 11.13.0
```
3. 使用特定版本
```
nvm use 11.13.0
```
4. 卸载
```
nvm uninstall 11.13.0
```