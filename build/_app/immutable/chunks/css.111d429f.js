function k(r){return typeof r=="object"&&r!=null&&!Array.isArray(r)}var I=r=>r==="base";function E(r){return r.slice().filter(o=>!I(o))}var S=/!(important)?$/;function v(r){return typeof r=="string"?S.test(r):!1}function T(r){return typeof r=="string"?r.replace(S,"").trim():r}function y(r){return typeof r=="string"?r.replaceAll(" ","_"):r}function h(r){return String.fromCharCode(r+(r>25?39:97))}function A(r){let o="",t;for(t=Math.abs(r);t>52;t=t/52|0)o=h(t%52)+o;return h(t%52)+o}function P(r,o){let t=o.length;for(;t;)r=r*33^o.charCodeAt(--t);return r}function O(r){return A(P(5381,r)>>>0)}var M=r=>r!=null;function m(r,o,t={}){const{stop:e,getKey:i}=t;function a(n,d=[]){if(k(n)||Array.isArray(n)){const l={};for(const[s,p]of Object.entries(n)){const c=(i==null?void 0:i(s))??s,g=[...d,c];if(e!=null&&e(n,g))return o(n,d);const b=a(p,g);M(b)&&(l[c]=b)}return l}return o(n,d)}return a(r)}function Z(r,o){return k(r)?m(r,t=>o(t)):o(r)}function z(r,o){return r.reduce((t,e,i)=>{const a=o[i];return e!=null&&(t[a]=e),t},{})}function L(r,o){const{utility:t,conditions:e}=o,{hasShorthand:i,resolveShorthand:a}=t;return m(r,n=>Array.isArray(n)?z(n,e.breakpoints.keys):n,{stop:n=>Array.isArray(n),getKey:n=>i?a(n):n})}var W={shift:r=>r,finalize:r=>r,breakpoints:{keys:[]}},j=r=>typeof r=="string"?r.replaceAll(/[\n\s]+/g," "):r;function X(r){const{utility:o,hash:t,conditions:e=W}=r,i=n=>[o.prefix,n].filter(Boolean).join("-"),a=(n,d)=>{let l;if(t){const s=[...e.finalize(n),d];l=i(O(s.join(":")))}else l=[...e.finalize(n),i(d)].join(":");return l};return(n={})=>{const d=L(n,r),l=new Set;return m(d,(s,p)=>{const c=v(s);if(s==null)return;const[g,...b]=e.shift(p),w=E(b),R=o.transform(g,T(j(s)));let u=a(w,R.className);c&&(u=`${u}!`),l.add(u)}),Array.from(l).join(" ")}}var D=r=>{const o=new Map;return(...e)=>{const i=JSON.stringify(e);if(o.has(i))return o.get(i);const a=r(...e);return o.set(i,a),a}},Y=/([A-Z])/g,F=/^ms-/,N=D(r=>r.startsWith("--")?r:r.replace(Y,"-$1").replace(F,"-ms-").toLowerCase());const G="_hover,_focus,_focusWithin,_focusVisible,_disabled,_active,_visited,_target,_readOnly,_readWrite,_empty,_checked,_enabled,_expanded,_highlighted,_before,_after,_firstLetter,_firstLine,_marker,_selection,_file,_backdrop,_first,_last,_only,_even,_odd,_firstOfType,_lastOfType,_onlyOfType,_peerFocus,_peerHover,_peerActive,_peerFocusWithin,_peerFocusVisible,_peerDisabled,_peerChecked,_peerInvalid,_peerExpanded,_peerPlaceholderShown,_groupFocus,_groupHover,_groupActive,_groupFocusWithin,_groupFocusVisible,_groupDisabled,_groupChecked,_groupExpanded,_groupInvalid,_indeterminate,_required,_valid,_invalid,_autofill,_inRange,_outOfRange,_placeholder,_placeholderShown,_pressed,_selected,_default,_optional,_open,_fullscreen,_loading,_currentPage,_currentStep,_motionReduce,_motionSafe,_print,_landscape,_portrait,_dark,_light,_osDark,_osLight,_highContrast,_lessContrast,_moreContrast,_ltr,_rtl,_scrollbar,_scrollbarThumb,_scrollbarTrack,_horizontal,_vertical,sm,smOnly,smDown,md,mdOnly,mdDown,lg,lgOnly,lgDown,xl,xlOnly,xlDown,2xl,2xlOnly,smToMd,smToLg,smToXl,smTo2xl,mdToLg,mdToXl,mdTo2xl,lgToXl,lgTo2xl,xlTo2xl,base",_=new Set(G.split(","));function f(r){return _.has(r)||/^@|&|&$/.test(r)}const H=/^_/,$=/&|@/;function V(r){return r.map(o=>_.has(o)?o.replace(H,""):$.test(o)?`[${y(o.trim())}]`:o)}function K(r){return r.sort((o,t)=>{const e=f(o),i=f(t);return e&&!i?1:!e&&i?-1:0})}const q="aspectRatio:aspect,boxDecorationBreak:decoration,zIndex:z,boxSizing:box,objectPosition:object,objectFit:object,overscrollBehavior:overscroll,overscrollBehaviorX:overscroll-x,overscrollBehaviorY:overscroll-y,position:pos/1,top:top,left:left,insetInline:inset-x,insetBlock:inset-y,inset:inset,insetBlockEnd:inset-b,insetBlockStart:inset-t,insetInlineEnd:end/insetEnd/1,insetInlineStart:start/insetStart/1,right:right,bottom:bottom,insetX:inset-x,insetY:inset-y,float:float,visibility:vis,display:d,hideFrom:hide,hideBelow:show,flexBasis:basis,flex:flex,flexDirection:flex/flexDir,flexGrow:grow,flexShrink:shrink,gridTemplateColumns:grid-cols,gridTemplateRows:grid-rows,gridColumn:col-span,gridRow:row-span,gridColumnStart:col-start,gridColumnEnd:col-end,gridAutoFlow:grid-flow,gridAutoColumns:auto-cols,gridAutoRows:auto-rows,gap:gap,gridGap:gap,gridRowGap:gap-x,gridColumnGap:gap-y,rowGap:gap-x,columnGap:gap-y,justifyContent:justify,alignContent:content,alignItems:items,alignSelf:self,padding:p/1,paddingLeft:pl/1,paddingRight:pr/1,paddingTop:pt/1,paddingBottom:pb/1,paddingBlock:py/1/paddingY,paddingBlockEnd:pb,paddingBlockStart:pt,paddingInline:px/paddingX/1,paddingInlineEnd:pe/1/paddingEnd,paddingInlineStart:ps/1/paddingStart,marginLeft:ml/1,marginRight:mr/1,marginTop:mt/1,marginBottom:mb/1,margin:m/1,marginBlock:my/1/marginY,marginBlockEnd:mb,marginBlockStart:mt,marginInline:mx/1/marginX,marginInlineEnd:me/1/marginEnd,marginInlineStart:ms/1/marginStart,outlineWidth:ring/ringWidth,outlineColor:ring/ringColor,outline:ring/1,outlineOffset:ring/ringOffset,divideX:divide-x,divideY:divide-y,divideColor:divide,divideStyle:divide,width:w/1,inlineSize:w,minWidth:min-w/minW,minInlineSize:min-w,maxWidth:max-w/maxW,maxInlineSize:max-w,height:h/1,blockSize:h,minHeight:min-h/minH,minBlockSize:min-h,maxHeight:max-h/maxH,maxBlockSize:max-b,color:text,fontFamily:font,fontSize:fs,fontWeight:font,fontSmoothing:smoothing,fontVariantNumeric:numeric,letterSpacing:tracking,lineHeight:leading,textAlign:text,textDecoration:text-decor,textDecorationColor:text-decor,textEmphasisColor:text-emphasis,textDecorationStyle:decoration,textDecorationThickness:decoration,textUnderlineOffset:underline-offset,textTransform:text,textIndent:indent,textShadow:text-shadow,textOverflow:text,verticalAlign:align,wordBreak:break,textWrap:text,truncate:truncate,lineClamp:clamp,listStyleType:list,listStylePosition:list,listStyleImage:list-img,backgroundPosition:bg/bgPosition,backgroundPositionX:bg-x/bgPositionX,backgroundPositionY:bg-y/bgPositionY,backgroundAttachment:bg/bgAttachment,backgroundClip:bg-clip/bgClip,background:bg/1,backgroundColor:bg/bgColor,backgroundOrigin:bg-origin/bgOrigin,backgroundImage:bg-img/bgImage,backgroundRepeat:bg-repeat/bgRepeat,backgroundBlendMode:bg-blend/bgBlendMode,backgroundSize:bg/bgSize,backgroundGradient:bg-gradient/bgGradient,textGradient:text-gradient,gradientFrom:from,gradientTo:to,gradientVia:via,borderRadius:rounded/1,borderTopLeftRadius:rounded-tl/roundedTopLeft,borderTopRightRadius:rounded-tr/roundedTopRight,borderBottomRightRadius:rounded-br/roundedBottomRight,borderBottomLeftRadius:rounded-bl/roundedBottomLeft,borderTopRadius:rounded-t/roundedTop,borderRightRadius:rounded-r/roundedRight,borderBottomRadius:rounded-b/roundedBottom,borderLeftRadius:rounded-l/roundedLeft,borderStartStartRadius:rounded-ss/roundedStartStart,borderStartEndRadius:rounded-se/roundedStartEnd,borderStartRadius:rounded-s/roundedStart,borderEndStartRadius:rounded-es/roundedEndStart,borderEndEndRadius:rounded-ee/roundedEndEnd,borderEndRadius:rounded-e/roundedEnd,border:border,borderColor:border,borderInline:border-x/borderX,borderInlineWidth:border-x/borderXWidth,borderInlineColor:border-x/borderXColor,borderBlock:border-y/borderY,borderBlockWidth:border-y/borderYWidth,borderBlockColor:border-y/borderYColor,borderLeft:border-l,borderLeftColor:border-l,borderInlineStart:border-s/borderStart,borderInlineStartWidth:border-s/borderStartWidth,borderInlineStartColor:border-s/borderStartColor,borderRight:border-r,borderRightColor:border-r,borderInlineEnd:border-e/borderEnd,borderInlineEndWidth:border-e/borderEndWidth,borderInlineEndColor:border-e/borderEndColor,borderTop:border-t,borderTopColor:border-t,borderBottom:border-b,borderBottomColor:border-b,borderBlockEnd:border-be,borderBlockEndColor:border-be,borderBlockStart:border-bs,borderBlockStartColor:border-bs,boxShadow:shadow/1,boxShadowColor:shadow/shadowColor,mixBlendMode:mix-blend,filter:filter,brightness:brightness,contrast:contrast,grayscale:grayscale,hueRotate:hue-rotate,invert:invert,saturate:saturate,sepia:sepia,dropShadow:drop-shadow,blur:blur,backdropFilter:backdrop,backdropBlur:backdrop-blur,backdropBrightness:backdrop-brightness,backdropContrast:backdrop-contrast,backdropGrayscale:backdrop-grayscale,backdropHueRotate:backdrop-hue-rotate,backdropInvert:backdrop-invert,backdropOpacity:backdrop-opacity,backdropSaturate:backdrop-saturate,backdropSepia:backdrop-sepia,borderCollapse:border,borderSpacing:border-spacing,borderSpacingX:border-spacing-x,borderSpacingY:border-spacing-y,tableLayout:table,transitionTimingFunction:ease,transitionDelay:delay,transitionDuration:duration,transitionProperty:transition-prop,transition:transition,animation:animation,animationDelay:animation-delay,transformOrigin:origin,scale:scale,scaleX:scale-x,scaleY:scale-y,translate:translate,translateX:translate-x/x,translateY:translate-y/y,accentColor:accent,caretColor:caret,scrollBehavior:scroll,scrollbar:scrollbar,scrollMargin:scroll-m,scrollMarginX:scroll-mx,scrollMarginY:scroll-my,scrollMarginLeft:scroll-ml,scrollMarginRight:scroll-mr,scrollMarginTop:scroll-mt,scrollMarginBottom:scroll-mb,scrollMarginBlock:scroll-my,scrollMarginBlockEnd:scroll-mb,scrollMarginBlockStart:scroll-mt,scrollMarginInline:scroll-mx,scrollMarginInlineEnd:scroll-me,scrollMarginInlineStart:scroll-ms,scrollPadding:scroll-p,scrollPaddingBlock:scroll-pb,scrollPaddingBlockStart:scroll-pt,scrollPaddingBlockEnd:scroll-pb,scrollPaddingInline:scroll-px,scrollPaddingInlineEnd:scroll-pe,scrollPaddingInlineStart:scroll-ps,scrollPaddingX:scroll-px,scrollPaddingY:scroll-py,scrollPaddingLeft:scroll-pl,scrollPaddingRight:scroll-pr,scrollPaddingTop:scroll-pt,scrollPaddingBottom:scroll-pb,scrollSnapAlign:snap,scrollSnapStop:snap,scrollSnapType:snap,scrollSnapStrictness:strictness,scrollSnapMargin:snap-m,scrollSnapMarginTop:snap-mt,scrollSnapMarginBottom:snap-mb,scrollSnapMarginLeft:snap-ml,scrollSnapMarginRight:snap-mr,touchAction:touch,userSelect:select,fill:fill,stroke:stroke,srOnly:sr,debug:debug,appearance:appearance,backfaceVisibility:backface,clipPath:clip-path,hyphens:hyphens,mask:mask,maskImage:mask-image,maskSize:mask-size,textSizeAdjust:text-size-adjust,textStyle:textStyle",C=new Map,B=new Map;q.split(",").forEach(r=>{const[o,t]=r.split(":"),[e,...i]=t.split("/");C.set(o,e),i.length&&i.forEach(a=>{B.set(a==="1"?e:a,o)})});const x=r=>B.get(r)||r,J={conditions:{shift:K,finalize:V,breakpoints:{keys:["base","sm","md","lg","xl","2xl"]}},utility:{transform:(r,o)=>{const t=x(r);return{className:`${C.get(t)||N(t)}_${y(o)}`}},hasShorthand:!0,resolveShorthand:x}},U=X(J);U.raw=r=>r;export{U as c,Z as m};