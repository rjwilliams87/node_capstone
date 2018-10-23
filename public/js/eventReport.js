const mock_event_data = {
    "id": "101019",
    "contact":{
        "firstName": "Randy",
        "lastName": "Quad",
        "email": "randy@email.com",
        "phone": "999-888-1111"
    },
    "budget": 2500,
    "guestAmount": 70,
    "date": "12-1-2018",
    "startTime": 1900,
    "endTime": 2100,
    "food": [
        {
            "type": "Bruschetta",
            "pricePerOrder": 125,
            "orderAmount": 2
        },
        {
            "type": "Hummus",
            "pricePerOrder": 100,
            "orderAmount": 2
        }
    ],
    "beverages": [
        {
            "type": "bud light",
            "pricePerOrder": 20,
            "orderAmount": 3
        },
        {
            "type": "miller lite",
            "pricePerOrder": 20,
            "orderAmount": 3
        },
        {
            "type": "tito's vodka",
            "pricePerOrder": 25,
            "orderAmount": 2
        },
        {
            "type": "jack daniels",
            "pricePerOrder": 22,
            "orderAmount": 2            
        },
        {
            "type": "tanqueray",
            "pricePerOrder": 25,
            "orderAmount": 2            
        }
    ],
    "scheduledStaff": ["Mikey Mike", "Johnny John"],
    "uncompletedTask": [
        {
            "task": "Email and sign contract",
            "completeBy": "11-01-2018"
        },
        {
            "task": "follow up email",
            "completeBy": "11-15-2018"
        },
        {
            "task": "confirmation phone call",
            "completeBy": "11-23-2018"
        }
    ],
    "completedTask": [
        {
            "task": "meeting at event space",
            "completed": "10-01-2018"
        },
        {
            "task": "follow up call",
            "completed": "10-07-2018"
        }
    ]
};

function getEventData(callback){
    setTimeout(function(){callback(mock_event_data), 1});
}

function renderEventData(event){
    return `
    <div>
        <h3>Event contact: ${event.contact.lastName}, ${event.contact.firstName}</h3>
        <h3>Contact email: ${event.contact.email}</h3>
        <h3>Contact phone: ${event.contact.phone}</h3>
    </div>
    <div>
        <h3>Event Details</h3>
        <h4>Date: ${event.date}</h4>
        <h4>Time: ${event.startTime} to ${event.endTime}</h4>
        <h4>Budget: $ ${event.budget}</h4>
        <div>
            <h4>Food and Beverage Order</h4>
            <h5>Food</h5>
            <ul>
            ${event.food.map((item)=>{return `<li>${item.type}</li>`}).join('')}
            </ul>
            <h5>Beverages</h5>
            <ul>
            ${event.beverages.map((item)=>{return `<li>${item.type}</li>`}).join('')}
            </ul>
            <h5>Order Amount: </h5>
        </div>
    <div>
        <h3>Uncompleted Task</h3>
            <ul>
            ${event.uncompletedTask.map((task)=>{return `<li>Complete by ${task.completeBy}: ${task.task}</li>`}).join('')}
            </ul>
        <h3>Completed Task</h3>
            <ul>
            </ul>
    </div>
</div>
    `
}

function displayEventData(data){
    const event = renderEventData(data);
    $('.js-event-report').html(event);
}

function getAndDisplayData(){
    getEventData(displayEventData);
}

$(function(){
    getAndDisplayData();
});