$("a").click(function(event){
	if (this.href="#")
	{
		var mobileDatePicker = document.getElementsByClassName("datepicker medium mdy datepicker_with_icon hasDatepicker")[0]
		var desktopDatePicker = document.getElementsByClassName("datepicker medium mdy datepicker_with_icon hasDatepicker")[1]

		if ($(window).width() > 800) {
			desktopDatePicker.value = mobileDatePicker.value
		} else {
			mobileDatePicker.value = desktopDatePicker.value
		}
	}
});
