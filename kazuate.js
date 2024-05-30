// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする

//hantei();

let e=document.querySelector('button#print');
e.addEventListener('click',hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  
  //let yoso = 4;

  let x=document.querySelector('input[name="kazu"]');
  let yoso=parseInt(x.value,10);

  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール

  kaisu=kaisu+1;
  
  let k=document.querySelector('span#kaisu');
  let a=document.querySelector('span#answer');
  let r=document.querySelector('p#result');
  k.textContent=kaisu+'回目の予想: ';
  a.textContent=yoso;


  if(kaisu<4){
    if(yoso===kotae){
      r.textContent='正解です．おめでとう!';
      kaisu=kaisu+3

    }else if(kaisu===3){
      r.textContent='まちがい．残念でした答えは '+kotae+' です．';

    }else{
        if(yoso<kotae){
            r.textContent='まちがい．答えはもっと大きいですよ';
          }else if(yoso>kotae){
            r.textContent='まちがい．答えはもっと小さいですよ';
          }
    }
    
  }else{
    r.textContent='答えは '+kotae+' でした．すでにゲームは終わっています';
  }
}