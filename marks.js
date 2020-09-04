function marks()
	 {
	var m1,m2,m3,m4,m5,m6;
	var tom=0;
		m1=parseInt(document.sheet.t.value);
		m2=parseInt(document.sheet.e.value);
		m3=parseInt(document.sheet.m.value);
		m4=parseInt(document.sheet.p.value);
		m5=parseInt(document.sheet.b.value);
		m6=parseInt(document.sheet.s.value);
		tom+=m1+m2+m3+m4+m5+m6;
	var avg1=tom/6;
	document.sheet.tm.value=tom;
	document.sheet.avg.value=avg1;

	}