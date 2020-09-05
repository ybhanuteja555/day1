function marks()
	 {
	 	var regexp=/^[A-za-z]{2,30}$/;
	 	var phn=/^[1-90-9]{1,10}$/;
		var m1,m2,m3,m4,m5,m6,name;
		var tom=0;
		name=document.sheet.fname.value;
		var num=document.sheet.phnum.value;
		var subj=document.sheet.sub.value;
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
		if(regexp.test(name.value))
			{
				return true;
			}
		else
			{
				alert("name should be only in alphabets");
				return false;
			}
		if (phn.test(num)) {
			return true;
		}
		else
		{
			alert("phn num should not contain alphabets");
			return false;
		}
		if(subj.length>1)
		{
			alert("length should be 1");
			return false;
		}
		else
		{
			alert("length is accepted");
			return true;
		}


	}