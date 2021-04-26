function Check() {
 var lastChar = $('#output').text().slice(-1);
 var chars = ['.', '*', '/', '+', '-'];
 
  
}
 $('#nine').click(function() {
  $('#output').text($('#output').text() + 9) + $('#point').prop('disabled', false) + $('#minus').prop('disabled', false) + $('#plus').prop('disabled', false)
    $('#division').prop('disabled', false) + $('#multi').prop('disabled', false);
});

 $('#eight').click(function() {
  $('#output').text($('#output').text() + 8) + $('#point').prop('disabled', false) + $('#minus').prop('disabled', false) + $('#plus').prop('disabled', false)
    $('#division').prop('disabled', false) + $('#multi').prop('disabled', false);
});

 $('#seven').click(function() {
  $('#output').text($('#output').text() + 7) +$('#point').prop('disabled', false) + $('#minus').prop('disabled', false) + $('#plus').prop('disabled', false)
    $('#division').prop('disabled', false) + $('#multi').prop('disabled', false);
});

 $('#six').click(function() {
  $('#output').text($('#output').text() + 6) + $('#point').prop('disabled', false) + $('#minus').prop('disabled', false) + $('#plus').prop('disabled', false)
    $('#division').prop('disabled', false) + $('#multi').prop('disabled', false);
});

 $('#five').click(function() {
  $('#output').text($('#output').text() + 5) + $('#point').prop('disabled', false) + $('#minus').prop('disabled', false) + $('#plus').prop('disabled', false)
    $('#division').prop('disabled', false) + $('#multi').prop('disabled', false);
});

 $('#four').click(function() {
  $('#output').text($('#output').text() + 4) + $('#point').prop('disabled', false) + $('#minus').prop('disabled', false) + $('#plus').prop('disabled', false)
    $('#division').prop('disabled', false) + $('#multi').prop('disabled', false);
});

 $('#three').click(function() {
  $('#output').text($('#output').text() + 3) + $('#point').prop('disabled', false) + $('#minus').prop('disabled', false) + $('#plus').prop('disabled', false)
    $('#division').prop('disabled', false) + $('#multi').prop('disabled', false);
});

 $('#two').click(function() {
  $('#output').text($('#output').text() + 2) + $('#point').prop('disabled', false) + $('#minus').prop('disabled', false) + $('#plus').prop('disabled', false)
    $('#division').prop('disabled', false) + $('#multi').prop('disabled', false);
});

 $('#one').click(function() {
  $('#output').text($('#output').text() + 1) + $('#point').prop('disabled', false) + $('#minus').prop('disabled', false) + $('#plus').prop('disabled', false)
    $('#division').prop('disabled', false) + $('#multi').prop('disabled', false);
});
 
$('#zero').click(function() {
  $('#output').text($('#output').text() + 0);
});

    $('#point').click(function() {
  $('#output').text($('#output').text() + '.');
 $('#point').prop('disabled', true);
    });
     
//$('#negative').click(function() {
  //$('#output').text($('#output').text() + '-');
   // });

 $('#minus').click(function() {
  $('#output').text($('#output').text() + "-");
$('#minus').prop('disabled', true);
 $('#plus').prop('disabled', true);
   $('#division').prop('disabled', true);
   $('#multi').prop('disabled', true);
 });
   
    $('#plus').click(function() {
  $('#output').text($('#output').text() + "+");
$('#minus').prop('disabled', true);  $('#plus').prop('disabled', true);
    $('#division').prop('disabled', true);
    $('#multi').prop('disabled', true);
    });
   
    $('#division').click(function() {
  $('#output').text($('#output').text() + "/");
$('#minus').prop('disabled', true);
 $('#plus').prop('disabled', true);
 $('#division').prop('disabled', true);
    $('#multi').prop('disabled', true);
    });
   
    $('#multi').click(function() {
  $('#output').text($('#output').text() + "*");
      $('#minus').prop('disabled', true);
$('#plus').prop('disabled', true);
      $('#division').prop('disabled', true);
      $('#multi').prop('disabled', true);
    });
   
    $('#ac').click(function() {
  $('#output').text('') + $('#answer').text('') + $('#point').prop('disabled', false);
      $('#minus').prop('disabled', false);
$('#plus').prop('disabled', false);
      $('#division').prop('disabled', false);
    $('#multi').prop('disabled', false);
    });

  $('#equal').click(function() {
  $('#answer').text(eval($('#output').text())) + $('#output').text('') +  $('#point').prop('disabled', false) + $('#minus').prop('disabled', false) + $('#plus').prop('disabled', false)
    $('#division').prop('disabled', false) + $('#multi').prop('disabled', false);;
});

   function changeClass()
    {
      var em = ["em em-smirk", "em em-smiley", "em em-angry", "em em-sunglasses", "em em-sleeping", "em em-relaxed", "em em-stuck_out_tongue"]
     document.getElementById("smile2").className = em[Math.floor(Math.random() * em.length)];
    }

    window.onload = function()
    {
        document.getElementById("smile2").addEventListener( 'click', changeClass);
    } 
  
    window.onload = function() {
    
    document.getElementById("negative").addEventListener( 'click', changenegative);
     function changenegative()
    { $('#output').text($('#output').text() * -1)}  
                        }