---
title: Finery ダッシュボードリニューアル
year: 2018
owner: Finery, Inc.
role: クリエイティブディレクション, UX/UI デザイン
related:
  - weekend-creator
  - libzcareer
  - wonolo
colors:
  - "#faf0e1"
  - "#b87b64"
  - "#000000"
  - "#984c3e"
  - "#f5f5f5"
  - "#f0dcc3"
  - "#919191"
description: |
  ニューヨークを拠点とするFineryは、ECサイトと連動してユーザーの購入履歴をインポートして自分の手持ちの服を管理し、コーディネートの作成ができるサービスです。機能の多さから複雑になってしまっていたユーザー体験を設計し直し、カレンダー機能を中心としたダッシュボードのリニューアル提案を行いました。クリエイティブの統括も担い、Fineryの世界観を表現する色や余白のサイズのルールを定めて、5人のデザイナーを率いてプロジェクトを進めました。
---

## 課題とゴール

<work-media name="current_dashboard.jpg" caption="リニューアル前のFineryのダッシュボード" />

ユーザーのアクションの起点となるダッシュボードには6つのメニューが並んでおり、メインの体験が分かりづらいものとなっていました。結果、ユーザーのアクションが減少傾向にあり、エンゲージメントを高めることが課題でした。そこでユーザーの関心を持続させるために、メインのアクションであるコーディネートの作成頻度が上がるような、機能的なダッシュボードを設計する必要がありました。

私たちはプロジェクトのゴールを以下のように設定しました。

- パーソナライズされたコンテンツを提供するダッシュボードにする
- 日々のスケジュールと共にコーディネートを表示するカレンダーを設計する
- 新しいダッシュボードを一貫性をもって設計できるようにデザインシステムを構築する

## ユーザー体験のコア

まず最初に、デザインスタジオと呼ばれるUIスケッチのワークショップを複数回行い、各機能をどのようなインターフェースでダッシュボードに落とし込むのかを議論しました。

<work-media name="approach.jpg" alt="デザインスタジオの様子" />

Fineryにはカレンダー機能の他に「返品アラート」「セールスアラート」「リファラル紹介」といった重要な機能があり、当初はこれらもダッシュボードに入れる方向で設計をしていました。

しかしスケッチを繰り返しながら、これらの機能はビジネス視点では重要であるものの、ユーザーにとってコアな部分ではない、ショッピング中心の体験だと気づきました。そこで、Fineryにおけるメインの体験は「自分のワードローブを管理し、日々のコーディネートのインスピレーションを得るのに役立つこと」と定義し、それを実現するためのカレンダー機能のみでダッシュボードを設計し直すことにしました。

## カレンダーを中心とした新しいダッシュボードのデザイン

<work-media name="mockup_desktop.jpg" alt="デスクトップ版の新しいダッシュボードデザイン" />

<work-media name="mockup_mobile.gif" alt="モバイル版の新しいダッシュボードデザイン" />

## デザインルールの整理

モックアップ制作の前に、現存するコンポーネントをすべて集めたところ、ボタンの色や形状、余白のサイズに一貫性がないことが分かりました。そこでデザインルールの整理を行い、ガイドラインを制作しました。

### Before: Fineryにあったコンポーネントの一部

<work-media name="audit_component.jpg" alt="集めたFineryのコンポーネントの一部" />

### After: 色などのデザインルールを整備

「Yes/No」といった2択の表示に同じ色が使われており、ユーザーを迷わせてしまう要因となっていました。また、緑色や水色などさまざまな色が使われていましたが、ファッショナブルなFineryの世界観とは異なるものでした。そこで、使用色を制限し、Fineryのブランディングに沿う橙色、ヌードカラーと黒のみで、ボタンなどのコンポーネントを構成することにしました。色の他にも、書体やアイコンのサイズを統一しました。

<work-media name="design_system_components.png,design_system_colors.png,design_system_typography_icon.png" />

## カレンダービュー

カレンダーは、新しいダッシュボードのコアとなる機能です。ユーザーは「Week」「Month」「Day」の異なるカレンダーの表示の仕方を、自分の好みに合わせて切り替えられます。これら3つのカレンダーを、どのデバイスからアクセスしても体験できるようにレスポンシブに対応したデザインにしました。

### 1週間ごとの表示

ユーザーインタビューの結果、コーディネートを考えるのは週ごとに行うという意見が多かったため、1週間ごとの表示をデフォルトで表示するようにしました。モバイルではスワイプしないと1週間すべてのカレンダーを確認することができないため、一番左に今日の曜日が配置されるように設計しました。

<work-media name="calendar_responsive_week_mobile.jpg,calendar_responsive_week_desktop.jpg" />

### 月ごとの表示

「旅行のために少し先の日程のコーディネートを考えたい」といった要望に月のカレンダーは役立ちます。デスクトップでは毎月のコーディネートが一覧で確認できます。モバイルでは日付のみのシンプルなレイアウトに切り替わり、どの日にコーディネートが登録されているかを素早く知ることができます。

<work-media name="calendar_responsive_month_desktop.jpg,calendar_responsive_month_mobile.jpg" />

### 1日ごとの表示

他のカレンダーよりも大きめのコーディネート写真が表示され、その日のスケジュールも確認できます。

<work-media name="calendar_responsive_day_mobile.jpg,calendar_responsive_day_desktop.jpg" />

### 詳細表示

その日の全スケジュールの確認や、予定の追加、そしてコーディネートのアイテムリストも見ることができます。

<work-media name="calendar_detail.jpg" />

### カレンダーにコーディネートが登録されていないとき

カレンダーにコーディネートが登録されていない状態のときは、 「You're Naked!」 という少しおちゃめなコピーで、コーディネートの登録を促します。

<work-media name="calendar_empty.jpg" alt="コーディネートが登録されていない時のカレンダー" />

## アイテムフィードの設計

<work-media name="feed.jpg" alt="3つのアイテムフィード" />

Fineryが複雑な設計になっていた要因の1つが、カレンダーに追加できるコンテンツが複数あることでした。

1. 自分の手持ちの服
1. 欲しいアイテムリスト
1. ECにあるアイテムから作成されたコーディネートコラージュ
1. 他のユーザーが作ったコーディネートコラージュ
1. 有名人のスナップショット

これらを「My Wardrobe」「My Looks」「Inspiration」という3つの項目に分け、My WardrobeとWishlistなどの関連した情報はタブでまとめました。ユーザーはこれら3つの項目の中からアイテムを選び、カレンダーに登録することができます。

## 複数のアイテムの登録

ユーザーは複数のアイテムを選択して、カレンダーとMy Looksへ登録できます。コーディネートの作成頻度をあげるために、ワードローブからアイテムの登録がスムーズに行えるようにすることが設計のポイントでした。

<work-media name="multiple_select.gif" alt="アイテムの複数選択のインタラクション" />

## まとめ

単にダッシュボードのレイアウトの変更を行っただけでなく、機能の多さから複雑な動線となってしまっていたユーザー体験を、カレンダー機能を起点に設計し直しました。また個人的なチャレンジとして、クリエイティブディレクターとしてビジュアル面での意思決定を行いました。