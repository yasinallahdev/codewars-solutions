/*

    PROBLEM:
    Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

    The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

    It is much easier to understand with an example:

    formatDuration(62)    // returns "1 minute and 2 seconds"
    formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
    For the purpose of this Kata, a year is 365 days and a day is 24 hours.

    Note that spaces are important.

    Detailed rules
    The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

    The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

    A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

    Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

    A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

    A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

*/

function formatDuration (seconds) {
    if(seconds !== 0) {
        // split seconds into years, days, hours, minutes, and seconds
        const theSeconds = seconds % 60;
        const theMinutes = Math.floor((seconds / 60) % 60);
        const theHours = Math.floor((seconds / 3600) % 24);
        const theDays = Math.floor((seconds / 86400) % 365);
        const theYears = Math.floor( seconds / 3.154e+7)
        // generate text strings and join them
        return joinTimeText([
            generateTimeText(theYears, "year"),
            generateTimeText(theDays, "day"),
            generateTimeText(theHours, "hour"),
            generateTimeText(theMinutes, "minute"),
            generateTimeText(theSeconds, "second")
        ]);
    } else {
        return "now";
    }
}

function joinTimeText(timeArray) {
    let finalString = "";
    // filter out all empty strings
    const filteredTimeArray = timeArray.filter(word => word !== "");
    // grab the length of the filtered array
    const filteredLength = filteredTimeArray.length;
    for(let i = 1; i <= filteredLength; i++) {
        // add the current time text
        finalString += filteredTimeArray[i-1];
        // if there are at least two remaining time texts, add a ", " to the final string
        if(i < (filteredLength - 1) ) {
            finalString += ", ";
        // if this is the second-to-last remaining time text, add " and " to the final string
        } else if(i === (filteredLength - 1)) {
            finalString += " and ";
        } 
    }
    // return the final string
    return finalString;
}

function generateTimeText(number, subtext) {
    // if the number is 0, return nothing
    if(number === 0) {
        return "";
    } else {
        // if the number is 2 or greater, add an s to the subtext provided
        if(number >= 2) {
            subtext += "s";
        }
        // combine the number with the subtext
        return `${number} ${subtext}`;
    }
}
