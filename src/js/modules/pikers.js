function dataPiker() {
    $( "#datepicker" ).datepicker({
        dateFormat: "dd.mm.yy",
        firstDay: 1
    });
}
    
function timePicker() {
    $('#timepicker').timepicker({
        timeFormat: 'H:mm',
        interval: 60,
        minTime: '9',
        maxTime: '6:00pm',
        defaultTime: '',
        startTime: '9:00',
        dynamic: false,
        dropdown: true,
        scrollbar: true
    });
}

export {dataPiker, timePicker};