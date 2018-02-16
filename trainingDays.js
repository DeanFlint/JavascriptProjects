/*
As a seasoned athlete, one of your favorite activities is running marathons. 

You use a service called Training Days that sends you a message for the event you signed up for, the activities the event involves, and the days you have left to train.

Since you also code, Training Days has asked you to help them with their program. There is one major change that Training Days wants to make to their program:

Training Days currently uses global variables throughout their program. 

They know this can be troublesome as their service evolves. 

You'll be helping them remove their variables from the global scope to the block scope, demonstrating how block level variables work along the way.
 */

const getAllEvents = () => {
  return ['Marathon', 'Triathlon', 'Decathlon'];
};

/* this is used a few places and it is vulnerable */ 

const getRandomEvent = () => {
  const allEvents = getAllEvents();
  const event = allEvents[Math.floor(Math.random() * allEvents.length)];
  return event;
};


const getEventActivities = event => {
  const allEvents = getAllEvents();

  if (!allEvents.includes(event)) {
    return null; 
  }
  
  let activities;
  if (event === 'Marathon') {
    activities = ['Running']; 
  } 
  if (event === 'Triathlon') {
    activities = ['Running', 'Cycling', 'Swimming'];
  } 
  if (event === 'Decathlon') {
    activities = ['Running', 'Hurdles', 'Javelin throw', 'Discus Throw', 'Shot put', 'High Jump'];
  }
  return activities.join(', ');
  
};

const getDaysToTrain = (event) => {
  const allEvents = getAllEvents();
  if (!allEvents.includes(event)) {
    return null; 
  }
  const eventTrainingTimes = {'Marathon': 50, 'Triathlon': 100, 'Decathlon': 200 };
  return eventTrainingTimes[event];
};

const getEventMessage = () => {
  const myEvent = getRandomEvent();
  console.log('Your event is a ' + myEvent + '. Your event activities consist of ' + getEventActivities(myEvent) + '. You have ' + getDaysToTrain(myEvent) +  ' days to train.');
};

getEventMessage();
