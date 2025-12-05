# codex-example
Codex example

- 九九表 React アプリ
  - React と Vite で作成した、1〜9 の掛け算表を表示するシンプルな Web アプリです。GitHub Pages で `/codex-example/` 配下に公開できるよう設定しています。

## 必要要件
- Node.js 18 以降
- npm

## セットアップ
```bash
npm install
```

## 開発サーバーの起動
```bash
npm run dev
```
`http://localhost:5173` をブラウザで開くと確認できます。

## ビルド
```bash
npm run build
```
出力先は `docs/` です。GitHub Pages にデプロイする際は、このディレクトリを公開対象に設定してください。

## プレビュー
```bash
npm run preview
```
ビルド成果物をローカルで確認できます。

## デプロイ（GitHub Pages の例）
1. `npm run build` を実行し、`docs/` 配下にビルド成果物を生成します。
2. GitHub のリポジトリ設定で Pages の公開ディレクトリを `docs/` に設定します。
3. 公開 URL は `https://wasabina67.is-a.dev/codex-example/` となります。

## プロジェクト構成
- `src/App.jsx` — 九九の表を描画するメインコンポーネント
- `src/index.css`, `src/App.css` — 最低限のスタイル定義
- `vite.config.js` — `/codex-example/` をベースとし、ビルド出力を `docs/` に設定
