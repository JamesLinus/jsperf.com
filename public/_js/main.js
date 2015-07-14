/*! jsbeautifier.org © Einar Lielmanis */
(function(){function a(d,c){var e=new b(d,c);return e.beautify()}function b(K,N){var at,p;var w,d,l,ak,aa;var r,X,j;var B,M,ah,c,L,ab;var Z;var u;var h,W;var al,H,P;var f,m,Y;var F="";B="\n\r\t ".split("");M="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_$".split("");ab="0123456789".split("");ah="+ - * / % & ++ -- = += -= *= /= %= == === != !== > < >= <= >> << >>> >>>= >>= <<= && &= | || ! !! , : ? ^ ^= |= ::";ah+=" <%= <% %> <?= <? ?>";ah=ah.split(" ");L="continue,try,throw,return,var,if,switch,case,default,for,while,break,function".split(",");m={BlockStatement:"BlockStatement",Statement:"Statement",ObjectLiteral:"ObjectLiteral",ArrayLiteral:"ArrayLiteral",ForInitializer:"ForInitializer",Conditional:"Conditional",Expression:"Expression"};f={TK_START_EXPR:ae,TK_END_EXPR:q,TK_START_BLOCK:V,TK_END_BLOCK:e,TK_WORD:af,TK_SEMICOLON:D,TK_STRING:U,TK_EQUALS:S,TK_OPERATOR:z,TK_COMMA:g,TK_BLOCK_COMMENT:A,TK_INLINE_COMMENT:I,TK_COMMENT:T,TK_DOT:J,TK_UNKNOWN:am};function ad(az,aA){var ax=0;if(az){ax=az.indentation_level;ax+=(az.var_line&&az.var_line_reindented)?1:0;if(!s()&&az.line_indent_level>ax){ax=az.line_indent_level}}var ay={mode:aA,parent:az,last_text:az?az.last_text:"",last_word:az?az.last_word:"",var_line:false,var_line_tainted:false,var_line_reindented:false,in_html_comment:false,multiline_frame:false,if_block:false,do_block:false,do_while:false,in_case_statement:false,in_case:false,case_body:false,indentation_level:ax,line_indent_level:az?az.line_indent_level:ax,start_line_index:p.length,ternary_depth:0};return ay}function ac(){return{text:[]}}N=N?N:{};Y={};if(N.space_after_anon_function!==undefined&&N.jslint_happy===undefined){N.jslint_happy=N.space_after_anon_function}if(N.braces_on_own_line!==undefined){Y.brace_style=N.braces_on_own_line?"expand":"collapse"}Y.brace_style=N.brace_style?N.brace_style:(Y.brace_style?Y.brace_style:"collapse");if(Y.brace_style==="expand-strict"){Y.brace_style="expand"}Y.indent_size=N.indent_size?parseInt(N.indent_size,10):4;Y.indent_char=N.indent_char?N.indent_char:" ";Y.preserve_newlines=(N.preserve_newlines===undefined)?true:N.preserve_newlines;Y.break_chained_methods=(N.break_chained_methods===undefined)?false:N.break_chained_methods;Y.max_preserve_newlines=(N.max_preserve_newlines===undefined)?0:parseInt(N.max_preserve_newlines,10);Y.space_in_paren=(N.space_in_paren===undefined)?false:N.space_in_paren;Y.jslint_happy=(N.jslint_happy===undefined)?false:N.jslint_happy;Y.keep_array_indentation=(N.keep_array_indentation===undefined)?false:N.keep_array_indentation;Y.space_before_conditional=(N.space_before_conditional===undefined)?true:N.space_before_conditional;Y.unescape_strings=(N.unescape_strings===undefined)?false:N.unescape_strings;Y.wrap_line_length=(N.wrap_line_length===undefined)?0:parseInt(N.wrap_line_length,10);Y.e4x=(N.e4x===undefined)?false:N.e4x;aa="";while(Y.indent_size>0){aa+=Y.indent_char;Y.indent_size-=1}while(K&&(K.charAt(0)===" "||K.charAt(0)==="\t")){F+=K.charAt(0);K=K.substring(1)}at=K;al=K.length;l="TK_START_BLOCK";ak="";p=[ac()];h=false;W=false;P=[];j=[];G(m.BlockStatement);c=0;this.beautify=function(){var az,ay,ax,aB;while(true){az=i();w=az[0];d=az[1];if(d==="TK_EOF"){break}ax=Y.keep_array_indentation&&av(r.mode);u=H>0;if(ax){for(ay=0;ay<H;ay+=1){ag(ay>0)}}else{if(Y.max_preserve_newlines&&H>Y.max_preserve_newlines){H=Y.max_preserve_newlines}if(Y.preserve_newlines){if(H>1){ag();for(ay=1;ay<H;ay+=1){ag(true)}}}}f[d]();if(d!=="TK_INLINE_COMMENT"&&d!=="TK_COMMENT"&&d!=="TK_UNKNOWN"){ak=r.last_text;l=d;r.last_text=w}}aB=p[0].text.join("");for(var aA=1;aA<p.length;aA++){aB+="\n"+p[aA].text.join("")}aB=aB.replace(/[\r\n ]+$/,"");return aB};function E(ax){ax=(ax===undefined)?false:ax;if(p.length){an(p[p.length-1],ax);while(ax&&p.length>1&&p[p.length-1].text.length===0){p.pop();an(p[p.length-1],ax)}}}function an(ax){while(ax.text.length&&(ax.text[ax.text.length-1]===" "||ax.text[ax.text.length-1]===aa||ax.text[ax.text.length-1]===F)){ax.text.pop()}}function aj(ax){return ax.replace(/^\s+|\s+$/g,"")}function ao(az){az=az.replace(/\x0d/g,"");var ay=[],ax=az.indexOf("\n");while(ax!==-1){ay.push(az.substring(0,ax));az=az.substring(ax+1);ax=az.indexOf("\n")}if(az.length){ay.push(az)}return ay}function s(){var ax=p[p.length-1];return ax.text.length===0}function R(){if(s()){if(p.length===1){return true}var ax=p[p.length-2];return ax.text.length===0}return false}function o(az){az=(az===undefined)?false:az;if(Y.wrap_line_length&&!az){var ax=p[p.length-1];var ay=0;if(ax.text.length>0){ay=ax.text.join("").length+w.length+(W?1:0);if(ay>=Y.wrap_line_length){az=true}}}if(((Y.preserve_newlines&&u)||az)&&!s()){ag(false,true);if(!(av(r.mode)||n(r.mode))){h=true}}}function ag(ax,ay){h=false;W=false;if(!ay){if(r.last_text!==";"){while(r.mode===m.Statement&&!r.if_block&&!r.do_block){x()}}}if(p.length===1&&s()){return}if(ax||!s()){r.multiline_frame=true;p.push(ac())}}function t(){if(s()){var ax=p[p.length-1];if(Y.keep_array_indentation&&av(r.mode)&&u){ax.text.push("");for(var ay=0;ay<P.length;ay+=1){ax.text.push(P[ay])}}else{if(F){ax.text.push(F)}au(r.indentation_level+(r.var_line&&r.var_line_reindented?1:0)+(h?1:0))}}}function au(az){if(p.length>1){var ax=p[p.length-1];r.line_indent_level=az;for(var ay=0;ay<az;ay+=1){ax.text.push(aa)}}}function aq(){var ax=p[p.length-1];if(W&&ax.text.length){var ay=ax.text[ax.text.length-1];if(ay!==" "&&ay!==aa){ax.text.push(" ")}}}function ai(ax){ax=ax||w;t();h=false;aq();W=false;p[p.length-1].text.push(ax)}function Q(){r.indentation_level+=1}function v(){if(r.indentation_level>0&&((!r.parent)||r.indentation_level>r.parent.indentation_level)){r.indentation_level-=1}}function k(aA){if(aA.multiline_frame){return}var ay=aA.start_line_index;var az=0;var ax;while(ay<p.length){ax=p[ay];ay++;if(ax.text.length===0){continue}if(F&&ax.text[0]===F){az=1}else{az=0}if(ax.text[az]===aa){ax.text.splice(az,1)}}}function G(ax){if(r){j.push(r);X=r}else{X=ad(null,ax)}r=ad(X,ax)}function av(ax){return ax===m.ArrayLiteral}function n(ax){return aw(ax,[m.Expression,m.ForInitializer,m.Conditional])}function x(){if(j.length>0){X=r;r=j.pop()}}function C(){if((r.last_text==="do"||(r.last_text==="else"&&w!=="if")||(l==="TK_END_EXPR"&&(X.mode===m.ForInitializer||X.mode===m.Conditional)))){o(aw(w,["do","for","if","while"]));G(m.Statement);if(s()){Q();h=false}return true}return false}function O(ay,aA){for(var az=0;az<ay.length;az++){var ax=aj(ay[az]);if(ax.charAt(0)!==aA){return false}}return true}function y(ax){return aw(ax,["case","return","do","if","throw","else"])}function aw(az,ax){for(var ay=0;ay<ax.length;ay+=1){if(ax[ay]===az){return true}}return false}function ap(aA){var ax=false,ay="",aD=0,az="",aB=0,aC;while(ax||aD<aA.length){aC=aA.charAt(aD);aD++;if(ax){ax=false;if(aC==="x"){az=aA.substr(aD,2);aD+=2}else{if(aC==="u"){az=aA.substr(aD,4);aD+=4}else{ay+="\\"+aC;continue}}if(!az.match(/^[0123456789abcdefABCDEF]+$/)){return aA}aB=parseInt(az,16);if(aB>=0&&aB<32){if(aC==="x"){ay+="\\x"+az}else{ay+="\\u"+az}continue}else{if(aB===34||aB===39||aB===92){ay+="\\"+String.fromCharCode(aB)}else{if(aC==="x"&&aB>126&&aB<=255){return aA}else{ay+=String.fromCharCode(aB)}}}}else{if(aC==="\\"){ax=true}else{ay+=aC}}}return ay}function ar(ay){var ax=c;var az=at.charAt(ax);while(aw(az,B)&&az!==ay){ax++;if(ax>=al){return false}az=at.charAt(ax)}return az===ay}function i(){var aJ,aI;H=0;if(c>=al){return["","TK_EOF"]}u=false;P=[];var aO=at.charAt(c);c+=1;while(aw(aO,B)){if(aO==="\n"){H+=1;P=[]}else{if(H){if(aO===aa){P.push(aa)}else{if(aO!=="\r"){P.push(" ")}}}}if(c>=al){return["","TK_EOF"]}aO=at.charAt(c);c+=1}if(aw(aO,M)){if(c<al){while(aw(at.charAt(c),M)){aO+=at.charAt(c);c+=1;if(c===al){break}}}if(c!==al&&aO.match(/^[0-9]+[Ee]$/)&&(at.charAt(c)==="-"||at.charAt(c)==="+")){var aQ=at.charAt(c);c+=1;var aF=i();aO+=aQ+aF[0];return[aO,"TK_WORD"]}if(aO==="in"){return[aO,"TK_OPERATOR"]}return[aO,"TK_WORD"]}if(aO==="("||aO==="["){return[aO,"TK_START_EXPR"]}if(aO===")"||aO==="]"){return[aO,"TK_END_EXPR"]}if(aO==="{"){return[aO,"TK_START_BLOCK"]}if(aO==="}"){return[aO,"TK_END_BLOCK"]}if(aO===";"){return[aO,"TK_SEMICOLON"]}if(aO==="/"){var ay="";var aG=true;if(at.charAt(c)==="*"){c+=1;if(c<al){while(c<al&&!(at.charAt(c)==="*"&&at.charAt(c+1)&&at.charAt(c+1)==="/")){aO=at.charAt(c);ay+=aO;if(aO==="\n"||aO==="\r"){aG=false}c+=1;if(c>=al){break}}}c+=2;if(aG&&H===0){return["/*"+ay+"*/","TK_INLINE_COMMENT"]}else{return["/*"+ay+"*/","TK_BLOCK_COMMENT"]}}if(at.charAt(c)==="/"){ay=aO;while(at.charAt(c)!=="\r"&&at.charAt(c)!=="\n"){ay+=at.charAt(c);c+=1;if(c>=al){break}}return[ay,"TK_COMMENT"]}}if(aO==="'"||aO==='"'||((aO==="/")||(Y.e4x&&aO==="<"&&at.slice(c-1).match(/^<([-a-zA-Z:0-9_.]+|{[^{}]*}|!\[CDATA\[[\s\S]*?\]\])\s*([-a-zA-Z:0-9_.]+=('[^']*'|"[^"]*"|{[^{}]*})\s*)*\/?\s*>/)))&&((l==="TK_WORD"&&y(r.last_text))||(l==="TK_END_EXPR"&&aw(X.mode,[m.Conditional,m.ForInitializer]))||(aw(l,["TK_COMMENT","TK_START_EXPR","TK_START_BLOCK","TK_END_BLOCK","TK_OPERATOR","TK_EQUALS","TK_EOF","TK_SEMICOLON","TK_COMMA"])))){var aH=aO,aP=false,aA=false;aI=aO;if(c<al){if(aH==="/"){var aB=false;while(aP||aB||at.charAt(c)!==aH){aI+=at.charAt(c);if(!aP){aP=at.charAt(c)==="\\";if(at.charAt(c)==="["){aB=true}else{if(at.charAt(c)==="]"){aB=false}}}else{aP=false}c+=1;if(c>=al){return[aI,"TK_STRING"]}}}else{if(Y.e4x&&aH==="<"){var aN=/<(\/?)([-a-zA-Z:0-9_.]+|{[^{}]*}|!\[CDATA\[[\s\S]*?\]\])\s*([-a-zA-Z:0-9_.]+=('[^']*'|"[^"]*"|{[^{}]*})\s*)*(\/?)\s*>/g;var az=at.slice(c-1);var aD=aN.exec(az);if(aD&&aD.index===0){var aL=aD[2];var aR=0;while(aD){var aM=!!aD[1];var aC=aD[2];var ax=(!!aD[aD.length-1])||(aC.slice(0,8)==="![CDATA[");if(aC===aL&&!ax){if(aM){--aR}else{++aR}}if(aR<=0){break}aD=aN.exec(az)}var aK=aD?aD.index+aD[0].length:az.length;c+=aK-1;return[az.slice(0,aK),"TK_STRING"]}}else{while(aP||at.charAt(c)!==aH){aI+=at.charAt(c);if(aP){if(at.charAt(c)==="x"||at.charAt(c)==="u"){aA=true}aP=false}else{aP=at.charAt(c)==="\\"}c+=1;if(c>=al){return[aI,"TK_STRING"]}}}}}c+=1;aI+=aH;if(aA&&Y.unescape_strings){aI=ap(aI)}if(aH==="/"){while(c<al&&aw(at.charAt(c),M)){aI+=at.charAt(c);c+=1}}return[aI,"TK_STRING"]}if(aO==="#"){if(p.length===1&&p[0].text.length===0&&at.charAt(c)==="!"){aI=aO;while(c<al&&aO!=="\n"){aO=at.charAt(c);aI+=aO;c+=1}return[aj(aI)+"\n","TK_UNKNOWN"]}var aE="#";if(c<al&&aw(at.charAt(c),ab)){do{aO=at.charAt(c);aE+=aO;c+=1}while(c<al&&aO!=="#"&&aO!=="=");if(aO==="#"){}else{if(at.charAt(c)==="["&&at.charAt(c+1)==="]"){aE+="[]";c+=2}else{if(at.charAt(c)==="{"&&at.charAt(c+1)==="}"){aE+="{}";c+=2}}}return[aE,"TK_WORD"]}}if(aO==="<"&&at.substring(c-1,c+3)==="<!--"){c+=3;aO="<!--";while(at.charAt(c)!=="\n"&&c<al){aO+=at.charAt(c);c++}r.in_html_comment=true;return[aO,"TK_COMMENT"]}if(aO==="-"&&r.in_html_comment&&at.substring(c-1,c+2)==="-->"){r.in_html_comment=false;c+=2;return["-->","TK_COMMENT"]}if(aO==="."){return[aO,"TK_DOT"]}if(aw(aO,ah)){while(c<al&&aw(aO+at.charAt(c),ah)){aO+=at.charAt(c);c+=1;if(c>=al){break}}if(aO===","){return[aO,"TK_COMMA"]}else{if(aO==="="){return[aO,"TK_EQUALS"]}else{return[aO,"TK_OPERATOR"]}}}return[aO,"TK_UNKNOWN"]}function ae(){if(C()){}var ax=m.Expression;if(w==="["){if(l==="TK_WORD"||r.last_text===")"){if(aw(r.last_text,L)){W=true}G(ax);ai();Q();if(Y.space_in_paren){W=true}return}ax=m.ArrayLiteral;if(av(r.mode)){if(r.last_text==="["||(r.last_text===","&&(ak==="]"||ak==="}"))){if(!Y.keep_array_indentation){ag()}}}}else{if(r.last_text==="for"){ax=m.ForInitializer}else{if(aw(r.last_text,["if","while"])){ax=m.Conditional}else{}}}if(r.last_text===";"||l==="TK_START_BLOCK"){ag()}else{if(l==="TK_END_EXPR"||l==="TK_START_EXPR"||l==="TK_END_BLOCK"||r.last_text==="."){o(u);h=false}else{if(l!=="TK_WORD"&&l!=="TK_OPERATOR"){W=true}else{if(r.last_word==="function"||r.last_word==="typeof"){if(Y.jslint_happy){W=true}}else{if(aw(r.last_text,L)||r.last_text==="catch"){if(Y.space_before_conditional){W=true}}}}}}if(w==="("){if(l==="TK_EQUALS"||l==="TK_OPERATOR"){if(r.mode!==m.ObjectLiteral){o()}}}G(ax);ai();if(Y.space_in_paren){W=true}Q()}function q(){while(r.mode===m.Statement){x()}if(w==="]"&&av(r.mode)&&r.multiline_frame&&!Y.keep_array_indentation){ag()}if(r.multiline_frame){o()}if(Y.space_in_paren){W=true}if(w==="]"&&Y.keep_array_indentation){ai();x()}else{x();ai()}k(X);if(r.do_while&&X.mode===m.Conditional){X.mode=m.Expression;r.do_block=false;r.do_while=false}}function V(){G(m.BlockStatement);var ay=ar("}");var ax=ay&&r.last_word==="function"&&l==="TK_END_EXPR";if(Y.brace_style==="expand"){if(l!=="TK_OPERATOR"&&(ax||l==="TK_EQUALS"||(y(r.last_text)&&r.last_text!=="else"))){W=true}else{ag()}}else{if(l!=="TK_OPERATOR"&&l!=="TK_START_EXPR"){if(l==="TK_START_BLOCK"){ag()}else{W=true}}else{if(av(X.mode)&&r.last_text===","){if(ak==="}"){W=true}else{ag()}}}}ai();Q()}function e(){while(r.mode===m.Statement){x()}var ax=l==="TK_START_BLOCK";if(Y.brace_style==="expand"){if(!ax){ag()}}else{if(!ax){if(av(r.mode)&&Y.keep_array_indentation){Y.keep_array_indentation=false;ag();Y.keep_array_indentation=true}else{ag()}}}x();ai()}function af(){if(C()){}else{if(u&&!n(r.mode)&&(l!=="TK_OPERATOR"||(r.last_text==="--"||r.last_text==="++"))&&l!=="TK_EQUALS"&&(Y.preserve_newlines||r.last_text!=="var")){ag()}}if(r.do_block&&!r.do_while){if(w==="while"){W=true;ai();W=true;r.do_while=true;return}else{ag();r.do_block=false}}if(r.if_block){if(w!=="else"){while(r.mode===m.Statement){x()}r.if_block=false}}if(w==="case"||(w==="default"&&r.in_case_statement)){ag();if(r.case_body||Y.jslint_happy){v();r.case_body=false}ai();r.in_case=true;r.in_case_statement=true;return}if(w==="function"){if(r.var_line&&l!=="TK_EQUALS"){r.var_line_reindented=true}if((s()||r.last_text===";"||r.last_text==="}")&&r.last_text!=="{"&&!av(r.mode)){if(!R()){ag();ag(true)}}if(l==="TK_WORD"){if(r.last_text==="get"||r.last_text==="set"||r.last_text==="new"||r.last_text==="return"){W=true}else{ag()}}else{if(l==="TK_OPERATOR"||r.last_text==="="){W=true}else{if(n(r.mode)){}else{ag()}}}}if(l==="TK_COMMA"||l==="TK_START_EXPR"||l==="TK_EQUALS"||l==="TK_OPERATOR"){if(r.mode!==m.ObjectLiteral){o()}}if(w==="function"){ai();r.last_word=w;return}Z="NONE";if(l==="TK_END_BLOCK"){if(!aw(w,["else","catch","finally"])){Z="NEWLINE"}else{if(Y.brace_style==="expand"||Y.brace_style==="end-expand"){Z="NEWLINE"}else{Z="SPACE";W=true}}}else{if(l==="TK_SEMICOLON"&&r.mode===m.BlockStatement){Z="NEWLINE"}else{if(l==="TK_SEMICOLON"&&n(r.mode)){Z="SPACE"}else{if(l==="TK_STRING"){Z="NEWLINE"}else{if(l==="TK_WORD"){Z="SPACE"}else{if(l==="TK_START_BLOCK"){Z="NEWLINE"}else{if(l==="TK_END_EXPR"){W=true;Z="NEWLINE"}}}}}}}if(aw(w,L)&&r.last_text!==")"){if(r.last_text==="else"){Z="SPACE"}else{Z="NEWLINE"}}if(aw(w,["else","catch","finally"])){if(l!=="TK_END_BLOCK"||Y.brace_style==="expand"||Y.brace_style==="end-expand"){ag()}else{E(true);var ax=p[p.length-1];if(ax.text[ax.text.length-1]!=="}"){ag()}W=true}}else{if(Z==="NEWLINE"){if(y(r.last_text)){W=true}else{if(l!=="TK_END_EXPR"){if((l!=="TK_START_EXPR"||w!=="var")&&r.last_text!==":"){if(w==="if"&&r.last_word==="else"&&r.last_text!=="{"){W=true}else{r.var_line=false;r.var_line_reindented=false;ag()}}}else{if(aw(w,L)&&r.last_text!==")"){r.var_line=false;r.var_line_reindented=false;ag()}}}}else{if(av(r.mode)&&r.last_text===","&&ak==="}"){ag()}else{if(Z==="SPACE"){W=true}}}}ai();r.last_word=w;if(w==="var"){r.var_line=true;r.var_line_reindented=false;r.var_line_tainted=false}if(w==="do"){r.do_block=true}if(w==="if"){r.if_block=true}}function D(){if(C()){W=false}while(r.mode===m.Statement&&!r.if_block&&!r.do_block){x()}ai();r.var_line=false;r.var_line_reindented=false;if(r.mode===m.ObjectLiteral){r.mode=m.BlockStatement}}function U(){if(C()){W=true}else{if(l==="TK_WORD"){W=true}else{if(l==="TK_COMMA"||l==="TK_START_EXPR"||l==="TK_EQUALS"||l==="TK_OPERATOR"){if(r.mode!==m.ObjectLiteral){o()}}else{ag()}}}ai()}function S(){if(r.var_line){r.var_line_tainted=true}W=true;ai();W=true}function g(){if(r.var_line){if(n(r.mode)||l==="TK_END_BLOCK"){r.var_line_tainted=false}if(r.var_line){r.var_line_reindented=true}ai();if(r.var_line_tainted){r.var_line_tainted=false;ag()}else{W=true}return}if(l==="TK_END_BLOCK"&&r.mode!==m.Expression){ai();if(r.mode===m.ObjectLiteral&&r.last_text==="}"){ag()}else{W=true}}else{if(r.mode===m.ObjectLiteral){ai();ag()}else{ai();W=true}}}function z(){var ay=true;var ax=true;if(y(r.last_text)){W=true;ai();return}if(w==="*"&&l==="TK_DOT"&&!ak.match(/^\d+$/)){ai();return}if(w===":"&&r.in_case){r.case_body=true;Q();ai();ag();r.in_case=false;return}if(w==="::"){ai();return}if(u&&(w==="--"||w==="++")){ag()}if(aw(w,["--","++","!"])||(aw(w,["-","+"])&&(aw(l,["TK_START_BLOCK","TK_START_EXPR","TK_EQUALS","TK_OPERATOR"])||aw(r.last_text,L)||r.last_text===","))){ay=false;ax=false;if(r.last_text===";"&&n(r.mode)){ay=true}if(l==="TK_WORD"&&aw(r.last_text,L)){ay=true}if((r.mode===m.BlockStatement||r.mode===m.Statement)&&(r.last_text==="{"||r.last_text===";")){ag()}}else{if(w===":"){if(r.ternary_depth===0){if(r.mode===m.BlockStatement){r.mode=m.ObjectLiteral}ay=false}else{r.ternary_depth-=1}}else{if(w==="?"){r.ternary_depth+=1}}}W=W||ay;ai();W=ax}function A(){var ax=ao(w);var az;var ay=false;ag(false,true);if(ax.length>1){if(O(ax.slice(1),"*")){ay=true}}ai(ax[0]);for(az=1;az<ax.length;az++){ag(false,true);if(ay){ai(" "+aj(ax[az]))}else{p[p.length-1].text.push(ax[az])}}ag(false,true)}function I(){W=true;ai();W=true}function T(){if(u){ag(false,true)}else{E(true)}W=true;ai();ag(false,true)}function J(){if(y(r.last_text)){W=true}else{o(r.last_text===")"&&Y.break_chained_methods)}ai()}function am(){ai();if(w[w.length-1]==="\n"){ag()}}}if(typeof define==="function"){if(typeof define.amd==="undefined"){define(function(d,c,e){c.js_beautify=a})}else{define([],function(){return a})}}else{if(typeof exports!=="undefined"){exports.js_beautify=a}else{if(typeof window!=="undefined"){window.js_beautify=a}else{if(typeof global!=="undefined"){global.js_beautify=a}}}}}());$.fn.input=function(a){var b=this;if(!a){return b.trigger("keydown.input")}return b.bind({"input.input":function(c){b.unbind("keydown.input");a.call(this,c)},"keydown.input":function(c){a.call(this,c)}})};$.fn.insertAtCaret=function(a){return this.each(function(){var d=this;if(document.selection){d.focus();sel=document.selection.createRange();sel.text=a;d.focus()}else{if(d.selectionStart||d.selectionStart==0){var c=d.selectionStart,b=d.selectionEnd,e=d.scrollTop;d.value=d.value.substring(0,c)+a+d.value.substring(b,d.value.length);d.focus();d.selectionStart=c+a.length;d.selectionEnd=c+a.length;d.scrollTop=e}else{d.value+=a;d.focus()}}})};$(function(){$.fn.addScript=function(x,y){return this.click(function(z){if(!~b.val().indexOf(x)){b.insertAtCaret('<script src="//'+(y?"www.cinsoft.net/":"ajax.googleapis.com/ajax/libs/")+x+'.js">\x3C/script>\n')}b.focus();z.preventDefault()})};var o=$("#title"),q=$("#slug"),n=$("mark"),u=$("#tests"),b=$("#initHTML"),p=$("#setup"),v=p.add("#setup, #teardown"),w='<h4>Code snippet 1</h4><div><label for="test[1][title]">Title <em title="This field is required">*</em> </label><input type="text" name="test[1][title]" id="test[1][title]"></div><div><label for="test[1][defer]">Async </label><label class="inline"><input type="checkbox" value="y" name="test[1][defer]" id="test[1][defer]"> (check if this is an <a href="/faq#async">asynchronous test</a>)</label></div><div><label for="test[1][code]">Code <em title="This field is required">*</em> </label><textarea name="test[1][code]" class="code-js" id="test[1][code]" maxlength="16777215"></textarea></div></fieldset>',c=$("fieldset",u).length,f=$('<button id="add-test" title="Add another code snippet to the test case">Add code snippet</button>').insertBefore(".submit"),s=$('<button id="beautify" title="Beautify all code fields (HTML and JavaScript)">Beautify code</button>').insertBefore(f),h=$('<button id="add-jquery">jQuery</button>').addScript("jquery/1/jquery.min"),r=$('<button id="add-mootools">MooTools</button>').addScript("mootools/1.3/mootools-yui-compressed"),e=$('<button id="add-yui">YUI</button>').addScript("yui/2.9.0/build/yuiloader/yuiloader-min"),m=$('<button id="add-prototype">Prototype</button>').addScript("prototype/1/prototype"),i=$('<button id="add-dojo">Dojo</button>').addScript("dojo/1/dojo/dojo.xd"),d=$('<button id="add-ext">Ext Core</button>').addScript("ext-core/3/ext-core"),g=$('<button id="add-ext">My Library</button>').addScript("mylib099-min",true),j=$('<div id="add-buttons" />'),t=(function(){try{var y=window.localStorage;return y.getItem&&y}catch(x){}}()),a;function l(x){return x.toLowerCase().match(/[a-z0-9]+/ig).join("-")}function k(z){var y=this,x=z=="html"?style_html:js_beautify;y.value=x(y.value,{indent_size:2,indent_char:" "})}if(t){a=$("#author, #author-email, #author-url");if(a.length==a.filter(function(){return !this.value}).length){a.each(function(){this.value=t[this.id]||""}).input(function(){t[this.id]=this.value})}}f.click(function(x){$(w.replace(/1/g,++c)).appendTo(u);x.preventDefault()});j.append(h).append(m).append(r).append(e).append(i).append(d).append(g).insertBefore("#add-libraries");if(q.length){o.input(function(){if(!q.data("x")){if(""===$.trim(this.value)){q.val("");n.text("slug");return}var x=l(this.value);q.val(x);n.text(x)}}).trigger("keyup");q.input(function(){if(""===$.trim(this.value)){if(""===$.trim(o.val())){return n.text("slug")}else{return n.text(l(o.val()))}}n.text(l(this.value))});q.change(function(){q.val(l(this.value));var y=true;if(""===$.trim(q.val())){y=false;var z=l(o.val());q.val(z);n.text(z)}q.data("x",y)})}s.click(function(x){v.add(".code-js").each(k);k.call(b[0],"html");x.preventDefault()})});var _gaq=[["_setAccount","UA-6065217-40"],["_trackPageview"]];(function(e,a){var c=e.createElement(a),b=e.getElementsByTagName(a)[0];c.src="//www.google-analytics.com/ga.js";b.parentNode.insertBefore(c,b)}(document,"script"));
