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
 
    	


body{
 background-color: #ffffff;
}

.panel-primary>.panel-heading {
    color: #fff;
    background-color: #337ab7;
    /* border-color: #337ab7; */
}
	.img-container {
        text-align: center;
      }
</style>
</head>
<body>
<jsp:include page="WEB-INF/Navigation.jsp"></jsp:include>
	<br><br>
		
		 <div class="img-container">
                    <img src="Res/custom/images/car.jpg" class="car">
                </div>
                <br><br>
		<div class="container">
		<div class="panel panel-primary mypanels">
			<div class="panel-heading">
				<h4>Bus Information</h4>
			</div>
			<div class="panel-body">
				<div class="statementsform">
					<form class="form-horizontal">
						<div class="form-group">
							<label class="control-label col-lg-3">Model </label>
							<div class="col-lg-5">
							<input name="accounnumber" class="form-control" required="required">							   
							</div>
						</div>
						<div class="form-group">
							<label class="control-label col-lg-3">Reg Number</label>
							<div class="col-lg-5">
							 <input name="accounnumber" class="form-control" required="required">							  
							</div>
						</div>
						<div class="form-group">
							<label class="control-label col-lg-3">Color</label>
							<div class="col-lg-5">
								<input name="accounnumber" class="form-control" required="required">
							</div>
						</div>
					</form>
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