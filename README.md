# FanCall Corporate Site

FanCall株式会社 - 実体験から生まれた、ファンダムの「理想形」

## 🚀 Vercelへのデプロイ方法

### 方法1: Vercel CLIを使用

1. Vercel CLIをインストール
```bash
npm i -g vercel
```

2. プロジェクトディレクトリでデプロイ
```bash
vercel
```

3. プロンプトに従って設定を完了

### 方法2: GitHubと連携

1. このプロジェクトをGitHubにプッシュ
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/JINX0404/fancall.git
git push -u origin main
```

2. [Vercel](https://vercel.com)にログイン
3. "Import Project"をクリック
4. GitHubリポジトリを選択
5. デプロイ設定はデフォルトのまま"Deploy"をクリック

## 📁 プロジェクト構成

```
fancall/
├── index.html          # メインHTML
├── styles.css          # スタイルシート
├── script.js           # JavaScript
├── package.json        # プロジェクト設定
├── vercel.json         # Vercel設定
├── .gitignore         # Git除外設定
└── placeholder-*.png/jpg  # プレースホルダー画像
```

## 🎨 デザイン特徴

- 「Seiso x Pop」デザインコンセプト
- ラベンダー・ピンク・ホワイトのカラーパレット
- レスポンシブデザイン（モバイルファースト）
- スムーズなアニメーション
- インタラクティブな要素
- 日本語コンテンツ

## 🔧 ローカル開発

```bash
npm install
npm run dev
```

ブラウザで http://localhost:3000 を開く

## 📝 ライセンス

MIT