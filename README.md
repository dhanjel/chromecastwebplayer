# Chromecast WebPlayer
Provides a simple web interface for playing streams to Chromecasts (Video or Audio)
using the [chromecast-js] (https://github.com/guerrerocarlos/chromecast-js) library by [guerrerocarlos] (https://github.com/guerrerocarlos).

Created in order to allow starting and stopping streams from home automation software
such as [Fibaro Home Center 2] (http://www.fibaro.com/).

To play a stream, start the server and target a request to

<code>
http://[ip]:8000/?device=[devicename]&action=play&stream=[stream]&volume=[volume]
</code>

Where:
- [ip]: The IP-adress of the server running the node js package.
- [devicename]: Name of your Chromecast device
- [stream]: Stream to play
- [volume]: Volume between 0 and 1

*Example:*

<code>
http://localhost:8000/?device=Matsal%20Audio&action=play&stream=http://http-live.sr.se/p3-mp3-192
</code>

In order to stop a stream, use the following request url:

<code>
http://[ip]:8000/?device=[devicename]&action=stop
</code>

Where:
- [ip]: The IP-adress of the server running the node js package.
- [devicename]: Name of your Chromecast device

*Example:*

<code>
http://localhost:8000/?device=Matsal%20Audio&action=stop
</code>
