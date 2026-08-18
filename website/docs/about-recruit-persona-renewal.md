# About / Recruitページ改修 設計ドキュメント

**ステータス:** 設計のみ。実装は未着手（別担当者が実装予定）。

## 背景・目的

現在のHPには、訪問者を「クライアント」と「就職希望者」の2タイプに分けて、それぞれが知りたい情報に誘導する動線がない。

- Aboutページ: 会社概要・MVV・取引先紹介はあるが、そこから先（サービス詳細／採用情報）への導線がない。
- Recruitページ: 募集要項・働く環境・選考フロー・FAQはあるが、就職希望者が重視する「代表メッセージ・企業文化」「社員インタビュー・働き方」に相当するコンテンツが存在しない。

今回はAbout/Recruitページに限定して、この2点を解消する構成を設計した。

**注記:** 代表メッセージ・社員インタビューの実際の原稿・写真は未用意。実装時はまず構成（コンポーネント・レイアウト）を作り、プレースホルダーの文章・画像を仮で入れておき、後日実コンテンツに差し替える想定。

トップページのCTA再構成（クライアント/就職希望者でボタンを分岐させる案）は、`src/app/(company)/(top)/page.module.css` のアニメーションが `nth-of-type` セレクタでDOM構造に依存しており壊れやすいため、**今回のスコープ外**。別途デザインを詰めてから対応する。

## 現状の構成（実装前提知識）

- Next.js 15 (App Router) + TypeScript、CSS Modules。ページは `src/app/(company)/(contents)/<name>/page.tsx`。
- 各ページは `Article` オーガニズム（`src/component/organism/Article.tsx`：`caption` + `children` を受け取り見出し付きブロックを描画）でセクションを構成する。
- データを持つセクションは、ページ側で `src/data/*.json` をimportし、`Article`系コンポーネントにpropsで渡す（例: `recruit/page.tsx` が `positions.json`/`conditions.json`/`qas.json` を渡す）。
- ルート定義は `src/enum/Page.ts`（`Page.ABOUT`, `Page.SERVICE`, `Page.RECRUIT` など）。

### 既存ファイル（参考実装として流用できるもの）

| 参考にする既存ファイル | 用途 |
|---|---|
| `src/component/article/WhatIsArticle.tsx` | 画像＋テキストの1段構成（代表メッセージのひな形） |
| `src/component/article/RecruitQAArticle.tsx` + `src/data/qas.json` | 配列データをpropsで受け取り一覧表示するひな形（社員インタビューのひな形） |
| `src/component/molecule/WorksCompany.tsx` | 画像＋ラベルのカード（インタビューカードのひな形） |
| `src/component/molecule/LinkBox.tsx` / `LinkBoxContainer.tsx` | トップページで使用中のCTAボタン。AboutページのCTAはこれを再利用する |
| `src/asset/img/common/dummy.png` | 現在未使用のダミー画像。代表・社員の仮写真として使う |

## 変更内容

### 1. Recruitページ「代表メッセージ」セクション（新規）

- 新規ファイル: `src/component/article/RepresentativeMessageArticle.tsx` + `.module.css`
- `WhatIsArticle.tsx` と同じ構成（`<Article caption="代表メッセージ">` の中に画像＋テキスト）
- 画像: `dummy.png` を仮の代表写真として使用
- テキスト: 代表取締役 石川貴大 名義の仮メッセージ文（企業文化・想いを語る内容）。コード上に「プレースホルダー、差し替え予定」のコメントを残す。

### 2. Recruitページ「社員インタビュー」セクション（新規）

- 新規データ: `src/data/interviews.json`
  - `qas.json` と同形式のフラット配列。2〜3件。実名は使わず「エンジニア」「PM」等ロール表記のみとし、各要素は `{ role, position, photo, message, workStyle }` 程度の想定。photoは `dummy.png` を指す。
- 新規コンポーネント: `src/component/molecule/InterviewCard.tsx` + `.module.css`
  - `WorksCompany.tsx` を人物カード用に拡張（画像＋役職＋一言コメント＋働き方の一文）
- 新規コンポーネント: `src/component/article/EmployeeInterviewArticle.tsx` + `.module.css`
  - `RecruitQAArticle.tsx` と同じ形。`<Article caption="社員インタビュー">` の中で `interviews` propsを受け取り `InterviewCard` をグリッド表示

### 3. Recruitページ本体の更新

- 編集対象: `src/app/(company)/(contents)/recruit/page.tsx`
- `INTERVIEWS` を `src/data/interviews.json` からimport
- `<RepresentativeMessageArticle />` を、既存1つ目の2カラム行（`WhatIsArticle` + `PositionArticle`）の**前**に全幅セクションとして追加
- `<EmployeeInterviewArticle interviews={INTERVIEWS} />` を、既存2つ目の2カラム行（`EnvironmentArticle`/`SelectionFlowArticle` + `RecruitQAArticle`）の**前**に全幅セクションとして追加
- 新規セクションは（Aboutページの `MVVArticle` 等と同様）`styles.page` の2カラムラッパーを使わず単体で配置する

結果として、Recruitページの表示順は以下になる:

1. 代表メッセージ（新規・全幅）
2. What's AccelHack ＋ 募集ポジション（既存2カラム）
3. 社員インタビュー（新規・全幅）
4. 働く環境／選考フロー ＋ 採用FAQ（既存2カラム）

### 4. Aboutページ末尾「Next Step」CTA（新規）

クライアント・就職希望者のどちらもAboutページから次のページに進めるようにする。新規CSSは追加せず、既存の `LinkBox`/`LinkBoxContainer`（トップページの2行目：Recruit＋Blogの組み合わせ）をそのまま再利用する。

- 新規コンポーネント: `src/component/article/NextStepArticle.tsx`（CSS新規追加なし）
  - `<Article caption="Next Step">` の中に `<LinkBoxContainer size="md">` を置き、以下の2つの `LinkBox` を配置
    - text="サービス紹介はこちら" href={Page.SERVICE} variant="blog"
    - text="採用情報はこちら" href={Page.RECRUIT} variant="recruit"
  - variantはトップページ2行目と同じ組み合わせをそのまま使うことで、既存CSSのレスポンシブ挙動にそのまま乗せる
- 編集対象: `src/app/(company)/(contents)/about/page.tsx`
  - `<WorkArticle />` の後に `<NextStepArticle />` を追加

## 対象外（今回のスコープに含まないもの）

- トップページ（`(top)/page.tsx`, `(top)/page.module.css`）のCTA再構成・ラベリング
- グローバルナビ（`src/component/layout/TabMenu.tsx`）の変更
- 代表メッセージ・社員インタビューの実コンテンツ（原稿・写真）への差し替え

## 実装後の検証観点（実装担当者向け）

- `yarn dev` でローカル起動し `/about` と `/recruit` を確認
  - Aboutページ末尾の新CTAが表示され、リンク先が `/service`・`/recruit` に正しく飛ぶこと
  - Recruitページに「代表メッセージ」「社員インタビュー」が追加の位置に表示され、既存セクション（What's AccelHack、募集要項、働く環境、選考フロー、FAQ）の表示が崩れていないこと
  - 768px以下のモバイル幅でレイアウト崩れがないこと
- `yarn typecheck` / `yarn lint` を実行してエラーがないこと
