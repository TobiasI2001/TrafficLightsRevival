<h1>TrafficLightRevival by Tobias Indenkämpen</h1>

This plugin is 99% written by pierosavi because I used his ImageIt Plugin as a foundation for my plugin. <br>
I made only a few changes to his code so I could revive the TrafficLight Plugin.

ImageIt Grafana: https://grafana.com/grafana/plugins/pierosavi-imageit-panel/ <br>
ImageIt GitHub:  https://github.com/pierosavi/pierosavi-imageit-panel

I know there are already two existing TrafficLight Plugins, but these don't seem to work with Grafana v8.0.0 and above.

The functionalty of this plugin is oriented at the existing TrafficLight Plugin by smartmakers / Volodymyr Manilo.

smartmakers TrafficLight Grafana: https://grafana.com/grafana/plugins/smartmakers-trafficlight-panel/ <br>
smartmakers TrafficLight GitHub:  https://github.com/smartmakers/grafana-trafficlight

Values are displayed as:

 - 0 = gray
 - 1 = red
 - 2 = yellow
 - 3 = green

Other functionalties are:

 - setting an Image by URL as background
 - create round dot sensors an move them around
 - hovering over a Sensor displays the name, value and button to move the sensors
 - the size of the sensors can be set by the user
 - the font color of name and value can be changed
 - lock sensor movement

Known Bugs and Glitches:

 - In edit view the sensor cannot be moved as freely as in dashboard view. Fix: Reload the site and it works fine.
 - If sensor lock is enabled hovering doesn't show name and value.
 - When changing the font color to "text color" (<- black) the little dot of the color picker doesn't change, but the font color gets changed as intended.