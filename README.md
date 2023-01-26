<p align="center">
<img width="367" alt="スクリーンショット 2023-01-26 15 35 01" src="https://user-images.githubusercontent.com/52269577/214772336-44086867-f24b-40da-997b-863ab842b2a7.png">
</p>

# W.C. MAP 〜トイレ検索アプリ〜

## Demo

## Description
WEB上で全国のトイレを探せるWEBアプリケーションです。<br>
Google Map上にピンが立てられており、ピンをタップするとトイレの詳細情報を確認できます。<br>
また、ログインすればトイレの情報を投稿できます。

## Features
- 現在地を取得して地図上にピンを立てる
- Google Map上でトイレのある位置にピンを立てる
- 閲覧したトイレの履歴を確認できる
- ログインするとトイレの投稿 / 編集 / 削除ができる 

## Requirement
- node.js v16.14.0
- react.js v18.2.0
- php v7.3.24
- Laravel v8.83.27
- MySQL v5.7.32

## Usage
- トイレを探す場合
1. Google Map上に表示されたピンをクリック
2. 詳細情報を確認
3. トイレまでのルートを確認する場合は「Google Mapへ」のボタンをクリック

- トイレを投稿する場合
1. 新規登録 & ログインをする
2. Postページを開き、項目に沿って情報を入力すると投稿できる
3. Archiveページから編集,削除ができる

## How to install & Start-up
```
$ git clone https://github.com/taic-dev/WC-MAP.git

・frontend
$ cd frontend
$ npm install
.envのファイルを作成し環境変数を入力
$ npm start

・backend
$ cd backend
$ composer install
.env.exampleの内容を変更しファイル名を.envに変更
$ php artisan serve
```

## Author
taic-dev
