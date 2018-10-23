const mock_events = {
    "events": [
        {
            "id": "1111111",
            "contact": "Anderson, Jacob",
            "date": "10-30-2018", 
            "startTime": 1700,
            "budget": 5000,
            "guest": 50
        }, 
        {
            "id": "2222222",
            "contact": "Buschea, Bobby",
            "date": "11-15-2018", 
            "startTime": 1500, 
            "budget": 750, 
            "guest": 25
        },
        {
            "id": "12345", 
            "contact": "Carpenter, John", 
            "date": "11-21-2018", 
            "startTime": 1900, 
            "budget": 3000, 
            "guest": 35
        }
    ]
};

function getEventData(callback){
    setTimeout(function(){ callback(mock_events)}, 1);
}

function renderEventResults(event){
    return `
    <tr>
        <td>${event.contact}</td>
        <td>${event.date}</td>
        <td>${event.startTime}</td>
        <td>${event.guest}</td>
        <td>${event.budget}</td>
    </tr>
`}

function displayEventData(data){
   for (index in data.events){
    result = renderEventResults(data.events[index]);
    $('.js-events-table').append(result);
   }
}

function getAndDisplayEvents(){
    getEventData(displayEventData);
}

$(function(){
    getAndDisplayEvents();
});