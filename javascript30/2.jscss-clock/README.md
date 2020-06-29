#Exercise 2: JS+ CSS Clock
Given a web page with an analog clock created with CSS, write the JavaScript necessary to make the clock functional. Make alterations to the CSS as necessary.

Guid
The HTML file has 3 div elements which correspond with the second minute, and hour hand on a clock.
<-- ...previous elements -->
    <div class="hand hour-hand"></div>
    <div class="hadn min-hand"></div>
    <div class="hadn second-hand"></div>
<-- ...next elements -->
The necessary JavaScript code shouldn't be to crazy; we'll create references to these elements and dynamically update certain CSS properties to change their positions so they reflect the current time. Easy peasy.

Steps:
- CSS:
    i. The hands are all laying flat; we need them to be vertical. Rotate hands by 90 degrees so that they are upright by giving the .hand class a transform rule with the value rotate(90deg).
    
    ii. Set the transfor-origin CSS property of the .hand class to 100%; the default vaue is 50% (or the midway point of the HTML element), but if we leave it there the clock hands will transform from the respective conters of their lines as opposed to the center of the block. (If that doesn't make sense, try it out in your code. Set the value for transform-origin rule completely and check again. Finally, try it again with 50%.). Changing the value to 100% shifts the point of origin for the transformation to the furthest point on the x-axis of the HTML element.
    
    iii. Set tha transition CSS property of .hand to all 0.05; this ells the browser to gradually apply any changes to the element's styling over a 0.05 second period.

    iv. Set the transition-timing-function CSS property fo .hand to whatever function you prefer, or define your own using the cubix-bezier() property value.

-JavaScript
    i. Declare & define variables for each clock hand and reference the corresponding HTML element. 
    EX: const secondHand = document.querySelector('.second-hand)';

    ii. Create a function which will be responsible for launching the number of degrees that we need to rotate each clock hand by. It should accepts two arguments: the current numerical value of the clock hand, and the max value possible of the clock hand (if you want the number of the degrees needed for the second hand and the current time is 03:15_18, you would pass in (18, 60) where 18 is the current value of the second hand, and 60 is the maximum possible value).
        - Divide the current numberical value of the clock hand by it's max possible value to get the rotation as a percentage, then multiply the result of that by 360 (each hand can rotate 360 degrees) to convert the value from a percentage to an integer, and increase that result by another 90 degrees to compensate for the shift originally applied by the CSS atyling on page load.
        [ const calcDegrees = (time, max) => ((time/max) * 360) +90; ]

    iii. Create a function that will automatically run every second; in the body of the function, create a variable and define it as a new Date object. Then, create three variables which will hold references to the rotation amount to be applied to each clock hand. To get the rotation amount, define the variables as the rturn value from calling the calcDegrees function; each call should pass in the correct values in relation to whichever clock hand they are supposed to represent.

    iv. Still withing the body of the function from step 3, update the transform rule for each clock hand to their corrseponding updates values.
    [ /* Steps 3 & 4 */

    // Call function once every second
    setInterval(() => {
    // Create new Date object
    const now = new Date();
    // Get current seconds, minutes, & hours and calculate the degree shift
    const
        secondHandDegrees = calcDegrees(now.getSeconds(), 60),
        minuteHandDegrees = calcDegrees(now.getMinutes(), 60),
        hourHandDegrees = calcDegrees(now.getHours(), 12);
    // Apply rotation to the clock hands corresponding with current time value
    secondHand.style.transform = `rotate(${secondHandDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteHandDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourHandDegrees}deg)`;
    }, 1000); // 1000ms === 1s]
