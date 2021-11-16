/// EVEIL	   
if (localStorage.getItem('statut_f_eveil') == null) {
	localStorage.setItem('statut_f_eveil', 'visible');
}
$(document).ready(function () {
	if (localStorage.getItem('statut_f_eveil') == 'hidden') {
		localStorage.setItem('Luke', 'Je suis ton père');
		$('#f_eveil').addClass('f3');
		$('#f_eveil').removeClass('f4');
	}

	if (localStorage.getItem('statut_f_eveil') == 'visible') {
		$('#f_eveil').addClass('f4');
		$('#f_eveil').removeClass('f3');
		$('#f_fdp').addClass('f3');
		$('#f_fdp').removeClass('f4');
		$('#f_gestionnaire').addClass('f3');
		$('#f_gestionnaire').removeClass('f4');
	}


});
$(document).ready(function () {
	$("#f_eveil").on("click", "#trigger", function () {
		if (localStorage.getItem('statut_f_eveil') == 'visible') {
			localStorage.setItem('statut_f_eveil', 'hidden');
			$('#f_eveil').addClass('f3');
			$('#f_eveil').removeClass('f4');
		} else {
			localStorage.setItem('statut_f_eveil', 'visible');
			localStorage.setItem('statut_f_fdp', 'hidden');
			localStorage.setItem('statut_f_gestion', 'hidden');
			$('#f_eveil').addClass('f4');
			$('#f_eveil').removeClass('f3');
			$('#f_fdp').addClass('f3');
			$('#f_fdp').removeClass('f4');
			$('#f_gestionnaire').addClass('f3');
			$('#f_gestionnaire').removeClass('f4');
		}
	});

});

/// HOVER CODEX
$(document).ready(function () {
	$(".f1").on("hover", "#lien-univers", function () {
		$('#lien-univers').addClass('active');
		$('#lien-annexes').removeClass('active');
		$('#lien-intrigues').removeClass('active');
		$('#lien-regles').removeClass('active');
	});
	$(".f1").on("hover", "#lien-annexes", function () {
		$('#lien-univers').removeClass('active');
		$('#lien-annexes').addClass('active');
		$('#lien-intrigues').removeClass('active');
		$('#lien-regles').removeClass('active');
	});
	$(".f1").on("hover", "#lien-intrigues", function () {
		$('#lien-univers').removeClass('active');
		$('#lien-annexes').removeClass('active');
		$('#lien-intrigues').addClass('active');
		$('#lien-regles').removeClass('active');
	});
	$(".f1").on("hover", "#lien-regles", function () {
		$('#lien-univers').removeClass('active');
		$('#lien-annexes').removeClass('active');
		$('#lien-intrigues').removeClass('active');
		$('#lien-regles').addClass('active');
	});
	$(".staff-icon").hover(
		function () {
			$(".pa-news").addClass("hoverHide");
		},
		function () {
			$(".pa-news").removeClass("hoverHide");
		}
	);

});
/// COULEUR GROUPES
$(document).ready(function () {

	groupMod('#FCFCFC', 'architecte');
	groupMod('#1691B3', 'pretresse');
	groupMod('#465CD6', 'hierophante');
	groupMod('#5D3DB3', 'lune');
	groupMod('#DB2C86', 'amoureux');
	groupMod('#EB5252', 'tyran');
	groupMod('#B0AEB0', 'mat');
	groupMod('#D6A41C', 'soleil');
	groupMod('#3DB857', 'justice');
	groupMod('#62AB61', 'jugement');
	groupMod('#B35480', 'temperance');
	groupMod('#191A1A', 'asn');
	groupMod('#4A4C4D', 'mort');


	function groupMod(color, classname) {
		$('a:has(span[style="color:' + color + '"])').addClass(classname);
		$('.mod-recent-author:has(span[style="color:' + color + '"])').addClass(classname);
	};


	$.each(_userdata, function (key, value) {
		$(".js-" + key).html(value);
	});

	$(".mod-recent-row").parent(".module").addClass('sip-last-posts');
	$(".mod-login").parent(".module").addClass('sip-login');
	$("#autologin").parent("p").addClass('sip-login-auto');
	$("#username").parent("p").addClass('sip-login-username');
	$("#password").parent("p").addClass('sip-login-pw');
	$(".new-message").parents("li").addClass('navbar-message');
	$("#i_icon_mini_message").parents("li").addClass('navbar-message');
	$(".consistoire").parents(".postprofile").addClass('consistoire');
	$("#rank-admin").parent(".postprofile-name").addClass('test');

});
/// CONDITIONS / PAGES
$(document).ready(function () {
	$(".sip-profil--rang img").parent(".sip-profil--rang").removeClass('hide');

	if ($('.new-message').length) {
		$(".navbar-newmessage span").html("Ya du nouveau !");
	}

	if ($('#topic-list-box').length) {
		$("forum").addClass("hide");
		$("#sip-index-box").attr('id', '');
		$(".categorie").removeClass('categorie');

	}
	if ($('.sip-preview').length) {
		$(".post-admin").parents(".post").addClass('post-2');
		$(".presentation").parents("#preview").addClass('post-3');
		$(".ft").parents(".post").addClass('ft');
	}
	if ($('#post-box').length) {
		$("forum").addClass("hide");
		$(".categorie").removeClass('categorie');
		$(".postprofile-name .asn").parents(".post").addClass('asn');
		$(".postprofile-name .pretresse").parents(".post").addClass('pretresse');
		$(".postprofile-name .hierophante").parents(".post").addClass('hierophante');
		$(".postprofile-name .temperance").parents(".post").addClass('temperance');
		$(".postprofile-name .lune").parents(".post").addClass('lune');
		$(".postprofile-name .soleil").parents(".post").addClass('soleil');
		$(".postprofile-name .tyran").parents(".post").addClass('tyran');
		$(".postprofile-name .justice").parents(".post").addClass('justice');
		$(".postprofile-name .jugement").parents(".post").addClass('jugement');
		$(".postprofile-name .amoureux").parents(".post").addClass('amoureux');
		$(".postprofile-name .mat").parents(".post").addClass('mat');
		$(".postprofile-name .architecte").parents(".post").addClass('architecte');
		$(".postprofile-name .mort").parents(".post").addClass('mort');
		$("dtp").parents("#rpg-race").addClass('dtp');
		$("dtp").parents(".postprofile-info").addClass('dtp');
		$("pnj").parents("#rpg-race").addClass('pnj');
		$("pnj").parents(".postprofile-info").addClass('pnj');
		$("invite").parents("#rpg-race").addClass('invite');
		$("invite").parents(".postprofile-info").addClass('invite');
		$(".post-admin").parents(".post").addClass('post-2');
		$(".presentation").parents(".post").addClass('post-3');
		$(".ft").parents(".post").addClass('ft');

		$("#rpg-fléau").prevAll("img").addClass('jauge1');
		$("#rpg-intérêt-narration").prevAll("img").addClass('jauge2');
		$("img.jauge1.jauge2:nth-of-type(1)").attr('src', 'https://i.imgur.com/VIb5TvN.png');
		$("img.jauge2:nth-of-type(5)").attr('src', 'https://i.imgur.com/riXAQ60.png');

		$("img.jauge1.jauge2:nth-of-type(4)").attr('src', 'https://i.imgur.com/PK7fo75.png');
		$("img.jauge2:nth-of-type(8)").attr('src', 'https://i.imgur.com/PK7fo75.png');

		$("img.jauge1.jauge2:nth-of-type(3)").attr('src', 'https://i.imgur.com/wUjeAcJ.png');
		$("img.jauge1.jauge2:nth-of-type(2)").attr('src', 'https://i.imgur.com/yx1g63z.png');
		$("img.jauge2:nth-of-type(6)").attr('src', 'https://i.imgur.com/yx1g63z.png');
		$("img.jauge2:nth-of-type(7)").attr('src', 'https://i.imgur.com/wUjeAcJ.png');

		$(".postprofile-avatar a[href~='/u80']").parents(".post").addClass('pnj');


	}


	$(this).find('div[id=fa_toolbar]').attr('id', 'fa_toolbar2');
	$(this).find('span[id=fa_left]').attr('id', 'caca');
	$(this).find('div[id=fa_search]').addClass('hide');
	$(this).find('span[id=fa_share]').addClass('hide');
	$(this).find('span[class=fa_tbMainElement]').attr('class', 'hide');
});
/// POLISSON
$(document).ready(function () {
	if ($('#polisson').length) {
		$(".sip-navbar").remove();
		$(".sip-navbar").remove();
		$(".fa_fix").remove();
		$(".page-header-txt").remove();
		$(".headerbar").remove();
	}

	if (_userdata["user_level"] == 0) {
		$('.vote').remove();
	}
	if (_userdata["user_level"] == 1) {
		$('.vote').addClass('test');
	}
});
/// SCROLL SMOOTH
$(document).ready(function () {
	$('.js-scrollTo').on('click', function () { // Au clic sur un élément
		var page = $(this).attr('href'); // Page cible
		var speed = 500; // Durée de l'animation (en ms)
		$('html, body').animate({
			scrollTop: $(page).offset().top
		}, speed); // Go
		return false;
	});
});

/// BOUTONS
//// POLL
$(document).ready(function () {
	$(".pollbutton").on("click", function () {
		if ($('.pollbutton').hasClass('active')) {
			$('.pollbox').removeClass('show');
			$('.pollbutton').removeClass('active');
		} else {
			$('.pollbox').addClass('show');
			$('.pollbutton').addClass('active');
		}
	});
});
//// DICE
$(document).ready(function () {
	$(".dicebutton").on("click", function () {
		if ($('.dicebutton').hasClass('active')) {
			$('.dicebox').removeClass('show');
			$('.dicebutton').removeClass('active');
		} else {
			$('.dicebox').addClass('show');
			$('.dicebutton').addClass('active');
		}
	});
});
$(document).ready(function () {
	$("#forum_rules").on("click", function () {
		if ($('.dicebutton').hasClass('active')) {
			$('.dicebox').removeClass('show');
			$('.dicebutton').removeClass('active');
		} else {
			$('.dicebox').addClass('show');
			$('.dicebutton').addClass('active');
		}
	});
});
//// OPTIONS
$(document).ready(function () {
	if (localStorage.getItem('statut_pb_options') == null) {
		localStorage.setItem('statut_pb_options', 'visible');
	}
	if (localStorage.getItem('statut_pb_options') == 'hidden') {
		$('.optionsbox').removeClass('show');
		$('.optionsbutton').removeClass('active');

	}
	if (localStorage.getItem('statut_pb_options') == 'visible') {
		$('.optionsbox').addClass('show');
		$('.optionsbutton').addClass('active');

	}

	$(".optionsbutton").on("click", function () {
		if ($('.optionsbutton').hasClass('active')) {
			$('.optionsbox').removeClass('show');
			$('.optionsbutton').removeClass('active');
			localStorage.setItem('statut_pb_options', 'hidden')
		} else {
			$('.optionsbox').addClass('show');
			$('.optionsbutton').addClass('active');
			localStorage.setItem('statut_pb_options', 'visible')
		}
	});
});
/// RANDOM POST ADMIN
$(document).ready(function () {
	$(function () {
		var a = [
			"https://i.imgur.com/JCc6tpe.jpeg",
			"https://i.imgur.com/mfBn4CN.png",
			"https://i.imgur.com/8oKzMhA.jpeg",
			"https://i.imgur.com/vfIIRaB.png",
			"https://i.imgur.com/GDoPiiv.png",
			"https://i.imgur.com/UTPtY8t.jpeg",
			"https://i.imgur.com/F7sD2X8.jpeg",
			"https://i.imgur.com/UIJOCvM.jpeg",
			"https://i.imgur.com/YvPN3Hv.jpeg",
			"https://i.imgur.com/2o46nI4.jpeg",
			"https://i.imgur.com/w3Hfj86.jpeg",
			"https://i.imgur.com/V62KCKR.jpeg",
			"https://i.imgur.com/zJj9B2h.jpeg",
			"https://i.imgur.com/JB7xMPG.jpeg",
			"https://i.imgur.com/ClOAsmV.png"

		];

		$(".img-footer img").attr("src", a[Math.floor(Math.random() * a.length)])
		$(".img-header img").attr("src", a[Math.floor(Math.random() * a.length)])

	});

	$(function () {
		var a = [
			"url(https://i.imgur.com/cjdTcI9.png)",
			"url(https://i.imgur.com/xyEvemz.png)"
		];

		$(".headerbar").css("background-image", a[Math.floor(Math.random() * a.length)])

	});

});
//// GENERIQUE


/// COULEURS TITRE


/// RESUMES
$(document).ready(function () {
	$("#resume").on("click", function () {
		if ($('#resume').hasClass('active')) {
			$('.content').removeClass('resume');
			$('#resume').removeClass('active');
		} else {
			$('.content').addClass('resume');
			$('#resume').addClass('active');
		}
	});
});

/// NAVBAR MESSAGE
$(document).ready(function () {
	$(".navbar-message").hover(
		function () {
			$(".navbar-newmessage").addClass("show");
		},
		function () {
			$(".navbar-newmessage").removeClass("show");
		}
	);
});
/// ONGLETS
$(document).ready(function () {
	$("#btn-info").on("click", function () {
		$('.btn-active').removeClass('btn-active');
		$('.tab-active').removeClass('tab-active');
		$('#btn-info').addClass('btn-active');
		$('#tab-info').addClass('tab-active');
	});
	$("#btn-comp").on("click", function () {
		$('.btn-active').removeClass('btn-active');
		$('.tab-active').removeClass('tab-active');
		$('#btn-comp').addClass('btn-active');
		$('#tab-comp').addClass('tab-active');
	});
	$("#btn-inventaire").on("click", function () {
		$('.btn-active').removeClass('btn-active');
		$('.tab-active').removeClass('tab-active');
		$('#btn-inventaire').addClass('btn-active');
		$('#tab-inventaire').addClass('tab-active');
	});
	$("#btn-shop").on("click", function () {
		$('.btn-active').removeClass('btn-active');
		$('.tab-active').removeClass('tab-active');
		$('#btn-shop').addClass('btn-active');
		$('#tab-shop').addClass('tab-active');
	});
});
/// JAUGES
$(document).ready(function () {
	$("#rpg-fléau-bar img").addClass('jauge1');
	$("#rpg-intérêt-narration-bar img").addClass('jauge2');
	$("img.jauge1:nth-of-type(1)").attr('src', 'https://i.imgur.com/VIb5TvN.png');
	$("img.jauge2:nth-of-type(1)").attr('src', 'https://i.imgur.com/riXAQ60.png');

	$("img.jauge1:nth-of-type(4)").attr('src', 'https://i.imgur.com/PK7fo75.png');
	$("img.jauge2:nth-of-type(4)").attr('src', 'https://i.imgur.com/PK7fo75.png');

	$("img.jauge1:nth-of-type(3)").attr('src', 'https://i.imgur.com/wUjeAcJ.png');
	$("img.jauge1:nth-of-type(2)").attr('src', 'https://i.imgur.com/yx1g63z.png');
	$("img.jauge2:nth-of-type(2)").attr('src', 'https://i.imgur.com/yx1g63z.png');
	$("img.jauge2:nth-of-type(3)").attr('src', 'https://i.imgur.com/wUjeAcJ.png');
});

/// TOOLTIP
$(document).ready(function () {
	// Tooltip only Text
	$('.masterTooltip').hover(function () {
		// Hover over code
		var title = $(this).attr('title');
		$(this).data('tipText', title).removeAttr('title');
		$('<p class="tooltip"></p>')
			.text(title)
			.appendTo('body')
			.fadeIn('slow');
	}, function () {
		// Hover out code
		$(this).attr('title', $(this).data('tipText'));
		$('.tooltip').remove();
	}).mousemove(function (e) {
		var mousex = e.pageX + 20; //Get X coordinates
		var mousey = e.pageY + 10; //Get Y coordinates
		$('.tooltip')
			.css({
				top: mousey,
				left: mousex
			})
	});
});

/// XP DISPO
$(function () {
    $(".sip-info-profil").each(function () {
    //console.log('début boucle #xp profil');

    let total = $(this).children('.info-content:nth-child(0n+2)').text();
    //console.log('total :' + total);

    let depense = $(this).children('.info-content:nth-child(0n+8)').text();
    //console.log('depense :' + depense);

    let dispo = (total - depense);
    let div = $(this).find('#xpdispo');
    //console.log('dispo :' + dispo);
    $(this).find('#xpdispo').attr('class', dispo);
	document.getElementsByClassName(dispo).innerHTML = dispo;

});
});

/// PNJ
$(document).ready(function () {
    if ($('.pnj_bene').length) {
        $(".postprofile-avatar a[href~='/u80']").parents(".post").removeClass('architecte');
		$(".postprofile-avatar a[href~='/u80']").parents(".post").removeClass('architecte');
		$(".postprofile-name a[href~='/u80']").removeClass('architecte');
    }
    if ($('.pnj_bene.lune').length) {
        $(".postprofile-avatar a[href~='/u80']").parents(".post").addClass('lune');
		$(".postprofile-name a[href~='/u80']").addClass('lune');
    }
    if ($('.pnj_bene.tyran').length) {
        $(".postprofile-avatar a[href~='/u80']").parents(".post").addClass('tyran');
		$(".postprofile-name a[href~='/u80']").addClass('tyran');
    }
    if ($('.pnj_bene.pretresse').length) {
        $(".postprofile-avatar a[href~='/u80']").parents(".post").addClass('pretresse');
		$(".postprofile-name a[href~='/u80']").addClass('pretresse');
    }
    if ($('.pnj_bene.hierophante').length) {
        $(".postprofile-avatar a[href~='/u80']").parents(".post").addClass('hierophante');
		$(".postprofile-name a[href~='/u80']").addClass('hierophante');
    }
    if ($('.pnj_bene.justice').length) {
        $(".postprofile-avatar a[href~='/u80']").parents(".post").addClass('justice');
		$(".postprofile-name a[href~='/u80']").addClass('justice');
    }
    if ($('.pnj_bene.jugement').length) {
        $(".postprofile-avatar a[href~='/u80']").parents(".post").addClass('jugement');
		$(".postprofile-name a[href~='/u80']").addClass('jugement');
    }
    if ($('.pnj_bene.temperance').length) {
        $(".postprofile-avatar a[href~='/u80']").parents(".post").addClass('temperance');
		$(".postprofile-name a[href~='/u80']").addClass('temperance');
    }
    if ($('.pnj_bene.amoureux').length) {
        $(".postprofile-avatar a[href~='/u80']").parents(".post").addClass('amoureux');
		$(".postprofile-name a[href~='/u80']").addClass('amoureux');
    }
    if ($('.pnj_bene.soleil').length) {
        $(".postprofile-avatar a[href~='/u80']").parents(".post").addClass('soleil');
		$(".postprofile-name a[href~='/u80']").addClass('soleil');
    }
    if ($('.pnj_bene.mat').length) {
        $(".postprofile-avatar a[href~='/u80']").parents(".post").addClass('mat');
		$(".postprofile-name a[href~='/u80']").addClass('mat');
    }
    if ($('.pnj_bene.asn').length) {
        $(".postprofile-avatar a[href~='/u80']").parents(".post").addClass('asn');
		$(".postprofile-name a[href~='/u80']").addClass('asn');
    }

});
/// COMPETENCES
$(document).ready(function () {
    $(".skills").on("click", function () {
		if ($(this).children('.skill__tooltip').hasClass('hide')) {
			$('.skill__tooltip').addClass('hide'); 
        	$(this).children('.skill__tooltip').removeClass('hide'); 
		} else {
			$(this).children('.skill__tooltip').addClass('hide'); 
		}

      
    });
});
/// BLANK
$(document).ready(function () {
	var $cards = $(".carte");
	var $style = $(".cartehover");
	$cards.on("mousemove", function(e) {
	  var $card = $(this);
	  var l = e.offsetX;
	  var t = e.offsetY;
	  var h = $card.height();
	  var w = $card.width();
	  var lp = Math.abs(Math.floor(100 / w * l)-100);
	  var tp = Math.abs(Math.floor(100 / h * t)-100);
	  var bg = `background-position: ${lp}% ${tp}%;`
	  var style = `.card.active:before { ${bg} }`
	  $cards.removeClass("active");
	  $card.addClass("active");
	  $style.css(style);
	}).on("mouseout", function() {
	  $cards.removeClass("active");
	});
});
