<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>Index</title>
	
	<link href="Res/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="Res/plugins/bootstrapValidator/css/bootstrapValidator.min.css">
    <link href="Res/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" type="text/css" href="Res/custom/css/custom-style.css">
    <style type="text/css">
    	.login .container{
    		width: 30%;
    	}
    	
    	
.login-key {
    height: 100px;
    font-size: 80px;
    text-align: center;
    line-height: 100px;
    background: -webkit-linear-gradient(#27EF9F, #0DB8DE);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.login-title {
    margin-top: 15px;
    text-align: center;
    font-size: 30px;
    letter-spacing: 2px;
    margin-top: 15px;
    font-weight: bold;
    color: #ECF0F5;
}

body{
 background-color: #222D32;
}
    	
    </style>
</head>
<body>
	<br><br><br>
	<div class="container">
        <div class="row login-page">
            <div class="col-lg-5 col-lg-offset-4">
            <div class="col-lg-12 login-key">
                    <i class="fa fa-car" aria-hidden="true"></i>
                </div>
                <br><br><br><br><br>
                <div class="col-lg-12 login-title">
                   E-Tranz
                </div>
                <br><br>
            	<div>
					<font color="red">${failAdminAuthentication}${failAuthentication}</font>
				</div>
                <div class="login-panel panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">Please Sign In</h3>
                    </div>
                    <div class="panel-body">
                        <form action="login" method="post" role="form" class="login-form" id="loginform">
                            <fieldset>
                            	 <div class="form-group">
                                    <input class="form-control" placeholder="Full Name" name="fullName" type="text" required="required">
                                </div>
                                <div class="form-group">
                                    <input class="form-control" placeholder="Username" name="username" type="text" required="required">
                                </div>
                                <div class="form-group">
                                    <input class="form-control" placeholder="Password" name="password" type="password" value="">
                                </div>
                                 <div class="form-group">
                                    <input class="form-control" placeholder="ID" name="identity" type="text" required="required">
                                </div>
                                 <br><br>                            
                                <div class="col-lg-12">
                                	<button type="submit" class="btn btn-lg btn-success col-lg-6">Sign Up <i class="fa fa-user-plus"></i></button>
                                	<a href="index.jsp" class="btn btn-lg btn-primary col-lg-6">Login <i class="fa fa-sign-in"></i></a>                              	
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
	
 <script src="Res/plugins/dist/jquery/jquery.min.js"></script>
	<script src="Res/plugins/bootstrap/js/bootstrap.min.js"></script>
	<script
		src="Res/plugins/datetimepicker/jquery.datetimepicker.full.min.js"></script>
	<script
		src="Res/plugins/bootstrapValidator/js/bootstrapValidator.min.js"></script>
	<script src="Res/custom/js/custom-js.js"></script>
	<script src="Res/custom/js/crm-email.js"></script>
</body>
</html>