export const generateRandomValues = (n = 36, min = 0, max = 3, minSum = 45, maxSum = 60) => {
	var ints = [];

	while (n--) {
	    // calculate a lower bound for this number
	    // n * max is the max of the next n numbers
	    var thisMin = Math.max(min, minSum - n * max);
	    // calculate an upper bound for this number
	    // n * min is the min of the next n numbers
	    var thisMax = Math.min(max, maxSum - n * min);

	    var int = Math.floor(Math.random() * (thisMax - thisMin + 1)) + thisMin;
	    minSum -= int;
	    maxSum -= int;
	    ints.push(int);
	}

	return ints; 
}