# faux-dom

Faux-dom library for building component libraries that can work interchangeably with React, Preact and other dom implementations.

This library has no implementation (only a dummy implementation that throws a warning), and consists only of interface declerations. Component-libraries that uses this library therefor allows the end user to pick which library they want to use the components with (ex. React, Preact or any other compatible ones).

Look at the example projects under `packages/*-example` to see how it's used.
