var socket= io();

socket.on('connect',function () {
    console.log('Connected to socket.io server!')
});


socket.on('message',function (message) {//Here is taking the message fromm the server and shows it
    console.log('New message : ');
    console.log(message.text);

    jQuery('.messages').append('<p>' + message.text+'  </p>');


});
var $form= jQuery('#message-form');

$form.on('submit',function () {//Here is sending the message to the service
    event.preventDefault();
    var $message=    $form.find('input[name=message]')
';'
    socket.emit('message',{
        text:$message.val()
    });

    $message.val('');

});