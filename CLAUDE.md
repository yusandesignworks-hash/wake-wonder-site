# Wake Wonder コーポレートサイト - Claude Code 設定

このファイルはClaude Codeが自動読み込みするプロジェクト憲法です。
すべての作業はここに記載されたルールとトーンに従ってください。

---

## プロジェクト概要

- **会社名**: 株式会社Wake Wonder
- **事業内容**: スタートアップ向けモバイルアプリの企画・開発・運用
- **主力プロダクト**: OHA!アプリ（累計10万ダウンロード）
- **所在地**: 東京都千代田区神田駿河台2-3-11 New Wonder Bldg 7F
- **デプロイ先**: GitHub Pages
  `https://yusandesignworks-hash.github.io/wake-wonder-site/`
- **Git リモート**: `https://github.com/yusandesignworks-hash/wake-wonder-site.git`

---

## ページ構成（全7ページ）

| ファイル         | 役割             |
|-----------------|-----------------|
| index.html      | トップ           |
| about.html      | 企業情報         |
| service.html    | サービス         |
| blog.html       | ブログ           |
| news.html       | お知らせ         |
| contact.html    | お問い合わせ     |
| privacy.html    | プライバシーポリシー |

---

## 技術スタック

- **HTML/CSS/JavaScript**: 純粋なバニラ実装（フレームワークなし）
- **スタイルシート**: `css/style.css` 1ファイル集約
- **スクリプト**: `js/main.js` 1ファイル集約
- **フォント**: Outfit / Sora（英語）、Noto Sans JP（日本語）
- **画像格納先**: `images/` フォルダ

---

## CSS設計ルール

### 命名規則: BEM記法

```
.block {}
.block__element {}
.block--modifier {}
```

### CSS変数（css/style.css の :root で一元管理）

#### カラー
```css
--color-primary: #0f172a
--color-primary-light: #1e293b
--color-accent: #f59e0b
--color-accent-light: #fef3c7
--color-accent-dark: #d97706
--color-accent-mid: #fbbf24
--color-accent-deep: #b45309
--color-accent-alpha: rgba(245, 158, 11, 0.15)
--color-text: #1e293b
--color-text-light: #64748b
--color-text-white: #ffffff
--color-bg: #ffffff
--color-bg-light: #f8fafc
--color-bg-warm: #fffbeb
--color-bg-dark: #0f172a
--color-border: #e2e8f0
--color-error: #e74c3c
```

**ハードコードの色（`#f59e0b` など）を直接書くことを禁止します。必ずCSS変数を使ってください。**

#### タイポグラフィ
```css
--font-size-xs: 0.75rem
--font-size-sm: 0.875rem
--font-size-base: 1rem
--font-size-md: 1.125rem
--font-size-lg: 1.25rem
--font-size-xl: 1.5rem
--font-size-2xl: 2rem
--font-size-3xl: 2.5rem
--font-size-4xl: 3rem
```

#### レイアウト
```css
--max-width: 1200px
--header-height: 80px
--section-padding: 100px
--border-radius: 12px
--border-radius-lg: 20px
```

### ブレークポイント

```css
@media (max-width: 768px)  { /* SP */ }
@media (max-width: 1024px) { /* タブレット */ }
```

---

## コーディングの原則

1. **セマンティックHTML**: `div` 乱用禁止。`header` / `main` / `section` / `article` / `nav` / `footer` を適切に使う
2. **アクセシビリティ**: `alt` 属性必須、`aria-label` 付与、`skip-link` 維持
3. **パフォーマンス**: 画像には `width` / `height` 属性を明示。アバブ・ザ・フォールド以外は `loading="lazy"`
4. **ファイル変更の最小化**: 複数ページで同一変更が必要な場合、CSSで解決できないか先に検討する
5. **インラインスタイル禁止**: `style="..."` 属性は原則使用しない

---

## トーン・ライティングガイド

- **コメント**: 日本語で記述する
- **コミットメッセージ**: `feat:` / `fix:` / `style:` + 日本語説明（例: `fix: SP版ナビの表示崩れを修正`）
- **ブランドボイス**: プロフェッショナルかつ温かみがある。技術力とスタートアップの活気を両立

---

## 画像生成

画像が必要な場合は `.claude/skills/nano-banana-pro/` スキルを使用します。

- **環境変数**: `CCSKILL_NANOBANANA_DIR`（スキルリポジトリパス）、`GEMINI_API_KEY`
- **出力先**: 生成後 `images/` フォルダにコピー
- **詳細手順**: `.claude/commands/generate-image.md` を参照

---

## カスタムコマンド

| コマンド           | 内容                         |
|-------------------|------------------------------|
| `/deploy`         | git add → commit → push      |
| `/audit`          | 全ページのチェックリスト監査  |
| `/generate-image` | AI画像生成 → images/に保存   |

---

## 詳細ルール参照

- コーディング規約: `.claude/rules/coding-conventions.md`
- デザインシステム: `.claude/rules/design-system.md`
