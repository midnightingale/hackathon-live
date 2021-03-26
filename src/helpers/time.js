//returns time of event
export function getTime(unixTimestamp){
  let d = new Date(unixTimestamp);
  let minutes = (d.getMinutes() === 0) ? 
                "00" : d.getMinutes();
  return d.getHours() + ':' + minutes;
}

//returns date of event
export function getDate(unixTimestamp){
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let d = new Date(unixTimestamp);
  return months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
}
