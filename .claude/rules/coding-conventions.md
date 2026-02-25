# Wake Wonder サイト コーディング規約

## 1. BEM 命名規則

### 基本構造
```
.block {}
.block__element {}
.block--modifier {}
.block__element--modifier {}
```

### 実際の使用例（このプロジェクト）
```css
.header {}
.header-nav {}
.header-nav__list {}
.header-nav__link {}
.header-nav__link--active {}

.hero {}
.hero__title {}
.hero__lead {}

.btn {}
.btn--primary {}
.btn--sm {}

.section {}
.section-title {}
.section-label {}
```

### 禁止パターン
```css
/* NG: 深すぎるネスト */
.header__nav__list__item__link {}

/* NG: キャメルケース */
.headerNav {}

/* NG: 意味不明な略称 */
.hdr-nv {}
```

---

## 2. CSS変数の使用

### 必須ルール
- 色・フォントサイズ・余白は必ずCSS変数を使う
- `css/style.css` の `:root` ブロックで一元管理
- 新しいトークンが必要な場合は `:root` に追加してから使う

```css
/* ✅ OK */
.hero {
  background-color: var(--color-primary);
  font-size: var(--font-size-lg);
}

/* ❌ NG: ハードコード */
.hero {
  background-color: #0f172a;
  font-size: 1.25rem;
}
```

---

## 3. セマンティックHTML

### ページ構造の基本テンプレート
```html
<body>
  <a href="#main-content" class="skip-link">メインコンテンツへスキップ</a>
  <header class="header" id="header">...</header>
  <main id="main-content">
    <section class="hero">...</section>
    <section class="about">...</section>
  </main>
  <footer class="footer">...</footer>
</body>
```

### 要素の選択基準
| 用途             | 使う要素                                     |
|-----------------|---------------------------------------------|
| ページヘッダー   | `<header>`                                  |
| ナビゲーション   | `<nav>`                                     |
| 主コンテンツ     | `<main>`                                    |
| 記事・カード     | `<article>`                                 |
| セクション       | `<section>`                                 |
| フッター         | `<footer>`                                  |
| ボタン操作       | `<button>`（`<div onclick>` は禁止）          |
| 外部リンク       | `<a href target="_blank" rel="noopener">`    |

---

## 4. アクセシビリティ

### 画像
```html
<!-- 意味のある画像: alt必須 -->
<img src="images/ceo-watanabe.jpg" alt="代表取締役 渡辺 真希" width="240" height="240">

<!-- 装飾画像: alt空文字 -->
<img src="images/bg-pattern.svg" alt="" role="presentation">
```

### フォーム（contact.html）
```html
<label for="name">お名前 <span aria-label="必須">*</span></label>
<input type="text" id="name" name="name" required autocomplete="name">
```

### アイコンのみのボタン
```html
<button class="hamburger" aria-label="メニューを開く" aria-expanded="false">
  <span class="hamburger__line"></span>
</button>
```

---

## 5. パフォーマンス

### 画像の最適化
```html
<!-- アバブ・ザ・フォールド（ヒーロー画像）: loading属性なし -->
<img src="images/hero.jpg" alt="..." width="1200" height="675">

<!-- スクロール下の画像: lazy必須 -->
<img src="images/team.jpg" alt="..." width="400" height="300" loading="lazy">
```

### CSSの禁止事項
- インラインスタイル（`style="..."` 属性）は原則禁止
- `!important` は最終手段。使う場合はコメントで理由を記載

---

## 6. ファイル構成の原則

- HTML: 1ページ = 1ファイル
- CSS: `css/style.css` に集約（ページ別ファイルを作らない）
- JS: `js/main.js` に集約
- 画像: `images/` フォルダ直下に配置
