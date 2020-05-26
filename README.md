### Algorithmic Complexity

[Outline](#Outline) | [Implementation Details](#Implementation_Details) | [Inbuilt vs Homemade](#Inbuilt_vs_Homemade) | [Tech stack](#Tech_stack) | [Future work](#Future_work)

## <a name="Outline">Outline</a>

An exercise in learning about algorithms and how to gauge algorithmic complexity.

## <a name="Implementation_Details">Implementation Details</a>

### Timing function
The timing function (see new_timing.js) measures the performance of other functions. It's based on the inbuilt `performance.now()` function in JavaScript. By noting the time before and after some function is called, we can know how long it took to run.

In order to get a sense of an algorithms complexity, we measure the time it takes to run as the length of the input increases. For this exercise, the input grew from length 0 to 100000 in increments of 5000. These exercises were all done with arrays as the data structure of choice.

### Smoothing performance
To account for warmup time and competition for CPU at any one time, the timer returns the median of 50 runs on each uniquely sized array. 

### Plotting the results
The timer's results are stored in an object and plotted using Chart.js. The Chart.js settings can be found in index.html.

## <a name="Inbuilt_vs_Homemade">Inbuilt vs Homemade</a>
Here are the results of comparing the inbuilt reverse function in JavaScript to my own, home-made, reverse function (which can be found in myFunctions.js):

![Inbuilt vs Homemade Reverse](https://i.imgur.com/krOlNl1.png)

You can see that while both functions are linear (or O(n)), my homemade function is significantly more efficient.

## <a name="Tech_stack">Tech stack</a>

Front-end:
- HTML & CSS
- Chart.js

Back-end:
- Node.js
- Mocha

## <a name="Future_work">Future work</a>

Next up, making my own shuffle algorithm.
