### Algorithmic Complexity

[Outline](#Outline) | [Implementation Details](#Implementation_Details) | [Inbuilt vs Homemade](#Inbuilt_vs_Homemade) | [Tech stack](#Tech_stack) | [Future work](#Future_work)

## <a name="Outline">Outline</a>

An exercise in learning about algorithms and how to gauge algorithmic complexity.

## <a name="Implementation_Details">Implementation Details</a>

### Timing function
The timing function (see timing.js) measures the performance of other functions. It's based on the inbuilt `performance.now()` function in JavaScript. By noting the time before and after some function is called, we can know how long it took to run.

In order to get a sense of an algorithms complexity, we measure the time it takes to run as the length of the input increases. For this exercise, inputs were measured from length 0 to 100000 in increments of 5000. These exercises were all done with arrays as the input data structure. 

### Smoothing performance
A few measures were taken to smooth out the data. There are  some 'throw-away' runs before the real measurement runs to account for warmup time. The timer also returns the median of 50 runs to account for outliers due to competition for CPU at any one time. 

### Plotting the results
The timer's results are stored in an object and plotted using Chart.js. The Chart.js settings can be found in index.html.

## <a name="Inbuilt_vs_Homemade">Inbuilt vs Homemade</a>
The timer function can be used to test the performance of any other function. Here are the results of the inbuilt reverse function in JavaScript:

![Inbuilt Reverse](https://link_here.png)

You can see that it is linear (or O(n)). To learn about creating efficient algorithms, I crafted my own homemade reverse function, to try to match or beat the inbuilt one. You can see it in myFunctions.js. See its complexity plot:

![Homemade Reverse](https://link_here.png)

You can see that it is also linear (or O(n)).

## <a name="Tech_stack">Tech stack</a>

Front-end:
- HTML & CSS
- Chart.js

Back-end:
- Node.js
- Mocha

## <a name="Future_work">Future work</a>

Next up, making my own shuffle algorithm.
