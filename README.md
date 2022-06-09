<div align="center">
	<br>
    <h1>LogSans - Companion Library for LogSnag</h1>
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

### Publish Event & Track Event

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

This will do two things:
1. ✅ It publishes your event to LogSnag the LogSnag library normally does
2. ✅ Tracks your event on LogSans so that LogSans can alert you when the event does NOT happen based on your desired freqency (more on that below)

### Tell LogSans When to Check
Now that you are tracking your events, it is time to tell LogSans how often to check for it.

To do that, user the **Create Recurring Check** endpoint here:

```curl
curl --location --request PUT 'https://logsans-api.twostep.co/api/check/create' \
--data-raw '{
    "token": "YOUR-LOGSNAG-TOKEN",
    "project": "your-logsnag-project",
    "channel": "your-logsnag-channel",
    "event": "Your logsnag event",
    "frequency" : 5 /* in minutes */
}'
```
More Documentation: https://documenter.getpostman.com/view/10930387/Uz5MFEMj

Once you create a **Recurring Check**, LogSans alert you if it has not detected your event in the timeframe set by the **frequency** property.

##### For Example
If **frequency** is set to 30 (minutes), LogSans will trigger a LogSnag event telling you that it has not seen that event in the last 30 minutes.