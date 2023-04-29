setInterval(setAnalog, 1000)

/*matches html element with the selector and returns that element.
If no element is matched than it will return null.*/

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

/*create object with a constructor Date which will give you the current date you are running the software on
the following time ratios tell us how far the needle should move along a 12 hour clock
remember: there is a total of 60s, 60min, 60h in a 12 hour clock.
since we do want our clock needle to gradually be moving and not the minute hand 
moving every minute and the hour hand moving every hour, we need to do the folloing:
1. the seccond ratio is a percentage of a minute.
2. Hours is relative to minutes and minutes is relative to seconds.
3. Ex. If the seccond needle moves 25% of the entire cycle then I have to add that 
       Ratio to my minute needle so that it moves along with the second needle.
*/
function setAnalog(){
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

/*This function rotates the needle by taking the element, its styles from
the css file and calling the set property function to rotate the needle 
according to so.*/

/*This function just combines the element and its gradual rotation as seen in
every analog clock.*/

function setRotation(element, angleRatio){
    element.style.setProperty('--angle', angleRatio * 360) //360deg in 1 cycle.
}

/*once the page reloads, we can call the clock function so that the clock
starts from the exact time.*/
setAnalog();
