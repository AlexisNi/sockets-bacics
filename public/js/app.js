var socket= io();
var room =getQueryVariable('room');
var name=getQueryVariable('name')||'anonymous';


jQuery('.room').text(room);

socket.on('connect',function () {
    console.log('Connected to socket.io server!');
    socket.emit('joinRoom',{
        name:name,
        room:room
    });

});


socket.on('message',function (message) {//Here is taking the message fromm the server and shows it
    var momentTimestamp=moment.utc(message.timestamp);
    var $message =jQuery('.messages');
    console.log('New message : ');
    console.log(message.text);



    $message.append('<p><strong>'+message.name+' '+ momentTimestamp.local().format('h:mm a') + '</strong></p>');
    $message.append('<p>'+message.text+'</p>');


});
var $form= jQuery('#message-form');

$form.on('submit',function () {//Here is sending the message to the service
    event.preventDefault();
    var $message=$form.find('input[name=message]');

    socket.emit('message',{
        text:$message.val(),
        name:name
    });
    $message.val('');

});