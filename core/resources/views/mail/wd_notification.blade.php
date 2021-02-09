<?php
    $st = App\site_settings::find(1);
?>
<!DOCTYPE html>
<html>
<head>
	<title>Withdrawal Notification</title>
</head>
<body>
    <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-4" style="border:1px solid #CCC; padding:4%; box-shadow:2px 2px 4px 4px #CCC;">
            <div align="">
        		<img src="http://{{env('MAIL_SENDER')}}/img/{{$st->site_logo}}" style="height:100px; width:100px;" align="center">
        	</div>
        	<h3 align="">Withdrawal Notification</h3>
        	<p>
        	   Hi, <b>{{$md['username']}}</b> your withdrawal request on {{env('APP_URL')}} has been created successfully.
        	   <br>
        	   Kindly attend to this withdrawal request.
        	</p>
        	<p>
        		<i class="fa fa-certificate">{{$st->site_title}} Investment.
        	</p>
        </div>
    </div>
	
</body>
</html>