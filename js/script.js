$(function () {
  var timeBlocks = $('.time-block');
  var currentHour = dayjs().hour();
  setTime();
  reset()
  timeBlocks.each(function (timeBlock) {
    timeBlock = $(this)
    var timeBlockHour = timeBlock.attr('id').split('-')[1];

    console.log(timeBlock, currentHour, timeBlockHour);
    if (timeBlockHour == currentHour) {
      timeBlock.addClass('present');
    }
    else if (timeBlockHour > currentHour) {
      timeBlock.addClass('future');
    }
    else if (timeBlockHour < currentHour) {
      timeBlock.addClass('past');
    }
  })

  setInterval(setTime, 60000);

  function reset() {
    timeBlocks.removeClass('past');
    timeBlocks.removeClass('future');
    timeBlocks.removeClass('present');
  }

  var local = $('.local');
  var save = $('.saveBtn');

  function saveTodo() {
    var btn = $(this);
    var textArea = btn.prev().val();
    var time = btn.parent().attr('id');
    console.log(textArea);
    localStorage.setItem(time, textArea);
    local.append('Saved to localStorage');
  }

  save.click(saveTodo);

  function setTime() {
    currentDay.innerText = dayjs().format('dddd, MMMM D,YYYY')
  }
  console.log(localStorage.getItem('hour-9'));

  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));

});
