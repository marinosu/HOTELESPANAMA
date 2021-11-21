$(function() {
  $("[data-toggle='tooltip']").tooltip();
  $("[data-toggle='popover']").popover();
  $('.carousel').carousel({
    interval: 2000
  });

  $('#contacto').on('show.bs.modal', function(e) {
    console.log('el modal contacto se está mostrando');
    $('#contactoBtnW').removeClass('btn-outline-dark');
    $('#contactoBtnW').addClass('btn-warning');
    $('#contactoBtnW').prop('disabled', true);

    $('#contactoBtnS').removeClass('btn-outline-dark');
    $('#contactoBtnS').addClass('btn-primary');
    $('#contactoBtnS').prop('disabled', true);

    $('#contactoBtnHR').removeClass('btn-outline-dark');
    $('#contactoBtnHR').addClass('btn-danger');
    $('#contactoBtnHR').prop('disabled', true);

    $('#contactoBtnJ').removeClass('btn-outline-dark');
    $('#contactoBtnJ').addClass('btn-info');
    $('#contactoBtnJ').prop('disabled', true);

    $('#contactoBtnR').removeClass('btn-outline-dark');
    $('#contactoBtnR').addClass('btn-success');
    $('#contactoBtnR').prop('disabled', true);

    $('#contactoBtnH').removeClass('btn-outline-dark');
    $('#contactoBtnH').addClass('btn-secondary');
    $('#contactoBtnH').prop('disabled', true);
  });
  $('#contacto').on('shown.bs.modal', function(e) {
    console.log('el modal contacto se mostró');
  });
  $('#contacto').on('hide.bs.modal', function(e) {
    console.log('el modal contacto se está ocultando');
    $('#contactoBtnW').removeClass('btn-warning');
    $('#contactoBtnW').addClass('btn-outline-dark');
    $('#contactoBtnW').prop('disabled', false);

    $('#contactoBtnS').removeClass('btn-primary');
    $('#contactoBtnS').addClass('btn-outline-dark');
    $('#contactoBtnS').prop('disabled', false);

    $('#contactoBtnHR').removeClass('btn-danger');
    $('#contactoBtnHR').addClass('btn-outline-dark');
    $('#contactoBtnHR').prop('disabled', false);

    $('#contactoBtnJ').removeClass('btn-info');
    $('#contactoBtnJ').addClass('btn-outline-dark');
    $('#contactoBtnJ').prop('disabled', false);

    $('#contactoBtnR').removeClass('btn-success');
    $('#contactoBtnR').addClass('btn-outline-dark');
    $('#contactoBtnR').prop('disabled', false);

    $('#contactoBtnH').removeClass('btn-secondary');
    $('#contactoBtnH').addClass('btn-outline-dark');
    $('#contactoBtnH').prop('disabled', false);
  });
  $('#contacto').on('hidden.bs.modal', function(e) {
    console.log('el modal contacto se ocultó');
  });
  $('#contacto').on('hidePrevented.bs.modal', function(e) {
    console.log('se disparó el hidePrevented');
  });
});
