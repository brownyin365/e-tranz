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
 /*background-color: #222D32;*/
}

.panel-primary>.panel-heading {
    color: #fff;
    background-color: #337ab7;
    /* border-color: #337ab7; */
}
    	
    </style>
</head>
<body>
<jsp:include page="WEB-INF/Navigation.jsp"></jsp:include>

	<br><br><br><br><br><br><br>	
		<div class="container">
		<div class="panel panel-primary mypanels">
			<div class="panel-heading">
				<h4>Destination</h4>
			</div>
			<div class="panel-body">
				<div class="statementsform">
					<form class="form-horizontal">
						<div class="form-group">
							<label class="control-label col-lg-3">From </label>
							<div class="col-lg-5">
							    <select name="destination" class="form-control" required="required">
									<option value="">Select Destination</option>
									<option value="">Accra</option>
									<option value="">Kumasi</option>
									<option value="">Tamale</option>
									<option value="">Takoradi</option>
									<option value="">Cape Coast</option>
									<option value="">Afloa</option>
									<option value="">Wa</option>
									<option value="">Ho</option>
									<option value="">Konogo</option>
									<option value="">Tachiman</option>
									<option value="">Elubo</option>
									<option value="">Paga</option>
									<option value="">Nkwakwa</option>
								</select>
							</div>
						</div>
						<div class="form-group">
							<label class="control-label col-lg-3">To</label>
							<div class="col-lg-5">
							   <select name="destination" class="form-control" required="required">
							   		<option value="">Select Destination</option>
									<option value="">Accra</option>
									<option value="">Kumasi</option>
									<option value="">Tamale</option>
									<option value="">Takoradi</option>
									<option value="">Cape Coast</option>
									<option value="">Afloa</option>
									<option value="">Wa</option>
									<option value="">Ho</option>
									<option value="">Konogo</option>
									<option value="">Tachiman</option>
									<option value="">Elubo</option>
									<option value="">Paga</option>
									<option value="">Nkwakwa</option>
								</select>
							</div>
						</div>
						<div class="form-group">
							<label class="control-label col-lg-3">Kilometers</label>
							<div class="col-lg-5">
								<input type="text" name="accounnumber" class="form-control" required="required">
							</div>
						</div>
						<div class="form-group">
							<label class="control-label col-lg-3"></label>
							<div class="col-lg-5">
								<button type="submit" class="btn btn-primary">Submit</button>
								<button type="reset" class="btn btn-danger">Reset</button>
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