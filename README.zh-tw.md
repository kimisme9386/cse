# cse

google 使用浮動視窗的自訂搜尋(使用google cse v1) 
================================================

所需的套件
==========
jQuery 1.4+

主功能
========
* 放置搜尋框在想要的html dom附近.
* 搜尋框在html dom附近有四種位置("top"、"left"、"right"、"bottom")
* 搜尋結果在搜尋框下方以浮動視窗顯示


設定
====
js/cse.js  檔案的最上方

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
		<th>變數</th><th>描述</th><th>預設值</th>
	</tr>
	<tr> <td>key</td><td>google cse的key, 可以在這邊找到 http://www.google.com/cse</td><td></td> </tr>
	<tr> <td>near_element_id</td> <td>搜尋框依據顯示的html dom</td> <td></td> </tr>
	<tr> <td>near_position</td> <td>搜尋框依據顯示的html dom的位置(top、bottom、left、right)</td> <td>bottom</td> </tr>
	<tr> <td>cse_input_width</td> <td>搜尋框寬度</td> <td>180px</td> </tr>
	<tr> <td>result_width</td> <td>搜尋結果浮動視窗寬度</td> <td>400px</td> </tr>
	
</table>

    也請參考 demo.html
