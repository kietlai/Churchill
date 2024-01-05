(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3614],{43614:function(t){var e;e=function(){function Rule(t,e,r){return this.id=++Rule.highestId,this.name=t,this.symbols=e,this.postprocess=r,this}function State(t,e,r,i){this.rule=t,this.dot=e,this.reference=r,this.data=[],this.wantedBy=i,this.isComplete=this.dot===t.symbols.length}function Column(t,e){this.grammar=t,this.index=e,this.states=[],this.wants={},this.scannable=[],this.completed={}}function Grammar(t,e){this.rules=t,this.start=e||this.rules[0].name;var r=this.byName={};this.rules.forEach(function(t){r.hasOwnProperty(t.name)||(r[t.name]=[]),r[t.name].push(t)})}function StreamLexer(){this.reset("")}function Parser(t,e,r){if(t instanceof Grammar)var i=t,r=e;else var i=Grammar.fromCompiled(t,e);for(var s in this.grammar=i,this.options={keepHistory:!1,lexer:i.lexer||new StreamLexer},r||{})this.options[s]=r[s];this.lexer=this.options.lexer,this.lexerState=void 0;var n=new Column(i,0);this.table=[n],n.wants[i.start]=[],n.predict(i.start),n.process(),this.current=0}function getSymbolShortDisplay(t){var e=typeof t;if("string"===e)return t;if("object"===e){if(t.literal)return JSON.stringify(t.literal);if(t instanceof RegExp)return t.toString();if(t.type)return"%"+t.type;if(t.test)return"<"+String(t.test)+">";else throw Error("Unknown symbol type: "+t)}}return Rule.highestId=0,Rule.prototype.toString=function(t){var e=void 0===t?this.symbols.map(getSymbolShortDisplay).join(" "):this.symbols.slice(0,t).map(getSymbolShortDisplay).join(" ")+" ● "+this.symbols.slice(t).map(getSymbolShortDisplay).join(" ");return this.name+" → "+e},State.prototype.toString=function(){return"{"+this.rule.toString(this.dot)+"}, from: "+(this.reference||0)},State.prototype.nextState=function(t){var e=new State(this.rule,this.dot+1,this.reference,this.wantedBy);return e.left=this,e.right=t,e.isComplete&&(e.data=e.build(),e.right=void 0),e},State.prototype.build=function(){var t=[],e=this;do t.push(e.right.data),e=e.left;while(e.left);return t.reverse(),t},State.prototype.finish=function(){this.rule.postprocess&&(this.data=this.rule.postprocess(this.data,this.reference,Parser.fail))},Column.prototype.process=function(t){for(var e=this.states,r=this.wants,i=this.completed,s=0;s<e.length;s++){var n=e[s];if(n.isComplete){if(n.finish(),n.data!==Parser.fail){for(var o=n.wantedBy,a=o.length;a--;){var h=o[a];this.complete(h,n)}if(n.reference===this.index){var l=n.rule.name;(this.completed[l]=this.completed[l]||[]).push(n)}}}else{var l=n.rule.symbols[n.dot];if("string"!=typeof l){this.scannable.push(n);continue}if(r[l]){if(r[l].push(n),i.hasOwnProperty(l))for(var u=i[l],a=0;a<u.length;a++){var p=u[a];this.complete(n,p)}}else r[l]=[n],this.predict(l)}}},Column.prototype.predict=function(t){for(var e=this.grammar.byName[t]||[],r=0;r<e.length;r++){var i=e[r],s=this.wants[t],n=new State(i,0,this.index,s);this.states.push(n)}},Column.prototype.complete=function(t,e){var r=t.nextState(e);this.states.push(r)},Grammar.fromCompiled=function(t,e){var r=t.Lexer;t.ParserStart&&(e=t.ParserStart,t=t.ParserRules);var t=t.map(function(t){return new Rule(t.name,t.symbols,t.postprocess)}),i=new Grammar(t,e);return i.lexer=r,i},StreamLexer.prototype.reset=function(t,e){this.buffer=t,this.index=0,this.line=e?e.line:1,this.lastLineBreak=e?-e.col:0},StreamLexer.prototype.next=function(){if(this.index<this.buffer.length){var t=this.buffer[this.index++];return"\n"===t&&(this.line+=1,this.lastLineBreak=this.index),{value:t}}},StreamLexer.prototype.save=function(){return{line:this.line,col:this.index-this.lastLineBreak}},StreamLexer.prototype.formatError=function(t,e){var r=this.buffer;if("string"!=typeof r)return e+" at index "+(this.index-1);var i=r.split("\n").slice(Math.max(0,this.line-5),this.line),s=r.indexOf("\n",this.index);-1===s&&(s=r.length);var n=this.index-this.lastLineBreak,o=String(this.line).length;return e+(" at line "+this.line+" col "+n+":\n\n"+i.map(function(t,e){return pad(this.line-i.length+e+1,o)+" "+t},this).join("\n")+"\n"+pad("",o+n))+"^\n";function pad(t,e){var r=String(t);return Array(e-r.length+1).join(" ")+r}},Parser.fail={},Parser.prototype.feed=function(t){var e,r=this.lexer;for(r.reset(t,this.lexerState);;){try{if(!(e=r.next()))break}catch(t){var i=new Column(this.grammar,this.current+1);this.table.push(i);var s=Error(this.reportLexerError(t));throw s.offset=this.current,s.token=t.token,s}var n=this.table[this.current];this.options.keepHistory||delete this.table[this.current-1];var o=this.current+1,i=new Column(this.grammar,o);this.table.push(i);for(var a=void 0!==e.text?e.text:e.value,h=r.constructor===StreamLexer?e.value:e,l=n.scannable,u=l.length;u--;){var p=l[u],f=p.rule.symbols[p.dot];if(f.test?f.test(h):f.type?f.type===e.type:f.literal===a){var c=p.nextState({data:h,token:e,isToken:!0,reference:o-1});i.states.push(c)}}if(i.process(),0===i.states.length){var s=Error(this.reportError(e));throw s.offset=this.current,s.token=e,s}this.options.keepHistory&&(n.lexerState=r.save()),this.current++}return n&&(this.lexerState=r.save()),this.results=this.finish(),this},Parser.prototype.reportLexerError=function(t){var e,r,i=t.token;return i?(e="input "+JSON.stringify(i.text[0])+" (lexer error)",r=this.lexer.formatError(i,"Syntax error")):(e="input (lexer error)",r=t.message),this.reportErrorCommon(r,e)},Parser.prototype.reportError=function(t){var e=(t.type?t.type+" token: ":"")+JSON.stringify(void 0!==t.value?t.value:t),r=this.lexer.formatError(t,"Syntax error");return this.reportErrorCommon(r,e)},Parser.prototype.reportErrorCommon=function(t,e){var r=[];r.push(t);var i=this.table.length-2,s=this.table[i],n=s.states.filter(function(t){var e=t.rule.symbols[t.dot];return e&&"string"!=typeof e});return 0===n.length?(r.push("Unexpected "+e+". I did not expect any more input. Here is the state of my parse table:\n"),this.displayStateStack(s.states,r)):(r.push("Unexpected "+e+". Instead, I was expecting to see one of the following:\n"),n.map(function(t){return this.buildFirstStateStack(t,[])||[t]},this).forEach(function(t){var e=t[0],i=e.rule.symbols[e.dot],s=this.getSymbolDisplay(i);r.push("A "+s+" based on:"),this.displayStateStack(t,r)},this)),r.push(""),r.join("\n")},Parser.prototype.displayStateStack=function(t,e){for(var r,i=0,s=0;s<t.length;s++){var n=t[s],o=n.rule.toString(n.dot);o===r?i++:(i>0&&e.push("    ^ "+i+" more lines identical to this"),i=0,e.push("    "+o)),r=o}},Parser.prototype.getSymbolDisplay=function(t){return function(t){var e=typeof t;if("string"===e)return t;if("object"===e){if(t.literal)return JSON.stringify(t.literal);if(t instanceof RegExp)return"character matching "+t;if(t.type)return t.type+" token";if(t.test)return"token matching "+String(t.test);else throw Error("Unknown symbol type: "+t)}}(t)},Parser.prototype.buildFirstStateStack=function(t,e){if(-1!==e.indexOf(t))return null;if(0===t.wantedBy.length)return[t];var r=t.wantedBy[0],i=[t].concat(e),s=this.buildFirstStateStack(r,i);return null===s?null:[t].concat(s)},Parser.prototype.save=function(){var t=this.table[this.current];return t.lexerState=this.lexerState,t},Parser.prototype.restore=function(t){var e=t.index;this.current=e,this.table[e]=t,this.table.splice(e+1),this.lexerState=t.lexerState,this.results=this.finish()},Parser.prototype.rewind=function(t){if(!this.options.keepHistory)throw Error("set option `keepHistory` to enable rewinding");this.restore(this.table[t])},Parser.prototype.finish=function(){var t=[],e=this.grammar.start;return this.table[this.table.length-1].states.forEach(function(r){r.rule.name===e&&r.dot===r.rule.symbols.length&&0===r.reference&&r.data!==Parser.fail&&t.push(r)}),t.map(function(t){return t.data})},{Parser:Parser,Grammar:Grammar,Rule:Rule}},t.exports?t.exports=e():this.nearley=e()}}]);