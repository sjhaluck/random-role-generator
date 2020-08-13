const adjList = ['rushed', 'enthusiastic', 'charming', 'angry', 'worried', 'happy', 'sincere', 'creative', 'serious', 'light-hearted', 'loud', 'critical', 'wishy-washy', 'young', 'middle-aged', 'dramatic', 'sympathetic', 'empathetic', 'funny', 'cruel', 'inexperienced', 'helpful', 'mysterious', 'hopeful', 'fearful', 'retired', 'talkative', 'quiet', 'tired', 'overwhelmed'];
const nounList = ['stay-at-home parent', 'lawyer', 'educator', 'cook', 'dancer', 'childcare provider', 'engineer', 'doctor', 'artist', 'grandparent', 'factory worker', 'therapist', 'social worker', 'nurse', 'logger', 'princess', 'politician', 'coffee shop employee', 'author', 'scientist', 'environmental advocate', 'car salesperson', 'athlete', 'journalist', 'telemarketer', 'farmer', 'sociologist', 'grocery store clerk', 'manager', 'banker', 'service volunteer', 'fashion designer', 'political organizer', 'fast food worker', 'hardware store clerk', 'student'];

const colors = ['black', 'blue', 'purple', 'red'];

function getQuote() {
  let randomQuote = adjList[Math.floor(Math.random() * adjList.length)] + " " + nounList[Math.floor(Math.random() * nounList.length)];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  $('#text').html(randomQuote).css("color", randomColor);
}


$(document).ready(function () {
  getQuote();
  $('#new-quote').on('click', getQuote);
});