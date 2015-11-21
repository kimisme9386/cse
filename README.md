# cse
custom google custom search v1 with float window

google custom search v1 with float winodw
=========================================

require library
===============
jQuery 1.4+

FEATURES
========
* Put search box text near html dom what you want.
* search box has 4 postion include "top"、"left"、"right"、"bottom"
* search result is float window below input search


Setting
=======
js/cse.js  find top of the file

```javascript
var CSE_SETTING = {
    key: 'your google cse key',
    near_element_id: 'demo_div',
    near_position: 'bottom',
    cse_input_width: 180,
    result_width: 400
};
```

<table>
	<tr>
		<th>Variable</th><th>Description</th><th>Default Value</th>
	</tr>
	<tr> <td>key</td><td>google cse key, get it with the http://www.google.com/cse</td><td></td> </tr>
	<tr> <td>near_element_id</td> <td>show the search box reference base position</td> <td></td> </tr>
	<tr> <td>near_position</td> <td>the position of search box relative the "near_element_id" dom(top、bottom、left、right)</td> <td>bottom</td> </tr>
	<tr> <td>cse_input_width</td> <td>the width of search box</td> <td>180px</td> </tr>
	<tr> <td>result_width</td> <td>the width of search result float winow</td> <td>400px</td> </tr>
	
</table>

    Also see the demo.html
