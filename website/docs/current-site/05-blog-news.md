# Blog・Newsページ

## Blog

URL: `/blog`

### 目的

noteで公開しているAccelHackの記事への入口として、最新記事を新しい順に案内します。各記事はnote公式の埋め込みiframeで表示します。

### 掲載記事

1. エッジで輝く超高速ルーター！Cloudflare Workers × Honoで構築するAPI基盤の極意
2. フロントとバックを最速で繋ぐ！Bun Workspaceで実現するストレスフリーなモノレポ開発
3. 「ヒトが思い出しやすい」アーキテクチャの極意
4. AIの手戻りが激減する"ルール設計"とは
5. 次世代の開発スタイル：AIエージェント「Antigravity」と挑む、社内アシスタントAiriの爆速ペアプログラミング

公式note: `https://note.com/accelhack`

追加・更新時は `src/data/noteArticles.json` に記事URLと埋め込みURLを追加します。

## News

URL: `/news`

### ニュースリリース

#### 2026-04-01

Title:

> ADeT ベータ版のリリースを開始

Description:

> ADeTのベータ版無料アカウントの募集を開始

#### 2025-05-01

Title:

> ホームページリニューアルのお知らせ

Description:

> この度、弊社のホームページをリニューアルしました。

## 要確認事項

- noteの記事追加時は、公開日・タイトル・URLを確認して一覧へ追加します。
- ADeTベータ版の募集状況と、申込先へのリンクが必要か確認します。
- News項目に詳細ページまたは外部リンクを設けるか決めます。
- `Firebase` の正式表記など、製品名の表記をサイト全体で統一します。
