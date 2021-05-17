
var date = new Date();
			
function not_future_date_picker(tag, input){
	var mydate = date.getDate()+"-"+(date.getMonth()+1) +"-"+date.getFullYear();
	var starty = date.getFullYear();
	tag.datetimepicker({
		format:'d-M-Y',
		timepicker:false,
		maxDate: mydate,
		yearEnd: starty,
		onSelectDate:function(ct,$i){
			input.val($i.val());
			$i.datetimepicker('hide');
		}
	});
}

function date_picker(tag, input){
	tag.datetimepicker({
		format:'d-M-Y',
		timepicker:false,
		onSelectDate:function(ct,$i){
			input.val($i.val());
			$i.datetimepicker('hide');
		}
	});
}

function submit_statement_event(){
	$('#StatementForm').submit(function(){
	    $.LoadingOverlay("show", {
	    	background  : "rgba(165, 190, 100, 0.5)"
	    });
	});
}

function on_click_profile(){
    $.LoadingOverlay("show", {
    	background  : "rgba(165, 190, 100, 0.5)"
    });
}

function setNavigation(){
	var path = window.location.pathname;
		path = path.replace(/\/$/, "");
		path = decodeURIComponent(path);

		path = path.split("/")[2];

		console.log("path: " + path);

		$(".nav-menu a").each(function(){
			var href = $(this).attr("href");
			if(path == href){
				$(this).closest("li").addClass("menu-active");
			}
		});

}

function submit_statement_event(){
	$('#statemntForm').submit(function(){
	    $.LoadingOverlay("show", {
	    	background  : "rgba(165, 190, 100, 0.5)"
	    });
	});
}

function submit_change_password(){
	 $('#ChangePasswordForm').submit(function(event){
		event.preventDefault();
		
		var valid = $(this).valid();
		if(valid){
			var $form = $( this ),
			term = $form.serialize(),
			url = $form.attr("action");

			var posting = $.post( url, term, "json");

			posting.done(function(data){
				if(data == "success")
					$("#green").text("Successfully change your password");
				else
					$('#red').text("Sorry, Internal server error occur");
			});

			posting.fail(function(){
				$('#red').text('Sorry, Internal server error occur')
			});
		}
	});
}

function submitComment(){
	$('#commentForm').submit(function(event){
		event.preventDefault();
		
		var valid = $(this).valid();
		if(valid){
			console.log("Submitting comment");

			start_loadingOverlay();
			
			var $form = $(this),
			term = $form.serializeArray(),
			url = $form.attr("action");
			
			$.post( url, term, "json").done(function(data){
				end_loadingOverlay();
				if(data === "session"){
					alert('Session Expired');
				}else if(data === "success"){
					$('#commentForm').trigger("reset");
					$("#green").text("Your comment was successfully sent"); 
					//location.reload(true); 
					bootbox
					  .alert({
							message: 'Your comment was successfully sent.'
						})
						.on('hide.bs.modal', function(){
							location.reload(true);
						});
				}else{
					$('#commentForm').trigger("reset");
					alert("Please try again later");
				}
				
			}).fail(function(data){
				end_loadingOverlay();
				$("#red").text('Could not send comment');
				console.log(data);
			});
		}
		
	});
}

function start_loadingOverlay(){
	$.LoadingOverlay("show", {
    	background  : "rgba(165, 190, 100, 0.5)"
    });
}

function end_loadingOverlay(){
	$.LoadingOverlay("hide");
}

function submit_signup(){
	 $('#SignUpForm').submit(function(event){
		 
		 var recaptcha = $("#g-recaptcha-response").val();
		 if (recaptcha === "")
			 return false;
		 
		 event.preventDefault();
		 
		 start_loadingOverlay();

		var $form = $( this ),
	    term = $form.serialize(),
	    url = $form.attr("action");

		var posting = $.post( url, term, "json");

		posting.done(function(data){
			
			end_loadingOverlay();
			
			$('#username').val("");
			$('#email').val("");
			$('#accountNo').val("");
			
			if(data === "success"){
				bootbox
				  .alert({
						message: 'Successfully sign up. Please check your email for your password.'
					})
					.on('hide.bs.modal', function(){
						location.reload(true);
					});
				//$("#green").text("Successfully sign up. Please check your email for your password");
			}else
				$("#red").text("Sorry, you could not sign up. Please check your details and try again");
		});

		posting.fail(function(){
			end_loadingOverlay();
			$('#username').val("");
			$('#email').val("");
			$('#accountNo').val("");
			$("#red").text('Sorry, you could not sign up. Please check your details and try again');
		});
	});
}

function submit_forgot_password_reset(){
	 $('#forgotPasswordForm').submit(function(event){
		 
		 var recaptcha = $("#g-recaptcha-response").val();
		 if (recaptcha === "")
			 return false;
		 
		 event.preventDefault();
		 
		 start_loadingOverlay();

		var $form = $( this ),
	    term = $form.serialize(),
	    url = $form.attr("action");

		var posting = $.post( url, term, "json");

		posting.done(function(data){
			
			end_loadingOverlay();
			
			$('#email').val("");
			
			if(data === "success"){
				bootbox
				  .alert({
						message: 'Successfully reset password. Please check your email for your password.'
					})
					.on('hide.bs.modal', function(){
						location.reload(true);
					});
				
			}else if(data === "noemail"){
				$("#red").text("Sorry, email address not registed.");
			}else
				$("#red").text("Sorry, you could not reset password.");
		});

		posting.fail(function(){
			end_loadingOverlay();
			$('#email').val("");
			$("#red").text('Sorry, you could not reset password.');
		});
	});
}

function submit_first_time(){
	 $('#firstTimeUsers').submit(function(event){
			event.preventDefault();
			
			var valid = $(this).valid();
			if(valid){
				var $form = $( this ),
			    term = $form.serialize(),
			    url = $form.attr("action");

				var posting = $.post( url, term, "json");

				posting.done(function(data){
					if(data === "success")
						window.location.replace("home");
					else
						alert("Sorry, Internal server error occur");
				});

				posting.fail(function(){
					alert('Sorry, Internal server error occur')
				});
			}
			
		});
}

function progess_indicator(){
	$(document).ajaxStart(function(){
	    $.LoadingOverlay("show", {
	    	background  : "rgba(165, 190, 100, 0.5)"
	    });
	});
	$(document).ajaxStop(function(){
	    $.LoadingOverlay("hide");
	});
}

function submit_password_recovery(){
	 $('#passwordRecovery').submit(function(event){
		event.preventDefault();

		var $form = $( this ),
		term = $form.serialize(),
		url = $form.attr("action");

		var posting = $.post( url, term, "json");

		posting.done(function(data){
			$("#emailField").val("");
			if(data === "success"){
				$("#green").text("Successfully reset your password. Please check your email provided");
			}else
				$("#red").text("Sorry, we could not recover your password. Please try again later");
		});

		posting.fail(function(){
			$("#emailField").val("");
			$("#red").text("Sorry, we could not recover your password. Please try again later");
		});
	});
}

function member_biodata_update(){
	$("#updateMemberBiodata").click(function(){
		$("#updateBiodataModal").modal({
			show: true,
			backdrop:'static'
		});
	});

	$(".benefBtn").click(function(){
		var type = $(this).attr('data-type'),
			fullName, mobileNo, relation, percent, memberSchNum, membernum;
		if(type == "update"){
			benefNum = $(this).attr('data-num'),
			memberSchNum = $(this).attr('data-memberschemenum'),
			fullName = $(this).attr('data-fullname'),
			mobileNo = $(this).attr('data-telephone'),
			relation = $(this).attr('data-relation'),
			percent = $(this).attr('data-percent');
		}
		if(type == "add"){
			membernum = $(this).attr('data-member');
		}

		console.log("Type: " + type);

		if(type == "update"){
			$('#beneficiaryUpdateModalLabel').text('Update Beneficiary');

			$("#updateMemberBeneficiaryForm #schemeFormGroup").css("display", "none");
			$("#updateMemberBeneficiaryForm #schemeField").attr("disabled", "disabled");

			$('#updateMemberBeneficiaryForm #benefNum').val(benefNum);
			$('#updateMemberBeneficiaryForm #memberSchemeNum').val(memberSchNum);
			$('#updateMemberBeneficiaryForm #memberNum').val(membernum);
			$('#updateMemberBeneficiaryForm #updateType').val(type);

			$('#updateMemberBeneficiaryForm #benefFullName').val(fullName);
			$('#updateMemberBeneficiaryForm #benefRelation').val(relation);
			$('#updateMemberBeneficiaryForm #benefPercentage').val(percent);
			$('#updateMemberBeneficiaryForm #benefMobile').val(mobileNo);
		}

		if(type == "add"){
			$('#beneficiaryUpdateModalLabel').text('Add Beneficiary');
			$("#updateMemberBeneficiaryForm").trigger("reset");

			$('#updateMemberBeneficiaryForm #updateType').val(type);
			$('#updateMemberBeneficiaryForm #memberNum').val(membernum);
			$('#updateMemberBeneficiaryForm #benefNum').val('');
			$('#updateMemberBeneficiaryForm #memberSchemeNum').val('');

			$("#updateMemberBeneficiaryForm #schemeFormGroup").css("display", "block");
			$("#updateMemberBeneficiaryForm #schemeField").removeAttr("disabled");
		}
		
		$("#addMemberBeneficiaryModal").modal({
			show: true,
			backdrop:'static'
		});
		/*
		$("#addMemberBeneficiaryModal").on('show.bs.modal', function(event){
			var button = $(event.relatedTarget);

			var modal = $(this);

			console.log("Type: " + type);

			if(type == "add")
				modal.find('.modal-title').text('Add Beneficiary');

				$("#updateMemberBeneficiaryForm").reset();
			if(type == "update"){
				modal.find('.modal-title').text('Update Beneficiary');

				modal.find('.modal-body #benefNum').val(benefNum);
				modal.find('.modal-body #benefFullName').val(fullName);
				modal.find('.modal-body #benefRelation').val(relation);
				modal.find('.modal-body #benefPercentage').val(percent);
				modal.find('.modal-body #benefMobile').val(mobileNo);
				
			}
		});
		*/
	});
}

function update_member_beneficiary(){
	$('#updateMemberBeneficiaryForm').submit(function(event){

		event.preventDefault();
		 
		start_loadingOverlay();

		var $form = $( this ),
	    term = $form.serialize(),
	    url = $form.attr("action");

		var posting = $.post( url, term, "json");

		posting.done(function(data){
			
			end_loadingOverlay();

			if(data === "success"){
				$("#addMemberBeneficiaryModal").modal('hide');
				bootbox
				  	.alert({
						message: 'Successfully update member beneficiary.'
					})
					.on('hide.bs.modal', function(){
						location.reload(true);
					});
			}else
				alert("Could not update member beneficiary");
		});

		posting.fail(function(){
			end_loadingOverlay();
			alert('Sorry, internal server error');
		});
	});
}

function update_member_member(){
	$('#updateMemberBiodataForm').submit(function(event){

		event.preventDefault();
		 
		start_loadingOverlay();

		var $form = $( this ),
	    term = $form.serialize(),
	    url = $form.attr("action");

		var posting = $.post( url, term, "json");

		posting.done(function(data){
			
			end_loadingOverlay();
			
			if(data == "success"){
				$("#updateBiodataModal").modal('hide');
				bootbox
				  	.alert({
						message: 'Successfully update member.'
					})
					.on('hide.bs.modal', function(){
						location.reload(true);
					});
			}else
				alert("Could not update member");
		});

		posting.fail(function(){
			end_loadingOverlay();
			alert('Sorry, internal server error');
		});
	});
}

function validate_member_update(){
	$('#updateMemberBiodataForm').validate({
		rules:{
			mobileNo:{
				number: true
			},
			ssNo:{
				required: true
			},
			lastName:{
				required: true
			},
			firstName:{
				required: true
			},
			email:{
				email: true
			},
			dateOfBirth:{
				date: true
			}
		},
		highlight: function(element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function(element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        errorElement: 'small',
        errorClass: 'help-block',
        errorPlacement: function(error, element) {
            if(element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
	});
}

function validate_member_beneficiary_update(){
	$('#updateMemberBeneficiaryForm').validate({
		rules:{
			fullname: true,
			relation: true,
			percentage: {
				required: true,
				number: true,
				min: 1,
				max: 100,
				remote:{
					url: "MemberBeneficiaryPercentageValidation",
					type: "post",
					data: {
						updatetype: function() {
							return $( "#updateMemberBeneficiaryForm #updateType" ).val();
						},
						benefnum: function(){
							return $( "#updateMemberBeneficiaryForm #benefNum" ).val();
						},
						memberschnum: function(){
							return $( "#updateMemberBeneficiaryForm #memberSchemeNum" ).val();
						},
						memberSchNum: function(){
							return $( "#updateMemberBeneficiaryForm #schemeField" ).val();
						}
					}
				}
			},
			mobileNo:true
		},
		highlight: function(element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function(element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        errorElement: 'small',
        errorClass: 'help-block',
        errorPlacement: function(error, element) {
            if(element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
	});
}

function validate_username(){
	$('#SignUpForm').validate({
		rules:{
			username: {
				required: true,
				remote:{
					url: "ValidateUsername",
					type: "post"
				}
			},
			email:{
				required: true,
				remote:{
					url: "ValidateEmailAddress",
					type: "post"
				}
			},
			accountNo:"required"
		},
		highlight: function(element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function(element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        errorElement: 'small',
        errorClass: 'help-block',
        errorPlacement: function(error, element) {
            if(element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
	});
}

function validate_recovery_password(){
	$('#passwordRecovery').validate({
		rules:{
			emailfield: {
				required: true,
				email: true
			}
		},
		highlight: function(element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function(element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        errorElement: 'small',
        errorClass: 'help-block',
        errorPlacement: function(error, element) {
            if(element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
	});
}

function validate_first_time_users(){
	$('#firstTimeUsers').validate({
		rules:{
		    password: "required",
		    password_again: {
		      equalTo: "#password"
		    }

		},
		highlight: function(element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function(element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        errorElement: 'small',
        errorClass: 'help-block',
        errorPlacement: function(error, element) {
            if(element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
	});
}

function validate_change_password(){
	$('#ChangePasswordForm').validate({
		rules:{
			oldpass: "required",
			newpass: "required",
			renewpass: {
		      equalTo: "#newpass"
		    }

		},
		highlight: function(element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function(element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        errorElement: 'small',
        errorClass: 'help-block',
        errorPlacement: function(error, element) {
            if(element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
	});
}

function validate_member_login(){
	$('#LoginForm').validate({
		rules:{
			username: "required",
			password: "required"

		},
		highlight: function(element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function(element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        errorElement: 'small',
        errorClass: 'help-block',
        errorPlacement: function(error, element) {
            if(element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
	});
}