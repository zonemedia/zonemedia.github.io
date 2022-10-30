var audio = new Audio(&#39;https://byorlove.web.app/assets/sentmessage.mp3&#39;);  
$(document).ready(function() {
    $(&quot;#showChat&quot;).click(function(){
      $(&quot;#sw-box-chat&quot;).show(100);
	  playSound();
    });
});

$(document).ready(function() {
    $(&quot;#closeChat&quot;).click(function(){
      $(&quot;#sw-box-chat&quot;).hide(100);
      $(&quot;#form-chat&quot;).trigger(&quot;reset&quot;);
	  playSound();
    });
});

function playSound() {
	audio.play();
  }
