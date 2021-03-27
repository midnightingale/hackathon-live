//returns time of event
export function getTime(unixTimestampSecs){
  const unixTimestampMillis = unixTimestampSecs * 1000;
  let d = new Date(unixTimestampMillis);
  let minutes = (d.getMinutes() === 0) ? 
                "00" : d.getMinutes();
  return d.getHours() + ':' + minutes;
}

//returns date of event
export function getDate(unixTimestampSecs){
  const unixTimestampMillis = unixTimestampSecs * 1000;
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let d = new Date(unixTimestampMillis);
  return months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
}
