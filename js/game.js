(() => {
  const root = document.getElementById('undead-game-v3');
  const q = s => root.querySelector(s);
  const canvas = q('#battleCanvas');
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;

  const SHEETS={...window.GAME_ASSETS.sheets};
  
  
  
  
  
  
  
  
  
  
  
  
  
  

const RARE={"hero": {"name": "스켈레톤영웅", "tier": "epic", "hp": 350, "d": 50, "a": 0.75, "v": 65, "r": 30, "cost": [300, 300], "description": "전장에서의 승리를 이끌어왔던 그가 이곳에 합류하게 되었다.", "def": 5}, "darkKnight": {"name": "다크나이트", "tier": "epic", "hp": 700, "d": 25, "a": 1.5, "v": 35, "r": 120, "cost": [250, 650], "description": "전장을 이끄는 믿음직한 다크나이트.", "def": 15}, "cat": {"name": "고양이", "tier": "legendary", "hp": 250, "d": 200, "a": 1, "v": 58, "r": 15, "cost": [100, 100], "description": "귀여운 고양이 등장!", "def": 2}, "boneDragon": {"name": "본드래곤", "tier": "epic", "hp": 900, "d": 150, "a": 3, "v": 12, "r": 45, "cost": [800, 800], "description": "죽었던 드래곤이 흑마법으로 부활하여 생성된 본드래곤. 시체여도 드래곤. 매우 강한 맷집과 위력을 지니고 있다.", "def": 25}, "ailey": {"name": "흑마법사 에일리", "tier": "legendary", "hp": 200, "d": 50, "a": 1, "v": 25, "r": 200, "cost": [275, 200], "description": "스켈레톤을 사랑하는 흑마법사 에일리는 인간들을 배신하기로 했다.", "def": 2}, "fallenFraham": {"name": "타락한 원정대장 프라함", "tier": "legendary", "hp": 700, "d": 90, "r": 45, "v": 12, "a": 1.8, "cost": [500, 300], "source": "knight", "def": 5, "description": "타락한 원정대장 프라함가 전투에 합류합니다."}, "fallenIsaac": {"name": "타락한 견습기사 아이작", "tier": "epic", "hp": 325, "d": 45, "r": 30, "v": 25, "a": 1.5, "cost": [350, 175], "source": "isaac", "def": 3, "description": "타락한 견습기사 아이작가 전투에 합류합니다."}, "fallenSeline": {"name": "타락한 마법사 셀리네", "tier": "legendary", "hp": 750, "d": 55, "r": 180, "v": 8, "a": 1.5, "cost": [750, 400], "source": "seline", "def": 0, "description": "타락한 마법사 셀리네가 전투에 합류합니다."}, "fallenPhil": {"name": "타락한 필", "tier": "legendary", "hp": 750, "d": 50, "r": 50, "v": 35, "a": 0.5, "cost": [1500, 1200], "source": "phil", "def": 0, "description": "타락한 필가 전투에 합류합니다."}, "toyHammer": {"name": "스켈레톤뿅망치", "tier": "legendary", "hp": 400, "d": 5, "r": 40, "v": 40, "a": 1.5, "cost": [150, 150], "def": 0, "description": "스켈레톤뿅망치가 전투에 합류합니다."}};



RARE.goblin={name:'도둑고블린',tier:'epic',hp:150,d:20,a:.5,v:60,r:20,def:3,cost:[200,150],description:'돈욕심이 많은 도둑고블린.'};
const NEW_UNITS={dog:{name:'스켈레톤견',hp:120,d:30,a:.75,v:50,r:25,def:0,cost:[75,0]},cerberus:{name:'스켈레톤삼두견',hp:360,d:30,a:.4,v:40,r:25,def:0,cost:[225,0]},javelin:{name:'스켈레톤투창병',hp:125,d:55,a:1.5,v:25,r:210,def:1,cost:[115,85]}};


NEW_UNITS.observer={name:'스켈레톤옵저버',hp:120,d:10,a:2,v:30,r:20,def:0,cost:[65,65]};

  RARE.fallenIsaac.v=35;RARE.fallenSeline.v=18;
  const MERCENARIES={"shane": {"name": "셰인", "hp": 1800, "d": 140, "a": 1.5, "r": 35, "v": 10, "cost": [500, 300], "def": 2}, "kon": {"name": "콘", "hp": 1200, "d": 80, "a": 0.8, "r": 190, "v": 10, "cost": [400, 250], "def": 0}, "parhan": {"name": "파르한", "hp": 4650, "d": 20, "a": 3, "r": 12, "v": 10, "cost": [600, 250], "def": 10}, "rifren": {"name": "리프렌", "hp": 1350, "d": 55, "a": 1.3, "r": 180, "v": 10, "cost": [400, 350], "def": 0}};
  
  Object.assign(RARE,{"fallen_shane": {"name": "타락한 셰인", "hp": 900.0, "d": 100, "a": 1.5, "r": 35, "v": 20, "cost": [500, 300], "def": 2, "tier": "epic", "source": "shane", "description": "타락한 셰인이 전투에 합류합니다."}, "fallen_kon": {"name": "타락한 콘", "hp": 600.0, "d": 80, "a": 1.8, "r": 190, "v": 20, "cost": [400, 250], "def": 0, "tier": "epic", "source": "kon", "description": "타락한 콘이 전투에 합류합니다."}, "fallen_parhan": {"name": "타락한 파르한", "hp": 1825.0, "d": 20, "a": 3, "r": 12, "v": 20, "cost": [600, 250], "def": 10, "tier": "epic", "source": "parhan", "description": "타락한 파르한이 전투에 합류합니다."}, "fallen_rifren": {"name": "타락한 리프렌", "hp": 675.0, "d": 55, "a": 2, "r": 130, "v": 20, "cost": [400, 350], "def": 0, "tier": "epic", "source": "rifren", "description": "타락한 리프렌이 전투에 합류합니다."}});
  Object.assign(NEW_UNITS,{"invisibleSkeleton": {"name": "투명스켈레톤", "hp": 220, "d": 25, "a": 1.2, "v": 35, "r": 25, "cost": [200, 180], "def": -5}, "cursedHand": {"name": "저주받은 손", "hp": 90, "d": 20, "a": 0.8, "v": 35, "r": 18, "cost": [0, 0], "summonOnly": true, "def": -5}, "fallen_humanAssassin": {"name": "타락한 휴먼어쌔신", "tier": "rare", "source": "humanAssassin", "cost": [200, 150], "hp": 150, "d": 40, "a": 0.9, "v": 58, "r": 35, "def": 0}, "fallen_balloon": {"name": "타락한 휴먼열기구병", "tier": "rare", "source": "balloon", "cost": [350, 250], "hp": 390, "d": 25, "a": 1.05, "v": 23, "r": 160, "def": 15}, "fallen_scout": {"name": "타락한 휴먼정찰병", "tier": "rare", "source": "scout", "cost": [65, 65], "hp": 80, "d": 0, "a": 1, "v": 40, "r": 0, "def": 1}});
Object.assign(NEW_UNITS,{"greatWarrior": {"name": "스켈레톤대전사", "tier": "rare", "hp": 250, "d": 70, "r": 50, "v": 25, "a": 1.5, "cost": [200, 50], "def": 4}, "captain": {"name": "스켈레톤선장", "tier": "rare", "hp": 180, "d": 80, "r": 155, "v": 33, "a": 3, "cost": [300, 100], "def": 2}, "shieldKnight": {"name": "스켈레톤방패기사", "tier": "rare", "hp": 400, "d": 0, "r": 30, "v": 9.8, "a": 1, "cost": [250, 150], "def": 10}, "fallen_grunt": {"name": "타락한 휴먼전사", "tier": "rare", "hp": 87.125, "d": 15, "r": 28, "v": 24, "a": 0.85, "cost": [100, 40], "source": "grunt", "def": 0}, "fallen_archer": {"name": "타락한 휴먼궁수", "tier": "rare", "hp": 69.0625, "d": 17.5, "r": 125, "v": 19, "a": 1.1, "cost": [90, 60], "source": "archer", "def": 0}, "fallen_heavy": {"name": "타락한 휴먼대검병", "tier": "rare", "hp": 104.55, "d": 37.5, "r": 32, "v": 12, "a": 1.4166666666666667, "cost": [140, 90], "source": "heavy", "def": 0}, "fallen_healer": {"name": "타락한 휴먼힐러", "tier": "rare", "hp": 65.34375, "d": 0, "r": 120, "v": 19.2, "a": 4.25, "cost": [150, 150], "source": "healer", "def": 0}, "fallen_cavalry": {"name": "타락한 휴먼기사", "tier": "rare", "hp": 174.25, "d": 45, "r": 35, "v": 36, "a": 0.85, "cost": [250, 150], "source": "cavalry", "def": 0}, "fallen_rifle": {"name": "타락한 휴먼소총수", "tier": "rare", "hp": 70, "d": 28, "r": 200, "v": 22, "a": 1.1, "cost": [150, 100], "source": "rifle", "def": 0}, "fallen_cannon": {"name": "타락한 휴먼대포병", "tier": "rare", "hp": 140, "d": 35, "r": 140, "v": 18, "a": 2, "cost": [200, 125], "source": "cannon", "def": 0}, "fallen_apprentice": {"name": "타락한 휴먼견습기사", "tier": "rare", "hp": 450, "d": 45, "r": 30, "v": 25, "a": 1.5, "cost": [300, 175], "source": "apprentice", "def": 3}});NEW_UNITS.javelin.tier='rare';
  
  

  Object.assign(RARE.toyHammer,{tier:'ex',hp:2000,a:.8,def:5,cost:[500,700]});
  Object.assign(RARE,{laserKai:{name:'레이저_改',tier:'ex',hp:550,d:100,a:.5,r:200,v:7,def:1,cost:[410,330],description:'8초 차징 후 강력한 레이저를 8초 동안 발사합니다. 차징 중 피격 시 취소됩니다.'},fallenRobin:{name:'타락한 로빈 훗',tier:'ex',source:'robin',hp:1750,d:100,a:1,r:200,v:50,def:3,cost:[1200,150],description:'숲의 파수꾼. 점프 사격과 후퇴, 성에서의 회복을 사용합니다.'}});
  for(const [key,b] of Object.entries(MERCENARIES))Object.assign(RARE['fallen_'+key],{hp:b.hp/2,d:b.d,a:b.a,r:b.r});
  Object.assign(RARE.goblin,{hp:200,def:5});Object.assign(NEW_UNITS.observer,{hp:170,v:60});
  Object.assign(RARE,{
    fallenSphinx:{name:'타락한 스핑크스',source:'sphinx',tier:'legendary',hp:4725,d:200,a:1.2,r:50,v:20,def:30,cost:[1500,1000],description:'스핑크스의 광역 공격을 사용합니다.'},
    fallenAnubis:{name:'타락한 아누비스',source:'anubis',tier:'legendary',hp:5750,d:560,a:2,r:200,v:30,def:10,cost:[1200,900],description:'영혼탄으로 범위 100에 피해를 줍니다.'},
    fallenPharaoh:{name:'타락한 파라오',source:'pharaoh',tier:'ex',hp:10000,d:20,a:1.5,r:200,v:15,def:0,cost:[1800,1400],description:'라의 눈과 저주를 사용하며 사망 시 60% 확률로 부활합니다.'}
  });
  NEW_UNITS.fallen_egyptian={name:'타락한 이집트병사',source:'egyptian',tier:'rare',hp:200,d:20,a:1,r:28,v:30,def:0,cost:[160,80]};
  const GROUND=295,FRAMES={};
  const FRAME_W=168,FRAME_H=128,FRAME_X=84,FRAME_FEET=120,UNIT_SCALE=.3;
  // Remove the smooth sheet background once, before finding boundaries between poses.
  function prepareSheet(im,opaque,preserveDark=false,kind=''){
    const c=document.createElement('canvas');c.width=im.width;c.height=im.height;const g=c.getContext('2d',{willReadFrequently:true});g.drawImage(im,0,0);
    const pixels=g.getImageData(0,0,c.width,c.height),d=pixels.data,w=c.width,h=c.height;c.originalPixels=new Uint8ClampedArray(d);
    if(opaque){const seen=new Uint8Array(w*h),queue=new Int32Array(w*h);let head=0,tail=0;
      const smooth=i=>{const a=i*4;if(['shane','kon','parhan','rifren'].includes(kind)){for(const j of [i-1,i+1,i-w,i+w]){if(j<0||j>=w*h)continue;const v=j*4;if(Math.abs(d[a]-d[v])+Math.abs(d[a+1]-d[v+1])+Math.abs(d[a+2]-d[v+2])>24)return false;}return true;}if(['hero','greatWarrior','captain','shieldKnight','axeKnight','phil','phil2','observer','humanAssassin','balloon','scout','invisibleSkeleton'].includes(kind)){const r=d[a],g=d[a+1],b=d[a+2];if(Math.max(r,g,b)>65||Math.max(r,g,b)-Math.min(r,g,b)>24)return false;for(const j of [i-1,i+1,i-w,i+w]){if(j<0||j>=w*h)continue;const v=j*4;if(Math.abs(r-d[v])+Math.abs(g-d[v+1])+Math.abs(b-d[v+2])>40)return false;}return true;}if(preserveDark&&(Math.max(d[a],d[a+1],d[a+2])<12||d[a]-d[a+1]<0||d[a]-d[a+1]>12||d[a+1]-d[a+2]<0||d[a+1]-d[a+2]>12))return false;if(d[a+2]>d[a]+3||d[a]-d[a+2]>25||Math.max(d[a],d[a+1],d[a+2])>125)return false;for(const j of [i-1,i+1,i-w,i+w]){if(j<0||j>=w*h)continue;const b=j*4;if(Math.abs(d[a]-d[b])+Math.abs(d[a+1]-d[b+1])+Math.abs(d[a+2]-d[b+2])>46)return false;}return true;};
      const add=i=>{if(i>=0&&i<w*h&&!seen[i]&&smooth(i)){seen[i]=1;queue[tail++]=i;}};
      for(let x=0;x<w;x++){add(x);add((h-1)*w+x);}for(let y=0;y<h;y++){add(y*w);add(y*w+w-1);}
      while(head<tail){const i=queue[head++];if(i%w)add(i-1);if(i%w<w-1)add(i+1);add(i-w);add(i+w);}
      for(let i=0;i<seen.length;i++)if(seen[i])d[i*4+3]=0;
    }
    for(let i=0;i<d.length;i+=4)if(d[i+3]<55)d[i+3]=0;
    g.putImageData(pixels,0,0);c.pixels=d;c.workerSheet=kind==='worker';c.strictUnit=['shane','knight'].includes(kind);return c;
  }
  function cut(sheet,x,y,w,h,feet,raw=false){
    const c=document.createElement('canvas');c.width=w;c.height=h;const g=c.getContext('2d',{willReadFrequently:true});g.drawImage(sheet,x,y,w,h,0,0,w,h);
    if(raw===true)return c;
    // Discard isolated background flecks; preserve disconnected weapons and effects.
    const image=g.getImageData(0,0,w,h),d=image.data,seen=new Uint8Array(w*h),components=[];
    for(let i=0;i<w*h;i++){if(seen[i]||d[i*4+3]===0)continue;const component=[i];seen[i]=1;for(let k=0;k<component.length;k++){const v=component[k];for(const j of [v%w?v-1:-1,v%w<w-1?v+1:-1,v-w,v+w])if(j>=0&&j<w*h&&!seen[j]&&d[j*4+3]>0){seen[j]=1;component.push(j);}}components.push(component);}
    // Repair enclosed holes from background keying using the untouched source colors.
    if(sheet.originalPixels){const outside=new Uint8Array(w*h),queue=[];const add=i=>{if(i>=0&&i<w*h&&!outside[i]&&d[i*4+3]===0){outside[i]=1;queue.push(i);}};for(let xx=0;xx<w;xx++){add(xx);add((h-1)*w+xx);}for(let yy=0;yy<h;yy++){add(yy*w);add(yy*w+w-1);}for(let k=0;k<queue.length;k++){const i=queue[k];if(i%w)add(i-1);if(i%w<w-1)add(i+1);add(i-w);add(i+w);}for(let i=0;i<w*h;i++)if(!outside[i]&&d[i*4+3]===0){const sx=x+i%w,sy=y+Math.floor(i/w),j=(sy*sheet.width+sx)*4;if(sx>=0&&sx<sheet.width&&sy>=0&&sy<sheet.height&&sheet.originalPixels[j+3]>0){for(let c=0;c<3;c++)d[i*4+c]=sheet.originalPixels[j+c];d[i*4+3]=255;}}}
    const largest=Math.max(0,...components.map(c=>c.length)),body=components.find(c=>c.length===largest)||[];
    const bounds=comp=>{let l=w,r=0,t=h,b=0;for(const i of comp){const xx=i%w,yy=Math.floor(i/w);l=Math.min(l,xx);r=Math.max(r,xx);t=Math.min(t,yy);b=Math.max(b,yy);}return {l,r,t,b};},main=bounds(body);
    for(const comp of components){const z=bounds(comp),gap=Math.max(0,main.l-z.r,z.l-main.r,main.t-z.b,z.t-main.b),edge=z.l<3||z.r>w-4||z.t<2||z.b>h-3;
      if(comp.length<Math.max(6,largest*.004)||(comp!==body&&gap>5&&comp.length<largest*.06)||(comp!==body&&edge&&gap>2&&comp.length<largest*.3)||(sheet.workerSheet&&comp!==body&&edge&&comp.length<largest*.45)||(sheet.strictUnit&&comp!==body&&comp.length<largest*.15))for(const j of comp)d[j*4+3]=0;}

    g.putImageData(image,0,0);if(raw==='clean')return c;
    const out=document.createElement('canvas');out.width=FRAME_W*(sheet.hires?3:1);out.height=FRAME_H*(sheet.hires?3:1);const og=out.getContext('2d');og.imageSmoothingEnabled=false;if(sheet.hires)og.scale(3,3);
    og.drawImage(c,FRAME_X-w*UNIT_SCALE/2,FRAME_FEET-feet*UNIT_SCALE,w*UNIT_SCALE,h*UNIT_SCALE);return out;
  }
  function row(im,edges,y,h,feet){
    // Find the quiet gap near each hand-mapped boundary, rather than using equal cells.
    const corrected=edges.map((x,i)=>{if(!i||i===edges.length-1)return x;let best=x,score=Infinity;for(let xx=Math.max(edges[i-1]+20,x-22);xx<=Math.min(edges[i+1]-20,x+22);xx++){let count=0;for(let yy=y;yy<y+h&&yy<im.height;yy++)if(im.pixels[(yy*im.width+xx)*4+3]>55)count++;const cost=count+Math.abs(xx-x)*.04;if(cost<score){score=cost;best=xx;}}return best;});
    return corrected.slice(0,-1).map((x,i)=>cut(im,x,y,corrected[i+1]-x,h,feet));
  }
  const ready=Promise.all(Object.entries(SHEETS).map(([key,src])=>new Promise((resolve,reject)=>{const source=new Image();source.onload=()=>{try{
    if(key==='background'||key==='extraBackground'||key==='mercenaryBackground'||key==='winterWide'||key==='desertWide'||key==='sphinxDoors'){FRAMES[key]=source;resolve();return;}

    if(key==='egyptian'){const im=source,k=source.width/2048;im.hires=true;im.strictUnit=true;const seq=(xs,y,h)=>xs.slice(0,-1).map((x,i)=>cut(im,Math.round(x*k),Math.round(y*k),Math.round((xs[i+1]-x)*k),Math.round(h*k),Math.round((h-4)*k)));FRAMES[key]={idle:seq([425,600,775,950,1125,1300,1475],0,134),walk:seq([420,595,770,945,1120,1295,1470,1645,1840],145,120),attack:seq([420,595,770,945,1120,1295,1470,1645,1840],275,145),death:seq([420,595,770,945,1120,1295,1475],565,110)};resolve();return;}
    if(key==='pyramid'){FRAMES[key]=prepareSheet(source,true,false,'shane');resolve();return;}
    if(['sphinx','anubis','pharaoh'].includes(key)){
      const im=key==='pharaoh'?source:prepareSheet(source,true,false,'shane');im.hires=true;
      const frame=(x,y,w,h,feet=h-5)=>cut(im,x,y,w,h,feet);
      const seq=(xs,y,h)=>xs.slice(0,-1).map((x,i)=>frame(x,y,xs[i+1]-x,h));
      if(key==='sphinx'){
        // Anchor each pose to the torso and ground, not the varying cell width.
        const anchored=(edges,pivots,y,h,feet)=>edges.slice(0,-1).map((x,i)=>{const w=edges[i+1]-x,f=cut(im,x,y,w,h,feet),out=document.createElement('canvas');out.width=f.width;out.height=f.height;out.getContext('2d').drawImage(f,(x+w/2-pivots[i])*UNIT_SCALE*3,0);return out;});
        const edges=[0,195,390,585,780,975,1170,1365,1536],pivots=[130,320,510,700,890,1080,1270,1460];
        FRAMES[key]={idle:anchored([25,240,450,660,875,1090,1300,1536],[150,365,575,790,1000,1210,1425],0,185,177),walk:anchored([30,230,425,610,790,970,1145,1325,1536],[135,330,520,705,885,1065,1245,1430],195,180,173),attack:anchored(edges,pivots,385,160,151),death:anchored([0,205,415,625,835,1045,1255,1536],[130,335,545,755,965,1175,1385],700,120,110)};
      }
      if(key==='anubis'){FRAMES[key]={idle:seq([395,555,715,875,1035,1195,1355,1536],0,175),walk:seq([395,548,692,830,970,1108,1245,1380,1536],185,150),attack:seq([390,550,710,870,1065],340,160),death:seq([390,570,750,930,1130,1330,1536],655,145)};FRAMES.soul=frame(385,840,130,90);}
      if(key==='pharaoh'){const pose=(edges,anchors,y,h,feet)=>edges.slice(0,-1).map((x,i)=>{const w=edges[i+1]-x,f=cut(im,x,y,w,h,feet),c=document.createElement('canvas');c.width=f.width;c.height=f.height;c.getContext('2d').drawImage(f,(x+w/2-anchors[i])*UNIT_SCALE*3,0);return c;});FRAMES[key]={idle:pose([390,545,695,850,1005,1165,1330,1500],[465,620,775,930,1085,1245,1410],0,145,138),walk:pose([390,545,690,840,985,1135,1285,1420,1580],[470,620,765,915,1065,1215,1360,1505],150,148,135),attack:seq([405,550,700,910,1120,1330,1530,1740],300,145),attack2:seq([405,565,735,910,1090,1270,1460,1760],450,150),death:seq([405,550,690,830,970,1100,1240,1380,1550,1710],615,125)};FRAMES.raEye=cut(source,120,775,80,60,0,true);FRAMES.curse=cut(source,925,775,110,85,0,true);}
      resolve();return;
    }
    if(key==='laserKai'||key==='robin'){
      const im=source, k=source.width/2048, frame=(x,y,w,h,feet=h-5)=>cut(im,Math.round(x*k),Math.round(y*k),Math.round(w*k),Math.round(h*k),Math.round(feet*k));im.hires=true;im.keepDetails=true;
      const seq=(xs,y,h,feet)=>xs.slice(0,-1).map((x,i)=>frame(x,y,xs[i+1]-x,h,feet));
      if(key==='laserKai'){FRAMES[key]={idle:seq([105,210,315,420,525,620,730],0,122,116),walk:seq([850,980,1080,1205,1315,1460,1575,1687,1790,1910,2048],0,125,117),charge:seq([100,215,345,480,610,742,878,1008,1145,1282,1418,1560],132,137,125),attack:[frame(112,282,130,115,109)],death:seq([595,710,825,950,1080,1210,1360,1520],402,131,120)};laserMouthOffset={x:((214-112-130/2)*k)*UNIT_SCALE*1.3,y:((335-282-109)*k)*UNIT_SCALE*1.3};FRAMES.laserBeam=cut(im,Math.round(850*k),Math.round(565*k),Math.round(220*k),Math.round(83*k),0,true);}
      else{FRAMES[key]={idle:seq([105,210,307,405,508,615],0,153,146),walk:seq([728,828,936,1038,1136,1238,1350],0,153,146),attack:seq([115,232,342,462,586,708,820],183,158,151),jump:seq([1020,1145,1265,1390,1517,1650,1770,1910,2048],170,184,177),retreat:seq([875,1047,1216,1407,1593,1750],391,148,140),death:seq([125,242,378,520,690,875],566,110,102)};}
      resolve();return;
    }
    if(key==='robinHut'){FRAMES.robinHut=prepareSheet(source,true,true,'shane');resolve();return;}
    if(key==='forest'){const c=document.createElement('canvas');c.width=source.width;c.height=655;const g=c.getContext('2d');g.drawImage(source,0,0);const pixels=g.getImageData(0,0,c.width,c.height),d=pixels.data;for(let i=0;i<d.length;i+=4){const r=d[i],green=d[i+1],b=d[i+2];if(r>=30&&r<=120&&r-green>=0&&r-green<=12&&green-b>=0&&green-b<=15&&r-b<=22)d[i+3]=0;}g.putImageData(pixels,0,0);FRAMES.forest=c;resolve();return;}
    const im=prepareSheet(source,key!=='soldier',['pirate','darkAssault','assassin','banner','dog','cerberus','javelin','hero','shieldKnight','axeKnight','captain','greatWarrior','phil','phil2'].includes(key),key);
    if(['shane','kon','parhan','rifren'].includes(key)){im.hires=true;im.keepDetails=true;const seven=[0,215,430,645,860,1080,1300,1536],eight=[0,190,380,575,770,960,1150,1340,1536],e=key==='shane'||key==='parhan'?seven:eight;
      const ys=key==='shane'?[0,185,190,165,515,190,865,159]:[0,200,205,185,580,195,790,225];
      FRAMES[key]={idle:row(im,e,ys[0],ys[1],ys[1]-10),walk:row(im,e,ys[2],ys[3],ys[3]-10),attack:row(im,key==='shane'?eight:e,ys[4],ys[5],ys[5]-10),death:row(im,key==='shane'?seven:e,ys[6],ys[7],ys[7]-10)};if(key==='kon')FRAMES[key].attack=[[0,170],[170,145],[315,165],[480,170],[650,195],[945,185],[1130,210],[1340,196]].map(([x,w])=>cut(im,x,580,w,195,185));
      if(key==='parhan')FRAMES[key].death=row(im,[0,185,360,550,750,980,1240,1536],790,225,215);
      if(key==='shane')FRAMES[key].walk=row(im,[0,200,400,600,800,1000,1200,1400],190,153,148);
      if(key==='shane')FRAMES[key].attack=[[0,195],[195,190],[385,190],[715,240],[950,200],[1150,200],[1350,186]].map(([x,w])=>cut(im,x,515,w,190,180));
      resolve();return;}
    if(['humanAssassin','scout','balloon','invisibleSkeleton'].includes(key)){im.hires=true;im.keepDetails=true;const e=[0,190,380,575,770,965,1160,1350,1536];
      if(key==='humanAssassin')FRAMES[key]={idle:row(im,e,0,190,185),walk:row(im,e,200,155,150),attack:row(im,e,540,165,155),death:row(im,e,870,150,145)};
      if(key==='scout'){const walk=row(im,e,290,220,210);FRAMES[key]={idle:row(im,e,20,240,230),walk,attack:walk,death:row(im,[0,200,400,595,790,990,1230,1536],785,220,210)};}
      if(key==='balloon'){const e=[140,330,515,700,885,1070,1255,1536];FRAMES[key]={idle:row(im,e,0,180,170),walk:row(im,e,190,170,160),attack:row(im,[140,320,500,680,860,1040,1220,1390,1536],370,175,165).filter((_,i)=>i!==4),death:row(im,[140,330,515,695,875,1050,1260,1536],745,215,205)};}
      if(key==='invisibleSkeleton'){const e=[150,325,500,675,850,1025,1200,1375,1536];FRAMES[key]={idle:row(im,e,0,140,135),walk:row(im,e,145,130,125),attack:row(im,e,410,135,125),death:row(im,e,680,120,110).slice(0,6)};const hands=row(im,[150,250,350,450,550,650,760],880,65,60);FRAMES.cursedHand={idle:hands,walk:hands,attack:hands,death:[hands.at(-1)]};const left=row(im,[930,1030,1130,1230,1330,1430,1536],880,65,60);FRAMES.cursedHandLeft={idle:left,walk:left,attack:left,death:[left.at(-1)]};}
      resolve();return;}
    if(key==='observer'){im.hires=true;im.keepDetails=true;const e=[130,325,520,715,910,1105,1300,1536];FRAMES.observer={idle:row(im,e,0,160,145),walk:row(im,e,185,130,125),attack:row(im,[130,325,510,680,835,1000,1195,1365,1536],345,135,125).filter((_,i)=>i!==5),death:row(im,[130,320,490,655,820,1000,1190,1370,1536],650,130,125)};resolve();return;}
    if(key==='rifle'||key==='cannon'){if(key==='cannon')FRAMES.cannonExplosion=[cut(im,510,870,105,120,0,'clean'),cut(im,610,850,110,140,0,'clean'),cut(im,720,840,120,150,0,'clean'),cut(im,840,835,130,155,0,'clean'),cut(im,970,850,180,140,0,'clean')];im.hires=true;const edges=[0,205,390,575,760,945,1130,1320,1536];FRAMES[key]={walk:row(im,edges,0,225,215).slice(0,7),attack:row(im,edges,key==='rifle'?270:235,key==='rifle'?195:195,key==='rifle'?185:185).slice(0,4),death:row(im,[0,200,405,605,805,1015,1230,1536],key==='rifle'?750:640,key==='rifle'?210:190,key==='rifle'?200:180)};resolve();return;}
    
    if(['dog','cerberus','goblin','javelin'].includes(key)){im.hires=true;const e=key==='cerberus'?[0,215,425,640,850,1070,1290,1536]:key==='goblin'?[55,240,425,610,795,980,1165,1350,1536]:[0,195,385,575,765,955,1145,1335,1536];
      if(key==='goblin'){FRAMES[key]={idle:row(im,e,45,150,140),walk:row(im,e,220,135,128),attack:row(im,[55,250,455,665,900,1120,1310,1536],540,130,122),death:row(im,[50,240,440,635,820,1020,1240,1536],700,140,130)};}
      else if(key==='javelin'){FRAMES[key]={idle:row(im,e,0,205,195).slice(0,3),walk:row(im,e,235,180,170).slice(0,4),attack:row(im,e,0,205,195).slice(3,7),death:row(im,[0,205,400,600,800,1015,1230,1536],645,195,185)};FRAMES.spear=cut(im,20,890,190,65,0,'clean');}
      else FRAMES[key]={idle:row(im,e,25,170,160),walk:row(im,[0,195,385,575,765,955,1145,1335,1536],440,135,125),attack:row(im,e,230,150,140),death:row(im,[0,205,405,605,805,1005,1220,1536],635,140,130)};
      resolve();return;}
    if(['greatWarrior','captain','shieldKnight','axeKnight','toyHammer','phil','phil2'].includes(key)){im.hires=true;im.keepDetails=true;const e=[0,195,385,575,765,955,1145,1335,1536];
      if(key==='greatWarrior')FRAMES[key]={idle:row(im,e,0,215,205).slice(0,4),walk:row(im,e,230,175,165).slice(0,4),attack:[...row(im,[870,1080,1300,1536],0,215,205),...row(im,[1140,1370,1536],220,185,175)],death:row(im,[0,200,395,590,790,1010,1250,1536],640,190,180)};
      if(key==='captain'){const e=[135,320,510,700,890,1080,1265,1420,1536];FRAMES[key]={idle:row(im,e,0,140,135).slice(0,5),walk:row(im,e,145,130,125).slice(0,5),attack:row(im,e,405,135,130).slice(0,5),death:row(im,[135,320,510,710,910,1110,1320,1536],675,140,130)};}
      if(key==='shieldKnight')FRAMES[key]={idle:row(im,[0,175,350,525,700,875,1050,1250,1450],0,190,180).slice(0,4),walk:row(im,[0,175,350,525,700,875,1050,1230,1390,1536],200,185,175),guard:row(im,[0,185,370,550,730,900,1060,1250,1536],390,180,170),death:row(im,[0,185,360,535,700,885,1100,1310,1536],775,200,190)};
      if(key==='axeKnight')FRAMES[key]={idle:row(im,e,0,170,160),walk:row(im,e,180,145,135),attack:row(im,[0,185,370,550,730,910],490,165,155),death:row(im,[0,190,380,580,780,980,1180,1380,1536],835,155,145)};
      if(key==='toyHammer'){const e=[20,225,430,635,840,1045,1250,1536];const poses=(y,h,feet)=>e.slice(0,-1).map((x,i)=>{const width=e[i+1]-x,f=cut(im,x,y,width,h,feet);if(width!==205){const aligned=document.createElement('canvas');aligned.width=f.width;aligned.height=f.height;aligned.getContext('2d').drawImage(f,(width-205)*UNIT_SCALE*1.5,0);return aligned;}return f;});FRAMES[key]={idle:poses(0,215,205),walk:poses(235,185,175).slice(0,6),attack:poses(430,215,205),death:row(im,[0,215,425,635,845,1055,1265,1536],650,190,180)};}
      if(key==='phil'||key==='phil2'){const e=[130,310,495,680,865,1050,1230,1410,1536];FRAMES[key]={idle:row(im,e,0,140,135).slice(0,7),walk:row(im,e,145,100,95).slice(0,7),attack:row(im,e,355,115,110).slice(0,7),attack2:row(im,[130,325,520,720,940,1170,1370,1536],480,95,90),death:row(im,[130,330,530,730,930,1130,1330,1536],675,95,90)};if(key==='phil2')FRAMES.philWave=cut(im,720,940,140,65,0,'clean');}
      FRAMES[key].attack??=FRAMES[key].guard||FRAMES[key].idle;resolve();return;}
    if(RARE[key]){im.hires=true;im.keepDetails=key==='hero';const defs={hero:{edges:[140,335,535,735,935,1135,1335,1536],walk:[165,140,135],attack:[440,140,135],attack2:[590,110,105],death:[850,135,125]},darkKnight:{edges:[135,340,540,740,940,1140,1340,1536],walk:[165,140,135],attack:[440,165,155],attack2:[615,120,110],death:[880,120,110]},cat:{edges:[390,550,710,865,1020,1180,1340,1536],walk:[140,95,90],attack:[365,105,95],attack2:[485,95,90],death:[850,110,100],skill:[590,115,105]},boneDragon:{edges:[350,520,690,860,1030,1200,1370,1536],walk:[140,110,105],attack:[390,115,110],attack2:[520,140,130],death:[820,135,125]},ailey:{edges:[410,550,695,840,985,1130,1280,1415,1536],walk:[160,115,110],attack:[420,125,115],attack2:[555,135,125],death:[840,140,130]}};const d=defs[key];FRAMES[key]={};for(const mode of ['walk','attack','attack2','death','skill'])if(d[mode])FRAMES[key][mode]=row(im,d.edges,...d[mode]);if(key==='hero'){FRAMES[key].attack=row(im,[140,315,505,690,895,1100,1310,1536],440,140,135).slice(0,3);FRAMES[key].death=row(im,[140,300,490,685,890,1100,1320,1536],850,135,125);}if(key==='ailey'){FRAMES[key].attack=FRAMES[key].attack.slice(0,5);FRAMES[key].attack2=[...FRAMES[key].attack2.slice(0,3),...FRAMES[key].attack2.slice(-2)];}if(key==='boneDragon'){const f=FRAMES[key].attack2;FRAMES[key].attack2=[f[0],f[1],f[2],f[1],f[0]];}FRAMES[key].idle=FRAMES[key].walk;resolve();return;}
    if(key==='pirate'){im.hires=true;const edges=[135,315,500,685,875,1065,1245,1400,1536];FRAMES.pirate={idle:row(im,edges,0,140,135).slice(0,4),walk:row(im,edges,145,130,125).slice(0,5),attack:row(im,edges,410,135,125).slice(0,5),death:row(im,edges,685,140,120)};FRAMES.bomb=cut(im,135,870,65,80,0,'clean');FRAMES.blast=row(im,[790,920,1045,1210,1375,1536],835,145,135);resolve();return;}
    if(key==='barrier'){FRAMES.barrier=cut(im,180,785,220,200,0,'clean');resolve();return;}
    if(key==='magic'){FRAMES.orb05=cut(im,715,135,215,125,0,'clean');FRAMES.orb=[cut(im,40,140,115,110,0,'clean'),cut(im,180,140,130,110,0,'clean'),cut(im,330,140,170,110,0,'clean')];FRAMES.eruption=row(im,[10,265,515,765,1010,1260,1536],445,180,175).concat(row(im,[10,285,540,790,1040,1280,1536],680,240,230));resolve();return;}
    if(key==='seline'){im.hires=true;const edges=[120,320,530,735,940,1140,1345,1536];FRAMES.seline={idle:[cut(im,130,0,180,185,173),cut(im,340,0,180,185,173),cut(im,550,0,180,185,173)],walk:row(im,edges,195,150,140),attack:row(im,edges,355,150,140),cast:row(im,edges,515,165,150),death:row(im,edges,845,160,140)};resolve();return;}
    if(key==='darkAssault'){im.hires=true;FRAMES.darkAssault={walk:row(im,[125,335,530,725,925,1120,1320,1536],170,125,120).slice(0,3),attack:row(im,[125,280,445,600,795,975,1150,1325,1536],440,125,120).slice(0,3),death:row(im,[125,300,475,650,825,1010,1185,1360,1536],845,140,130)};resolve();return;}
    if(key==='forest'||key==='mine'){FRAMES[key]=cut(im,0,0,im.width,key==='forest'?655:610,0,true);resolve();return;}
    if(key==='castles'){
      FRAMES.skeletonCastle=[[15,5,520,390],[540,5,420,390],[975,80,440,315]].map(([x,y,w,h])=>cut(im,x,y,w,h,h,true));FRAMES.skeletonCastle[0].getContext('2d').clearRect(0,0,270,72);
      FRAMES.humanCastle=[[10,470,525,355],[545,470,410,355],[975,470,440,355]].map(([x,y,w,h])=>cut(im,x,y,w,h,h,'clean'));FRAMES.humanCastle[0].getContext('2d').clearRect(0,0,270,36);resolve();return;
    }
    const nine=[0,185,350,515,680,845,1000,1180,1360,1536],death=[0,205,405,600,805,1010,1270,1536];
    if(key==='knight'){
      const frame=(x,y,w,h,feet,anchor)=>{const raw=cut(im,x,y,w,h,feet,'clean'),c=document.createElement('canvas');c.width=480;c.height=300;const g=c.getContext('2d');g.imageSmoothingEnabled=false;g.drawImage(raw,240-anchor*1.1,280-feet*1.1,w*1.1,h*1.1);return c;};
      const edges=[120,300,485,680,865,1055,1230,1415,1536];const poses=(y,h,feet,count=7)=>edges.slice(0,count).map((x,i)=>frame(x,y,edges[i+1]-x,h,feet,(edges[i+1]-x)/2));
      const mapped=(edges,anchors,y,h,feet)=>anchors.map((a,i)=>frame(edges[i],y,edges[i+1]-edges[i],h,feet,a-edges[i]));
      FRAMES.knight={idle:poses(0,140,135),walk:mapped([115,310,500,695,875,1050,1220,1390,1536],[210,410,610,800,990,1160,1325,1470],146,132,127),attack:mapped([115,310,500,690,890,1100,1260,1410,1536],[210,410,610,810,1010,1185,1350,1485],414,129,124),death:mapped([125,320,515,710,905,1110,1310,1536],[220,420,610,795,1000,1200,1420],820,160,135)};resolve();return;
    }
    if(key==='isaac'){im.hires=true;const edges=[130,310,495,680,865,1055,1230,1415,1536];FRAMES.isaac={idle:row(im,edges,0,125,120),walk:row(im,edges,135,115,110),attack:row(im,edges,375,110,105),guard:row(im,edges,615,110,105),death:row(im,[130,310,500,685,870,1055,1270,1536],850,125,115)};resolve();return;}
    if(key==='banner'){
      im.hires=true;const bounds=[82,250,425,605,780,955,1130,1310,1536],anchors=[205,385,560,740,915,1090,1270,1450];const walk=anchors.map((anchor,i)=>{const raw=cut(im,bounds[i],320,bounds[i+1]-bounds[i],295,285,'clean'),c=document.createElement('canvas');c.width=FRAME_W*3;c.height=FRAME_H*3;const g=c.getContext('2d');g.scale(3,3);g.drawImage(raw,FRAME_X-(anchor-bounds[i])*.3,FRAME_FEET-285*.3,raw.width*.3,raw.height*.3);return c;});FRAMES[key]={idle:row(im,bounds,0,310,295).slice(0,3),walk,attack:[walk[0]],death:row(im,[80,250,415,580,750,935,1130,1310,1536],645,305,290)};
    }else if(key==='heavyShield'){
      FRAMES[key]={walk:row(im,[0,220,430,645,865,1080,1310,1536],225,205,190),guard:row(im,[0,220,450,700,960,1210,1536],435,180,170),death:row(im,[0,215,420,625,840,1060,1280,1536],805,205,175)};FRAMES[key].attack=FRAMES[key].guard;
    }else if(key==='assassin'){im.hires=true;
      FRAMES[key]={walk:row(im,[0,220,440,655,875,1090,1310,1536],235,195,183),attack:row(im,[0,290,535,735,1005,1260,1536],430,200,190),death:row(im,[0,285,540,775,1010,1210,1380,1536],805,200,175).reverse()};
    }else if(key==='heavy'){
      FRAMES[key]={walk:row(im,[0,248,465,700,930,1175,1536],240,170,163),attack:row(im,[1000,1265,1536],412,220,212),death:row(im,[0,190,370,605,790,1005,1245,1536],815,195,180)};
    }else if(key==='healer'){
      FRAMES[key]={idle:[cut(im,0,0,175,225,215)],walk:row(im,[0,185,350,520,690,860,1030,1200,1360,1536],235,190,185),attack:row(im,[0,155,330,500],425,260,250),death:row(im,[0,185,365,555,750,965,1220,1536],850,160,145)};
    }else if(key==='worker'){
      const walk=row(im,[0,180,345,510,680,850,1000],250,220,198),attack=row(im,[1000,1180,1360,1536],250,220,198),wood=row(im,[0,180,330,465,615,775,925],740,205,193),coal=row(im,[660,865,1060,1270],490,220,195);
      FRAMES.wood={walk:wood,attack:[cut(im,925,800,180,150,133)],carry:wood,syntheticDeath:true};FRAMES.coal={walk,attack,carry:coal,syntheticDeath:true};
    }else if(key==='human'){
      FRAMES[key]={walk:row(im,[0,200,400,590,790,980,1170,1360,1536],0,235,218),attack:row(im,[960,1230,1536],250,225,208),death:row(im,death,725,280,200)};
    }else if(key==='humanArcher'){
      FRAMES[key]={walk:row(im,[0,185,355,530,700,870,1040,1210,1380,1536],0,235,218),attack:row(im,[0,220,425,635,840,1055,1310,1536],250,225,208),death:row(im,death,725,280,200)};
    }else if(key==='shield'){
      FRAMES[key]={walk:row(im,[0,195,365,540,715,890,1060],250,225,202),attack:[cut(im,890,250,170,225,202)],guard:row(im,[1080,1290,1536],490,220,200),death:row(im,death,725,280,200)};
    }else if(key==='warrior'){
      FRAMES[key]={walk:row(im,[0,195,370,540,725,940],250,225,202),attack:row(im,[930,1170,1385,1536],250,225,202),death:row(im,death,725,280,215)};
    }else if(key==='crossbow'){
      FRAMES[key]={walk:row(im,[0,195,365,540,715,890,1020],250,225,202),attack:row(im,[1010,1200,1400],250,225,202),death:row(im,death,725,280,200)};
    }else{
      const poses=row(im,nine,250,225,200);FRAMES[key]={walk:poses.slice(0,6),attack:poses.slice(6),death:row(im,death,725,280,215)};
    }
    resolve();}catch(e){reject(e);}};source.onerror=reject;source.src=src;})));
  function drawSprite(type,u,flip=false){if(u.coffinUntil){const frames=FRAMES.pharaoh?.death;if(frames)ctx.drawImage(frames[frames.length-1],u.x-84,GROUND-128,168,128);return;}const originalType=type;const source=RARE[type]?.source||NEW_UNITS[type]?.source;if(source){type=source==='phil'?(u.phase===2?'phil2':'phil'):enemySprite(source);flip=source!=='scout';}if(type==='robin'&&u.retreatTo!==undefined)flip=!flip;if(type==='pharaoh'&&u.facing===1)flip=!flip;if(originalType==='shieldKnight'&&u.axeForm)type='axeKnight';if(originalType==='phil'&&u.phase===2)type='phil2';if(originalType==='cursedHand'&&u.handSide==='left')type='cursedHandLeft';
    const f=FRAMES[type];if(!f)return;let frames,idx;
    const now=S?.time||0, previous=u._motion;
    const moved=previous?Math.abs(u.x-previous.x)>.005:!u.stationary;
    let state='idle',oneShot=false,duration=1;
    if(u.death!==undefined){state='death';oneShot=true;duration=1;}
    else if(u.type==='cat'&&now<(u.reviveUntil||0)){state='skill';duration=.7;}
    else if(now<(u.guardUntil||0)||(u.guard>0&&!(u.attack>0))){state='guard';duration=.7;}
    else if(u.attack>0||u.phase==='work'){state=(u.attack2&&f.attack2)?'attack2':type==='seline'&&u.castKind==='earth'?'cast':'attack';oneShot=u.phase!=='work';duration=type==='pirate'?.7:type==='healer'?.8:Math.max(.2,u.a||.8);}
    else if(moved){state=u.carry&&f.carry?'carry':'walk';duration=Math.max(.42,Math.min(1.05,34/Math.max(15,u.v||25)));}
    if(u.type==='laserKai'&&u.death===undefined){if(u.beamRemaining>0){state='attack';oneShot=false;}else if(u.charge>0){state='charge';oneShot=false;}}if((u.type==='robin'||u.type==='fallenRobin')&&u.death===undefined){if(u.jumpAge!==undefined)state='jump';else if(u.retreatTo!==undefined)state='retreat';}
    const frozen=(S.desert&&['reveal','quiz','speech','pan','death'].includes(S.desert.phase))||S.time<(u.desertWake||0)||bossIntroActive()||(u.type==='isaac'&&now<(u.wakeAt||0));if(frozen){state='idle';oneShot=false;}
    frames=f[state]||f.idle||f.walk;if(!frames?.length)return;
    const reset=!previous||previous.state!==state||(oneShot&&(u.attack||0)>(previous.attack||0)+.025)||now<previous.at;
    const start=reset?now:previous.start,elapsed=u.death!==undefined?u.death:Math.max(0,now-start);
    // Advance the gait in source order, synchronized with actual ground travel.
    let phase=elapsed/duration;
    if(oneShot)idx=Math.min(frames.length-1,Math.floor(phase*frames.length));
    else if(state==='walk'||state==='carry'){const distance=(previous?.distance||0)+(previous?Math.abs(u.x-previous.x):0);phase=distance/Math.max(18,(u.v||25)*.72);idx=Math.floor(phase*frames.length)%frames.length;}
    else idx=Math.floor(phase*frames.length)%frames.length;
    if((type==='toyHammer'||type==='sphinx'||type==='pharaoh')&&(state==='attack'||state==='attack2')){phase=Math.max(0,1-(u.attack||0)/u.a);idx=Math.min(frames.length-1,Math.floor(phase*frames.length));}if(state==='charge')idx=Math.min(frames.length-1,Math.floor((u.charge||0)/8*frames.length));if(state==='jump')idx=Math.min(frames.length-1,Math.floor((u.jumpAge||0)/.5*frames.length));if(frozen)idx=0;
    u._motion={state,start,at:now,x:u.x,attack:u.attack||0,distance:(previous?.distance||0)+(previous?Math.abs(u.x-previous.x):0)};
    ctx.save();if(u.potion&&!(u.potion==='gold'&&S.time>=(u.invincibleUntil||0))){ctx.filter=u.potion==='red'?'sepia(1) saturate(5) hue-rotate(315deg)':u.potion==='blue'?'sepia(1) saturate(5) hue-rotate(160deg)':'sepia(1) saturate(4) hue-rotate(5deg)';}if(isHidden(u)&&!((u.revealedUntil||0)>S.time))ctx.globalAlpha=.32;ctx.translate(u.x,GROUND-(type==='balloon'?118:type==='observer'?78:0)-(u.jumpAge!==undefined?Math.sin(Math.min(1,u.jumpAge/.5)*Math.PI)*40:0));if(type==='observer'&&u.facing===-1||type==='scout'&&u.facing===1)ctx.scale(-1,1);if(RARE[type]){const z=type==='boneDragon'?3.06:type==='cat'?1.4:type==='darkKnight'?1.755:type==='hero'||type==='ailey'?1.56:1.3;ctx.scale(z,z);}if(type==='assassin'&&u.facing===-1)ctx.scale(-1,1);if(type==='banner')ctx.scale(1.5,1.5);if(type==='knight')ctx.scale(u.type==='cavalry'||originalType==='fallen_cavalry'?.48:.5,u.type==='cavalry'||originalType==='fallen_cavalry'?.48:.5);if(type==='scout')ctx.scale(.85,.85);if(type==='balloon')ctx.scale(1.7,1.7);if(type==='invisibleSkeleton')ctx.scale(1.3,1.3);if(originalType==='knight'&&u.type==='knight'&&stageNo===10)ctx.scale(1.25,1.25);if(type==='heavy')ctx.scale(1.2,1.2);if(type==='seline'){ctx.translate(0,-8+(bossIntroActive()?0:Math.sin((S?.time||0)*3)*2));ctx.scale(1.7122,1.7122);}if(type==='darkAssault')ctx.scale(1.4,1.4);if(type==='pirate')ctx.scale(1.45,1.45);if(type==='isaac')ctx.scale(1.6,1.6);if(type==='phil'||type==='phil2')ctx.scale(2.08,2.08);if(originalType==='fallenSeline')ctx.scale(.85,.85);if(SPRITE_SIZE[type])ctx.scale(SPRITE_SIZE[type],SPRITE_SIZE[type]);if(flip)ctx.scale(-1,1);
    if(u.potion&&u.death===undefined&&!(u.potion==='gold'&&S.time>=(u.invincibleUntil||0))){ctx.save();ctx.filter='none';ctx.strokeStyle=u.potion==='red'?'#ff4242':u.potion==='blue'?'#45baff':'#ffdc43';ctx.lineWidth=3;ctx.beginPath();ctx.ellipse(0,-4,19,6,0,0,Math.PI*2);ctx.stroke();ctx.fillStyle=ctx.strokeStyle;ctx.font='bold 10px sans-serif';ctx.textAlign='center';ctx.restore();}
    if(u.death!==undefined){ctx.globalAlpha=Math.min(1,(1.3-u.death)*3);if(f.syntheticDeath)ctx.rotate(-Math.min(1,u.death*2)*Math.PI/2);}
    // Small continuous movement bridges the discrete poses without translucent crossfades.
    const stride=(state==='walk'||state==='carry')?Math.sin(phase*Math.PI*2):0;
    const breath=!frozen&&state==='idle'?Math.sin(now*2.5)*.35:0;
    if(type!=='observer'&&type!=='balloon')ctx.translate(0,-Math.abs(stride)*.3-breath);
    ctx.drawImage(frames[Math.max(0,idx)],type==='knight'?-240:-FRAME_X,type==='knight'?-280:-FRAME_FEET,type==='knight'?480:FRAME_W,type==='knight'?300:FRAME_H);ctx.restore();
  }
  const SPRITE_SIZE={egyptian:1.265,sphinx:2.3,anubis:2.3,pharaoh:2.5};
  function frameHeight(f){const g=f.getContext('2d'),d=g.getImageData(0,0,f.width,f.height).data;let top=f.height,bottom=0;for(let y=0;y<f.height;y++)for(let x=0;x<f.width;x++)if(d[(y*f.width+x)*4+3]>200){top=Math.min(top,y);bottom=Math.max(bottom,y);}return Math.max(1,bottom-top)*128/f.height;}
  ready.then(async()=>{if(typeof mainArt.decode==='function')await mainArt.decode();q('#loadingScreen').classList.add('hidden');q('#mainScreen').style.visibility='visible';for(const [key,base,scale] of [['shieldKnight','heavyShield',1.15],['axeKnight','heavyShield',1.15],['captain','pirate',1.45]]){const f=FRAMES[key],b=FRAMES[base];SPRITE_SIZE[key]=frameHeight((b.idle||b.walk)[0])*scale/frameHeight((f.idle||f.walk)[0]);}for(const [key,d] of Object.entries({...RARE,...NEW_UNITS}))if(d.source)FRAMES[key]=FRAMES[enemySprite(d.source)];for(const [id,type] of [['woodWorkerIcon','wood'],['coalWorkerIcon','coal'],['soldierIcon','soldier'],['archerIcon','archer'],['shieldIcon','shield'],['assaultIcon','assault']])q('#'+id).src=FRAMES[type].walk[0].toDataURL();q('#gameStart').disabled=false;q('#continueBtn').disabled=!S;q('#gameStart').textContent='▶ 게임 시작';}).catch(e=>{console.error(e);q('#loadingScreen').textContent='이미지를 불러오지 못했습니다. 새로고침해 주세요.';q('#gameStart').textContent='이미지 로딩 실패 · 새로고침해 주세요';});
  q('#gameStart').disabled=true;q('#gameStart').textContent='이미지 준비 중…';
  const UI = {
    main:q('#mainScreen'), game:q('#gameScreen'), wood:q('#woodText'), coal:q('#coalText'), pop:q('#popText'),
    php:q('#playerHp'), ehp:q('#enemyHp'), stage:q('#stageTitle'), sub:q('#stageSub'), notice:q('#notice'), timer:q('#timerText'),
    overlay:q('#resultOverlay'), rTitle:q('#resultTitle'), rDesc:q('#resultDesc'), xp:q('#xpResult'), archerLock:q('#archerLock'),
    soldierLv:q('#soldierLv'), soldierXp:q('#soldierXp'), archerLv:q('#archerLv'), archerXp:q('#archerXp')
  };

  let audio = null, muted = false;
  function initAudio(){
    if (!audio) audio = new (window.AudioContext || window.webkitAudioContext)();
    if (audio.state === 'suspended') audio.resume();
  }
  function tone(f,d=.07,type='square',v=.035,delay=0){
    if(muted || !audio) return;
    const o=audio.createOscillator(), g=audio.createGain(), t=audio.currentTime+delay;
    o.type=type; o.frequency.setValueAtTime(f,t); g.gain.setValueAtTime(v,t); g.gain.exponentialRampToValueAtTime(.001,t+d);
    o.connect(g); g.connect(audio.destination); o.start(t); o.stop(t+d);
  }
  function sfx(n){
    if(n==='buy'){tone(430,.06);tone(620,.07,'square',.03,.06)}
    else if(n==='wood') tone(220,.08,'triangle',.025);
    else if(n==='coal') tone(160,.09,'triangle',.03);
    else if(n==='sword') tone(105,.045,'sawtooth',.018);
    else if(n==='arrow') tone(700,.035,'triangle',.015);
    else if(n==='win'){tone(523,.12,'triangle',.04);tone(659,.12,'triangle',.04,.12);tone(784,.18,'triangle',.04,.24)}
    else if(n==='lose'){tone(240,.16,'sawtooth',.03);tone(150,.3,'sawtooth',.03,.16)}
  }

  function freshProfile(){return {gold:0,potions:{red:0,blue:0,gold:0},loot:{},gachaTickets:{epic:0,legendary:0}, clearedStages:[],pirateUnlocked:false,archerUnlocked:false,shieldUnlocked:false,assaultUnlocked:false,assassinUnlocked:false,bannerUnlocked:false,darkUnlocked:false,shieldEvolved:false,loadout:null,archerEvolved:false,evolved:false, xp:{soldier:0,archer:0,warrior:0,crossbow:0,shield:0,assault:0,heavyShield:0,assassin:0,banner:0,darkAssault:0,pirate:0},level:{soldier:1,archer:1,warrior:1,crossbow:1,shield:1,assault:1,heavyShield:1,assassin:1,banner:1,darkAssault:1,pirate:1} };}
  let profile=freshProfile();
const GOLD_ART=window.GAME_ASSETS.shop;
  const POTIONS={red:{name:'레드포션',price:1,description:'1회용 · 다음에 생성되는 전투 유닛 1명의 공격력 +50%'},blue:{name:'블루포션',price:1,description:'1회용 · 다음에 생성되는 전투 유닛 1명의 이동속도 +30%'},gold:{name:'골드포션',price:2,description:'1회용 · 다음에 생성되는 전투 유닛 1명이 생성 후 10초간 무적'}};
  const LOOT={sword:{name:'한손검',price:1,rect:[15,5,125,190]},shield:{name:'소형 나무방패',price:1,rect:[15,215,130,150]},bow:{name:'휴먼 활',price:1,rect:[1090,5,140,195]},greatsword:{name:'대검',price:2,rect:[440,5,185,195]},saddle:{name:'말안장',price:2,rect:[10,675,240,155]},book:{name:'성스러운 서적',price:2,rect:[865,855,140,145]},gem:{name:'푸른 보석',price:3,rect:[500,855,100,140]},stone:{name:'돌',price:0,rect:[375,860,115,130]}};
  Object.assign(LOOT,{gem:{name:'푸른 보석',price:10,rect:[500,855,100,140]},ruby:{name:'붉은 보석',price:10,rect:[605,855,95,140]},necklace:{name:'보석 목걸이',price:10,rect:[1410,675,125,160]},ring:{name:'보석 반지',price:5,rect:[1300,690,110,145]},royalSword:{name:'왕실 대검',price:5,rect:[440,5,185,195]},spear:{name:'기사의 창',price:3,rect:[630,0,150,200]},axe:{name:'양날 도끼',price:3,rect:[790,0,145,200]},hammer:{name:'전투 망치',price:3,rect:[940,0,145,200]},quiver:{name:'화살통',price:1,rect:[1235,0,150,200]},arrow:{name:'낡은 화살',price:0,rect:[1395,0,140,200]},helmet:{name:'철 투구',price:2,rect:[930,210,140,155]},royalHelmet:{name:'황금 투구',price:5,rect:[1390,210,145,155]},armor:{name:'중갑옷',price:4,rect:[705,370,165,165]},gloves:{name:'가죽 장갑',price:1,rect:[1080,380,130,150]},boots:{name:'철 각반',price:2,rect:[280,540,120,130]},belt:{name:'가죽 허리띠',price:1,rect:[650,540,140,130]},scroll:{name:'두루마리',price:2,rect:[710,855,140,140]},silver:{name:'은괴',price:4,rect:[210,855,160,145]},herb:{name:'약초',price:1,rect:[1400,850,130,145]},horseshoe:{name:'말굽',price:1,rect:[420,690,90,140]}});
  const DROP_TABLE={grunt:['sword','shield','stone'],archer:['bow','stone'],heavy:['greatsword','shield','stone'],cavalry:['saddle','sword','gem'],knight:['saddle','greatsword','gem'],healer:['book','gem','stone'],seline:['book','gem'],isaac:['sword','shield','gem']};
  for(const type of ['rifle','cannon'])DROP_TABLE[type]=['helmet','gloves','silver','quiver'];Object.assign(DROP_TABLE,{grunt:['sword','shield','helmet','armor','gloves','boots','belt'],heavy:['greatsword','royalSword','axe','hammer','armor','royalHelmet'],cavalry:['saddle','horseshoe','spear','royalHelmet','armor'],knight:['saddle','horseshoe','spear','royalSword','royalHelmet'],archer:['bow','quiver','arrow','gloves','belt']});for(const key of Object.keys(DROP_TABLE))DROP_TABLE[key]=[...new Set([...DROP_TABLE[key],'stone','silver','gem','ruby','necklace','ring','herb','scroll'])];
  const THANKS=['고맙네! 자네 덕분에 오늘도 장사가 되는군!','좋은 거래였어! 또 들러 주게!','헤헤, 보는 눈이 있구먼. 고맙네!','자네와 거래하니 기분이 좋군!','고맙네, 다음에도 좋은 물건을 준비해 두지!'];
  let shopOpen=false,shopSelection=null,lastThanks=-1,lootPage=0;
  function ensureGold(){ensureRare();profile.gold??=0;profile.potions??={red:0,blue:0,gold:0};profile.loot??={};profile.gachaTickets??={epic:0,legendary:0};}
  function itemDropKind(r){return r<.15?'red':r<.30?'blue':r<.40?'gold':r<.42?'coins':'loot';}
  function awardDrop(enemy){if(['robinHut','pyramid'].includes(enemy.type))return;
    ensureGold();if(enemy.lootRolled||enemy.h>0)return;enemy.lootRolled=true;S.souls=(S.souls||0)+1;S.totalDefeated=(S.totalDefeated||0)+1;
    const goldRoll=Math.random(),itemRoll=Math.random();let found=[];
    if(enemy.lootOwner?.type==='goblin'&&Math.random()<.1){let key;if(Math.random()<.5){profile.gold++;key='coin';found.push('도둑고블린: 1 골드');}else{const table=DROP_TABLE[enemy.type]||DROP_TABLE.grunt;key=table[Math.floor(Math.random()*table.length)];profile.loot[key]=(profile.loot[key]||0)+1;found.push('도둑고블린: '+LOOT[key].name);}S.effects.push({kind:'loot',item:key,owner:enemy.lootOwner,x:enemy.x,life:.5});}
    if(goldRoll<.03){const n=1+Math.floor(Math.random()*2);profile.gold+=n;found.push(n+' 골드');S.effects.push({kind:'loot',item:'coin',owner:enemy.lootOwner,x:enemy.x,life:.5});}
    if(itemRoll<.03){const reward=itemDropKind(Math.random());let key;if(reward==='coins'){profile.gold+=5;found.push('5 골드');key='coin';}else if(reward!=='loot'){profile.potions[reward]++;found.push(POTIONS[reward].name);key=reward;}else{const table=DROP_TABLE[enemy.type]||DROP_TABLE.grunt;key=table[Math.floor(Math.random()*table.length)];profile.loot[key]=(profile.loot[key]||0)+1;found.push(LOOT[key].name);}S.effects.push({kind:'loot',item:key,owner:enemy.lootOwner,x:enemy.x,life:.5});}
    if(enemy.type==='scout'&&!profile.advancedUnlocked?.includes('invisibleSkeleton')&&Math.random()<.6)recruitUnit('invisibleSkeleton');tryRecruit(enemy);if(found.length){tone(880,.07,'triangle');tone(1320,.12,'triangle',.04,.07);msg('획득: '+found.join(' · '));save();}
  }
  function thankMerchant(extra=''){let i=(lastThanks+1+Math.floor(Math.random()*(THANKS.length-1)))%THANKS.length;lastThanks=i;q('#merchantSpeech').textContent=THANKS[i]+(extra?' '+extra:'');}
  function openGoldShop(){if(!S?.over||onMain)return;ensureGold();shopOpen=true;shopSelection=null;q('#goldShop').classList.remove('hidden');q('#merchantSpeech').textContent='어서 오게! 포션도 사고, 전리품도 팔아 보게.';renderGoldShop();}
  function closeGoldShop(){shopOpen=false;q('#goldShop').classList.add('hidden');save();updateUI();}
  function selectProduct(key){shopSelection=key;const p=POTIONS[key];q('#shopDescription').textContent=p?p.description+' · 가격 '+p.price+' 골드':'운이 매우 좋다면 전설유닛을 얻을 수 있을지도? · 3골드';q('#confirmGoldBuy').classList.remove('hidden');q('#confirmGoldBuy').textContent=(p?p.name:'랜덤 가챠')+' 구매 · '+(p?p.price:3)+'G';q('#confirmGoldBuy').disabled=profile.gold<(p?p.price:3);}
  function gachaResult(roll){const rewards=[[20,{text:'이번에는 꽝!'}],[10,{type:'red',n:1}],[10,{type:'red',n:2}],[10,{type:'blue',n:1}],[10,{type:'blue',n:2}],[10,{type:'gold',n:1}],[5,{type:'gold',n:2}],[10,{coins:3}],[5,{coins:5}],[2,{coins:25}],[1,{coins:50}],[.2,{coins:100}],[.3,{ticket:'ex'}],[4.5,{ticket:'epic'}],[.5,{ticket:'legendary'}],[1.5,{loot:20}]];let total=0;for(const [weight,result] of rewards){total+=weight;if(roll*100<total)return result;}return {loot:20};}
  function purchaseGold(key){
    if(!shopOpen||!S?.over)return false;ensureGold();if(!POTIONS[key]&&key!=='gacha')return false;const price=POTIONS[key]?.price||3;if(profile.gold<price)return false;profile.gold-=price;let text;
    if(key==='gacha'){const result=gachaResult(Math.random());if(result.type){profile.potions[result.type]+=result.n;text=POTIONS[result.type].name+' '+result.n+'개 당첨!';}else if(result.coins){profile.gold+=result.coins;text=result.coins+'골드 당첨!';}else if(result.loot){const keys=Object.keys(LOOT),items={};for(let i=0;i<result.loot;i++){const key=keys[Math.floor(Math.random()*keys.length)];profile.loot[key]=(profile.loot[key]||0)+1;items[key]=(items[key]||0)+1;}text='무작위 잡템 20개 당첨!\n'+Object.entries(items).map(([k,n])=>LOOT[k].name+' ×'+n).join(' · ');}else if(result.ticket){text=grantRare(result.ticket);}else text=result.text;}
    else{profile.potions[key]++;text=POTIONS[key].name+' 1개를 받았네.';}
    thankMerchant(key==='gacha'?'':text);if(key==='gacha'){q('#gachaResultText').textContent=text;q('#gachaResultModal').classList.remove('hidden');}save();renderGoldShop();selectProduct(key);return true;
  }
  function sellLoot(key){if(!shopOpen||!S?.over||!LOOT[key]||!(profile.loot[key]>0))return false;profile.loot[key]--;profile.gold+=LOOT[key].price;thankMerchant(LOOT[key].name+'을 '+LOOT[key].price+'골드에 샀네.');save();renderGoldShop();return true;}
  function renderGoldShop(){ensureGold();const pages=Math.max(1,Math.ceil(Object.keys(LOOT).filter(k=>profile.loot[k]>0).length/4));lootPage=Math.min(lootPage,pages-1);q('#lootPageText').textContent=(lootPage+1)+' / '+pages;q('#lootPrev').disabled=lootPage===0;q('#lootNext').disabled=lootPage===pages-1;q('#shopGold').textContent=profile.gold+' G';q('#shopInventory').innerHTML=Object.entries(LOOT).filter(([key])=>profile.loot[key]>0).slice(lootPage*4,lootPage*4+4).map(([key,p])=>'<button class="lootSell" data-sell="'+key+'"><img src="'+(GOLD_ICONS[key]||'')+'" alt=""><span>'+p.name+' ×'+profile.loot[key]+'<br>'+p.price+' G에 1개 판매</span></button>').join('')||'<p>판매할 전리품이 없습니다.</p>';q('#upgradeCastle').textContent='성 최대 체력 +'+upgradeQuote('castle').amount+' · '+upgradeQuote('castle').price+' G';q('#upgradePopulation').textContent='최대 유닛 +2 · '+upgradeQuote('population').price+' G';q('#gachaRecords').textContent='보유 포션 · 빨강 '+profile.potions.red+' / 파랑 '+profile.potions.blue+' / 골드 '+profile.potions.gold+(profile.gachaTickets.epic||profile.gachaTickets.legendary?' · 미구현 유닛 당첨 기록: 에픽 '+profile.gachaTickets.epic+', 전설 '+profile.gachaTickets.legendary:'');q('#confirmGoldBuy').classList.toggle('hidden',!shopSelection);if(shopSelection)q('#confirmGoldBuy').disabled=profile.gold<(POTIONS[shopSelection]?.price||3);}
  function selectPotion(key){ensureGold();if(!S||S.over||S.pause||onMain||!POTIONS[key]||profile.potions[key]<=0)return false;S.selectedPotion=S.selectedPotion===key?null:key;msg(S.selectedPotion?POTIONS[key].name+' 선택: 다음에 완성되는 전투 유닛 1명에 적용됩니다.':'포션 선택 해제');updateGoldUI();save();return true;}
  function applySpawnPotion(u){const key=S.selectedPotion;if(!POTIONS[key]||!(profile.potions[key]>0))return;profile.potions[key]--;S.selectedPotion=null;u.potion=key;if(key==='red')u.d*=1.5;if(key==='blue')u.v*=1.3;if(key==='gold')u.invincibleUntil=S.time+10;save();}
  function updateGoldUI(){ensureGold();q('#goldText').textContent=profile.gold;q('#potionTray').classList.toggle('hidden',!S||S.over||onMain);for(const key of Object.keys(POTIONS)){const b=q('#usePotion'+key);b.disabled=!S||S.over||S.pause||profile.potions[key]<=0;b.setAttribute('aria-pressed',S?.selectedPotion===key?'true':'false');q('#potionCount'+key).textContent=profile.potions[key];}q('#potionStatus').textContent=S?.selectedPotion?POTIONS[S.selectedPotion].name+' · 다음 전투 유닛에 적용':'포션 선택 → 다음 전투 유닛에 적용';}
  const GOLD_ICONS={};
  function initGoldArt(){for(const key of Object.keys(GOLD_ART)){const im=new Image();im.onload=()=>{if(key==='shop'){q('#goldShop').style.backgroundImage='linear-gradient(#150e08aa,#150e08aa),url("'+GOLD_ART.shop+'")';return;}const sheet=prepareSheet(im,true);if(key==='potions'){for(const [i,k] of ['red','blue','gold'].entries()){const c=cut(sheet,i*sheet.width/3,0,Math.floor(sheet.width/3),sheet.height,0,true);GOLD_ICONS[k]=c.toDataURL();const potionIcon=new Image();potionIcon.src=GOLD_ICONS[k];GOLD_BITMAPS[k]=potionIcon;q('#shopPotion'+k).src=GOLD_ICONS[k];q('#usePotionImage'+k).src=GOLD_ICONS[k];}}else if(key==='loot'){const coin=new Image();coin.src=cut(sheet,0,850,215,160,0,'clean').toDataURL();GOLD_BITMAPS.coin=coin;for(const [k,item] of Object.entries(LOOT)){GOLD_ICONS[k]=cut(sheet,...item.rect,0,'clean').toDataURL();const icon=new Image();icon.src=GOLD_ICONS[k];GOLD_BITMAPS[k]=icon;}}else q(key==='merchant'?'#merchantImage':'#gachaImage').src=sheet.toDataURL();};im.src=GOLD_ART[key];}}
  q('#openGoldShop').addEventListener('click',openGoldShop);q('#closeGoldShop').addEventListener('click',closeGoldShop);q('#confirmGoldBuy').addEventListener('click',()=>purchaseGold(shopSelection));q('#gachaProduct').addEventListener('click',()=>selectProduct('gacha'));for(const key of Object.keys(POTIONS)){q('#product'+key).addEventListener('click',()=>selectProduct(key));q('#usePotion'+key).addEventListener('click',()=>selectPotion(key));}q('#shopInventory').addEventListener('click',e=>{const b=e.target.closest('[data-sell]');if(b)sellLoot(b.dataset.sell);});initGoldArt();


  let stageNo=1, S=null, last=performance.now();
  function chapterName(n){const names=['새벽 평원','황혼의 전장','달빛 황야','가을 평원','겨울 설원','사막 유적','사막 유적','사막 유적','심해 동굴','요새 성벽 앞','숲속 지대'];const chapter=Math.floor((n-1)/10)+1;return '제'+chapter+'장 · '+names[Math.min(names.length-1,chapter-1)];}
  const names={1:'죽은 자의 행진',2:'검은 숲',3:'잿빛 탄광',4:'휴먼 초소',5:'왕국 외곽'};
  const BOSS_STATS={hp:1400,d:90,r:45,v:12,a:1.8,def:5};
  function stageLabel(n){return (Math.floor((n-1)/10)+1)+'-'+((n-1)%10+1);}
  function stageData(n){const progress=Math.sqrt(Math.max(0,n-1));return{hp:450*.85*(1+.20*progress+.008*Math.max(0,n-1)),player:600,spawn:Math.max(3.5,4.6/(1+.035*progress)),enemyCap:6+Math.min(4,Math.floor(progress)),name:chapterName(n)+(n===8?' · 견습기사 아이작':n===10?' · 원정대장 프라함':n===20?' · 수호마법사 셀리네':n===30?' · 천재소년 필':n===40?' · 용병단과의 결전':' · '+((n-1)%10+1)+'번째 전선')}}
  function msg(t){UI.notice.textContent=t}
  function levelCheck(t){profile.xp[t]??=0;profile.level[t]??=1;while(profile.xp[t]>=100){profile.xp[t]-=100;profile.level[t]++;const next=t==='soldier'?'warrior':t==='archer'?'crossbow':t==='shield'?'heavyShield':t==='assault'?'darkAssault':t==='dog'?'cerberus':t==='crossbow'?'javelin':null;if(next&&profile.level[t]>=(t==='crossbow'?15:t==='dog'||t==='shield'||t==='assault'?7:10)){profile[t==='dog'?'cerberusUnlocked':t==='crossbow'?'javelinUnlocked':t==='soldier'?'evolved':t==='shield'?'shieldEvolved':t==='assault'?'darkUnlocked':'archerEvolved']=true;profile.level[next]=1;profile.xp[next]=0;profile.xp[t]=0;if(t==='dog'||t==='crossbow')evolveField(t,next);break;}}}

  function stats(type){if(type==='cursedHand')return {...NEW_UNITS.cursedHand};
    if(RARE[type])return {...RARE[type]};
    const b=NEW_UNITS[type]|| (type==='pirate'?{hp:100,d:25,r:110,v:30,a:2,def:1}:type==='darkAssault'?{hp:160,d:22,r:27,v:55,a:.25,def:1}:type==='banner'?{hp:55,d:0,r:120,v:14.5,a:1,def:0}:type==='heavyShield'?{hp:400,d:0,r:30,v:14*.7,a:1,def:10}:type==='assassin'?{hp:55,d:45,r:30,v:87,a:.7/2.5,def:0}:type==='assault'?{hp:110,d:15,r:27,v:29*1.7,a:.7/2,def:0}:type==='shield'?{hp:225,d:0,r:30,v:14,a:1,def:10}:type==='crossbow'?{hp:116.96,d:38,r:181.25,v:16.5,a:1.02,def:0}:type==='soldier'?{hp:110,d:18,r:30,v:29,a:.7,def:4}:type==='warrior'?{hp:189.2,d:36,r:36,v:29,a:.7,def:3}:{hp:68,d:17,r:145,v:22,a:1.02,def:0});
    const m=1+Math.max(0,(profile.level[type]||1)-1)*.01; // Add 1% of base HP/damage per level.
    return {...b,hp:b.hp*m,d:b.d*m};
  }
  function mkWorker(type,i){return{type,x:171.5,y:GROUND,phase:'out',wait:0,v:38+(i%3)*2,carry:false,anim:0}}
  function startStage(n){unlockAdvanced();for(const key of Object.keys(NEW_UNITS)){profile.level[key]??=1;profile.xp[key]??=0;}
    ensureGold();shopOpen=false;q('#goldShop').classList.add('hidden');
    q('#unlockModal').classList.add('hidden');normalizeLoadout();onMain=false;syncMusic();q('#settingsPanel').classList.add('hidden');stageNo=n; const d=stageData(n);
    S={philSpawned:false,isReplay:(profile.clearedStages||[]).includes(n),cameraX:[40,50,60,70,80].includes(n)?800:0,mercenaryBattle:n===40,bossStage:n===10||n===20||n===40||n===50,bossWakeAt:n===20?20:15,wood:260,coal:n>=3?50:0,souls:0,totalDefeated:0,cap:16+profile.populationBuys*2,ph:d.player+profile.castleBonus,pm:d.player+profile.castleBonus,eh:d.hp,em:d.hp,time:0,pause:false,over:false,spawn:n===20?d.spawn*2:2,
      workers:[mkWorker('wood',0)],units:[],enemies:[],effects:[],activity:emptyActivity(),corpses:[],build:{wood:0,coal:0,soldier:0,archer:0,warrior:0,crossbow:0,shield:0,assault:0,heavyShield:0,assassin:0,banner:0,darkAssault:0,pirate:0},used:{soldier:0,archer:0,warrior:0,crossbow:0,shield:0,assault:0,heavyShield:0,assassin:0,banner:0,darkAssault:0,pirate:0},kills:{soldier:0,archer:0,warrior:0,crossbow:0,shield:0,assault:0,heavyShield:0,assassin:0,banner:0,darkAssault:0,pirate:0},d};
    for(const key of [...Object.keys(RARE),...Object.keys(NEW_UNITS)]){S.build[key]=0;S.used[key]=0;S.kills[key]=0;}
    if(S.bossStage){const b=n===20?{hp:1500,d:55,r:180,v:8,a:1.5,def:0}:BOSS_STATS;S.enemies=[{type:n===20?'seline':'knight',x:650,y:GROUND,h:b.hp,m:b.hp,d:b.d,r:b.r,v:b.v,a:b.a,def:b.def,cd:.1,anim:0,attack:0}];S.eh=b.hp;S.em=b.hp;}
    if(n===40){S.enemies=['parhan','shane','rifren','kon'].map((type,i)=>{const b=MERCENARIES[type];return {type,x:[1210,1300,1390,1470][i],y:GROUND,h:b.hp,m:b.hp,d:b.d,r:b.r,v:b.v,a:b.a,def:b.def,cd:.1,anim:0,attack:0,stationary:true};});S.eh=S.em=9000;S.spawn=999999;}
    if(n===50){S.enemies=[{type:'robinHut',x:1500,y:GROUND,h:8000,m:8000,d:0,v:0,a:99,r:0,def:0},{type:'robin',x:1380,y:GROUND,h:3500,m:3500,d:200,a:1,r:200,v:50,def:3,cd:0,anim:0,attack:0}];S.eh=S.em=3500;S.spawn=999999;beginBossIntro('robin','숲의 파수꾼 로빈 훗','정의의 이름으로!');S.bossIntro.until=S.bossIntro.speechUntil;}
    initDesert(n);
    if(n===10||n===20){S.bossWakeAt=6;beginBossIntro(n===10?'knight':'seline',n===10?'원정대장 프라함':'수호마법사 셀리네',n===10?'하찮은 스켈레톤들이 판을 치는구나..':'이 곳만은 제가 지켜내겠어요!');}
    UI.main.classList.add('hidden'); UI.game.classList.remove('hidden'); UI.overlay.classList.add('hidden');
    UI.stage.textContent=stageLabel(n); UI.sub.textContent=d.name;
    msg(n<=2?'현재 전투 유닛: 스켈레톤병':'스켈레톤궁수가 전투에 참가할 수 있습니다.'); last=performance.now(); q('#pauseBtn').textContent='⏸'; updateUI(); save();
  }
  function pop(){return S.workers.length+S.units.length+Object.values(S.build).filter(v=>v>0).length}
  const COSTS={wood:[60,0],coal:[80,0],soldier:[100,0],warrior:[125,25],archer:[75,50],crossbow:[100,75],shield:[125,50],heavyShield:[150,100],assault:[75,75],assassin:[50,250],banner:[100,100],darkAssault:[125,125],pirate:[200,75]};
Object.assign(COSTS,Object.fromEntries(Object.entries(NEW_UNITS).map(([k,v])=>[k,v.cost])));
Object.assign(COSTS,Object.fromEntries(Object.entries(RARE).map(([k,v])=>[k,v.cost])));
  function costText(type){if(type==='cat')return '🟡 1 · 🪵 100 · ⬛ 100';const [w,c]=COSTS[type];return '🪵 '+w+(c?' · ⬛ '+c:'');}
  function afford(type){if(isEx(type)&&((S.used[type]||0)>0||(S.build[type]||0)>0))return false;const cost=COSTS[type];if(!cost)return false;if(isUnique(type)&&(S.units.filter(u=>u.type===type&&u.h>0).length+Number((S.build[type]||0)>0)>=2))return false;if(!['wood','coal'].includes(type)&&(!availableUnits().includes(type)||!profile.loadout?.includes(type)))return false;return S.wood>=cost[0]&&S.coal>=cost[1]&&(type!=='cat'||profile.gold>=1);}
  function buy(type){
    if(!S||onMain||S.pause||S.over)return;
    if(type==='assault'&&!profile.assaultUnlocked||type==='shield'&&!profile.shieldUnlocked||type==='crossbow'&&!profile.archerEvolved||type==='archer'&&profile.archerEvolved)return;
    if(type==='soldier'&&profile.evolved)return;
    if(type==='warrior'&&!profile.evolved)return;
    if(type==='archer'&&!profile.archerUnlocked){msg('스켈레톤궁수는 1-2 클리어 후 해금됩니다.');return}
    if(S.build[type]>0)return;
    if(pop()>=S.cap){msg('인구 제한에 도달했습니다.');return}
    if(!afford(type)){msg('자원이 부족합니다.');return}
    if(type==='cat')profile.gold--;S.wood-=COSTS[type][0];S.coal-=COSTS[type][1];
    S.build[type]={wood:2.2,coal:2.4,soldier:1.7,archer:2.3,warrior:1.7,crossbow:2.3,shield:2.8,assault:1.5,heavyShield:2.8,assassin:2,banner:2.5,darkAssault:1.5,pirate:2.5}[type]||2.5; sfx('buy'); msg('생산을 시작했습니다.');
  }
  function finishBuild(type){if(isEx(type)&&(S.used[type]||0)>0)return;
    if(type==='wood')S.workers.push(mkWorker('wood',S.workers.length));
    else if(type==='coal')S.workers.push(mkWorker('coal',S.workers.length));
    else{
      const st=stats(type); S.units.push({type,stealthed:['assassin','invisibleSkeleton','cursedHand','fallen_humanAssassin'].includes(type),facing:1,x:250,y:GROUND,anim:0,attack:0,def:st.def,h:st.hp,m:st.hp,d:st.d,r:st.r,v:st.v,a:st.a,cd:.1}); S.used[type]++;
      applySpawnPotion(S.units[S.units.length-1]);const newest=S.units[S.units.length-1];if(type==='fallenSeline'||type==='fallenFraham')newest.wakeAt=S.time+(type==='fallenSeline'?20:15);if(type==='fallenPhil'){newest.phase=1;alliedBurst(newest,200,300);} const spawned=S.units[S.units.length-1];msg(UNIT_NAMES[type]+' 출전!'+(spawned.potion?' · '+POTIONS[spawned.potion].name+' 적용 완료':''));
    }
  }
  function workerTick(w,dt){
    w.anim=(w.anim||0)+dt; const target=w.type==='wood'?45.5:115.5;
    if(w.phase==='out'){
      w.x-=w.v*dt; if(w.x<=target){w.x=target;w.phase='work';w.wait=w.type==='wood'?1.15:1.45}
    } else if(w.phase==='work'){
      w.wait-=dt; if(w.wait<=0){w.phase='back';w.carry=true}
    } else {
      w.x+=w.v*dt; if(w.x>=171.5){w.x=171.5;w.phase='out';w.carry=false;
        if(w.type==='wood'){S.wood+=45;sfx('wood');msg('+45 목재 운반 완료')}
        else{S.coal+=30;sfx('coal');msg('+30 석탄 운반 완료')}
      }
    }
  }

  function enemyStats(type,n=stageNo){if(type==='egyptian')return {hp:200,d:20,a:1,v:30,r:28,def:0};if(type==='humanAssassin')return {hp:150,d:40,a:.9,v:58,r:35,def:0};if(type==='balloon')return {hp:390,d:25,a:1.05,v:23,r:160,def:15};if(type==='scout')return {hp:80,d:0,a:1,v:40,r:0,def:1};
    if(type==='apprentice')return {hp:450,d:45,r:30,v:25,a:1.5,def:3};if(type==='rifle')return {hp:70,d:28,v:22,r:200,def:0,a:1.1};if(type==='cannon')return {hp:140,d:35,v:18,r:140,def:0,a:2};
    const m=1; // Enemy unit stats remain fixed at every stage.
    const base={cavalry:{hp:82*2,d:12*3,r:35,v:24*1.5,a:.85},grunt:{hp:82,d:12,r:28,v:24,a:.85},archer:{hp:65,d:14,r:125,v:19,a:1.1},heavy:{hp:82*1.2,d:12*2.5,r:32,v:24*.5,a:.85/.5/1.2},healer:{hp:82*.75,d:0,r:120,v:24*.8,a:.85*5}}[type];
    return {...base,hp:base.hp*m*.85*1.25,d:base.d*m*1.25};
  }
  function enemySprite(type){return {egyptian:'egyptian',sphinx:'sphinx',anubis:'anubis',pharaoh:'pharaoh',robin:'robin',laserKai:'laserKai',shane:'shane',kon:'kon',parhan:'parhan',rifren:'rifren',humanAssassin:'humanAssassin',balloon:'balloon',scout:'scout',apprentice:'isaac',phil:'phil',rifle:'rifle',cannon:'cannon',isaac:'isaac',seline:'seline',cavalry:'knight',knight:'knight',archer:'humanArcher',heavy:'heavy',healer:'healer'}[type]||'human';}
  function baseEnemyWeights(n){
    if(n>=41){const extra=(n>=53?.03:0)+(n>=61?.03:0),m=(.98-extra)/.98;return {grunt:.20*m,apprentice:.02,healer:.10*m,cavalry:.08*m,rifle:.312*m,heavy:.208*m,cannon:.08*m,...(n>=53?{humanAssassin:.03}:{}),...(n>=61?{balloon:.03}:{})};}if(n>=21)return {grunt:n>=26?.22:.30,healer:.10,cavalry:.08,rifle:.312,heavy:.208,...(n>=26?{cannon:.08}:{})};
    if(n>=11){const t=Math.min(1,(n-11)/10),grunt=.5-.2*t,healer=.08+.02*t,cavalry=n<15?0:.06+.02*Math.min(1,(n-15)/6),rest=1-grunt-healer-cavalry;return {grunt,healer,cavalry,archer:rest*.6,heavy:rest*.4};}
    const healer=n>=8?.04+(n-8)*(.04/3):0,heavy=n>=5?.08+(n-5)*.012:0,archer=n>=3?.16+(n-3)*.008:0;return {grunt:1-healer-heavy-archer,healer,cavalry:0,archer,heavy};
  }
  function enemyWeights(n){const weights=baseEnemyWeights(n);if(n>=51&&n<=79&&n%10!==0){const fixed=['apprentice','humanAssassin','balloon'],fixedTotal=Object.entries(weights).reduce((sum,[k,v])=>sum+(fixed.includes(k)?v:0),0),scale=(1-fixedTotal-.15)/(1-fixedTotal);for(const k in weights)if(!fixed.includes(k))weights[k]*=scale;return {egyptian:.15,...weights};}return weights;}
  function chooseEnemy(n,roll=Math.random()){let total=0;for(const [type,weight] of Object.entries(enemyWeights(n))){total+=weight;if(roll<total)return type;}return 'grunt';}
  function spawnEnemy(){
    if(S.bossStage&&stageNo!==20)return;
    if(S.enemies.filter(e=>e.h>0).length>=S.d.enemyCap){S.spawn=.8;return;}
    const type=stageNo===20?(Math.random()<.65?'grunt':'healer'):chooseEnemy(stageNo),st=enemyStats(type);
    S.enemies.push({type,stealthed:type==='humanAssassin',facing:-1,x:690,y:GROUND,anim:0,attack:0,h:st.hp,m:st.hp,d:st.d,r:st.r,v:st.v,a:st.a,def:st.def||0,cd:type==='healer'?st.a:.1});
    S.spawn=S.d.spawn*(stageNo===20?2:1)*(.95+Math.random()*.10);
  }
  function healerTick(u,dt){
    u.anim=(u.anim||0)+dt;u.attack=Math.max(0,(u.attack||0)-dt);u.cd=Math.max(0,u.cd-dt*(u.buff?1.2:1));
    const wounded=S.enemies.filter(e=>e.h>0&&e.h<e.m&&Math.abs(e.x-u.x)<=u.r).sort((a,b)=>a.h/a.m-b.h/b.m)[0];
    const [foe,dist]=nearest(u,S.units);
    const target=wounded||(foe&&dist<=u.r?u:null);
    if(target){
      u.stationary=true;u.stillTime=(u.stillTime||0)+dt;
      if(u.cd<=0&&u.stillTime>=.2){
        // One pulse uses the primary recipient's 10% maximum health for all targets.
        const amount=target.m*.1,center=target.x,radius=120;
        for(const e of S.enemies)if(e.h>0&&Math.abs(e.x-center)<=radius)e.h=Math.min(e.m,e.h+amount);
        for(const v of S.units)if(v.h>0&&S.time>=(v.invincibleUntil||0)&&Math.abs(v.x-center)<=radius){if(v.type==='fallenSeline'&&S.time<(v.barrierUntil||0)){v.blockUntil=S.time+.4;continue;}const damage=Math.min(v.h,amount);v.h-=damage;if(v.type==='fallenSeline'&&v.h>0&&Math.random()<.2){v.barrierStart=S.time;v.barrierUntil=S.time+1.5;}rareHitReaction(v,damage);S.activity[v.type].taken+=damage;v.guard=.3;}
        S.effects.push({kind:'holy',x:center,radius,amount,life:1});u.cd=u.a;u.attack=.8;
      }return;
    }
    if(u.attack>0){u.stationary=true;return;}
    u.stationary=true;u.stillTime=0;
    if((!foe||dist>120)&&u.x>362){u.x-=u.v*dt;u.stationary=false;}
  }

  function nearest(u,list){let t=null,d=1e9;for(const v of list){if(v.h<=0||!canTarget(u,v))continue;const z=Math.abs(v.x-u.x);if(z<d){d=z;t=v}}return[t,d]}
  const UNIT_NAMES={soldier:'스켈레톤병',warrior:'스켈레톤 워리어',archer:'스켈레톤궁수',crossbow:'스켈레톤 석궁수',shield:'스켈레톤 방패병',assault:'스켈레톤 돌격병',heavyShield:'스켈레톤 중방패병',assassin:'스켈레톤 암살자',banner:'스켈레톤 기수',darkAssault:'스켈레톤 암흑돌격병',pirate:'스켈레톤 해적'};
Object.assign(UNIT_NAMES,Object.fromEntries(Object.entries(NEW_UNITS).map(([k,v])=>[k,v.name])));
Object.assign(UNIT_NAMES,Object.fromEntries(Object.entries(RARE).map(([k,v])=>[k,v.name])));
  function emptyActivity(){return Object.fromEntries(Object.keys(UNIT_NAMES).map(t=>[t,{damage:0,castle:0,taken:0,blocked:0}]));}
  function availableUnits(){return [profile.evolved?'warrior':'soldier',...(profile.archerUnlocked?[profile.javelinUnlocked?'javelin':profile.archerEvolved?'crossbow':'archer']:[]),...(profile.shieldUnlocked?[profile.shieldEvolved?'heavyShield':'shield']:[]),...(profile.assaultUnlocked?[profile.darkUnlocked?'darkAssault':'assault']:[]),...(profile.assassinUnlocked?['assassin']:[]),...(profile.bannerUnlocked?['banner']:[]),...(profile.pirateUnlocked?['pirate']:[]),...(profile.dogUnlocked?[profile.cerberusUnlocked?'cerberus':'dog']:[]),...(profile.rareUnlocked||[]),...(profile.advancedUnlocked||[])].filter(t=>!((t==='warrior'||t==='soldier'&&profile.evolved)&&profile.advancedUnlocked?.includes('greatWarrior'))&&!(t==='pirate'&&profile.advancedUnlocked?.includes('captain'))&&!(t==='heavyShield'&&profile.advancedUnlocked?.includes('shieldKnight')));}
  function normalizeLoadout(){const available=availableUnits();profile.loadout=(profile.loadout||available).map(t=>(t==='warrior'||t==='soldier'&&profile.evolved)&&profile.advancedUnlocked?.includes('greatWarrior')?'greatWarrior':t==='pirate'&&profile.advancedUnlocked?.includes('captain')?'captain':(t==='shield'||t==='heavyShield')&&profile.advancedUnlocked?.includes('shieldKnight')?'shieldKnight':t==='dog'&&profile.cerberusUnlocked?'cerberus':(t==='crossbow'||t==='archer')&&profile.javelinUnlocked?'javelin':t==='soldier'&&profile.evolved?'warrior':t==='archer'&&profile.archerEvolved?'crossbow':t==='shield'&&profile.shieldEvolved?'heavyShield':t==='assault'&&profile.darkUnlocked?'darkAssault':t).filter((t,i,a)=>available.includes(t)&&a.indexOf(t)===i).filter((t,i,a)=>isEx(t)||a.slice(0,i).filter(x=>!isEx(x)).length<4);if(!profile.loadout.length)profile.loadout=[available[0]];}
  function renderLoadout(){normalizeLoadout();q('#loadoutChoices').innerHTML='';for(const type of availableUnits()){const b=document.createElement('button');b.type='button';b.className='loadoutOption';b.textContent=UNIT_NAMES[type];b.setAttribute('aria-pressed',profile.loadout.includes(type));b.addEventListener('click',()=>{if(profile.loadout.includes(type)){profile.loadout=profile.loadout.filter(t=>t!==type);}else if(isEx(type)||loadoutCount()<4){profile.loadout.push(type);}else{q('#loadoutStatus').textContent='최대 4종까지 선택할 수 있습니다. 먼저 한 종류를 해제하세요.';return;}b.setAttribute('aria-pressed',profile.loadout.includes(type));q('#loadoutStatus').textContent=loadoutCount()+' / 4종 선택 · 일꾼·EX는 별도';save();});q('#loadoutChoices').appendChild(b);}q('#loadoutStatus').textContent=loadoutCount()+' / 4종 선택 · 일꾼·EX는 별도';}
  function commitLoadout(){if(!profile.loadout?.length){q('#loadoutStatus').textContent='전투 유닛을 최소 1종 선택하세요.';return false;}save();return true;}
  function updateLoadoutShop(){const ids={soldier:'buySoldier',warrior:'buySoldier',archer:'buyArcher',crossbow:'buyArcher',shield:'buyShield',heavyShield:'buyShield',assault:'buyAssault',assassin:'buyAssassin',banner:'buyBanner',darkAssault:'buyDarkAssault',pirate:'buyPirate'};for(const id of new Set(Object.values(ids)))q('#'+id).classList.add('hidden');for(const type of profile.loadout||[])ids[type]&&q('#'+ids[type]).classList.remove('hidden');q('#buyAssassin').disabled=S.over||S.pause||!afford('assassin')||S.build.assassin>0||pop()>=S.cap;q('#assassinLv').textContent='Lv.'+profile.level.assassin+' · EXP '+profile.xp.assassin+'/100';if(FRAMES.assassin&&!q('#assassinIcon').src)q('#assassinIcon').src=FRAMES.assassin.walk[0].toDataURL();}
  q('#buyAssassin').addEventListener('click',()=>buy('assassin'));
  function knightTick(u,dt){
    if(S.time<(S.bossWakeAt??15)){u.attack=0;return;}
    u.anim=(u.anim||0)+dt;u.attack=Math.max(0,(u.attack||0)-dt);u.cd=Math.max(0,u.cd-dt*(u.buff?1.2:1));
    const wave=((u.attackCount||0)+1)%9===0,range=wave?145:u.r,[target,dist]=nearest(u,S.units),castle=Math.abs(u.x-232)<=range+8;
    if((target&&dist<=range)||castle){if(u.cd>0)return;u.attackCount=(u.attackCount||0)+1;u.cd=u.a;u.attack=u.a;const raw=u.d*(wave?2:1),center=target&&dist<=range?target.x:232;
      for(const v of S.units){if(v.h<=0||Math.abs(v.x-center)>(wave?65:38)||Math.abs(v.x-u.x)>range+38)continue;const before=v.h,damage=Math.min(before,Math.max(1,raw-(v.def||0)));hurtSkeleton(v,raw);}
      if(castle&&Math.abs(center-232)<=(wave?65:38))S.ph-=raw;
      if(wave)S.effects.push({kind:'slash',x:u.x,wave:true,life:1});sfx('sword');return;
    }
    if(u.attack<=0)u.x-=u.v*dt;
  }


  function updateAuras(dt){for(const u of S.units)if(u.potion){const base=unitStats(u);u.d=base.d*(u.potion==='red'?1.5:1);u.v=base.v*(u.potion==='blue'?1.3:1);}for(const u of S.units)if(u.potion==='gold'&&S.time>=(u.invincibleUntil||0)){delete u.potion;delete u.invincibleUntil;}const bearers=S.units.filter(u=>u.type==='banner'&&u.h>0);for(const u of S.units){u.buffRed=(profile.level.banner||1)>=10;u.buff=u.h>0&&bearers.some(b=>b!==u&&Math.abs(b.x-u.x)<=bannerRange());}for(const b of bearers)S.activity.banner.support=(S.activity.banner.support||0)+dt*S.units.filter(u=>u!==b&&u.h>0&&Math.abs(b.x-u.x)<=bannerRange()).length;}
  function updateCounts(){const entries={WoodWorker:'wood',CoalWorker:'coal',Soldier:profile.evolved?'warrior':'soldier',Archer:profile.javelinUnlocked?'javelin':profile.archerEvolved?'crossbow':'archer',Shield:profile.shieldEvolved?'heavyShield':'shield',Assault:'assault',Assassin:'assassin',Banner:'banner',DarkAssault:'darkAssault',Pirate:'pirate'};for(const [id,type] of Object.entries(entries)){const count=(type==='wood'||type==='coal'?S.workers:S.units).filter(u=>u.type===type&&(u.h===undefined||u.h>0)).length;q('#count'+id).textContent=count+'명';}q('#buyPirate').disabled=S.over||S.pause||!afford('pirate')||S.build.pirate>0||pop()>=S.cap;q('#pirateLv').textContent='Lv.'+profile.level.pirate+' · EXP '+profile.xp.pirate+'/100';if(FRAMES.pirate&&!q('#pirateIcon').src)q('#pirateIcon').src=FRAMES.pirate.walk[0].toDataURL();q('#buyDarkAssault').disabled=S.over||S.pause||!afford('darkAssault')||S.build.darkAssault>0||pop()>=S.cap;q('#darkAssaultLv').textContent='Lv.'+profile.level.darkAssault+' · EXP '+profile.xp.darkAssault+'/100';if(FRAMES.darkAssault&&!q('#darkAssaultIcon').src)q('#darkAssaultIcon').src=FRAMES.darkAssault.walk[0].toDataURL();q('#buyBanner').disabled=S.over||S.pause||!afford('banner')||S.build.banner>0||pop()>=S.cap;q('#bannerLv').textContent='Lv.'+profile.level.banner+' · EXP '+profile.xp.banner+'/100';if(FRAMES.banner&&!q('#bannerIcon').src)q('#bannerIcon').src=FRAMES.banner.walk[0].toDataURL();}
  q('#buyPirate').addEventListener('click',()=>buy('pirate'));
  q('#buyDarkAssault').addEventListener('click',()=>buy('darkAssault'));
  q('#buyBanner').addEventListener('click',()=>buy('banner'));

  function hurtSkeleton(v,raw){if(v.h<=0||isSheltered(v)||S.time<(v.invincibleUntil||0))return;if(v.type==='fallenSeline'&&S.time<(v.barrierUntil||0)){v.blockUntil=S.time+.4;return;}const reduction=S.time<(v.guardUntil||0)?['fallenIsaac','fallen_apprentice'].includes(v.type)?.2:v.type==='fallen_grunt'?.1:1:1;const damage=Math.min(v.h,Math.max(1,raw-(v.def||0))*reduction);v.h-=damage;if(v.type==='fallenSeline'&&v.h>0&&Math.random()<.2){v.barrierStart=S.time;v.barrierUntil=S.time+1.5;}rareHitReaction(v,damage);v.guard=.3;S.activity[v.type].taken+=damage;S.activity[v.type].blocked+=Math.max(0,Math.min(raw-damage,v.def||0));}
  function selineTick(u,dt){
    u.anim=(u.anim||0)+dt;u.attack=Math.max(0,(u.attack||0)-dt);u.cd=Math.max(0,(u.cd||0)-dt*(u.buff?1.2:1));u.stationary=true;
    if(S.time<(S.bossWakeAt??20))return;
    const orbitX=u.x+Math.cos(S.time*3)*30;
    for(const v of S.units)if(v.h>0&&Math.abs(v.x-orbitX)<=14&&Math.abs(v.x-u.x)<=30&&S.time>=(v.orbitHitAt||0)){hurtSkeleton(v,50);v.orbitHitAt=S.time+1;}
    const earth=(u.shots||0)>=6,range=earth?120:180,[target,dist]=nearest(u,S.units),castle=u.x-232<=range;
    if((target&&dist<=range)||castle){
      if(u.cd>0)return;u.cd=1.5;u.attack=1.5;u.castKind=earth?'earth':'orb';
      if(earth){for(const v of S.units)if(v.h>0&&v.x<=u.x&&v.x>=u.x-120)hurtSkeleton(v,200);if(castle)S.ph-=200;S.effects.push({kind:'earth',x:u.x-60,life:1.2});u.shots=0;}
      else{u.shots=(u.shots||0)+1;const victim=target&&dist<=180?target:null;if(victim&&!victim.magicId)victim.magicId=(S.magicSerial=(S.magicSerial||0)+1);S.effects.push({kind:'orb',x:u.x,from:u.x,targetId:victim?.magicId||null,targetX:victim?victim.x:232,castle:!victim,life:2});}return;
    }
    if(u.attack<=0){u.stationary=false;u.x-=8*dt;}
  }
  function updateMagic(dt){for(const e of S.effects){if(e.kind!=='orb'||e.life<=0)continue;const victim=e.targetId?S.units.find(v=>v.magicId===e.targetId&&v.h>0):null;if(e.targetId&&!victim){e.life=0;continue;}const targetX=victim?victim.x:232,delta=targetX-e.x,step=260*dt;if(Math.abs(delta)<=step){if(victim)hurtSkeleton(victim,55);else if(e.castle)S.ph-=55;e.life=0;}else e.x+=Math.sign(delta)*step;}}
  function drawOrbit(u){const f=FRAMES.orb?.[0];if(!f)return;const phase=(bossIntroActive()?0:S.time||0)*3;ctx.save();ctx.globalAlpha=Math.sin(phase)<0?.65:1;ctx.drawImage(f,u.x+Math.cos(phase)*30-10,GROUND-53+Math.sin(phase)*6,20,20);ctx.restore();}
  function drawMagicEffect(e){
    if(e.kind==='orb'){const frame=FRAMES.orb05;if(frame)ctx.drawImage(frame,e.x-22,GROUND-56,44,26);return true;}
    if(e.kind==='earth'){const frames=FRAMES.eruption;if(frames){const f=frames[Math.min(frames.length-1,Math.floor((1.2-e.life)/1.2*frames.length))];ctx.save();ctx.translate(e.x,GROUND);ctx.drawImage(f,-168,-240,336,256);ctx.restore();}return true;}return false;
  }


  function refreshPlayerStats(){if(!S)return;for(const u of S.units){const st=unitStats(u),ratio=u.m>0?Math.max(0,u.h/u.m):1;Object.assign(u,{m:st.hp,h:st.hp*ratio,d:st.d*(u.potion==='red'?1.5:1),r:st.r,v:st.v*(u.potion==='blue'?1.3:1),a:st.a,def:st.def});}}
  function hitEnemy(t,raw,attacker){
    if(S.desert&&S.desert.phase!=='fight')return 0;if(t.h<=0||isSheltered(t)||S.time<(t.invincibleUntil||0))return 0;
    if((t.type==='seline'||t.type==='fallenSeline')&&S.time<(t.barrierUntil||0)){t.blockUntil=S.time+.4;return 0;}
    const damage=Math.min(t.h,Math.max(1,raw-(t.def||0))*(S.time<(t.guardUntil||0)?['isaac','apprentice','fallenIsaac','fallen_apprentice'].includes(t.type)?.2:t.type==='grunt'?.1:1:1));t.h-=damage;if(attacker)t.lootOwner=attacker;rareHitReaction(t,damage);
    if((t.type==='seline'||t.type==='fallenSeline')&&t.h>0&&Math.random()<.2){t.barrierStart=S.time;t.barrierUntil=S.time+1.5;}
    return damage;
  }
  function drawBarrier(u){
    if(S.time<(u.barrierUntil||0)&&FRAMES.barrier){const pulse=1+.025*Math.sin(S.time*8);ctx.save();ctx.globalAlpha=.8;ctx.translate(u.x+16,GROUND-43+Math.sin((S.time||0)*3)*2);ctx.scale(pulse,pulse);ctx.drawImage(FRAMES.barrier,-51,-55,102,110);ctx.restore();}
    if(S.time<(u.blockUntil||0)){ctx.save();ctx.textAlign='center';ctx.font='bold 17px system-ui';ctx.lineWidth=3;ctx.strokeStyle='#17331e';ctx.fillStyle='#d3ff9a';ctx.strokeText('block',u.x,GROUND-110);ctx.fillText('block',u.x,GROUND-110);ctx.restore();}
  }


  function renderReplay(){const select=q('#replayStage');select.innerHTML='';const stages=[...new Set(profile.clearedStages||[])].sort((a,b)=>a-b);for(const n of stages){const option=document.createElement('option');option.value=String(n);option.textContent=stageLabel(n);select.appendChild(option);}q('#replayButton').disabled=!stages.length;select.disabled=!stages.length;}
  q('#replayButton').addEventListener('click',()=>{const n=Number(q('#replayStage').value);if(S?.over&&profile.clearedStages?.includes(n)&&commitLoadout())startStage(n);});
  function assassinTick(u,dt){
    u.anim=(u.anim||0)+dt;u.cd=Math.max(0,(u.cd||0)-dt*(u.buff?1.2:1));u.attack=Math.max(0,(u.attack||0)-dt);u.stationary=false;
    const speed=u.v*(u.buff?1.2:1);
    if(u.stealthed){u.facing=1;u.x=Math.min(worldRight(),u.x+speed*dt);if(u.x>=worldRight()){u.stealthed=false;u.facing=-1;}return;}
    u.facing??=-1;if(u.x<=250)u.facing=1;if(u.x>=worldRight())u.facing=-1;
    const dir=u.facing,target=S.enemies.filter(e=>e.h>0&&canTarget(u,e)&&(e.x-u.x)*dir>=0).sort((a,b)=>Math.abs(a.x-u.x)-Math.abs(b.x-u.x))[0];
    if(target&&Math.abs(target.x-u.x)<=u.r){u.stationary=true;if(u.cd<=0){const damage=hitEnemy(target,u.d*(u.buff?1.2:1),u);S.activity.assassin.damage+=damage;if(target.h<=0)S.kills.assassin++;u.cd=u.a;u.attack=u.a;sfx('sword');}return;}
    if(!S.bossStage&&Math.abs(u.x-enemyBaseX())<=u.r+8){u.stationary=true;if(u.cd<=0){const damage=Math.min(S.eh,u.d*(u.buff?1.2:1));S.eh-=damage;S.activity.assassin.castle+=damage;u.cd=u.a;u.attack=u.a;sfx('sword');}return;}
    if(u.attack<=0)u.x=Math.max(250,Math.min(worldRight(),u.x+dir*speed*dt));
  }

  q('#giveUpButton').addEventListener('click',()=>{if(S&&!onMain&&S.pause&&!S.over){S.pause=false;clearStage(false);}});
  function frontierLabel(){return stageLabel(Math.max(0,...(profile.clearedStages||[]))+1)+' 스테이지';}
  function returnToFrontier(){const highest=Math.max(0,...(profile.clearedStages||[]));if(!highest){startStage(1);return;}const result=profile.frontierResult?.stage===highest?{...profile.frontierResult.result}:{win:true,title:'STAGE CLEAR',desc:stageLabel(highest)+' 클리어 · 다음 스테이지에 도전하세요.',xp:''};startStage(highest);S.isReplay=false;S.over=true;S.result=result;S.unlockQueue=[];resume();save();}
  function pirateTick(u,dt){u.anim=(u.anim||0)+dt;u.cd=Math.max(0,(u.cd||0)-dt*(u.buff?1.2:1));u.attack=Math.max(0,(u.attack||0)-dt);
    if(u.pendingBomb){u.pendingBomb.delay-=dt;if(u.pendingBomb.delay<=0){S.effects.push({kind:'bomb',from:u.x,x:u.x,to:u.pendingBomb.to,age:0,flight:.7,life:2,damage:u.d*(u.buff?1.2:1)});delete u.pendingBomb;sfx('buy');}return;}
    if(u.attack>0)return;
    const target=S.enemies.filter(e=>e.h>0&&e.x>=u.x&&enemyVisible(e)).sort((a,b)=>a.x-b.x)[0],distance=target?target.x-u.x:enemyBaseX()-u.x;
    if(distance>=0&&distance<=110&&(target||!S.bossStage)){if(u.cd<=0){u.pendingBomb={to:target?target.x:enemyBaseX(),delay:.42};u.cd=u.a;u.attack=.7;}return;}u.x+=u.v*(u.buff?1.2:1)*dt;}
  function enemyVisible(e){return !isHidden(e)||S.time<(e.revealedUntil||0);}
  function isHidden(e){return e.stealthed||e.invisible||['humanAssassin','fallen_humanAssassin','invisibleSkeleton','cursedHand'].includes(e.type);}
  function isAir(e){return ['observer','balloon','fallen_balloon'].includes(e.type);}
  function canTarget(u,e){return !isSheltered(e)&&enemyVisible(e)&&(!isAir(e)||isAir(u)||u.r>=100);}
  function updateDetection(){
    for(const list of [S.units,S.enemies])for(const u of list)u.revealedUntil=0;
    for(const u of S.units)if(u.h>0&&['observer','fallen_scout'].includes(u.type))for(const e of S.enemies)if(e.h>0&&Math.abs(e.x-u.x)<=120)e.revealedUntil=S.time+.1;
    for(const e of S.enemies)if(e.h>0&&e.type==='scout')for(const u of S.units)if(u.h>0&&Math.abs(u.x-e.x)<=120)u.revealedUntil=S.time+.1;
  }
  function updateScouts(dt){if(stageNo<47||S.desert)return;S.scoutClock??=10;S.scoutClock-=dt;while(S.scoutClock<=0){S.scoutClock+=10;if(S.units.some(u=>u.h>0&&isHidden(u))&&Math.random()<.5){const st=enemyStats('scout');S.enemies.push({type:'scout',x:690,y:GROUND,h:st.hp,m:st.hp,...st,def:1,cd:0,anim:0,attack:0,facing:-1});}}}
  function newStealthTick(u,side,dt){
    const source=NEW_UNITS[u.type]?.source||u.type,ally=side==='player';if(!['scout','balloon','humanAssassin'].includes(source))return false;
    u.anim=(u.anim||0)+dt;u.attack=Math.max(0,(u.attack||0)-dt);u.cd=Math.max(0,(u.cd||0)-dt*(u.buff?1.2:1));const speed=u.v*(u.buff?1.2:1),dir=ally?1:-1;
    if(source==='scout'){u.facing??=dir;if(u.x<=22)u.facing=1;if(u.x>=worldRight())u.facing=-1;u.x=Math.max(22,Math.min(worldRight(),u.x+u.facing*speed*dt));return true;}
    if(source==='humanAssassin')u.stealthed=true;
    const [target,dist]=nearest(u,ally?S.enemies:S.units),base=ally?enemyBaseX():232,castle=(!ally||!S.bossStage)&&Math.abs(base-u.x)<=u.r+8;
    if(target&&dist<=u.r||castle){if(u.cd<=0){u.cd=u.a;u.attack=u.a;
      if(source==='balloon'){for(let archer=0;archer<2;archer++){const victim=target&&dist<=u.r?target:null;S.effects.push({kind:'balloonArrow',owner:u,side,from:u.x+(archer?7:-7),fromY:GROUND-155+(archer?4:0),to:victim?victim.x:base,toY:victim&&isAir(victim)?GROUND-100:GROUND-35,target:victim,age:0,flight:.38,life:.5,damage:u.d*(u.buff?1.2:1),hit:false});}sfx('arrow');}
      else if(target&&dist<=u.r){if(ally){const damage=hitEnemy(target,u.d*(u.buff?1.2:1),u);S.activity[u.type].damage+=damage;if(target.h<=0)S.kills[u.type]++;}else hurtSkeleton(target,u.d);}else if(ally){const damage=Math.min(S.eh,u.d);S.eh-=damage;S.activity[u.type].castle+=damage;}else S.ph-=u.d;
    }return true;}if(u.attack<=0)u.x+=dir*speed*dt;return true;
  }
  function updateBalloonArrows(dt){for(const e of S.effects)if(e.kind==='balloonArrow'&&!e.hit){e.age+=dt;if(e.age<e.flight)continue;e.hit=true;e.life=0;if(e.target){if(e.target.h<=0)continue;if(e.side==='player'){const damage=hitEnemy(e.target,e.damage,e.owner);S.activity[e.owner.type].damage+=damage;if(e.target.h<=0)S.kills[e.owner.type]++;}else hurtSkeleton(e.target,e.damage);}else if(e.side==='player'&&!S.bossStage){const damage=Math.min(S.eh,e.damage);S.eh-=damage;S.activity[e.owner.type].castle+=damage;}else if(e.side==='enemy')S.ph-=e.damage;}}
  function drawBalloonArrow(e){if(e.kind!=='balloonArrow')return false;const f=Math.min(1,e.age/e.flight),x=e.from+(e.to-e.from)*f,y=e.fromY+(e.toY-e.fromY)*f,angle=Math.atan2(e.toY-e.fromY,e.to-e.from);ctx.save();ctx.translate(x,y);ctx.rotate(angle);ctx.strokeStyle='#b98b52';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(-12,0);ctx.lineTo(7,0);ctx.stroke();ctx.fillStyle='#e2e7e9';ctx.beginPath();ctx.moveTo(11,0);ctx.lineTo(4,-3);ctx.lineTo(4,3);ctx.closePath();ctx.fill();ctx.restore();return true;}

  function observerTick(u,dt){u.anim=(u.anim||0)+dt;u.attack=Math.max(0,(u.attack||0)-dt);u.cd=Math.max(0,(u.cd||0)-dt*(u.buff?1.2:1));u.facing??=1;u.y=GROUND-78;
    for(const e of S.enemies)if(e.h>0&&Math.abs(e.x-u.x)<=120)e.revealedUntil=S.time+.25;
    const target=S.enemies.filter(e=>e.h>0&&enemyVisible(e)&&Math.abs(e.x-u.x)<=u.r).sort((a,b)=>Math.abs(a.x-u.x)-Math.abs(b.x-u.x))[0];
    if(target&&u.cd<=0){const damage=hitEnemy(target,u.d*(u.buff?1.2:1),u);S.activity.observer.damage+=damage;if(target.h<=0)S.kills.observer++;u.cd=u.a;u.attack=u.a;sfx('sword');}
    if(u.x>=worldRight())u.facing=-1;if(u.x<=22)u.facing=1;u.x=Math.max(22,Math.min(worldRight(),u.x+u.facing*u.v*(u.buff?1.2:1)*dt));
  }

  function updateBombs(dt){for(const e of [...S.effects]){if(e.kind!=='bomb'||e.life<=0)continue;e.age+=dt;e.x=e.from+(e.to-e.from)*Math.min(1,e.age/e.flight);if(e.age<e.flight)continue;e.life=0;for(const target of S.enemies){if(target.h<=0||Math.abs(target.x-e.to)>80)continue;const before=target.h,damage=hitEnemy(target,e.damage,{x:e.from});S.activity.pirate.damage+=damage;if(before>0&&target.h<=0)S.kills.pirate++;}if(!S.bossStage&&Math.abs(enemyBaseX()-e.to)<=80){const damage=Math.min(S.eh,e.damage);S.eh-=damage;S.activity.pirate.castle+=damage;}S.effects.push({kind:'blast',x:e.to,life:.6});sfx('sword');}}
  function drawBombEffect(e){if(e.kind==='bomb'){if(e.life<=0)return true;const p=Math.min(1,e.age/e.flight),y=GROUND-35-Math.sin(p*Math.PI)*65;if(FRAMES.bomb)ctx.drawImage(FRAMES.bomb,e.x-9,y-9,18,22);return true;}if(e.kind==='blast'){if(FRAMES.blast){const frames=FRAMES.blast,f=frames[Math.min(frames.length-1,Math.floor((.6-e.life)/.6*frames.length))];ctx.drawImage(f,e.x-168,GROUND-240,336,256);}return true;}return false;}


  function spawnIsaac(){S.isaacSpawned=true;S.isaacIntroShown=true;S.enemies.push({type:'isaac',x:690,y:GROUND,h:650,m:650,d:45,a:1.5,v:25,r:30,def:3,cd:0,anim:0,attack:0,attackCount:0,guardUntil:0});beginBossIntro('isaac','원정대 견습기사 아이작','다 베어주마!');}
  function isaacTick(u,dt){if(S.time<(u.wakeAt||0)||bossIntroActive()){u.stationary=true;u.attack=0;return;}u.anim=(u.anim||0)+dt;u.attack=Math.max(0,(u.attack||0)-dt);if(S.time<(u.guardUntil||0))return;u.cd=Math.max(0,(u.cd||0)-dt*(u.buff?1.2:1));
    if((u.attackCount||0)>=3&&u.cd<=0){u.guardUntil=S.time+1.5;u.attackCount=0;u.attack=0;return;}
    const [target,dist]=nearest(u,S.units),castle=Math.abs(u.x-232)<=u.r+8;
    if((target&&dist<=u.r)||castle){if(u.cd<=0){if(target&&dist<=u.r)hurtSkeleton(target,45);else S.ph-=45;u.attackCount=(u.attackCount||0)+1;u.cd=1.5;u.attack=1.5;}return;}
    if(u.attack<=0)u.x-=25*dt;
  }

  function unitMargin(u){const type=RARE[u.type]?.source||NEW_UNITS[u.type]?.source||u.type;return type==='boneDragon'?90:type==='balloon'?50:type==='knight'?55:type==='robin'?25:22;}
  function clampUnit(u){const margin=unitMargin(u);u.x=Math.max(margin,Math.min(worldWidth()-margin,Number.isFinite(u.x)?u.x:margin));}
  function combatTick(u,side,dt){clampUnit(u);const beforeX=u.x;updateSpearWindup(u,dt);combatStep(u,side,dt);clampUnit(u);u.stationary=u.x===beforeX;}
  function updateSpearWindup(u,dt){const pending=u.spearWindup;if(!pending)return;if(u.h<=0||S.time<(u.stunUntil||0)){delete u.spearWindup;return;}pending.elapsed+=dt;if(pending.elapsed+1e-8>=pending.release){launchSpear(u,shotTarget(pending.targetId,pending.targetX));delete u.spearWindup;}}
  function aimSpear(u,target){u.spearWindup={targetId:targetIdentity(target),targetX:target?.x??enemyBaseX(),elapsed:0,release:u.a*.75};}
  function targetIdentity(u){if(!u)return null;if(!u.unitId)u.unitId=(S.nextUnitId=(S.nextUnitId||0)+1);return u.unitId;}
  function shotTarget(id,x){return id?[...S.units,...S.enemies].find(u=>u.unitId===id)||{h:0,x}:null;}

  function combatStep(u,side,dt){if(desertCombat(u,dt,side))return;if(u.type==='robinHut')return;if(u.h>0&&!(S.time<(u.stunUntil||0))){if(u.type==='laserKai'){laserTick(u,dt);return;}if(u.type==='robin'||u.type==='fallenRobin'){robinTick(u,side,dt);return;}}if(u.h<=0||S.time<(u.stunUntil||0))return;if(mercenaryTick(u,side,dt))return;if(newStealthTick(u,side,dt))return;if(u.type==='observer'&&side==='player'){observerTick(u,dt);return;}if(advancedTick(u,side,dt))return;
    if(u.h<=0)return;if(u.type==='rifle'||u.type==='cannon'){gunnerTick(u,dt);return;}if(u.type==='grunt'&&stageNo>=17){gruntTick(u,dt);return;}if(u.type==='isaac'||u.type==='apprentice'){isaacTick(u,dt);return;}if(side==='player'&&RARE[u.type]){rareTick(u,dt);return;}if(side==='player'&&u.type==='pirate'){pirateTick(u,dt);return;}if(side==='player'&&u.type==='assassin'){assassinTick(u,dt);return;}if(u.type==='seline'){selineTick(u,dt);return;}if(u.type==='knight'){knightTick(u,dt);return;}if(u.type==='knight'&&S.time<(S.bossWakeAt??15)){u.anim=0;u.attack=0;return;}if(side==='enemy'&&u.type==='healer'){healerTick(u,dt);return;}u.anim=(u.anim||0)+dt;u.attack=Math.max(0,(u.attack||0)-dt);u.guard=Math.max(0,(u.guard||0)-dt);u.cd=Math.max(0,u.cd-dt*(u.buff?1.2:1));
    const foes=side==='player'?S.enemies:S.units,[t,dist]=nearest(u,foes),base=side==='player'?enemyBaseX():232,bd=Math.abs(base-u.x);
    const stationaryRanged=side==='player'&&(u.type==='archer'||u.type==='crossbow'||u.type==='javelin');
    if(stationaryRanged){
      const canAim=(t&&dist<=u.r)||(!S.bossStage&&bd<=u.r+8);
      if(canAim){u.stationary=true;u.stillTime=(u.stillTime||0)+dt;if(u.stillTime<.15)return;}
      else if(u.attack>0){u.stationary=true;return;}
      else{u.stationary=false;u.stillTime=0;}
    }
    if(t&&dist<=u.r){
      if(u.type==='shield'||u.type==='heavyShield'||u.type==='banner'){u.guard=.2;return;}
      if(u.cd<=0){const before=Math.max(0,t.h),raw=u.d*(u.buff?1.2:1),damage=u.type==='javelin'?(aimSpear(u,t),0):hitEnemy(t,raw,side==='player'?u:null);u.cd=u.a;u.attack=u.a;
        if(side==='player'){S.activity[u.type].damage+=damage;sfx(u.type==='archer'||u.type==='crossbow'?'arrow':'sword');if(before>0&&t.h<=0)S.kills[u.type]++;}
        else {S.activity[t.type].taken+=damage;S.activity[t.type].blocked+=Math.min(before,Math.max(0,raw-Math.max(1,raw-(t.def||0))));t.guard=.3;}
      }return;
    }
    if((side==='enemy'||!S.bossStage)&&bd<=u.r+8){if(u.type==='shield'||u.type==='heavyShield'||u.type==='banner')return;if(u.cd<=0){if(side==='player'){const damage=u.type==='javelin'?(aimSpear(u,null),0):Math.min(S.eh,u.d*(u.buff?1.2:1));S.eh-=damage;S.activity[u.type].castle+=damage;sfx(u.type==='archer'||u.type==='crossbow'?'arrow':'sword');}else S.ph-=u.d;u.cd=u.a;u.attack=u.a;}return;}
    u.x+=(side==='player'?1:-1)*u.v*(u.buff?1.2:1)*dt;
  }
  function evolveField(from,to){for(const u of S.units)if(u.type===from){const st=stats(to);u.type=to;u.h=st.hp*u.h/u.m;u.m=st.hp;u.d=st.d*(u.potion==='red'?1.5:1);u.r=st.r;u.v=st.v*(u.potion==='blue'?1.3:1);u.a=st.a;u.def=st.def;}S.build[to]=Math.max(S.build[to]||0,S.build[from]||0);S.build[from]=0;if(profile.loadout)profile.loadout=profile.loadout.map(t=>t===from?to:t);}
  function xpGain(type){if(RARE[type])return 0;
    if(!S.used[type])return 0;
    const a=S.activity[type];
    const contribution=a.damage/35+a.castle/50+(a.support||0)/12+S.kills[type]*5+(a.taken+a.blocked)/35;
    // Positive diminishing marginal reward; each new stage starts its own activity ledger.
    return Math.floor(((type==='shield'||type==='heavyShield')?3:1)*(10+Math.floor(50*Math.log1p(Math.max(0,contribution)/50)))*(S.isReplay?.5:1));
  }
  let chapterStory=null;
  function beginChapterStory(opening=false){
    const path=window.GAME_ASSETS.stories?.[opening?'start':stageNo];if(!path)return false;
    const panel=q('#chapterStory'),image=q('#chapterStoryImage');image.src=path;
    chapterStory={state:S,remaining:3,image,opening};panel.setAttribute('aria-label',opening?'게임 시작 이야기':'챕터 클리어');panel.classList.remove('hidden');UI.overlay.classList.add('hidden');return true;
  }
  function tickChapterStory(dt){if(!chapterStory)return;const story=chapterStory;
    if(story.state!==S||onMain){q('#chapterStory').classList.add('hidden');chapterStory=null;return;}
    if(!story.image.complete)return;
    story.remaining-=dt;if(story.remaining>0)return;
    q('#chapterStory').classList.add('hidden');chapterStory=null;if(!story.opening){UI.overlay.classList.remove('hidden');showUnlock();}
  }
  function clearStage(win){
    if(S.over)return;const previouslyAvailable=availableUnits(); S.over=true;
    if(win){
      if(S.result){for(const key of ['desc','xp'])S.result[key]=S.result[key]?.replace(/해골\s*궁수/g,'스켈레톤궁수');}if(profile.frontierResult?.result){for(const key of ['desc','xp'])profile.frontierResult.result[key]=profile.frontierResult.result[key]?.replace(/해골\s*궁수/g,'스켈레톤궁수');}
    S.isaacSpawned??=S.enemies.some(e=>e.type==='isaac');
    profile.pirateUnlocked??=(stageNo>24||(stageNo===24&&S.result?.win));S.isReplay??=false;for(const e of S.enemies)if(e.type==='healer')e.r=120;if(S.result)S.result.xp=S.result.xp.replace(/<div class="xpBreakdown">활약이 많아질수록.*?<\/div>/g,'');
    profile.clearedStages??=[];if(!profile.clearedStages.includes(stageNo))profile.clearedStages.push(stageNo);
      if(!profile.dogUnlocked&&Math.random()<.01){profile.dogUnlocked=true;profile.level.dog=1;profile.xp.dog=0;}
      const gains={},before={soldier:profile.evolved,archer:profile.archerEvolved,shield:profile.shieldEvolved,assault:profile.darkUnlocked},unlocks=[];
      const earned=Object.keys(UNIT_NAMES).filter(t=>!RARE[t]&&!NEW_UNITS[t]?.summonOnly&&S.used[t]>0&&!(t==='soldier'&&before.soldier)&&!(t==='archer'&&before.archer)&&!(t==='shield'&&before.shield)&&!(t==='assault'&&before.assault)&&!(t==='dog'&&profile.cerberusUnlocked)&&!(t==='crossbow'&&profile.javelinUnlocked));
      for(const t of earned){gains[t]=xpGain(t);profile.xp[t]+=gains[t];levelCheck(t);}
      if(!before.soldier&&profile.evolved){evolveField('soldier','warrior');unlocks.push('✨ 스켈레톤 워리어 해금! 병사 Lv.10 → 워리어 Lv.1');}
      if(!before.archer&&profile.archerEvolved){evolveField('archer','crossbow');unlocks.push('✨ 스켈레톤 석궁수 해금! 궁수 Lv.10 → 석궁수 Lv.1');}
      if(!before.assault&&profile.darkUnlocked){evolveField('assault','darkAssault');unlocks.push('✨ 돌격병 Lv.7 → 암흑돌격병 Lv.1로 진화!');}
      if(!before.shield&&profile.shieldEvolved){evolveField('shield','heavyShield');unlocks.push('✨ 중방패병 해금! 방패병 Lv.7 → 중방패병 Lv.1');}
      if(stageNo>=24&&!profile.pirateUnlocked){profile.pirateUnlocked=true;unlocks.push('🔓 스켈레톤 해적 해금! 폭탄으로 범위 공격을 합니다.');}
      if(stageNo>=19&&!profile.bannerUnlocked){profile.bannerUnlocked=true;unlocks.push('🔓 스켈레톤 기수 해금! 주변 아군 공격력·공격속도·이동속도 +20%');}
      if(stageNo>=15&&!profile.assassinUnlocked){profile.assassinUnlocked=true;unlocks.push('🔓 스켈레톤 암살자 해금!');}
      if(stageNo>=2&&!profile.archerUnlocked){profile.archerUnlocked=true;unlocks.push('🔓 스켈레톤궁수 해금! 이제 궁수를 생산할 수 있습니다.');}
      if(stageNo>=9&&!profile.assaultUnlocked){profile.assaultUnlocked=true;unlocks.push('🔓 스켈레톤 돌격병 해금! 빠른 이동과 연속 공격으로 돌격합니다.');}
      if(stageNo>=5&&!profile.shieldUnlocked){profile.shieldUnlocked=true;unlocks.push('🔓 스켈레톤 방패병 해금! 공격 없이 전선을 지키는 수비 유닛입니다.');}
      unlockAdvanced();refreshPlayerStats();sfx('win');UI.rTitle.textContent='STAGE CLEAR';UI.rDesc.textContent=(S.bossStage?(S.desert?desertName():stageNo===50?'로빈 훗':stageNo===40?'용병단':stageNo===30?'필':stageNo===20?'셀리네':'원정대장 프라함')+'를 쓰러뜨렸습니다! 다음 스테이지는 '+stageLabel(stageNo+1)+'입니다.\n':'')+(unlocks.length?unlocks.join('\n'):S.bossStage?'':'적의 성을 파괴했습니다.');
      UI.xp.innerHTML=earned.map(t=>{const a=S.activity[t];return '<div>'+UNIT_NAMES[t]+' EXP +'+gains[t]+'</div><div class="xpBreakdown">피해 '+Math.floor(a.damage)+' · 성 피해 '+Math.floor(a.castle)+' · 처치 '+S.kills[t]+' · 받은/막은 피해 '+Math.floor(a.taken+a.blocked)+'</div>';}).join('');
      q('#resultNext').textContent=S.isReplay?frontierLabel():S.bossStage?stageLabel(stageNo+1)+'로 이동':'다음 스테이지';q('#resultNext').disabled=false; q('#resultNext').style.opacity='1'; q('#resultIcon').textContent='🏆';
    } else {
      for(const w of S.workers)S.corpses.push({...w,death:0});S.workers=[];sfx('lose'); UI.rTitle.textContent='DEFEAT'; UI.rDesc.textContent='언데드 성이 파괴되었습니다.'; UI.xp.textContent='패배 시 경험치는 획득하지 않습니다.';
      q('#resultNext').textContent=frontierLabel();q('#resultNext').disabled=false; q('#resultNext').style.opacity='1'; q('#resultIcon').textContent='💀';
    }
    const newlyAvailable=win?availableUnits().filter(t=>!previouslyAvailable.includes(t)):[];normalizeLoadout();for(const type of newlyAvailable)if((isEx(type)||loadoutCount()<4)&&!profile.loadout.includes(type))profile.loadout.push(type);S.unlockQueue=[...new Set([...(S.unlockQueue||[]),...newlyAvailable])];
    S.result={win,title:UI.rTitle.textContent,desc:UI.rDesc.textContent,xp:UI.xp.innerHTML};if(win&&!S.isReplay&&stageNo>=(profile.frontierResult?.stage||0))profile.frontierResult={stage:stageNo,result:{...S.result}}; UI.overlay.classList.remove('hidden');renderLoadout();renderReplay();if(!(win&&beginChapterStory()))showUnlock(); updateUI();save();
  }

  function isEx(type){return RARE[type]?.tier==='ex';}
  function loadoutCount(){return (profile.loadout||[]).filter(t=>!isEx(t)).length;}
  function isSheltered(u){return !!u&&u.hiddenUntil!==undefined;}
  function specialHitReaction(u,damage){if(damage<=0)return;if(u.type==='laserKai'&&u.charge>0){u.charge=0;u.attack=0;}if((u.type==='robin'||u.type==='fallenRobin')&&u.h>0&&u.retreatTo===undefined&&!isSheltered(u)&&Math.random()<.15){const dir=u.type==='robin'?1:-1;u.retreatTo=Math.max(unitMargin(u),Math.min(worldWidth()-unitMargin(u),u.x+dir*400));u.attack=0;delete u.jumpAge;delete u.robinShot;}}
  function laserTick(u,dt){u.anim=(u.anim||0)+dt;u.stationary=true;if(u.beamRemaining>0){const elapsed=Math.min(dt,u.beamRemaining);u.beamRemaining=Math.max(0,u.beamRemaining-elapsed);u.beamClock=(u.beamClock||0)+elapsed;while(u.beamClock>=.5-1e-8){u.beamClock-=.5;for(const e of S.enemies)if(e.h>0&&!isSheltered(e)&&e.x>=u.x&&e.x<=u.x+500){const dealt=hitEnemy(e,u.d,u);if(S.activity[u.type])S.activity[u.type].damage+=dealt;}if(!S.bossStage&&enemyBaseX()>=u.x&&enemyBaseX()<=u.x+500)S.eh=Math.max(0,S.eh-u.d);}if(!u.beamRemaining){u.charge=0;u.attack=0;}return;}
    const target=S.enemies.find(e=>e.h>0&&canTarget(u,e)&&e.x>=u.x&&e.x-u.x<=200),castle=!S.bossStage&&enemyBaseX()-u.x<=200;
    if(target||castle||u.charge>0){u.charge=(u.charge||0)+dt;if(u.charge>=8-1e-8){u.charge=0;u.beamRemaining=8;u.beamClock=0;}return;}u.x=Math.min(worldRight(),u.x+u.v*dt);u.stationary=false;
  }
  function robinBow(u,enemy){return {x:u.x+(enemy?-15:15),y:GROUND-20-(u.jumpAge!==undefined?Math.sin(Math.min(1,u.jumpAge/.5)*Math.PI)*40:0)};}
  function updateRobinShot(u,side,dt){const shot=u.robinShot;if(!shot)return;shot.elapsed+=dt;if(shot.elapsed+1e-8<shot.release)return;delete u.robinShot;const target=shotTarget(shot.targetId,shot.toX);const origin=robinBow(u,side==='enemy');S.effects.push({kind:'balloonArrow',from:origin.x,to:shot.toX,fromY:origin.y,toY:GROUND-(target&&isAir(target)?118:28),age:0,flight:Math.max(.08,Math.abs(shot.toX-origin.x)/650),life:3,target,side,owner:u,damage:shot.damage});}
  function robinTick(u,side,dt){const enemy=side==='enemy',dir=enemy?-1:1;u.anim=(u.anim||0)+dt;u.attack=Math.max(0,(u.attack||0)-dt);u.cd=Math.max(0,(u.cd||0)-dt);const hut=enemy?S.enemies.find(e=>e.type==='robinHut'&&e.h>0):null,home=enemy?hut?.x:250,homeAlive=enemy?!!hut:S.ph>0;
    if(isSheltered(u)){u.stationary=true;if(!homeAlive||S.time>=u.hiddenUntil){if(homeAlive)u.h=Math.min(u.m,u.h+500);delete u.hiddenUntil;u.x=homeAlive?home+dir*45:u.x;u.cd=.5;}return;}
    if(u.retreatTo!==undefined){u.stationary=false;u.retreatTo=Math.max(unitMargin(u),Math.min(worldWidth()-unitMargin(u),u.retreatTo));const back=-dir,step=180*dt;u.x+=back*Math.min(step,Math.abs(u.retreatTo-u.x));if(homeAlive&&((enemy&&u.x>=home-12)||(!enemy&&u.x<=home+12))){u.x=home;u.hiddenUntil=S.time+3;delete u.retreatTo;return;}if(Math.abs(u.x-u.retreatTo)<.01)delete u.retreatTo;return;}
    if(u.jumpAge!==undefined){u.jumpAge+=dt;u.x=Math.max(22,Math.min(worldRight(),u.jumpStart-dir*100*Math.min(1,u.jumpAge/.5)));updateRobinShot(u,side,dt);if(u.jumpAge>=.5)delete u.jumpAge;return;}
    updateRobinShot(u,side,dt);
    const foes=(enemy?S.units:S.enemies).filter(e=>e.h>0&&canTarget(u,e)).sort((a,b)=>Math.abs(a.x-u.x)-Math.abs(b.x-u.x));const target=foes[0],distance=target?Math.abs(target.x-u.x):Infinity,base=enemy?232:enemyBaseX(),castle=(enemy||!S.bossStage)&&Math.abs(base-u.x)<=u.r;
    u.stationary=false;if(distance<=u.r||castle){u.stationary=true;if(u.cd<=0){const jump=Math.random()<.10;u.cd=u.a;u.attack=u.a;if(jump){u.jumpAge=0;u.jumpStart=u.x;}const hit=target&&distance<=(jump?300:u.r)?target:null,toX=hit?hit.x:base;u.robinShot={targetId:targetIdentity(hit),toX,elapsed:0,release:jump?.25:u.a*.5,damage:jump?(enemy?800:400):u.d};}return;}
    if(u.attack<=0)u.x=Math.max(22,Math.min(worldRight(),u.x+dir*u.v*dt));
  }
  function drawRecovery(x){ctx.save();ctx.globalAlpha=.55;ctx.fillStyle='#ef4444';ctx.fillRect(x-3,GROUND-160,6,20);ctx.fillRect(x-10,GROUND-153,20,6);ctx.restore();}
  function drawRobinHut(u){if(u.h<=0)return;const im=FRAMES.robinHut;if(im)ctx.drawImage(im,u.x-100,GROUND-180,200,180);drawHp(u.x-40,GROUND-190,80,u.h/u.m,true);if(S.enemies.some(e=>e.type==='robin'&&isSheltered(e)))drawRecovery(u.x);}
  let laserMouthOffset={x:15.3,y:-23.2};
  function laserMuzzle(u){return {x:u.x+laserMouthOffset.x,y:GROUND+laserMouthOffset.y};}
  function drawLaser(u){if(!(u.beamRemaining>0))return;ctx.save();const {x,y}=laserMuzzle(u),width=Math.max(0,Math.min(u.x+500,worldRight())-x);ctx.globalAlpha=.8+.15*Math.sin(S.time*40);ctx.shadowColor='#20bfff';ctx.shadowBlur=16;ctx.fillStyle='#1b9fff';ctx.fillRect(x,y-15,width,30);ctx.fillStyle='#7ceeff';ctx.fillRect(x,y-7.5,width,15);ctx.fillStyle='#fff';ctx.fillRect(x,y-3,width,6);if(FRAMES.laserBeam)ctx.drawImage(FRAMES.laserBeam,x,y-19.5,width,39);ctx.restore();}

  function update(dt){
    if(!S||onMain||S.pause||S.over||chapterStory?.opening)return; S.time+=dt;if(desertIntroTick(dt))return;mercenaryCamera();if(bossIntroActive())return;updateMercenaryShots(dt);if(stageNo===8&&!S.isaacSpawned&&S.time>=15){spawnIsaac();}S.effects=S.effects.filter(e=>(e.life-=dt)>0);
    for(const w of S.workers){workerTick(w,dt);clampUnit(w);}
    for(const k of Object.keys(S.build)){if(S.build[k]>0){S.build[k]-=dt;if(S.build[k]<=0){S.build[k]=0;finishBuild(k)}}}
    updateAdvancedEffects(dt);updateDragonFear(dt);updateSpears(dt);updateShells(dt);updateBombs(dt);updateMagic(dt);S.spawn-=dt; if(S.spawn<=0)spawnEnemy();
    updateScouts(dt);updateDetection();updateBalloonArrows(dt);updateAuras(dt);updateDesertEffects(dt);for(const u of S.units)combatTick(u,'player',dt); for(const e of S.enemies)combatTick(e,'enemy',dt);
    desertDeaths();for(const e of S.enemies)if(e.h<=0){if(transformUnit(e))continue;if(e.type==='cannon'&&!e.deathBurst){e.deathBurst=true;cannonBlast(e.x,80,40);}awardDrop(e);}
    for(const u of [...S.units])if(u.h<=0){if(u.type==='invisibleSkeleton'&&!u.handsDropped){u.handsDropped=true;for(const offset of [-5,5]){const st=stats('cursedHand');S.units.push({type:'cursedHand',handSide:offset<0?'left':'right',stealthed:true,x:u.x+offset,y:GROUND,h:st.hp,m:st.hp,d:st.d,r:st.r,a:st.a,v:st.v,def:st.def,cd:.1,anim:0,attack:0});S.used.cursedHand=(S.used.cursedHand||0)+1;}}if(transformUnit(u))continue;if(u.type==='fallen_cannon'&&!u.deathBurst){u.deathBurst=true;alliedBurst(u,80,40);}}for(const list of [S.units,S.enemies])for(const u of list)if(u.h<=0&&!['robinHut','pyramid'].includes(u.type))S.corpses.push({...u,death:0,enemy:list===S.enemies});
    S.corpses=S.corpses.filter(u=>(u.death+=dt)<1.3);
    if(S.desert){S.eh=S.enemies.reduce((v,e)=>v+(DESERT_STATS[e.type]?Math.max(0,e.h):0),0);if(S.desert.deathAt||S.desert.coffinAt)S.eh=Math.max(1,S.eh);}else if(stageNo===40&&S.mercenaryBattle){S.eh=S.enemies.reduce((sum,e)=>sum+(MERCENARIES[e.type]?Math.max(0,e.h):0),0);}else if(S.bossStage){const boss=S.enemies.find(e=>e.type===(stageNo===50?'robin':stageNo===30?'phil':stageNo===20?'seline':'knight'));S.eh=boss?Math.max(0,boss.h):0;}
    S.units=S.units.filter(v=>v.h>0); S.enemies=S.enemies.filter(v=>v.h>0); S.ph=Math.max(0,S.ph); S.eh=Math.max(0,S.eh);
    if(S.eh<=0&&stageNo===30&&!S.philSpawned)spawnPhil();else if(S.eh<=0)clearStage(true); else if(S.ph<=0)clearStage(false);
  }

  function oldDrawCastle(x,y,enemy=false){ctx.fillStyle=enemy?'#6b4541':'#414654';ctx.fillRect(x,y,74,105);ctx.fillStyle=enemy?'#86534d':'#525a6d';ctx.fillRect(x+5,y-20,25,25);ctx.fillRect(x+44,y-20,25,25);ctx.fillStyle='#16171b';ctx.fillRect(x+27,y+58,22,47)}
  function flame(g,x,y,size,time,seed){
    const sway=Math.sin(time*5+seed)*size*.22,height=size*(1+.16*Math.sin(time*8+seed*2));
    g.save();g.translate(x,y);g.globalAlpha=.55+.13*Math.sin(time*7+seed);g.shadowColor='#ff791f';g.shadowBlur=size*.6;
    g.fillStyle='#f66b18';g.beginPath();g.moveTo(-size*.35,0);g.quadraticCurveTo(-size*.55,-height*.45,sway,-height);g.quadraticCurveTo(size*.1,-height*.4,size*.35,0);g.closePath();g.fill();
    g.shadowBlur=0;g.fillStyle='#ffd77c';g.beginPath();g.moveTo(-size*.17,0);g.quadraticCurveTo(-size*.2,-height*.3,sway*.5,-height*.62);g.quadraticCurveTo(size*.2,-height*.2,size*.17,0);g.closePath();g.fill();g.restore();
  }
  function castleFire(enemy,hp,im,width){
    if(hp<=0)return;const damaged=hp<.5,points=enemy?(damaged?[[.35,.47],[.54,.3],[.71,.54]]:[]):(damaged?[[.25,.52],[.58,.42],[.75,.6]]:[[.2,.51],[.79,.57]]);
    const height=im.height/im.width*width,left=enemy?enemyBaseX()-60:90,top=GROUND-height,time=performance.now()/1000;
    for(let i=0;i<points.length;i++){const [x,y]=points[i];flame(ctx,left+x*width,top+y*height,damaged?10:7,time,i+Number(enemy)*4);}
  }
  function drawCastle(x,y,enemy=false){if(enemy&&S.bossStage)return;const hp=enemy?(stageNo===40?1:S.eh/S.em):S.ph/S.pm;const key=enemy?'humanCastle':'skeletonCastle';const frames=FRAMES[key];if(!frames)return;const im=frames[hp<=0?2:hp<.5?1:0];const width=enemy?159:174;drawScenery(im,enemy?enemyBaseX()-60:90,GROUND-im.height/im.width*width,width,im.height/im.width*width);if(!reducedMotion?.matches&&!(enemy&&stageNo===40))castleFire(enemy,hp,im,width);}
  function drawEnemy(e){if(e.coffinUntil){const frames=FRAMES.pharaoh?.death;if(frames)ctx.drawImage(frames[frames.length-1],e.x-84,GROUND-128,168,128);return;}if(e.type==='pharaoh'&&S.time<(e.invincibleUntil||0)){ctx.save();ctx.shadowColor='#fff4a0';ctx.shadowBlur=35;drawSprite('pharaoh',e,false);ctx.restore();return;}if(e.type==='pyramid'){if(FRAMES.pyramid)ctx.drawImage(FRAMES.pyramid,e.x-130,GROUND-175,260,175);drawHp(e.x-60,GROUND-185,120,e.h/e.m,true);return;}if(e.type==='robinHut'){drawRobinHut(e);return;}if(isSheltered(e))return;drawStun(e);drawSprite(enemySprite(e.type),e,false);if(e.type==='seline')drawBarrier(e);!['knight','seline'].includes(e.type)&&drawHp(e.x-18-(e.type==='heavy'?12:0),GROUND-60-(e.type==='anubis'?55:e.type==='balloon'?170:isAir(e)?78:0),36,e.h/e.m,true)}
  function drawUnit(u){if(isSheltered(u)){drawRecovery(250);return;}if(u.type==='laserKai')drawLaser(u);if(u.type==='banner'){ctx.save();ctx.strokeStyle=(profile.level.banner||1)>=10?'#ff4242aa':'#e8b96a66';ctx.beginPath();ctx.ellipse(u.x,GROUND,bannerRange(),12,0,0,Math.PI*2);ctx.stroke();ctx.restore();}if(u.buff){ctx.fillStyle=u.buffRed?'#ff4242':'#ffcf7b';ctx.font='10px system-ui';ctx.fillText('▲',u.x,GROUND-65);}drawSprite(u.type,u);if(u.type==='fallenSeline'){drawBarrier(u);drawOrbit(u);}drawStun(u);drawHp(u.x-20,GROUND-60-(u.type==='fallenAnubis'?55:u.type==='fallen_balloon'?170:isAir(u)?78:0),40,u.h/u.m,false)}
  function drawWorker(w){drawSprite(w.type,w,w.phase==='out');}
  function drawHp(x,y,w,p,e){ctx.fillStyle='rgba(0,0,0,.45)';ctx.fillRect(x,y,w,4);ctx.fillStyle=e?'#9a4e4e':'#668459';ctx.fillRect(x,y,w*Math.max(0,Math.min(1,p)),4)}
  function draw(){
    if(!S)return;
    ctx.save();ctx.translate(-(S.cameraX||0),0);if(stageNo>=51&&stageNo<=80&&FRAMES.desertWide){const im=FRAMES.desertWide;ctx.drawImage(im,0,100,im.width,im.height-100,0,0,worldWidth(),350);}else if(stageNo===50&&FRAMES.winterWide){const im=FRAMES.winterWide;ctx.drawImage(im,0,60,im.width,im.height*.70-60,0,0,1600,350);}else if(stageNo===40&&FRAMES.mercenaryBackground){const im=FRAMES.mercenaryBackground;ctx.drawImage(im,0,80,im.width,im.height-80,0,0,1600,350);ctx.fillStyle="rgba(0,0,0,.22)";ctx.fillRect(0,0,1600,350);}else for(let tile=0;tile<worldWidth()/800;tile++){ctx.save();ctx.translate(tile*800,0);
    const background=FRAMES.background;
    if(stageNo>=31&&FRAMES.extraBackground){const im=FRAMES.extraBackground,index=Math.min(7,Math.floor((stageNo-31)/10)),col=index%2,rr=Math.floor(index/2),ys=[0,218,423,609,801];ctx.drawImage(im,col*768,ys[rr]+48,768,ys[rr+1]-ys[rr]-50,0,0,800,350);}
    else if(background){const chapter=Math.min(2,Math.floor((stageNo-1)/10)),rows=[[0,338],[342,336],[682,342]],row=rows[chapter];
      // Exclude the reference labels at the left while retaining each full sky and ground.
      const sx=310*background.width/1536,sy=row[0]*background.height/1024,sh=row[1]*background.height/1024;
      ctx.drawImage(background,sx,sy,background.width-sx,sh,0,0,800,350);
    }else{ctx.fillStyle='#273448';ctx.fillRect(0,0,800,350);}
    ctx.restore();}
    drawCastle(250,190,false);drawCastle(702,190,true);
    if(FRAMES.forest)drawScenery(FRAMES.forest,0,190,116,105);if(FRAMES.mine)drawScenery(FRAMES.mine,75,220,85,75);
    ctx.fillStyle='#ddd';ctx.font='11px system-ui';ctx.textAlign='center';ctx.fillText('숲',45.5,165);ctx.fillText('탄광',115.5,218);
    for(const u of S.corpses)drawSprite(u.enemy?(enemySprite(u.type)):u.type,u,false);
    for(const w of S.workers)drawWorker(w);for(const u of S.units)drawUnit(u);for(const e of S.enemies){drawEnemy(e);if(e.type==='seline'&&e.h>0)drawOrbit(e);}
    drawHp(142,145,72,S.ph/S.pm,false);if(!S.bossStage)drawHp(685,145,72,S.eh/S.em,true);

    for(const e of S.effects){if(drawDesertEffect(e))continue;if(drawMercenaryEffect(e)||drawBalloonArrow(e)||drawGunEffect(e)||drawExtraEffect(e))continue;if(drawBombEffect(e)||drawMagicEffect(e))continue;if(e.kind==='holy'){ctx.save();ctx.globalAlpha=Math.min(1,e.life*2);ctx.fillStyle='#ffdf7433';ctx.strokeStyle='#ffeaa1';ctx.lineWidth=2;ctx.beginPath();ctx.ellipse(e.x,GROUND,e.radius,12,0,0,Math.PI*2);ctx.fill();ctx.stroke();ctx.fillStyle='#fff0ba';ctx.font='12px system-ui';ctx.textAlign='center';ctx.restore();continue;}if(e.kind==='slash'){ctx.save();ctx.globalAlpha=Math.min(1,e.life*3);if(e.wave){ctx.translate(e.x-(1-e.life)*145,GROUND-45);ctx.shadowColor='#75dcff';ctx.shadowBlur=15;ctx.fillStyle='#a9eaff';ctx.strokeStyle='#e3fbff';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(-66,0);ctx.lineTo(-44,-9);ctx.lineTo(20,-6);ctx.lineTo(20,-20);ctx.lineTo(27,-20);ctx.lineTo(27,-5);ctx.lineTo(48,-5);ctx.lineTo(48,5);ctx.lineTo(27,5);ctx.lineTo(27,20);ctx.lineTo(20,20);ctx.lineTo(20,6);ctx.lineTo(-44,9);ctx.closePath();ctx.fill();ctx.stroke();}else{ctx.strokeStyle='#ffe4a3';ctx.lineWidth=4;ctx.beginPath();ctx.arc(e.x,GROUND-45,32,-1.2,1.2);ctx.stroke();}ctx.restore();continue;}ctx.save();ctx.globalAlpha=Math.min(1,e.life*2);ctx.strokeStyle='#91ef98';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(e.from,GROUND-35);ctx.lineTo(e.x,GROUND-35);ctx.stroke();ctx.fillStyle='#b4ffbd';ctx.font='bold 13px system-ui';ctx.textAlign='center';ctx.fillText('+'+Math.ceil(e.amount),e.x,GROUND-58-(1-e.life)*12);ctx.restore();}
    drawMercenaryIntro();ctx.restore();
    drawBossIntro();drawDesertOverlay();

    if(S.pause&&!S.over){ctx.fillStyle='rgba(0,0,0,.45)';ctx.fillRect(0,0,800,350);ctx.fillStyle='white';ctx.font='bold 28px system-ui';ctx.fillText('일시정지',400,175)}
  }

  function updateUI(){
    updateGoldUI();updateRareShop();updateAddedShop();q('#cameraControls').classList.toggle('hidden',!S||(worldWidth()===800)||S.over||!cameraReady());
    if(!S)return;
    q('#pauseActions').classList.toggle('hidden',!S.pause||S.over);
    q('#enemyLabel').textContent=S.bossStage?(S.desert?desertName():stageNo===50?'🏹 로빈 훗':stageNo===40?'⚔ 용병단':stageNo===30?'✦ 필':stageNo===20?'✦ 셀리네':'⚔ 원정대장 프라함'):'🏰 적 성';q('#bossBanner').classList.toggle('hidden',!S.bossStage);
    q('#bossName').textContent=S.desert?desertName():stageNo===50?'로빈 훗':stageNo===40?'⚔ 용병단 · '+S.enemies.filter(e=>MERCENARIES[e.type]&&e.h>0).length+' / 4명':stageNo===30?'테넨제국의 천재소년 필':stageNo===20?'✦ 프렌의 수호마법사 셀리네':'⚔ 원정대장 프라함';if(S.bossStage){q('#bossGauge').style.width=(100*S.eh/S.em)+'%';q('#bossGauge').parentElement.setAttribute('aria-valuenow',Math.round(100*S.eh/S.em));}
    UI.wood.textContent=Math.floor(S.wood);UI.coal.textContent=Math.floor(S.coal);UI.pop.textContent=pop()+' / '+S.cap;UI.php.textContent=Math.ceil(S.ph);UI.ehp.textContent=S.bossStage?'BOSS':Math.ceil(S.eh);
    UI.timer.textContent=Math.floor(S.time/60)+':'+Math.floor(S.time%60).toString().padStart(2,'0'); UI.archerLock.classList.toggle('hidden',profile.archerUnlocked);
    const melee=profile.evolved?'warrior':'soldier'; UI.soldierLv.textContent='Lv.'+profile.level[melee]+' · EXP '+profile.xp[melee]+'/100'; q('#meleeName').textContent=profile.evolved?'스켈레톤 워리어':'스켈레톤병';q('#meleeCost').textContent=costText(melee);if(FRAMES[melee]&&q('#soldierIcon').dataset.unit!==melee){q('#soldierIcon').src=FRAMES[melee].walk[0].toDataURL();q('#soldierIcon').dataset.unit=melee;q('#soldierIcon').alt=profile.evolved?'스켈레톤 워리어':'스켈레톤 병사';} UI.archerLv.textContent='Lv.'+profile.level.archer+' · EXP '+profile.xp.archer+'/100';
    UI.soldierXp.style.width=profile.xp[melee]+'%'; UI.archerXp.style.width=profile.xp.archer+'%';
    updateNewShop();updateLoadoutShop();updateCounts();const defs={wood:2.2,coal:2.4,soldier:1.7,archer:2.3,warrior:1.7,crossbow:2.3,shield:2.8,assault:1.5,heavyShield:2.8,assassin:2,banner:2.5,darkAssault:1.5,pirate:2.5}; const ids={wood:'#barWoodWorker',coal:'#barCoalWorker',soldier:'#barSoldier',archer:'#barArcher',warrior:'#barSoldier',crossbow:'#barArcher',shield:'#barShield',assault:'#barAssault',heavyShield:'#barShield',assassin:'#barAssassin',banner:'#barBanner',darkAssault:'#barDarkAssault',pirate:'#barPirate'};
    for(const k in defs){if(k==='shield'&&profile.shieldEvolved||k==='heavyShield'&&!profile.shieldEvolved||k==='soldier'&&profile.evolved||k==='warrior'&&!profile.evolved||k==='archer'&&profile.archerEvolved||k==='crossbow'&&!profile.archerEvolved)continue;const b=q(ids[k]);b.style.width=S.build[k]>0?((1-S.build[k]/defs[k])*100)+'%':'0%'}
    q('#buyWoodWorker').disabled=S.over||S.pause||!afford('wood')||S.build.wood>0||pop()>=S.cap;
    q('#buyCoalWorker').disabled=S.over||S.pause||!afford('coal')||S.build.coal>0||pop()>=S.cap;
    q('#buySoldier').disabled=S.over||S.pause||!afford(melee)||S.build[melee]>0||pop()>=S.cap;
    q('#buyArcher').classList.toggle('hidden',profile.javelinUnlocked||!profile.loadout.some(t=>t==='archer'||t==='crossbow'));q('#buyArcher').disabled=S.over||S.pause||!profile.archerUnlocked||!afford(profile.javelinUnlocked?'javelin':profile.archerEvolved?'crossbow':'archer')||S.build[profile.javelinUnlocked?'javelin':profile.archerEvolved?'crossbow':'archer']>0||pop()>=S.cap;
  }

  function newGame(){
    if(!confirm('새 게임을 시작하면 현재 스테이지, 유닛 해금, 진화, 레벨과 경험치, 골드와 아이템이 모두 초기화됩니다. 1-1부터 처음 시작할까요?'))return false;
    initAudio();profile=freshProfile();q('#mainNotice').textContent='';tone(330,.07);startStage(1);beginChapterStory(true);return true;
  }
  q('#gameStart').addEventListener('click',newGame);
  q('#soundBtn').addEventListener('click',()=>{initAudio();muted=!muted;q('#soundBtn').textContent=muted?'🔇':'🔊';if(!muted)tone(500,.05)});
  q('#pauseBtn').addEventListener('click',()=>{if(!S||S.over)return;S.pause=!S.pause;q('#pauseBtn').textContent=S.pause?'▶':'⏸';q('#pauseActions').classList.toggle('hidden',!S.pause);});
  q('#buyWoodWorker').addEventListener('click',()=>buy('wood'));
  q('#buyCoalWorker').addEventListener('click',()=>buy('coal'));
  q('#buySoldier').addEventListener('click',()=>buy(profile.evolved?'warrior':'soldier'));
  q('#buyArcher').addEventListener('click',()=>buy(profile.javelinUnlocked?'javelin':profile.archerEvolved?'crossbow':'archer'));
  q('#resultMain').addEventListener('click',goMain);
  q('#mainBtn').addEventListener('click',goMain);
  q('#continueBtn').addEventListener('click',resume);
  q('#resultRetry').addEventListener('click',()=>{if(commitLoadout())startStage(stageNo)});
  q('#resultNext').addEventListener('click',()=>{if(!q('#resultNext').disabled&&commitLoadout()){if(S.isReplay||!S.result?.win)startStage(Math.max(0,...(profile.clearedStages||[]))+1);else startStage(stageNo+1);}});

  function updateNewShop(){
    q('#assaultLock').classList.toggle('hidden',profile.assaultUnlocked);q('#assaultLv').textContent='Lv.'+profile.level.assault+' · EXP '+profile.xp.assault+'/100';q('#assaultXp').style.width=profile.xp.assault+'%';q('#buyAssault').disabled=S.over||S.pause||!afford('assault')||S.build.assault>0||pop()>=S.cap;
    const ranged=profile.javelinUnlocked?'javelin':profile.archerEvolved?'crossbow':'archer';
    q('#rangedName').textContent=UNIT_NAMES[ranged];q('#rangedCost').textContent=costText(ranged);
    UI.archerLv.textContent='Lv.'+profile.level[ranged]+' · EXP '+profile.xp[ranged]+'/100';UI.archerXp.style.width=profile.xp[ranged]+'%';
    if(FRAMES[ranged]&&q('#archerIcon').dataset.unit!==ranged){q('#archerIcon').src=FRAMES[ranged].walk[0].toDataURL();q('#archerIcon').dataset.unit=ranged;q('#archerIcon').alt=UNIT_NAMES[ranged];}
    q('#shieldLock').classList.toggle('hidden',profile.shieldUnlocked);const tank=profile.shieldEvolved?'heavyShield':'shield';q('#shieldLv').textContent='Lv.'+profile.level[tank]+' · EXP '+profile.xp[tank]+'/100';q('#shieldXp').style.width=profile.xp[tank]+'%';q('#shieldName').textContent=UNIT_NAMES[tank];q('#shieldCost').textContent=costText(tank);if(FRAMES[tank]&&q('#shieldIcon').dataset.unit!==tank){q('#shieldIcon').src=FRAMES[tank].walk[0].toDataURL();q('#shieldIcon').dataset.unit=tank;}
    q('#buyShield').disabled=S.over||S.pause||!profile.shieldUnlocked||!afford(tank)||S.build[tank]>0||pop()>=S.cap;
  }
  function migrate(version){
    for(const u of [...S.units,...S.enemies]){if(['anubis','fallenAnubis'].includes(u.type)&&u.d===800)u.d=560;const summoned=stageNo===80&&['sphinx','anubis'].includes(u.type);const max=summoned?(u.type==='sphinx'?2835:3450):u.type==='sphinx'?9450:u.type==='fallenSphinx'?4725:0;if(summoned)u.pharaohSummoned=true;if(max&&u.m!==max){u.h=max*Math.max(0,u.h/u.m);u.m=max;}}if(S.desert){S.eh=S.enemies.reduce((sum,u)=>sum+(['sphinx','anubis','pharaoh','pyramid'].includes(u.type)?Math.max(0,u.h):0),0);S.em=Math.max(S.eh,S.enemies.reduce((sum,u)=>sum+(['sphinx','anubis','pharaoh','pyramid'].includes(u.type)?u.m:0),0));}
    if(S.bossIntro?.type==='isaac'){const old=S.bossIntro;const u=S.enemies.find(e=>e.type==='isaac');if(u)u.wakeAt=old.speechUntil;S.isaacSpeech={...old,until:old.speechUntil};delete S.bossIntro;}

    if(stageNo===8&&!S.over&&!S.isaacIntroShown&&S.enemies.some(e=>e.type==='isaac'&&e.h>0)){S.isaacIntroShown=true;beginBossIntro('isaac','원정대 견습기사 아이작','다 베어주마!');}

    if(!S.over&&S.bossIntroVersion!==48){if(stageNo===10||stageNo===20){beginBossIntro(stageNo===10?'knight':'seline',stageNo===10?'원정대장 프라함':'수호마법사 셀리네',stageNo===10?'하찮은 스켈레톤들이 판을 치는구나..':'이 곳만은 제가 지켜내겠어요!');S.bossWakeAt=S.bossIntro.until;}else if(stageNo===30&&S.philSpawned){const boss=S.enemies.find(e=>e.type==='phil'&&e.h>0);if(boss)beginBossIntro('phil','필',boss.phase===2?'아직 끝이 아니야..!':'따분한 참이었는데 잘됐군..');}}

    for(const e of S.enemies){if(MERCENARIES[e.type]){const b=MERCENARIES[e.type],ratio=e.m>0?e.h/e.m:1;Object.assign(e,{h:b.hp*ratio,m:b.hp,d:b.d,r:b.r,v:b.v,a:b.a,def:b.def});}}
    for(const u of S.units)if(['fallenIsaac','fallenSeline','fallen_shane','fallen_kon','fallen_parhan','fallen_rifren'].includes(u.type)){const b=stats(u.type),ratio=u.m>0?u.h/u.m:1;Object.assign(u,{h:b.hp*ratio,m:b.hp,d:b.d*(u.potion==='red'?1.5:1),r:b.r,v:b.v*(u.potion==='blue'?1.3:1)});}
    for(const u of S.units)if(u.type==='toyHammer'||u.type==='fallenRobin'||u.type==='laserKai'||u.type==='goblin'||u.type==='observer'){const b=stats(u.type),ratio=u.m>0?u.h/u.m:1;Object.assign(u,{h:b.hp*ratio,m:b.hp,d:b.d,a:b.a,r:b.r,v:b.v,def:b.def});}for(const u of S.units)if(RARE[u.type]?.source&&MERCENARIES[RARE[u.type].source])u.a=stats(u.type).a;
    if(stageNo===40&&S.mercenaryBattle)S.em=9000;

    if(version<23)for(const u of S.enemies){if(u.type==='isaac'){u.h=u.h/u.m*650;u.m=650;}if(stageNo>=21&&u.type==='archer'){const st=enemyStats('rifle');u.type='rifle';u.h=u.h/u.m*st.hp;Object.assign(u,{m:st.hp,d:st.d,v:st.v,r:st.r,a:st.a,def:0});}}
    ensureRare();S.souls??=0;S.totalDefeated??=0;for(const key of [...Object.keys(RARE),...Object.keys(NEW_UNITS)]){S.build[key]??=0;S.used[key]??=0;S.kills[key]??=0;S.activity[key]??={damage:0,castle:0,taken:0,blocked:0};}
    ensureGold();
    if(version<13){const next=stageData(stageNo);if(!S.bossStage){const ratio=S.em>0?S.eh/S.em:1;S.em=next.hp;S.eh=S.em*ratio;}S.d=next;S.spawn=Math.min(S.spawn,next.spawn);for(const e of S.enemies)if(e.type==='heavy')e.a=enemyStats('heavy').a;}
    profile.darkUnlocked??=(profile.level.assault>=7);
    profile.bannerUnlocked??=(stageNo>19||(stageNo===19&&S.result?.win));
    profile.shieldEvolved??=false;profile.assassinUnlocked??=(stageNo>15||(stageNo===15&&S.result?.win));normalizeLoadout();
    for(const e of S.enemies)if(e.type==='knight'){e.d=90;e.a=1.8;if(version<11)e.x=Math.min(e.x,650);}
    for(const e of S.enemies)if(e.type==='seline'&&e.barrierUntil)e.barrierUntil=Math.min(e.barrierUntil,(e.barrierStart??S.time)+1.5);
    if(S.result){for(const key of ['desc','xp'])S.result[key]=S.result[key]?.replace(/해골\s*궁수/g,'스켈레톤궁수');}if(profile.frontierResult?.result){for(const key of ['desc','xp'])profile.frontierResult.result[key]=profile.frontierResult.result[key]?.replace(/해골\s*궁수/g,'스켈레톤궁수');}
    S.isaacSpawned??=S.enemies.some(e=>e.type==='isaac');
    profile.pirateUnlocked??=(stageNo>24||(stageNo===24&&S.result?.win));S.isReplay??=false;for(const e of S.enemies)if(e.type==='healer')e.r=120;if(S.result)S.result.xp=S.result.xp.replace(/<div class="xpBreakdown">활약이 많아질수록.*?<\/div>/g,'');
    profile.clearedStages??=Array.from({length:Math.max(0,stageNo-1)},(_,i)=>i+1);if(S.result?.win&&!profile.clearedStages.includes(stageNo))profile.clearedStages.push(stageNo);
    S.bossStage??=false;
    if(version<8){const next=stageData(stageNo),ratio=S.em>0?S.eh/S.em:1;S.em=next.hp;S.eh=next.hp*ratio;S.d=next;S.spawn=next.spawn;for(const e of S.enemies){const fixed=enemyStats(e.type),hpRatio=e.m>0?e.h/e.m:1;e.m=fixed.hp;e.h=fixed.hp*hpRatio;e.d=fixed.d;e.r=fixed.r;e.v=fixed.v;e.a=fixed.a;}}

    if(version<7)for(const u of S.units)if(u.type==='warrior')u.d=36*(1+(profile.level.warrior-1)*.08);
    S.effects??=[];profile.assaultUnlocked=!!profile.assaultUnlocked||stageNo>9||(stageNo===9&&S.result?.win);
    if(version<6){for(const w of S.workers)w.x*=.7;for(const u of S.units)u.x=Math.max(250,u.x-82);for(const e of S.enemies){if(e.type==='brute')e.type=stageNo>=5?'heavy':'grunt';const st=enemyStats(e.type);e.h=st.hp*(e.h/e.m);e.m=st.hp;Object.assign(e,{d:st.d,r:st.r,v:st.v,a:st.a});}}
    profile.archerEvolved=!!profile.archerEvolved;profile.shieldUnlocked=!!profile.shieldUnlocked||stageNo>5||(stageNo===5&&S.result?.win);
    for(const t of Object.keys(UNIT_NAMES)){profile.level[t]??=1;profile.xp[t]??=0;S.build[t]??=0;S.used[t]??=0;S.kills[t]??=0;}
    S.activity??=emptyActivity();for(const t of Object.keys(UNIT_NAMES))S.activity[t]??={damage:0,castle:0,taken:0,blocked:0};
    
    if(version<9&&stageNo===10&&!S.over){const b=BOSS_STATS;S.bossStage=true;S.bossWakeAt=S.time+15;S.enemies=[{type:'knight',x:650,y:GROUND,h:b.hp,m:b.hp,d:b.d,r:b.r,v:b.v,a:b.a,def:b.def,cd:.1,anim:0,attack:0}];S.eh=b.hp;S.em=b.hp;S.corpses=[];}
    if(version<10)for(const u of S.units)if(u.type==='shield'||u.type==='heavyShield'||u.type==='banner'){const ratio=u.m>0?u.h/u.m:1;u.m=stats('shield').hp;u.h=u.m*ratio;}
    if(!profile.shieldEvolved&&profile.level.shield>=7){profile.shieldEvolved=true;profile.level.heavyShield=1;profile.xp.heavyShield=0;evolveField('shield','heavyShield');}
    normalizeLoadout();
    if(version<14){if(profile.darkUnlocked){S.unlockQueue=[...new Set([...(S.unlockQueue||[]),'darkAssault'])];if(loadoutCount()<4&&!profile.loadout.includes('darkAssault'))profile.loadout.push('darkAssault');}S.d=stageData(stageNo);for(const u of S.units){const st=unitStats(u),ratio=u.m>0?u.h/u.m:1;Object.assign(u,{m:st.hp,h:st.hp*ratio,d:st.d,r:st.r,v:st.v,a:st.a,def:st.def});}for(const u of S.enemies)if(!['knight','seline'].includes(u.type)){const st=enemyStats(u.type),ratio=u.m>0?u.h/u.m:1;Object.assign(u,{m:st.hp,h:st.hp*ratio,d:st.d,r:st.r,v:st.v,a:st.a});}if(stageNo===20&&!S.over){S.bossStage=true;S.bossWakeAt=S.time+20;S.enemies=[{type:'seline',x:650,h:1500,m:1500,d:55,r:180,v:8,a:1.5,def:0,cd:0,anim:0,attack:0}];S.eh=S.em=1500;S.spawn=S.d.spawn*2;S.effects=[];}}
    if(version<15){if(profile.darkUnlocked){profile.assaultUnlocked=true;evolveField('assault','darkAssault');}refreshPlayerStats();normalizeLoadout();S.effects=S.effects.filter(e=>e.kind!=='slash'||e.wave);}
    if(version<16&&stageNo===10){const boss=S.enemies.find(e=>e.type==='knight');if(boss){const ratio=boss.m>0?boss.h/boss.m:1;boss.m=1400;boss.h=1400*ratio;S.em=1400;S.eh=boss.h;}S.d=stageData(stageNo);if(S.result)S.result.desc=S.result.desc.replace('휴먼기사','원정대장 프라함');}
    if(version<19)refreshPlayerStats();
    if(profile.shieldUnlocked)q('#mainNotice').textContent='🔓 이전 진행 기록으로 스켈레톤 방패병이 해금되었습니다.';
  }
  q('#buyAssault').addEventListener('click',()=>buy('assault'));
  q('#buyShield').addEventListener('click',()=>buy(profile.shieldEvolved?'heavyShield':'shield'));
  q('#settingsBtn').addEventListener('click',()=>{q('#soundSetting').checked=!muted;q('#settingsPanel').classList.remove('hidden');});
  q('#settingsClose').addEventListener('click',()=>q('#settingsPanel').classList.add('hidden'));
  q('#soundSetting').addEventListener('change',()=>{muted=!q('#soundSetting').checked;q('#soundBtn').textContent=muted?'🔇':'🔊';save();});
  q('#exitBtn').addEventListener('click',()=>{save();q('#settingsPanel').classList.remove('hidden');q('#mainNotice').textContent='진행 상황을 저장했습니다. 이 창이나 탭을 닫으면 게임이 종료됩니다.';});

  let onMain=true,saveClock=0;
  const SAVE_KEY='undead-king-v4';
  function save(){try{localStorage.setItem(SAVE_KEY,JSON.stringify({version:23,profile,stageNo,S,muted}));}catch(e){/* In-session Continue still works when storage is unavailable. */}}
  function goMain(){q('#unlockModal').classList.add('hidden');onMain=true;syncMusic();UI.game.classList.add('hidden');UI.main.classList.remove('hidden');q('#continueBtn').disabled=!S;save();}
  function resume(){if(!S)return;initAudio();onMain=false;syncMusic();UI.main.classList.add('hidden');UI.game.classList.remove('hidden');UI.stage.textContent=stageLabel(stageNo);S.d.name=stageData(stageNo).name;UI.sub.textContent=S.d.name;q('#pauseBtn').textContent=S.pause?'▶':'⏸';UI.overlay.classList.toggle('hidden',!S.over);q('#resultNext').textContent=S.isReplay?frontierLabel():S.bossStage?stageLabel(stageNo+1)+'로 이동':'다음 스테이지';if(S.result){UI.rTitle.textContent=S.result.title;UI.rDesc.textContent=S.result.desc;UI.xp.innerHTML=S.result.xp;q('#resultNext').disabled=false;q('#resultNext').style.opacity='1';if(!S.result.win)q('#resultNext').textContent=frontierLabel();q('#resultIcon').textContent=S.result.win?'🏆':'💀';}last=performance.now();if(S.over){renderLoadout();renderReplay();}showUnlock();updateUI();}
  try{const saved=JSON.parse(localStorage.getItem(SAVE_KEY));if((saved?.version===4||saved?.version===5||saved?.version===6||saved?.version===7||saved?.version===8||saved?.version===9||saved?.version===10||saved?.version===11||saved?.version===12||saved?.version===13||saved?.version===14||saved?.version===15||saved?.version===16||saved?.version===17||saved?.version===18||saved?.version===19||saved?.version===20||saved?.version===21||saved?.version===22||saved?.version===23)&&saved.profile&&saved.S){profile=saved.profile;stageNo=saved.stageNo;S=saved.S;migrate(saved.version);muted=!!saved.muted;q('#soundBtn').textContent=muted?'🔇':'🔊';q('#continueBtn').disabled=false;}}catch(e){}
  q('#soundSetting').checked=!muted;
  window.addEventListener('pagehide',save);
  document.addEventListener('visibilitychange',()=>{if(document.hidden&&S&&!S.over&&!onMain){S.pause=true;q('#pauseBtn').textContent='▶';save();}});

  const menuMusic=new Audio(window.GAME_ASSETS.audio.menu);menuMusic.loop=true;menuMusic.volume=.4;
  let musicEnabled=true;try{musicEnabled=localStorage.getItem('undead-king-music')!=='off';}catch(e){}
  q('#musicSetting').checked=musicEnabled;
  function syncMusic(){if(onMain&&musicEnabled&&!document.hidden){menuMusic.play().catch(()=>{});}else{menuMusic.pause();if(!onMain)menuMusic.currentTime=0;}}
  q('#musicSetting').addEventListener('change',()=>{musicEnabled=q('#musicSetting').checked;try{localStorage.setItem('undead-king-music',musicEnabled?'on':'off');}catch(e){}syncMusic();});
  document.addEventListener('pointerdown',()=>{if(onMain)syncMusic();});document.addEventListener('keydown',()=>{if(onMain)syncMusic();});
  document.addEventListener('visibilitychange',syncMusic);window.addEventListener('pagehide',()=>menuMusic.pause());
  syncMusic();

  // A local cloth mesh: the clasp stays fixed while the free hem catches the wind.
  const mainArt=q('.mainArt'),capeCanvas=q('#capeMotion'),capeCtx=capeCanvas.getContext('2d');
  const reducedMotion=window.matchMedia?.('(prefers-reduced-motion: reduce)');
  const fireCanvas=q('#mainFire'),fireCtx=fireCanvas.getContext('2d');let fireLast=0;
  function drawMainFire(now){if(!onMain||document.hidden||now-fireLast<33)return;fireLast=now;fireCtx.clearRect(0,0,1536,1024);if(reducedMotion?.matches)return;const points=[[1391,619,13],[1323,647,10],[1433,594,9],[1158,605,9],[1009,642,8],[954,655,9]];for(let i=0;i<points.length;i++)flame(fireCtx,...points[i],now/1000,i);}
  let capeLast=0;
  function capeOffset(x,y,time){
    const shoulder=Math.exp(-((x-375)**2+(y-440)**2)/11000);
    const edge=Math.sin(Math.PI*Math.max(0,Math.min(1,x/440)))*Math.sin(Math.PI*Math.max(0,Math.min(1,(y-390)/440)));
    const free=Math.max(0,1-x/430),envelope=Math.max(0,edge)*(1-shoulder);
    // Waves travel from the shoulder toward the trailing fabric.
    const wave=Math.sin(time*2.6+x*.019-y*.012),ripple=Math.sin(time*4.1+x*.033+y*.016);
    return [envelope*free*(wave*10+ripple*3),envelope*free*(wave*15+ripple*4)];
  }
  function clothTriangle(source,dest){
    const [a,b,c]=source,[p,r,s]=dest;
    const det=(b[0]-a[0])*(c[1]-a[1])-(c[0]-a[0])*(b[1]-a[1]);
    const aa=((r[0]-p[0])*(c[1]-a[1])-(s[0]-p[0])*(b[1]-a[1]))/det;
    const bb=((r[1]-p[1])*(c[1]-a[1])-(s[1]-p[1])*(b[1]-a[1]))/det;
    const cc=((s[0]-p[0])*(b[0]-a[0])-(r[0]-p[0])*(c[0]-a[0]))/det;
    const dd=((s[1]-p[1])*(b[0]-a[0])-(r[1]-p[1])*(c[0]-a[0]))/det;
    capeCtx.save();capeCtx.beginPath();capeCtx.moveTo(...p);capeCtx.lineTo(...r);capeCtx.lineTo(...s);capeCtx.closePath();capeCtx.clip();
    capeCtx.transform(aa,bb,cc,dd,p[0]-aa*a[0]-cc*a[1],p[1]-bb*a[0]-dd*a[1]);
    const minX=Math.min(a[0],b[0],c[0]),minY=Math.min(a[1],b[1],c[1]),w=Math.max(a[0],b[0],c[0])-minX,h=Math.max(a[1],b[1],c[1])-minY;
    capeCtx.drawImage(mainArt,minX,minY,w,h,minX,minY,w,h);capeCtx.restore();
  }
  function drawCape(now){
    if(!onMain||document.hidden||!mainArt.complete||!mainArt.naturalWidth||now-capeLast<33)return;
    capeLast=now;capeCtx.clearRect(0,0,440,440);
    if(reducedMotion?.matches)return;
    capeCtx.save();capeCtx.translate(0,-390);
    const time=now/1000,step=22;
    for(let y=390;y<830;y+=step)for(let x=0;x<440;x+=step){
      const src=[[x,y],[x+step,y],[x+step,y+step],[x,y+step]];
      const dst=src.map(([xx,yy])=>{const [dx,dy]=capeOffset(xx,yy,time);return[xx+dx,yy+dy];});
      clothTriangle([src[0],src[1],src[2]],[dst[0],dst[1],dst[2]]);clothTriangle([src[0],src[2],src[3]],[dst[0],dst[2],dst[3]]);
    }
    capeCtx.restore();
  }


  const UNIT_DESCRIPTIONS={invisibleSkeleton:'정찰병 처치 시 60% 확률로 해금. 항시 은신하며 사망 시 은신한 손 두 개가 남습니다. 방어력 -5.',observer:'6-1 클리어 시 해금. 일정한 높이에서 양 끝을 순찰하며 반경 120의 투명·은신 적을 드러냅니다.',greatWarrior:'워리어 Lv.15에서 해금. 최대 두 적을 베어 공격합니다.',captain:'해적 Lv.7에서 해금을 하면 해적을 대체합니다. 직선 포탄으로 반경 110에 피해를 줍니다.',shieldKnight:'중방패병 Lv.20에서 해금되어 중방패병을 대체합니다. 방패가 부서지면 도끼 기사로 변신합니다.',dog:'스테이지 클리어 시 1% 확률로 해금됩니다. 날카로운 이빨로 바로 앞의 적을 공격합니다.',cerberus:'스켈레톤견 Lv.7에서 진화하여 기존 견을 대체합니다.',javelin:'스켈레톤석궁수 Lv.15에서 진화합니다. 창을 던져 먼 거리의 적을 공격합니다.',pirate:'최대 사거리 110까지 폭탄을 던져 반경 80의 적에게 범위 피해를 줍니다.',soldier:'검과 방패로 전선을 지키는 기본 근접 유닛입니다.',warrior:'병사 Lv.10에서 진화합니다. 강한 공격력으로 적을 돌파합니다. 목재 150.',archer:'정지 후 원거리 공격을 합니다. 목재 100 · 석탄 50.',crossbow:'궁수 Lv.10에서 진화합니다. 공격력과 사거리가 늘고 이동속도는 줄어듭니다. 목재 125 · 석탄 75.',shield:'공격 없이 높은 체력과 방어력으로 아군을 보호합니다. 목재 120 · 석탄 40.',heavyShield:'방패병 Lv.7에서 진화합니다. 체력 400, 이동속도 9.8, 방어력 10. 목재 120 · 석탄 100.',assault:'병사 대비 이동속도 1.7배, 공격속도 2배의 돌격 유닛입니다. 목재 50 · 석탄 75.',assassin:'병사 대비 공격력·공격속도 2.5배, 이동속도 3배. 체력은 절반입니다. 목재 25 · 석탄 250.',banner:'공격하지 않으며 반경 120 안의 아군 공격력·공격속도·이동속도를 20% 높입니다. 목재 100 · 석탄 100.'};
  function showUnlock(){const type=S?.unlockQueue?.[0];q('#unlockModal').classList.toggle('hidden',!type||onMain);if(!type)return;q('#unlockName').textContent=UNIT_NAMES[type]+' 해금!';q('#unlockDescription').textContent=(type==='darkAssault'?'돌격병 Lv.7에서 암흑돌격병 Lv.1로 진화합니다. 기존 돌격병을 대체합니다.':(RARE[type]?.description||UNIT_DESCRIPTIONS[type]||'타락한 휴먼 유닛이 아군으로 합류합니다.').replace(/목재.*$/, ''))+' '+costText(type)+' · 체력 '+Math.round(stats(type).hp*100)/100+' · 공격력 '+Math.round(stats(type).d*100)/100;q('#unlockSelection').textContent=profile.loadout.includes(type)?'전투 편성에 자동으로 추가되었습니다.':'편성 창에서 선택할 수 있습니다. (최대 4종)';q('#unlockNext').textContent=S.unlockQueue.length>1?'다음 유닛 보기':'확인';}
  q('#unlockNext').addEventListener('click',()=>{if(S?.unlockQueue?.length)S.unlockQueue.shift();showUnlock();save();});
  function drawUnlock(now){const type=S?.unlockQueue?.[0];if(!type||onMain||!FRAMES[type])return;const c=q('#unlockPreview'),g=c.getContext('2d'),f=FRAMES[type].walk;g.clearRect(0,0,c.width,c.height);g.imageSmoothingEnabled=false;g.save();g.translate(c.width/2,190);const frame=f[Math.floor(now/90)%f.length];g.drawImage(frame,-168,-240,336,256);g.restore();}

  function loop(now){const dt=Math.min(.035,Math.max(0,(now-last)/1000));last=now;update(dt);tickChapterStory(dt);if(!chapterStory)drawUnlock(now);if(!onMain){if(S?.over){S.corpses=S.corpses.filter(u=>(u.death+=dt)<1.3);S.effects=S.effects.filter(e=>!['loot','heroHeal','revive'].includes(e.kind)||(e.life-=dt)>0);}updateUI();syncUnitCards();draw();}saveClock+=dt;if(saveClock>2){saveClock=0;save();}requestAnimationFrame(loop)}

  function ensureRare(){profile.rareUnlocked??=[];profile.castleBuys??=0;profile.populationBuys??=0;profile.castleBonus??=0;}
  function upgradeQuote(key){ensureRare();return key==='castle'?{price:2**profile.castleBuys,amount:Math.round(300*1.5**profile.castleBuys)}:{price:2*2**profile.populationBuys,amount:2};}
  function purchaseUpgrade(key){if(!shopOpen||!S?.over||!['castle','population'].includes(key))return false;const item=upgradeQuote(key);if(profile.gold<item.price)return false;profile.gold-=item.price;if(key==='castle'){profile.castleBonus+=item.amount;profile.castleBuys++;S.pm+=item.amount;S.ph=Math.min(S.pm,S.ph+item.amount);}else{profile.populationBuys++;S.cap+=2;}thankMerchant((key==='castle'?'성 최대 체력 +':'최대 유닛 수 +')+item.amount+'! 다음 전투에도 유지되네.');renderGoldShop();save();return true;}
  function grantRare(tier){ensureRare();const pool=tier==='ex'?['laserKai','toyHammer']:tier==='epic'?['hero','darkKnight','boneDragon','goblin']:['cat','ailey'],missing=pool.filter(t=>!profile.rareUnlocked.includes(t)),pick=(missing.length?missing:pool)[Math.floor(Math.random()*(missing.length||pool.length))];const duplicate=profile.rareUnlocked.includes(pick);if(!duplicate)profile.rareUnlocked.push(pick);normalizeLoadout();if((isEx(pick)||loadoutCount()<4)&&!profile.loadout.includes(pick))profile.loadout.push(pick);if(S){renderLoadout();}return RARE[pick].name+(duplicate?' · 이미 보유한 유닛입니다.':' 획득!')+' '+RARE[pick].description;}
  function redeemRareTickets(){ensureRare();for(const tier of ['epic','legendary','ex']){let n=profile.gachaTickets[tier]||0;profile.gachaTickets[tier]=0;while(n-->0)grantRare(tier);}}
  function rareHitReaction(u,damage){specialHitReaction(u,damage);if(transformUnit(u))return;if(!RARE[u.type]||damage<=0)return;if(u.type==='hero'&&u.h>0&&Math.random()<.10){u.h=Math.min(u.m,u.h+u.m*.1);S.effects.push({kind:'heroHeal',x:u.x,life:.5});}if(u.type==='cat'&&u.h<=0&&(u.reviveCount??(u.revived?1:0))<2){u.reviveCount=(u.reviveCount??(u.revived?1:0))+1;u.revived=true;u.h=u.m;u.reviveUntil=S.time+.5;u.attack=0;S.effects.push({kind:'revive',x:u.x,life:.5});}}
  function rareStrike(u,range,damage,aoe,kind){const enemies=S.enemies.filter(e=>e.h>0&&(aoe||canTarget(u,e))&&e.x>=u.x-10&&e.x-u.x<=range),targets=aoe?enemies:enemies.slice().sort((a,b)=>a.x-b.x).slice(0,1);for(const e of targets){const before=e.h;const dealt=hitEnemy(e,damage*(u.buff?1.2:1),u);S.activity[u.type].damage+=dealt;if(before>0&&e.h<=0)S.kills[u.type]++;}if(!S.bossStage&&enemyBaseX()-u.x<=range+8&&enemyBaseX()>=u.x){const d=Math.min(S.eh,damage*(u.buff?1.2:1));S.eh-=d;S.activity[u.type].castle+=d;}if(kind==='darkBolt'||kind==='catWave')S.effects.push({kind:kind||'rareSlash',x:u.x,to:targets[0]?.x||Math.min(enemyBaseX(),u.x+range),radius:range,life:.45});sfx('sword');}
  function rareTick(u,dt){u.anim=(u.anim||0)+dt;u.attack=Math.max(0,(u.attack||0)-dt);u.cd=Math.max(0,(u.cd||0)-dt*(u.buff?1.2:1));u.stationary=false;if(u.doubleHit){u.doubleHit.wait-=dt;if(u.doubleHit.wait<=0){rareStrike(u,u.r,u.doubleHit.damage,true,'rareSlash');delete u.doubleHit;}}if(S.time<(u.reviveUntil||0)){u.stationary=true;return;}if(u.type==='boneDragon'){u.h=Math.max(0,u.h-5*dt);if(u.h<=0)return;if(u.fearLeft>0){u.stationary=true;u.fearClock-=dt;while(u.fearClock<=0&&u.fearLeft>0){launchDragonFear(u);u.fearLeft--;u.fearClock+=1;}u.attack2=true;u.attack=.9;return;}}
    if(u.type==='cat'&&u.nextSpecial===undefined&&u.cd<=0)u.nextSpecial=Math.random()<.2;const reach=u.type==='cat'&&u.nextSpecial?80:u.type==='boneDragon'&&(u.strikes||0)>=3?280:u.r;const [target,dist]=nearest(u,S.enemies),castle=!S.bossStage&&enemyBaseX()-u.x<=reach+8;
    if((target&&dist<=reach)||castle){u.stationary=true;if(u.cd>0)return;u.attack2=false;if(u.type==='boneDragon'&&(u.strikes||0)>=3){u.strikes=0;u.fearLeft=3;u.fearClock=1;u.cd=3;u.attack2=true;u.attack=3;return;}
      let range=u.r,damage=u.d,aoe=u.type==='darkKnight',kind='rareSlash';if(u.type==='cat'&&u.nextSpecial){damage=250*(u.potion==='red'?1.5:1);range=80;aoe=true;u.attack2=true;kind='catWave';}if(u.type==='ailey'){u.attack2=Math.random()<.3;damage=u.attack2?200:50;damage*=u.potion==='red'?1.5:1;aoe=u.attack2;kind=u.attack2?'darkArea':'darkBolt';}rareStrike(u,range,damage,aoe,kind);if(u.type==='darkKnight')u.doubleHit={wait:.22,damage:u.d};delete u.nextSpecial;u.strikes=(u.strikes||0)+1;u.attack=u.a;u.cd=u.a;return;
    }if(u.attack>0){u.stationary=true;return;}u.x+=u.v*(u.buff?1.2:1)*dt;
  }
  function updateRareShop(){ensureRare();for(const key of Object.keys(RARE)){const b=q('#buyRare'+key);b.classList.toggle('hidden',!profile.loadout?.includes(key));b.disabled=!S||S.over||S.pause||!afford(key)||(S.build[key]||0)>0||pop()>=S.cap;q('#rareCount'+key).textContent=(S?.units.filter(u=>u.type===key&&u.h>0).length||0)+'명';if(FRAMES[key]&&!q('#rareIcon'+key).src)q('#rareIcon'+key).src=FRAMES[key].walk[0].toDataURL();}if(S?.result){q('#resultOverlay').dataset.outcome=S.result.win?'win':'lose';}}
  function drawExtraEffect(e){if(e.kind==='rareSlash'||e.kind==='darkArea'||e.kind==='dragonFear')return true;if(drawAdvancedEffect(e))return true;if(e.kind==='fearBolt'){ctx.save();const travel=Math.max(0,Math.min(1,(e.x-e.from)/(e.to-e.from)));const y=(e.startY??GROUND-72)+((e.endY??GROUND-30)-(e.startY??GROUND-72))*travel;ctx.translate(e.x,y);ctx.rotate(Math.atan2(42,248));ctx.translate(-e.x,-(GROUND-38));const tail=ctx.createLinearGradient(e.x-65,0,e.x+12,0);tail.addColorStop(0,'#7132c000');tail.addColorStop(.7,'#a74bdfaa');tail.addColorStop(1,'#eed5ff');ctx.fillStyle=tail;ctx.beginPath();ctx.ellipse(e.x-22,GROUND-38,43,15,0,0,Math.PI*2);ctx.fill();ctx.shadowColor='#bb71ff';ctx.shadowBlur=12;ctx.fillStyle='#eacaff';ctx.beginPath();ctx.arc(e.x,GROUND-38,10,0,Math.PI*2);ctx.fill();ctx.fillStyle='#502568';ctx.fillRect(e.x-5,GROUND-42,3,4);ctx.fillRect(e.x+2,GROUND-42,3,4);ctx.restore();return true;}if(e.kind==='spear'){const f=Math.min(1,e.age/e.flight),x=e.from+(e.to-e.from)*f;if(FRAMES.spear)ctx.drawImage(FRAMES.spear,x-17,GROUND-43,38,13);return true;}if(e.kind==='loot'){const icon=GOLD_BITMAPS[e.item];ctx.save();ctx.globalAlpha=Math.min(1,e.life*6);const x=e.owner?.x??e.x;if(icon)ctx.drawImage(icon,x-10,GROUND-83-(.5-e.life)*12,20,20);else{ctx.fillStyle='#ffd65d';ctx.beginPath();ctx.arc(x,GROUND-73,7,0,Math.PI*2);ctx.fill();}ctx.restore();return true;}if(e.kind==='heroHeal'||e.kind==='revive'){ctx.save();ctx.globalAlpha=.65;ctx.fillStyle=e.kind==='heroHeal'?'#ff3c52':'#ffe086';ctx.fillRect(e.x-3,GROUND-83,6,20);ctx.fillRect(e.x-10,GROUND-76,20,6);ctx.restore();return true;}if(['dragonFear','catWave','darkArea','darkBolt','rareSlash'].includes(e.kind)){ctx.save();ctx.globalAlpha=Math.min(.7,e.life*2);ctx.strokeStyle=e.kind==='catWave'?'#ffd477':'#bb68ff';ctx.fillStyle='#993fe944';ctx.lineWidth=3;if(e.kind==='darkBolt'){const x=e.x+(e.to-e.x)*(1-e.life/.45);ctx.beginPath();ctx.arc(x,GROUND-35,7,0,Math.PI*2);ctx.fillStyle='#b862ef';ctx.fill();}else{ctx.beginPath();ctx.ellipse(e.x+e.radius/2,GROUND-22,e.radius/2,20,0,0,Math.PI*2);ctx.fill();ctx.stroke();}ctx.restore();return true;}return false;}

const GOLD_BITMAPS={};for(const [key,url] of Object.entries(GOLD_ICONS)){const im=new Image();im.src=url;GOLD_BITMAPS[key]=im;}

q('#upgradeCastle').addEventListener('click',()=>purchaseUpgrade('castle'));q('#upgradePopulation').addEventListener('click',()=>purchaseUpgrade('population'));for(const key of Object.keys(RARE))q('#buyRare'+key).addEventListener('click',()=>buy(key));



redeemRareTickets();unlockAdvanced();if(S){for(const key of Object.keys(NEW_UNITS)){profile.level[key]??=1;profile.xp[key]??=0;S.build[key]??=0;S.used[key]??=0;S.kills[key]??=0;S.activity[key]??={damage:0,castle:0,taken:0,blocked:0};}refreshPlayerStats();for(const e of S.enemies)if(e.type==='cannon')e.d=35;}

  const dock=document.createElement('div');dock.id='battleDock';q('#battleWrap').appendChild(dock);dock.appendChild(q('#potionTray'));dock.appendChild(q('.unitShop'));
  q('#gachaResultConfirm').addEventListener('click',()=>q('#gachaResultModal').classList.add('hidden'));

  function gruntTick(u,dt){u.anim=(u.anim||0)+dt;u.attack=Math.max(0,(u.attack||0)-dt);if(S.time<(u.guardUntil||0))return;u.cd=Math.max(0,(u.cd||0)-dt*(u.buff?1.2:1));const [t,d]=nearest(u,S.units),castle=Math.abs(u.x-232)<=u.r+8;if((t&&d<=u.r)||castle){if(u.cd<=0){if(Math.random()<.2){u.guardUntil=S.time+1.5;u.cd=0;u.attack=0;}else{if(t&&d<=u.r)hurtSkeleton(t,u.d);else S.ph-=u.d;u.cd=u.a;u.attack=u.a;}}return;}u.x-=u.v*dt;}
  function gunnerTick(u,dt){u.anim=(u.anim||0)+dt;u.attack=Math.max(0,(u.attack||0)-dt);u.cd=Math.max(0,(u.cd||0)-dt*(u.buff?1.2:1));const [target,dist]=nearest(u,S.units),castle=Math.abs(u.x-232)<=u.r+8;if((target&&dist<=u.r)||castle){if(u.cd<=0){const to=target&&dist<=u.r?target.x:232;if(u.type==='cannon')S.effects.push({kind:'shell',from:u.x,x:u.x,to,age:0,flight:.55,life:1,damage:35});else{if(target&&dist<=u.r)hurtSkeleton(target,28);else S.ph-=28;S.effects.push({kind:'rifleShot',from:u.x,to,life:.15});}u.cd=u.a;u.attack=u.a;sfx('sword');}return;}if(u.attack<=0)u.x-=u.v*dt;}
  function cannonBlast(x,radius,damage){for(const u of S.units)if(u.h>0&&Math.abs(u.x-x)<=radius)hurtSkeleton(u,damage);if(Math.abs(232-x)<=radius)S.ph-=damage;S.effects.push({kind:'cannonBlast',x,radius,life:.45});tone(80,.12,'sawtooth',.025);}
  function updateShells(dt){for(const e of [...S.effects])if(e.kind==='shell'&&e.life>0){e.age+=dt;e.x=e.from+(e.to-e.from)*Math.min(1,e.age/e.flight);if(e.age>=e.flight){e.life=0;cannonBlast(e.to,65,e.damage);}}}
  function drawGunEffect(e){if(e.kind==='shell'){ctx.save();ctx.fillStyle='#252833';ctx.strokeStyle='#cbd0d8';ctx.beginPath();ctx.arc(e.x,GROUND-30-Math.sin(Math.PI*Math.min(1,e.age/e.flight))*30,5,0,Math.PI*2);ctx.fill();ctx.stroke();ctx.restore();return true;}if(e.kind==='rifleShot'){ctx.save();ctx.strokeStyle='#ffe6a5';ctx.beginPath();ctx.moveTo(e.from,GROUND-35);ctx.lineTo(e.to,GROUND-35);ctx.stroke();ctx.restore();return true;}if(e.kind==='cannonBlast'){const frames=FRAMES.cannonExplosion;if(frames){const f=frames[Math.min(frames.length-1,Math.floor((1-e.life/.45)*frames.length))];ctx.save();ctx.globalAlpha=Math.min(1,e.life*8);ctx.drawImage(f,e.x-e.radius,GROUND-e.radius*1.2,e.radius*2,e.radius*1.35);ctx.restore();}return true;}return false;}

  q('#lootPrev').addEventListener('click',()=>{lootPage=Math.max(0,lootPage-1);renderGoldShop();});q('#lootNext').addEventListener('click',()=>{lootPage++;renderGoldShop();});

  function launchSpear(u,target){S.effects.push({kind:'spear',owner:u,target,from:u.x,to:target?target.x:enemyBaseX(),age:0,flight:Math.max(.08,Math.abs((target?target.x:enemyBaseX())-u.x)/950),life:.6,damage:u.d*(u.buff?1.2:1)});}
  function updateSpears(dt){for(const e of S.effects)if(e.kind==='spear'&&!e.hit){e.age+=dt;if(e.age>=e.flight){e.hit=true;e.life=0;if(e.target&&e.target.h>0){const d=hitEnemy(e.target,e.damage,e.owner);S.activity.javelin.damage+=d;if(e.target.h<=0)S.kills.javelin++;}else if(!e.target&&!S.bossStage){const d=Math.min(S.eh,e.damage);S.eh-=d;S.activity.javelin.castle+=d;}}}}
  function updateAddedShop(){for(const key of Object.keys(NEW_UNITS)){const b=q('#buyNew'+key);b.classList.toggle('hidden',!profile.loadout?.includes(key));b.disabled=!S||S.over||S.pause||!afford(key)||(S.build[key]||0)>0||pop()>=S.cap;q('#newCount'+key).textContent=(S?.units.filter(u=>u.type===key&&u.h>0).length||0)+'명';q('#newLv'+key).textContent='Lv.'+(profile.level[key]||1)+' · EXP '+(profile.xp[key]||0)+'/100';if(FRAMES[key]&&!q('#newIcon'+key).src)q('#newIcon'+key).src=(FRAMES[key].idle||FRAMES[key].walk)[0].toDataURL();}}
  for(const key of Object.keys(NEW_UNITS))q('#buyNew'+key).addEventListener('click',()=>buy(key));


  const sceneryCache=new WeakMap();
  function sceneryTheme(){return [
    ['#8baf63',.10,'#4c6135',1,1],['#d36b44',.24,'#743f32',.82,.85],['#4369aa',.32,'#233e62',.65,.7],
    ['#c58c40',.23,'#8c6031',.95,.85],['#b9d8f3',.35,'#b9d2e4',1.08,.55],['#d6b577',.32,'#a58954',1.05,.6],
    ['#db572e',.27,'#572c29',.69,.75],['#68908a',.27,'#3b5c53',.78,.65],['#459dcc',.32,'#253e58',.68,.75],
    ['#83919e',.17,'#676457',.88,.7],['#65954e',.22,'#354f2d',.83,.85]
  ][Math.min(10,Math.floor((stageNo-1)/10))];}
  function drawScenery(im,x,y,w,h){const chapter=Math.min(10,Math.floor((stageNo-1)/10)),theme=sceneryTheme();let cache=sceneryCache.get(im);if(!cache){cache={};sceneryCache.set(im,cache);}let art=cache[chapter];if(!art){art=document.createElement('canvas');art.width=im.width;art.height=im.height;const g=art.getContext('2d');g.filter='brightness('+theme[3]+') saturate('+theme[4]+')';g.drawImage(im,0,0);g.filter='none';g.globalCompositeOperation='source-atop';g.globalAlpha=theme[1];g.fillStyle=theme[0];g.fillRect(0,0,art.width,art.height);g.globalAlpha=1;g.globalCompositeOperation='destination-in';const fade=g.createLinearGradient(0,art.height*.91,0,art.height);fade.addColorStop(0,'#fff');fade.addColorStop(1,'#ffffff00');g.fillStyle=fade;g.fillRect(0,0,art.width,art.height);cache[chapter]=art;}ctx.save();const ground=ctx.createRadialGradient(x+w*.5,GROUND-2,1,x+w*.5,GROUND-2,w*.55);ground.addColorStop(0,theme[2]+'bb');ground.addColorStop(1,theme[2]+'00');ctx.fillStyle=ground;ctx.beginPath();ctx.ellipse(x+w*.5,GROUND-2,w*.58,9,0,0,Math.PI*2);ctx.fill();ctx.drawImage(art,x,y,w,h);ctx.restore();}

  const BUILD_SECONDS={wood:2.2,coal:2.4,soldier:1.7,warrior:1.7,archer:2.3,crossbow:2.3,shield:2.8,heavyShield:2.8,assault:1.5,darkAssault:1.5,assassin:2,banner:2.5,pirate:2.5};
  const CARD_TYPES={buyWoodWorker:'wood',buyCoalWorker:'coal',buySoldier:'soldier',buyArcher:'archer',buyShield:'shield',buyAssault:'assault',buyAssassin:'assassin',buyBanner:'banner',buyDarkAssault:'darkAssault',buyPirate:'pirate'};
  for(const t of Object.keys(RARE))CARD_TYPES['buyRare'+t]=t;for(const t of Object.keys(NEW_UNITS))CARD_TYPES['buyNew'+t]=t;
  function cardType(id){return id==='buySoldier'?(profile.evolved?'warrior':'soldier'):id==='buyArcher'?(profile.archerEvolved?'crossbow':'archer'):id==='buyShield'?(profile.shieldEvolved?'heavyShield':'shield'):CARD_TYPES[id];}
  let uniformCards=[];
  function setupUnitCards(){if(!root.querySelectorAll)return;const shop=q('.unitShop');const bank=document.createElement('div');bank.hidden=true;root.appendChild(bank);
    for(const [id,type] of Object.entries(CARD_TYPES)){const button=q('#'+id),img=button.querySelector('img'),name=button.querySelector('b');const slot=document.createElement('div');slot.className='unitSlot';const tier=RARE[type]?.tier||NEW_UNITS[type]?.tier;if(tier)button.classList.add('rare-'+tier);slot.dataset.card=id;button.before(slot);slot.appendChild(button);const handle=document.createElement('span');handle.className='moveUnit';handle.textContent='⠿';handle.title='끌어서 생성칸 이동';handle.setAttribute('role','button');handle.tabIndex=0;handle.setAttribute('aria-label',(UNIT_NAMES[type]||'일꾼')+' 생성칸 이동');slot.appendChild(handle);const count=document.createElement('span');count.className='uniformCount';slot.appendChild(count);
      const content=document.createElement('div');content.className='uniformContent';content.append(img,name);const price=document.createElement('div');price.className='uniformPrice';const level=document.createElement('div');level.className='uniformLevel';const track=document.createElement('div');track.className='uniformTrack';const fill=document.createElement('div');fill.className='uniformFill';track.appendChild(fill);const time=document.createElement('span');time.className='uniformTime';track.appendChild(time);content.append(price,level,track);while(button.firstChild)bank.appendChild(button.firstChild);button.appendChild(content);uniformCards.push({id,slot,button,price,level,fill,time,count});
      bindCardDrag(handle,slot,shop);

    }for(const id of profile.cardOrder||[]){const c=uniformCards.find(c=>c.id===id);if(c)shop.appendChild(c.slot);}syncUnitCards();}
  function bindCardDrag(handle,slot,shop){
    let pointer=null;
    const persist=()=>{profile.cardOrder=[...shop.querySelectorAll('.unitSlot')].map(e=>e.dataset.card);save();};
    const move=e=>{if(e.pointerId!==pointer)return;e.preventDefault();const bounds=shop.getBoundingClientRect();if(e.clientX<bounds.left-35||e.clientX>bounds.right+35||e.clientY<bounds.top-35||e.clientY>bounds.bottom+35)return;
      const visible=[...shop.querySelectorAll('.unitSlot')].filter(el=>!el.hidden);const target=visible.find(el=>{const r=el.getBoundingClientRect();return e.clientX>=r.left&&e.clientX<=r.right&&e.clientY>=r.top&&e.clientY<=r.bottom;});
      if(!target||target===slot)return;const from=visible.indexOf(slot),to=visible.indexOf(target);shop.insertBefore(slot,to>from?target.nextSibling:target);
    };
    const finish=e=>{if(pointer===null||e.pointerId!==pointer)return;const id=pointer;pointer=null;slot.classList.remove('moving');document.removeEventListener('pointermove',move);document.removeEventListener('pointerup',finish);document.removeEventListener('pointercancel',finish);if(shop.hasPointerCapture?.(id))shop.releasePointerCapture(id);persist();};
    handle.addEventListener('pointerdown',e=>{if(pointer!==null||e.button>0)return;e.preventDefault();e.stopPropagation();pointer=e.pointerId;slot.classList.add('moving');document.addEventListener('pointermove',move,{passive:false});document.addEventListener('pointerup',finish);document.addEventListener('pointercancel',finish);try{shop.setPointerCapture(e.pointerId);}catch(_){} });
    handle.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();});
    handle.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight'].includes(e.key))return;e.preventDefault();const visible=[...shop.querySelectorAll('.unitSlot')].filter(el=>!el.hidden),i=visible.indexOf(slot),to=visible[i+(e.key==='ArrowLeft'?-1:1)];if(to)shop.insertBefore(slot,e.key==='ArrowLeft'?to:to.nextSibling);persist();});
  }
  function syncUnitCards(){if(uniformCards.length){const visible=uniformCards.filter(c=>!c.button.classList.contains('hidden')).length;const shop=q('.unitShop'),swipe=visible>=7;shop.style.gridTemplateColumns=swipe?'repeat('+visible+',minmax(calc((100% - 25px)/6),1fr))':'repeat('+Math.max(1,visible)+',minmax(0,1fr))';shop.style.overflowX=swipe?'auto':'hidden';shop.style.touchAction=swipe?'pan-x':'pan-y';if(!swipe)shop.scrollLeft=0;}for(const c of uniformCards){const type=cardType(c.id);c.slot.hidden=c.button.classList.contains('hidden');c.count.textContent=((type==='wood'||type==='coal'?S?.workers:S?.units)||[]).filter(u=>u.type===type&&(u.h===undefined||u.h>0)).length+'명';c.price.textContent=costText(type);c.level.textContent=RARE[type]?'—':type==='wood'||type==='coal'?'—':'Lv.'+(profile.level[type]||1)+' · EXP '+(profile.xp[type]||0)+'/100';const total=BUILD_SECONDS[type]||2.5,left=S?.build[type]||0;c.fill.style.width=left>0?Math.max(0,100*(1-left/total))+'%':'0%';c.time.textContent=left>0?left.toFixed(1)+'초':total.toFixed(1)+'초';}}
  setupUnitCards();


  function launchDragonFear(u){S.effects.push({kind:'fearBolt',owner:u,x:u.x+32,from:u.x+32,to:u.x+280,y:GROUND-72,startY:GROUND-72,endY:GROUND-30,speed:300,life:1.1,damage:100*(u.potion==='red'?1.5:1)*(u.buff?1.2:1),hitIds:[],castleHit:false});sfx('arrow');}
  function updateDragonFear(dt){for(const e of S.effects)if(e.kind==='fearBolt'&&e.life>0){const before=e.x;e.x=Math.min(e.to,e.x+e.speed*dt);for(const foe of S.enemies){if(foe.h<=0||foe.x<e.from||foe.x<before-5||foe.x>e.x+5||foe.x>e.to)continue;foe.fearTargetId??=S.nextFearTargetId=(S.nextFearTargetId||0)+1;if(e.hitIds.includes(foe.fearTargetId))continue;e.hitIds.push(foe.fearTargetId);const damage=hitEnemy(foe,e.damage,e.owner);S.activity.boneDragon.damage+=damage;if(foe.h<=0)S.kills.boneDragon++;}if(!S.bossStage&&!e.castleHit&&e.from<=enemyBaseX()&&before<=enemyBaseX()&&e.x>=enemyBaseX()){e.castleHit=true;const damage=Math.min(S.eh,e.damage);S.eh-=damage;S.activity.boneDragon.castle+=damage;}if(e.x>=e.to)e.life=0;}}

  function unitStats(u){const st=stats(u.type);if(u.type==='shieldKnight'&&u.axeForm)return {...st,hp:200,d:60,v:35,a:1.75,r:55,def:5};if(u.type==='fallenPhil'&&u.phase===2)return {...st,hp:750,d:80,v:55,a:.3,r:70,def:0};return st;}
  function isUnique(type){return ['epic','legendary'].includes(RARE[type]?.tier);}
  function bannerRange(){return (profile.level.banner||1)>=10?180:120;}
  function unlockAdvanced(){profile.advancedUnlocked??=[];if((profile.clearedStages||[]).some(n=>n>=51)&&!profile.advancedUnlocked.includes('observer')){profile.advancedUnlocked.push('observer');profile.level.observer??=1;profile.xp.observer??=0;}for(const [from,level,to] of [['warrior',15,'greatWarrior'],['pirate',7,'captain'],['heavyShield',20,'shieldKnight']])if((profile.level[from]||1)>=level&&!profile.advancedUnlocked.includes(to)){profile.advancedUnlocked.push(to);profile.level[to]??=1;profile.xp[to]??=0;}if(S&&profile.advancedUnlocked.includes('greatWarrior'))evolveField('warrior','greatWarrior');}
  function recruitUnit(key){const list=RARE[key]?(profile.rareUnlocked??=[]):(profile.advancedUnlocked??=[]);if(list.includes(key))return false;list.push(key);profile.level[key]??=1;profile.xp[key]??=0;normalizeLoadout();if((isEx(key)||loadoutCount()<4)&&!profile.loadout.includes(key))profile.loadout.push(key);S.unlockQueue=[...new Set([...(S.unlockQueue||[]),key])];msg(UNIT_NAMES[key]+' 합류!');showUnlock();save();return true;}
  function tryRecruit(enemy){if(enemy.recruitRolled)return;enemy.recruitRolled=true;const boss=enemy.type==='sphinx'?'fallenSphinx':enemy.type==='anubis'?'fallenAnubis':enemy.type==='pharaoh'?'fallenPharaoh':stageNo===50&&enemy.type==='robin'?'fallenRobin':stageNo===40&&MERCENARIES[enemy.type]?'fallen_'+enemy.type:enemy.type==='knight'&&stageNo===10?'fallenFraham':enemy.type==='isaac'&&stageNo===8?'fallenIsaac':enemy.type==='seline'&&stageNo===20?'fallenSeline':enemy.type==='phil'&&stageNo===30&&enemy.phase===2?'fallenPhil':null;const key=boss||('fallen_'+enemy.type);if(!RARE[key]&&!NEW_UNITS[key])return;if((profile.rareUnlocked||[]).includes(key)||(profile.advancedUnlocked||[]).includes(key))return;if(Math.random()<(['fallenRobin','fallenPharaoh'].includes(boss)?.005:boss?.01:.0003))recruitUnit(key);}
  function transformUnit(u){if(u.h>0)return false;if(u.type==='fallenPharaoh'&&Math.random()<.6){u.h=1;u.coffinUntil=S.time+2;u.invincibleUntil=u.coffinUntil;u.attack=0;return true;}if(u.type==='shieldKnight'&&!u.axeForm){u.axeForm=true;Object.assign(u,{h:200,m:200,d:60*(u.potion==='red'?1.5:1),v:35*(u.potion==='blue'?1.3:1),a:1.75,r:55,def:5,cd:.2,attack:0});return true;}if((u.type==='phil'||u.type==='fallenPhil')&&u.phase!==2){const ally=u.type==='fallenPhil';u.phase=2;Object.assign(u,{h:ally?750:1500,m:ally?750:1500,v:55*(u.potion==='blue'?1.3:1),d:80*(u.potion==='red'?1.5:1),a:.3,r:70,def:0,cd:.3,attack:0,attackCount:0});if(!ally){S.eh=S.em=1500;beginBossIntro('phil','필','아직 끝이 아니야..!');}return true;}return false;}
  function spawnPhil(){S.philSpawned=true;S.bossStage=true;S.spawn=Infinity;const u={type:'phil',phase:1,x:690,h:1500,m:1500,v:35,d:50,a:.5,r:50,def:0,cd:.5,anim:0,attack:0};S.enemies.push(u);S.eh=S.em=1500;beginBossIntro('phil','테넨제국의 천재소년 필','따분한 참이었는데 잘됐군..');for(const v of S.units)if(v.h>0&&Math.abs(v.x-u.x)<=200)hurtSkeleton(v,300);}
  function alliedBurst(u,radius,raw){for(const target of S.enemies)if(target.h>0&&Math.abs(target.x-u.x)<=radius){const d=hitEnemy(target,raw*(u.buff?1.2:1),u);S.activity[u.type].damage+=d;if(target.h<=0)S.kills[u.type]++;}if(!S.bossStage&&Math.abs(enemyBaseX()-u.x)<=radius){const d=Math.min(S.eh,raw);S.eh-=d;S.activity[u.type].castle+=d;}S.effects.push({kind:'cannonBlast',x:u.x,radius,life:.45});}
  function alliedStrike(u,range,raw,aoe=false,limit=Infinity){const candidates=S.enemies.filter(e=>e.h>0&&(aoe||canTarget(u,e))&&e.x>=u.x-10&&e.x-u.x<=range).sort((a,b)=>a.x-b.x),targets=candidates.slice(0,aoe?limit:1);for(const target of targets){const before=target.h,damage=hitEnemy(target,raw*(u.buff?1.2:1),u);S.activity[u.type].damage+=damage;if(before>0&&target.h<=0)S.kills[u.type]++;if(u.type==='toyHammer'&&damage>0)target.stunUntil=S.time+1;}if(!S.bossStage&&enemyBaseX()>=u.x&&enemyBaseX()-u.x<=range+8){const damage=Math.min(S.eh,raw*(u.buff?1.2:1));S.eh-=damage;S.activity[u.type].castle+=damage;}sfx('sword');}
  function fireAdvanced(u,kind,to,damage,range,radius=0,side='player'){S.effects.push({kind:'advancedProjectile',mode:kind,owner:u,side,from:u.x,x:u.x,to,damage:damage*(u.buff?1.2:1),speed:kind==='orb'?260:340,radius,range,life:2,hitIds:[]});}
  function advancedTick(u,side,dt){const ally=side==='player',source=RARE[u.type]?.source||NEW_UNITS[u.type]?.source;
    if(!(u.type==='phil'||ally&&(source||['greatWarrior','captain','shieldKnight','toyHammer'].includes(u.type))))return false;
    u.anim=(u.anim||0)+dt;u.attack=Math.max(0,(u.attack||0)-dt);u.cd=Math.max(0,(u.cd||0)-dt*(u.buff?1.2:1));const opponents=ally?S.enemies:S.units,dir=ally?1:-1,base=ally?enemyBaseX():232;u.stationary=true;
    if(u.type==='toyHammer'&&u.hammerPending&&u.attack<=u.a/7){u.hammerPending=false;alliedStrike(u,u.r,u.d);}if(S.time<(u.wakeAt||0)||S.time<(u.guardUntil||0))return true;
    if(source==='isaac'||source==='apprentice'){if((u.attackCount||0)>=3&&u.cd<=0){u.guardUntil=S.time+1.5;u.attackCount=0;u.attack=0;return true;}}
    if(source==='seline'){const orbit=u.x+Math.cos(S.time*3)*30;for(const e of opponents)if(e.h>0&&Math.abs(e.x-u.x)<=30&&Math.abs(e.x-orbit)<=14&&S.time>=(e.allyOrbitAt||0)){const dealt=hitEnemy(e,50*(u.potion==='red'?1.5:1),u);S.activity[u.type].damage+=dealt;if(e.h<=0)S.kills[u.type]++;e.allyOrbitAt=S.time+1;}}
    if(source==='healer'){const wounded=S.units.filter(e=>e.h>0&&e.h<e.m&&Math.abs(e.x-u.x)<=120).sort((a,b)=>a.h/a.m-b.h/b.m)[0];const [foe,d]=nearest(u,opponents);if(wounded||foe&&d<=120){if(u.cd<=0){const target=wounded||u,amount=target.m*.1;for(const v of S.units)if(v.h>0&&Math.abs(v.x-target.x)<=120)v.h=Math.min(v.m,v.h+amount);for(const v of opponents)if(v.h>0&&Math.abs(v.x-target.x)<=120){const damage=hitEnemy(v,amount,u);S.activity[u.type].damage+=damage;if(v.h<=0)S.kills[u.type]++;}S.effects.push({kind:'holy',x:target.x,radius:120,amount,life:.8});u.cd=u.a;u.attack=.8;}return true;}}
    const earth=source==='seline'&&(u.shots||0)>=6,wave=source==='knight'&&((u.attackCount||0)+1)%9===0;const reach=earth?120:wave?145:u.r;const [target,dist]=nearest(u,opponents);const castle=(!ally||!S.bossStage)&&Math.abs(base-u.x)<=reach+8;
    if(target&&dist<=reach||castle){if(u.type==='shieldKnight'&&!u.axeForm)return true;if(u.cd>0)return true;
      if(source==='grunt'&&stageNo>=17&&Math.random()<.2){u.guardUntil=S.time+1.5;u.attack=0;return true;}
      u.attack=u.a;u.cd=u.a;u.attackCount=(u.attackCount||0)+1;if(u.type==='toyHammer'){u.hammerPending=true;return true;}
      if(u.type==='phil'||source==='phil'){if(ally)alliedStrike(u,u.r,u.d,true);else{for(const v of opponents)if(v.h>0&&v.x<=u.x+10&&u.x-v.x<=u.r)hurtSkeleton(v,u.d);if(castle)S.ph-=u.d;}if(u.phase===2&&u.attackCount%5===0)fireAdvanced(u,'philWave',u.x+dir*200,100*(u.potion==='red'?1.5:1),200,0,side);return true;}
      if(source==='seline'){u.castKind=earth?'earth':'orb';if(earth){alliedStrike(u,120,200*(u.potion==='red'?1.5:1),true);S.effects.push({kind:'earth',x:u.x+60,life:1.2});u.shots=0;}else{u.shots=(u.shots||0)+1;fireAdvanced(u,'orb',target&&dist<=180?target.x:enemyBaseX(),55*(u.potion==='red'?1.5:1),180);}return true;}
      if(u.type==='captain'||source==='cannon'){fireAdvanced(u,'cannon',target&&dist<=reach?target.x:enemyBaseX(),u.d,reach,u.type==='captain'?110:65);return true;}
      if(source==='knight'){const center=target&&dist<=reach?target.x:enemyBaseX();for(const e of opponents)if(e.h>0&&Math.abs(e.x-center)<=(wave?65:38)&&Math.abs(e.x-u.x)<=reach+38){const d=hitEnemy(e,u.d*(wave?2:1)*(u.buff?1.2:1),u);S.activity[u.type].damage+=d;if(e.h<=0)S.kills[u.type]++;}if(castle){const d=Math.min(S.eh,u.d*(wave?2:1));S.eh-=d;S.activity[u.type].castle+=d;}if(wave)S.effects.push({kind:'friendlySword',x:u.x,life:.5});return true;}
      alliedStrike(u,reach,u.d,u.type==='greatWarrior',u.type==='greatWarrior'?2:Infinity);return true;
    }
    if(u.attack<=0){u.stationary=false;u.x+=dir*u.v*(u.buff?1.2:1)*dt;}return true;
  }
  function updateAdvancedEffects(dt){for(const e of [...S.effects])if(e.kind==='advancedProjectile'&&e.life>0){const direction=e.to>=e.from?1:-1,before=e.x;e.x+=direction*Math.min(Math.abs(e.to-e.x),e.speed*dt);const targets=e.side==='player'?S.enemies:S.units;
    if(e.mode==='philWave'){for(const target of targets){if(target.h<=0||target.x<Math.min(before,e.x)-4||target.x>Math.max(before,e.x)+4||Math.abs(target.x-e.from)>e.range)continue;target.waveId??=S.waveSerial=(S.waveSerial||0)+1;if(e.hitIds.includes(target.waveId))continue;e.hitIds.push(target.waveId);if(e.side==='player'){const d=hitEnemy(target,e.damage,e.owner);S.activity[e.owner.type].damage+=d;if(target.h<=0)S.kills[e.owner.type]++;}else hurtSkeleton(target,e.damage);}const castle=e.side==='player'?enemyBaseX():232;if(!e.castleHit&&castle>=Math.min(before,e.x)&&castle<=Math.max(before,e.x)&&(e.side==='enemy'||!S.bossStage)){e.castleHit=true;if(e.side==='enemy')S.ph-=e.damage;else{const d=Math.min(S.eh,e.damage);S.eh-=d;S.activity[e.owner.type].castle+=d;}}}
    if(Math.abs(e.x-e.to)<.01){e.life=0;if(e.mode==='philWave')continue;const victims=targets.filter(v=>v.h>0&&(e.mode!=='orb'||enemyVisible(v))&&Math.abs(v.x-e.to)<=(e.mode==='orb'?24:e.radius)).sort((a,b)=>Math.abs(a.x-e.to)-Math.abs(b.x-e.to)).slice(0,e.mode==='orb'?1:Infinity);for(const v of victims){const d=hitEnemy(v,e.damage,e.owner);S.activity[e.owner.type].damage+=d;if(v.h<=0)S.kills[e.owner.type]++;}if(!S.bossStage&&Math.abs(enemyBaseX()-e.to)<=(e.mode==='orb'?8:e.radius)){const d=Math.min(S.eh,e.damage);S.eh-=d;S.activity[e.owner.type].castle+=d;}if(e.mode==='cannon')S.effects.push({kind:'cannonBlast',x:e.to,radius:e.radius,life:.45});}}
  }
  function drawAdvancedEffect(e){if(e.kind==='friendlySword'){ctx.save();ctx.strokeStyle='#a4ddff';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(e.x,GROUND-35);ctx.lineTo(e.x+145*(1-e.life/.5),GROUND-35);ctx.stroke();ctx.restore();return true;}if(e.kind!=='advancedProjectile')return false;if(e.mode==='philWave'&&FRAMES.philWave){ctx.save();ctx.translate(e.x,GROUND-35);if(e.side==='enemy')ctx.scale(-1,1);ctx.drawImage(FRAMES.philWave,-30,-14,60,28);ctx.restore();}else if(e.mode==='orb'&&FRAMES.orb05)ctx.drawImage(FRAMES.orb05,e.x-22,GROUND-56,44,26);else{ctx.save();ctx.fillStyle='#292a30';ctx.strokeStyle='#d9c8a7';ctx.beginPath();ctx.arc(e.x,GROUND-35,7,0,Math.PI*2);ctx.fill();ctx.stroke();ctx.restore();}return true;}
  function drawStun(u){if(S.time<(u.stunUntil||0)){ctx.save();ctx.fillStyle='#ffe25b';ctx.textAlign='center';ctx.font='bold 12px system-ui';ctx.fillText('✦ 스턴 ✦',u.x,GROUND-82);ctx.restore();}}


  function bossIntroActive(){return !!S&&((stageNo===40&&S.mercenaryBattle&&S.time<15)||(S.bossIntro&&S.time<S.bossIntro.until));}
  function beginBossIntro(type,name,text){if(type==='isaac'){const u=S.enemies.find(e=>e.type==='isaac'&&e.h>0);if(u)u.wakeAt=S.time+3;S.isaacSpeech={type,name,text,until:S.time+3,speechUntil:S.time+3};return;}S.bossIntroVersion=48;S.bossIntro={type,name,text,start:S.time,speechUntil:S.time+3,until:S.time+(type==='isaac'?3:6)};for(const u of [...S.units,...S.enemies]){u.stationary=true;u.attack=0;delete u._motion;}}
  function drawBossIntro(){const d=S.isaacSpeech&&S.time<S.isaacSpeech.until?S.isaacSpeech:S.bossIntro;if(!d||S.time>=d.until)return;const u=S.enemies.find(e=>e.type===d.type&&e.h>0);if(!u)return;const width=360,x=Math.max(12,Math.min(788-width,(u.x-(S.cameraX||0))-width/2)),y=104;ctx.save();ctx.fillStyle='#fff2d9';ctx.strokeStyle='#886239';ctx.lineWidth=2;ctx.fillRect(x,y,width,64);ctx.strokeRect(x,y,width,64);ctx.beginPath();ctx.moveTo(Math.min(x+width-12,Math.max(x+12,(u.x-(S.cameraX||0))))-7,y+64);ctx.lineTo((u.x-(S.cameraX||0)),y+80);ctx.lineTo(Math.min(x+width-12,Math.max(x+12,(u.x-(S.cameraX||0))))+7,y+64);ctx.fill();ctx.fillStyle='#30251d';ctx.textAlign='center';ctx.font='bold 14px system-ui';ctx.fillText(d.name,x+width/2,y+21);ctx.font='13px system-ui';ctx.fillText(S.time<d.speechUntil?d.text:'전투 시작까지 '+Math.ceil(d.until-S.time),x+width/2,y+46);ctx.restore();}

  function cameraReady(){return S?.desert?S.desert.phase==='fight':S.time>=(stageNo===50?4.2:16.2);}
  const DESERT_STATS={sphinx:{hp:9450,d:200,a:1.2,r:50,v:20,def:30},anubis:{hp:11500,d:560,a:2,r:200,v:30,def:10},pharaoh:{hp:20000,d:20,a:1.5,r:200,v:15,def:0},pyramid:{hp:20000,d:0,a:999,r:0,v:0,def:0}};
  const SPHINX_QUIZZES=[
    {question:'나의 머릿속에 지금 떠오른 숫자는 무엇이냐?',answers:['1','2','3','4'],reply:'틀렸다. 내 생각을 읽을 수는 없겠지.'},
    {question:'이 네 개의 문 중 살아서 나갈 수 있는 문은 어느 것이냐?',answers:['첫 번째 문','두 번째 문','세 번째 문','네 번째 문'],reply:'어리석군. 네가 고른 문은 방금 함정으로 바뀌었다.'},
    {question:'내가 이 문제를 내기 전에 가장 마지막으로 생각한 것은 무엇이냐?',answers:['피라미드','황금','태양','너의 죽음'],reply:'내 생각조차 읽지 못하면서 이곳을 지나가려 했느냐?'}
  ];
  function desertName(){return stageNo===60?'스핑크스':stageNo===70?'아누비스':'파라오';}
  function makeDesert(type,x){const b=DESERT_STATS[type];return {type,x,y:GROUND,h:b.hp,m:b.hp,d:b.d,a:b.a,r:b.r,v:b.v,def:b.def,cd:0,anim:0,attack:0,stationary:true};}
  function initDesert(n){q('#sphinxQuiz').classList.add('hidden');if(![60,70,80].includes(n))return;
    S.bossStage=true;S.spawn=999999;S.cameraX=800;S.enemies=[];S.desert={phase:n===60?'reveal':n===70?'speech':'procession',start:S.time};
    if(n===60){S.enemies=[makeDesert('sphinx',1380)];S.desert.quiz=Math.floor(Math.random()*3);renderSphinxQuiz();}
    if(n===70){S.enemies=[makeDesert('anubis',1380)];S.desert.text='너희들의 여정은 이곳이 끝이다.';}
    if(n===80){S.enemies=[makeDesert('pyramid',1500),makeDesert('pharaoh',1500)];S.desert.procession='out';}
    S.eh=S.em=S.enemies.reduce((n,u)=>n+u.m,0);
  }
  function renderSphinxQuiz(){const d=S?.desert;if(!d||d.phase!=='quiz')return;const quiz=SPHINX_QUIZZES[d.quiz];q('#sphinxQuiz').classList.remove('hidden');q('#sphinxQuestion').textContent=quiz.question;q('#sphinxDoors').src=window.GAME_ASSETS.sheets.sphinxDoors;q('#sphinxDoors').style.display=d.quiz===1?'block':'none';for(let i=0;i<4;i++)q('#sphinxAnswer'+i).textContent=['① ','② ','③ ','④ '][i]+quiz.answers[i];q('#sphinxTimer').textContent='남은 시간 '+Math.max(0,Math.ceil(8-(S.time-d.start)))+'초';}
  function answerSphinx(){if(S?.desert?.phase!=='quiz')return;S.desert.text=SPHINX_QUIZZES[S.desert.quiz].reply;S.desert.replyUntil=S.time+3;S.desert.phase='speech';S.desert.start=S.time;q('#sphinxQuiz').classList.add('hidden');}
  function desertIntroTick(dt){const d=S.desert;if(!d)return false;
    if(d.phase==='reveal'){if(S.time-d.start>=1){d.phase='quiz';d.start=S.time;renderSphinxQuiz();}return true;}
    if(d.phase==='quiz'){renderSphinxQuiz();if(S.time-d.start>=8)answerSphinx();return true;}
    if(d.phase==='speech'){if(S.time-d.start>=3){d.phase='pan';d.start=S.time;}return true;}
    if(d.phase==='procession'){const p=S.enemies.find(u=>u.type==='pharaoh');if(d.procession==='laugh'){p.stationary=true;if(S.time<d.laughUntil)return true;d.procession='back';delete d.replyUntil;}p.stationary=false;p.facing=d.procession==='out'?-1:1;p.v=50;const to=d.procession==='out'?1100:1500;p.x+=Math.sign(to-p.x)*Math.min(Math.abs(to-p.x),50*dt);
      if(p.x===to){if(d.procession==='out'){const guards=[makeDesert('sphinx',990),makeDesert('anubis',1210)];for(const guard of guards){guard.h=guard.m=Math.round(guard.m*.3);guard.pharaohSummoned=true;}S.enemies.push(...guards);S.em=S.enemies.reduce((n,u)=>n+u.m,0);d.procession='laugh';d.laughUntil=S.time+3;d.replyUntil=d.laughUntil;d.text='크크크';p.stationary=true;}else{S.enemies=S.enemies.filter(u=>u!==p);d.phase='pan';d.start=S.time;for(const u of S.enemies)if(u.type!=='pyramid')u.desertWake=S.time+1.2+20;S.em=S.enemies.reduce((n,u)=>n+u.m,0);}}return true;}
    if(d.phase==='pan'){const t=Math.min(1,(S.time-d.start)/1.2);setCamera(800*(1-t*t*(3-2*t)));if(t>=1)d.phase='fight';return true;}
    if(d.phase==='death'){if(S.time-d.deathAt>=3)clearStage(true);return true;}
    return false;
  }
  function desertSplash(x,radius,damage){for(const u of [...S.units,...S.workers])if(u.h>0&&Math.abs(u.x-x)<=radius)hurtSkeleton(u,damage);if(Math.abs(232-x)<=radius)S.ph=Math.max(0,S.ph-damage);}
  function desertDamage(x,radius,damage,side,ownerType){if(side!=='player'){desertSplash(x,radius,damage);return;}for(const e of S.enemies)if(e.h>0&&Math.abs(e.x-x)<=radius){const dealt=hitEnemy(e,damage);if(S.activity[ownerType])S.activity[ownerType].damage+=dealt;if(e.h<=0&&S.kills[ownerType]!==undefined)S.kills[ownerType]++;}if(!S.bossStage&&Math.abs(enemyBaseX()-x)<=radius)S.eh=Math.max(0,S.eh-damage);}
  function desertCombat(u,dt,side='enemy'){const key=RARE[u.type]?.source||u.type,ally=side==='player';if(!DESERT_STATS[key])return false;u.stationary=true;if(u.h<=0||(!ally&&S.desert?.phase!=='fight')||S.time<(u.desertWake||0)||S.time<(u.stunUntil||0)||S.time<(u.invincibleUntil||0)||u.coffinUntil||key==='pyramid')return true;
    u.attack=Math.max(0,(u.attack||0)-dt);u.cd=Math.max(0,u.cd-dt*(u.buff?1.2:1));u.anim=(u.anim||0)+dt;
    const foes=ally?S.enemies:S.units,[target,dist]=nearest(u,foes),base=ally?enemyBaseX():232,dir=ally?1:-1,castle=(!ally||!S.bossStage)&&Math.abs(u.x-base)<=u.r,reach=key==='pharaoh'?200:u.r,damage=u.d*(u.buff?1.2:1);
    if((target&&dist<=reach)||castle){if(u.cd>0)return true;u.cd=u.a;u.attack=u.a;
      if(key==='sphinx')desertDamage(target?target.x:base,100,damage,side,u.type);
      if(key==='anubis'){const to=target?target.x:base;S.effects.push({kind:'desertSoul',side,ownerType:u.type,x:u.x+dir*20,from:u.x+dir*20,to,life:8,damage});}
      if(key==='pharaoh'){const roll=Math.random();u.attack2=false;if(roll<.2){S.effects.push({kind:'raSun',side,ownerType:u.type,damage,x:target?target.x:base,life:3.05,age:0,ticks:0});}else if(roll<.5){u.attack2=true;for(const v of foes)if(v.h>0&&Math.abs(v.x-u.x)<=80){v.curseBase??={d:v.d,v:v.v};v.curseUntil=S.time+3;v.curseNext=S.time+1;v.curseTicks=0;}S.effects.push({kind:'pharaohCurse',x:u.x+dir*40,life:.65});}else u.attack=0;}
    }else if(u.attack<=0){u.stationary=false;u.x+=dir*u.v*(u.buff?1.2:1)*dt;clampUnit(u);}return true;
  }
  function updateDesertEffects(dt){updatePyramidReinforcements(dt);for(const u of S.units)if(u.coffinUntil&&S.time>=u.coffinUntil){u.h=u.m;delete u.coffinUntil;u.invincibleUntil=S.time+1;}
    for(const u of [...S.units,...S.enemies]){if(u.curseUntil){const ally=S.units.includes(u),b=ally?unitStats(u):(u.curseBase||{d:u.d,v:u.v});u.d=b.d*(u.potion==='red'?1.5:1);u.v=b.v*(u.potion==='blue'?1.3:1);while((u.curseTicks||0)<3&&S.time>=u.curseNext){if(ally)hurtSkeleton(u,u.m*.1+(u.def||0));else hitEnemy(u,u.m*.1+(u.def||0));u.curseTicks=(u.curseTicks||0)+1;u.curseNext+=1;}if(S.time<u.curseUntil){u.d*=.5;u.v*=.5;}else{delete u.curseUntil;delete u.curseNext;delete u.curseTicks;delete u.curseBase;}}}
    for(const e of S.effects){if(e.kind==='desertSoul'&&e.life>0){e.x+=Math.sign(e.to-e.x)*Math.min(Math.abs(e.x-e.to),260*dt);if(Math.abs(e.x-e.to)<.01){desertDamage(e.to,100,e.damage,e.side,e.ownerType);e.life=0;S.effects.push({kind:'pharaohCurse',x:e.to,life:.5});}}if(e.kind==='raSun'){e.age+=dt;const ticks=Math.min(15,Math.floor((e.age+1e-8)/.2));while(e.ticks<ticks){e.ticks++;desertDamage(e.x,100,e.damage??20,e.side,e.ownerType);}}}
    const d=S.desert;if(d?.coffinAt&&S.time>=d.coffinAt){const p=S.enemies.find(u=>u.type==='pharaoh');d.coffinAt=0;if(p){p.h=p.m;delete p.coffinUntil;p.invincibleUntil=S.time+1;}}
  }
  function updatePyramidReinforcements(dt){if(stageNo!==80||S.desert?.phase!=='fight')return;const pyramid=S.enemies.find(e=>e.type==='pyramid'&&e.h>0);if(!pyramid||S.enemies.some(e=>['sphinx','anubis'].includes(e.type)&&e.h>0)){delete S.desert.reinforcementClock;return;}S.desert.reinforcementClock??=4;S.desert.reinforcementClock-=dt;while(S.desert.reinforcementClock<=0){S.desert.reinforcementClock+=4;const b=enemyStats('egyptian');S.enemies.push({type:'egyptian',x:pyramid.x-30,y:GROUND,h:b.hp,m:b.hp,...b,cd:0,attack:0,anim:0});}}
  function desertDeaths(){const d=S.desert;if(!d)return;
    for(const u of [...S.enemies]){if(u.h>0||u.desertDeathHandled)continue;u.desertDeathHandled=true;
      if(u.type==='pyramid'){desertSplash(u.x,1000,888);const p=makeDesert('pharaoh',u.x);p.invincibleUntil=S.time+1;p.desertWake=S.time+1;S.enemies.push(p);S.em+=p.m;}
      if(u.type==='pharaoh'&&Math.random()<.7){u.h=1;u.coffinUntil=S.time+2;d.coffinAt=u.coffinUntil;u.invincibleUntil=u.coffinUntil;u.desertDeathHandled=false;}
      if((stageNo===60&&u.type==='sphinx')||(stageNo===70&&u.type==='anubis')){d.phase='death';d.deathAt=S.time;d.text=u.type==='sphinx'?'파라오님..':'내가 경고했거늘..';d.speakerX=u.x;setCamera(u.x-400);}
    }
  }
  function drawDesertEffect(e){if(!['desertSoul','raSun','pharaohCurse'].includes(e.kind))return false;ctx.save();if(e.kind==='desertSoul'){if(FRAMES.soul)ctx.drawImage(FRAMES.soul,e.x-42,GROUND-90,84,64);}else if(e.kind==='raSun'){ctx.fillStyle='rgba(255,215,70,.30)';ctx.fillRect(e.x-100,GROUND-200,200,200);ctx.fillStyle='#fff5b8';ctx.fillRect(e.x-8,GROUND-180,16,180);if(FRAMES.raEye)ctx.drawImage(FRAMES.raEye,e.x-40,GROUND-240,80,60);}else{if(FRAMES.curse)ctx.drawImage(FRAMES.curse,e.x-80,GROUND-80,160,80);}ctx.restore();return true;}
  function drawDesertOverlay(){const d=S.desert;if(!d)return;const speech=d.phase==='speech'||d.phase==='death'||S.time<(d.replyUntil||0);if(speech&&d.text){ctx.save();const speaker=S.enemies.find(u=>u.type===(stageNo===60?'sphinx':stageNo===80?'pharaoh':'anubis')),tip=(d.speakerX??speaker?.x??1380)-(S.cameraX||0),x=Math.max(207,Math.min(593,tip));ctx.fillStyle='#fff1d6';ctx.strokeStyle='#9c753c';ctx.fillRect(x-195,80,390,65);ctx.strokeRect(x-195,80,390,65);ctx.beginPath();ctx.moveTo(x-8,145);ctx.lineTo(tip,stageNo===70?GROUND-110:GROUND-100);ctx.lineTo(x+8,145);ctx.fill();ctx.fillStyle='#392715';ctx.textAlign='center';ctx.font='bold 12px system-ui';ctx.fillText(d.text,x,115,375);ctx.restore();}}
  for(let i=0;i<4;i++)q('#sphinxAnswer'+i).addEventListener('click',answerSphinx);

  function worldWidth(){return [40,50,60,70,80].includes(stageNo)?1600:800;}
  function enemyBaseX(){return worldWidth()-100;}
  function worldRight(){return worldWidth()-22;}
  function setCamera(x){if(S)S.cameraX=Math.max(0,Math.min(worldWidth()-800,x));}
  function mercenaryCamera(){if(S.desert||worldWidth()===800)return;const start=stageNo===50?3:15;if(S.time<start)setCamera(800);else if(S.time<start+1.2){const p=(S.time-start)/1.2;setCamera(800*(1-p*p*(3-2*p)));}else if(!S.introCameraDone){setCamera(0);S.introCameraDone=true;}}
  function mercenaryTick(u,side,dt){const key=RARE[u.type]?.source||u.type;if(!MERCENARIES[key])return false;
    if(side==='enemy'&&stageNo===40&&S.time<15){u.stationary=true;u.attack=0;return true;}
    u.anim=(u.anim||0)+dt;u.attack=Math.max(0,(u.attack||0)-dt);u.cd=Math.max(0,(u.cd||0)-dt*(u.buff?1.2:1));
    if(u.mercShot){u.mercShot.delay-=dt;if(u.mercShot.delay<=0){const shot=u.mercShot;u.mercShot=null;S.effects.push({kind:'mercProjectile',orb:key==='rifren',from:u.x,to:shot.to,x:u.x,age:0,flight:Math.max(.12,Math.abs(shot.to-u.x)/(key==='kon'?400:240)),life:3,damage:u.d*(u.buff?1.2:1),target:shot.target,owner:u,side});}}
    const ally=side==='player',[target,dist]=nearest(u,ally?S.enemies:S.units),base=ally?enemyBaseX():232,castle=(!ally||!S.bossStage)&&Math.abs(base-u.x)<=u.r+8;
    if(target&&dist<=u.r||castle){u.stationary=true;if(u.cd<=0){u.cd=u.a;u.attack=u.a;const victim=target&&dist<=u.r?target:null;
      if(key==='kon'||key==='rifren')u.mercShot={delay:u.a*.45,target:victim,to:victim?victim.x:base};
      else if(victim){if(ally){const damage=hitEnemy(victim,u.d*(u.buff?1.2:1),u);S.activity[u.type].damage+=damage;if(victim.h<=0)S.kills[u.type]++;}else hurtSkeleton(victim,u.d);}
      else if(ally){S.eh-=u.d;S.activity[u.type].castle+=u.d;}else S.ph-=u.d;
    }return true;}
    if(u.attack>0){u.stationary=true;return true;}u.stationary=false;u.x+=(ally?1:-1)*u.v*(u.buff?1.2:1)*dt;return true;
  }
  function updateMercenaryShots(dt){for(const e of S.effects){if(e.kind!=='mercProjectile'||e.hit)continue;e.age+=dt;e.x=e.from+(e.to-e.from)*Math.min(1,e.age/e.flight);if(e.age<e.flight)continue;e.hit=true;e.life=0;
    const targets=e.side==='player'?S.enemies:S.units, victims=e.orb?targets.filter(t=>t.h>0&&Math.abs(t.x-e.to)<=50):e.target&&e.target.h>0?[e.target]:[];
    for(const target of victims){if(e.side==='player'){const d=hitEnemy(target,e.damage,e.owner);S.activity[e.owner.type].damage+=d;if(target.h<=0)S.kills[e.owner.type]++;}else hurtSkeleton(target,e.damage);}
    const base=e.side==='player'?enemyBaseX():232;if((!e.target||e.orb&&Math.abs(base-e.to)<=50)&&(e.side!=='player'||!S.bossStage)){if(e.side==='player')S.eh-=e.damage;else S.ph-=e.damage;}
    if(e.orb)S.effects.push({kind:'mercBurst',x:e.to,life:.35});
  }}
  function drawMercenaryEffect(e){if(e.kind==='mercBurst'){ctx.save();ctx.globalAlpha=Math.max(0,e.life/.35);ctx.strokeStyle='#83deff';ctx.lineWidth=3;ctx.beginPath();ctx.ellipse(e.x,GROUND-25,50*(1-e.life/.4),28*(1-e.life/.4),0,0,Math.PI*2);ctx.stroke();ctx.restore();return true;}if(e.kind!=='mercProjectile')return false;ctx.save();ctx.translate(e.x,GROUND-40);const dir=Math.sign(e.to-e.from)||1;if(e.orb){ctx.shadowBlur=12;ctx.shadowColor='#47baff';ctx.fillStyle='#b4efff';ctx.beginPath();ctx.arc(0,0,7,0,Math.PI*2);ctx.fill();}else{ctx.scale(dir,1);ctx.strokeStyle='#ddc397';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(-18,0);ctx.lineTo(8,0);ctx.stroke();ctx.fillStyle='#eee';ctx.beginPath();ctx.moveTo(12,0);ctx.lineTo(5,-4);ctx.lineTo(5,4);ctx.fill();}ctx.restore();return true;}
  function drawMercenaryIntro(){if(stageNo!==40)return;const speeches=[['shane','이번의뢰는 돈을 많이 준다는데?'],['kon','이 의뢰가 끝나면 그녀와 결혼할거야'],['parhan','음..'],['rifren','스켈레톤도 예쁜 사람은 공격안한다고 하는군요']];
    if(S.time<12){const [key,text]=speeches[Math.floor(S.time/3)],u=S.enemies.find(e=>e.type===key);if(u){const width=key==='rifren'?380:320,x=Math.max(S.cameraX+12,Math.min(S.cameraX+788-width,u.x-width/2)),y=116;ctx.fillStyle='#fff2d9';ctx.strokeStyle='#886239';ctx.lineWidth=2;ctx.fillRect(x,y,width,58);ctx.strokeRect(x,y,width,58);ctx.beginPath();ctx.moveTo(u.x-7,y+58);ctx.lineTo(u.x,y+74);ctx.lineTo(u.x+7,y+58);ctx.fill();ctx.fillStyle='#30251d';ctx.textAlign='center';ctx.font='bold 13px system-ui';ctx.fillText(MERCENARIES[key].name,x+width/2,y+19);ctx.font='12px system-ui';ctx.fillText(text,x+width/2,y+41);}}
    else if(S.time<15){ctx.fillStyle='#fff1ca';ctx.font='bold 18px system-ui';ctx.textAlign='center';ctx.fillText('전투 시작까지 '+Math.ceil(15-S.time),S.cameraX+400,140);}
    ctx.fillStyle='#111925c9';ctx.fillRect(S.cameraX+270,328,260,20);ctx.fillStyle='#eed9a6';ctx.font='11px system-ui';ctx.textAlign='center';ctx.fillText(S.time<16.2?'용병단과의 결전':'◀ 화면을 좌우로 밀어 전장 이동 ▶',S.cameraX+400,342);
  }
  function installBattleViewport(){let drag=null;canvas.style.touchAction='none';
    canvas.addEventListener('pointerdown',e=>{if(!S||(worldWidth()===800)||!cameraReady()||S.over)return;drag={id:e.pointerId,x:e.clientX,camera:S.cameraX||0};canvas.setPointerCapture?.(e.pointerId);e.preventDefault();});
    canvas.addEventListener('pointermove',e=>{if(!drag||drag.id!==e.pointerId)return;setCamera(drag.camera-(e.clientX-drag.x)*800/canvas.getBoundingClientRect().width);e.preventDefault();});
    for(const event of ['pointerup','pointercancel','lostpointercapture'])canvas.addEventListener(event,()=>{drag=null;});
    q('#cameraLeft').addEventListener('click',()=>{if(S&&cameraReady())setCamera((S.cameraX||0)-400);});q('#cameraRight').addEventListener('click',()=>{if(S&&cameraReady())setCamera((S.cameraX||0)+400);});
    q('#fullscreenBtn').addEventListener('click',async()=>{if(document.fullscreenElement){await document.exitFullscreen?.();return;}if(root.classList.contains('viewportFullscreen')){root.classList.remove('viewportFullscreen');return;}try{if(root.requestFullscreen)await root.requestFullscreen();else root.classList.add('viewportFullscreen');}catch{root.classList.add('viewportFullscreen');}});
  }
  for(const id of ['#sphinxQuiz','#chapterStory','#unlockModal'])q('#gameScreen').appendChild(q(id));
  function fitGameViewport(){
    const viewport=window.visualViewport,width=viewport?.width||window.innerWidth,height=viewport?.height||window.innerHeight;
    if(!width||!height)return;
    const css=window.getComputedStyle(root),inset=name=>parseFloat(css.getPropertyValue('--safe-'+name))||0;
    const left=inset('left'),right=inset('right'),top=inset('top'),bottom=inset('bottom');
    const screen=q('#gameScreen');
    // Fit the complete game, including its compact summon dock, at 16:7.
    const gameWidth=Math.min(width-left-right,(height-top-bottom)*16/7);
    screen.style.setProperty('--game-width',gameWidth+'px');
    screen.style.setProperty('--game-height',(gameWidth*7/16)+'px');
    screen.style.setProperty('--game-left',((viewport?.offsetLeft||0)+left+(width-left-right)/2)+'px');
    screen.style.setProperty('--game-top',((viewport?.offsetTop||0)+top+(height-top-bottom)/2)+'px');
  }
  window.addEventListener('resize',fitGameViewport);
  window.visualViewport?.addEventListener('resize',fitGameViewport);
  window.visualViewport?.addEventListener('scroll',fitGameViewport);
  document.addEventListener('fullscreenchange',fitGameViewport);
  fitGameViewport();
  installBattleViewport();

  requestAnimationFrame(loop);
})();
