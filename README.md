<div align="center">
	<br>
    <h1>LogSans - A Companion Library for LogSnag</h1>
	<p>LogSans Client - LogSans is a companion library for <a href="https://logsnag.com">LogSnag</a>. LogSans enables notification for events that have NOT happened in a pre-defined frequency.</p>
	<a href="https://www.npmjs.com/package/logsans"><img src="https://img.shields.io/npm/v/logsans" alt="NPM Version"></a>
	<br>
	<br>
</div>


## Installation

```sh
npm install --save logsans
```

## Usage

### Import Library

```js
const {LogSnag} = require("logsans")
```


🕺 Notice how we've named the variable **LogSnag** (instead of the LogSans). This allows you to not have to change your exsiting code if you have already implemented LogSnag. 😎


### Initialize Client

```js
const logsnag = new LogSnag(process.env.YOUR_LOG_SNAG_TOKEN);
```

### Publish Event

```js
logsnag.publish({
    project: "your-logsnag-project",
    channel: "your-logsnag-channel",
    event: "Your logsnag event",
    icon: "🎉",
    notify: true,
    logsans: true /* This property is only needed if you want LogSans to be able to notify you when this event does NOT happen. */
});
```
