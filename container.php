<html>
<head>
<link rel="stylesheet" type="text/css" href="reset.css">
<script src="jquery.js"></script>
<script src="vertical-text-align.js"></script>

<style>	
body {
	background-color: #F5F6F7;
	padding: 30px;
}

.container {
	width: 350px;
	margin-top: 30px;
	position: relative;
}

h1 {
	font-weight: bold;
}

.rounded {
	border-radius: 4px;
	-webkit-border-radius: 4px;
	-moz-border-radius: 4px;
	-o-border-radius: 4px;
	-khtml-border-radius: 4px;
	border-top-left-radius: 4px 4px;
	border-top-right-radius: 4px 4px;
	border-bottom-right-radius: 4px 4px;
	border-bottom-left-radius: 4px 4px;
	
	border: 1px solid;
	-webkit-box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
	-moz-box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
	box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
	border-color: #E5E5E5 #DBDBDB #D2D2D2;
	
	background-color: white;
	padding: 10px;
}

.vertical {
	color: #555;
	text-shadow: 1px 1px 1px #CCC;
	
	text-transform: uppercase;
	margin-bottom: -4px;
}

.vertical-container {
	writing-mode:tb-rl;
	filter: flipv fliph;
	
	-webkit-transform:rotate(-90deg);
	-moz-transform:rotate(-90deg);
	-o-transform: rotate(-90deg);
	white-space:nowrap;
	display:block;
	
	float: left;
	
	-webkit-transform-origin-x: 0px;
	-webkit-transform-origin-y: 100%;
	
	-moz-transform-origin:0px 100%;
	position: relative;
	left: 1px;
	border-bottom: 3px solid #555;
}

.rounded {
	float: right;
}

.clearfix:after {
	content: ".";
	display: block;
	clear: both;
	visibility: hidden;
	line-height: 0;
	height: 0;
}
 
.clearfix {
	display: inline-block;
}
 
html[xmlns] .clearfix {
	display: block;
}
 
* html .clearfix {
	height: 1%;
}

</style>
</head>

<div class="container clearfix">
	<div class="vertical-container">
	<h1 class="vertical">Something Longer</h1>
	</div>
	<div class="rounded">
		<div class="content-container">
			<h2>@DukeChronicle:</h2>
			<p>
				RT @fhi_duke: "Why Tell Stories?" Edwidge Danticat on power of testimony 
				in face of catastrophe http://bit.ly/gu4K8h Thanks @DukeChronicle!
			</p>
		</div>		
	</div>
	
</div>

<div class="container clearfix">
	<div class="vertical-container">
	<h1 class="vertical">News</h1>
	</div>
	<div class="rounded">
		<div class="content-container">
		<h2>@DukeChronicle:</h2>
		<p>
			RT @fhi_duke: "Why Tell Stories?" Edwidge Danticat on power of testimony 
			in face of catastrophe http://bit.ly/gu4K8h Thanks @DukeChronicle!
		</p>
		</div>
	</div>
</div>



</html>