/*********************************************************************************
* 功能：判断字符是否为空字符或null值
* 参数：字符串
**********************************************************************************/
function isEmpty (str) {
    if ((str==null)||(str.length==0)) return true;
    else return(false);
}

function isNotEmpty(str) {
	if ((str == null) || (str.length == 0)) return false;
	return true;
}

/*********************************************************************************
* 功能：判断校验数字：正数
* 参数：字符串
**********************************************************************************/
function isDigit(s)
{
 var patrn=/^\d+(\.\d+)?$/;
 if (!patrn.exec(s)) return false
 return true
}
 /*********************************************************************************
* 功能：校验手机号码
* 参数：字符串
**********************************************************************************/
function isMobile(s)
{
 var patrn=/^(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$/i;
 if (!patrn.exec(s)) return false
 return true
}
/*********************************************************************************
* 功能：校验身份证
* 参数：字符串
**********************************************************************************/
function isIdCard(s)
{
 var patrn=/^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/;
 if (!patrn.exec(s)) return false
 return true
}

$(document).ready(function(){
	  $('.validate').click(function(){
		  $(this).closest('td').find('.validateResult').text('').hide();
		  $(this).parent().removeClass('ipt-box-wrong');
	  });
	  
	  $('.validateIsEmpty').blur(function(){
		  var str = $(this).val();
		  if (isEmpty(str))
		  {
			  $(this).closest('td').find('.validateResult').text('必填').show('slow');
			  $(this).parent().addClass('ipt-box-wrong');
		  }
	  }).click(function(){
		  $(this).closest('td').find('.validateResult').text('').hide();
		  $(this).parent().removeClass('ipt-box-wrong');
	  });
	  $('.validateOldPassword').blur(function(){
		  var str = $(this).val();
		  if (!isEmpty(str))
		  {
			  var oNewPassword = $(this).closest('table').find('.validateNewPassword'); 
			  if (str == oNewPassword.val())
			  {	  
				  oNewPassword.closest('td').find('.validateResult').text('新登录密码和原登录密码相同').show('slow');
				  oNewPassword.parent().addClass('ipt-box-wrong');
			  } else {
				  oNewPassword.closest('td').find('.validateResult').text('').hide();
				  oNewPassword.parent().removeClass('ipt-box-wrong');
			  }
		  }
	  });
	  $('.validateNewPassword').blur(function(){
		  var str = $(this).val();
		  if (!isEmpty(str))
		  {
			  var strOldPassword = $(this).closest('table').find('.validateOldPassword').val(); 
			  if (str == strOldPassword)
			  {				  
				  $(this).closest('td').find('.validateResult').text('新登录密码和原登录密码相同').show('slow');
				  $(this).parent().addClass('ipt-box-wrong');
			  } else {
				  $(this).closest('td').find('.validateResult').text('').hide();
				  $(this).parent().removeClass('ipt-box-wrong');
			  }
			  var oConfirmPassword = $(this).closest('table').find('.validateConfirmPassword');
			  if (str == oConfirmPassword.val())
			  {
				  oConfirmPassword.closest('td').find('.validateResult').text('').hide();
				  oConfirmPassword.parent().removeClass('ipt-box-wrong');
			  } else {					  
				  var strConfirmPassword = oConfirmPassword.val();
				  if (strConfirmPassword!=null && strConfirmPassword.length>0)
				  {
					  oConfirmPassword.closest('td').find('.validateResult').text('两次输入的不同').show('slow');
					  oConfirmPassword.parent().addClass('ipt-box-wrong');
				  }
			  }
		  }
	  });
	  $('.validateConfirmPassword').blur(function(){
		  var str = $(this).val();
		  if (!isEmpty(str))
		  {
			  var strNewPassword = $(this).closest('table').find('.validateNewPassword').val();
			  if (str != strNewPassword)
			  {
				  $(this).closest('td').find('.validateResult').text('两次输入的不同').show('slow');
				  $(this).parent().addClass('ipt-box-wrong');
			  } else {
				  $(this).closest('td').find('.validateResult').text('').hide();
				  $(this).parent().removeClass('ipt-box-wrong');
			  }
		  }
	  });	
	  $('.validateIsDigit').blur(function(){
//		  var str = $(this).val().replace(/,|，|(\s)+/g,"");
		  var str = $(this).val();
		  if (!isEmpty(str))
		  {					
			  if (!isDigit(str))
			  {				   
				  $(this).closest('td').find('.validateResult').text('请输入数字').show('slow');
				  $(this).parent().addClass('ipt-box-wrong');
			  } else {			
				  $(this).closest('td').find('.validateResult').text('').hide();
				  $(this).parent().removeClass('ipt-box-wrong');
			  }			 
		  }
	  });
	  $('.validateIsMobile').blur(function(){
		  var str = $(this).val();
		  if (!isEmpty(str))
		  {	
			  if (isDigit(str))
			  {
				  if (!isMobile(str))
				  {
					  $(this).closest('td').find('.validateResult').text('手机号码格式不对').show('slow');
					  $(this).parent().addClass('ipt-box-wrong');
				  } else {
					  $(this).closest('td').find('.validateResult').text('').hide();
					  $(this).parent().removeClass('ipt-box-wrong');
				  }
			  }
		  }
	  });
	  $('.validateIsIdCard').blur(function(){
		  var str = $(this).val();
		  if (!isEmpty(str))
		  {	
			  if (!isIdCard(str))
			  {
				  $(this).closest('td').find('.validateResult').text('身份证格式不对').show('slow');
				  $(this).parent().addClass('ipt-box-wrong');
			  } else {
				  $(this).closest('td').find('.validateResult').text('').hide();
				  $(this).parent().removeClass('ipt-box-wrong');
			  }
		  }
	  });
	  $('.validateRechargeAmount').blur(function(){
		  var str = $(this).val().replace(/,|，|(\s)+/g,"");
		  if (!isEmpty(str))
		  {	
			  if (isDigit(str))
			  {				   
				  if (str<0.1 || str>1000000)
				  {
					  $(this).closest('td').find('.validateResult').text('充值金额最小0.1元最大100万元').show('slow');
					  $(this).parent().addClass('ipt-box-wrong');
				  } else {
					  $(this).closest('td').find('.validateResult').text('').hide();
					  $(this).parent().removeClass('ipt-box-wrong');
				  }
			  }		 
		  }
	  });
	  $("input[validateLength]").blur(function(){
		  var str = $(this).val();
		  if (!isEmpty(str))
		  {	
			  if (!eval($(this).attr('validateLength').replace(/LEN/g,str.length)))
			  {
				  $(this).closest('td').find('.validateResult').text('长度输入错误').show('slow');
				  $(this).parent().addClass('ipt-box-wrong');
			  } else {
				  $(this).closest('td').find('.validateResult').text('').hide();
				  $(this).parent().removeClass('ipt-box-wrong');
			  }
		  }
	  });
	  
});
function validateForm(obj){
	var form = $(obj).closest('table');
	var bValidateResult = true;
	form.find('.validateIsEmpty').each(function(){
		  var str = $(this).val();
		  if (isEmpty(str))
		  {
			  $(this).closest('td').find('.validateResult').text('必填').show('slow');
			  $(this).parent().addClass('ipt-box-wrong');
			  bValidateResult = false;
		  } else {
			  $(this).closest('td').find('.validateResult').text('').hide();
			  $(this).parent().removeClass('ipt-box-wrong');
		  }
	  })
	  form.find('.validateNewPassword').each(function(){
		  var str = $(this).val();
		  if (!isEmpty(str))
		  {
			  var strOldPassword = 	 $(this).closest('table').find('.validateOldPassword').val(); 
			  if (str == strOldPassword)
			  {				  
				  $(this).closest('td').find('.validateResult').text('新登录密码和原登录密码相同').show('slow');
				  bValidateResult = false;
			  }
		  }
	  });
	  form.find('.validateConfirmPassword').each(function(){
		  var str = $(this).val();
		  if (!isEmpty(str))
		  {
			  var strNewPassword = 	 $(this).closest('table').find('.validateNewPassword').val();
			  if (str != strNewPassword)
			  {
				  $(this).closest('td').find('.validateResult').text('两次输入的不同').show('slow');
				  $(this).parent().addClass('ipt-box-wrong');
				  bValidateResult = false;
			  } else {
				  $(this).closest('td').find('.validateResult').text('').hide();
				  $(this).parent().removeClass('ipt-box-wrong');
			  }
		  }
	  });	  
	  form.find('.validateIsDigit').each(function(){
		  var str = $(this).val().replace(/,|，|(\s)+/g,"");
		  if (!isEmpty(str))
		  {		
			  if (!isDigit(str))
			  {				   
				  $(this).closest('td').find('.validateResult').text('请输入数字').show('slow');
				  $(this).parent().addClass('ipt-box-wrong');
				  bValidateResult = false;
			  } else {			
				  $(this).closest('td').find('.validateResult').text('').hide();
				  $(this).parent().removeClass('ipt-box-wrong');
			  }			 
		  }
	  });
	  form.find('.validateIsMobile').each(function(){
		  var str = $(this).val();
		  if (!isEmpty(str))
		  {	
			  if (isDigit(str))
			  {	  
				  if (!isMobile(str))
				  {
					  $(this).closest('td').find('.validateResult').text('手机号码格式不对').show('slow');
					  $(this).parent().addClass('ipt-box-wrong');
					  bValidateResult = false;
				  } else {
					  $(this).closest('td').find('.validateResult').text('').hide();
					  $(this).parent().removeClass('ipt-box-wrong');
				  }
			  } 		 
		  }
	  });
	  form.find('.validateIsIdCard').each(function(){
		  var str = $(this).val();
		  if (!isEmpty(str))
		  {	
			  if (!isIdCard(str))
			  {
				  $(this).closest('td').find('.validateResult').text('身份证号码格式不对').show('slow');
				  $(this).parent().addClass('ipt-box-wrong');
				  bValidateResult = false;				  
			  } else {
				  $(this).closest('td').find('.validateResult').text('').hide();
				  $(this).parent().removeClass('ipt-box-wrong');
			  }
		  }
	  });
	  form.find('.validateRechargeAmount').each(function(){
		  var str = $(this).val().replace(/,|，|(\s)+/g,"");
		  if (!isEmpty(str))
		  {		
			  if (isDigit(str))
			  {
				  if (str<0.1 || str>1000000)
				  {
					  $(this).closest('td').find('.validateResult').text('充值金额最小0.1元最大100万元').show('slow');
					  $(this).parent().addClass('ipt-box-wrong');
					  bValidateResult = false;
				  }else {
					  $(this).closest('td').find('.validateResult').text('').hide();
					  $(this).parent().removeClass('ipt-box-wrong');
				  }
			  }			 
		  }
	  });
	  form.find('input[validateLength]').each(function(){
		  var str = $(this).val();
		  if (!isEmpty(str))
		  {	
			  if (!eval($(this).attr('validateLength').replace(/LEN/g,str.length)))
			  {
				  $(this).closest('td').find('.validateResult').text('长度输入错误').show('slow');
				  $(this).parent().addClass('ipt-box-wrong');
				  bValidateResult = false;
			  } else {
				  $(this).closest('td').find('.validateResult').text('').hide();
				  $(this).parent().removeClass('ipt-box-wrong');
			  }
		  }
	  });	  
	  
	  
	  return bValidateResult;
}