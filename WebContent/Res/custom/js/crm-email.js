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

function future_date_picker(tag, input){
	var mydate = date.getDate()+"-"+(date.getMonth()+1) +"-"+date.getFullYear();
	var starty = date.getFullYear();
	tag.datetimepicker({
		format:'d-M-Y',
		timepicker:false,
		minDate: mydate,
		yearStart: starty,
		onSelectDate:function(ct,$i){
			input.val($i.val());
			$i.datetimepicker('hide');
		}
	});
}

function schedule_date_time_picker(tag, input){
	var mydate = date.getDate()+"-"+(date.getMonth()+1) +"-"+date.getFullYear();
	var starty = date.getFullYear();
	tag.datetimepicker({
		format:'d-M-Y H:i',
		minDate: mydate,
		yearStart: starty,
		onChangeDateTime:function(ct,$i){
			input.val($i.val());
			$i.datetimepicker('hide');
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

function start_overlay(){
	$.LoadingOverlay("show", {
    	background  : "rgba(165, 190, 100, 0.5)"
    });
}

function end_overlay(){
	$.LoadingOverlay("hide");
}

function getMsgTemplate(){
	$("#eventType").change(function(){
		var val = $(this).val();
		
		if(val.length > 0){
			$.post("/norbus.epurse.v2.crm/GetMessageTemplate", {task:val},"json").done(function(data){
				$("#subject").val(data.subject);
				$("#textmsg").val(data.message);
			}).fail(function(data){});
		}
	});
}

function client_search_extensive(tag){
	tag.click(function(){
		console.log("Product " +  $("#modulesField :selected").val());
		
		var mval = $("#modulesField :selected").val();
		var valNum = "";
		if(mval.length != 0){
			if(mval == "MF")
				valNum = $("#fundField :selected").val();
			if(mval == "PF")
				valNum = $("#schemeField :selected").val();
			
			var url = "/norbus.epurse.v2.crm/complete-client-search?p=" + mval + "&num=" + valNum;
			
			window.open(url, "popupWindow", "width=650,height=500,scrollbars=yes");
		}
		
			
	});
}

function module_change(){
	$("#modulesField").change(function(){
		var val = $(this).val();
		
		if(val == "CRM"){
			$('.fundClass, .schemeClass').css('display','none');
			$("input, select, textarea", $(".fundClass, .schemeClass")).attr("disabled", "disabled");
			
		}else if(val == "MF"){
			$('.fundClass').css('display','block');
			$("input, select, textarea", $(".fundClass")).removeAttr("disabled");
			
			$('.schemeClass').css('display','none');
			$("input, select, textarea", $(".schemeClass")).attr("disabled", "disabled");
			
			$.post("/norbus.epurse.v2.crm/FetchMffund", {num:val},"json").done(function(data){
				var selectoption = "<option value='-1'>...Choose Fund...</option>";
				$.each(data, function(key, val){
			    	selectoption += "<option value='"+ val.num +"'>"+val.name+"</option>";
			    })
			    //console.log(data.id);
			    $('#fundField').html(selectoption);
			}).fail(function(data){});
			
		}else if(val == "PF"){
			$('.schemeClass').css('display','block');
			$("input, select, textarea", $(".schemeClass")).removeAttr("disabled");
			
			$('.fundClass').css('display','none');
			$("input, select, textarea", $(".fundClass")).attr("disabled", "disabled");
			
			$.post("/norbus.epurse.v2.crm/FetchPfscheme", {num:val},"json").done(function(data){
				var selectoption = "<option value='-1'>...Choose Scheme...</option>";
				$.each(data, function(key, val){
			    	selectoption += "<option value='"+ val.num +"'>"+val.name+"</option>";
			    })
			    
			    $('#schemeField').html(selectoption);
			}).fail(function(data){});
			
		}else{
			$('.fundClass, .schemeClass').css('display','none');
			$("input, select, textarea", $(".fundClass, .schemeClass")).attr("disabled", "disabled");
		}
	});
}

function payment_mode_change(){
	$("#paymentModeField").change(function(){
		var val = $(this).val();
		
		if(val == "BANK"){
			$('.bankClass').css('display','block');
			$("input, select, textarea", $(".bankClass")).removeAttr("disabled");
			
			$('.momClass').css('display','none');
			$("input, select, textarea", $(".momClass")).attr("disabled", "disabled");
			/*
			$.post("/norbus.epurse.v2.crm/FetchMffund", {num:val},"json").done(function(data){
				var selectoption = "<option value='-1'>...Choose Fund...</option>";
				$.each(data, function(key, val){
			    	selectoption += "<option value='"+ val.num +"'>"+val.name+"</option>";
			    })
			    //console.log(data.id);
			    $('#fundField').html(selectoption);
			}).fail(function(data){});
			*/
		}else if(val == "MoM"){
			$('.momClass').css('display','block');
			$("input, select, textarea", $(".momClass")).removeAttr("disabled");
			
			$('.bankClass').css('display','none');
			$("input, select, textarea", $(".bankClass")).attr("disabled", "disabled");
			/*
			$.post("/norbus.epurse.v2.crm/FetchPfscheme", {num:val},"json").done(function(data){
				var selectoption = "<option value='-1'>...Choose Scheme...</option>";
				$.each(data, function(key, val){
			    	selectoption += "<option value='"+ val.num +"'>"+val.name+"</option>";
			    })
			    
			    $('#schemeField').html(selectoption);
			}).fail(function(data){});
			*/
		}else{
			$('.bankClass, .momClass').css('display','none');
			$("input, select, textarea", $(".bankClass, .momClass")).attr("disabled", "disabled");
		}
	});
}

function fetchMFFunds(){
	$('#modulesField').change(function(){
		var val = $(this).val();
		if(val == ''){
			$('#fundsField').html("<option value=''>... Choose Fund ...</option>");
		}else{
			if(val == "MF"){
				$.post("FetchMffund", {num:val},"json").done(function(data){
					var selectoption = "<option value=''>...Choose Fund...</option>";
					$.each(data, function(key, val){
				    	selectoption += "<option value='"+ val.num +"'>"+val.name+"</option>";
				    })
				    //console.log(data.id);
				    $('#fundsField').html(selectoption);
				}).fail(function(data){});
			}
		}
	});
}

function fetchSubFunds(){
	$('#fundsField').change(function(){
		var empNum = $(this).val(),
			schNum = $('#schemeField :selected').val();
		if(empNum == ''){
			$('#subFundField').html("<option value=''>... Choose Sub Fund ...</option>");
		}else{
			$.post("FetchSMSLogs", {employerNum:empNum,schemeNum:schNum},"json").done(function(data){
				var selectoption = "<option value=''>...Choose Sub Fund...</option>";
				$.each(data, function(key, val){
			    	selectoption += "<option value='"+ val.groupId +"'>"+val.groupId+"</option>";
			    })
			    
			    $('#subFundField').html(selectoption);
			}).fail(function(data){});
		}
	});
}

function delete_email_message_setup(){
	$('.btnDelete').click(function(){
		var id = $(this).attr('data-id');
		
		bootbox.confirm({
			title: "Delete Email Messsage Setup?",
			message: "Are you sure you want to delete this?",
			buttons: {
				cancel: {
					label: '<i class="fa fa-times"></i> Cancel'
				},
				confirm: {
					label: '<i class="fa fa-check"></i> Confirm'
				}
			},
			callback: function(result) {
				if(result == true){
					$.post("DeleteSmsSetups",{num:id,ty:"ms"}).done(function(data){
						if(data == 'session'){
							alert('Your session had expired')
						}else{
							bootbox
							  .alert({
									message: 'You have successfully deleted SMS Setup.'
								})
								.on('hide.bs.modal', function(){
									location.reload(true);
								});
						}
					}).fail(function(){
						console.log('Error has occured');
					});
				}
			}
		});
	});
}

function general_email(){
	var value;
	$(".submitButton").click(function() {
		var $btn = $(this);
		
		value = $(this).attr("value");
		
		console.log('Button click value: ' + value)
		
		if($('#sendGeneralEmailForm').valid()){
			$btn.button('loading');
			$('#successMsgContainer').text('');
			$('#failureMsgContainer').text('');
			$('.smsViewContainer').html('');
		}
	});
	
	$('#sendGeneralEmailForm').submit(function(event){
		event.preventDefault();
		
		console.log('Enter General email');
		
		var valid = $(this).valid();
		
		if(!valid)
			return false;
		
		start_overlay();

		  var $form = $(this),
		    term = $form.serialize() + '&submit='+ value,
		    url = $form.attr("action");
		  
		  console.log('form data: ' + term);

		  $.post( url, term,"json").done(function(data){
			  console.log('Enter one');
			  end_overlay();
			  if(data == "fail"){
				  alert("Internal Server Error");
			  }else{
				  bootbox.alert({
						message : "<font color='green'>Email successful sent</font>"
					}).on('hide.bs.modal', function() {
						//location.reload(true);
						window.location.href = "statement-email";
					});
			  }
			  
		  }).fail(function(data){
			  end_overlay();
			  alert("Internal Server Error");
			  $('#failureMsgContainer').text('Error has occured');
		  });
	});
}

function send_contract_note_email(){
	$('#sendContractNoteEmailForm').submit(function(event){
		event.preventDefault();
		
		console.log('Enter operational email');
		
		var valid = $(this).valid();
		
		if(!valid)
			return false;
		
		start_overlay();

		  var $form = $(this),
		  	term = $form.serialize(),
		    url = $form.attr("action");
		  
		  console.log('form data: ' + term);

		  $.post( url, term,"json").done(function(data){
			  console.log('Enter one');
			  end_overlay();
			  if(data == "fail"){
				  alert("Internal Server Error");
			  }else{
				  bootbox.alert({
						message : "<font color='green'>Email successful sent</font>"
					}).on('hide.bs.modal', function() {
						//location.reload(true);
						window.location.href = "contract-note-email";
					});
			  }
			  
			  
		  }).fail(function(data){
			  end_overlay();
			  alert("Internal Server Error");
			  $('#failureMsgContainer').text('Error has occured');
		  });
	});
}

function send_statement_email(){
	$('#sendStatementEmailForm').submit(function(event){
		event.preventDefault();
		
		console.log('Enter operational email');
		
		var valid = $(this).valid();
		
		if(!valid)
			return false;
		
		start_overlay();

		  var $form = $(this),
		  	term = $form.serialize(),
		    url = $form.attr("action");
		  
		  console.log('form data: ' + term);

		  $.post( url, term,"json").done(function(data){
			  console.log('Enter one');
			  end_overlay();
			  if(data == "fail"){
				  alert("Internal Server Error");
			  }else{
				  bootbox.alert({
						message : "<font color='green'>Email successful sent</font>"
					}).on('hide.bs.modal', function() {
						//location.reload(true);
						window.location.href = "statement-email";
					});
			  }
			  
		  }).fail(function(data){
			  end_overlay();
			  alert("Internal Server Error");
			  $('#failureMsgContainer').text('Error has occured');
		  });
	});
}

function send_broadcast_email(){
	$('#sendBroadcastEmailForm').submit(function(event){
		event.preventDefault();
		
		console.log('Enter broadcast email');
		
		var valid = $(this).valid();
		
		if(!valid)
			return false;
		
		start_overlay();

		  var $form = $(this),
		  	term = $form.serialize(),
		    url = $form.attr("action");
		  
		  console.log('form data: ' + term);

		  $.post( url, term,"json").done(function(data){
			  console.log('Enter one');
			  end_overlay();
			  if(data == "fail"){
				  alert("Internal Server Error");
			  }else{
				  bootbox.alert({
						message : "<font color='green'>Email successful sent</font>"
					}).on('hide.bs.modal', function() {
						//location.reload(true);
						window.location.href = "broadcast-email";
					});
			  }
			  
		  }).fail(function(data){
			  end_overlay();
			  alert("Internal Server Error");
			  $('#failureMsgContainer').text('Error has occured');
		  });
	});
}