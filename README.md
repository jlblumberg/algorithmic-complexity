### Algorithmic Complexity

[Outline](#Outline) | [Implementation Details](#Implementation_Details) | [Installation Instructions](#Installation_Instructions) | [Tech stack](#Tech_stack) | [Example use](#Example_use) | [Future work](#Future_work)

## <a name="Outline">Outline</a>

An exercise in learning about algorithms and how to gauge algorithmic complexity.

## <a name="Implementation_Details">Implementation Details</a>

### Timing function
The timing function (see timing.js) measures the performance of other functions. It's based on the inbuilt `performance.now()` function in JavaScript. By noting the time before and after some function is called, we can know how long it took to run.

In order to get a sense of an algorithms complexity, we measure the time it takes to run as the length of the input increases. For this exercise, inputs were measured from length 0 to 100000 in increments of 5000. These exercises were all done with arrays as the input data structure. 

### Smoothing performance
A few measures were taken to smooth out the data. First, there are  some 'throw-away' runs before the real measurement runs to account for warmup time. The timer also returns the median of 50 runs to account for outliers due to competition for CPU at any one time. 

### Plotting the results
The timer's results are stored in an object and plotted using Chart.js. The Chart.js settings can be found in index.html.


