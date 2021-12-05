UI={
  pos:{
	_fold:[4.5,[0,30,160,110],[80,30,240,110],[0,130,120,220],[120,130,240,220]], 
  	_2x2:[3.3,[0,35,120,130],[120,35,240,130],[0,130,120,220],[120,130,240,220]],
 	//_2x2:[3.3,[0,40,120,140],[120,40,240,140],[0,140,120,240],[120,140,240,240]],
	//_2x2:[3.3,[3,0,119,97],[122,0,236,97],[3,100,119,195],[122,100,236,195]],
	//_2x3:[4.5,[0,0,80,80],[80,0,160,80],[160,0,239,80],[0,80,80,160],[80,80,160,160],[160,80,239,160]],
	//_2x3:[4.5,[0,25,80,105],[80,25,160,105],[160,25,239,105],[0,105,80,185],[80,105,160,185],[160,105,239,185]],
	_2x3:[4.5,[0,30,80,110],[80,30,160,110],[160,30,239,110],[0,110,80,190],[80,110,160,190],[160,110,239,190]],
	_4x2:[0,[0,0,119,97]],
	_2x1:[4,[0,40,239,137],[0,140,239,235]],
	_ele:{topS:[0,0,239,30],topS1:[0,0,239,27],top:[0,0,239,40],btmS:[0,220,239,279],btm:[0,210,239,279],btmM:[0,190,239,279],btmL:[0,185,239,279]},
	_ind:{btm:[75,265,165,270],top:[75,12,165,17]},
	_bar:[4.5,[0,195,80,279],[80,200,160,279],[160,195,239,279]],
	_head:2,
	_foot:255,
  },
  btn:{
    c2l:(no,po,txt1,txt2,fclr,bclr)=>{
      "ram";
      let p=(UI.pos[no][po]);
      let x=4+p[2]-((p[2]-p[0])/2);
      let y=p[3]-((p[3]-p[1])/1.5);
	  //w.gfx.setColor(0,0);
      //w.gfx.fillRect(p[0],p[1],p[2],p[3]);
      w.gfx.setColor(0,bclr);
      //w.gfx.fillRect(p[0]+3,p[1]+3,p[2]-3,p[3]-3);
      w.gfx.fillRect(p[0],p[1],p[2],p[3]);

      w.gfx.setColor(1,fclr);
      if (txt2&&txt2!=""){
        w.gfx.setFont("Vector",(p[3]-p[1])/5);	
        w.gfx.drawString(txt1,x-(w.gfx.stringWidth(txt1)/2),y-((p[3]-p[1])/5)); 
        w.gfx.setFont("Vector",(p[3]-p[1])/UI.pos[no][0]);	
        w.gfx.drawString(txt2,x-(w.gfx.stringWidth(txt2)/2),y+((p[3]-p[1])/5));
      }else{  
        w.gfx.setFont("Vector",(p[3]-p[1])/UI.pos[no][0]);	
        w.gfx.drawString(txt1,x-(w.gfx.stringWidth(txt1)/2),y); 
      }
      //if (!set.def.bpp) w.gfx.flip();
	  if (!face[0].btn[no+"_"+po]) TC.on('tc5',(x,y)=>{if (p[0]<x&&x<p[2]&&p[1]<y&&y<p[3]) face[0].btn[no+"_"+po]();});
	  else w.gfx.flip();
    },
    img:(no,po,Img,txt,fclr,bclr,tran)=>{
      "ram";
      let p=(UI.pos[no][po]);
      let x=p[0]+((p[2]-p[0])/UI.pos[no][0]);
      let y=p[1]+((p[3]-p[1])/UI.pos[no][0]);
	  //w.gfx.setColor(0,0);
      //w.gfx.fillRect(p[0],p[1],p[2],p[3]);
      if (!tran){ 
		w.gfx.setColor(0,bclr);
		//w.gfx.fillRect(p[0]+3,p[1]+3,p[2]-3,p[3]-3);
		w.gfx.fillRect(p[0],p[1],p[2],p[3]);
	  }
      w.gfx.setColor(1,fclr);		
	  w.gfx.drawImage(Img,x,set.def.info&&txt?y-14:y);
	  if (set.def.info&&txt) {
    	  //w.gfx.setColor(0,14);
          w.gfx.setFont("Vector",(p[3]-p[1])/5.3);	
		  w.gfx.drawString(txt,(p[2]-((p[2]-p[0])/2))-(w.gfx.stringWidth(txt)/2),p[3]-17); 
	  }
	  Img=-1;
      //if (!set.def.bpp) w.gfx.flip();
	  if (!face[0].btn[no+"_"+po]) TC.on('tc5',(x,y)=>{if (p[0]<x&&x<p[2]&&p[1]<y&&y<p[3]) face[0].btn[no+"_"+po]();});
	  else w.gfx.flip();
	},
    
  }  
};
UI.ele={
	title:(po,txt,fclr,bclr)=>{
		"ram";
		let p=(UI.pos._ele[po]);
		let x=4+p[2]-((p[2]-p[0])/2);
		let y=p[3]-((p[3]-p[1])/1.5);
		w.gfx.setColor(0,bclr);
		w.gfx.fillRect(p[0],p[1],p[2],p[3]);
		w.gfx.setColor(1,fclr);	
		w.gfx.setFont("Vector",(p[3]-p[1])/2);	
		w.gfx.drawString(txt,x-(w.gfx.stringWidth(txt)/2),y-2); 
        if (!set.def.bpp) w.gfx.flip();
	},
	ind:(no,c,t)=>{
		"ram";
		let p=(UI.pos._ind[no?no:"btm"]);
		w.gfx.setColor(0,0);
		w.gfx.fillRect(p[0],p[1],p[2],p[3]);
		let pa=(p[2]-p[0])/t;
		w.gfx.setColor(1,3);	
		w.gfx.fillRect(p[0]+(pa*(c-1)),p[1],p[0]+(pa*c),p[3]);
        if (!set.def.bpp) w.gfx.flip();
	},
	fill:(no,po,clr)=>{
		let p=(UI.pos[no][po]);
		w.gfx.setColor(0,clr);
		w.gfx.fillRect(p[0],p[1],p[2],p[3]);
        if (!set.def.bpp) w.gfx.flip();
	}
};

UI.ntfy={
	simple:(po,txt1,txt2,fclr,bclr,tmot)=>{
			UI.removeAllListeners("ntfy");
			let p=(UI.pos._ele[po]);
			let x=4+p[2]-((p[2]-p[0])/2);
			let y=p[3]-((p[3]-p[1])/1.5);			
			w.gfx.setColor(0,bclr);
			w.gfx.fillRect(p[0],p[1],p[2],p[3]);
			w.gfx.setColor(1,fclr);
			w.gfx.setFont("Vector",(p[3]-p[1])/2);	
			w.gfx.drawString(txt1,x-(w.gfx.stringWidth(txt1)/2),y); 
			if (!set.def.bpp) w.gfx.flip();
			if (UI.ntid) clearTimeout(UI.ntid);
			UI.ntid=setTimeout(function(t){UI.ntid=0;UI.emit('ntfy',"ok");},tmot?tmot:1000);
	},
};
	
UI.icon={	
	bt:require("heatshrink").decompress(atob("mEwwIXUgYFFwAFE4AFE8AFE/AFE/gFE/wFE/4FE74qCgUD54qCg8D44qCh+D4fwAoXDAocD8YRDgPzDocA/YpDgF/Gok/IIkfJokPLIkHFwQFHCIodFFIo1FIIhNFLIplFOIp9FRIqVFUI6tFXIrFFaIrdFdIr/IABY=")),
	plane:require("heatshrink").decompress(atob("lkwwIPMg4FE/AKE4AFDtwEDg1gAocjAgcDnAFDmOAAgUBxgKDjAbChkBwwJC8EMmAEBh8A4IbC+EEjAKDsBCC7/+g//4EN//gv//wFAEgUMgw0DsBQDgQKEkAKDg0EBQfgFYf4FYf8IIMGhhBDoJMDhhMCh0A4YhC4BtDPAOOPAifDgYaCAAMzRwcCPoQABsyvEXQl8AgcPDQcAuD/XABYA=")),
	themes:require("heatshrink").decompress(atob("mEwwIHEgfwAocH/AFDh/8Aocf/wFDn//Aod/Aon//8PAQPBAomDAQMfAQMH//+AoP+BwIFC/gCE+AuB/Ef4AuC+EfwAuC8AFBgIFB4AFBgYFBwAFBFwJGBAoIuCAoQuCAoQuCAonwoAFBGgPgFIQLB4IFBQIJgB4EeRoJgB4Ecg+D/wFBjE/8P8h5XC+H4AoQzB+AFD/lAAoJdBIoIFDKIIFfQIIpDApB+BAoZsBAoX4PAPANIPwAoR1B+CtDcQaHCYAL3CTwIAC")),
	dndOff:require("heatshrink").decompress(atob("mEwwIdag/gEAIFEuAFBhwDBA4MAn18gPAAoP4j8DwEABAMDw4KBBAMBxwiCAQMcEQQCBnACBhgCBFwUYEoQFDgPYMgQlBzAFDg4aCAoMOAokcAok4AolwAongAoZUBAoZUBAoZUBAoZUBAoZdBAoZdBAoZdBAoVgRgMGKwPBRgMDQwODRgiDCgAFBQYQFCj//AAIaBn4FERgQACXYQABEoMYS4RdBAoZdCbYQuBboRPCIoL/TAAo")),
	dndOn:require("heatshrink").decompress(atob("mEwwIdag/gApMOuAFDn18Aof4j4ECgPAgeAAoIDBA4IiCAQIkChwCBEgUMKoQCBjACKBwUcAogaFAv4FEsACBgx8BPQQDBQwaMCTAYFH/4ACAozRNjCOCAo8MJITdHJIYAXA")),
	findPhone:require("heatshrink").decompress(atob("mEwwILIv/+AgUD///4AFBg8//HgAoMGj/4sAFCAQIFfgYFD4EPAofghwFDuEcAoc4nAFDjkw4wFBscMuIFDx1hwwFBAYPjAofG8YdD4/HApPjAqIjEAovHsY1D45BFJopZFMopxFPosHAofwSoq/jAo0HAQL1Cgf//40BAAM87wECAAg")),
	wakeScreen:require("heatshrink").decompress(atob("mEwwJC/AAkPwAECgP//AFCg///4FCj4FBCQU/AoPgAoN/4Ef+AFB/wZBDwMB/gCCgUDBwV+h0HDQU/jkP4AsCvg/Dh/8j5JDAokH/k+Igf4Aoc//E8AoRbBvhhEAoUD//wjAnBwIFBEIRaEn/AgIFDJ4QFIKoQdDAoibDgECbfA=")),
	bri:require("heatshrink").decompress(atob("jEXwIHEhAKCAQcEAgMGAQMCuADB+EAgICEgYCBnYFEBwoXCDoUGiEAhw9DAQ4ABA")),
	torch:require("heatshrink").decompress(atob("mEwwILIgOAAp0EAoMQAoMMAoMwAoMGAoNgAoMDAQPADgcBAooqEADcP///+AFNABcHCIPgKYQFHKYYFHLIYFHFQd/Aol8nwFDngFdvwFDn/+AvX8ApIADA==")),
	settings:require("heatshrink").decompress(atob("mEwwI2zgP/Ao0f////P/nE/AoP9/88ApU4EZYADAooAICg2AApE8/+/G4P4Aon8AoscCIgjLACkf8AFE+CJDz/3/B9CAoP8ApRBBDogFJF4gAsA=")),
	alarm:require("heatshrink").decompress(atob("mEwwIKH/ACBh8Agf+AoN/4EH/+AgH/+EP//AgP//EfAoMDAo38n4dDAoIpCj4FB8E//kHAoPA///wIFBwYFB8AFBGAI0BvkeFQIuBnkcn/wDgM4FgOAgIyC/41CAQIICn4OB/kB4EfAoP4AoMPKAPwAo8H8ABBAo8DAoJ2BAo5EBAYIFF8AFE+AFE/gFC8BMBEYQFBh+DAocHw4fCL4IJBAoZTBL4IFE/inCZAJ3EQYzaBR4abBh4aDU4QFEBYU/AoIXCvwFB3wFBvjbBjwFBXYMAAoQAEA=")),
	cli:require("heatshrink").decompress(atob("mEmwIPMggFEj4FEn+AAonAAongAonwDon4Aon8AocP/wFDg//AocD/4wDgP/GAgFFv42RAokPBZQFFEYovFHYhHBJoZTBL4hlEh5xEFxE///4SoQFDFwIFDFwIFCXIQFCYoUP/5KEAA4")),
	gb:require("heatshrink").decompress(atob("mEwwIFCg4LEh/AAocfAok/Aol/zAFEnwREvwoD43+FAfw/ngFAX8/vwAoX+vP4DgX/uYFEs4RCv4FB84FDh/vAoP/h0f5+AAoMBn+fAoWOn8/CIXAv9/DoXg/xOCv5HB/g1C+H5HYfwuf6JoX5gf2AoeD8hlC/P75AFC/v5QgUH/v8mAFC///L4UDAoJ9CAosBAoKoCAopaB/5kBAqQdFgfwg41D8ABBAqgdEJpA1FII4A==")),
	proxy:require("heatshrink").decompress(atob("mEwwIcZn////+AoIEBAAOAgIFD4EDAofgg/gCgMD+EH4AFBgPwh+AE4X4h4tDvAFFj8DwITBvkegeDD4M8AoPDAoQRBwYRCj4jKGopBFJosD/AFBj/gMopxFPo0PAoIaCEIIrCAqg9CEgQiDH4P8Wgg0CAAM+nwbC//8j5NBg4/BIYKzBApQZBRgojDF447FI4pTFABI")),
	hid:require("heatshrink").decompress(atob("mEwwIOLkAEDgPwAocHAok/AocB/4FDh4FEv4FDgf/AocfAogEBAoQhBApnxAomBAof8JoQ/CAohZDgP8AongAuF9AoZ4BAoaJDAoJ+BAoc/ApSbCMgIFCEAQRCEAQFC4AIEwAUEXgRBBP4IFCZAgFF4DlDEAIFEeIcP/wFDgb9EAAoA="))
	

};
