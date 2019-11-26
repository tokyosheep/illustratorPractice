# illustratorPractice

these scripts are example of Illustrator script.
any script is basic Illustrator jsx.
but I hope it'll help for someone's task and study jsx

イラストレーターのサンプルスクリプト集です。
いずれも基本的なスクリプトですがjsxの学習や仕事に役立てば幸いです。


explain main script

copy setting
copy items on opened document then paste on new document. all of items will be collected on new document and preserve layer dimention

allVisibleLayer
the script makes visible all layers through recursion.
the function will call itself provided that layer has sub layers

add color data
write fill color data on item you selected.
easy to record color ration

scale
resize item you selected on Illustrator through action.
in many case you'll face to need to use action process on script.
the example shows you how to create scale action and launch the action.

主なスクリプトの説明

copy setting
イラストレーター上で開かれたドキュメントのアイテムをコピーして新しいドキュメントレイヤーの階層を保持したまま貼り付けていきます。

allVisibleLayer
全てのレイヤーを再起的に表示させます。サブレイヤーがあるかぎり表示の状態を調べて非表示の場合は表示させるようにします。

add color data
選択したアイテムの描画色の色データをアイテム上にテキストとして書き出します。簡単に色のデータを記録できます。

scale
選択したアイテムのリサイズをアクション機能を通じて行います。
結構な頻度でスクリプトと一緒にアクション機能を使わなければならない場面があると思うのでscriptでどのようにアクションを書き出して
実行させるかのサンプルになります。

