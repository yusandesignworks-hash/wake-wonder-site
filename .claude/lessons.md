# Lessons Learned（ミスと学びの記録）

作業中に発生したミス・ハマりポイントを記録する。
次のセッションで同じミスを繰り返さないために活用する。

## 記録フォーマット

```
### YYYY-MM-DD: タイトル
- **状況**: どんな作業をしていたか
- **ミス**: 何が起きたか
- **原因**: なぜ起きたか
- **対策**: 次回どうするか
```

---

## 記録

### 2026-02-23: html.to.design でSVGが黒い塊になる
- **状況**: index.html を html.to.design プラグインで Figma に取り込もうとした
- **ミス**: SVG画像が大きな黒い図形として表示された
- **原因**: `file://` プロトコルで開いていたため、外部リソースの読み込みが失敗
- **対策**: html.to.design を使う前は必ずローカルサーバー（`npx serve .`）経由で開く

### 2026-02-23: Windows で `python --version` がバージョンを返さない
- **状況**: Python のバージョン確認をしようとした
- **ミス**: `python --version` が `Python` とだけ返してバージョン番号が出なかった
- **原因**: `C:\Users\81904\AppData\Local\Microsoft\WindowsApps\python.exe` はWindowsストアのダミー
- **対策**: フルパス `C:\Users\81904\AppData\Local\Programs\Python\Python313\python.exe` を使う

### 2026-02-23: シンボリックリンクが管理者権限なしで作れない
- **状況**: `.claude/skills/nano-banana-pro/` をシンボリックリンクで配置しようとした
- **ミス**: `New-Item -ItemType SymbolicLink` がエラー
- **原因**: Windowsはシンボリックリンク作成に管理者権限が必要
- **対策**: 権限エラーが出たら即座に `Copy-Item` でフォルダコピーに切り替える
