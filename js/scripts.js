var yearEval = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
  return false;
  }
};

$(document).ready(function() {
  $("#leap-year").submit(function(event) {
    event.preventDefault();
    var leapInput = parseInt($("#year").val());
    var result = yearEval(leapInput);
    $(".test").text(result);
  });
});
