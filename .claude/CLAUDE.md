# Wake Wonder コーポレートサイト

## プロジェクト概要

- **会社名**: 株式会社Wake Wonder（スタートアップ向けアプリ開発）
- **主力プロダクト**: OHA!アプリ（累計10万ダウンロード）
- **デプロイ先**: `https://yusandesignworks-hash.github.io/wake-wonder-site/`
- **Git リモート**: `https://github.com/yusandesignworks-hash/wake-wonder-site.git`

## ファイル構成

| ファイル | 役割 |
|---------|------|
| index.html | トップ |
| about.html | 企業情報 |
| service.html | サービス |
| blog.html | ブログ |
| news.html | お知らせ |
| contact.html | お問い合わせ |
| privacy.html | プライバシーポリシー |
| css/style.css | スタイル（1ファイル集約） |
| js/main.js | スクリプト（1ファイル集約） |
| images/ | 画像格納フォルダ |

## 判断ルール（Yes/Noで答えられる）

### CSS
- 色・サイズの値をハードコードしている → **NG**。必ず `var(--...)` を使う
- 新しい色が必要になった → `:root` に変数を追加してから使う
- `style="..."` 属性を書いている → **NG**。例外なし
- `!important` を使っている → **NG**。使う場合はコメントで理由を必ず書く

### HTML
- クラス名が `.block__element--modifier` 形式でない → **NG**（BEM必須）
- `<div>` で代替できる場所に `<nav>` `<main>` `<section>` 等がある → そちらを使う
- `<img>` に `alt` 属性がない → **NG**
- スクロール以下の `<img>` に `loading="lazy"` がない → **NG**
- `<img>` に `width` / `height` 属性がない → **NG**

### 作業
- 3ステップ以上の作業 → 必ずプランモードで計画を先に作る
- ファイルを未読のまま編集しようとしている → 先に Read で読む
- バグが発生した → ユーザーに聞く前に自分で原因を調査する
- 完了前に「スタッフエンジニアが承認するか？」を自問する

## デザイントークン・詳細ルール

詳細は `.claude/rules/` を参照：
- カラー・フォント・スペーシング → `rules/design-system.md`
- BEM・アクセシビリティ・パフォーマンス → `rules/coding-conventions.md`

## ミスの蓄積（Self-Improvement Loop）

作業中に発生したミスやハマりポイントは `.claude/lessons.md` に記録する。
次のセッションで同じミスを繰り返さないために活用する。

## カスタムコマンド

| コマンド | 内容 |
|---------|------|
| `/deploy` | git add → commit → push |
| `/audit` | 全ページのチェックリスト監査 |
| `/generate-image` | AI画像生成 → images/に保存 |
