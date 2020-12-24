// nav
function openNav() {
  $('#full-nav').animate({ right: '0' });
  $('#full-nav-open').hide();
  $('#full-nav-close').show();
}
function closeNav() {
  $('#full-nav').animate({ right: '-100vw' });
  $('#full-nav-close').hide();
  $('#full-nav-open').show();
}

$( document ).ready (function() {
  // nav close and open
  $( '#full-nav-close' ).on('click', closeNav );
  $( '#full-nav-open' ).on('click', openNav );
});
