$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

$('form').on('submit', function(e){
    e.preventDefault();

    const novaTarefa = $('#nova-tarefa').val();
    const adicionaTarefa = $('<li></li>').text(novaTarefa);

    // Adicionar a caixa de seleção ao lado da tarefa
    adicionaTarefa.prepend('<input type="checkbox"> ');

    $('ul').append(adicionaTarefa);
    $('#nova-tarefa').val('');

    // Adicione um evento de clique para todos os checkboxes dentro de <li>
    $('li input[type="checkbox"]').click(function() {
        // Verifique se o checkbox foi marcado
        if ($(this).prop('checked')) {
            // Adicione a classe 'done' ao <li> pai
            $(this).parent('li').addClass('done');
        } else {
            // Remova a classe 'done' se o checkbox estiver desmarcado
            $(this).parent('li').removeClass('done');
        }
    });
})
});