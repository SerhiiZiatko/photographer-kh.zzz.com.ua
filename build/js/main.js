$(function(){"use strict";$("header button").click(function(e){var a,o=e.target;console.log($("#headerItemNav")),"headerNavBut"===o.id||"headerNavBut"===o.parentNode.id?($("#headerItemNav").focus(),console.log($("#headerItemNav"))):"headerSocialBut"!==o.id&&"headerSocialBut"!==o.parentNode.id||(a=$("#socialNav"),a.trigger("focus"))}),$("#headerItemNav").focus(function(e){console.log($("#headerItemNav")),$("#headerNav").hasClass("dropDownNav")?$("#headerNav").removeClass("dropDownNav"):$("#headerNav").addClass("dropDownNav")}),$("#headerItemNav").blur(function(e){$("#headerNav").addClass("dropDownNav")}),$("#socialNav").blur(function(e){$(this).addClass("dropDownNav")}),$(".cover").liCover({parent:$("#galleryId li "),position:"absolute",veticalAlign:"middle",align:"center"})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImNsaWNrIiwiZSIsInVsIiwiaWQiLCJ0YXJnZXQiLCJjb25zb2xlIiwibG9nIiwicGFyZW50Tm9kZSIsImZvY3VzIiwidHJpZ2dlciIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImJsdXIiLCJ0aGlzIiwibGlDb3ZlciIsInBhcmVudCIsInBvc2l0aW9uIiwidmV0aWNhbEFsaWduIiwiYWxpZ24iXSwibWFwcGluZ3MiOiJBQUFBQSxFQUFFLFdBQ0YsWUFFQ0EsR0FBRSxpQkFBaUJDLE1BQU8sU0FBU0MsR0FDbEMsR0FDQ0MsR0FER0MsRUFBS0YsRUFBRUcsTUFFWEMsU0FBUUMsSUFBSVAsRUFBRyxtQkFDRCxpQkFBVkksRUFBR0EsSUFBOEMsaUJBQXJCQSxFQUFHSSxXQUFXSixJQUM3Q0osRUFBRyxrQkFBbUJTLFFBQ3RCSCxRQUFRQyxJQUFJUCxFQUFHLG9CQUVHLG9CQUFWSSxFQUFHQSxJQUFpRCxvQkFBckJBLEVBQUdJLFdBQVdKLEtBQ3JERCxFQUFLSCxFQUFHLGNBQ1JHLEVBQUdPLFFBQVEsWUFJYlYsRUFBRyxrQkFBbUJTLE1BQU0sU0FBU1AsR0FFcENJLFFBQVFDLElBQUlQLEVBQUcsbUJBQ1hBLEVBQUUsY0FBY1csU0FBVSxlQUM3QlgsRUFBRSxjQUFjWSxZQUFhLGVBRTdCWixFQUFFLGNBQWNhLFNBQVUsaUJBSTVCYixFQUFHLGtCQUFtQmMsS0FBTSxTQUFTWixHQUNwQ0YsRUFBRSxjQUFjYSxTQUFVLGlCQUczQmIsRUFBRyxjQUFlYyxLQUFNLFNBQVNaLEdBQ2hDRixFQUFHZSxNQUFPRixTQUFVLGlCQU9yQmIsRUFBRSxVQUFVZ0IsU0FDUkMsT0FBUWpCLEVBQUUsa0JBQ1ZrQixTQUFTLFdBQ1RDLGFBQWEsU0FDYkMsTUFBTSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpe1xyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcblx0JChcImhlYWRlciBidXR0b25cIikuY2xpY2soIGZ1bmN0aW9uKGUpe1xyXG5cdFx0dmFyIGlkID0gZS50YXJnZXQsXHJcblx0XHRcdHVsO1xyXG5cdFx0Y29uc29sZS5sb2coJCggXCIjaGVhZGVySXRlbU5hdlwiICkpO1xyXG5cdFx0aWYoIGlkLmlkID09PSBcImhlYWRlck5hdkJ1dFwiIHx8IGlkLnBhcmVudE5vZGUuaWQgPT09IFwiaGVhZGVyTmF2QnV0XCIpe1xyXG5cdFx0XHQkKCBcIiNoZWFkZXJJdGVtTmF2XCIgKS5mb2N1cygpO1xyXG5cdFx0XHRjb25zb2xlLmxvZygkKCBcIiNoZWFkZXJJdGVtTmF2XCIgKSk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKCBpZC5pZCA9PT0gXCJoZWFkZXJTb2NpYWxCdXRcIiB8fCBpZC5wYXJlbnROb2RlLmlkID09PSBcImhlYWRlclNvY2lhbEJ1dFwiICl7XHJcblx0XHRcdHVsID0gJCggXCIjc29jaWFsTmF2XCIgKTtcclxuXHRcdFx0dWwudHJpZ2dlcihcImZvY3VzXCIpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHQkKCBcIiNoZWFkZXJJdGVtTmF2XCIgKS5mb2N1cyhmdW5jdGlvbihlKXtcclxuXHRcdFxyXG5cdFx0Y29uc29sZS5sb2coJCggXCIjaGVhZGVySXRlbU5hdlwiICkpO1xyXG5cdFx0aWYoICQoXCIjaGVhZGVyTmF2XCIpLmhhc0NsYXNzKCBcImRyb3BEb3duTmF2XCIgKSApXHJcblx0XHRcdCQoXCIjaGVhZGVyTmF2XCIpLnJlbW92ZUNsYXNzKCBcImRyb3BEb3duTmF2XCIgKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0JChcIiNoZWFkZXJOYXZcIikuYWRkQ2xhc3MoIFwiZHJvcERvd25OYXZcIiApO1xyXG5cdH0pO1xyXG5cclxuXHJcblx0JCggXCIjaGVhZGVySXRlbU5hdlwiICkuYmx1ciggZnVuY3Rpb24oZSl7XHJcblx0XHQkKFwiI2hlYWRlck5hdlwiKS5hZGRDbGFzcyggXCJkcm9wRG93bk5hdlwiICk7XHJcblx0fSk7XHJcblxyXG5cdCQoIFwiI3NvY2lhbE5hdlwiICkuYmx1ciggZnVuY3Rpb24oZSl7XHJcblx0XHQkKCB0aGlzICkuYWRkQ2xhc3MoIFwiZHJvcERvd25OYXZcIiApO1xyXG5cdH0pO1xyXG5cclxuXHRcclxuXHJcblxyXG5cclxuXHQkKCcuY292ZXInKS5saUNvdmVyKHtcclxuXHQgICAgcGFyZW50OiAkKFwiI2dhbGxlcnlJZCBsaSBcIiksXHJcblx0ICAgIHBvc2l0aW9uOidhYnNvbHV0ZScsXHJcblx0ICAgIHZldGljYWxBbGlnbjonbWlkZGxlJyxcclxuXHQgICAgYWxpZ246J2NlbnRlcidcclxuXHR9KTtcclxuXHJcbn0pOyJdfQ==
