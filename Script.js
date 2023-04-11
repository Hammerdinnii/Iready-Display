
const currentMinutes = parseInt(document.querySelector('.student-minutes .time-minutes').textContent);


const totalMinutes = parseInt(document.querySelector('.student-minutes .time-total').textContent);


const lessonsPassed = parseInt(document.querySelector('.student-lessons .student-passed').textContent);


const container = document.createElement('div');
container.style.position = 'fixed';
container.style.bottom = '20px';
container.style.right = '20px';
container.style.background = '#000';
container.style.color = '#fff';
container.style.padding = '20px';
container.style.borderRadius = '10px';
container.style.zIndex = '9999';


const title = document.createElement('h1');
title.textContent = 'iReady Progress';
title.style.marginTop = '0';
title.style.fontSize = '30px';
title.style.fontWeight = 'bold';
title.style.textAlign = 'center';


const minutesBar = document.createElement('div');
minutesBar.style.width = '100%';
minutesBar.style.height = '20px';
minutesBar.style.background = '#444';
minutesBar.style.borderRadius = '10px';


const lessonsBar = document.createElement('div');
lessonsBar.style.width = '100%';
lessonsBar.style.height = '20px';
lessonsBar.style.background = '#444';
lessonsBar.style.borderRadius = '10px';


const minutesIndicator = document.createElement('div');
minutesIndicator.style.width = `${(currentMinutes / totalMinutes) * 100}%`;
minutesIndicator.style.height = '20px';
minutesIndicator.style.background = '#0f0';
minutesIndicator.style.borderRadius = '10px';


const lessonsIndicator = document.createElement('div');
lessonsIndicator.style.width = `${(lessonsPassed / 10) * 100}%`;
lessonsIndicator.style.height = '20px';
lessonsIndicator.style.background = '#0f0';
lessonsIndicator.style.borderRadius = '10px';


const minutesLabel = document.createElement('p');
minutesLabel.textContent = `${currentMinutes} of ${totalMinutes} minutes completed`;
minutesLabel.style.margin = '10px 0';
minutesLabel.style.fontSize = '20px';
minutesLabel.style.fontWeight = 'bold';


const lessonsLabel = document.createElement('p');
lessonsLabel.textContent = `${lessonsPassed} of 10 lessons passed`;
lessonsLabel.style.margin = '10px 0';
lessonsLabel.style.fontSize = '20px';
lessonsLabel.style.fontWeight = 'bold';


minutesBar.appendChild(minutesIndicator);
lessonsBar.appendChild(lessonsIndicator);
container.appendChild(title);
container.appendChild(minutesLabel);
container.appendChild(minutesBar);
container.appendChild(lessonsLabel);
container.appendChild(lessonsBar);

// Add the container to the page
document.body.appendChild(container);
