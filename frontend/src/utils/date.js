var getTimeDiff = function(time) {
  var ONE_HOUR = 1000*60*60;
  var ONE_MINUTE = 1000*60;
  var ONE_DAY = 24*60*60*1000;
  var diffDays = Math.round(Math.abs((new Date(time).getTime() - (Date.now()+ONE_HOUR))/ONE_DAY));
  var diffHours = Math.round(Math.abs((new Date(time).getTime() - (Date.now()+ONE_HOUR))/ONE_HOUR));
  var diffMinutes = Math.round(Math.abs((new Date(time).getTime() - (Date.now()+ONE_HOUR))/ONE_MINUTE));
  if(diffMinutes < 60) {
    return {time: diffMinutes, type: 0}
  } else if(diffHours < 24) {
    return {time: diffHours, type: 1}
  } else {
    return {time: diffDays, type: 2}
  }
}

module.exports.getTimeDiff = getTimeDiff;
