"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9735],{89735:function(e,t,n){n.d(t,{Z:function(){return remarkGfm}});var i=n(87842);let r=regexCheck(/[A-Za-z]/),o=regexCheck(/[\dA-Za-z]/);function markdownLineEnding(e){return null!==e&&e<-2}function markdownLineEndingOrSpace(e){return null!==e&&(e<0||32===e)}function markdownSpace(e){return -2===e||-1===e||32===e}regexCheck(/[#-'*+\--9=?A-Z^-~]/),regexCheck(/\d/),regexCheck(/[\dA-Fa-f]/),regexCheck(/[!-/:-@[-`{-~]/);let l=regexCheck(/[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/),a=regexCheck(/\s/);function regexCheck(e){return function(t){return null!==t&&e.test(String.fromCharCode(t))}}let u={tokenize:function(e,t,n){let i=0;return function wwwPrefixInside(t){return(87===t||119===t)&&i<3?(i++,e.consume(t),wwwPrefixInside):46===t&&3===i?(e.consume(t),wwwPrefixAfter):n(t)};function wwwPrefixAfter(e){return null===e?n(e):t(e)}},partial:!0},c={tokenize:function(e,t,n){let i,r,o;return domainInside;function domainInside(t){return 46===t||95===t?e.check(f,domainAfter,domainAtPunctuation)(t):null===t||markdownLineEndingOrSpace(t)||a(t)||45!==t&&l(t)?domainAfter(t):(o=!0,e.consume(t),domainInside)}function domainAtPunctuation(t){return 95===t?i=!0:(r=i,i=void 0),e.consume(t),domainInside}function domainAfter(e){return r||i||!o?n(e):t(e)}},partial:!0},s={tokenize:function(e,t){let n=0,i=0;return pathInside;function pathInside(r){return 40===r?(n++,e.consume(r),pathInside):41===r&&i<n?pathAtPunctuation(r):33===r||34===r||38===r||39===r||41===r||42===r||44===r||46===r||58===r||59===r||60===r||63===r||93===r||95===r||126===r?e.check(f,t,pathAtPunctuation)(r):null===r||markdownLineEndingOrSpace(r)||a(r)?t(r):(e.consume(r),pathInside)}function pathAtPunctuation(t){return 41===t&&i++,e.consume(t),pathInside}},partial:!0},f={tokenize:function(e,t,n){return trail;function trail(i){return 33===i||34===i||39===i||41===i||42===i||44===i||46===i||58===i||59===i||63===i||95===i||126===i?(e.consume(i),trail):38===i?(e.consume(i),trailCharRefStart):93===i?(e.consume(i),trailBracketAfter):60===i||null===i||markdownLineEndingOrSpace(i)||a(i)?t(i):n(i)}function trailBracketAfter(e){return null===e||40===e||91===e||markdownLineEndingOrSpace(e)||a(e)?t(e):trail(e)}function trailCharRefStart(t){return r(t)?function trailCharRefInside(t){return 59===t?(e.consume(t),trail):r(t)?(e.consume(t),trailCharRefInside):n(t)}(t):n(t)}},partial:!0},h={tokenize:function(e,t,n){return function(t){return e.consume(t),after};function after(e){return o(e)?n(e):t(e)}},partial:!0},d={tokenize:function(e,t,n){let i=this;return function(t){return 87!==t&&119!==t||!previousWww.call(i,i.previous)||previousUnbalanced(i.events)?n(t):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(u,e.attempt(c,e.attempt(s,wwwAfter),n),n)(t))};function wwwAfter(n){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(n)}},previous:previousWww},p={tokenize:function(e,t,n){let i=this,o="",u=!1;return function(t){return(72===t||104===t)&&previousProtocol.call(i,i.previous)&&!previousUnbalanced(i.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),o+=String.fromCodePoint(t),e.consume(t),protocolPrefixInside):n(t)};function protocolPrefixInside(t){if(r(t)&&o.length<5)return o+=String.fromCodePoint(t),e.consume(t),protocolPrefixInside;if(58===t){let n=o.toLowerCase();if("http"===n||"https"===n)return e.consume(t),protocolSlashesInside}return n(t)}function protocolSlashesInside(t){return 47===t?(e.consume(t),u)?afterProtocol:(u=!0,protocolSlashesInside):n(t)}function afterProtocol(t){return null===t||null!==t&&(t<32||127===t)||markdownLineEndingOrSpace(t)||a(t)||l(t)?n(t):e.attempt(c,e.attempt(s,protocolAfter),n)(t)}function protocolAfter(n){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(n)}},previous:previousProtocol},g={tokenize:function(e,t,n){let i,l;let a=this;return function(t){return!gfmAtext(t)||!previousEmail.call(a,a.previous)||previousUnbalanced(a.events)?n(t):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),function atext(t){return gfmAtext(t)?(e.consume(t),atext):64===t?(e.consume(t),emailDomain):n(t)}(t))};function emailDomain(t){return 46===t?e.check(h,emailDomainAfter,emailDomainDot)(t):45===t||95===t||o(t)?(l=!0,e.consume(t),emailDomain):emailDomainAfter(t)}function emailDomainDot(t){return e.consume(t),i=!0,emailDomain}function emailDomainAfter(o){return l&&i&&r(a.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(o)):n(o)}},previous:previousEmail},m={},k={text:m},b=48;for(;b<123;)m[b]=g,58==++b?b=65:91===b&&(b=97);function previousWww(e){return null===e||40===e||42===e||95===e||91===e||93===e||126===e||markdownLineEndingOrSpace(e)}function previousProtocol(e){return!r(e)}function previousEmail(e){return!(47===e||gfmAtext(e))}function gfmAtext(e){return 43===e||45===e||46===e||95===e||o(e)}function previousUnbalanced(e){let t=e.length,n=!1;for(;t--;){let i=e[t][1];if(("labelLink"===i.type||"labelImage"===i.type)&&!i._balanced){n=!0;break}if(i._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}m[43]=g,m[45]=g,m[46]=g,m[95]=g,m[72]=[g,p],m[104]=[g,p],m[87]=[g,d],m[119]=[g,d];var F=n(8466),x=n(54951),D=n(36910);let A={tokenize:function(e,t,n){let i=this;return(0,x.f)(e,function(e){let r=i.events[i.events.length-1];return r&&"gfmFootnoteDefinitionIndent"===r[1].type&&4===r[2].sliceSerialize(r[1],!0).length?t(e):n(e)},"gfmFootnoteDefinitionIndent",5)},partial:!0};function tokenizePotentialGfmFootnoteCall(e,t,n){let i;let r=this,o=r.events.length,l=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);for(;o--;){let e=r.events[o][1];if("labelImage"===e.type){i=e;break}if("gfmFootnoteCall"===e.type||"labelLink"===e.type||"label"===e.type||"image"===e.type||"link"===e.type)break}return function(o){if(!i||!i._balanced)return n(o);let a=(0,D.d)(r.sliceSerialize({start:i.end,end:r.now()}));return 94===a.codePointAt(0)&&l.includes(a.slice(1))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(o),e.exit("gfmFootnoteCallLabelMarker"),t(o)):n(o)}}function resolveToPotentialGfmFootnoteCall(e,t){let n=e.length;for(;n--;)if("labelImage"===e[n][1].type&&"enter"===e[n][0]){e[n][1];break}e[n+1][1].type="data",e[n+3][1].type="gfmFootnoteCallLabelMarker";let i={type:"gfmFootnoteCall",start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},r={type:"gfmFootnoteCallMarker",start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};r.end.column++,r.end.offset++,r.end._bufferIndex++;let o={type:"gfmFootnoteCallString",start:Object.assign({},r.end),end:Object.assign({},e[e.length-1][1].start)},l={type:"chunkString",contentType:"string",start:Object.assign({},o.start),end:Object.assign({},o.end)},a=[e[n+1],e[n+2],["enter",i,t],e[n+3],e[n+4],["enter",r,t],["exit",r,t],["enter",o,t],["enter",l,t],["exit",l,t],["exit",o,t],e[e.length-2],e[e.length-1],["exit",i,t]];return e.splice(n,e.length-n+1,...a),e}function tokenizeGfmFootnoteCall(e,t,n){let i;let r=this,o=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),l=0;return function(t){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(t),e.exit("gfmFootnoteCallLabelMarker"),callStart};function callStart(t){return 94!==t?n(t):(e.enter("gfmFootnoteCallMarker"),e.consume(t),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",callData)}function callData(a){if(l>999||93===a&&!i||null===a||91===a||markdownLineEndingOrSpace(a))return n(a);if(93===a){e.exit("chunkString");let i=e.exit("gfmFootnoteCallString");return o.includes((0,D.d)(r.sliceSerialize(i)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(a),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):n(a)}return markdownLineEndingOrSpace(a)||(i=!0),l++,e.consume(a),92===a?callEscape:callData}function callEscape(t){return 91===t||92===t||93===t?(e.consume(t),l++,callData):callData(t)}}function tokenizeDefinitionStart(e,t,n){let i,r;let o=this,l=o.parser.gfmFootnotes||(o.parser.gfmFootnotes=[]),a=0;return function(t){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(t),e.exit("gfmFootnoteDefinitionLabelMarker"),labelAtMarker};function labelAtMarker(t){return 94===t?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(t),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",labelInside):n(t)}function labelInside(t){if(a>999||93===t&&!r||null===t||91===t||markdownLineEndingOrSpace(t))return n(t);if(93===t){e.exit("chunkString");let n=e.exit("gfmFootnoteDefinitionLabelString");return i=(0,D.d)(o.sliceSerialize(n)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(t),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),labelAfter}return markdownLineEndingOrSpace(t)||(r=!0),a++,e.consume(t),92===t?labelEscape:labelInside}function labelEscape(t){return 91===t||92===t||93===t?(e.consume(t),a++,labelInside):labelInside(t)}function labelAfter(t){return 58===t?(e.enter("definitionMarker"),e.consume(t),e.exit("definitionMarker"),l.includes(i)||l.push(i),(0,x.f)(e,whitespaceAfter,"gfmFootnoteDefinitionWhitespace")):n(t)}function whitespaceAfter(e){return t(e)}}function tokenizeDefinitionContinuation(e,t,n){return e.check(F.w,t,e.attempt(A,t,n))}function gfmFootnoteDefinitionEnd(e){e.exit("gfmFootnoteDefinition")}var C=n(98391),y=n(93302),w=n(27828);let EditMap=class EditMap{constructor(){this.map=[]}add(e,t,n){!function(e,t,n,i){let r=0;if(0!==n||0!==i.length){for(;r<e.map.length;){if(e.map[r][0]===t){e.map[r][1]+=n,e.map[r][2].push(...i);return}r+=1}e.map.push([t,n,i])}}(this,e,t,n)}consume(e){if(this.map.sort((e,t)=>e[0]-t[0]),0===this.map.length)return;let t=this.map.length,n=[];for(;t>0;)t-=1,n.push(e.slice(this.map[t][0]+this.map[t][1])),n.push(this.map[t][2]),e.length=this.map[t][0];n.push([...e]),e.length=0;let i=n.pop();for(;i;)e.push(...i),i=n.pop();this.map.length=0}};let v={flow:{null:{tokenize:function(e,t,n){let i;let r=this,o=0,l=0;return function(e){let t=r.events.length-1;for(;t>-1;){let e=r.events[t][1].type;if("lineEnding"===e||"linePrefix"===e)t--;else break}let i=t>-1?r.events[t][1].type:null,o="tableHead"===i||"tableRow"===i?bodyRowStart:headRowBefore;return o===bodyRowStart&&r.parser.lazy[r.now().line]?n(e):o(e)};function headRowBefore(t){return e.enter("tableHead"),e.enter("tableRow"),124===t||(i=!0,l+=1),headRowBreak(t)}function headRowBreak(t){return null===t?n(t):markdownLineEnding(t)?l>1?(l=0,r.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),headDelimiterStart):n(t):markdownSpace(t)?(0,x.f)(e,headRowBreak,"whitespace")(t):(l+=1,i&&(i=!1,o+=1),124===t)?(e.enter("tableCellDivider"),e.consume(t),e.exit("tableCellDivider"),i=!0,headRowBreak):(e.enter("data"),headRowData(t))}function headRowData(t){return null===t||124===t||markdownLineEndingOrSpace(t)?(e.exit("data"),headRowBreak(t)):(e.consume(t),92===t?headRowEscape:headRowData)}function headRowEscape(t){return 92===t||124===t?(e.consume(t),headRowData):headRowData(t)}function headDelimiterStart(t){return(r.interrupt=!1,r.parser.lazy[r.now().line])?n(t):(e.enter("tableDelimiterRow"),i=!1,markdownSpace(t))?(0,x.f)(e,headDelimiterBefore,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(t):headDelimiterBefore(t)}function headDelimiterBefore(t){return 45===t||58===t?headDelimiterValueBefore(t):124===t?(i=!0,e.enter("tableCellDivider"),e.consume(t),e.exit("tableCellDivider"),headDelimiterCellBefore):n(t)}function headDelimiterCellBefore(t){return markdownSpace(t)?(0,x.f)(e,headDelimiterValueBefore,"whitespace")(t):headDelimiterValueBefore(t)}function headDelimiterValueBefore(t){return 58===t?(l+=1,i=!0,e.enter("tableDelimiterMarker"),e.consume(t),e.exit("tableDelimiterMarker"),headDelimiterLeftAlignmentAfter):45===t?(l+=1,headDelimiterLeftAlignmentAfter(t)):null===t||markdownLineEnding(t)?headDelimiterCellAfter(t):n(t)}function headDelimiterLeftAlignmentAfter(t){return 45===t?(e.enter("tableDelimiterFiller"),function headDelimiterFiller(t){return 45===t?(e.consume(t),headDelimiterFiller):58===t?(i=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(t),e.exit("tableDelimiterMarker"),headDelimiterRightAlignmentAfter):(e.exit("tableDelimiterFiller"),headDelimiterRightAlignmentAfter(t))}(t)):n(t)}function headDelimiterRightAlignmentAfter(t){return markdownSpace(t)?(0,x.f)(e,headDelimiterCellAfter,"whitespace")(t):headDelimiterCellAfter(t)}function headDelimiterCellAfter(r){return 124===r?headDelimiterBefore(r):null===r||markdownLineEnding(r)?i&&o===l?(e.exit("tableDelimiterRow"),e.exit("tableHead"),t(r)):n(r):n(r)}function bodyRowStart(t){return e.enter("tableRow"),bodyRowBreak(t)}function bodyRowBreak(n){return 124===n?(e.enter("tableCellDivider"),e.consume(n),e.exit("tableCellDivider"),bodyRowBreak):null===n||markdownLineEnding(n)?(e.exit("tableRow"),t(n)):markdownSpace(n)?(0,x.f)(e,bodyRowBreak,"whitespace")(n):(e.enter("data"),bodyRowData(n))}function bodyRowData(t){return null===t||124===t||markdownLineEndingOrSpace(t)?(e.exit("data"),bodyRowBreak(t)):(e.consume(t),92===t?bodyRowEscape:bodyRowData)}function bodyRowEscape(t){return 92===t||124===t?(e.consume(t),bodyRowData):bodyRowData(t)}},resolveAll:function(e,t){let n,i,r,o=-1,l=!0,a=0,u=[0,0,0,0],c=[0,0,0,0],s=!1,f=0,h=new EditMap;for(;++o<e.length;){let d=e[o],p=d[1];"enter"===d[0]?"tableHead"===p.type?(s=!1,0!==f&&(flushTableEnd(h,t,f,n,i),i=void 0,f=0),n={type:"table",start:Object.assign({},p.start),end:Object.assign({},p.end)},h.add(o,0,[["enter",n,t]])):"tableRow"===p.type||"tableDelimiterRow"===p.type?(l=!0,r=void 0,u=[0,0,0,0],c=[0,o+1,0,0],s&&(s=!1,i={type:"tableBody",start:Object.assign({},p.start),end:Object.assign({},p.end)},h.add(o,0,[["enter",i,t]])),a="tableDelimiterRow"===p.type?2:i?3:1):a&&("data"===p.type||"tableDelimiterMarker"===p.type||"tableDelimiterFiller"===p.type)?(l=!1,0===c[2]&&(0!==u[1]&&(c[0]=c[1],r=flushCell(h,t,u,a,void 0,r),u=[0,0,0,0]),c[2]=o)):"tableCellDivider"===p.type&&(l?l=!1:(0!==u[1]&&(c[0]=c[1],r=flushCell(h,t,u,a,void 0,r)),c=[(u=c)[1],o,0,0])):"tableHead"===p.type?(s=!0,f=o):"tableRow"===p.type||"tableDelimiterRow"===p.type?(f=o,0!==u[1]?(c[0]=c[1],r=flushCell(h,t,u,a,o,r)):0!==c[1]&&(r=flushCell(h,t,c,a,o,r)),a=0):a&&("data"===p.type||"tableDelimiterMarker"===p.type||"tableDelimiterFiller"===p.type)&&(c[3]=o)}for(0!==f&&flushTableEnd(h,t,f,n,i),h.consume(t.events),o=-1;++o<t.events.length;){let e=t.events[o];"enter"===e[0]&&"table"===e[1].type&&(e[1]._align=function(e,t){let n=!1,i=[];for(;t<e.length;){let r=e[t];if(n){if("enter"===r[0])"tableContent"===r[1].type&&i.push("tableDelimiterMarker"===e[t+1][1].type?"left":"none");else if("tableContent"===r[1].type){if("tableDelimiterMarker"===e[t-1][1].type){let e=i.length-1;i[e]="left"===i[e]?"center":"right"}}else if("tableDelimiterRow"===r[1].type)break}else"enter"===r[0]&&"tableDelimiterRow"===r[1].type&&(n=!0);t+=1}return i}(t.events,o))}return e}}}};function flushCell(e,t,n,i,r,o){0!==n[0]&&(o.end=Object.assign({},getPoint(t.events,n[0])),e.add(n[0],0,[["exit",o,t]]));let l=getPoint(t.events,n[1]);if(o={type:1===i?"tableHeader":2===i?"tableDelimiter":"tableData",start:Object.assign({},l),end:Object.assign({},l)},e.add(n[1],0,[["enter",o,t]]),0!==n[2]){let r=getPoint(t.events,n[2]),o=getPoint(t.events,n[3]),l={type:"tableContent",start:Object.assign({},r),end:Object.assign({},o)};if(e.add(n[2],0,[["enter",l,t]]),2!==i){let i=t.events[n[2]],r=t.events[n[3]];if(i[1].end=Object.assign({},r[1].end),i[1].type="chunkText",i[1].contentType="text",n[3]>n[2]+1){let t=n[2]+1,i=n[3]-n[2]-1;e.add(t,i,[])}}e.add(n[3]+1,0,[["exit",l,t]])}return void 0!==r&&(o.end=Object.assign({},getPoint(t.events,r)),e.add(r,0,[["exit",o,t]]),o=void 0),o}function flushTableEnd(e,t,n,i,r){let o=[],l=getPoint(t.events,n);r&&(r.end=Object.assign({},l),o.push(["exit",r,t])),i.end=Object.assign({},l),o.push(["exit",i,t]),e.add(n+1,0,o)}function getPoint(e,t){let n=e[t],i="enter"===n[0]?"start":"end";return n[1][i]}let E={text:{91:{tokenize:function(e,t,n){let i=this;return function(t){return null===i.previous&&i._gfmTasklistFirstContentOfListItem?(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(t),e.exit("taskListCheckMarker"),inside):n(t)};function inside(t){return markdownLineEndingOrSpace(t)?(e.enter("taskListCheckValueUnchecked"),e.consume(t),e.exit("taskListCheckValueUnchecked"),close):88===t||120===t?(e.enter("taskListCheckValueChecked"),e.consume(t),e.exit("taskListCheckValueChecked"),close):n(t)}function close(t){return 93===t?(e.enter("taskListCheckMarker"),e.consume(t),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),after):n(t)}function after(i){return markdownLineEnding(i)?t(i):markdownSpace(i)?e.check({tokenize:spaceThenNonSpace},t,n)(i):n(i)}}}}};function spaceThenNonSpace(e,t,n){return(0,x.f)(e,function(e){return null===e?n(e):t(e)},"whitespace")}function ccount(e,t){let n=String(e);if("string"!=typeof t)throw TypeError("Expected character");let i=0,r=n.indexOf(t);for(;-1!==r;)i++,r=n.indexOf(t,r+t.length);return i}let convert=function(e){if(null==e)return ok;if("string"==typeof e)return castFactory(function(t){return t&&t.type===e});if("object"==typeof e)return Array.isArray(e)?function(e){let t=[],n=-1;for(;++n<e.length;)t[n]=convert(e[n]);return castFactory(function(...e){let n=-1;for(;++n<t.length;)if(t[n].call(this,...e))return!0;return!1})}(e):castFactory(function(t){let n;for(n in e)if(t[n]!==e[n])return!1;return!0});if("function"==typeof e)return castFactory(e);throw Error("Expected function, string, or object as test")};function castFactory(e){return function(t,...n){return!!(t&&"object"==typeof t&&"type"in t&&e.call(this,t,...n))}}function ok(){return!0}let visitParents=function(e,t,n,i){"function"==typeof t&&"function"!=typeof n&&(i=n,n=t,t=null);let r=convert(t),o=i?-1:1;(function factory(e,l,a){let u=e&&"object"==typeof e?e:{};if("string"==typeof u.type){let t="string"==typeof u.tagName?u.tagName:"string"==typeof u.name?u.name:void 0;Object.defineProperty(visit,"name",{value:"node ("+e.type+(t?"<"+t+">":"")+")"})}return visit;function visit(){var u;let c,s,f,h=[];if((!t||r(e,l,a[a.length-1]||null))&&!1===(h=Array.isArray(u=n(e,a))?u:"number"==typeof u?[!0,u]:[u])[0])return h;if(e.children&&"skip"!==h[0])for(s=(i?e.children.length:-1)+o,f=a.concat(e);s>-1&&s<e.children.length;){if(!1===(c=factory(e.children[s],s,f)())[0])return c;s="number"==typeof c[1]?c[1]:s+o}return h}})(e,void 0,[])()},S={}.hasOwnProperty,findAndReplace=function(e,t,n,i){let r,o;"string"==typeof t||t instanceof RegExp?(o=[[t,n]],r=i):(o=t,r=n),r||(r={});let l=convert(r.ignore||[]),a=function(e){let t=[];if("object"!=typeof e)throw TypeError("Expected array or object as schema");if(Array.isArray(e)){let n=-1;for(;++n<e.length;)t.push([toExpression(e[n][0]),toFunction(e[n][1])])}else{let n;for(n in e)S.call(e,n)&&t.push([toExpression(n),toFunction(e[n])])}return t}(o),u=-1;for(;++u<a.length;)visitParents(e,"text",visitor);return e;function visitor(e,t){let n,i=-1;for(;++i<t.length;){let e=t[i];if(l(e,n?n.children.indexOf(e):void 0,n))return;n=e}if(n)return function(e,t){let n=t[t.length-1],i=a[u][0],r=a[u][1],o=0,l=n.children.indexOf(e),c=!1,s=[];i.lastIndex=0;let f=i.exec(e.value);for(;f;){let n=f.index,l={index:f.index,input:f.input,stack:[...t,e]},a=r(...f,l);if("string"==typeof a&&(a=a.length>0?{type:"text",value:a}:void 0),!1!==a&&(o!==n&&s.push({type:"text",value:e.value.slice(o,n)}),Array.isArray(a)?s.push(...a):a&&s.push(a),o=n+f[0].length,c=!0),!i.global)break;f=i.exec(e.value)}return c?(o<e.value.length&&s.push({type:"text",value:e.value.slice(o)}),n.children.splice(l,1,...s)):s=[e],l+s.length}(e,t)}};function toExpression(e){return"string"==typeof e?RegExp(function(e){if("string"!=typeof e)throw TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}(e),"g"):e}function toFunction(e){return"function"==typeof e?e:()=>e}let L="phrasing",R=["autolink","link","image","label"],B={transforms:[function(e){findAndReplace(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,findUrl],[/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g,findEmail]],{ignore:["link","linkReference"]})}],enter:{literalAutolink:function(e){this.enter({type:"link",title:null,url:"",children:[]},e)},literalAutolinkEmail:enterLiteralAutolinkValue,literalAutolinkHttp:enterLiteralAutolinkValue,literalAutolinkWww:enterLiteralAutolinkValue},exit:{literalAutolink:function(e){this.exit(e)},literalAutolinkEmail:function(e){this.config.exit.autolinkEmail.call(this,e)},literalAutolinkHttp:function(e){this.config.exit.autolinkProtocol.call(this,e)},literalAutolinkWww:function(e){this.config.exit.data.call(this,e);let t=this.stack[this.stack.length-1];t.url="http://"+this.sliceSerialize(e)}}},O={unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:L,notInConstruct:R},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:L,notInConstruct:R},{character:":",before:"[ps]",after:"\\/",inConstruct:L,notInConstruct:R}]};function enterLiteralAutolinkValue(e){this.config.enter.autolinkProtocol.call(this,e)}function findUrl(e,t,n,i,r){let o="";if(!previous(r)||(/^w/i.test(t)&&(n=t+n,t="",o="http://"),!function(e){let t=e.split(".");return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}(n)))return!1;let l=function(e){let t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],i=n.indexOf(")"),r=ccount(e,"("),o=ccount(e,")");for(;-1!==i&&r>o;)e+=n.slice(0,i+1),i=(n=n.slice(i+1)).indexOf(")"),o++;return[e,n]}(n+i);if(!l[0])return!1;let a={type:"link",title:null,url:o+t+l[0],children:[{type:"text",value:t+l[0]}]};return l[1]?[a,{type:"text",value:l[1]}]:a}function findEmail(e,t,n,i){return!(!previous(i,!0)||/[-\d_]$/.test(n))&&{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function previous(e,t){let n=e.input.charCodeAt(e.index-1);return(0===e.index||a(n)||l(n))&&(!t||47!==n)}var I=n(12857);function association(e){return e.label||!e.identifier?e.label||"":(0,I.v)(e.identifier)}let j=/\r?\n|\r/g;function patternCompile(e){if(!e._compiled){let t=(e.atBreak?"[\\r\\n][\\t ]*":"")+(e.before?"(?:"+e.before+")":"");e._compiled=RegExp((t?"("+t+")":"")+(/[|\\{}()[\]^$+*?.-]/.test(e.character)?"\\":"")+e.character+(e.after?"(?:"+e.after+")":""),"g")}return e._compiled}function listInScope(e,t,n){if("string"==typeof t&&(t=[t]),!t||0===t.length)return n;let i=-1;for(;++i<t.length;)if(e.includes(t[i]))return!0;return!1}function safe(e,t,n){let i=(n.before||"")+(t||"")+(n.after||""),r=[],o=[],l={},a=-1;for(;++a<e.unsafe.length;){var u;let t;let n=e.unsafe[a];if(!listInScope(u=e.stack,n.inConstruct,!0)||listInScope(u,n.notInConstruct,!1))continue;let o=patternCompile(n);for(;t=o.exec(i);){let e="before"in n||!!n.atBreak,i="after"in n,o=t.index+(e?t[1].length:0);r.includes(o)?(l[o].before&&!e&&(l[o].before=!1),l[o].after&&!i&&(l[o].after=!1)):(r.push(o),l[o]={before:e,after:i})}}r.sort(numerical);let c=n.before?n.before.length:0,s=i.length-(n.after?n.after.length:0);for(a=-1;++a<r.length;){let e=r[a];!(e<c)&&!(e>=s)&&(!(e+1<s)||r[a+1]!==e+1||!l[e].after||l[e+1].before||l[e+1].after)&&(r[a-1]!==e-1||!l[e].before||l[e-1].before||l[e-1].after)&&(c!==e&&o.push(escapeBackslashes(i.slice(c,e),"\\")),c=e,!/[!-/:-@[-`{-~]/.test(i.charAt(e))||n.encode&&n.encode.includes(i.charAt(e))?(o.push("&#x"+i.charCodeAt(e).toString(16).toUpperCase()+";"),c++):o.push("\\"))}return o.push(escapeBackslashes(i.slice(c,s),n.after)),o.join("")}function numerical(e,t){return e-t}function escapeBackslashes(e,t){let n;let i=/\\(?=[!-/:-@[-`{-~])/g,r=[],o=[],l=e+t,a=-1,u=0;for(;n=i.exec(l);)r.push(n.index);for(;++a<r.length;)u!==r[a]&&o.push(e.slice(u,r[a])),o.push("\\"),u=r[a];return o.push(e.slice(u)),o.join("")}function track(e){let t=e||{},n=t.now||{},i=t.lineShift||0,r=n.line||1,o=n.column||1;return{move:function(e){let t=e||"",n=t.split(/\r?\n|\r/g),l=n[n.length-1];return r+=n.length-1,o=1===n.length?o+l.length:1+l.length+i,t},current:function(){return{now:{line:r,column:o},lineShift:i}},shift:function(e){i+=e}}}function enterFootnoteDefinition(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function enterFootnoteDefinitionLabelString(){this.buffer()}function exitFootnoteDefinitionLabelString(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=(0,D.d)(this.sliceSerialize(e)).toLowerCase()}function exitFootnoteDefinition(e){this.exit(e)}function enterFootnoteCall(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function enterFootnoteCallString(){this.buffer()}function exitFootnoteCallString(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=(0,D.d)(this.sliceSerialize(e)).toLowerCase()}function exitFootnoteCall(e){this.exit(e)}function footnoteReference(e,t,n,i){let r=track(i),o=r.move("[^"),l=n.enter("footnoteReference"),a=n.enter("reference");return o+=r.move(safe(n,association(e),{...r.current(),before:o,after:"]"})),a(),l(),o+=r.move("]")}function footnoteDefinition(e,t,n,i){let r=track(i),o=r.move("[^"),l=n.enter("footnoteDefinition"),a=n.enter("label");return o+=r.move(safe(n,association(e),{...r.current(),before:o,after:"]"})),a(),o+=r.move("]:"+(e.children&&e.children.length>0?" ":"")),r.shift(4),o+=r.move(function(e,t){let n;let i=[],r=0,o=0;for(;n=j.exec(e);)one(e.slice(r,n.index)),i.push(n[0]),r=n.index+n[0].length,o++;return one(e.slice(r)),i.join("");function one(e){i.push(t(e,o,!e))}}(function(e,t,n){let i=t.indexStack,r=e.children||[],o=t.createTracker(n),l=[],a=-1;for(i.push(-1);++a<r.length;){let n=r[a];i[i.length-1]=a,l.push(o.move(t.handle(n,e,t,{before:"\n",after:"\n",...o.current()}))),"list"!==n.type&&(t.bulletLastUsed=void 0),a<r.length-1&&l.push(o.move(function(e,t,n,i){let r=i.join.length;for(;r--;){let o=i.join[r](e,t,n,i);if(!0===o||1===o)break;if("number"==typeof o)return"\n".repeat(1+o);if(!1===o)return"\n\n<!---->\n\n"}return"\n\n"}(n,r[a+1],e,t)))}return i.pop(),l.join("")}(e,n,r.current()),map)),l(),o}function map(e,t,n){return 0===t?e:(n?"":"    ")+e}function containerPhrasing(e,t,n){let i=t.indexStack,r=e.children||[],o=[],l=-1,a=n.before;i.push(-1);let u=t.createTracker(n);for(;++l<r.length;){let c;let s=r[l];if(i[i.length-1]=l,l+1<r.length){let n=t.handle.handlers[r[l+1].type];n&&n.peek&&(n=n.peek),c=n?n(r[l+1],e,t,{before:"",after:"",...u.current()}).charAt(0):""}else c=n.after;o.length>0&&("\r"===a||"\n"===a)&&"html"===s.type&&(o[o.length-1]=o[o.length-1].replace(/(\r?\n|\r)$/," "),a=" ",(u=t.createTracker(n)).move(o.join(""))),o.push(u.move(t.handle(s,e,t,{...u.current(),before:a,after:c}))),a=o[o.length-1].slice(-1)}return i.pop(),o.join("")}footnoteReference.peek=function(){return"["},handleDelete.peek=function(){return"~"};let P={canContainEols:["delete"],enter:{strikethrough:function(e){this.enter({type:"delete",children:[]},e)}},exit:{strikethrough:function(e){this.exit(e)}}},z={unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"]}],handlers:{delete:handleDelete}};function handleDelete(e,t,n,i){let r=track(i),o=n.enter("strikethrough"),l=r.move("~~");return l+=containerPhrasing(e,n,{...r.current(),before:l,after:"~"})+r.move("~~"),o(),l}function inlineCode(e,t,n){let i=e.value||"",r="`",o=-1;for(;RegExp("(^|[^`])"+r+"([^`]|$)").test(i);)r+="`";for(/[^ \r\n]/.test(i)&&(/^[ \r\n]/.test(i)&&/[ \r\n]$/.test(i)||/^`|`$/.test(i))&&(i=" "+i+" ");++o<n.unsafe.length;){let e;let t=n.unsafe[o],r=patternCompile(t);if(t.atBreak)for(;e=r.exec(i);){let t=e.index;10===i.charCodeAt(t)&&13===i.charCodeAt(t-1)&&t--,i=i.slice(0,t)+" "+i.slice(e.index+1)}}return r+i+r}function defaultStringLength(e){return e.length}function toAlignment(e){let t="string"==typeof e?e.codePointAt(0):0;return 67===t||99===t?99:76===t||108===t?108:82===t||114===t?114:0}inlineCode.peek=function(){return"`"};let M={enter:{table:function(e){let t=e._align;this.enter({type:"table",align:t.map(e=>"none"===e?null:e),children:[]},e),this.setData("inTable",!0)},tableData:enterCell,tableHeader:enterCell,tableRow:function(e){this.enter({type:"tableRow",children:[]},e)}},exit:{codeText:function(e){let t=this.resume();this.getData("inTable")&&(t=t.replace(/\\([\\|])/g,replace));let n=this.stack[this.stack.length-1];n.value=t,this.exit(e)},table:function(e){this.exit(e),this.setData("inTable")},tableData:exit,tableHeader:exit,tableRow:exit}};function exit(e){this.exit(e)}function enterCell(e){this.enter({type:"tableCell",children:[]},e)}function replace(e,t){return"|"===t?t:e}let T={exit:{taskListCheckValueChecked:exitCheck,taskListCheckValueUnchecked:exitCheck,paragraph:function(e){let t=this.stack[this.stack.length-2];if(t&&"listItem"===t.type&&"boolean"==typeof t.checked){let e=this.stack[this.stack.length-1],n=e.children[0];if(n&&"text"===n.type){let i;let r=t.children,o=-1;for(;++o<r.length;){let e=r[o];if("paragraph"===e.type){i=e;break}}i===e&&(n.value=n.value.slice(1),0===n.value.length?e.children.shift():e.position&&n.position&&"number"==typeof n.position.start.offset&&(n.position.start.column++,n.position.start.offset++,e.position.start=Object.assign({},n.position.start)))}}this.exit(e)}}},_={unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:function(e,t,n,i){let r=e.children[0],o="boolean"==typeof e.checked&&r&&"paragraph"===r.type,l="["+(e.checked?"x":" ")+"] ",a=track(i);o&&a.move(l);let u=function(e,t,n,i){let r=function(e){let t=e.options.listItemIndent||"tab";if(1===t||"1"===t)return"one";if("tab"!==t&&"one"!==t&&"mixed"!==t)throw Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}(n),o=n.bulletCurrent||function(e){let t=e.options.bullet||"*";if("*"!==t&&"+"!==t&&"-"!==t)throw Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}(n);t&&"list"===t.type&&t.ordered&&(o=("number"==typeof t.start&&t.start>-1?t.start:1)+(!1===n.options.incrementListMarker?0:t.children.indexOf(e))+o);let l=o.length+1;("tab"===r||"mixed"===r&&(t&&"list"===t.type&&t.spread||e.spread))&&(l=4*Math.ceil(l/4));let a=n.createTracker(i);a.move(o+" ".repeat(l-o.length)),a.shift(l);let u=n.enter("listItem"),c=n.indentLines(n.containerFlow(e,a.current()),function(e,t,n){return t?(n?"":" ".repeat(l))+e:(n?o:o+" ".repeat(l-o.length))+e});return u(),c}(e,t,n,{...i,...a.current()});return o&&(u=u.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,function(e){return e+l})),u}}};function exitCheck(e){let t=this.stack[this.stack.length-2];t.checked="taskListCheckValueChecked"===e.type}function remarkGfm(e={}){let t=this.data();function add(e,n){let i=t[e]?t[e]:t[e]=[];i.push(n)}add("micromarkExtensions",(0,i.W)([k,{document:{91:{tokenize:tokenizeDefinitionStart,continuation:{tokenize:tokenizeDefinitionContinuation},exit:gfmFootnoteDefinitionEnd}},text:{91:{tokenize:tokenizeGfmFootnoteCall},93:{add:"after",tokenize:tokenizePotentialGfmFootnoteCall,resolveTo:resolveToPotentialGfmFootnoteCall}}},function(e){let t=(e||{}).singleTilde,n={tokenize:function(e,n,i){let r=this.previous,o=this.events,l=0;return function(a){return 126===r&&"characterEscape"!==o[o.length-1][1].type?i(a):(e.enter("strikethroughSequenceTemporary"),function more(o){let a=(0,y.r)(r);if(126===o)return l>1?i(o):(e.consume(o),l++,more);if(l<2&&!t)return i(o);let u=e.exit("strikethroughSequenceTemporary"),c=(0,y.r)(o);return u._open=!c||2===c&&!!a,u._close=!a||2===a&&!!c,n(o)}(a))}},resolveAll:function(e,t){let n=-1;for(;++n<e.length;)if("enter"===e[n][0]&&"strikethroughSequenceTemporary"===e[n][1].type&&e[n][1]._close){let i=n;for(;i--;)if("exit"===e[i][0]&&"strikethroughSequenceTemporary"===e[i][1].type&&e[i][1]._open&&e[n][1].end.offset-e[n][1].start.offset==e[i][1].end.offset-e[i][1].start.offset){e[n][1].type="strikethroughSequence",e[i][1].type="strikethroughSequence";let r={type:"strikethrough",start:Object.assign({},e[i][1].start),end:Object.assign({},e[n][1].end)},o={type:"strikethroughText",start:Object.assign({},e[i][1].end),end:Object.assign({},e[n][1].start)},l=[["enter",r,t],["enter",e[i][1],t],["exit",e[i][1],t],["enter",o,t]],a=t.parser.constructs.insideSpan.null;a&&(0,C.d)(l,l.length,0,(0,w.C)(a,e.slice(i+1,n),t)),(0,C.d)(l,l.length,0,[["exit",o,t],["enter",e[n][1],t],["exit",e[n][1],t],["exit",r,t]]),(0,C.d)(e,i-1,n-i+3,l),n=i+l.length-2;break}}for(n=-1;++n<e.length;)"strikethroughSequenceTemporary"===e[n][1].type&&(e[n][1].type="data");return e}};return null==t&&(t=!0),{text:{126:n},insideSpan:{null:[n]},attentionMarkers:{null:[126]}}}(e),v,E])),add("fromMarkdownExtensions",[B,{enter:{gfmFootnoteDefinition:enterFootnoteDefinition,gfmFootnoteDefinitionLabelString:enterFootnoteDefinitionLabelString,gfmFootnoteCall:enterFootnoteCall,gfmFootnoteCallString:enterFootnoteCallString},exit:{gfmFootnoteDefinition:exitFootnoteDefinition,gfmFootnoteDefinitionLabelString:exitFootnoteDefinitionLabelString,gfmFootnoteCall:exitFootnoteCall,gfmFootnoteCallString:exitFootnoteCallString}},P,M,T]),add("toMarkdownExtensions",{extensions:[O,{unsafe:[{character:"[",inConstruct:["phrasing","label","reference"]}],handlers:{footnoteDefinition,footnoteReference}},z,function(e){let t=e||{},n=t.tableCellPadding,i=t.tablePipeAlign,r=t.stringLength,o=n?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:"\n",inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{table:function(e,t,n,i){return serializeData(function(e,t,n){let i=e.children,r=-1,o=[],l=t.enter("table");for(;++r<i.length;)o[r]=handleTableRowAsData(i[r],t,n);return l(),o}(e,n,i),e.align)},tableRow:function(e,t,n,i){let r=handleTableRowAsData(e,n,i),o=serializeData([r]);return o.slice(0,o.indexOf("\n"))},tableCell:handleTableCell,inlineCode:function(e,t,n){let i=inlineCode(e,t,n);return n.stack.includes("tableCell")&&(i=i.replace(/\|/g,"\\$&")),i}}};function handleTableCell(e,t,n,i){let r=n.enter("tableCell"),l=n.enter("phrasing"),a=containerPhrasing(e,n,{...i,before:o,after:o});return l(),r(),a}function serializeData(e,t){return function(e,t={}){let n=(t.align||[]).concat(),i=t.stringLength||defaultStringLength,r=[],o=[],l=[],a=[],u=0,c=-1;for(;++c<e.length;){let n=[],r=[],f=-1;for(e[c].length>u&&(u=e[c].length);++f<e[c].length;){var s;let o=null==(s=e[c][f])?"":String(s);if(!1!==t.alignDelimiters){let e=i(o);r[f]=e,(void 0===a[f]||e>a[f])&&(a[f]=e)}n.push(o)}o[c]=n,l[c]=r}let f=-1;if("object"==typeof n&&"length"in n)for(;++f<u;)r[f]=toAlignment(n[f]);else{let e=toAlignment(n);for(;++f<u;)r[f]=e}f=-1;let h=[],d=[];for(;++f<u;){let e=r[f],n="",i="";99===e?(n=":",i=":"):108===e?n=":":114===e&&(i=":");let o=!1===t.alignDelimiters?1:Math.max(1,a[f]-n.length-i.length),l=n+"-".repeat(o)+i;!1!==t.alignDelimiters&&((o=n.length+o+i.length)>a[f]&&(a[f]=o),d[f]=o),h[f]=l}o.splice(1,0,h),l.splice(1,0,d),c=-1;let p=[];for(;++c<o.length;){let e=o[c],n=l[c];f=-1;let i=[];for(;++f<u;){let o=e[f]||"",l="",c="";if(!1!==t.alignDelimiters){let e=a[f]-(n[f]||0),t=r[f];114===t?l=" ".repeat(e):99===t?e%2?(l=" ".repeat(e/2+.5),c=" ".repeat(e/2-.5)):c=l=" ".repeat(e/2):c=" ".repeat(e)}!1===t.delimiterStart||f||i.push("|"),!1!==t.padding&&!(!1===t.alignDelimiters&&""===o)&&(!1!==t.delimiterStart||f)&&i.push(" "),!1!==t.alignDelimiters&&i.push(l),i.push(o),!1!==t.alignDelimiters&&i.push(c),!1!==t.padding&&i.push(" "),(!1!==t.delimiterEnd||f!==u-1)&&i.push("|")}p.push(!1===t.delimiterEnd?i.join("").replace(/ +$/,""):i.join(""))}return p.join("\n")}(e,{align:t,alignDelimiters:i,padding:n,stringLength:r})}function handleTableRowAsData(e,t,n){let i=e.children,r=-1,o=[],l=t.enter("tableRow");for(;++r<i.length;)o[r]=handleTableCell(i[r],e,t,n);return l(),o}}(e),_]})}}}]);