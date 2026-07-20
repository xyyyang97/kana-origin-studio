# Kana Origin Studio

一个为中文母语者设计的日语假名学习站，用汉字字源、真人发音、翻牌和测验，把五十音记忆做得更稳定。

> 这个仓库已标记为 GitHub Template（点仓库页 "Use this template" 或 `gh repo create <新名字> --template xyyyang97/kana-origin-studio` 一键生成新项目）。做同类的纯静态学习/小工具类站点时，可复用的部分是：PWA 结构（`manifest.webmanifest` + `sw.js`）、键盘快捷键交互模式、真人音频优先/系统语音兜底的降级逻辑、GitHub Pages 发布流程。假名相关内容（`audio/`、`origin-*.svg`、`phrases.js` 等）换新项目时需要替换。

当前重点：

- 苹果官网风格的静态 H5 页面
- 平假名 / 片假名 / 混合学习
- 五十音全表 + 字源速查
- 空格翻牌，`J/K/L` 快捷循环，`S` 播放发音，`1-4` 选择测验答案，`/` 聚焦输入框
- 错题加权测验
- 真人日语音频优先，缺失时回退到系统语音
- PWA 基础离线缓存

## 产品思路

- `Tofugu`：借图像和字源建立第一层视觉记忆
- `Real Kana`：用低摩擦的高频回忆提高熟悉度
- `Kana Pro`：按阶段推进，避免一下子把全部假名混在一起

## 字源说明

- 平假名：以来源汉字的草书演变作为记忆抓手
- 片假名：以来源汉字楷书部件的截取骨架作为记忆抓手
- 站内提供演变总图帮助校正“更像真实字形的中间态”

## 本地运行

直接打开 `index.html` 就能用。

如果需要本地 server：

```bash
python3 -m http.server 4173
```

## 发布到 GitHub Pages

这个仓库已经是纯静态结构，已经在用 GitHub Pages 发布：https://xyyyang97.github.io/kana-origin-studio/

常用流程：

```bash
git add .
git commit -m "..."
git push origin main
```

push 到 `main` 后 Pages 会自动重新构建，一两分钟内生效。

## 后续可继续做

- 每个假名单独显示更精确的草书中间态裁切图
- 加入浊音、半浊音、拗音课程包和对应真人音频支持
- 增加易混淆字对训练，比如 `さ/き`、`ぬ/め`、`シ/ツ`
- 增加例词记忆模式，而不只停留在单假名
