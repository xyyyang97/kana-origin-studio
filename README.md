# Kana Origin Studio

一个为中文母语者设计的日语假名学习站，用汉字字源、真人发音、翻牌和测验，把五十音记忆做得更稳定。

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
cd "/Users/andysong/iCloud Drive (Archive)/Documents/New project/kana-origin-studio"
python3 -m http.server 4173
```

## 发布到 GitHub Pages

这个仓库已经是纯静态结构，可以直接发布到 GitHub Pages。

常用流程：

```bash
cd "/Users/andysong/iCloud Drive (Archive)/Documents/New project/kana-origin-studio"
git add .
git commit -m "Improve kana study UX and audio flow"
git push origin main
```

## 后续可继续做

- 每个假名单独显示更精确的草书中间态裁切图
- 加入浊音、半浊音、拗音课程包和对应真人音频支持
- 增加易混淆字对训练，比如 `さ/き`、`ぬ/め`、`シ/ツ`
- 增加例词记忆模式，而不只停留在单假名
