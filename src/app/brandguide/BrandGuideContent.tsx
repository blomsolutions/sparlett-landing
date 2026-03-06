// @ts-nocheck
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect, useRef } from "react";

const C = {
  canvas:"#F5F2ED",sage:"#4A7C6F",sand:"#C8A87C",deep:"#1E2B26",
  muted:"#8B9D97",white:"#FFFFFF",border:"#D4D0C8",sageLight:"#E8F0ED",
  sageDark:"#3D6B5F",sageLt:"#8EAFA5",terra:"#B87D6A",
  sandBg:"#F5EDE2",sageBg:"#E8F0ED",sageDarkBg:"#E2EBE8",
};
const R={xs:6,sm:8,md:12,lg:16,xl:20};
const S={xs:4,sm:8,md:16,lg:24,xl:32,xxl:48};

function Ring3({size=80,sw=null,state=0}){
  const cx=size/2,cy=size/2,r=size*0.38,circ=2*Math.PI*r,s=sw||size*0.08;
  const p=[[1/3,1/3,1/3],[.55,.25,.20],[.22,.55,.23],[.22,.23,.55]][state];
  const cl=[C.sand,C.sage,C.sageDark];let off=-circ*0.25;
  return(<svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
    {p.map((v,i)=>{const d=circ*v,g=circ-d;
      return <circle key={i} cx={cx} cy={cy} r={r} fill="none" stroke={cl[i]}
        strokeWidth={s} strokeDasharray={`${d-1.5} ${g+1.5}`} strokeDashoffset={-off+(off+=d,0)-d}
        style={{transition:"all 0.5s ease"}}/>;})}</svg>);
}

// Spinner is rendered inline in the components page

function Cv({width=200,height=24,stroke=C.sage,sw=2,style={}}){
  return(<svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" style={{display:"block",...style}}>
    <path d={`M 0 ${height-1} Q ${width*0.18} ${height*0.02} ${width} ${height*0.28}`}
      fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round"/></svg>);
}

function BgFill({color=C.sage,opacity=0.05,lineOpacity=0.08}){
  return(<svg width="100%" height="100%" viewBox="0 0 900 300" preserveAspectRatio="none"
    style={{position:"absolute",top:0,left:0,width:"100%",height:"100%"}}>
    <path d="M -20 320 Q 150 30 920 170 L 920 320 L -20 320 Z" fill={color} opacity={opacity}/>
    <path d="M -20 320 Q 150 30 920 170" fill="none" stroke={color} strokeWidth="1.2" opacity={lineOpacity}/></svg>);
}

const L=({children})=><span style={{fontFamily:"'JetBrains Mono',monospace",fontSize:9,fontWeight:600,color:C.muted,letterSpacing:1.5}}>{children}</span>;
function Swatch({name,hex,role}){
  return(<div style={{display:"flex",alignItems:"center",gap:14,marginBottom:10}}>
    <div style={{width:36,height:36,borderRadius:R.sm,background:hex,flexShrink:0,border:[C.white,C.canvas,C.sandBg,C.sageBg,C.sageDarkBg].includes(hex)?`1px solid ${C.border}`:"none"}}/>
    <div><div style={{display:"flex",gap:6,alignItems:"baseline"}}><span style={{fontSize:13,fontWeight:600,color:C.deep}}>{name}</span><span style={{fontFamily:"'JetBrains Mono',monospace",fontSize:10,color:C.muted}}>{hex}</span></div>
      <div style={{fontSize:11,color:"#5A5A5A"}}>{role}</div></div></div>);
}
function ToneRow({y,n}){return(<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",borderBottom:`1px solid ${C.border}`}}>
  <div style={{padding:"9px 14px",fontSize:13,color:C.sage,fontWeight:500}}>{y}</div>
  <div style={{padding:"9px 14px",fontSize:13,color:C.muted,borderLeft:`1px solid ${C.border}`}}>{n}</div></div>);}
function Ex({label,wrong,right}){return(<div style={{marginBottom:14}}>
  <div style={{fontSize:12,fontWeight:700,color:C.deep,marginBottom:6}}>{label}</div>
  <div style={{background:"#FDF5F5",borderRadius:R.sm,padding:"8px 12px",marginBottom:4}}><span style={{fontFamily:"'JetBrains Mono',monospace",fontSize:8,color:"#B85C5C",fontWeight:600,letterSpacing:1}}>FEIL</span><div style={{fontSize:12,color:"#7A4444",marginTop:2,lineHeight:1.5}}>{wrong}</div></div>
  <div style={{background:C.sageLight,borderRadius:R.sm,padding:"8px 12px"}}><span style={{fontFamily:"'JetBrains Mono',monospace",fontSize:8,color:C.sage,fontWeight:600,letterSpacing:1}}>RIKTIG</span><div style={{fontSize:12,color:C.deep,marginTop:2,lineHeight:1.5}}>{right}</div></div></div>);}

const PAGES=["Konsept","Logo","Farger & Type","Tone of Voice","Kommunikasjon","Flater","App","Komponenter","Oppsummering"];

export default function BrandGuideContent(){
  const [page,setPage]=useState(0);
  const [ringS,setRingS]=useState(0);
  const [toggle1,setToggle1]=useState(true);
  const [toggle2,setToggle2]=useState(false);
  const [dd,setDd]=useState(false);
  const [modal,setModal]=useState(false);

  useEffect(()=>{const l=document.createElement("link");l.href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500;600&display=swap";l.rel="stylesheet";document.head.appendChild(l);},[]);

  const P=({children})=><div style={{padding:"40px 36px",maxWidth:780,margin:"0 auto"}}>{children}</div>;
  const H=({n,t})=><><L>{n}</L><h2 style={{fontSize:26,fontWeight:700,color:C.deep,margin:"4px 0 6px",letterSpacing:-0.5}}>{t}</h2><div style={{width:36,height:2,background:C.sage,margin:`0 0 ${S.lg}px`}}/></>;
  const Sub=({children})=><h3 style={{fontSize:16,fontWeight:700,color:C.deep,margin:`${S.xl}px 0 ${S.sm}px`}}>{children}</h3>;
  const Txt=({children})=><p style={{fontSize:13.5,color:"#5A5A5A",lineHeight:1.75,maxWidth:560,marginBottom:S.md}}>{children}</p>;

  return(
    <div style={{height:"100vh",width:"100%",background:C.canvas,display:"flex",fontFamily:"'DM Sans',sans-serif"}}>
      {/* Sidebar */}
      <div style={{width:200,flexShrink:0,background:C.white,borderRight:`1px solid ${C.border}`,padding:"20px 0",display:"flex",flexDirection:"column",overflow:"auto"}}>
        <div style={{padding:"0 16px 20px",display:"flex",alignItems:"center",gap:5,borderBottom:`1px solid ${C.border}`}}>
          <Ring3 size={14} sw={1.4}/><span style={{fontSize:12,fontWeight:700,color:C.deep}}>Spar<span style={{color:C.sage}}>lett</span></span>
        </div>
        <div style={{padding:"12px 8px",flex:1}}>
          {PAGES.map((p,i)=>(
            <div key={i} onClick={()=>setPage(i)} style={{padding:"7px 10px",borderRadius:R.xs,fontSize:12,fontWeight:page===i?600:400,color:page===i?C.sage:C.muted,background:page===i?C.sageLight:"transparent",cursor:"pointer",marginBottom:2,transition:"all 0.15s"}}>{p}</div>
          ))}
        </div>
        <div style={{padding:"12px 16px",borderTop:`1px solid ${C.border}`}}>
          <span style={{fontFamily:"'JetBrains Mono',monospace",fontSize:9,color:C.muted}}>Brand Guide v3.2</span>
        </div>
      </div>

      {/* Content */}
      <div style={{flex:1,overflowY:"auto"}}>

      {/* PAGE 0: KONSEPT */}
      {page===0&&<P>
        {/* Hero */}
        <div style={{background:C.deep,borderRadius:R.xl,padding:"44px 36px",marginBottom:S.xl,position:"relative",overflow:"hidden",minHeight:190}}>
          <BgFill/><div style={{position:"relative",display:"grid",gridTemplateColumns:"auto 1fr",gap:24,alignItems:"center"}}>
            <Ring3 size={68} sw={5.5}/><div>
              <div style={{fontSize:38,fontWeight:700,color:C.canvas,lineHeight:1.08,letterSpacing:-1.5}}>Spar<span style={{color:C.sage}}>lett</span><span style={{color:C.sage}}>.</span></div>
              <Cv width={170} height={13} sw={1.8} style={{marginTop:5}}/>
              <div style={{fontSize:14,color:C.muted,marginTop:10}}>Lett å spare<span style={{color:C.sage}}>.</span> Lett å ha <span style={{color:C.sage}}>kontroll</span><span style={{color:C.sage}}>.</span></div>
            </div></div>
        </div>
        <H n="01" t="Konseptet"/>
        <Txt>Sparlett = Spar + Lett. Alt det visuelle og verbale springer fra én idé: det skal være lett. Lett å spare, lett å forstå, lett å ha kontroll.</Txt>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:S.md,marginBottom:S.xl}}>
          <div style={{background:C.white,borderRadius:R.md,padding:S.lg,border:`1px solid ${C.border}`}}>
            <div style={{fontSize:12,fontWeight:700,color:C.sage,marginBottom:S.sm}}>Visuelt lag</div>
            <div style={{display:"flex",gap:12,marginBottom:10}}>
              <div style={{textAlign:"center"}}><Ring3 size={36} sw={3}/><div style={{fontSize:8,color:C.muted,marginTop:3}}>Ring</div></div>
              <div style={{display:"flex",alignItems:"center",fontSize:12,color:C.muted}}>↔</div>
              <div style={{textAlign:"center",paddingTop:6}}><Cv width={44} height={16} sw={1.8}/><div style={{fontSize:8,color:C.muted,marginTop:3}}>Kurve</div></div>
            </div>
            <div style={{fontSize:11,color:"#5A5A5A",lineHeight:1.6}}>Ring = helhet og beskyttelse. Kurve = fra tungt til lett. Koblet via farge.</div>
          </div>
          <div style={{background:C.white,borderRadius:R.md,padding:S.lg,border:`1px solid ${C.border}`}}>
            <div style={{fontSize:12,fontWeight:700,color:C.sage,marginBottom:S.sm}}>Verbalt lag</div>
            <div style={{display:"flex",flexDirection:"column",gap:4,marginBottom:10}}>
              {["Lett å spare","Kontroll uten ","Din økonomi, "].map((t,i)=>(
                <div key={i} style={{fontSize:14,fontWeight:700,color:C.deep}}>{t}{i===0?"":<span style={{color:C.sage}}>{["","innsats","håndtert"][i]}</span>}<span style={{color:C.sage}}>.</span></div>
              ))}
            </div>
            <div style={{fontSize:11,color:"#5A5A5A",lineHeight:1.6}}>Nøkkelord i sage + punktum i sage.</div>
          </div>
        </div>
        <Sub>Kjerneverdier</Sub>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
          {[["Klarhet","Kompleksitet er vårt ansvar, ikke brukerens."],["Kontroll uten innsats","Sparlett jobber proaktivt. Brukeren merker det knapt."],["Ro","Det emosjonelle resultatet. Brukeren puster lettere."],["Stille selvtillit","Ingen utropstegn. Kvalitet snakker for seg selv."]].map(([t,d])=>
            <div key={t} style={{background:C.white,borderRadius:R.md,padding:"14px 16px",border:`1px solid ${C.border}`}}>
              <div style={{fontSize:13,fontWeight:700,color:C.deep,marginBottom:3}}>{t}</div>
              <div style={{fontSize:12,color:"#5A5A5A",lineHeight:1.55}}>{d}</div>
            </div>)}
        </div>
        <Sub>Posisjonering</Sub>
        <Txt>En moderne spareplattform som gjør økonomi forståelig og stille. Vi kommuniserer oss som en smart løsning, ikke en AI-løsning. Aldri ekskluderende.</Txt>
        <Sub>Arketype & Personlighet</Sub>
        <Txt>Vokteren — han som er der for deg når du trenger det. Direkte, enkel og selvsikker. Forsiktig og varm, men sier det som det er.</Txt>
        <Sub>Målgruppe</Sub>
        <Txt>For alle som ønsker en smartere måte å spare på. Naturlig gravitasjon mot 20- og 30-årene. Vi kommuniserer aldri ekskluderende.</Txt>
      </P>}

      {/* PAGE 1: LOGO */}
      {page===1&&<P>
        <H n="02" t="Logo"/>
        <Txt>Ring + typografisk med fargesplit. «Spar» i tekstfarge, «lett» i sage. Ringen er alltid nøytral (1/3) eksternt. Kurven kan plasseres under som tillegg, men er ikke fast del av logomerket.</Txt>

        <Sub>Primærlogo</Sub>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:S.md,marginBottom:S.xl}}>
          <div style={{background:C.deep,borderRadius:R.lg,padding:"48px 32px",display:"flex",alignItems:"center",justifyContent:"center",gap:10}}>
            <Ring3 size={32} sw={2.5}/><span style={{fontSize:28,fontWeight:700,color:C.canvas,letterSpacing:-0.5}}>Spar<span style={{color:C.sage}}>lett</span></span>
          </div>
          <div style={{background:C.white,borderRadius:R.lg,padding:"48px 32px",border:`1px solid ${C.border}`,display:"flex",alignItems:"center",justifyContent:"center",gap:10}}>
            <Ring3 size={32} sw={2.5}/><span style={{fontSize:28,fontWeight:700,color:C.deep,letterSpacing:-0.5}}>Spar<span style={{color:C.sage}}>lett</span></span>
          </div>
        </div>

        <Sub>Med kurve</Sub>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:S.md,marginBottom:S.xl}}>
          <div style={{background:C.deep,borderRadius:R.lg,padding:"40px 32px",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <div><div style={{display:"flex",alignItems:"center",gap:10}}><Ring3 size={28} sw={2.2}/><span style={{fontSize:24,fontWeight:700,color:C.canvas}}>Spar<span style={{color:C.sage}}>lett</span></span></div>
              <Cv width={140} height={8} sw={1.2} style={{marginTop:4,marginLeft:38}}/></div>
          </div>
          <div style={{background:C.white,borderRadius:R.lg,padding:"40px 32px",border:`1px solid ${C.border}`,display:"flex",alignItems:"center",justifyContent:"center"}}>
            <div><div style={{display:"flex",alignItems:"center",gap:10}}><Ring3 size={28} sw={2.2}/><span style={{fontSize:24,fontWeight:700,color:C.deep}}>Spar<span style={{color:C.sage}}>lett</span></span></div>
              <Cv width={140} height={8} sw={1.2} style={{marginTop:4,marginLeft:38}}/></div>
          </div>
        </div>

        <Sub>Logomark (kun ikon)</Sub>
        <div style={{display:"flex",gap:S.lg,marginBottom:S.xl,alignItems:"center"}}>
          {[{bg:C.deep,s:64},{bg:C.white,s:64},{bg:C.deep,s:44},{bg:C.deep,s:28}].map((v,i)=>(
            <div key={i} style={{width:v.s+24,height:v.s+24,borderRadius:R.lg,background:v.bg,display:"flex",alignItems:"center",justifyContent:"center",border:v.bg===C.white?`1px solid ${C.border}`:"none"}}>
              <Ring3 size={v.s} sw={v.s*0.08}/>
            </div>))}
        </div>

        <Sub>App-ikon</Sub>
        <div style={{display:"flex",gap:S.md,marginBottom:S.xl,alignItems:"center"}}>
          <div style={{width:60,height:60,borderRadius:14,background:C.deep,display:"flex",alignItems:"center",justifyContent:"center"}}>
            <Ring3 size={36} sw={3}/>
          </div>
          <div style={{width:44,height:44,borderRadius:10,background:C.deep,display:"flex",alignItems:"center",justifyContent:"center"}}>
            <Ring3 size={26} sw={2.2}/>
          </div>
          <div style={{fontSize:12,color:"#5A5A5A",lineHeight:1.6,maxWidth:300}}>Alltid ring på deep bakgrunn. Nøytral state. Avrundede hjørner følger plattformstandard.</div>
        </div>

        <Sub>Friareal</Sub>
        <div style={{background:C.white,borderRadius:R.md,padding:S.xl,border:`1px solid ${C.border}`,marginBottom:S.xl,display:"flex",justifyContent:"center"}}>
          <div style={{position:"relative",display:"inline-flex",alignItems:"center",gap:10,padding:32,border:`1px dashed ${C.sage}40`}}>
            <div style={{position:"absolute",top:0,left:"50%",transform:"translateX(-50%) translateY(-50%)",background:C.white,padding:"0 6px",fontSize:9,color:C.sage,fontFamily:"'JetBrains Mono',monospace"}}>min. 1x ringhøyde</div>
            <Ring3 size={28} sw={2.2}/><span style={{fontSize:22,fontWeight:700,color:C.deep}}>Spar<span style={{color:C.sage}}>lett</span></span>
          </div>
        </div>

        <Sub>Regler</Sub>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
          {[["Aldri endre farger","Ringen og teksten har faste farger."],["Aldri rotere","Ringen og logoen er alltid oppreist."],["Aldri legge effekter","Ingen skygge, gradient eller glow."],["Aldri endre proporsjoner","Ring og tekst har fast størrelseforhold."]].map(([t,d])=>
            <div key={t} style={{background:C.white,borderRadius:R.sm,padding:"12px 14px",border:`1px solid ${C.border}`}}>
              <div style={{fontSize:12,fontWeight:600,color:C.terra}}>{t}</div>
              <div style={{fontSize:11,color:"#5A5A5A",marginTop:2}}>{d}</div>
            </div>)}
        </div>
      </P>}

      {/* PAGE 2: FARGER & TYPOGRAFI */}
      {page===2&&<P>
        <H n="03" t="Farger & Typografi"/>

        <Sub>Fargepalett</Sub>
        <div style={{display:"flex",borderRadius:R.md,overflow:"hidden",height:44,marginBottom:S.lg,boxShadow:"0 1px 8px rgba(0,0,0,0.04)"}}>
          {[[C.canvas,3],[C.sageDark,1.5],[C.sage,2],[C.sand,1.5],[C.deep,1.5],[C.sageLt,1],[C.white,1]].map(([c,f],i)=>
            <div key={i} style={{flex:f,background:c,border:c===C.white?`1px solid ${C.border}`:"none"}}/>)}
        </div>
        <div style={{fontSize:11,fontWeight:600,color:C.deep,letterSpacing:0.3,marginBottom:S.sm}}>PRIMÆR</div>
        <Swatch name="Canvas" hex={C.canvas} role="Hovedbakgrunn. Varm off-white."/>
        <Swatch name="Sage" hex={C.sage} role="Primærfarge. Sparing. Knapper, ikoner."/>
        <Swatch name="Sand" hex={C.sand} role="Innsikt/smart. AI-markør."/>
        <Swatch name="Sage Dark" hex={C.sageDark} role="Mål. Ring-sektor. Dybde."/>
        <Swatch name="Deep" hex={C.deep} role="Tekst, mørke bakgrunner."/>

        <div style={{fontSize:11,fontWeight:600,color:C.deep,letterSpacing:0.3,marginBottom:S.sm,marginTop:S.lg}}>SEKTORBAKGRUNNER</div>
        <Swatch name="Sand Bg" hex={C.sandBg} role="Innsikt-kort bakgrunn."/>
        <Swatch name="Sage Bg" hex={C.sageBg} role="Sparing-kort bakgrunn."/>
        <Swatch name="SageDark Bg" hex={C.sageDarkBg} role="Mål-kort bakgrunn."/>

        <div style={{fontSize:11,fontWeight:600,color:C.deep,letterSpacing:0.3,marginBottom:S.sm,marginTop:S.lg}}>SEKUNDÆR & SEMANTISK</div>
        <Swatch name="Sage Lys" hex={C.sageLt} role="Subtile elementer, hover-states."/>
        <Swatch name="Dis" hex={C.muted} role="Sekundærtekst, placeholder, ikoner."/>
        <Swatch name="Hvit" hex={C.white} role="Kort, modaler, eleverte flater."/>
        <Swatch name="Terracotta" hex={C.terra} role="Advarsel/overforbruk. Kun in-app, aldri i brand."/>

        <Sub>Typografi</Sub>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:S.md,marginBottom:S.lg}}>
          <div style={{background:C.white,borderRadius:R.md,padding:S.lg,border:`1px solid ${C.border}`}}>
            <div style={{fontSize:32,fontWeight:700,color:C.deep,marginBottom:2}}>DM Sans</div>
            <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:9,color:C.muted,marginBottom:S.md}}>PRIMÆR — ALL TEKST</div>
            <div style={{fontSize:13,color:"#5A5A5A",lineHeight:1.6}}>Geometrisk sans-serif med varme. Avrundede former. Brukes på all tekst i produkt og kommunikasjon.</div>
          </div>
          <div style={{background:C.white,borderRadius:R.md,padding:S.lg,border:`1px solid ${C.border}`}}>
            <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:28,fontWeight:500,color:C.deep,marginBottom:2}}>JetBrains Mono</div>
            <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:9,color:C.muted,marginBottom:S.md}}>MONOSPACE — TALL & DATA</div>
            <div style={{fontSize:13,color:"#5A5A5A",lineHeight:1.6}}>For beløp, kontonumre, datapunkter, labels. Arvet fra hovedbrandet.</div>
          </div>
        </div>

        <div style={{fontSize:12,fontWeight:700,color:C.deep,marginBottom:S.sm}}>Typografisk skala</div>
        <div style={{background:C.white,borderRadius:R.md,padding:S.lg,border:`1px solid ${C.border}`,marginBottom:S.lg}}>
          {[{n:"Display",s:48,w:700,f:"DM Sans"},{n:"H1",s:32,w:700,f:"DM Sans"},{n:"H2",s:24,w:700,f:"DM Sans"},{n:"H3",s:18,w:600,f:"DM Sans"},{n:"Body",s:15,w:400,f:"DM Sans"},{n:"Body SM",s:13,w:400,f:"DM Sans"},{n:"Label",s:11,w:600,f:"DM Sans"},{n:"Caption",s:10,w:500,f:"JetBrains Mono"},{n:"Beløp LG",s:32,w:600,f:"JetBrains Mono"},{n:"Beløp SM",s:16,w:600,f:"JetBrains Mono"}].map(t=>(
            <div key={t.n} style={{display:"flex",alignItems:"baseline",gap:12,padding:"8px 0",borderBottom:`1px solid ${C.border}`}}>
              <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:9,color:C.muted,width:70}}>{t.n}</div>
              <div style={{fontFamily:t.f==="JetBrains Mono"?"'JetBrains Mono',monospace":"'DM Sans',sans-serif",fontSize:t.s>24?24:t.s,fontWeight:t.w,color:C.deep}}>{t.f==="JetBrains Mono"?"47 200 kr":"Sparlett gjør det lett"}</div>
              <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:9,color:C.muted,marginLeft:"auto"}}>{t.s}px / {t.w}</div>
            </div>))}
        </div>

        <Sub>Ikonpakke</Sub>
        <div style={{background:C.white,borderRadius:R.md,padding:S.lg,border:`1px solid ${C.border}`,marginBottom:S.md}}>
          <div style={{fontSize:16,fontWeight:700,color:C.deep,marginBottom:4}}>Lucide Icons</div>
          <div style={{fontSize:13,color:"#5A5A5A",lineHeight:1.7,marginBottom:S.md}}>Open source. Linjestil, 1.5px strek, round joins og caps. 20px standard, 16px compact. Farge følger kontekst: sage standard, sand for innsikt, sageDark for mål, muted for inaktiv.</div>
          <div style={{fontSize:12,color:C.muted}}>lucide.dev</div>
        </div>

        <div style={{fontSize:12,fontWeight:600,color:C.deep,marginBottom:S.sm}}>Faste sektorikoner</div>
        <div style={{background:C.white,borderRadius:R.md,padding:S.lg,border:`1px solid ${C.border}`,marginBottom:S.lg}}>
          <div style={{fontSize:12,color:"#5A5A5A",lineHeight:1.7,marginBottom:S.md}}>Disse tre ikonene representerer sektorene overalt — i navigasjon, moduler, og varsler.</div>
          <div style={{display:"flex",gap:S.xl,alignItems:"flex-start"}}>
            {/* Innsikt = Lightbulb */}
            <div style={{textAlign:"center"}}>
              <div style={{width:44,height:44,borderRadius:R.sm,background:C.sandBg,display:"flex",alignItems:"center",justifyContent:"center"}}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.sand} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18h6"/><path d="M10 22h4"/>
                  <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/>
                </svg>
              </div>
              <div style={{fontSize:10,fontWeight:600,color:C.sand,marginTop:4}}>Innsikt</div>
              <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:8,color:C.muted}}>Lightbulb</div>
            </div>
            {/* Sparing = PiggyBank */}
            <div style={{textAlign:"center"}}>
              <div style={{width:44,height:44,borderRadius:R.sm,background:C.sageBg,display:"flex",alignItems:"center",justifyContent:"center"}}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.sage} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2"/>
                  <path d="M2 9.5a1 1 0 0 1 1-1h0a1 1 0 0 1 1 1v0a1 1 0 0 1-1 1h0a1 1 0 0 1-1-1Z"/>
                  <path d="M16 11h.01"/>
                </svg>
              </div>
              <div style={{fontSize:10,fontWeight:600,color:C.sage,marginTop:4}}>Sparing</div>
              <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:8,color:C.muted}}>PiggyBank</div>
            </div>
            {/* Mål = Target */}
            <div style={{textAlign:"center"}}>
              <div style={{width:44,height:44,borderRadius:R.sm,background:C.sageDarkBg,display:"flex",alignItems:"center",justifyContent:"center"}}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.sageDark} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
                </svg>
              </div>
              <div style={{fontSize:10,fontWeight:600,color:C.sageDark,marginTop:4}}>Mål</div>
              <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:8,color:C.muted}}>Target</div>
            </div>
            {/* Hjem = Home */}
            <div style={{textAlign:"center"}}>
              <div style={{width:44,height:44,borderRadius:R.sm,background:C.canvas,display:"flex",alignItems:"center",justifyContent:"center"}}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.sage} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <div style={{fontSize:10,fontWeight:600,color:C.sage,marginTop:4}}>Hjem</div>
              <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:8,color:C.muted}}>Home</div>
            </div>
            {/* Profil = User */}
            <div style={{textAlign:"center"}}>
              <div style={{width:44,height:44,borderRadius:R.sm,background:C.canvas,display:"flex",alignItems:"center",justifyContent:"center"}}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.muted} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <div style={{fontSize:10,fontWeight:600,color:C.muted,marginTop:4}}>Profil</div>
              <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:8,color:C.muted}}>User</div>
            </div>
          </div>
        </div>

        <Sub>Pusterom & Hjørneradius</Sub>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:S.md}}>
          <div style={{background:C.white,borderRadius:R.md,padding:S.lg,border:`1px solid ${C.border}`}}>
            <div style={{fontSize:13,fontWeight:600,color:C.deep,marginBottom:S.md}}>Spacing</div>
            <div style={{display:"flex",gap:S.sm,alignItems:"flex-end"}}>
              {[["xs",S.xs],["sm",S.sm],["md",S.md],["lg",S.lg],["xl",S.xl],["xxl",S.xxl]].map(([n,v])=>(
                <div key={n} style={{textAlign:"center"}}><div style={{width:24,height:v,background:C.sage,borderRadius:2,opacity:0.3}}/>
                  <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:8,color:C.deep,marginTop:3,fontWeight:600}}>{v}</div></div>))}
            </div>
          </div>
          <div style={{background:C.white,borderRadius:R.md,padding:S.lg,border:`1px solid ${C.border}`}}>
            <div style={{fontSize:13,fontWeight:600,color:C.deep,marginBottom:S.md}}>Radius</div>
            <div style={{display:"flex",gap:S.md,alignItems:"center"}}>
              {[["xs",R.xs],["sm",R.sm],["md",R.md],["lg",R.lg],["xl",R.xl]].map(([n,v])=>(
                <div key={n} style={{textAlign:"center"}}><div style={{width:36,height:36,borderRadius:v,border:`2px solid ${C.sage}`,background:C.canvas}}/>
                  <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:8,color:C.deep,marginTop:3,fontWeight:600}}>{v}</div></div>))}
            </div>
          </div>
        </div>
      </P>}

      {/* PAGE 3: TONE OF VOICE */}
      {page===3&&<P>
        <H n="04" t="Tone of Voice"/>
        <Txt>Varm og trygg, med stille selvtillit. Sparlett snakker som noen som bryr seg om deg — men respekterer at du er voksen. Varmen kommer først, klarheten følger etter.</Txt>

        <Sub>Vi er / Vi er ikke</Sub>
        <div style={{border:`1px solid ${C.border}`,borderRadius:R.md,overflow:"hidden",marginBottom:S.xl}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",background:C.deep}}>
            <div style={{padding:"8px 14px",fontSize:11,fontWeight:700,color:C.white}}>VI ER</div>
            <div style={{padding:"8px 14px",fontSize:11,fontWeight:700,color:C.white,borderLeft:"1px solid rgba(255,255,255,0.1)"}}>VI ER IKKE</div>
          </div>
          <ToneRow y="Varme og omsorgsfulle" n="Kalde eller mekaniske"/>
          <ToneRow y="Klare og ærlige" n="Omstendelige eller unnvikende"/>
          <ToneRow y="Trygge og tilstede" n="Overkjørende eller belærende"/>
          <ToneRow y="Rolig selvsikre" n="Falsk entusiastiske eller peppy"/>
          <ToneRow y="Gjennomtenkt enkle" n="Forenklende eller barnslige"/>
        </div>

        <Sub>Stemmenivåer</Sub>
        <Txt>Sparlett har to stemmer som begge lever under samme tone, men med ulikt register:</Txt>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:S.md,marginBottom:S.xl}}>
          <div style={{background:C.sageBg,borderRadius:R.md,padding:S.lg}}>
            <div style={{fontSize:14,fontWeight:700,color:C.sage,marginBottom:S.sm}}>Plattformen</div>
            <div style={{fontSize:12,color:"#5A5A5A",lineHeight:1.7}}>Informerer, bekrefter, oppsummerer. Nøytral men varm. Bruker sage-elementer. Sier «dette er status» uten å fortolke.</div>
            <div style={{background:C.white,borderRadius:R.sm,padding:"10px 12px",marginTop:S.md,fontSize:12,color:C.deep}}>Feriepotten er 68% full. Du ligger 3 uker foran planen — dette går bra<span style={{color:C.sage}}>.</span></div>
          </div>
          <div style={{background:C.sandBg,borderRadius:R.md,padding:S.lg}}>
            <div style={{fontSize:14,fontWeight:700,color:C.sand,marginBottom:S.sm}}>Innsikt</div>
            <div style={{fontSize:12,color:"#5A5A5A",lineHeight:1.7}}>Anbefaler, advarer, finner muligheter. Direkte og saklig — data først, men med omsorg. Bruker sand-elementer.</div>
            <div style={{background:C.white,borderRadius:R.sm,padding:"10px 12px",marginTop:S.md,fontSize:12,color:C.deep}}>Strømavtalen er 280 kr/mnd over markedspris. Ikke stress — vi fant et bedre alternativ<span style={{color:C.sage}}>.</span></div>
          </div>
        </div>

        <Sub>Eksempler</Sub>
        <Ex label="Onboarding" wrong="Velkommen til Sparlett! 🎉 Vi er SÅ glade!" right="Velkommen til Sparlett. Koble til banken din, så tar vi oss av resten."/>
        <Ex label="Sparemål nådd" wrong="YAY! Du klarte det! Du er en sparemester!" right="Feriepotten er full — 15 000 kr spart på 4 måneder. Godt jobbet."/>
        <Ex label="Negativt budskap" wrong="Oops! Du har brukt litt mer enn planlagt 😅" right="Du er 2 400 kr over budsjettet. Ikke stress — her er tre enkle justeringer."/>
        <Ex label="Innsikt" wrong="Hei der! Vi fant noe kult!! Du kan spare penger på strøm! 🔌" right="Strømavtalen din er 280 kr over markedspris. Bytt leverandør og spar 3 360 kr i året."/>
        <Ex label="Tom tilstand" wrong="Oi, det er tomt her! Trykk på knappen for å starte 😊" right="Ingen mål ennå. Sett ditt første sparemål — vi tar oss av resten."/>
        <Ex label="Feil/Error" wrong="Noe gikk galt!! Prøv igjen senere 😫" right="Vi fikk ikke kontakt med banken. Prøv igjen om litt."/>

        <Sub>Skriveregler</Sub>
        <div style={{background:C.white,borderRadius:R.md,padding:S.lg,border:`1px solid ${C.border}`}}>
          {["Norsk bokmål. Naturlig og moderne.","Aldri emojis i produktet.","Aldri utropstegn i UX-tekst.","Bruk tall — «380 kr», ikke «trehundreogåtti kroner».","Hold setninger under 20 ord når mulig.","Punktum i sage-farge i slagord og overskrifter.","Nøkkelordet i sage-farge i kommunikasjon.","Aldri si «AI» til brukeren — vi er en smart løsning.","Si «vi» og «deg», ikke «Sparlett» i tredjeperson i appen."].map((r,i)=>(
            <div key={i} style={{display:"flex",gap:8,padding:"6px 0",borderBottom:i<8?`1px solid ${C.border}`:"none"}}>
              <span style={{color:C.sage,fontWeight:700,fontSize:12}}>•</span>
              <span style={{fontSize:12.5,color:C.deep,lineHeight:1.5}}>{r}</span>
            </div>))}
        </div>
      </P>}

      {/* PAGE 4: KOMMUNIKASJON */}
      {page===4&&<P>
        <H n="05" t="Kommunikasjon"/>
        <Txt>Kommunikasjonsrammeverket definerer hva Sparlett sier og hvordan det posisjonerer seg.</Txt>

        <div style={{background:C.sageLight,borderRadius:R.lg,padding:"24px 22px",marginBottom:S.xl}}>
          {[{l:"Ambition",h:"A life without financial stress",b:"Everyone deserves to feel calm about their money. Sparlett makes that the default — not a luxury.",big:false},
            {l:"Our Thing",h:"Insight and control that works while you don't",b:"We don't give you another dashboard — we give you a system that watches, learns, and acts.",big:true},
            {l:"We Offer",h:"A smart savings platform with an AI that actively protects your economy",b:"Clarity, automation, and a direct line to better decisions.",big:false},
            {l:"Personality",h:"We are direct, simple and confident",b:"We say what the numbers say. We don't decorate and we don't overcomplicate.",big:false},
          ].map((r,i)=>(
            <div key={i} style={{display:"grid",gridTemplateColumns:"56px 1fr 1fr",gap:0,alignItems:"center",borderBottom:i<3?`1px solid ${C.sage}25`:"none",padding:"20px 0"}}>
              <div style={{writingMode:"vertical-lr",transform:"rotate(180deg)",fontSize:11,fontWeight:500,color:C.muted,justifySelf:"center"}}>{r.l}</div>
              <div style={{paddingRight:20}}><div style={{fontSize:r.big?22:15,fontWeight:r.big?700:500,color:C.deep,lineHeight:1.2,letterSpacing:r.big?-0.3:0}}>{r.h}</div></div>
              <div style={{display:"flex",alignItems:"center",gap:14}}><div style={{width:40,borderBottom:`1.5px dotted ${C.sage}50`}}/><div style={{fontSize:12,color:C.deep,opacity:0.75,lineHeight:1.5}}>{r.b}</div></div>
            </div>))}
        </div>

        <Sub>Fargesplit i kommunikasjon</Sub>
        <Txt>Nøkkelordet — det viktigste ordet i setningen — settes alltid i sage. Punktumet avslutter i sage. Sammen sier de «dette er det viktige, og det er ferdig.»</Txt>
        <div style={{display:"flex",flexDirection:"column",gap:6,marginBottom:S.xl}}>
          {[["Lett å spare",".",""],[" Kontroll uten ","innsats","."],[" Din økonomi, ","håndtert","."],[" Se alt. Forstå alt. Spar ","lett","."],[" 47 200 kr spart. ","Automatisk","."],[" Ro i ","økonomien","."]].map(([a,b,c],i)=>(
            <div key={i} style={{background:C.white,borderRadius:R.sm,padding:"10px 16px",border:`1px solid ${C.border}`,fontSize:16,fontWeight:700,color:C.deep}}>
              {a}<span style={{color:C.sage}}>{b}</span><span style={{color:C.sage}}>{c}</span>
            </div>))}
        </div>

        <Sub>Innsikt (Smart-biten)</Sub>
        <Txt>Sand-fargen eier «smart». Når brukeren ser sand, vet de at Sparlett har funnet noe. Innsikt-meldinger har sand bakgrunnstint + sand ring-state. Labeles «Innsikt».</Txt>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:S.md}}>
          <div style={{background:C.white,borderRadius:R.md,padding:S.lg,border:`1px solid ${C.border}`}}>
            <div style={{fontSize:11,fontWeight:600,color:C.muted,marginBottom:S.sm}}>PLATTFORM</div>
            <div style={{background:C.canvas,borderRadius:R.sm,padding:"10px 12px"}}>
              <div style={{display:"flex",alignItems:"center",gap:5,marginBottom:4}}><Ring3 size={14} sw={1.4} state={2}/><span style={{fontSize:9,fontWeight:600,color:C.sage}}>Sparlett</span></div>
              <div style={{fontSize:12,color:C.deep}}>Feriepotten er full<span style={{color:C.sage}}>.</span></div>
            </div>
          </div>
          <div style={{background:C.white,borderRadius:R.md,padding:S.lg,border:`1px solid ${C.border}`}}>
            <div style={{fontSize:11,fontWeight:600,color:C.muted,marginBottom:S.sm}}>INNSIKT</div>
            <div style={{background:C.sandBg,borderRadius:R.sm,padding:"10px 12px"}}>
              <div style={{display:"flex",alignItems:"center",gap:5,marginBottom:4}}><Ring3 size={14} sw={1.4} state={1}/><span style={{fontSize:9,fontWeight:600,color:C.sand}}>Innsikt</span></div>
              <div style={{fontSize:12,color:C.deep}}>Strøm er 280 kr over markedspris<span style={{color:C.sage}}>.</span></div>
              <Cv width={120} height={5} stroke={C.sand} sw={1} style={{marginTop:4}}/>
            </div>
          </div>
        </div>
      </P>}

      {/* PAGE 5: FLATER */}
      {page===5&&<P>
        <H n="06" t="På alle flater"/>
        <div style={{background:C.deep,borderRadius:R.xl,padding:"44px 36px",marginBottom:S.md,position:"relative",overflow:"hidden",minHeight:190}}>
          <BgFill/><div style={{position:"relative",display:"grid",gridTemplateColumns:"auto 1fr",gap:24,alignItems:"center"}}>
            <Ring3 size={72} sw={6}/><div>
              <div style={{fontSize:40,fontWeight:700,color:C.canvas,lineHeight:1.08,letterSpacing:-1.5}}>Spar<span style={{color:C.sage}}>lett</span><span style={{color:C.sage}}>.</span></div>
              <Cv width={190} height={14} sw={2} style={{marginTop:5}}/>
              <div style={{fontSize:15,color:C.muted,marginTop:10}}>Lett å spare<span style={{color:C.sage}}>.</span> Lett å ha <span style={{color:C.sage}}>kontroll</span><span style={{color:C.sage}}>.</span></div>
            </div></div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:S.md}}>
          <div style={{background:C.deep,borderRadius:R.lg,padding:"28px 22px",position:"relative",overflow:"hidden"}}>
            <BgFill color={C.sand} opacity={0.04} lineOpacity={0.06}/><div style={{position:"relative"}}>
              <L><span style={{color:C.muted}}>KAMPANJE</span></L>
              <div style={{fontSize:24,fontWeight:700,color:C.canvas,lineHeight:1.15,marginTop:S.sm}}>Visste du at du<br/>betaler for mye<br/>for <span style={{color:C.sand}}>strøm</span><span style={{color:C.sage}}>?</span></div>
              <Cv width={130} height={10} stroke={C.sand} sw={1.5} style={{marginTop:S.sm}}/>
              <div style={{display:"flex",alignItems:"center",gap:4,marginTop:S.lg}}><Ring3 size={10} sw={1}/><span style={{fontSize:8,color:C.muted}}>sparlett.no</span></div>
            </div></div>
          <div style={{background:C.deep,borderRadius:R.lg,padding:"28px 22px",position:"relative",overflow:"hidden"}}>
            <BgFill/><div style={{position:"relative"}}>
              <L><span style={{color:C.muted}}>KAMPANJE</span></L>
              <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:36,fontWeight:600,color:C.canvas,letterSpacing:-1,marginTop:S.sm}}>47 200 kr</div>
              <Cv width={150} height={10} sw={1.5} style={{marginTop:4}}/>
              <div style={{fontSize:14,color:C.muted,marginTop:S.sm}}>spart i år<span style={{color:C.sage}}>.</span> <span style={{color:C.sage}}>Automatisk</span><span style={{color:C.sage}}>.</span></div>
              <div style={{display:"flex",alignItems:"center",gap:4,marginTop:S.lg}}><Ring3 size={10} sw={1}/><span style={{fontSize:8,color:C.muted}}>sparlett.no</span></div>
            </div></div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10,marginBottom:S.md}}>
          {[{l:"INNSIKT",v:"3 360 kr",c:C.sand},{l:"MÅL",v:"Sommerferie.",c:C.sageDark},{l:"SPARING",v:"4 200 kr",c:C.sage}].map((s,i)=>(
            <div key={i} style={{background:C.deep,borderRadius:R.md,padding:"18px 14px",position:"relative",overflow:"hidden"}}>
              <svg width="100%" height="100%" viewBox="0 0 280 180" preserveAspectRatio="none" style={{position:"absolute",top:0,left:0}}>
                <path d="M -10 200 Q 50 30 290 110 L 290 200 L -10 200 Z" fill={s.c} opacity={0.04}/></svg>
              <div style={{position:"relative"}}>
                <L><span style={{color:C.muted}}>{s.l}</span></L>
                <div style={{fontFamily:s.v.includes("kr")?"'JetBrains Mono',monospace":"'DM Sans',sans-serif",fontSize:s.v.includes("kr")?20:16,fontWeight:s.v.includes("kr")?600:700,color:C.canvas,margin:"8px 0 2px"}}>{s.v}</div>
                <Cv width={90} height={6} stroke={s.c} sw={1.2}/>
                <div style={{display:"flex",alignItems:"center",gap:3,marginTop:10}}><Ring3 size={8} sw={0.8}/><span style={{fontSize:7,color:C.muted}}>sparlett.no</span></div>
              </div></div>))}
        </div>
        {/* Website */}
        <div style={{background:C.white,borderRadius:R.lg,padding:"32px 28px",border:`1px solid ${C.border}`,position:"relative",overflow:"hidden",marginBottom:S.md}}>
          <svg width="100%" height="100%" viewBox="0 0 780 220" preserveAspectRatio="none" style={{position:"absolute",top:0,left:0}}><path d="M -20 240 Q 140 40 800 130 L 800 240 L -20 240 Z" fill={C.sage} opacity={0.025}/></svg>
          <div style={{position:"relative"}}>
            <L>NETTSIDE</L>
            <div style={{display:"flex",alignItems:"center",gap:6,margin:"10px 0 18px"}}><Ring3 size={18} sw={1.8}/><span style={{fontSize:13,fontWeight:700,color:C.deep}}>Spar<span style={{color:C.sage}}>lett</span></span></div>
            <div style={{fontSize:30,fontWeight:700,color:C.deep,lineHeight:1.12,letterSpacing:-0.8}}>Din økonomi,<br/><span style={{color:C.sage}}>håndtert</span><span style={{color:C.sage}}>.</span></div>
            <Cv width={220} height={12} sw={1.8} style={{marginTop:5}}/>
            <div style={{fontSize:14,color:"#5A5A5A",marginTop:S.md,maxWidth:340,lineHeight:1.6}}>Sparlett gir deg innsikt og kontroll — og jobber for deg selv når du ikke tenker på det<span style={{color:C.sage}}>.</span></div>
            <div style={{marginTop:S.lg,display:"inline-block",background:C.sage,color:C.white,padding:"10px 24px",borderRadius:R.sm,fontSize:14,fontWeight:600}}>Kom i gang</div>
          </div>
        </div>
        {/* Small formats */}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10}}>
          <div style={{background:C.white,borderRadius:R.md,padding:S.lg,border:`1px solid ${C.border}`}}>
            <L>VISITTKORT</L>
            <div style={{marginTop:10,display:"flex",alignItems:"center",gap:5}}><Ring3 size={14} sw={1.4}/><span style={{fontSize:12,fontWeight:700,color:C.deep}}>Spar<span style={{color:C.sage}}>lett</span></span></div>
            <Cv width={60} height={4} sw={0.8} style={{marginTop:4}}/>
            <div style={{fontSize:9,color:C.muted,marginTop:S.sm}}>sparlett.no</div>
          </div>
          <div style={{background:C.white,borderRadius:R.md,padding:S.lg,border:`1px solid ${C.border}`}}>
            <L>E-POSTSIGNATUR</L>
            <div style={{marginTop:10,fontSize:12,fontWeight:600,color:C.deep}}>Marcus Blom</div>
            <div style={{fontSize:10,color:C.muted,marginTop:1}}>Grunnlegger</div>
            <Cv width={50} height={3} sw={0.7} style={{margin:"6px 0"}}/>
            <div style={{display:"flex",alignItems:"center",gap:3}}><Ring3 size={8} sw={0.8}/><span style={{fontSize:8,fontWeight:600,color:C.deep}}>Spar<span style={{color:C.sage}}>lett</span></span></div>
          </div>
          <div style={{background:C.white,borderRadius:R.md,padding:S.lg,border:`1px solid ${C.border}`}}>
            <L>PUSH-VARSEL</L>
            <div style={{marginTop:10,background:C.sandBg,borderRadius:R.xs,padding:"8px 10px"}}>
              <div style={{display:"flex",alignItems:"center",gap:3,marginBottom:2}}><Ring3 size={10} sw={1} state={1}/><span style={{fontSize:7,fontWeight:600,color:C.sand}}>Innsikt</span></div>
              <div style={{fontSize:10,color:C.deep}}>Forsikringen kan bli billigere<span style={{color:C.sage}}>.</span></div>
            </div>
          </div>
        </div>
      </P>}

      {/* PAGE 6: APP */}
      {page===6&&<P>
        <H n="07" t="Appen"/>
        <div style={{background:C.canvas,borderRadius:R.lg,padding:"18px 16px",border:`1px solid ${C.border}`,marginBottom:S.md}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14}}>
            <div style={{display:"flex",alignItems:"center",gap:5}}><Ring3 size={16} sw={1.6}/><span style={{fontSize:12,fontWeight:700,color:C.deep}}>Spar<span style={{color:C.sage}}>lett</span></span></div>
            <div style={{width:24,height:24,borderRadius:R.xs,background:C.white,border:`1px solid ${C.border}`}}/>
          </div>
          <div style={{background:C.white,borderRadius:R.md,padding:"18px 16px",marginBottom:S.sm}}>
            <div style={{fontSize:9,color:C.muted,fontFamily:"'JetBrains Mono',monospace",letterSpacing:1}}>SPART DENNE MÅNEDEN</div>
            <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:28,fontWeight:600,color:C.deep,margin:"4px 0 3px"}}>4 200 kr</div>
            <Cv width={180} height={8} sw={1.3}/>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:6,marginBottom:S.sm}}>
            {[{n:"INNSIKT",c:C.sand,bg:C.sandBg,st:1,v:"3 funn."},{n:"SPARING",c:C.sage,bg:C.sageBg,st:2,v:"47 200 kr"},{n:"MÅL",c:C.sageDark,bg:C.sageDarkBg,st:3,v:"Ferie"}].map(s=>(
              <div key={s.n} style={{background:s.bg,borderRadius:R.sm,padding:"12px 10px"}}>
                <div style={{display:"flex",alignItems:"center",gap:3,marginBottom:4}}><Ring3 size={10} sw={1} state={s.st}/><span style={{fontSize:7,fontWeight:600,color:s.c,letterSpacing:0.5}}>{s.n}</span></div>
                <div style={{fontSize:s.v.includes("kr")?12:11,fontWeight:600,color:C.deep,fontFamily:s.v.includes("kr")?"'JetBrains Mono',monospace":"'DM Sans',sans-serif"}}>{s.v}</div>
                <Cv width={80} height={4} stroke={s.c} sw={0.8} style={{marginTop:3}}/>
              </div>))}
          </div>
          <div style={{background:C.sandBg,borderRadius:R.sm,padding:S.md,marginBottom:5}}>
            <div style={{display:"flex",alignItems:"center",gap:4,marginBottom:4}}><Ring3 size={12} sw={1.2} state={1}/><span style={{fontSize:8,fontWeight:600,color:C.sand}}>Innsikt</span></div>
            <div style={{fontSize:12,color:C.deep,lineHeight:1.5}}>Strømavtalen er 280 kr/mnd over markedspris<span style={{color:C.sage}}>.</span></div>
            <Cv width={140} height={5} stroke={C.sand} sw={0.8} style={{marginTop:4}}/>
            <div style={{fontSize:10,color:C.sand,fontWeight:600,marginTop:4}}>Spar 3 360 kr/år</div>
          </div>
          <div style={{background:C.white,borderRadius:R.sm,padding:S.md}}>
            <div style={{display:"flex",alignItems:"center",gap:4,marginBottom:4}}><Ring3 size={12} sw={1.2}/><span style={{fontSize:8,fontWeight:600,color:C.sage}}>Sparlett</span></div>
            <div style={{fontSize:12,color:C.deep,lineHeight:1.5}}>Feriepotten er 68% full<span style={{color:C.sage}}>.</span> Dette går bra<span style={{color:C.sage}}>.</span></div>
            <Cv width={140} height={5} sw={0.8} style={{marginTop:4}}/>
          </div>
        </div>
        {/* Onboarding */}
        <div style={{background:C.deep,borderRadius:R.lg,padding:"28px 22px",position:"relative",overflow:"hidden"}}>
          <BgFill opacity={0.04} lineOpacity={0.06}/><div style={{position:"relative",textAlign:"center"}}>
            <L><span style={{color:C.muted}}>ONBOARDING</span></L>
            <div style={{marginTop:14}}><Ring3 size={48} sw={4}/></div>
            <div style={{fontSize:22,fontWeight:700,color:C.canvas,margin:"12px 0 3px"}}>Velkommen<span style={{color:C.sage}}>.</span></div>
            <Cv width={120} height={8} sw={1.3} style={{margin:"0 auto"}}/>
            <div style={{fontSize:13,color:C.muted,marginTop:10}}>Koble til banken din<span style={{color:C.sage}}>.</span><br/>Så tar vi oss av resten<span style={{color:C.sage}}>.</span></div>
            <div style={{marginTop:S.lg,display:"inline-block",background:C.sage,color:C.white,padding:"8px 24px",borderRadius:R.sm,fontSize:13,fontWeight:600}}>Koble til bank</div>
          </div></div>
      </P>}

      {/* PAGE 7: KOMPONENTER */}
      {page===7&&<P>
        <H n="08" t="Komponenter"/>
        <Txt>Alle UI-komponenter. Ikonpakke: Lucide Icons (lucide.dev). Linjestil, 1.5px, round caps/joins.</Txt>

        {/* FIXED ICONS */}
        <Sub>Faste ikoner</Sub>
        <div style={{fontSize:12,color:"#5A5A5A",lineHeight:1.7,marginBottom:S.md}}>Disse ikonene er faste og brukes konsistent i navigasjon, moduler og varsler gjennom hele produktet.</div>
        <div style={{background:C.white,borderRadius:R.md,padding:S.lg,border:`1px solid ${C.border}`,marginBottom:S.lg}}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(6,1fr)",gap:S.sm}}>
            {[
              {name:"Hjem",lucide:"Home",c:C.sage,bg:C.sageBg,
                icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>},
              {name:"Innsikt",lucide:"Lightbulb",c:C.sand,bg:C.sandBg,
                icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/></svg>},
              {name:"Sparing",lucide:"PiggyBank",c:C.sage,bg:C.sageBg,
                icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2"/><path d="M2 9.5a1 1 0 0 1 1-1h0a1 1 0 0 1 1 1v0a1 1 0 0 1-1 1h0a1 1 0 0 1-1-1Z"/><path d="M16 11h.01"/></svg>},
              {name:"Mål",lucide:"Target",c:C.sageDark,bg:C.sageDarkBg,
                icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>},
              {name:"Historikk",lucide:"Clock",c:C.sage,bg:C.sageBg,
                icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>},
              {name:"Profil",lucide:"User",c:C.muted,bg:C.canvas,
                icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>},
            ].map(ic=>(
              <div key={ic.name} style={{textAlign:"center"}}>
                <div style={{width:44,height:44,borderRadius:R.sm,background:ic.bg,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto",color:ic.c}}>{ic.icon}</div>
                <div style={{fontSize:10,fontWeight:600,color:ic.c,marginTop:5}}>{ic.name}</div>
                <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:8,color:C.muted}}>{ic.lucide}</div>
              </div>))}
          </div>

          <div style={{borderTop:`1px solid ${C.border}`,marginTop:S.lg,paddingTop:S.md}}>
            <div style={{fontSize:11,fontWeight:600,color:C.deep,marginBottom:S.sm}}>Øvrige ikoner</div>
            <div style={{display:"flex",gap:S.md,flexWrap:"wrap"}}>
              {[
                {name:"Søk",lucide:"Search",icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>},
                {name:"Legg til",lucide:"Plus",icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>},
                {name:"Lukk",lucide:"X",icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>},
                {name:"Meny",lucide:"Menu",icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M4 12h16M4 6h16M4 18h16"/></svg>},
                {name:"Innstillinger",lucide:"Settings",icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>},
                {name:"Varsel",lucide:"Bell",icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>},
                {name:"Trend opp",lucide:"TrendingUp",icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>},
                {name:"Trend ned",lucide:"TrendingDown",icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>},
                {name:"Kredittkort",lucide:"CreditCard",icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="22" height="16" x="1" y="4" rx="2"/><path d="M1 10h22"/></svg>},
                {name:"Kalender",lucide:"Calendar",icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>},
              ].map(ic=>(
                <div key={ic.name} style={{textAlign:"center",width:50}}>
                  <div style={{width:32,height:32,borderRadius:R.xs,background:C.canvas,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto",color:C.sage}}>{ic.icon}</div>
                  <div style={{fontSize:8,color:C.muted,marginTop:3}}>{ic.name}</div>
                  <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:7,color:`${C.muted}80`}}>{ic.lucide}</div>
                </div>))}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <Sub>Knapper</Sub>
        <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:S.sm}}>
          {[{l:"Primær",bg:C.sage,c:C.white},{l:"Innsikt",bg:C.sand,c:C.deep},{l:"Sekundær",bg:"transparent",c:C.deep,border:`1.5px solid ${C.border}`},{l:"Mørk",bg:C.deep,c:C.canvas},{l:"Ghost",bg:`${C.sage}15`,c:C.sage},{l:"Destruktiv",bg:C.terra,c:C.white},{l:"Disabled",bg:`${C.muted}30`,c:C.muted}].map(b=>(
            <button key={b.l} style={{background:b.bg,color:b.c,border:b.border||"none",borderRadius:R.sm,padding:"9px 20px",fontSize:13,fontWeight:600,cursor:b.l==="Disabled"?"not-allowed":"pointer",fontFamily:"'DM Sans',sans-serif"}}>{b.l}</button>))}
        </div>
        <div style={{display:"flex",gap:8,marginBottom:S.lg}}>
          <button style={{background:C.sage,color:C.white,border:"none",borderRadius:R.sm,padding:"7px 14px",fontSize:11,fontWeight:600,fontFamily:"'DM Sans',sans-serif"}}>Liten</button>
          <button style={{background:C.sage,color:C.white,border:"none",borderRadius:R.sm,padding:"11px 28px",fontSize:15,fontWeight:600,fontFamily:"'DM Sans',sans-serif"}}>Stor</button>
          <button style={{width:36,height:36,background:C.sage,border:"none",borderRadius:18,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2V12M2 7H12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </button>
        </div>

        {/* Toggle, Checkbox, Radio */}
        <Sub>Toggle / Checkbox / Radio</Sub>
        <div style={{display:"flex",gap:20,alignItems:"center",flexWrap:"wrap",marginBottom:S.lg}}>
          {[[toggle1,setToggle1,"På"],[toggle2,setToggle2,"Av"]].map(([v,fn,l],i)=>(
            <div key={i} style={{display:"flex",alignItems:"center",gap:6}}>
              <div onClick={()=>fn(!v)} style={{width:40,height:22,borderRadius:11,background:v?C.sage:`${C.muted}40`,cursor:"pointer",position:"relative",transition:"background 0.2s"}}>
                <div style={{width:18,height:18,borderRadius:9,background:C.white,position:"absolute",top:2,left:v?20:2,transition:"left 0.2s",boxShadow:"0 1px 3px rgba(0,0,0,0.15)"}}/>
              </div><span style={{fontSize:12,color:C.deep}}>{l}</span>
            </div>))}
          <div style={{display:"flex",alignItems:"center",gap:5}}>
            <div style={{width:16,height:16,borderRadius:3,border:`1.5px solid ${C.sage}`,background:C.sage,display:"flex",alignItems:"center",justifyContent:"center"}}>
              <svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 5L4 7L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
            </div><span style={{fontSize:12,color:C.deep}}>Checked</span>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:5}}>
            <div style={{width:16,height:16,borderRadius:3,border:`1.5px solid ${C.border}`}}/><span style={{fontSize:12,color:C.deep}}>Unchecked</span>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:5}}>
            <div style={{width:16,height:16,borderRadius:8,border:`1.5px solid ${C.sage}`,display:"flex",alignItems:"center",justifyContent:"center"}}><div style={{width:8,height:8,borderRadius:4,background:C.sage}}/></div>
            <span style={{fontSize:12,color:C.deep}}>Radio</span>
          </div>
        </div>

        {/* Labels */}
        <Sub>Labels & Status</Sub>
        <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:S.lg}}>
          {[{t:"Innsikt",bg:C.sandBg,c:C.sand},{t:"Sparing",bg:C.sageBg,c:C.sage},{t:"Mål",bg:C.sageDarkBg,c:C.sageDark},{t:"Advarsel",bg:"#F5E8E4",c:C.terra},{t:"Ny",bg:C.sageLight,c:C.sage},{t:"Pro",bg:C.deep,c:C.canvas}].map(l=>(
            <span key={l.t} style={{background:l.bg,color:l.c,padding:"4px 10px",borderRadius:R.xs,fontSize:11,fontWeight:600}}>{l.t}</span>))}
        </div>

        {/* Input */}
        <Sub>Input-felter</Sub>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10,marginBottom:S.lg}}>
          {[["Standard",C.border,C.muted,"Placeholder..."],[`Fokus`,C.sage,C.deep,"Innhold"],["Feil",C.terra,C.deep,"Ugyldig"]].map(([l,bc,tc,v])=>(
            <div key={l}><div style={{fontSize:10,fontWeight:600,color:C.deep,marginBottom:3}}>{l}</div>
              <div style={{background:C.white,border:`1.5px solid ${bc}`,borderRadius:R.sm,padding:"9px 12px",fontSize:13,color:tc}}>{v}</div>
              {l==="Feil"&&<div style={{fontSize:9,color:C.terra,marginTop:2}}>Feltet er påkrevd.</div>}
            </div>))}
        </div>

        {/* Cards */}
        <Sub>Kort</Sub>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8,marginBottom:S.lg}}>
          {[{l:"Standard",bg:C.white,c:C.deep,bd:true},{l:"Innsikt",bg:C.sandBg,c:C.deep},{l:"Sparing",bg:C.sageBg,c:C.deep},{l:"Mål",bg:C.sageDarkBg,c:C.deep},{l:"Mørk",bg:C.deep,c:C.canvas},{l:"Canvas",bg:C.canvas,c:C.deep,bd:true}].map(ca=>(
            <div key={ca.l} style={{background:ca.bg,borderRadius:R.md,padding:"14px",border:ca.bd?`1px solid ${C.border}`:"none"}}>
              <div style={{fontSize:12,fontWeight:600,color:ca.c}}>{ca.l}</div></div>))}
        </div>

        {/* Alerts */}
        <Sub>Varsler</Sub>
        <div style={{display:"flex",flexDirection:"column",gap:6,marginBottom:S.lg}}>
          {[{l:"Innsikt",bg:C.sandBg,c:C.sand,st:1,m:"Vi fant en billigere forsikring."},{l:"Spart",bg:C.sageBg,c:C.sage,st:2,m:"Sparemålet er nådd. Godt jobbet."},{l:"Advarsel",bg:"#F5E8E4",c:C.terra,st:0,m:"2 400 kr over budsjettet."}].map(a=>(
            <div key={a.l} style={{background:a.bg,borderRadius:R.sm,padding:"10px 14px",display:"flex",gap:8,alignItems:"flex-start"}}>
              {a.st>0?<Ring3 size={14} sw={1.4} state={a.st}/>:<div style={{width:14,height:14,borderRadius:7,background:C.terra,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center"}}><span style={{color:C.white,fontSize:9,fontWeight:700}}>!</span></div>}
              <div style={{flex:1}}><div style={{fontSize:11,fontWeight:600,color:a.c}}>{a.l}</div><div style={{fontSize:11,color:C.deep,marginTop:1}}>{a.m}</div></div>
              <span style={{fontSize:9,color:C.muted,cursor:"pointer"}}>✕</span>
            </div>))}
        </div>

        {/* Dropdown */}
        <Sub>Dropdown</Sub>
        <div style={{position:"relative",display:"inline-block",marginBottom:S.lg}}>
          <div onClick={()=>setDd(!dd)} style={{background:C.white,border:`1.5px solid ${dd?C.sage:C.border}`,borderRadius:R.sm,padding:"9px 12px",fontSize:12,color:C.deep,cursor:"pointer",display:"flex",alignItems:"center",gap:6,width:200}}>
            <span style={{flex:1}}>Velg kategori</span><span style={{fontSize:9,color:C.muted,transform:dd?"rotate(180deg)":"",transition:"transform 0.2s"}}>▼</span>
          </div>
          {dd&&<div style={{position:"absolute",top:"100%",left:0,right:0,marginTop:3,background:C.white,borderRadius:R.sm,border:`1px solid ${C.border}`,boxShadow:"0 4px 16px rgba(0,0,0,0.08)",zIndex:10,overflow:"hidden"}}>
            {["Mat","Transport","Underholdning","Abonnementer"].map((it,i)=>(
              <div key={i} onClick={()=>setDd(false)} style={{padding:"9px 12px",fontSize:12,color:C.deep,cursor:"pointer",borderBottom:i<3?`1px solid ${C.border}`:"none"}}
                onMouseEnter={e=>e.target.style.background=C.sageLight} onMouseLeave={e=>e.target.style.background="transparent"}>{it}</div>))}
          </div>}
        </div>

        {/* Calendar */}
        <Sub>Kalender</Sub>
        <div style={{background:C.white,borderRadius:R.md,padding:S.lg,border:`1px solid ${C.border}`,display:"inline-block",marginBottom:S.lg}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:S.sm,width:196}}>
            <span style={{fontSize:11,color:C.muted,cursor:"pointer"}}>‹</span><span style={{fontSize:12,fontWeight:600,color:C.deep}}>Mars 2026</span><span style={{fontSize:11,color:C.muted,cursor:"pointer"}}>›</span>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(7,28px)",gap:1,textAlign:"center"}}>
            {["Ma","Ti","On","To","Fr","Lø","Sø"].map(d=>(<div key={d} style={{fontSize:8,color:C.muted,fontWeight:600,padding:"3px 0"}}>{d}</div>))}
            {Array.from({length:31},(_,i)=>i+1).map((d)=>{
              const t=d===6;const s=d===15;
              return(<div key={d} style={{width:28,height:28,borderRadius:R.xs,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:t||s?600:400,cursor:"pointer",background:s?C.sage:t?C.sageLight:"transparent",color:s?C.white:t?C.sage:C.deep}}>{d}</div>);
            })}
          </div>
        </div>

        {/* Modal */}
        <Sub>Modal</Sub>
        <button onClick={()=>setModal(true)} style={{background:C.sage,color:C.white,border:"none",borderRadius:R.sm,padding:"9px 18px",fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"'DM Sans',sans-serif",marginBottom:S.lg}}>Åpne modal</button>
        {modal&&<div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.3)",zIndex:100,display:"flex",alignItems:"center",justifyContent:"center"}} onClick={()=>setModal(false)}>
          <div onClick={e=>e.stopPropagation()} style={{background:C.white,borderRadius:R.xl,padding:S.xl,maxWidth:340,width:"90%",boxShadow:"0 16px 48px rgba(0,0,0,0.15)"}}>
            <div style={{fontSize:17,fontWeight:700,color:C.deep,marginBottom:S.sm}}>Si opp abonnement<span style={{color:C.sage}}>?</span></div>
            <div style={{fontSize:12.5,color:"#5A5A5A",lineHeight:1.6,marginBottom:S.lg}}>Du betaler 149 kr/mnd. Ved å si opp sparer du 1 788 kr i året<span style={{color:C.sage}}>.</span></div>
            <div style={{display:"flex",gap:S.sm}}>
              <button onClick={()=>setModal(false)} style={{flex:1,background:C.sage,color:C.white,border:"none",borderRadius:R.sm,padding:"9px",fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Si opp</button>
              <button onClick={()=>setModal(false)} style={{flex:1,background:"transparent",color:C.deep,border:`1.5px solid ${C.border}`,borderRadius:R.sm,padding:"9px",fontSize:12,fontWeight:500,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Avbryt</button>
            </div>
          </div>
        </div>}

        {/* Progress */}
        <Sub>Progress</Sub>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:S.lg}}>
          <div style={{background:C.white,borderRadius:R.md,padding:S.lg,border:`1px solid ${C.border}`}}>
            {[{c:C.sage,w:"68%"},{c:C.sand,w:"45%"},{c:C.terra,w:"100%"}].map((p,i)=>(
              <div key={i} style={{marginBottom:i<2?S.sm:0}}><div style={{height:6,background:`${p.c}20`,borderRadius:3}}><div style={{width:p.w,height:"100%",background:p.c,borderRadius:3}}/></div></div>))}
          </div>
          <div style={{background:C.white,borderRadius:R.md,padding:S.lg,border:`1px solid ${C.border}`}}>
            {[C.sage,C.sand,C.sageDark].map((c,i)=><Cv key={i} width={200} height={14} stroke={c} sw={1.5} style={{marginBottom:i<2?S.sm:0}}/>)}
          </div>
        </div>

        {/* Spinner */}
        <Sub>Innlasting (Spinner)</Sub>
        <div style={{background:C.white,borderRadius:R.md,padding:S.lg,border:`1px solid ${C.border}`,marginBottom:S.sm}}>
          <style>{`@keyframes spRot{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}`}</style>
          <div style={{display:"flex",gap:S.xl,alignItems:"center"}}>
            {[28,40,56].map(sz=>{
              const cx=sz/2,cy=sz/2,r_=sz*0.38,sw_=sz*0.08;
              const circ_=2*Math.PI*r_;
              const gapPx=1.5; // same as Ring3
              const states_=[[1/3,1/3,1/3],[.55,.25,.20],[.22,.55,.23],[.22,.23,.55]];
              const colors_=[C.sand,C.sage,C.sageDark];

              const keyframes=colors_.map((_,i)=>{
                const name=`sp${sz}d${i}`;
                const oName=`sp${sz}o${i}`;
                let dKf="";
                let oKf="";
                // 8 keyframe points: arrive at state, hold, arrive at next, hold...
                // 4 states × (12.5% transition + 12.5% hold) = 100%
                states_.forEach((st,si)=>{
                  const arriveAt=si*25; // arrive at this state
                  const holdUntil=arriveAt+12; // hold for 12% of cycle
                  const d=circ_*st[i];
                  const g=circ_-d;
                  let off=(-circ_*0.25);
                  for(let j=0;j<i;j++) off+=circ_*st[j];
                  const da=`stroke-dasharray:${d-gapPx} ${g+gapPx}`;
                  const dof=`stroke-dashoffset:${-off}`;
                  dKf+=`${arriveAt}%{${da}} ${holdUntil}%{${da}} `;
                  oKf+=`${arriveAt}%{${dof}} ${holdUntil}%{${dof}} `;
                });
                // Close loop
                const d0=circ_*states_[0][i];const g0=circ_-d0;
                let off0=(-circ_*0.25);for(let j=0;j<i;j++)off0+=circ_*states_[0][j];
                dKf+=`100%{stroke-dasharray:${d0-gapPx} ${g0+gapPx}}`;
                oKf+=`100%{stroke-dashoffset:${-off0}}`;
                return {name,oName,dKf,oKf};
              });

              const initials=colors_.map((_,i)=>{
                const d=circ_*states_[0][i];
                const g=circ_-d;
                let off=(-circ_*0.25);
                for(let j=0;j<i;j++) off+=circ_*states_[0][j];
                return {da:`${d-gapPx} ${g+gapPx}`,offset:-off};
              });

              return(
                <div key={sz} style={{textAlign:"center"}}>
                  <style>{keyframes.map(k=>`@keyframes ${k.name}{${k.dKf}} @keyframes ${k.oName}{${k.oKf}}`).join("\n")}</style>
                  <svg width={sz} height={sz} viewBox={`0 0 ${sz} ${sz}`} style={{animation:"spRot 3s linear infinite"}}>
                    {colors_.map((col,i)=>(
                      <circle key={i} cx={cx} cy={cy} r={r_} fill="none" stroke={col}
                        strokeWidth={sw_}
                        strokeDasharray={initials[i].da}
                        strokeDashoffset={initials[i].offset}
                        style={{animation:`${keyframes[i].name} 8s ease-in-out infinite, ${keyframes[i].oName} 8s ease-in-out infinite`}}
                      />
                    ))}
                  </svg>
                  <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:8,color:C.muted,marginTop:4}}>{sz}px</div>
                </div>
              );
            })}
            <div style={{fontSize:12,color:"#5A5A5A",lineHeight:1.6,maxWidth:220}}>
              Sparlett-ringen spinner og morpher mellom stadiene: nøytral → innsikt → sparing → mål. Identisk med ikonet, bare i bevegelse.
            </div>
          </div>
        </div>

        {/* Nav */}
        <Sub>Navigasjon</Sub>
        <div style={{display:"inline-flex",gap:3,background:C.white,borderRadius:R.sm,padding:3,border:`1px solid ${C.border}`,marginBottom:S.md}}>
          {["Oversikt","Innsikt","Mål","Historikk"].map((t,i)=>(
            <div key={t} style={{padding:"5px 12px",borderRadius:R.xs,fontSize:11,fontWeight:i===0?600:400,color:i===0?C.white:C.deep,background:i===0?C.sage:"transparent",cursor:"pointer"}}>{t}</div>))}
        </div>
        <div style={{background:C.white,borderRadius:R.md,padding:"8px 0",border:`1px solid ${C.border}`,display:"flex",justifyContent:"space-around",maxWidth:320,marginBottom:S.lg}}>
          {[
            {l:"Hjem",a:true,c:C.sage,icon:<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>},
            {l:"Innsikt",c:C.sand,icon:<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/></svg>},
            {l:"Mål",c:C.sageDark,icon:<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>},
            {l:"Profil",c:C.muted,icon:<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>},
          ].map(t=>(
            <div key={t.l} style={{textAlign:"center",cursor:"pointer",color:t.a?t.c:`${C.muted}80`}}>
              <div style={{width:20,height:20,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"center"}}>{t.icon}</div>
              <div style={{fontSize:8,color:t.a?t.c:C.muted,fontWeight:t.a?600:400,marginTop:2}}>{t.l}</div>
            </div>))}
        </div>

        {/* Misc */}
        <Sub>Diverse</Sub>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
          {/* Empty state */}
          <div style={{background:C.white,borderRadius:R.md,padding:`${S.xl}px`,border:`1px solid ${C.border}`,textAlign:"center"}}>
            <div style={{fontSize:10,color:C.muted,marginBottom:S.sm}}>Tom tilstand</div>
            <Ring3 size={32} sw={2.5}/>
            <div style={{fontSize:13,fontWeight:600,color:C.deep,marginTop:S.sm}}>Ingen mål ennå<span style={{color:C.sage}}>.</span></div>
            <div style={{fontSize:11,color:C.muted,marginTop:2}}>Vi tar oss av resten<span style={{color:C.sage}}>.</span></div>
          </div>
          {/* Skeleton */}
          <div style={{background:C.white,borderRadius:R.md,padding:S.lg,border:`1px solid ${C.border}`}}>
            <div style={{fontSize:10,color:C.muted,marginBottom:S.sm}}>Skeleton</div>
            <div style={{height:8,width:"40%",background:`${C.muted}18`,borderRadius:4,marginBottom:8}}/>
            <div style={{height:20,width:"60%",background:`${C.muted}12`,borderRadius:4,marginBottom:8}}/>
            <div style={{height:5,width:"80%",background:`${C.muted}0A`,borderRadius:3}}/>
          </div>
          {/* Tooltip */}
          <div style={{background:C.white,borderRadius:R.md,padding:S.lg,border:`1px solid ${C.border}`}}>
            <div style={{fontSize:10,color:C.muted,marginBottom:S.sm}}>Tooltip</div>
            <div style={{position:"relative",display:"inline-block"}}>
              <div style={{background:C.deep,borderRadius:R.xs,padding:"5px 10px",fontSize:10,color:C.canvas}}>47 200 kr spart</div>
              <div style={{width:6,height:6,background:C.deep,transform:"rotate(45deg)",position:"absolute",bottom:-3,left:16}}/>
            </div>
          </div>
          {/* Dividers */}
          <div style={{background:C.white,borderRadius:R.md,padding:S.lg,border:`1px solid ${C.border}`}}>
            <div style={{fontSize:10,color:C.muted,marginBottom:S.sm}}>Skillelinjer</div>
            <div style={{height:1,background:C.border,marginBottom:S.sm}}/>
            <div style={{height:1,background:`${C.sage}30`,marginBottom:S.sm}}/>
            <Cv width={200} height={5} sw={0.8} style={{opacity:0.3}}/>
          </div>
        </div>

        {/* FINANCE COMPONENTS */}
        <Sub>Økonomi-komponenter</Sub>

        {/* Line chart */}
        <div style={{fontSize:12,fontWeight:600,color:C.deep,marginBottom:S.sm}}>Linjegraf — Spareutvikling</div>
        <div style={{background:C.white,borderRadius:R.md,padding:S.lg,border:`1px solid ${C.border}`,marginBottom:S.md}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:S.md}}>
            <div style={{fontSize:10,color:C.muted,fontFamily:"'JetBrains Mono',monospace"}}>SPART OVER TID</div>
            <div style={{display:"flex",gap:3}}>{["1M","3M","6M","1Å"].map((p,i)=>(
              <div key={p} style={{padding:"3px 7px",borderRadius:R.xs,fontSize:8,fontWeight:600,color:i===2?C.white:C.deep,background:i===2?C.sage:"transparent",cursor:"pointer"}}>{p}</div>))}</div>
          </div>
          <svg width="100%" height="100" viewBox="0 0 500 100" preserveAspectRatio="none">
            {[0,1,2,3].map(i=>(<line key={i} x1="0" y1={i*25+10} x2="500" y2={i*25+10} stroke={C.border} strokeWidth="0.5"/>))}
            <path d="M 0 90 Q 60 82 120 70 T 240 50 T 360 32 T 500 15 L 500 100 L 0 100 Z" fill={C.sage} opacity="0.06"/>
            <path d="M 0 90 Q 60 82 120 70 T 240 50 T 360 32 T 500 15" fill="none" stroke={C.sage} strokeWidth="2" strokeLinecap="round"/>
            <circle cx="500" cy="15" r="3.5" fill={C.sage}/><circle cx="500" cy="15" r="6" fill={C.sage} opacity="0.15"/>
          </svg>
          <div style={{display:"flex",justifyContent:"space-between",marginTop:3}}>
            {["Sep","Okt","Nov","Des","Jan","Feb","Mar"].map(m=>(<span key={m} style={{fontSize:7,color:C.muted,fontFamily:"'JetBrains Mono',monospace"}}>{m}</span>))}
          </div>
        </div>

        {/* Donut chart using ring */}
        <div style={{fontSize:12,fontWeight:600,color:C.deep,marginBottom:S.sm}}>Kakediagram (Ring-basert)</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:S.md,marginBottom:S.md}}>
          <div style={{background:C.white,borderRadius:R.md,padding:S.lg,border:`1px solid ${C.border}`,display:"flex",alignItems:"center",gap:S.md}}>
            <div style={{position:"relative"}}><Ring3 size={72} sw={9} state={0}/><div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",fontFamily:"'JetBrains Mono',monospace",fontSize:12,fontWeight:600,color:C.deep}}>100%</div></div>
            <div style={{display:"flex",flexDirection:"column",gap:4}}>
              {[{n:"Innsikt",c:C.sand,v:"33%"},{n:"Sparing",c:C.sage,v:"33%"},{n:"Mål",c:C.sageDark,v:"34%"}].map(s=>(
                <div key={s.n} style={{display:"flex",alignItems:"center",gap:5}}>
                  <div style={{width:7,height:7,borderRadius:2,background:s.c}}/><span style={{fontSize:10,color:C.deep}}>{s.n}</span>
                  <span style={{fontFamily:"'JetBrains Mono',monospace",fontSize:9,color:C.muted,marginLeft:"auto"}}>{s.v}</span></div>))}
            </div>
          </div>
          <div style={{background:C.deep,borderRadius:R.md,padding:S.lg,display:"flex",alignItems:"center",gap:S.md}}>
            <div style={{position:"relative"}}><Ring3 size={72} sw={9} state={1}/><div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",fontFamily:"'JetBrains Mono',monospace",fontSize:12,fontWeight:600,color:C.canvas}}>68%</div></div>
            <div><div style={{fontSize:12,fontWeight:600,color:C.canvas}}>Sommerferie</div><div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:10,color:C.muted,marginTop:2}}>10 200 / 15 000 kr</div></div>
          </div>
        </div>

        {/* Bar chart */}
        <div style={{fontSize:12,fontWeight:600,color:C.deep,marginBottom:S.sm}}>Søylediagram</div>
        <div style={{background:C.white,borderRadius:R.md,padding:S.lg,border:`1px solid ${C.border}`,marginBottom:S.md}}>
          <div style={{display:"flex",alignItems:"flex-end",gap:5,height:80,marginBottom:S.sm}}>
            {[{h:48,a:false},{h:58,a:false},{h:44,a:false},{h:65,a:false},{h:36,a:false},{h:52,a:false},{h:40,a:true}].map((b,i)=>(
              <div key={i} style={{flex:1,height:b.h,background:b.a?C.sage:`${C.sage}25`,borderRadius:`${R.xs}px ${R.xs}px 0 0`}}/>))}
          </div>
          <div style={{display:"flex",gap:5}}>
            {["Sep","Okt","Nov","Des","Jan","Feb","Mar"].map(m=>(<div key={m} style={{flex:1,textAlign:"center",fontSize:7,color:C.muted,fontFamily:"'JetBrains Mono',monospace"}}>{m}</div>))}
          </div>
        </div>

        {/* KPI cards */}
        <div style={{fontSize:12,fontWeight:600,color:C.deep,marginBottom:S.sm}}>KPI / Nøkkeltall</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:6,marginBottom:S.md}}>
          {[{l:"Spart i år",v:"47 200",d:"+12%",c:C.sage},{l:"Forbruk",v:"18 400",d:"-3%",c:C.sage},{l:"Innsikt",v:"3 360",d:"Ny",c:C.sand},{l:"Mål",v:"68%",d:"4 820 igjen",c:C.sageDark}].map(k=>(
            <div key={k.l} style={{background:C.white,borderRadius:R.md,padding:"12px 10px",border:`1px solid ${C.border}`}}>
              <div style={{fontSize:8,color:C.muted,fontFamily:"'JetBrains Mono',monospace",letterSpacing:0.5}}>{k.l.toUpperCase()}</div>
              <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:16,fontWeight:600,color:C.deep,margin:"3px 0 1px"}}>{k.v}</div>
              <div style={{fontSize:8,color:k.c,fontWeight:600}}>{k.d}</div>
            </div>))}
        </div>

        {/* Transaction list */}
        <div style={{fontSize:12,fontWeight:600,color:C.deep,marginBottom:S.sm}}>Transaksjonsliste</div>
        <div style={{background:C.white,borderRadius:R.md,border:`1px solid ${C.border}`,overflow:"hidden",marginBottom:S.md}}>
          {[{cat:"Mat",place:"Rema 1000",amount:"-342 kr",icon:"M",col:C.sage},{cat:"Transport",place:"Ruter",amount:"-899 kr",icon:"T",col:C.sageDark},{cat:"Abonnement",place:"Spotify",amount:"-119 kr",icon:"A",col:C.sand},{cat:"Inntekt",place:"Lønn",amount:"+28 500 kr",icon:"L",col:C.sage,pos:true}].map((tx,i)=>(
            <div key={i} style={{padding:"10px 14px",display:"flex",alignItems:"center",gap:8,borderBottom:i<3?`1px solid ${C.border}`:"none"}}>
              <div style={{width:26,height:26,borderRadius:R.sm,background:`${tx.col}12`,display:"flex",alignItems:"center",justifyContent:"center"}}><span style={{fontSize:10,fontWeight:600,color:tx.col}}>{tx.icon}</span></div>
              <div style={{flex:1}}><div style={{fontSize:12,fontWeight:600,color:C.deep}}>{tx.place}</div><div style={{fontSize:8,color:C.muted}}>{tx.cat}</div></div>
              <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:12,fontWeight:600,color:tx.pos?C.sage:C.deep}}>{tx.amount}</div>
            </div>))}
        </div>

        {/* Budget meter */}
        <div style={{fontSize:12,fontWeight:600,color:C.deep,marginBottom:S.sm}}>Budsjett-meter</div>
        <div style={{background:C.white,borderRadius:R.md,padding:S.lg,border:`1px solid ${C.border}`,marginBottom:S.md}}>
          {[{cat:"Mat",used:3400,total:4000,c:C.sage},{cat:"Transport",used:890,total:1200,c:C.sageDark},{cat:"Underholdning",used:1800,total:1500,c:C.terra}].map((b,i)=>(
            <div key={i} style={{marginBottom:i<2?S.sm:0}}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:3}}>
                <span style={{fontSize:10,color:C.deep}}>{b.cat}</span>
                <span style={{fontFamily:"'JetBrains Mono',monospace",fontSize:9,color:b.used>b.total?C.terra:C.muted}}>{b.used} / {b.total} kr</span>
              </div>
              <div style={{height:5,background:`${b.c}15`,borderRadius:3}}><div style={{width:`${Math.min(100,b.used/b.total*100)}%`,height:"100%",background:b.c,borderRadius:3}}/></div>
            </div>))}
        </div>

        {/* Savings goal */}
        <div style={{fontSize:12,fontWeight:600,color:C.deep,marginBottom:S.sm}}>Sparemål-kort</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:S.md}}>
          {[{name:"Sommerferie",target:15000,saved:10200,c:C.sageDark,st:3},{name:"Nødfond",target:30000,saved:22100,c:C.sage,st:2}].map(g=>(
            <div key={g.name} style={{background:C.white,borderRadius:R.md,padding:S.lg,border:`1px solid ${C.border}`}}>
              <div style={{display:"flex",alignItems:"center",gap:5,marginBottom:S.sm}}><Ring3 size={14} sw={1.4} state={g.st}/><span style={{fontSize:12,fontWeight:600,color:C.deep}}>{g.name}</span></div>
              <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:20,fontWeight:600,color:C.deep}}>{g.saved.toLocaleString("nb")} kr</div>
              <div style={{height:5,background:`${g.c}15`,borderRadius:3,marginTop:S.sm}}><div style={{width:`${g.saved/g.target*100}%`,height:"100%",background:g.c,borderRadius:3}}/></div>
              <div style={{display:"flex",justifyContent:"space-between",marginTop:3}}>
                <span style={{fontFamily:"'JetBrains Mono',monospace",fontSize:8,color:C.muted}}>{Math.round(g.saved/g.target*100)}%</span>
                <span style={{fontFamily:"'JetBrains Mono',monospace",fontSize:8,color:C.muted}}>Mål: {g.target.toLocaleString("nb")} kr</span>
              </div>
            </div>))}
        </div>

        {/* Subscription insight */}
        <div style={{fontSize:12,fontWeight:600,color:C.deep,marginBottom:S.sm}}>Abonnement-innsikt</div>
        <div style={{background:C.sandBg,borderRadius:R.md,padding:S.lg}}>
          <div style={{display:"flex",alignItems:"center",gap:5,marginBottom:S.sm}}><Ring3 size={14} sw={1.4} state={1}/><span style={{fontSize:10,fontWeight:600,color:C.sand}}>Innsikt</span></div>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div><div style={{fontSize:13,fontWeight:600,color:C.deep}}>Spotify</div><div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:10,color:C.muted}}>119 kr/mnd</div></div>
            <div style={{textAlign:"right"}}><div style={{fontSize:10,color:C.sand,fontWeight:600}}>Brukt 2x siste mnd</div><div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:9,color:C.muted}}>1 428 kr/år</div></div>
          </div>
          <Cv width={300} height={5} stroke={C.sand} sw={1} style={{marginTop:S.sm}}/>
        </div>
      </P>}
      {page===8&&<P>
        <H n="09" t="Oppsummering"/>
        <div style={{background:C.white,borderRadius:R.md,padding:"20px 18px",border:`1px solid ${C.border}`}}>
          {[["Konsept","Spar + Lett. Alt blir lettere."],["Visuelt","Ring + Kurve. Koblet via farge."],["Verbalt","Fargesplit + Punktum i sage."],["Ring","3 sektorer: Innsikt (sand), Sparing (sage), Mål (sageDark)."],["Kurve","Bratt → flat. Bakgrunn har fylt areal."],["Innsikt","Sand = smart. Bakgrunnstint + ring-state."],["Farger","Sage, Sand, SageDark, Canvas, Deep + sektorbakgrunner."],["Typografi","DM Sans + JetBrains Mono."],["Ikoner","Lucide Icons. Lightbulb (innsikt), PiggyBank (sparing), Target (mål), Home, User."],["Radius","6 / 8 / 12 / 16 / 20 px."],["Spacing","4 / 8 / 16 / 24 / 32 / 48 px."],["Tone","Varm trygghet. Omsorgsfull, direkte, klar."],["Spinner","Ring-sektorer som jakter hverandre."],["Hovedbrand","Subtil kobling via typografi og filosofi."]
          ].map(([l,v],i)=>(
            <div key={i} style={{display:"grid",gridTemplateColumns:"110px 1fr",padding:"7px 0",borderBottom:i<13?`1px solid ${C.border}`:"none"}}>
              <div style={{fontSize:11,fontWeight:600,color:C.muted}}>{l}</div>
              <div style={{fontSize:12,color:C.deep,lineHeight:1.5}}>{v}</div>
            </div>))}
        </div>
        <div style={{textAlign:"center",marginTop:S.lg,fontFamily:"'JetBrains Mono',monospace",fontSize:9,color:C.muted}}>
          Sparlett Brand Guide v3.2 — Konfidensielt — Marcus Blom
        </div>
      </P>}

      </div>
    </div>
  );
}
