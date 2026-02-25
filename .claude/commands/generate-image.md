nano-banana-pro スキルを使って画像を生成し、images/ フォルダに保存してください。

## 実行前の確認

まず以下の環境変数が設定されているか確認してください：
- `CCSKILL_NANOBANANA_DIR`（例: C:\Users\81904\Desktop\ccskill-nanobanana）
- `GEMINI_API_KEY`

未設定の場合はユーザーに設定を依頼してください。

## 必要な情報の確認

ユーザーから以下を確認してください（未指定の場合のみ質問する）：
- **プロンプト**: 生成したい画像の説明
- **ファイル名**: 保存するファイル名（例: `hero-bg.jpg`）
- **アスペクト比**: デフォルト `16:9`（他: `1:1` / `9:16` / `4:3`）
- **解像度**: デフォルト `2K`（他: `1K` / `4K`）

## 実行コマンド（Windows）

```
$CCSKILL_NANOBANANA_DIR\venv\Scripts\python.exe $CCSKILL_NANOBANANA_DIR\generate_image.py "プロンプト" --aspect アスペクト比 --resolution 解像度 --output C:\Users\81904\Desktop\ccskill-nanobanana\generated_images
```

生成後、`images/` フォルダにコピーします：
```
cp C:\Users\81904\Desktop\ccskill-nanobanana\generated_images\生成ファイル名 images\指定ファイル名
```

## 完了後の報告

- 保存先: `images/ファイル名`
- HTMLでの使用例: `<img src="images/ファイル名" alt="..." width="..." height="..." loading="lazy">`

## Wake Wonder向けプロンプトのコツ

- ブランドカラーを意識: 深紺（#0f172a）× 琥珀色（#f59e0b）のトーン
- スタートアップらしいモダンで洗練されたイメージ
- 日本人・日本のビジネスシーンを意識した表現
- 参照画像がある場合は `--reference images/参照ファイル名` を追加
