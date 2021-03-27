// google sheets api formatting function from https://benborgers.com/posts/google-sheets-json

export function fetchEvents() {
  return fetch("https://spreadsheets.google.com/feeds/list/1prC0JJpl7fpFOkaEUGu0vDXPVB8A6c4UIJmKNExd0yY/1/public/values?alt=json")
    .then(res => res.json())
    .then(json => {
      const data = []; 
      const rows = json.feed.entry;

      for(const row of rows) {
        const formattedRow = {};

        for(const key in row) {
          if(key.startsWith("gsx$")) {
            formattedRow[key.replace("gsx$", "")] = row[key].$t;
          }
        }
        data.push(formattedRow);
      }

      let sortedEvents = data.sort(
        (a, b) => a.starttime - b.starttime
      );
      
      console.log(sortedEvents);
      return sortedEvents; 
  })
}